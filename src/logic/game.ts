import {
  BACKGROUNDS, CURFEW_CHECK, DAILY_REFORM_CAP, DAY_END, DAY_START, DIFFICULTIES, GAME_MIN_PER_SEC, ROLLCALL_ON_TIME_END,
  SCHEDULE, WORK_CLOCKIN_DEADLINE, blockAt, fmtMoney, fmtTime, isOpen, nextBlock, type AttributeId, type ScheduleBlock,
} from './constants';
import {
  clampStat, createInitialState, makeDaily, xpForNextLevel, type CharacterProfile, type DailyTaskCategory, type DaySummary, type GameState, type Hearing, type NpcId, type Stats, type Violation,
} from './state';
import { generateDailyTasks, getQuestOverdueStatus } from './daily-plan';
import { addSentence, serveDay } from './sentence';
import { healStuckQuests } from './save';
import { VIOLATIONS } from '../data/violations';
import { ITEMS, itemName } from '../data/items';
import { QUESTS, QUEST_ORDER } from '../data/quests';

export type NoticeKind = 'info' | 'good' | 'bad' | 'warn' | 'quest';

export interface TickCtx {
  inCellblock: boolean;
  inRollcall: boolean;
  sprinting: boolean;
  moving: boolean;
  resting: boolean;
}

const IDLE_CTX: TickCtx = { inCellblock: true, inRollcall: false, sprinting: false, moving: false, resting: false };

export const NPC_NAMES: Record<string, string> = {
  bay: 'Chú Bảy', huy: 'Huy', lam: 'Lâm', lan: 'Quản giáo Lan', tung: 'Cán bộ Tùng',
  tu: 'Anh Tư', son: 'Sơn', khai: 'Khải', minh: 'Minh', mai: 'Chị Mai',
  phuc: 'Thầy Phúc', an: 'Y sĩ An',
};

export const WORK_QUOTA = 3;
export const EXTRA_SHIFT_MAX = 4;

export type PerkId = 'library_borrow' | 'bay_excuse' | 'huy_work' | 'an_heal' | 'canteen_discount';

export interface PerkInfo {
  id: PerkId;
  name: string;
  source: string;
  unlocked: boolean;
  desc: string;
  detail: string;
  usageStatus?: string;
}

type Listener = (...args: any[]) => void;

export class GameLogic {
  s: GameState;
  private listeners: Record<string, Listener[]> = {};
  private staminaWarned = false;

  constructor(state?: GameState) {
    this.s = state ?? createInitialState();
    healStuckQuests(this.s);
    // VIỆC 5: Khi load save cũ, không save nào được kết thúc vì hết ngày án
    if (this.s.ending && this.s.quests?.ky_xet_cuoi_cung?.status !== 'done') {
      this.s.ending = null as any;
    }
    delete this.s.flags.release_pending_chapter4;
    if (!this.s.daily.tasks || this.s.daily.tasks.length === 0) {
      this.s.daily.tasks = generateDailyTasks(this.s);
    }
  }

  checkDailyTasks(opts: { category?: DailyTaskCategory; taskId?: string; npcId?: NpcId }) {
    if (!this.s.daily.tasks || this.s.daily.tasks.length === 0) return;
    let anyCompleted = false;

    for (const t of this.s.daily.tasks) {
      if (t.done || t.skipped) continue;
      let matched = false;
      if (opts.taskId && t.id === opts.taskId) {
        matched = true;
      } else if (opts.category === 'duty' && t.category === 'duty') {
        if (t.id === 'duty_rollcall' && (this.s.daily.rollcall === 'ok' || this.s.daily.rollcall === 'late')) matched = true;
        if (t.id === 'duty_clockin' && this.s.daily.workClockedIn) matched = true;
        if (t.id === 'duty_work_units' && this.s.daily.workUnits >= 3) matched = true;
        if (t.id === 'duty_curfew' && this.s.daily.curfew === 'ok') matched = true;
      } else if (opts.category === 'relation' && t.category === 'relation') {
        if (opts.npcId && t.targetNpc === opts.npcId) matched = true;
      } else if (opts.category === 'personal' && t.category === 'personal') {
        if (t.id === 'personal_exercise' && this.s.daily.exercise > 0) matched = true;
        if (t.id === 'personal_reading' && this.s.flags?.read_book_today) matched = true;
        if (t.id === 'personal_quest') matched = true;
      }

      if (matched) {
        t.done = true;
        anyCompleted = true;
        this.gainXp(10, `Hoàn thành việc ngày: ${t.title}`);
        this.notify(`✔ Hoàn thành việc ngày: ${t.title} (+10 XP)`, 'good');
      }
    }

    if (anyCompleted) {
      const allDone = this.s.daily.tasks.every((t) => t.done);
      if (allDone && !this.s.daily.allTasksBonusAwarded) {
        this.s.daily.allTasksBonusAwarded = true;
        this.addReform(1, 'Hoàn thành tất cả 3 việc hôm nay');
        this.notify('🎉 Xuất sắc! Hoàn thành cả 3 việc hôm nay (+1 điểm cải tạo)', 'good');
      }
      this.commit();
    }
  }

  skipDailyTask(taskId: string) {
    if (!this.s.daily.tasks) return;
    const t = this.s.daily.tasks.find((task) => task.id === taskId);
    if (!t || t.done || t.skipped) return;
    t.skipped = true;
    this.notify(`Đã bỏ qua việc ngày: ${t.title}`, 'info');
    this.commit();
  }

  skipOverdueQuest(qId: string): boolean {
    const st = this.s.quests[qId];
    if (!st || st.status !== 'active') return false;
    const def = QUESTS[qId];
    if (!def || def.failure.startsWith('Không thể thất bại')) return false;
    const overdueStatus = getQuestOverdueStatus(qId, this.s);
    if (!overdueStatus.overdue) return false;

    this.addReform(-5, `Bỏ qua nhiệm vụ "${def.title}"`, false);
    this.finishQuest(qId, 'failed', 'Bỏ qua nhiệm vụ');
    return true;
  }

  on(ev: string, fn: Listener) {
    (this.listeners[ev] ??= []).push(fn);
  }
  emit(ev: string, ...args: unknown[]) {
    for (const fn of this.listeners[ev] ?? []) fn(...args);
  }
  notify(text: string, kind: NoticeKind = 'info') {
    this.emit('notice', text, kind);
  }
  /** Đánh dấu có thay đổi quan trọng → lưu ngay (chống mất vi phạm/nhân thưởng khi tải lại). */
  commit() {
    this.emit('save');
  }
  event(text: string) {
    this.s.daily.events.push(`${fmtTime(this.s.minute)} ${text}`);
  }

  // ───────────── Truy vấn ─────────────
  block(): ScheduleBlock {
    return blockAt(this.s.minute);
  }
  has(item: string, n = 1) {
    return (this.s.inventory[item] ?? 0) >= n;
  }
  rel(id: string) {
    return this.s.relations[id]?.value ?? 0;
  }
  flag(k: string) {
    return this.s.flags[k];
  }
  setFlag(k: string, v: number | boolean | string) {
    this.s.flags[k] = v;
  }
  qStatus(q: string) {
    return this.s.quests[q]?.status ?? 'locked';
  }
  qObj(q: string, obj: string) {
    return !!this.s.flags[`${q}:${obj}`];
  }
  qBranch(q: string) {
    return (this.s.flags[`${q}:branch`] as string) || '';
  }
  canteenBanned() {
    return ((this.s.flags.canteenBanUntil as number) ?? 0) >= this.s.day;
  }
  addClue(id: string, text: string) {
    if (!this.s.clues.includes(id)) {
      this.s.clues.push(id);
      this.notify(`Manh mối mới: ${text}`, 'good');
      this.event(`Thu thập manh mối: ${text}`);
      this.commit();
    }
  }

  // ───────────── Đặc quyền & Trợ giúp (Perks) ─────────────
  getReviewPeriod(day = this.s.day): number {
    return Math.floor((day - 1) / 4);
  }

  hasPerk(id: PerkId): boolean {
    switch (id) {
      case 'library_borrow':
        return this.qStatus('lop_nghe_dau') === 'done';
      case 'bay_excuse':
        return this.rel('bay') >= 20;
      case 'huy_work':
        return this.rel('huy') >= 20;
      case 'an_heal':
        return this.rel('an') >= 15;
      case 'canteen_discount':
        return this.s.stats.reform >= 30;
    }
  }

  canBayExcuse(): boolean {
    if (!this.hasPerk('bay_excuse')) return false;
    return this.s.flags.bay_excused_period !== this.getReviewPeriod();
  }

  useBayExcuse(target: 'rollcall' | 'work'): boolean {
    if (!this.canBayExcuse()) return false;
    this.s.flags.bay_excused_period = this.getReviewPeriod();
    this.s.flags.bay_excused_day = this.s.day;
    if (target === 'rollcall') {
      this.s.daily.rollcall = 'excused';
      const vio = this.s.violations.find((v) => v.day === this.s.day && v.id === 'missed_rollcall' && v.status !== 'overturned');
      if (vio) vio.status = 'overturned';
      this.notify('Chú Bảy đã đứng ra xin phép điểm danh giúp bạn (đặc quyền quan hệ, 1 lần/kỳ xét).', 'good');
    } else {
      this.s.daily.work = 'excused';
      const vio = this.s.violations.find((v) => v.day === this.s.day && v.id === 'skip_work' && v.status !== 'overturned');
      if (vio) vio.status = 'overturned';
      this.notify('Chú Bảy đã bảo lãnh xin phép nghỉ ca lao động giúp bạn (đặc quyền quan hệ, 1 lần/kỳ xét).', 'good');
    }
    this.commit();
    return true;
  }

  canAnHeal(): boolean {
    if (!this.hasPerk('an_heal')) return false;
    return this.s.flags.an_healed_day !== this.s.day;
  }

