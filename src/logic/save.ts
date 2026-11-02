import { SAVE_VERSION, createInitialState, type GameState } from './state';

export const SAVE_KEY = 'ditu-online.save';

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

/** Nâng cấp dữ liệu lưu cũ lên phiên bản hiện tại. */
export function migrate(raw: any): GameState | null {
  if (!raw || typeof raw !== 'object') return null;
  let v = Number(raw.version ?? 0);
  let st = raw.state ?? raw;
  if (v === 0) {
    // Bản thử nghiệm không có version: gộp vào trạng thái mặc định
    st = { ...createInitialState(), ...st, version: 1 };
    v = 1;
  }
  if (v > SAVE_VERSION) return null; // dữ liệu từ phiên bản mới hơn — không đọc để tránh hỏng
  // Đảm bảo đủ trường (thêm trường mới sau này)
  const def = createInitialState();
  const merged: GameState = {
    ...def,
    ...st,
    stats: { ...def.stats, ...st.stats },
    sentence: { ...def.sentence, ...st.sentence },
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

export function deserialize(text: string): GameState | null {
  try {
    return migrate(JSON.parse(text));
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
    return t ? deserialize(t) : null;
  }

  exists() {
    return !!this.storage?.getItem(this.key);
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
