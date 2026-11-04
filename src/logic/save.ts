import { SAVE_VERSION, createInitialState, createStats, xpForNextLevel, type CharacterProfile, type GameState, type Progression } from './state';
import { START_SENTENCE } from './constants';

export const SAVE_KEY = 'ditu-online.save';
export const BACKUP_KEY = 'ditu-online.save.backup-v1';

export interface StorageLike {
  getItem(k: string): string | null;
  setItem(k: string, v: string): void;
  removeItem(k: string): void;
}

interface SaveEnvelope {
  version: number;
  savedAt: number;
  state: GameState;
}

/** Nâng cấp dữ liệu lưu cũ lên phiên bản hiện tại (v1 → v2). */
export function migrate(raw: any, storage?: StorageLike | null): GameState | null {
  if (!raw || typeof raw !== 'object') return null;
  let v = Number(raw.version ?? 0);
  let st = raw.state ?? raw;

  if (v === 0) {
    // Bản thử nghiệm không có version: gộp vào trạng thái mặc định
    st = { ...createInitialState(), ...st, version: 1 };
    v = 1;
  }
  if (v > SAVE_VERSION) return null; // Dữ liệu từ phiên bản tương lai

  // Nếu là save v1 (hoặc chuyển đổi lần đầu), tạo bản sao lưu an toàn trước khi migrate
  if (v === 1 && storage) {
    try {
      storage.setItem(BACKUP_KEY, JSON.stringify(raw));
    } catch {
      // bỏ qua nếu storage đầy
    }
  }

  const def = createInitialState();

  // Khởi tạo profile mặc định nếu save cũ chưa có
  const profile: CharacterProfile = {
    name: st.profile?.name || 'Minh',
    preset: st.profile?.preset ?? 0,
    skin: st.profile?.skin ?? 0xe2b48d,
    hair: st.profile?.hair ?? 0x18181b,
    hairStyle: st.profile?.hairStyle ?? 'short',
    background: st.profile?.background ?? 'mechanic',
    difficulty: st.profile?.difficulty ?? 'normal',
    flashbackChoice: st.profile?.flashbackChoice ?? 'keep_doc',
    introSeen: st.profile?.introSeen ?? true,
  };

  // Khởi tạo progression mặc định nếu save cũ chưa có
  const progression: Progression = {
    level: st.progression?.level ?? 1,
    xp: st.progression?.xp ?? 0,
    skillPoints: st.progression?.skillPoints ?? 0,
    attrs: {
      endurance: st.progression?.attrs?.endurance ?? 2,
      agility: st.progression?.attrs?.agility ?? 2,
      perception: st.progression?.attrs?.perception ?? 1,
      charisma: st.progression?.attrs?.charisma ?? 1,
    },
  };

  // Chuẩn hóa án phạt khởi điểm: chuẩn mới là 30 ngày (đủ hoàn thành trọn vẹn Chương 4)
  const oldTotal = st.sentence?.total ?? START_SENTENCE;
  let remaining = st.sentence?.remaining ?? START_SENTENCE;
  let total = Math.max(START_SENTENCE, oldTotal);
  let sentenceExtendedDays = 0;

  const isCh4Done = Boolean(
    st.quests?.ho_so_giai_trinh?.status === 'done' ||
    st.quests?.ky_xet_cuoi_cung?.status === 'done'
  );

  if (oldTotal === 24) {
    // Save cũ từ chuẩn 24 ngày được điều chỉnh tăng +6 ngày để khớp tiến độ cốt truyện mới
    sentenceExtendedDays = 6;
    remaining = Math.min(total, remaining + 6);
  } else if (!isCh4Done && (st.day ?? 1) >= 10 && remaining <= 8) {
    sentenceExtendedDays = Math.max(6, 12 - remaining);
    remaining += sentenceExtendedDays;
    total = Math.max(total, (st.sentence?.served ?? 0) + remaining);
  }

  const sentence = {
    ...def.sentence,
    ...st.sentence,
    total,
    remaining,
  };

  // Migration chỉ số (v2 -> v3): độ no = 100 - hunger, tinh thần = 100 - stress
  let stats = { ...def.stats, ...st.stats };
  if (v < 3) {
    const rawSt = st.stats || {};
    const hungerVal = typeof rawSt.hunger === 'number' ? rawSt.hunger : 35;
    const stressVal = typeof rawSt.stress === 'number' ? rawSt.stress : 45;
    const satiety = typeof rawSt.satiety === 'number' ? rawSt.satiety : Math.max(0, Math.min(100, 100 - hungerVal));
    const morale = typeof rawSt.morale === 'number' ? rawSt.morale : Math.max(0, Math.min(100, 100 - stressVal));
    stats = {
      ...stats,
      health: rawSt.health ?? def.stats.health,
      stamina: rawSt.stamina ?? def.stats.stamina,
      satiety,
      morale,
      money: rawSt.money ?? def.stats.money,
      reform: rawSt.reform ?? def.stats.reform,
      suspicion: rawSt.suspicion ?? def.stats.suspicion,
    };
  }

  const merged: GameState = {
    ...def,
    ...st,
    profile,
    progression,
    sentence,
    stats: createStats(stats),
    skills: { ...def.skills, ...st.skills },
    settings: { ...def.settings, ...st.settings },
    relations: { ...def.relations, ...st.relations },
    flags: { ...def.flags, ...st.flags },
    version: SAVE_VERSION,
  };
  if (sentenceExtendedDays > 0) {
    merged.flags.sentence_extended_for_reform = sentenceExtendedDays;
    merged.sentence.additions.push({
      day: merged.day,
      amount: sentenceExtendedDays,
      reason: 'Gia hạn thời hạn để hoàn tất chương trình cải tạo và giải trình vụ án'
    });
  }
  healStuckQuests(merged);
  return merged;
}