  useAnHeal(): { ok: boolean; reason?: string } {
    if (!this.hasPerk('an_heal')) {
      return { ok: false, reason: 'Cần đạt quan hệ Y sĩ An ≥ 15 để được khám và cấp thuốc miễn phí.' };
    }
    if (!this.canAnHeal()) {
      return { ok: false, reason: 'Hôm nay Y sĩ An đã phát thuốc bồi dưỡng cho bạn rồi (1 lần/ngày).' };
    }
    this.s.flags.an_healed_day = this.s.day;
    this.addStat('health', 25);
    this.addStat('stamina', 35);
    this.addStat('morale', 10);
    this.notify('Y sĩ An khám và cấp thuốc bồi dưỡng: +25 Máu, +35 Thể lực, +10 Tinh thần.', 'good');
    this.commit();
    return { ok: true };
  }

  getPerks(): PerkInfo[] {
    const period = this.getReviewPeriod();
    const bayUsed = this.s.flags.bay_excused_period === period;
    const anUsed = this.s.flags.an_healed_day === this.s.day;

    return [
      {
        id: 'library_borrow',
        name: 'Mượn sách thư viện',
        source: 'Nhiệm vụ "Bài học nghề đầu tiên"',
        unlocked: this.hasPerk('library_borrow'),
        desc: 'Mượn cẩm nang pháp luật & tài liệu kỹ thuật tại giá sách thư viện.',
        detail: 'Được phép mượn và đọc sách thư viện để giảm căng thẳng và tăng điểm cải tạo.',
        usageStatus: this.hasPerk('library_borrow') ? 'Đã kích hoạt' : 'Cần hoàn thành "Bài học nghề đầu tiên"',
      },
      {
        id: 'bay_excuse',
        name: 'Bảo lãnh xin phép — Chú Bảy',
        source: `Quan hệ Chú Bảy (${this.rel('bay')}/20)`,
        unlocked: this.hasPerk('bay_excuse'),
        desc: 'Xin phép vắng mặt khi lỡ điểm danh hoặc ca làm (1 lần/kỳ xét 4 ngày).',
        detail: 'Chuyển trạng thái nghĩa vụ lỡ thành "excused" hợp lệ, không bị tính vi phạm.',
        usageStatus: !this.hasPerk('bay_excuse')
          ? 'Cần quan hệ Chú Bảy ≥ 20'
          : bayUsed
            ? `Đã dùng trong kỳ xét ${period + 1}`
            : 'Khả dụng trong kỳ này',
      },
      {
        id: 'huy_work',
        name: 'Phụ việc ca xưởng — Huy',
        source: `Quan hệ Huy (${this.rel('huy')}/20)`,
        unlocked: this.hasPerk('huy_work'),
        desc: 'Làm chung ca xưởng, Huy phụ lắp thêm 1 sản phẩm vào chỉ tiêu.',
        detail: 'Khi hoàn thành sản phẩm trong ca sáng, Huy hỗ trợ thêm +1 sản phẩm chỉ tiêu.',
        usageStatus: this.hasPerk('huy_work') ? 'Đang kích hoạt mỗi ca sáng' : 'Cần quan hệ Huy ≥ 20',
      },
      {
        id: 'an_heal',
        name: 'Khám chữa miễn phí — Y sĩ An',
        source: `Quan hệ Y sĩ An (${this.rel('an')}/15)`,
        unlocked: this.hasPerk('an_heal'),
        desc: 'Khám bệnh và nhận thuốc bồi dưỡng thể lực miễn phí (1 lần/ngày).',
        detail: 'Hồi phục +25 Máu, +35 Thể lực và +10 Tinh thần tại Phòng y tế.',
        usageStatus: !this.hasPerk('an_heal')
          ? 'Cần quan hệ Y sĩ An ≥ 15'
          : anUsed
            ? 'Đã dùng hôm nay'
            : 'Khả dụng hôm nay',
      },
      {
        id: 'canteen_discount',
        name: 'Trợ giá Căn tin 10%',
        source: `Điểm cải tạo (${this.s.stats.reform}/30)`,
        unlocked: this.hasPerk('canteen_discount'),
        desc: 'Giảm 10% giá tất cả hàng hóa tại Căn tin nhờ chấp hành cải tạo tốt.',
        detail: 'Áp dụng tự động cho mọi món đồ khi mua tại quầy căn tin.',
        usageStatus: this.hasPerk('canteen_discount') ? 'Đang giảm giá 10%' : 'Cần điểm cải tạo ≥ 30',
      },
    ];
  }

  // ───────────── Tiến trình Level & Kỹ năng ─────────────
  gainXp(amount: number, reason?: string): { leveledUp: boolean; newLevel: number } {
    if (amount <= 0) return { leveledUp: false, newLevel: this.s.progression.level };
    this.s.progression.xp += amount;
    let leveledUp = false;
    while (this.s.progression.level < 10) {
      const needed = xpForNextLevel(this.s.progression.level);
      if (this.s.progression.xp >= needed) {
        this.s.progression.xp -= needed;
        this.s.progression.level += 1;
        this.s.progression.skillPoints += 1;
        leveledUp = true;
        this.notify(`Chúc mừng! Bạn đã đạt Cấp ${this.s.progression.level}! (+1 điểm kỹ năng)`, 'good');
        this.emit('levelUp', this.s.progression.level);
      } else {
        break;
      }
    }
    if (reason) {
      this.notify(`+${amount} XP (${reason})`, 'info');
    }
    this.commit();
    return { leveledUp, newLevel: this.s.progression.level };
  }

  spendSkillPoint(attr: AttributeId): boolean {
    if (this.s.progression.skillPoints <= 0) {
      this.notify('Không đủ điểm kỹ năng để nâng cấp.', 'warn');
      return false;
    }
    if (this.s.progression.attrs[attr] >= 5) {
      this.notify('Thuộc tính này đã đạt cấp tối đa (5/5).', 'warn');
      return false;
    }
    this.s.progression.skillPoints -= 1;
    this.s.progression.attrs[attr] += 1;
    const names: Record<AttributeId, string> = {
      endurance: 'Bền bỉ',
      agility: 'Khéo léo',
      perception: 'Quan sát',
      charisma: 'Giao tiếp',
    };
    this.notify(`Đã tăng ${names[attr]} lên ${this.s.progression.attrs[attr]}/5!`, 'good');
    this.commit();
    return true;
  }

  applyFlashbackChoice(choice: 'keep_doc' | 'help_victim' | 'chase_contact') {
    this.s.profile.flashbackChoice = choice;
    if (choice === 'keep_doc') {
      this.addClue('chung_tu_goc_kho_7', 'Mảnh chứng từ gốc nhặt được trước khi Kho số 7 bốc cháy, có chữ ký người gửi.');
      this.giveItem('manh_chung_tu_kho_7', 1);
      this.notify('Đã cất giữ Mảnh chứng từ xuất kho số 7.', 'quest');
    } else if (choice === 'help_victim') {
      this.changeRel('bay', 10, 'Chú Bảy biết chuyện Minh từng cứu người trong đám cháy kho');
      this.addStat('morale', 15);
      this.notify('Hành động cứu người trong đám cháy giúp bạn giữ được lương tri và củng cố tinh thần.', 'good');
    } else if (choice === 'chase_contact') {
      this.addClue('nhan_dang_ke_cam_dau', 'Nhìn rõ bóng kẻ thuê chở hàng có vết sẹo ở cổ và đi chiếc xe tải màu xanh rêu.');
      this.notify('Đã ghi nhớ nhân dạng kẻ cầm đầu vụ việc.', 'quest');
    }
    this.commit();
  }

  applyProfile(profile: CharacterProfile) {
    this.s.profile = { ...profile };
    const bg = BACKGROUNDS[profile.background] || BACKGROUNDS.mechanic;
    this.s.progression.attrs = {
      endurance: 1 + (bg.bonusAttrs.endurance || 0),
      agility: 1 + (bg.bonusAttrs.agility || 0),
      perception: 1 + (bg.bonusAttrs.perception || 0),
      charisma: 1 + (bg.bonusAttrs.charisma || 0),
    };
    this.commit();
  }

  // ───────────── Chỉ số ─────────────
  addStat(k: keyof Stats, delta: number) {
    if (k === 'money') {
      this.s.stats.money = Math.max(0, Math.round((this.s.stats.money + delta) * 10) / 10);
      this.checkMoneyObjective();
    } else if (k === 'hunger') {
      // Tương thích ngược: tăng hunger = giảm độ no (satiety)
      this.s.stats.satiety = clampStat(this.s.stats.satiety - delta);
    } else if (k === 'stress') {
      // Tương thích ngược: tăng stress = giảm tinh thần (morale)
      this.s.stats.morale = clampStat(this.s.stats.morale - delta);
    } else {
      this.s.stats[k] = clampStat(((this.s.stats[k] as number) ?? 0) + delta);
    }
    // Đồng bộ thuộc tính tương thích ngược
    this.s.stats.hunger = 100 - this.s.stats.satiety;
    this.s.stats.stress = 100 - this.s.stats.morale;
  }

  /** Cộng/trừ điểm cải tạo. `repeatable` = hoạt động lặp lại → bị giới hạn theo ngày. */
  addReform(delta: number, reason: string, repeatable = false): number {
    let d = delta;
    if (repeatable && d > 0) {
      d = Math.max(0, Math.min(d, DAILY_REFORM_CAP - this.s.daily.reformGained));
      this.s.daily.reformGained += d;
      if (d === 0) {
        this.notify('Đã đạt trần điểm cải tạo từ hoạt động lặp lại hôm nay.', 'info');
        return 0;
      }
    }
    const before = this.s.stats.reform;
    this.s.stats.reform = clampStat(before + d);
    const real = this.s.stats.reform - before;
    if (real !== 0) this.notify(`${real > 0 ? '+' : ''}${real} điểm cải tạo: ${reason}`, real > 0 ? 'good' : 'bad');
    if (before < 30 && this.s.stats.reform >= 30) {
      this.notify('⭐ ĐẶC QUYỀN MỚI: Điểm cải tạo đạt 30 — Giảm giá 10% toàn bộ mặt hàng Căn tin!', 'good');
    }
    return real;
  }

