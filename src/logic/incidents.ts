import type { GameState } from './state';

export type IncidentType = 'workshop_blackout' | 'heavy_rain' | 'cell_inspection';

export interface IncidentState {
  id: IncidentType;
  title: string;
  description: string;
  day: number;
  status: 'active' | 'resolved' | 'dismissed' | 'expired';
  choice?: string;
  startMinute: number;
  endMinute: number;
  rewardClaimed?: boolean;
  notified?: boolean;
}

/** PRNG Mulberry32 có thể tái lập với seed bất kỳ. */
export function createPrng(seed: number) {
  let s = (seed | 0) >>> 0;
  return function next(): number {
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Kiểm tra xem xưởng có đang ở trong nhiệm vụ cốt truyện xung đột không. */
export function isWorkshopStoryConflicted(s: GameState): boolean {
  // 1. ca_dau: đang ở bước đầu chưa chấm công
  if (s.quests.ca_dau?.status === 'active' && !s.flags['ca_dau:cham_cong']) {
    return true;
  }
  // 2. nghi_an_thuoc: đang ở bước thu hồi thuốc tại xưởng (len_lut hoặc thu_hoi_hoc_tuong)
  if (s.quests.nghi_an_thuoc?.status === 'active') {
    const branch = (s.flags['nghi_an_thuoc:branch'] as string) || '';
    if (branch === 'stealth' && !s.flags['nghi_an_thuoc:len_lut']) return true;
    if (branch === 'observe' && !s.flags['nghi_an_thuoc:thu_hoi_hoc_tuong']) return true;
  }
  // 3. manh_moi_kho_7: đang điều tra kho xưởng
  if (s.quests.manh_moi_kho_7?.status === 'active') {
    return true;
  }
  return false;
}

/** Cấu hình chi tiết của 3 loại biến cố sinh hoạt */
export const INCIDENT_CONFIGS: Record<IncidentType, {
  title: string;
  description: string;
  startMinute: number;
  endMinute: number;
}> = {
  workshop_blackout: {
    title: 'Mất điện xưởng',
    description: 'Xưởng mộc bị nhảy cầu dao aptomat và mất điện tạm thời. Máy móc ngưng chạy, cần kiểm tra hoặc chờ thợ bảo trì.',
    startMinute: 510, // 08:30 (sau khi ca sáng bắt đầu)
    endMinute: 690,   // 11:30 (kết thúc ca sáng)
  },
  heavy_rain: {
    title: 'Mưa lớn',
    description: 'Trời mưa lớn trên diện rộng, sân trại ướt và trơn trượt. Phạm nhân có thể vận động tập thể lực trong buồng giam.',
    startMinute: 360, // 06:00 (đầu ngày)
    endMinute: 1080,  // 18:00 (hết buổi chiều)
  },
  cell_inspection: {
    title: 'Kiểm tra nội vụ',
    description: 'Cán bộ phát loa thông báo kiểm tra trật tự nội vụ buồng giam, yêu cầu chăn màn gấp vuông góc, gối chiếu phẳng phiu.',
    startMinute: 370, // 06:10
    endMinute: 480,   // 08:00 (trước giờ lao động)
  },
};

/**
 * Sinh biến cố ngẫu nhiên có kiểm soát cho một ngày mới:
 * - Ngày 1: Không có biến cố.
 * - Cooldown: Ít nhất 2 ngày sau một biến cố.
 * - Pity counter: Nếu quá 4 ngày chưa có biến cố thì chắc chắn kích hoạt.
 * - Chống lặp loại biến cố liên tiếp.
 * - Kiểm tra xung đột cốt truyện với xưởng.
 */
export function generateDailyIncident(s: GameState, seedOverride?: number): IncidentState | null {
  if (s.day <= 1) return null;

  // Lấy lịch sử biến cố từ cờ trạng thái
  const lastIncidentDay = (s.flags.last_incident_day as number) || 0;
  const lastIncidentType = (s.flags.last_incident_type as IncidentType) || null;
  const daysSinceLast = s.day - lastIncidentDay;

  // Cooldown tối thiểu 2 ngày (tức là sau ngày biến cố, ít nhất 1 ngày hoàn toàn bình thường)
  if (daysSinceLast < 2) return null;

  // Khởi tạo PRNG tái lập được từ seed: seed kết hợp day và salt
  const seed = seedOverride !== undefined
    ? seedOverride
    : ((s.createdAt & 0xffff) * 31 + s.day * 1337 + (daysSinceLast * 47)) >>> 0;
  const rng = createPrng(seed);

  // Xác suất kích hoạt tăng dần theo thời gian kể từ biến cố gần nhất
  // daysSinceLast == 2: 35%
  // daysSinceLast == 3: 60%
  // daysSinceLast >= 4: 100% (pity counter)
  let triggerChance = 0.35;
  if (daysSinceLast === 3) triggerChance = 0.60;
  else if (daysSinceLast >= 4) triggerChance = 1.0;

  const roll = rng();
  if (roll > triggerChance) return null;

  // Danh sách biến cố khả thi
  const candidates: IncidentType[] = ['workshop_blackout', 'heavy_rain', 'cell_inspection'];

  // Lọc biến cố xung đột cốt truyện
  const validCandidates = candidates.filter((id) => {
    if (id === 'workshop_blackout' && isWorkshopStoryConflicted(s)) return false;
    return true;
  });

  if (validCandidates.length === 0) return null;

  // Ưu tiên không lặp loại biến cố vừa xảy ra gần nhất
  let preferred = validCandidates.filter((id) => id !== lastIncidentType);
  if (preferred.length === 0) preferred = validCandidates;

  const chosenIndex = Math.floor(rng() * preferred.length);
  const chosenType = preferred[chosenIndex];
  const cfg = INCIDENT_CONFIGS[chosenType];

  return {
    id: chosenType,
    title: cfg.title,
    description: cfg.description,
    day: s.day,
    status: 'active',
    startMinute: cfg.startMinute,
    endMinute: cfg.endMinute,
    rewardClaimed: false,
    notified: false,
  };
}