/**
 * Tự động chữa lành các nhiệm vụ bị kẹt trong dữ liệu lưu cũ (ví dụ: cam_do_im_lang bị kẹt ở v0.4.9).
 */
export function healStuckQuests(s: GameState): boolean {
  if (!s || !s.quests) return false;
  let healed = false;

  const camDo = s.quests.cam_do_im_lang;
  if (camDo && camDo.status === 'active') {
    const flags = s.flags || (s.flags = {});
    const doneGap = !!flags['cam_do_im_lang:gap_lam_ch3'];
    const doneQuyetDinh = !!flags['cam_do_im_lang:quyet_dinh_im_lang'] || !!flags['cam_do_im_lang:quyet_dinh'];

    if (doneGap && doneQuyetDinh) {
      const branch: 'accept' | 'refuse' = flags.accepted_lam_bribe ? 'accept' : ((flags['cam_do_im_lang:branch'] as any) || 'refuse');
      flags['cam_do_im_lang:branch'] = branch;
      flags['cam_do_im_lang:gap_lam_ch3'] = true;
      flags['cam_do_im_lang:quyet_dinh_im_lang'] = true;

      camDo.status = 'done';
      camDo.outcome = branch === 'accept' ? 'Nhận tiền im lặng' : 'Từ chối mua chuộc';

      const branchDesc = branch === 'accept'
        ? 'Thỏa hiệp nhận 50.000đ và dừng đào sâu sự thật'
        : 'Kiên quyết từ chối, quyết tâm tìm lại sự trong sạch';
      camDo.choices = camDo.choices || [];
      if (!camDo.choices.includes(branchDesc)) {
        camDo.choices.push(branchDesc);
      }

      if (!camDo.rewarded) {
        camDo.rewarded = true;
        if (!s.progression) {
          s.progression = { level: 1, xp: 0, skillPoints: 0, attrs: { endurance: 2, agility: 2, perception: 1, charisma: 1 } };
        }
        s.progression.xp = (s.progression.xp || 0) + 70;
        while (s.progression.level < 10) {
          const needed = xpForNextLevel(s.progression.level);
          if (s.progression.xp >= needed) {
            s.progression.xp -= needed;
            s.progression.level += 1;
            s.progression.skillPoints = (s.progression.skillPoints || 0) + 1;
          } else {
            break;
          }
        }
      }

      if (!s.quests.bay_vat_cam || s.quests.bay_vat_cam.status === 'locked') {
        s.quests.bay_vat_cam = {
          status: 'active',
          step: 0,
          choices: [],
          rewarded: false,
          startedDay: s.day || 1,
        };
      }

      if (s.daily?.tasks) {
        for (const t of s.daily.tasks) {
          if (t.id === 'personal_quest' && (t.title.includes('im lặng') || t.title.includes('Lời đề nghị'))) {
            t.done = true;
          }
        }
      }

      healed = true;
    }
  }

  // Tự mở bay_vat_cam nếu cam_do_im_lang đã done mà bay_vat_cam chưa mở (nhánh accept ở v0.4.9)
  if (s.quests.cam_do_im_lang?.status === 'done') {
    if (!s.quests.bay_vat_cam || s.quests.bay_vat_cam.status === 'locked') {
      s.quests.bay_vat_cam = {
        status: 'active',
        step: 0,
        choices: [],
        rewarded: false,
        startedDay: s.day || 1,
      };
      healed = true;
    }
  }

  // Tương thích ngược & bảo vệ tiến trình cho nghi_an_thuoc (Đợt 2)
  const nghiAn = s.quests.nghi_an_thuoc;
  if (nghiAn && nghiAn.status === 'active') {
    const flags = s.flags || (s.flags = {});
    if (flags['nghi_an_thuoc:hoi_bay'] && !flags['nghi_an_thuoc:branch']) {
      if (flags['nghi_an_thuoc:nhat_thuoc']) {
        flags['nghi_an_thuoc:branch'] = 'basic';
        flags['nghi_an_thuoc:quyet_dinh'] = true;
        healed = true;
      }
    }
  }
  if (s.quests.nghi_an_thuoc?.status === 'done') {
    if (!s.quests.manh_moi_kho_7 || s.quests.manh_moi_kho_7.status === 'locked') {
      s.quests.manh_moi_kho_7 = {
        status: 'active',
        step: 0,
        choices: [],
        rewarded: false,
        startedDay: s.day || 1,
      };
      healed = true;
    }
  }

  return healed;
}