  changeRel(id: string, delta: number, memory?: string) {
    const r = this.s.relations[id];
    if (!r) return;
    const prevVal = r.value;
    r.value = Math.max(-100, Math.min(100, r.value + delta));
    r.met = true;
    if (memory) r.memories.push({ day: this.s.day, text: memory });
    if (delta !== 0) this.notify(`${NPC_NAMES[id]} ${delta > 0 ? '+' : ''}${delta} quan hệ`, delta > 0 ? 'good' : 'bad');
    this.checkPerkUnlocked(id, prevVal, r.value);
    this.checkDailyTasks({ category: 'relation', npcId: id as NpcId });
  }

  private checkPerkUnlocked(id: string, prev: number, next: number) {
    if (id === 'bay' && prev < 20 && next >= 20) {
      this.notify('⭐ ĐẶC QUYỀN MỚI: Chú Bảy nhận bảo lãnh xin phép vắng mặt (1 lần/kỳ xét)!', 'good');
    } else if (id === 'huy' && prev < 20 && next >= 20) {
      this.notify('⭐ ĐẶC QUYỀN MỚI: Huy hỗ trợ phụ việc làm ca xưởng (+1 sản phẩm/ca)!', 'good');
    } else if (id === 'an' && prev < 15 && next >= 15) {
      this.notify('⭐ ĐẶC QUYỀN MỚI: Y sĩ An nhận khám và cấp thuốc miễn phí (1 lần/ngày)!', 'good');
    }
  }

  meet(id: string) {
    const r = this.s.relations[id];
    if (r && !r.met) {
      r.met = true;
      this.commit();
    }
    this.checkDailyTasks({ category: 'relation', npcId: id as NpcId });
  }

  /** Nói chuyện thường ngày — mỗi NPC một lần/ngày, giảm căng thẳng nhẹ. */
  dailyTalk(id: string) {
    const r = this.s.relations[id];
    if (!r || r.lastTalkDay === this.s.day) return false;
    r.lastTalkDay = this.s.day;
    if (r.value >= -10) {
      const prevVal = r.value;
      r.value = Math.min(100, r.value + 1);
      this.checkPerkUnlocked(id, prevVal, r.value);
      this.addStat('morale', 3);
    }
    this.checkDailyTasks({ category: 'relation', npcId: id as NpcId });
    return true;
  }

  // ───────────── Vật phẩm ─────────────
  giveItem(id: string, n = 1) {
    this.s.inventory[id] = (this.s.inventory[id] ?? 0) + n;
    this.notify(`Nhận: ${itemName(id)}${n > 1 ? ' ×' + n : ''}`, 'good');
  }
  takeItem(id: string, n = 1): boolean {
    if (!this.has(id, n)) return false;
    this.s.inventory[id] -= n;
    if (this.s.inventory[id] <= 0) delete this.s.inventory[id];
    return true;
  }

  canteenOpen() {
    return this.s.minute >= 990 && this.s.minute < 1260;
  }

  itemPrice(id: string): number {
    const def = ITEMS[id];
    if (!def?.price) return 0;
    const diffMult = DIFFICULTIES[this.s.profile.difficulty]?.canteenPriceMultiplier ?? 1.0;
    const reformDiscount = this.hasPerk('canteen_discount') ? 0.9 : 1.0;
    return Math.max(1, Math.round(def.price * diffMult * reformDiscount));
  }

  purchaseError(id: string): string | null {
    const def = ITEMS[id];
    if (!def?.price) return 'Mặt hàng không bán.';
    if (!this.canteenOpen()) return 'Căn tin chỉ mở 16:30–21:00.';
    if (this.canteenBanned()) return `Bạn đang bị cấm mua căn tin đến hết ngày ${this.s.flags.canteenBanUntil}.`;
    const price = this.itemPrice(id);
    if (this.s.stats.money < price) return `Không đủ tiền (cần ${fmtMoney(price)}).`;
    return null;
  }

  buy(id: string): string | null {
    const error = this.purchaseError(id);
    if (error) return error;
    const price = this.itemPrice(id);
    this.addStat('money', -price);
    this.giveItem(id);
    if (id === 'mi_goi' && this.qStatus('mi_cho_huy') === 'active') this.completeObjective('mi_cho_huy', 'mua');
    this.commit();
    return null;
  }

  useItem(id: string): string | null {
    const def = ITEMS[id];
    if (!def) return 'Không rõ vật phẩm.';
    if (def.essential || def.quest) return 'Vật phẩm thiết yếu/nhiệm vụ — không thể dùng hay bỏ.';
    if (!def.use) return 'Không thể dùng vật phẩm này.';
    if (!this.takeItem(id)) return 'Không có vật phẩm.';
    const u = def.use;
    if (u.satiety) this.addStat('satiety', u.satiety);
    else if (u.hunger) this.addStat('satiety', -u.hunger);
    if (u.morale) this.addStat('morale', u.morale);
    else if (u.stress) this.addStat('morale', -u.stress);
    if (u.stamina) this.addStat('stamina', u.stamina);
    if (u.health) this.addStat('health', u.health);
    this.notify(`Đã dùng ${def.name}.`, 'info');
    this.commit();
    return null;
  }

  gift(npc: string, id: string): string | null {
    const def = ITEMS[id];
    const r = this.s.relations[npc];
    if (!def?.giftable || !r) return 'Không thể tặng vật này.';
    if (npc === 'lan' || npc === 'tung') return 'Cán bộ không nhận quà của phạm nhân.';
    if (r.lastGiftDay === this.s.day) return `${NPC_NAMES[npc]} đã nhận quà hôm nay rồi.`;
    if (!this.takeItem(id)) return 'Không có vật phẩm.';
    r.lastGiftDay = this.s.day;
    const liked = (npc === 'huy' && id === 'mi_goi') || (npc === 'bay' && id === 'tra_da') || (npc === 'lam' && id === 'dau_gio');
    this.changeRel(npc, liked ? 5 : 2);
    this.commit();
    return null;
  }

  // ───────────── Vi phạm ─────────────
  recordViolation(
    type: string,
    key: string,
    evidence: string,
    opts: { grace?: boolean; appealTag?: string; extra?: string } = {},
  ): Violation | null {
    const fullKey = `${type}:${key}`;
    if (this.s.violations.some((v) => v.key === fullKey)) return null; // một hành vi chỉ một hồ sơ
    const def = VIOLATIONS[type];
    if (!def) return null; // Never crash the render loop for an unrecognised event.
    const grace = !!opts.grace;
    const v: Violation = {
      id: `V${this.s.nextId++}`,
      key: fullKey,
      type,
      title: def.title + (grace ? ' (nhắc nhở người mới)' : ''),
      day: this.s.day,
      minute: Math.floor(this.s.minute),
      evidence,
      penalty: grace ? 'Nhắc nhở, không trừ điểm (ngày đầu nhập trại).' : def.penalty + (opts.extra ? ' ' + opts.extra : ''),
      reformDelta: 0,
      severity: grace ? 0 : def.severity,
      status: 'active',
      appealed: false,
      appealTag: opts.appealTag,
    };
    if (!grace) {
      const before = this.s.stats.reform;
      this.s.stats.reform = clampStat(before + def.reform);
      v.reformDelta = this.s.stats.reform - before;
      if (def.suspicion) this.addStat('suspicion', def.suspicion);
      if (def.morale) this.addStat('morale', def.morale);
      else if (def.stress) this.addStat('morale', -def.stress);
      // Kỷ luật khi tái phạm: 3 vi phạm còn hiệu lực trong 5 ngày
      const recent = this.s.violations.filter((x) => x.status !== 'overturned' && x.severity > 0 && x.day > this.s.day - 5);
      if (recent.length >= 2) {
        this.s.flags.canteenBanUntil = Math.max((this.s.flags.canteenBanUntil as number) ?? 0, this.s.day + 1);
        v.penalty += ' Tái phạm lần 3 trong 5 ngày → kỷ luật: cấm căn tin đến hết ngày mai.';
      }
    }
    this.s.violations.push(v);
    this.event(`Vi phạm: ${v.title}`);
    this.emit('violation', v);
    this.commit();
    return v;
  }

  appealCheck(v: Violation): { ok: boolean; reason: string } {
    if (v.appealTag === 'planted') {
      if (this.has('loi_khai_bay')) return { ok: true, reason: 'Lời khai của Chú Bảy xác nhận đàn em của Lâm lén vào buồng 3 lúc rạng sáng.' };
      if (this.rel('huy') >= 30) return { ok: true, reason: 'Huy đứng ra làm chứng: lưỡi dao không phải của bạn.' };
      return { ok: false, reason: 'Chưa có nhân chứng hay vật chứng cho thấy bạn bị gài. Hãy hỏi những người ở cùng buồng.' };
    }
    if (v.appealTag === 'newcomer') return { ok: true, reason: 'Ngày đầu nhập trại chưa được phổ biến đầy đủ.' };
    return { ok: false, reason: 'Hồ sơ có bằng chứng rõ ràng và bạn không đưa ra được căn cứ mới.' };
  }

  appeal(id: string): { ok: boolean; reason: string } {
    const v = this.s.violations.find((x) => x.id === id);
    if (!v) return { ok: false, reason: 'Không tìm thấy hồ sơ.' };
    if (v.appealed || v.status !== 'active') return { ok: false, reason: 'Hồ sơ này đã được giải trình.' };
    v.appealed = true;
    const r = this.appealCheck(v);
    if (r.ok) {
      v.status = 'overturned';
      this.s.stats.reform = clampStat(this.s.stats.reform - v.reformDelta);
      this.addStat('suspicion', -15);
      this.addStat('morale', 10);
      this.notify(`Khiếu nại thành công: hủy vi phạm "${v.title}", hoàn ${-v.reformDelta} điểm.`, 'good');
      if (v.appealTag === 'planted') {
        this.s.flags.lam_exposed = true;
        this.changeRel('lan', 8, 'Minh chứng minh được mình bị gài hàng cấm');
        this.changeRel('lam', -10, 'Bị Minh vạch trò gài dao lam');
      }
    } else {
      v.status = 'upheld';
      this.notify('Khiếu nại không được chấp nhận — giữ nguyên quyết định.', 'warn');
    }
    this.event(`Khiếu nại ${v.title}: ${r.ok ? 'thành công' : 'giữ nguyên'}`);
    this.commit();
    return r;
  }

