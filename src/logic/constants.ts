// Hằng số thời gian & lịch sinh hoạt. Thời gian tính bằng "phút trong ngày" (0..1440).

export const DAY_START = 6 * 60; // 06:00
export const DAY_END = 22 * 60; // 22:00 tắt đèn
/** 960 phút game ≈ 420 giây thực (7 phút) → 960/420 phút game mỗi giây thực. */
export const GAME_MIN_PER_SEC = (DAY_END - DAY_START) / 420;

export const START_SENTENCE = 24;
export const REVIEW_INTERVAL = 4;
export const MAX_REVIEW_REDUCTION = 2;
/** Trần cộng án tổng cộng để người chơi không bao giờ mất đường tiến triển. */
export const MAX_TOTAL_ADDITION = 8;
/** Trần điểm cải tạo nhận từ hoạt động lặp lại mỗi ngày (chống cày). */
export const DAILY_REFORM_CAP = 8;

export type BackgroundId = 'mechanic' | 'courier' | 'clerk';
export type Difficulty = 'easy' | 'normal' | 'hard';
export type AttributeId = 'endurance' | 'agility' | 'perception' | 'charisma';

export interface BackgroundDef {
  id: BackgroundId;
  name: string;
  tagline: string;
  desc: string;
  casePerspective: string;
  pros: string;
  cons: string;
  bonusAttrs: { endurance?: number; agility?: number; perception?: number; charisma?: number };
}

export const BACKGROUNDS: Record<BackgroundId, BackgroundDef> = {
  mechanic: {
    id: 'mechanic',
    name: 'Thợ sửa xe',
    tagline: 'Giỏi thao tác máy móc, quen áp lực công xưởng',
    desc: 'Từng là thợ máy lành nghề ở ngoại ô, Minh nhận sửa gấp chiếc xe tải lạ vào ban đêm và che giấu linh kiện khả nghi vì cần tiền chữa bệnh cho em gái.',
    casePerspective: 'Nhận việc sửa chiếc xe liên quan đến một vụ trộm hàng; khi phát hiện dấu hiệu bất thường đã lựa chọn che giấu vì cần tiền.',
    pros: '+1 Bền bỉ, +1 Khéo léo; mở cách sửa máy xưởng, tăng vùng chính xác mini-game.',
    cons: 'Ít kinh nghiệm sổ sách, cần sự hỗ trợ khi giải mã chứng từ phức tạp.',
    bonusAttrs: { endurance: 1, agility: 1 },
  },
  courier: {
    id: 'courier',
    name: 'Nhân viên giao hàng',
    tagline: 'Nhanh nhẹn, thông thạo đường sá và nhạy bén thời gian',
    desc: 'Làm nghề giao hàng nhiều năm, quen từng ngõ ngách. Vì áp lực tiền trả góp, Minh nhận chở một kiện hàng không hóa đơn đến Kho số 7.',
    casePerspective: 'Nhận một chuyến hàng ngoài sổ sách; vì áp lực tài chính đã bỏ qua dấu hiệu đáng ngờ lúc bốc dỡ.',
    pros: '+1 Bền bỉ, +1 Quan sát; mở hướng tìm đường tắt, đối chiếu chính xác dòng thời gian sự kiện.',
    cons: 'Không có nghiệp vụ máy móc phức tạp, đàm phán cần thêm chứng cứ rõ ràng.',
    bonusAttrs: { endurance: 1, perception: 1 },
  },
  clerk: {
    id: 'clerk',
    name: 'Nhân viên sổ sách',
    tagline: 'Cẩn thận, nhạy bén với số liệu và chứng từ pháp lý',
    desc: 'Từng làm kế toán kho vận, Minh bị người quen thuyết phục ký xác nhận khống một phiếu xuất kho sai lệch, sau đó hỏa hoạn xảy ra thiêu rụi chứng cứ gốc.',
    casePerspective: 'Ký xác nhận một chứng từ sai sau khi bị người quen thuyết phục và hứa hẹn bù đắp.',
    pros: '+1 Quan sát, +1 Giao tiếp; phát hiện sai sót chứng từ, đàm phán và thuyết phục Quản giáo.',
    cons: 'Thể lực ban đầu trung bình, cần thời gian làm quen với lao động chân tay nặng.',
    bonusAttrs: { perception: 1, charisma: 1 },
  },
};

export interface DifficultyDef {
  id: Difficulty;
  name: string;
  desc: string;
  hitZoneMultiplier: number;
  canteenPriceMultiplier: number;
  warningNoticeMinutes: number;
}

export const DIFFICULTIES: Record<Difficulty, DifficultyDef> = {
  easy: {
    id: 'easy',
    name: 'Dễ (Trải nghiệm)',
    desc: 'Gợi ý rõ ràng, vùng thao tác mini-game rộng (+25%), cảnh báo trước giờ điểm danh/lao động sớm 30 phút.',
    hitZoneMultiplier: 1.25,
    canteenPriceMultiplier: 0.85,
    warningNoticeMinutes: 30,
  },
  normal: {
    id: 'normal',
    name: 'Thường (Cân bằng)',
    desc: 'Trải nghiệm chuẩn mực, yêu cầu quản lý thời gian và đưa ra quyết định hợp lý.',
    hitZoneMultiplier: 1.0,
    canteenPriceMultiplier: 1.0,
    warningNoticeMinutes: 15,
  },
  hard: {
    id: 'hard',
    name: 'Khó (Thử thách)',
    desc: 'Thao tác đòi hỏi độ chính xác cao, giá đồ căn tin cao hơn, nguồn lực eo hẹp hơn.',
    hitZoneMultiplier: 0.85,
    canteenPriceMultiplier: 1.15,
    warningNoticeMinutes: 5,
  },
};

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
  medical: {
    open: [[450, 690], [810, 1020]],
    label: 'Phòng y tế',
    reason: 'Phòng y tế mở cửa tiếp nhận phạm nhân 07:30–11:30 và 13:30–17:00.',
  },
  classroom: {
    open: [[840, 990], [1140, 1260]],
    label: 'Lớp học nghề & thư viện',
    reason: 'Lớp học mở ca chiều 14:00–16:30 và giờ đọc sách buổi tối 19:00–21:00.',
  },
  visitation: {
    open: [[480, 660], [840, 1020]],
    label: 'Phòng thăm gặp',
    reason: 'Phòng thăm gặp tiếp đón người thân theo lịch hẹn (08:00–11:00 & 14:00–17:00).',
  },
  discipline: {
    open: [],
    label: 'Khu kỷ luật',
    reason: 'Khu kỷ luật chỉ mở khi có quyết định kỷ luật cách ly của Ban giám thị.',
  },
};

export function isOpen(area: string, minute: number): boolean {
  const r = ACCESS[area];
  if (!r) return true;
  return r.open.some(([a, b]) => minute >= a && minute < b);
}
