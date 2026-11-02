// Hằng số thời gian & lịch sinh hoạt. Thời gian tính bằng "phút trong ngày" (0..1440).

export const DAY_START = 6 * 60; // 06:00
export const DAY_END = 22 * 60; // 22:00 tắt đèn
/** 960 phút game ≈ 720 giây thực (12 phút) → 4/3 phút game mỗi giây thực. */
export const GAME_MIN_PER_SEC = (DAY_END - DAY_START) / 720;

export const START_SENTENCE = 30;
export const REVIEW_INTERVAL = 5;
export const MAX_REVIEW_REDUCTION = 3;
/** Trần cộng án tổng cộng để người chơi không bao giờ mất đường tiến triển. */
export const MAX_TOTAL_ADDITION = 8;
/** Trần điểm cải tạo nhận từ hoạt động lặp lại mỗi ngày (chống cày). */
export const DAILY_REFORM_CAP = 8;

export type BlockId =
  | 'wake' | 'rollcall' | 'breakfast' | 'work' | 'lunch' | 'rest'
  | 'free1' | 'dinner' | 'free2' | 'curfew';

export interface ScheduleBlock {
  id: BlockId;
  start: number;
  end: number;
  label: string;
  where: string;
  mandatory?: boolean;
}

export const SCHEDULE: ScheduleBlock[] = [
  { id: 'wake', start: 360, end: 390, label: 'Thức dậy, vệ sinh cá nhân', where: 'Buồng giam' },
  { id: 'rollcall', start: 390, end: 420, label: 'Điểm danh sáng', where: 'Sân (ô vàng)', mandatory: true },
  { id: 'breakfast', start: 420, end: 480, label: 'Ăn sáng', where: 'Nhà ăn' },
  { id: 'work', start: 480, end: 690, label: 'Lao động', where: 'Xưởng', mandatory: true },
  { id: 'lunch', start: 690, end: 750, label: 'Ăn trưa', where: 'Nhà ăn' },
  { id: 'rest', start: 750, end: 810, label: 'Nghỉ trưa', where: 'Buồng giam' },
  { id: 'free1', start: 810, end: 990, label: 'Sinh hoạt tự do / ca chiều tự nguyện', where: 'Sân, Xưởng' },
  { id: 'dinner', start: 990, end: 1050, label: 'Ăn tối', where: 'Nhà ăn' },
  { id: 'free2', start: 1050, end: 1260, label: 'Tự do, căn tin mở', where: 'Sân, Nhà ăn' },
  { id: 'curfew', start: 1260, end: 1320, label: 'Về buồng, chuẩn bị ngủ', where: 'Buồng giam', mandatory: true },
];

export const ROLLCALL_ON_TIME_END = 405; // 06:45
export const WORK_CLOCKIN_DEADLINE = 510; // 08:30
export const CURFEW_CHECK = 1290; // 21:30

export function blockAt(minute: number): ScheduleBlock {
  for (const b of SCHEDULE) if (minute >= b.start && minute < b.end) return b;
  return SCHEDULE[SCHEDULE.length - 1];
}

export function nextBlock(minute: number): ScheduleBlock | null {
  for (const b of SCHEDULE) if (b.start > minute) return b;
  return null;
}

export function fmtTime(minute: number): string {
  const m = Math.floor(minute);
  const h = Math.floor(m / 60) % 24;
  const mm = m % 60;
  return `${String(h).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

export function fmtMoney(k: number): string {
  return `${(k * 1000).toLocaleString('vi-VN')}đ`;
}

/** Giờ mở cửa các khu. */
export interface AccessRule {
  open: [number, number][];
  label: string;
  reason: string;
}

export const ACCESS: Record<string, AccessRule> = {
  mess: {
    open: [[420, 480], [690, 750], [990, 1260]],
    label: 'Nhà ăn & căn tin',
    reason: 'Nhà ăn chỉ mở giờ ăn (07:00–08:00, 11:30–12:30, 16:30–17:30) và căn tin buổi tối đến 21:00.',
  },
  workshop: {
    open: [[480, 690], [810, 990]],
    label: 'Xưởng lao động',
    reason: 'Xưởng mở ca sáng 08:00–11:30 (bắt buộc) và ca chiều tự nguyện 13:30–16:30.',
  },
  office: {
    open: [[420, 1020]],
    label: 'Phòng quản giáo',
    reason: 'Phòng quản giáo tiếp nhận phạm nhân 07:00–17:00 để báo cáo, khiếu nại, giải trình.',
  },
  storage: {
    open: [[480, 690]],
    label: 'Kho vật tư (khu cấm)',
    reason: 'Kho chỉ mở cửa trong ca sáng để tổ trưởng lấy vật tư; ngoài giờ cán bộ Tùng khoá và giữ chìa.',
  },
  cellblock: {
    open: [[0, 1290]],
    label: 'Khu buồng giam',
    reason: 'Sau 21:30 khu buồng giam khoá cửa ngoài.',
  },
  discipline: {
    open: [],
    label: 'Khu kỷ luật',
    reason: 'Khu kỷ luật chỉ mở khi có quyết định kỷ luật của Ban giám thị (sẽ có ở bản cập nhật Mốc 2).',
  },
};

export function isOpen(area: string, minute: number): boolean {
  const r = ACCESS[area];
  if (!r) return true;
  return r.open.some(([a, b]) => minute >= a && minute < b);
}