  // ───────────── Phiên xem xét tăng án ─────────────
  startHearing(h: Hearing) {
    if (this.s.flags[`hearing:${h.id}`]) return;
    this.s.hearing = h;
    this.commit();
    this.emit('hearing', h);
  }

  resolveHearing(choice: 'confess' | 'explain' | 'silent'): { days: number; text: string } {
    const h = this.s.hearing;
    if (!h) return { days: 0, text: '' };
    let days = h.baseDays;
    let text = '';
    if (choice === 'confess') {
      days = Math.max(1, h.baseDays - 1);
      text = 'Bạn thành khẩn nhận lỗi. Hội đồng ghi nhận thái độ, giảm mức đề nghị.';
      this.addReform(2, 'Thành khẩn tại phiên xem xét');
    } else if (choice === 'explain') {
      const witnesses = this.s.flags.lam_threatened && (this.rel('huy') >= 20 || this.rel('bay') >= 20);
      if (witnesses) {
        days = 0;
        text = 'Nhân chứng xác nhận Lâm đe dọa và ra tay trước. Hội đồng không cộng án, nhưng vi phạm vẫn được ghi nhận.';
        this.addReform(6, 'Giải trình có nhân chứng');
      } else {
        days = h.baseDays;
        text = 'Không có nhân chứng xác nhận lời giải trình. Giữ nguyên mức đề nghị.';
      }
    } else {
      text = 'Bạn im lặng. Hội đồng quyết định theo hồ sơ.';
    }
    const added = days > 0 ? addSentence(this.s, days, h.title, this.s.day) : 0;
    if (days > 0 && added < days) text += ` (Đã chạm trần cộng án — chỉ cộng ${added} ngày.)`;
    text += added > 0 ? ` Kết quả: cộng ${added} ngày án.` : ' Kết quả: không cộng án.';
    this.s.flags[`hearing:${h.id}`] = true;
    this.s.hearing = null;
    this.event(`Phiên xem xét: ${h.title} → +${added} ngày`);
    this.notify(text, added > 0 ? 'bad' : 'good');
    this.commit();
    return { days: added, text };
  }

  // ───────────── Nhiệm vụ ─────────────
  startQuest(q: string) {
    const st = this.s.quests[q];
    if (st && st.status !== 'locked') return false;
    this.s.quests[q] = { status: 'active', step: 0, rewarded: false, startedDay: this.s.day, choices: [] };
    const def = QUESTS[q];
    if (def?.type === 'side') {
      this.notify(`🌟 NHIỆM VỤ PHỤ MỚI: ${def.title}! Xem trong Nhật ký hoặc bấm vào Thanh nhiệm vụ.`, 'good');
      this.emit('sideQuestUnlocked', q);
    } else {
      this.notify(`Nhiệm vụ mới: ${def?.title ?? q}`, 'quest');
    }
    this.event(`Nhận nhiệm vụ "${def?.title ?? q}"`);
    if (q === 'mi_cho_huy') this.s.flags['mi_cho_huy:deadline'] = this.s.day + 1;
    this.commit();
    return true;
  }

  /** Shared guard for EVERY quest objective, including optional and branch objectives.
   *  No future objective can advance while an earlier required step is incomplete. */
  objectiveBlockReason(q: string, obj: string): string | null {
    const def = QUESTS[q];
    if (!def) return 'Mục tiêu không tồn tại.';
    if (this.qStatus(q) !== 'active') {
      return this.qStatus(q) === 'done'
        ? `Nhiệm vụ "${def.title}" đã hoàn thành.`
        : `Chưa mở nhiệm vụ "${def.title}". ${def.requirement}`;
    }
    if (q === 'sach_thu_vien' && obj === 'muon_sach') {
      if (!this.hasPerk('library_borrow')) {
        return 'Chưa thể mượn sách: Cần hoàn thành "Bài học nghề đầu tiên" để nhận chứng chỉ nghề.';
      }
    }
    const targetIndex = def.objectives.findIndex((o) => o.id === obj);
    if (targetIndex < 0) return 'Bước nhiệm vụ không tồn tại.';
    const target = def.objectives[targetIndex];
    const branch = this.qBranch(q);
    if (target.branch && target.branch !== branch) {
      return branch
        ? 'Bước này không thuộc phương án bạn đã chọn.'
        : 'Hãy gặp người giao nhiệm vụ để lựa chọn phương án trước.';
    }
    for (let i = 0; i < targetIndex; i++) {
      const prev = def.objectives[i];
      if (prev.optional || (prev.branch && prev.branch !== branch)) continue;
      if (!this.s.flags[`${q}:${prev.id}`]) {
        return `Cần hoàn thành bước trước: ${prev.text}`;
      }
    }
    return null;
  }

  completeObjective(q: string, obj: string): boolean {
    const k = `${q}:${obj}`;
    if (this.s.flags[k] || this.qStatus(q) === 'done') return false;
    const reason = this.objectiveBlockReason(q, obj);
    if (reason) {
      this.notify(reason, 'warn');
      return false;
    }
    this.s.flags[k] = true;
    const def = QUESTS[q];
    const o = def.objectives.find((x) => x.id === obj);
    if (o) this.notify(`✔ ${o.text}`, 'quest');
    this.checkDailyTasks({ category: 'personal' });
    this.checkQuest(q);
    this.commit();
    return true;
  }

  chooseBranch(q: string, branch: string, outcome?: string) {
    if (this.qStatus(q) !== 'active' || this.qBranch(q) || !QUESTS[q]?.branches?.[branch]) return false;
    const def = QUESTS[q];
    const decisionObj = def.objectives.find((o) =>
      o.id === 'quyet_dinh' || o.id === 'quyet_dinh_im_lang' || o.id.startsWith('quyet_dinh')
    );
    const decisionId = decisionObj ? decisionObj.id : 'quyet_dinh';
    const reason = this.objectiveBlockReason(q, decisionId);
    if (reason) { this.notify(reason, 'warn'); return false; }
    this.s.flags[`${q}:branch`] = branch;
    const choiceText = QUESTS[q].branches?.[branch] ?? branch;
    this.s.quests[q]?.choices.push(choiceText);
    this.event(`Quyết định: ${choiceText}`);
    if (outcome && this.s.quests[q]) {
      this.s.quests[q].outcome = outcome;
    }
    this.completeObjective(q, decisionId);
    // The pay branch may be chosen when the player already has enough clean money.
    if (q === 'mon_no' && branch === 'pay') this.checkMoneyObjective();
    this.commit();
    return true;
  }

  private checkQuest(q: string) {
    const def = QUESTS[q];
    const branch = this.qBranch(q);
    const need = def.objectives.filter((o) => !o.optional && (!o.branch || o.branch === branch));
    if (def.branches && !branch) return;
    if (need.every((o) => this.s.flags[`${q}:${o.id}`])) this.finishQuest(q, 'done');
  }

  finishQuest(q: string, status: 'done' | 'failed', outcome?: string) {
    const st = this.s.quests[q];
    if (!st) return;
    if (st.status === status) {
      if (outcome && (!st.outcome || st.outcome === QUESTS[q]?.branches?.[this.qBranch(q)])) {
        st.outcome = outcome;
        this.commit();
      }
      return;
    }
    if (st.status !== 'active') return;
    const def = QUESTS[q];
    let branch = this.qBranch(q);
    if (status === 'done') {
      if (def?.branches && !branch && q === 'cam_do_im_lang') {
        branch = this.s.flags.accepted_lam_bribe ? 'accept' : 'refuse';
        this.s.flags[`${q}:branch`] = branch;
      }
      const incomplete = def.objectives.find((o) =>
        !o.optional && (!o.branch || o.branch === branch) && !this.s.flags[`${q}:${o.id}`]);
      if (incomplete || (def.branches && !branch)) {
        this.notify(incomplete
          ? `Chưa thể hoàn thành "${def.title}". Cần làm trước: ${incomplete.text}`
          : 'Cần lựa chọn phương án giải quyết nhiệm vụ trước.', 'warn');
        return;
      }
    }
    st.status = status;
    st.outcome = outcome ?? st.outcome ?? (def?.branches && branch ? def.branches[branch] : undefined);
    if (!st.rewarded) {
      st.rewarded = true; // đặt cờ trước khi trao thưởng để không bao giờ trao trùng
      this.grantQuestResult(q, status);
    }
    this.notify(`${status === 'done' ? 'Hoàn thành' : 'Thất bại'}: ${QUESTS[q].title}${st.outcome ? ' — ' + st.outcome : ''}`, status === 'done' ? 'quest' : 'bad');
    this.event(`${status === 'done' ? 'Hoàn thành' : 'Thất bại'} nhiệm vụ "${QUESTS[q].title}"`);
    if (status === 'done') {
      this.checkDailyTasks({ category: 'personal', taskId: 'personal_quest' });
    } else if (status === 'failed') {
      const remainingMain = QUEST_ORDER
        .filter((k) => k !== q && QUESTS[k].type === 'main' && this.qStatus(k) === 'active')
        .map((k) => `"${QUESTS[k].title}"`);
      if (remainingMain.length > 0) {
        this.notify(`👉 Làm tiếp: ${remainingMain.join(', ')}`, 'info');
      } else {
        const remainingSide = QUEST_ORDER
          .filter((k) => QUESTS[k].type === 'side' && this.qStatus(k) === 'active')
          .map((k) => `"${QUESTS[k].title}"`);
        if (remainingSide.length > 0) {
          this.notify(`👉 Làm tiếp nhiệm vụ phụ: ${remainingSide.join(', ')} hoặc hoàn thành Việc hôm nay.`, 'info');
        } else {
          this.notify(`👉 Làm tiếp: Mở "Việc hôm nay" để hoàn thành 3 việc trong ngày và duy trì cải tạo tốt.`, 'info');
        }
      }
    }
    this.commit();
  }

