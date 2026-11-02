import { SAVE_VERSION, createInitialState, createStats, type CharacterProfile, type GameState, type Progression } from './state';
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

  // Nếu án cũ đang để 30 ngày (chuẩn v1), chuyển đổi tương thích sang 24 ngày chuẩn v2
  const oldTotal = st.sentence?.total ?? START_SENTENCE;
  const sentence = {
    ...def.sentence,
    ...st.sentence,
    total: START_SENTENCE,
    remaining: oldTotal === 30
      ? Math.max(0, Math.min(START_SENTENCE, Math.round((st.sentence.remaining ?? 30) * (24 / 30))))
      : (st.sentence?.remaining ?? START_SENTENCE),
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
    version: SAVE_VERSION,
  };
  return merged;
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