export function exportSaveString(state: GameState): string {
  const env: SaveEnvelope = { version: SAVE_VERSION, savedAt: Date.now(), state };
  const json = JSON.stringify(env);
  if (typeof btoa !== 'undefined') {
    try {
      return btoa(encodeURIComponent(json));
    } catch {
      return json;
    }
  }
  return json;
}

export function importSaveString(code: string, storage?: StorageLike | null): { success: boolean; state?: GameState; error?: string } {
  try {
    let json = code.trim();
    if (typeof atob !== 'undefined') {
      try {
        json = decodeURIComponent(atob(json));
      } catch {
        // May already be raw JSON
      }
    }
    const parsed = JSON.parse(json);
    if (!parsed || typeof parsed !== 'object') {
      return { success: false, error: 'Định dạng mã sao lưu không hợp lệ.' };
    }
    const state = migrate(parsed, storage);
    if (!state || !state.player || !state.stats || !state.quests) {
      return { success: false, error: 'Dữ liệu save bị thiếu hoặc không tương thích phiên bản.' };
    }
    return { success: true, state };
  } catch (err: any) {
    return { success: false, error: 'Không thể giải mã bản sao lưu: ' + (err?.message || 'Lỗi cú pháp') };
  }
}

export function serialize(state: GameState): string {
  const env: SaveEnvelope = { version: SAVE_VERSION, savedAt: Date.now(), state };
  return JSON.stringify(env);
}

export function deserialize(text: string, storage?: StorageLike | null): GameState | null {
  try {
    return migrate(JSON.parse(text), storage);
  } catch {
    return null;
  }
}

export class SaveManager {
  constructor(private storage: StorageLike | null, private key = SAVE_KEY) {}

  save(state: GameState): boolean {
    if (!this.storage) return false;
    try {
      this.storage.setItem(this.key, serialize(state));
      return true;
    } catch {
      return false;
    }
  }

  load(): GameState | null {
    if (!this.storage) return null;
    const t = this.storage.getItem(this.key);
    return t ? deserialize(t, this.storage) : null;
  }

  exists() {
    return !!this.storage?.getItem(this.key);
  }

  hasBackup(): boolean {
    return !!this.storage?.getItem(BACKUP_KEY);
  }

  loadBackup(): GameState | null {
    return this.restoreBackup();
  }

  restoreBackup(): GameState | null {
    if (!this.storage) return null;
    const b = this.storage.getItem(BACKUP_KEY);
    if (!b) return null;
    const st = deserialize(b, this.storage);
    if (st) {
      this.save(st);
      return st;
    }
    return null;
  }

  clear() {
    this.storage?.removeItem(this.key);
  }

  exportSave(state: GameState): string {
    return exportSaveString(state);
  }

  importSave(code: string): { success: boolean; state?: GameState; error?: string } {
    const res = importSaveString(code, this.storage);
    if (res.success && res.state) {
      this.save(res.state);
    }
    return res;
  }

  savedAt(): number | null {
    const t = this.storage?.getItem(this.key);
    if (!t) return null;
    try {
      return JSON.parse(t).savedAt ?? null;
    } catch {
      return null;
    }
  }
}