  private grantQuestResult(q: string, status: 'done' | 'failed') {
    const st = this.s.quests[q];
    const def = QUESTS[q];
    if (def?.xp && status === 'done') {
      this.gainXp(def.xp, def.title);
    }

    switch (q) {
      case 'nhap_trai':
        this.addReform(3, 'Hoàn thành nhập trại');
        this.changeRel('lan', 5);
        this.startQuest('ca_dau');
        this.startQuest('dep_bay');
        this.startQuest('mi_cho_huy');
        this.startQuest('lao_dong_phu');
        break;

      case 'ca_dau':
        if (status === 'done') {
          this.addReform(4, 'Ca lao động đầu tiên');
          this.changeRel('bay', 8, 'Minh làm tròn ca đầu tiên như chú dặn');
        }
        this.startQuest('mon_no');
        break;

      case 'mon_no': {
        const b = this.qBranch(q);
        if (status === 'failed') {
          this.changeRel('huy', -5, 'Minh bị bắt khi làm việc cho Lâm vì mình');
          this.changeRel('lam', -10, 'Minh làm hỏng việc, Lâm phủi tay');
          this.s.flags.huy_debt_open = true;
        } else if (b === 'steal') {
          st.outcome = 'Đã trộm đồ cho Lâm';
          this.addStat('money', 30);
          this.addStat('suspicion', 10);
          this.changeRel('lam', 20, 'Minh "làm được việc" cho Lâm');
          this.changeRel('huy', 10, 'Minh liều mình xóa nợ cho Huy');
          this.s.flags.stole_for_lam = true;
          this.s.flags.workshop_audit_day = this.s.day + 1;
        } else if (b === 'pay') {
          st.outcome = 'Trả nợ thay Huy bằng tiền sạch';
          this.changeRel('huy', 25, 'Minh bỏ tiền túi trả nợ cho Huy');
          this.changeRel('lam', -5, 'Minh từ chối làm việc cho Lâm nhưng trả đủ tiền');
          this.addReform(2, 'Giải quyết mâu thuẫn không vi phạm');
          this.s.flags.huy_repay_day = this.s.day + 2;
        } else if (b === 'report') {
          const withNote = !!this.s.flags.report_with_note;
          st.outcome = withNote ? 'Báo cáo có bằng chứng — Lâm bị xử lý' : 'Báo cáo khi chưa có bằng chứng';
          if (withNote) {
            this.addReform(6, 'Tố giác hành vi ép nợ có bằng chứng');
            this.changeRel('lan', 15, 'Minh báo cáo vụ ép nợ kèm bằng chứng');
            this.changeRel('lam', -40, 'Minh "chỉ điểm" mình với quản giáo');
            if (this.s.flags.huy_gave_note) this.changeRel('huy', 5, 'Minh giúp Huy thoát nợ bằng cách đàng hoàng');
            else this.changeRel('huy', -15, 'Minh lấy giấy nợ đi báo mà không hỏi');
            this.s.flags.lam_sanctioned = true;
            this.s.flags.huy_debt_cleared = true;
          } else {
            this.addReform(2, 'Báo cáo hành vi ép nợ');
            this.changeRel('lan', 5, 'Minh báo cáo nhưng chưa có bằng chứng');
            this.changeRel('lam', -25, 'Bị quản giáo gọi lên hỏi vì Minh');
            this.changeRel('huy', -8, 'Minh làm lớn chuyện khi chưa hỏi ý');
          }
          this.s.flags.lam_revenge_day = this.s.day + 1;
        } else if (b === 'negotiate') {
          st.outcome = 'Thương lượng thành công với Lâm';
          this.addReform(4, 'Dùng kỹ năng đàm phán giải quyết tranh chấp');
          this.changeRel('huy', 20, 'Minh giải quyết êm đẹp món nợ cho mình');
          this.changeRel('lam', 10, 'Nể phục bản lĩnh đàm phán của Minh');
        } else if (b === 'fight') {
          st.outcome = 'Dùng bạo lực với Lâm';
          this.changeRel('huy', 5, 'Minh ra tay vì mình — nhưng Huy sợ liên lụy');
          this.changeRel('lam', -50, 'Bị Minh đánh trước mặt cả sân');
          this.s.flags.huy_debt_cleared = true;
        }
        this.s.chapter = Math.max(this.s.chapter, 2);
        this.startQuest('lop_nghe_dau');
        this.startQuest('nghi_an_thuoc');
        this.startQuest('phong_tham_gap');
        this.notify('Bắt đầu Chương 2 — Chọn chỗ đứng! (Mở Lớp học nghề, Phòng y tế & Thăm gặp)', 'quest');
        break;
      }

      case 'lop_nghe_dau':
        if (status === 'done') {
          this.addReform(4, 'Bài học nghề đầu tiên');
          this.giveItem('chung_chi_nghe');
          this.changeRel('phuc', 10, 'Minh hoàn thành bài học nghề an toàn');
          this.s.skills.vocationalExam++;
          this.notify('⭐ ĐẶC QUYỀN MỚI: Đã nhận chứng chỉ nghề — Mở quyền mượn sách thư viện!', 'good');
        }
        this.startQuest('sach_thu_vien');
        break;

      case 'nghi_an_thuoc':
        if (status === 'done') {
          this.addReform(6, 'Tìm lại thuốc hen cứu Chú Bảy');
          this.changeRel('bay', 15, 'Minh tìm lại lọ thuốc hen cứu mạng chú');
          this.changeRel('an', 12, 'Minh hỗ trợ tìm ra vật chứng y tế');
          this.addClue('thuoc_hen_sau_xuong', 'Lọ thuốc hen của Chú Bảy rơi gần góc sau xưởng nơi đàn em Lâm tụ tập.');
        }
        this.startQuest('manh_moi_kho_7');
        this.startQuest('phu_y_te');
        break;

      case 'manh_moi_kho_7':
        this.addReform(4, 'Tìm ra manh mối kho số 7');
        this.addClue('van_don_kho_7', 'Mảnh vận đơn dán trên kiện hàng cũ ở kho xưởng mang mã KHO-07-AP.');
        this.giveItem('manh_van_don_kho_7', 1);
        this.s.chapter = Math.max(this.s.chapter, 3);
        this.startQuest('doi_chieu_chung_tu');
        this.startQuest('la_thu_que_nha');
        this.startQuest('ren_luyen_the_chat');
        this.notify('Bắt đầu Chương 3 — Giá của sự thật! (Mở điều tra sổ sách & thử thách)', 'quest');
        break;

      case 'phong_tham_gap':
        if (status === 'done') {
          this.changeRel('mai', 15, 'Minh hứa với chị sẽ cải tạo tốt để về sớm');
          this.addStat('stress', -20);
          this.addStat('money', 25);
          this.addReform(3, 'Được gia đình động viên cải tạo');
        }
        break;

      case 'sach_thu_vien':
        if (status === 'done') {
          this.addReform(2, 'Chăm chỉ đọc sách pháp luật');
          this.addStat('stress', -10);
          this.changeRel('phuc', 5, 'Minh tự giác mượn sách cẩm nang');
        }
        break;

      case 'phu_y_te':
        if (status === 'done') {
          this.addReform(3, 'Hỗ trợ việc phòng y tế');
          this.giveItem('thuoc_cam', 1);
          this.changeRel('an', 8, 'Minh nhiệt tình giúp phân loại thuốc');
        }
        break;

      case 'dep_bay':
        if (status === 'done') {
          this.changeRel('bay', 10, 'Minh tìm lại đôi dép con gái gửi cho chú');
          this.addStat('stress', -5);
        }
        break;

      case 'mi_cho_huy':
        if (status === 'done') this.changeRel('huy', 8, 'Minh giữ lời mua mì cho Huy');
        else this.changeRel('huy', -8, 'Minh hứa mua mì rồi quên');
        break;

      case 'lao_dong_phu':
        if (status === 'done') {
          this.addReform(2, 'Tăng cường lao động ca chiều');
          this.addStat('money', 10);
        }
        break;

      case 'doi_chieu_chung_tu':
        if (status === 'done') {
          this.addReform(5, 'Đối chiếu làm rõ chữ ký chứng từ');
          this.changeRel('phuc', 10, 'Thầy Phúc khen Minh tinh mắt và cẩn trọng');
          this.addClue('chu_ky_nguoi_nhan', 'Chữ ký trên vận đơn kho 7 trùng khớp chữ ký người liên hệ với Lâm.');
        }
        this.startQuest('cam_do_im_lang');
        this.startQuest('sua_quat_phong_hoc');
        break;

      case 'cam_do_im_lang':
        this.startQuest('bay_vat_cam');
        break;

      case 'bay_vat_cam':
        if (status === 'done') {
          this.addReform(8, 'Minh oan bẫy vật cấm buồng giam');
          this.changeRel('lan', 10, 'Quản giáo Lan ghi nhận Minh bình tĩnh giải trình hợp lệ');
          this.changeRel('tung', 15, 'Cán bộ Tùng đánh giá cao sự trung thực');
        }
        this.s.chapter = Math.max(this.s.chapter, 4);
        this.startQuest('ho_so_giai_trinh');
        this.startQuest('loi_hua_chu_bay');
        this.startQuest('truyen_nghe_cho_huy');
        this.startQuest('chia_tay_thay_phuc');
        this.startQuest('kiem_tra_suc_khoe');
        this.notify('Bắt đầu Chương 4 — Ngày trở về! (Chuẩn bị hồ sơ đặc xá & hoàn tất lời hứa)', 'quest');
        break;

      case 'la_thu_que_nha':
        if (status === 'done') {
          this.changeRel('mai', 15, 'Minh gửi thư hồi âm ấm áp cho mẹ và chị');
          this.addStat('stress', -20);
        }
        break;

      case 'ren_luyen_the_chat':
        if (status === 'done') {
          this.changeRel('bay', 5, 'Chú Bảy khen Minh chịu khó rèn luyện');
          this.addStat('stress', -15);
          this.addStat('health', 5);
          this.addStat('stamina', 10);
        }
        break;

      case 'sua_quat_phong_hoc':
        if (status === 'done') {
          this.addReform(4, 'Sửa chữa quạt phòng học công ích');
          this.addStat('money', 15);
          this.changeRel('phuc', 15, 'Thầy Phúc cảm kích tay nghề sửa máy của Minh');
        }
        break;

      case 'ho_so_giai_trinh':
        this.addReform(10, 'Hoàn thành hồ sơ giải trình minh oan kho số 7');
        this.changeRel('lan', 20, 'Quản giáo Lan chính thức tiếp nhận kiến nghị');
        this.s.flags.ho_so_kho_7_cleared = true;
        break;

      case 'loi_hua_chu_bay':
        this.addReform(8, 'Giúp Chú Bảy hoàn thành kỷ vật gửi về quê');
        this.changeRel('bay', 30, 'Chú Bảy xúc động trước lòng tốt của Minh');
        this.s.flags.loi_hua_chu_bay_done = true;
        this.startQuest('ky_xet_cuoi_cung');
        break;

      case 'ky_xet_cuoi_cung':
        this.addReform(10, 'Hội đồng trại quyết định đặc xá');
        this.s.ending = this.computeEnding();
        this.notify('Bạn đã hoàn thành quá trình cải tạo và bước tới ngưỡng cửa tự do!', 'good');
        this.emit('ending', this.s.ending);
        break;

      case 'truyen_nghe_cho_huy':
        if (status === 'done') {
          this.addReform(5, 'Giúp đỡ bạn cùng phòng học nghề');
          this.changeRel('huy', 25, 'Huy biết ơn Minh chỉ dạy nghề');
        }
        break;

      case 'chia_tay_thay_phuc':
        if (status === 'done') {
          this.changeRel('phuc', 20, 'Thầy Phúc gửi gắm niềm tin vào Minh');
        }
        break;

      case 'kiem_tra_suc_khoe':
        if (status === 'done') {
          this.addStat('health', 15);
          this.addStat('stamina', 10);
          this.changeRel('an', 10, 'Y sĩ An xác nhận thể lực hoàn hảo');
        }
        break;
    }
  }

