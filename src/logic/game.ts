import {
  CURFEW_CHECK, DAILY_REFORM_CAP, DAY_END, DAY_START, GAME_MIN_PER_SEC, ROLLCALL_ON_TIME_END,
  SCHEDULE, WORK_CLOCKIN_DEADLINE, blockAt, fmtMoney, fmtTime, isOpen, nextBlock, type ScheduleBlock,
} from './constants';
import {
  clampStat, createInitialState, makeDaily, type DaySummary, type GameState, type Hearing, type Stats, type Violation,
} from './state';
import { addSentence, applyReview, serveDay } from './sentence';
import { VIOLATIONS } from '../data/violations';
import { ITEMS, itemName } from '../data/items';
import { QUESTS } from '../data/quests';

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
  tu: 'Anh Tư', son: 'Sơn', khai: 'Khải', minh: 'Minh', mai: 'Mai',
};

export const WORK_QUOTA = 3;
export const EXTRA_SHIFT_MAX = 4;

type Listener = (...args: any[]) => void;

export class GameLogic {
  s: GameState;
  private listeners: Record<string, Listener[]> = {};

  constructor(state?: GameState) {
    this.s = state ?? createInitialState();
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

  // ───────────── Chỉ số ─────────────
  addStat(k: keyof Stats, delta: number) {
    if (k === 'money') this.s.stats.money = Math.max(0, Math.round((this.s.stats.money + delta) * 10) / 10);
    else this.s.stats[k] = clampStat(this.s.stats[k] + delta);
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
    return real;
  }

  changeRel(id: string, delta: number, memory?: string) {
    const r = this.s.relations[id];
    if (!r) return;
    r.value = Math.max(-100, Math.min(100, r.value + delta));
    r.met = true;
    if (memory) r.memories.push({ day: this.s.day, text: memory });
    if (delta !== 0) this.notify(`${NPC_NAMES[id]} ${delta > 0 ? '+' : ''}${delta} quan hệ`, delta > 0 ? 'good' : 'bad');
  }

  meet(id: string) {
    const r = this.s.relations[id];
    if (r && !r.met) {
      r.met = true;
      this.commit();
    }
  }

  /** Nói chuyện thường ngày — mỗi NPC một lần/ngày, giảm căng thẳng nhẹ. */
  dailyTalk(id: string) {
    const r = this.s.relations[id];
    if (!r || r.lastTalkDay === this.s.day) return false;
    r.lastTalkDay = this.s.day;
    if (r.value >= -10) {
      r.value = Math.min(100, r.value + 1);
      this.addStat('stress', -3);
    }
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

  buy(id: string): string | null {
    const def = ITEMS[id];
    if (!def?.price) return 'Mặt hàng không bán.';
    if (!this.canteenOpen()) return 'Căn tin chỉ mở 16:30–21:00.';
    if (this.canteenBanned()) return `Bạn đang bị cấm mua căn tin đến hết ngày ${this.s.flags.canteenBanUntil}.`;
    if (this.s.stats.money < def.price) return `Không đủ tiền (cần ${fmtMoney(def.price)}).`;
    this.addStat('money', -def.price);
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
    if (u.hunger) this.addStat('hunger', u.hunger);
    if (u.stress) this.addStat('stress', u.stress);
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
      if (def.stress) this.addStat('stress', def.stress);
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
      this.addStat('stress', -10);
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
    this.notify(`Nhiệm vụ mới: ${QUESTS[q].title}`, 'quest');
    this.event(`Nhận nhiệm vụ "${QUESTS[q].title}"`);
    if (q === 'mi_cho_huy') this.s.flags['mi_cho_huy:deadline'] = this.s.day + 1;
    this.commit();
    return true;
  }

  completeObjective(q: string, obj: string) {
    if (this.qStatus(q) !== 'active') return;
    const k = `${q}:${obj}`;
    if (this.s.flags[k]) return;
    this.s.flags[k] = true;
    const def = QUESTS[q];
    const o = def.objectives.find((x) => x.id === obj);
    if (o) this.notify(`✔ ${o.text}`, 'quest');
    this.checkQuest(q);
    this.commit();
  }

  chooseBranch(q: string, branch: string) {
    if (this.qBranch(q)) return false;
    this.s.flags[`${q}:branch`] = branch;
    this.s.quests[q]?.choices.push(QUESTS[q].branches?.[branch] ?? branch);
    this.event(`Quyết định: ${QUESTS[q].branches?.[branch] ?? branch}`);
    this.completeObjective(q, 'quyet_dinh');
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
    if (!st || st.status !== 'active') return;
    st.status = status;
    st.outcome = outcome ?? st.outcome;
    if (!st.rewarded) {
      st.rewarded = true; // đặt cờ trước khi trao thưởng để không bao giờ trao trùng
      this.grantQuestResult(q, status);
    }
    this.notify(`${status === 'done' ? 'Hoàn thành' : 'Thất bại'}: ${QUESTS[q].title}${st.outcome ? ' — ' + st.outcome : ''}`, status === 'done' ? 'quest' : 'bad');
    this.event(`${status === 'done' ? 'Hoàn thành' : 'Thất bại'} nhiệm vụ "${QUESTS[q].title}"`);
    this.commit();
  }

  private grantQuestResult(q: string, status: 'done' | 'failed') {
    const st = this.s.quests[q];
    switch (q) {
      case 'nhap_trai':
        this.addReform(3, 'Hoàn thành nhập trại');
        this.changeRel('lan', 5);
        this.startQuest('ca_dau');
        break;
      case 'ca_dau':
        this.addReform(4, 'Ca lao động đầu tiên');
        this.changeRel('bay', 8, 'Minh làm tròn ca đầu tiên như chú dặn');
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
        } else if (b === 'fight') {
          st.outcome = 'Dùng bạo lực với Lâm';
          this.changeRel('huy', 5, 'Minh ra tay vì mình — nhưng Huy sợ liên lụy');
          this.changeRel('lam', -50, 'Bị Minh đánh trước mặt cả sân');
          this.s.flags.huy_debt_cleared = true;
        }
        this.s.chapter = Math.max(this.s.chapter, 2);
        this.notify('Kết thúc Chương 1. (Chương 2–4 sẽ mở ở Mốc 2–3.)', 'quest');
        break;
      }
      case 'dep_bay':
        this.changeRel('bay', 10, 'Minh tìm lại đôi dép con gái gửi cho chú');
        this.addStat('stress', -5);
        break;
      case 'mi_cho_huy':
        if (status === 'done') this.changeRel('huy', 8, 'Minh giữ lời mua mì cho Huy');
        else this.changeRel('huy', -8, 'Minh hứa mua mì rồi quên');
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
      this.event('Chấm công ca sáng');
    } else {
      if (this.s.flags[`extra:${this.s.day}`]) return 'Bạn đã đăng ký ca chiều.';
      this.s.flags[`extra:${this.s.day}`] = true;
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
    if (!mode) return 'Cần chấm công ở bảng cạnh cửa xưởng trước (ca sáng 08:00–11:30, ca chiều 13:30–16:30).';
    if (mode === 'morning' && this.s.daily.workUnits >= WORK_QUOTA && this.s.daily.work === 'ok') return 'Đã đủ chỉ tiêu ca sáng. Có thể nghỉ hoặc ra về.';
    if (mode === 'afternoon' && this.s.daily.extraShiftUnits >= EXTRA_SHIFT_MAX) return 'Đã làm tối đa ca chiều hôm nay.';
    if (this.s.stats.stamina < 8) return 'Bạn kiệt sức. Hãy nghỉ tay (ngồi ghế) hoặc ăn uống để hồi thể lực.';
    return null;
  }

  wage(avgQ: number) {
    return Math.round(10 + 6 * (avgQ / 100));
  }

  finishWorkUnit(quality: number, manual = true) {
    const d = this.s.daily;
    const mode = this.workMode();
    if (!mode) return;
    const q = Math.max(0, Math.min(100, Math.round(quality)));
    if (mode === 'morning') {
      if (d.workUnits >= WORK_QUOTA) return;
      d.workUnits++;
      d.workQuality += q;
      this.event(`Lắp xong ổ cắm #${d.workUnits} (chất lượng ${q}%)`);
      if (d.workUnits >= WORK_QUOTA) this.completeMorningQuota(manual);
      else this.notify(`Sản phẩm ${d.workUnits}/${WORK_QUOTA} — chất lượng ${q}%`, 'info');
    } else {
      if (d.extraShiftUnits >= EXTRA_SHIFT_MAX) return;
      d.extraShiftUnits++;
      this.addStat('money', 4);
      this.notify(`Ca chiều: +${fmtMoney(4)} (${d.extraShiftUnits}/${EXTRA_SHIFT_MAX})`, 'good');
      if (d.extraShiftUnits % 2 === 0) this.addReform(1, 'Lao động tự nguyện', true);
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
    this.addReform(auto ? 2 : avg >= 85 ? 4 : 3, auto ? 'Lao động (tự động)' : 'Lao động đủ chỉ tiêu', true);
    if (manual && !auto) this.s.skills.workShifts++;
    this.completeObjective('ca_dau', 'lap_rap');
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
    this.addStat('hunger', -45);
    this.addStat('stamina', 20);
    this.addStat('health', 3);
    this.notify('Ăn xong suất cơm: −45 đói, +20 thể lực.', 'good');
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
    const stressDown = Math.round((4 + 12 * r) * (first ? 1 : 0.5));
    this.addStat('stress', -stressDown);
    this.s.skills.fitness = Math.min(20, this.s.skills.fitness + r * (first ? 1 : 0.4));
    this.notify(`Tập xong: −${stressDown} căng thẳng, thể chất ${this.s.skills.fitness.toFixed(1)}/20.`, 'good');
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
    this.addStat('hunger', 5 * hours);
    const regenMul = (st.hunger >= 70 ? 0.5 : 1) * (1 + this.s.skills.fitness / 20);
    if (ctx.sprinting) this.addStat('stamina', -7 * dtSec);
    else if (ctx.resting) this.addStat('stamina', 6 * dtSec * regenMul);
    else if (ctx.moving) this.addStat('stamina', 0.6 * dtSec * regenMul);
    else this.addStat('stamina', 1.5 * dtSec * regenMul);
    if (ctx.resting) this.addStat('stress', -1.5 * hours);
    if (st.hunger >= 85) {
      this.addStat('health', -4 * hours);
      this.addStat('stress', 3 * hours);
    } else if (st.hunger < 60) this.addStat('health', 1 * hours);
    if (st.stress >= 85) this.addStat('health', -1 * hours);
    if (st.health <= 0) this.faint();
  }

  private faint() {
    this.s.stats.health = 35;
    this.s.stats.stamina = 40;
    this.notify('Bạn ngất xỉu vì kiệt sức! Bạn cùng buồng dìu bạn về nghỉ. Không bị tính vi phạm, nhưng mất thời gian.', 'bad');
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
        this.completeObjective('nhap_trai', 'diem_danh');
      } else {
        d.rollcall = 'missed';
        this.recordViolation('missed_rollcall', `d${this.s.day}`, 'Quản giáo Lan điểm danh 06:30–07:00, không có mặt.');
      }
    }
    if (prev < 690 && now >= 690) this.resolveWork();
    if (now >= CURFEW_CHECK && d.curfew === 'pending') {
      if (ctx.inCellblock) d.curfew = 'ok';
      else {
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
      d.work = 'missed';
      this.recordViolation('skip_work', `d${this.s.day}`, d.workClockedIn ? 'Đã chấm công nhưng không hoàn thành sản phẩm nào.' : 'Không chấm công ca sáng 08:00–11:30.', { grace: this.s.day === 1 });
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

    // Hạn lời hứa
    if (this.qStatus('mi_cho_huy') === 'active' && (s.flags['mi_cho_huy:deadline'] as number) <= s.day) {
      this.finishQuest('mi_cho_huy', 'failed', 'Quá hạn — thất hứa');
    }
    const todays = s.violations.filter((v) => v.day === s.day && v.status !== 'overturned' && v.severity > 0);
    if (todays.length === 0) this.addReform(1, 'Một ngày không vi phạm', true);

    const served = serveDay(s, s.day);
    const review = applyReview(s, s.day) ?? undefined;
    if (review) this.event(`Kỳ xét giảm án: −${review.reduction} ngày`);

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

    if (s.sentence.remaining <= 0) {
      s.ending = this.computeEnding();
      this.commit();
      return summary;
    }

    // Qua đêm
    this.addStat('stamina', 100);
    this.addStat('stress', inBed ? -15 : -5);
    this.addStat('hunger', 15);
    if (s.stats.hunger < 70) this.addStat('health', 8);
    this.addStat('suspicion', todays.length === 0 ? -12 : -5);

    s.day += 1;
    s.minute = DAY_START;
    s.daily = makeDaily(s.stats, s.relations);
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
}