  // ───────────── Nghĩa vụ trong ngày ─────────────
  rollcallCheckIn(): boolean {
    const d = this.s.daily;
    if (d.rollcall !== 'pending') return false;
    if (this.s.minute < 390 || this.s.minute >= 420) return false;
    if (this.s.minute <= ROLLCALL_ON_TIME_END) {
      d.rollcall = 'ok';
      this.notify('Đã điểm danh đúng giờ.', 'good');
      this.addReform(1, 'Điểm danh đúng giờ', true);
    } else {
      d.rollcall = 'late';
      this.recordViolation('late_rollcall', `d${this.s.day}`, `Quản giáo Lan ghi nhận có mặt lúc ${fmtTime(this.s.minute)} (hạn 06:45).`, { grace: this.s.day === 1 });
    }
    this.completeObjective('nhap_trai', 'diem_danh');
    this.checkDailyTasks({ category: 'duty', taskId: 'duty_rollcall' });
    this.event('Điểm danh sáng');
    this.commit();
    return true;
  }

  clockIn(): string | null {
    const d = this.s.daily;
    const m = this.s.minute;
    const morning = m >= 480 && m < 690;
    const afternoon = m >= 810 && m < 990;
    if (!morning && !afternoon) return 'Ngoài giờ lao động. Ca sáng 08:00–11:30, ca chiều tự nguyện 13:30–16:30.';
    if (morning) {
      if (d.workClockedIn) return 'Bạn đã chấm công ca sáng.';
      d.workClockedIn = true;
      if (m > WORK_CLOCKIN_DEADLINE) {
        this.recordViolation('late_work', `d${this.s.day}`, `Bảng chấm công ghi ${fmtTime(m)} (hạn 08:30).`, { grace: this.s.day === 1 });
      } else this.notify('Đã chấm công ca sáng. Chỉ tiêu: 3 ổ cắm.', 'good');
      this.completeObjective('ca_dau', 'cham_cong');
      this.checkDailyTasks({ category: 'duty', taskId: 'duty_clockin' });
      this.event('Chấm công ca sáng');
    } else {
      if (this.qStatus('ca_dau') === 'active') {
        return 'Cần hoàn thành ca đầu tiên theo thứ tự: chấm công sáng → lắp đủ 3 ổ cắm → báo Chú Bảy, rồi mới đăng ký ca chiều.';
      }
      if (this.s.flags[`extra:${this.s.day}`]) return 'Bạn đã đăng ký ca chiều.';
      this.s.flags[`extra:${this.s.day}`] = true;
      this.completeObjective('lao_dong_phu', 'dang_ky');
      this.notify('Đăng ký ca chiều tự nguyện: 4.000đ/sản phẩm, tối đa 4.', 'good');
    }
    this.commit();
    return null;
  }

  workMode(): 'morning' | 'afternoon' | null {
    const m = this.s.minute;
    if (m >= 480 && m < 690 && this.s.daily.workClockedIn) return 'morning';
    if (m >= 810 && m < 990 && this.s.flags[`extra:${this.s.day}`]) return 'afternoon';
    return null;
  }

  canWorkReason(): string | null {
    const mode = this.workMode();
    if (this.qStatus('ca_dau') === 'active') {
      if (!this.qObj('ca_dau', 'cham_cong') || !this.s.daily.workClockedIn) {
        return 'Chưa thể lắp ráp: hãy chấm công tại bảng cạnh cửa xưởng trước (ca sáng 08:00–11:30).';
      }
      if (mode !== 'morning') {
        return 'Ca đầu tiên phải hoàn thành trong ca sáng. Hãy trở lại xưởng vào 08:00–11:30.';
      }
    }
    if (!mode) return 'Cần chấm công ở bảng cạnh cửa xưởng trước (ca sáng 08:00–11:30, ca chiều 13:30–16:30).';
    if (mode === 'morning' && this.s.daily.workUnits >= WORK_QUOTA && this.s.daily.work === 'ok') return 'Đã đủ chỉ tiêu ca sáng. Có thể nghỉ hoặc ra về.';
    if (mode === 'afternoon' && this.s.daily.extraShiftUnits >= EXTRA_SHIFT_MAX) return 'Đã làm tối đa ca chiều hôm nay.';
    if (this.s.stats.stamina < 8) return 'Bạn kiệt sức. Hãy nghỉ tay (ngồi ghế) hoặc ăn uống để hồi thể lực.';
    return null;
  }

  wage(avgQ: number) {
    return Math.round(12 + 6 * (avgQ / 100));
  }

  finishWorkUnit(quality: number, manual = true) {
    const d = this.s.daily;
    const mode = this.workMode();
    if (!mode || this.canWorkReason()) return;
    const q = Math.max(0, Math.min(100, Math.round(quality)));
    if (mode === 'morning') {
      if (d.workUnits >= WORK_QUOTA) return;
      d.workUnits++;
      d.workQuality += q;
      this.event(`Lắp xong ổ cắm #${d.workUnits} (chất lượng ${q}%)`);

      // Huy phụ làm thêm 1 sản phẩm nếu quan hệ >= 20 (1 lần mỗi ca sáng)
      if (this.hasPerk('huy_work') && this.s.flags.huy_assisted_day !== this.s.day && d.workUnits < WORK_QUOTA) {
        this.s.flags.huy_assisted_day = this.s.day;
        d.workUnits++;
        d.workQuality += 80;
        this.notify('Huy phụ bạn lắp thêm 1 sản phẩm (đặc quyền Huy ≥ 20).', 'good');
        this.event(`Huy phụ lắp xong ổ cắm #${d.workUnits}`);
      }

      if (d.workUnits >= WORK_QUOTA) this.completeMorningQuota(manual);
      else this.notify(`Sản phẩm ${d.workUnits}/${WORK_QUOTA} — chất lượng ${q}%`, 'info');
    } else {
      if (d.extraShiftUnits >= EXTRA_SHIFT_MAX) return;
      d.extraShiftUnits++;
      this.addStat('money', 4);
      this.notify(`Ca chiều: +${fmtMoney(4)} (${d.extraShiftUnits}/${EXTRA_SHIFT_MAX})`, 'good');
      if (d.extraShiftUnits % 2 === 0) this.addReform(1, 'Lao động tự nguyện', true);
      if (d.extraShiftUnits >= 2) {
        this.completeObjective('lao_dong_phu', 'lap_phu');
      }
    }
    this.checkMoneyObjective();
    this.commit();
  }

  private completeMorningQuota(manual: boolean, auto = false) {
    const d = this.s.daily;
    d.work = 'ok';
    const avg = d.workQuality / Math.max(1, d.workUnits);
    let pay = this.wage(avg);
    if (auto) pay = Math.round(pay * 0.7);
    if (!d.workPaid) {
      d.workPaid = true;
      this.addStat('money', pay);
      this.notify(`Đủ chỉ tiêu! Tiền công ${fmtMoney(pay)} (chất lượng TB ${Math.round(avg)}%).`, 'good');
    }
    this.gainXp(20, 'Lao động đủ chỉ tiêu');
    this.addReform(auto ? 2 : 3, auto ? 'Lao động (tự động)' : 'Lao động đủ chỉ tiêu', true);
    if (manual && !auto) this.s.skills.workShifts++;
    this.completeObjective('ca_dau', 'lap_rap');
    this.checkDailyTasks({ category: 'duty', taskId: 'duty_work_units' });
    this.checkMoneyObjective();
  }

  canAutoWork(): string | null {
    if (this.s.skills.workShifts < 2) return `Cần tự làm đủ 2 ca để thành thạo (hiện ${this.s.skills.workShifts}/2).`;
    if (this.workMode() !== 'morning') return 'Chỉ tự động được ca sáng sau khi đã chấm công.';
    if (this.s.daily.work === 'ok') return 'Đã đủ chỉ tiêu.';
    return null;
  }

  /** Tự hoàn thành ca sáng với hiệu quả thấp hơn (70% tiền công, điểm thấp hơn), tua thời gian đến hết ca. */
  autoWork(): boolean {
    if (this.canAutoWork()) return false;
    const d = this.s.daily;
    while (d.workUnits < WORK_QUOTA) {
      d.workUnits++;
      d.workQuality += 60;
    }
    this.completeMorningQuota(false, true);
    this.event('Tự động hoàn thành ca sáng');
    this.advanceTo(690, { ...IDLE_CTX, inCellblock: false });
    this.addStat('stamina', -15);
    this.commit();
    return true;
  }

  private checkMoneyObjective() {
    if (this.qStatus('mon_no') === 'active' && this.qBranch('mon_no') === 'pay' && this.s.stats.money >= 40) {
      this.completeObjective('mon_no', 'du_tien');
    }
  }

  mealBlock(): 'breakfast' | 'lunch' | 'dinner' | null {
    const id = this.block().id;
    return id === 'breakfast' || id === 'lunch' || id === 'dinner' ? id : null;
  }

  eatMeal(): string | null {
    const b = this.mealBlock();
    if (!b) return 'Chưa đến giờ phát cơm (07:00, 11:30, 16:30).';
    if (this.s.daily.meals[b]) return 'Bạn đã nhận suất ăn bữa này.';
    this.s.daily.meals[b] = true;
    this.addStat('satiety', 45);
    this.addStat('stamina', 20);
    this.addStat('health', 3);
    this.notify('Ăn xong suất cơm: +45 độ no, +20 thể lực.', 'good');
    this.event('Ăn ' + (b === 'breakfast' ? 'sáng' : b === 'lunch' ? 'trưa' : 'tối'));
    this.commit();
    return null;
  }

  exerciseReason(): string | null {
    if (this.s.daily.exercise >= 2) return 'Hôm nay tập đủ rồi — tập thêm dễ chấn thương.';
    if (this.s.stats.stamina < 20) return 'Cần ít nhất 20 thể lực để tập.';
    const id = this.block().id;
    if (id !== 'free1' && id !== 'free2' && id !== 'rest') return 'Chỉ tập trong giờ tự do/nghỉ trưa.';
    return null;
  }

  exercise(result: number) {
    if (this.exerciseReason()) return;
    const r = Math.max(0, Math.min(1, result));
    const first = this.s.daily.exercise === 0;
    this.s.daily.exercise++;
    this.s.skills.exerciseSessions++;
    this.addStat('stamina', -18);
    const moraleUp = Math.round((4 + 12 * r) * (first ? 1 : 0.5));
    this.addStat('morale', moraleUp);
    this.s.skills.fitness = Math.min(20, this.s.skills.fitness + r * (first ? 1 : 0.4));
    this.notify(`Tập xong: +${moraleUp} tinh thần, thể chất ${this.s.skills.fitness.toFixed(1)}/20.`, 'good');
    this.checkDailyTasks({ category: 'personal', taskId: 'personal_exercise' });
    this.event('Tập thể dục ngoài sân');
    this.commit();
  }

  // ───────────── Thời gian ─────────────
  tick(dtSec: number, ctx: TickCtx) {
    if (this.s.ending || this.s.hearing) return;
    const prev = this.s.minute;
    const next = Math.min(DAY_END, prev + dtSec * GAME_MIN_PER_SEC);
    this.s.minute = next;
    this.updateNeeds(dtSec, (next - prev) / 60, ctx);
    if (ctx.inRollcall) this.rollcallCheckIn();
    this.checkWindows(prev, next, ctx);
  }

  private updateNeeds(dtSec: number, hours: number, ctx: TickCtx) {
    const st = this.s.stats;
    const endurance = this.s.progression?.attrs?.endurance ?? 1;
    const enduranceBonus = 1 + endurance * 0.12;

    // Giảm dần độ no theo thời gian (5% mỗi giờ)
    this.addStat('satiety', -5 * hours);

    // Thể lực: chạy tiêu hao giảm mạnh (2.5/s, bền bỉ giảm thêm), ngồi nghỉ hồi 6/s
    const regenMul = (st.satiety < 25 ? 0.5 : 1) * (1 + this.s.skills.fitness / 20) * enduranceBonus;
    if (ctx.sprinting) this.addStat('stamina', (-2.5 * dtSec) / enduranceBonus);
    else if (ctx.resting) this.addStat('stamina', 6 * dtSec * regenMul);
    else if (ctx.moving) this.addStat('stamina', 0.6 * dtSec * regenMul);
    else this.addStat('stamina', 1.5 * dtSec * regenMul);

    // Cảnh báo sớm thể lực khi xuống <= 30
    if (st.stamina <= 30) {
      if (!this.staminaWarned) {
        this.notify(`Thể lực xuống thấp (⚡ ${Math.round(st.stamina)}). Hãy ngồi ghế nghỉ ngơi hoặc ăn uống để hồi sức.`, 'warn');
        this.staminaWarned = true;
      }
    } else if (st.stamina >= 45) {
      this.staminaWarned = false;
    }

    // Nghỉ ngơi hồi phục tinh thần nếu độ no không quá thấp
    if (ctx.resting && st.satiety >= 25) this.addStat('morale', 1.5 * hours);

    // Đói lả (độ no <= 15) -> tụt máu và suy sụp tinh thần
    if (st.satiety <= 15) {
      this.addStat('health', -4 * hours);
      this.addStat('morale', -3 * hours);
    } else if (st.satiety >= 40 && st.health < 100) {
      // No bụng hồi máu tự nhiên
      this.addStat('health', 1 * hours);
    }

    // Tinh thần suy sụp (morale <= 15) -> tổn hại sức khỏe
    if (st.morale <= 15) {
      this.addStat('health', -1 * hours);
    }

    if (st.health <= 0) this.faint();
  }

  private faint() {
    this.s.stats.health = 35;
    this.s.stats.stamina = Math.max(this.s.stats.stamina, 40);
    this.s.stats.satiety = Math.max(this.s.stats.satiety, 35);
    this.s.stats.morale = Math.max(this.s.stats.morale, 30);
    this.notify('Bạn ngất xỉu vì kiệt sức! Bạn cùng buồng dìu bạn vào Phòng y tế nghỉ ngơi.', 'bad');
    this.event('Ngất xỉu');
    this.emit('faint');
  }

  private checkWindows(prev: number, now: number, ctx: TickCtx) {
    const d = this.s.daily;
    for (const b of SCHEDULE) {
      if (b.start > prev && b.start <= now) this.emit('block', b);
    }
    // Khám xét sáng (dựa trên tin báo hoặc nghi ngờ cao — có nguyên nhân rõ ràng)
    if (prev < 412 && now >= 412) this.morningSearch();
    if (now >= 420 && d.rollcall === 'pending') {
      if (this.s.day === 1) {
        d.rollcall = 'excused';
        this.recordViolation('missed_rollcall', `d${this.s.day}`, 'Không có mặt ở ô điểm danh 06:30–07:00.', { grace: true });
        // An absence is not an achieved rollcall objective: attend a later morning to progress.
        if (this.qStatus('nhap_trai') === 'active' && !this.qObj('nhap_trai', 'diem_danh')) {
          this.notify('Bạn bỏ lỡ điểm danh. Hãy có mặt ở ô vàng vào 06:30–07:00 ngày mai để hoàn thành bước này.', 'warn');
        }
      } else if (this.canBayExcuse()) {
        this.useBayExcuse('rollcall');
      } else {
        d.rollcall = 'missed';
        this.recordViolation('missed_rollcall', `d${this.s.day}`, 'Quản giáo Lan điểm danh 06:30–07:00, không có mặt.');
      }
    }
    if (prev < 690 && now >= 690) this.resolveWork();
    if (now >= CURFEW_CHECK && d.curfew === 'pending') {
      if (ctx.inCellblock) {
        d.curfew = 'ok';
        this.checkDailyTasks({ category: 'duty', taskId: 'duty_curfew' });
      } else {
        d.curfew = 'missed';
        this.recordViolation('curfew', `d${this.s.day}`, `Cán bộ Tùng kiểm tra buồng lúc 21:30, bạn đang ở ngoài khu buồng giam.`);
      }
    }
    if (prev < DAY_END && now >= DAY_END) this.emit('forceSleep');
  }

  private resolveWork() {
    const d = this.s.daily;
    if (d.work !== 'pending') return;
    if (!d.workClockedIn || d.workUnits === 0) {
      if (this.canBayExcuse()) {
        this.useBayExcuse('work');
      } else {
        d.work = 'missed';
        this.recordViolation('skip_work', `d${this.s.day}`, d.workClockedIn ? 'Đã chấm công nhưng không hoàn thành sản phẩm nào.' : 'Không chấm công ca sáng 08:00–11:30.', { grace: this.s.day === 1 });
      }
    } else {
      d.work = 'late';
      const pay = Math.round((this.wage(d.workQuality / d.workUnits) * d.workUnits) / WORK_QUOTA);
      if (!d.workPaid) {
        d.workPaid = true;
        this.addStat('money', pay);
      }
      this.notify(`Hết ca: chỉ làm ${d.workUnits}/${WORK_QUOTA} sản phẩm, nhận ${fmtMoney(pay)}, không được cộng điểm.`, 'warn');
    }
    this.commit();
  }

  private morningSearch() {
    const d = this.s.daily;
    if (d.searchedToday) return;
    const tipped = this.s.flags.lam_tip_day === this.s.day;
    if (!tipped && this.s.stats.suspicion < 50) return;
    d.searchedToday = true;
    const reason = tipped ? 'theo một tin báo nặc danh' : `do mức nghi ngờ cao (${Math.round(this.s.stats.suspicion)})`;
    const found = Object.keys(this.s.inventory).filter((k) => ITEMS[k]?.contraband);
    this.event(`Bị khám buồng ${reason}`);
    if (found.length === 0) {
      this.notify(`Cán bộ Tùng khám buồng 3 ${reason}: không phát hiện gì.`, 'info');
      this.addStat('suspicion', -10);
      return;
    }
    for (const it of found) {
      const planted = it === 'dao_lam' && !!this.s.flags.planted_by_lam;
      this.s.inventory[it] = 0;
      delete this.s.inventory[it];
      if (it === 'hop_mui_khoan') {
        this.recordViolation('theft', `search-d${this.s.day}`, `Khám buồng ${reason}, tìm thấy hộp mũi khoan của kho xưởng trong đồ của bạn.`, { extra: '' });
        this.s.flags.canteenBanUntil = this.s.day + 1;
        if (this.qStatus('mon_no') === 'active') this.finishQuest('mon_no', 'failed', 'Tang vật bị khám thấy');
      } else {
        this.recordViolation('contraband', `search-d${this.s.day}-${it}`, `Khám buồng ${reason}, tìm thấy ${itemName(it)} trong chiếu của bạn.`, { appealTag: planted ? 'planted' : undefined });
      }
    }
    this.emit('searched', found);
  }

  /** Tua thời gian (chờ, ngủ, tự động làm việc) — xử lý đầy đủ nhu cầu & mốc lịch. */
  advanceTo(target: number, ctx: TickCtx = IDLE_CTX) {
    const t = Math.min(DAY_END, target);
    let guard = 0;
    while (this.s.minute < t - 1e-6 && guard++ < 2000) {
      const step = Math.min(5, t - this.s.minute);
      const prev = this.s.minute;
      this.s.minute = prev + step;
      this.updateNeeds((step / GAME_MIN_PER_SEC) * 0.25, step / 60, { ...ctx, sprinting: false, moving: false });
      this.checkWindows(prev, this.s.minute, ctx);
    }
  }

  previewWait(): { target: number; label: string; warnings: string[] } | null {
    const nb = nextBlock(this.s.minute);
    if (!nb) return null;
    const warnings: string[] = [];
    const d = this.s.daily;
    if (d.rollcall === 'pending' && nb.start >= 420) warnings.push('Bỏ lỡ điểm danh sáng → vi phạm.');
    if (d.work === 'pending' && nb.start >= 690 && (!d.workClockedIn || d.workUnits === 0)) warnings.push('Bỏ lỡ ca lao động → vi phạm "Bỏ lao động".');
    const mb = this.mealBlock();
    if (mb && !d.meals[mb]) warnings.push('Bỏ bữa ăn hiện tại (đói sẽ tăng).');
    return { target: nb.start, label: `${fmtTime(nb.start)} — ${nb.label}`, warnings };
  }

  canSleep(): { ok: boolean; reason: string } {
    const m = this.s.minute;
    if (m >= 1260) return { ok: true, reason: 'Đến giờ ngủ.' };
    if (m >= 1050 && this.s.daily.work !== 'pending') return { ok: true, reason: 'Đã xong nghĩa vụ, có thể nghỉ sớm.' };
    if (this.s.daily.work === 'pending') return { ok: false, reason: 'Chưa xong nghĩa vụ lao động hôm nay. Có thể ngủ sau ca lao động, từ 17:30.' };
    return { ok: false, reason: 'Chỉ được nghỉ sớm từ 17:30 khi đã xong nghĩa vụ (giờ ngủ chính 21:00).' };
  }

  /** Kết thúc ngày: chốt nghĩa vụ, trừ án, xét giảm án, tổng kết. Gọi một lần mỗi ngày (có chống trùng). */
  endDay(inBed = true): DaySummary {
    const s = this.s;
    const existing = s.history.find((h) => h.day === s.day);
    if (existing) return existing; // chống xử lý trùng
    if (s.minute < DAY_END) this.advanceTo(DAY_END, { ...IDLE_CTX, inCellblock: inBed });
    const d = s.daily;
    if (d.curfew === 'pending') d.curfew = inBed ? 'ok' : 'missed';
    if (d.curfew === 'ok') {
      this.checkDailyTasks({ category: 'duty', taskId: 'duty_curfew' });
    }

    // Hạn lời hứa
    if (this.qStatus('mi_cho_huy') === 'active' && (s.flags['mi_cho_huy:deadline'] as number) <= s.day) {
      this.finishQuest('mi_cho_huy', 'failed', 'Quá hạn — thất hứa');
    }
    const todays = s.violations.filter((v) => v.day === s.day && v.status !== 'overturned' && v.severity > 0);
    if (todays.length === 0) this.addReform(1, 'Một ngày không vi phạm', true);

    const served = serveDay(s, s.day);
    // VIỆC 5: Xóa sự kiện kỳ xét giảm án trừ ngày. Ngày trôi bình thường, không kết thúc game theo ngày.
    const review = undefined;

    const relationChanges = Object.keys(s.relations)
      .map((k) => ({ npc: NPC_NAMES[k], delta: s.relations[k].value - (d.startRelations[k] ?? 0) }))
      .filter((x) => x.delta !== 0);

    const summary: DaySummary = {
      day: s.day,
      rollcall: d.rollcall,
      work: d.work,
      workUnits: d.workUnits,
      meals: Number(d.meals.breakfast) + Number(d.meals.lunch) + Number(d.meals.dinner),
      reformDelta: s.stats.reform - d.startStats.reform,
      moneyDelta: Math.round((s.stats.money - d.startStats.money) * 10) / 10,
      violations: s.violations.filter((v) => v.day === s.day).map((v) => `${v.title}${v.status === 'overturned' ? ' (đã hủy)' : ''}`),
      relationChanges,
      served,
      review,
      remainingAfter: s.sentence.remaining,
      events: [...d.events],
    };
    s.history.push(summary);

    // Qua đêm
    this.addStat('stamina', 100);
    this.addStat('morale', inBed ? 15 : 5);
    this.addStat('satiety', -15);
    if (s.stats.satiety >= 30) this.addStat('health', 8);
    this.addStat('suspicion', todays.length === 0 ? -12 : -5);

    s.day += 1;
    s.minute = DAY_START;
    s.daily = makeDaily(s.stats, s.relations);
    s.daily.tasks = generateDailyTasks(s);
    s.player = { x: -14.25, z: -27.6, rot: 0 };
    this.morningStory();
    this.commit();
    return summary;
  }

  /** Các diễn biến nối tiếp từ lựa chọn trước — xảy ra sáng hôm sau, có nguyên nhân rõ ràng. */
  private morningStory() {
    const s = this.s;
    if (s.flags.lam_revenge_day === s.day && !s.flags.planted_by_lam) {
      s.flags.planted_by_lam = true;
      s.flags.lam_tip_day = s.day;
      s.inventory.dao_lam = (s.inventory.dao_lam ?? 0) + 1;
      s.flags.bay_saw_planting = true; // Chú Bảy dậy sớm, nhìn thấy — chỉ kể nếu tin bạn
      s.daily.events.push('06:00 (Đêm qua có người lạ lảng vảng gần giường bạn.)');
    }
    if (s.flags.workshop_audit_day === s.day) {
      s.daily.events.push('06:00 Xưởng kiểm kê phát hiện mất hộp mũi khoan — chưa xác định thủ phạm.');
      s.stats.suspicion = clampStat(s.stats.suspicion + 10);
      s.flags.workshop_audit_done = true;
    }
    if (s.flags.huy_repay_day === s.day && !s.flags.huy_repaid) {
      s.flags.huy_repaid = true;
      s.stats.money += 20;
      s.relations.huy.memories.push({ day: s.day, text: 'Huy trả lại Minh 20.000đ như đã hứa' });
      s.relations.huy.value = Math.min(100, s.relations.huy.value + 5);
      s.daily.events.push('06:00 Huy dúi vào tay bạn 20.000đ: "Trả trước một nửa, em giữ lời."');
    }
  }

  computeEnding(): string {
    const s = this.s;
    const serious = s.violations.some((v) => v.severity >= 3 && v.status !== 'overturned');
    if (s.flags.stole_for_lam || this.rel('lam') >= 35) return 'rang_buoc';
    if (s.stats.reform >= 70 && !serious && this.rel('bay') >= 25) return 'tu_te';
    return 'lang_le';
  }

  // ───────────── Tiện ích kiểm thử / gỡ lỗi ─────────────
  /** Mô phỏng một ngày cải tạo tốt (dùng cho kiểm thử & chế độ debug). */
  simulateGoodDay(): DaySummary {
    this.advanceTo(395, { ...IDLE_CTX, inCellblock: false });
    this.rollcallCheckIn();
    this.advanceTo(425, { ...IDLE_CTX, inCellblock: false });
    this.eatMeal();
    this.advanceTo(485, { ...IDLE_CTX, inCellblock: false });
    this.clockIn();
    for (let i = 0; i < WORK_QUOTA; i++) this.finishWorkUnit(90);
    this.advanceTo(695, { ...IDLE_CTX, inCellblock: false });
    this.eatMeal();
    this.advanceTo(995, { ...IDLE_CTX, inCellblock: false });
    this.eatMeal();
    this.advanceTo(1265, IDLE_CTX);
    return this.endDay(true);
  }

  isOpen(area: string) {
    return isOpen(area, this.s.minute);
  }

  isOpenAt(area: string, minute: number) {
    return isOpen(area, minute);
  }
}
