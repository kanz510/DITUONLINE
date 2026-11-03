import { LAN_ROLLCALL, MESS_SEATS, NODES, rollcallSlot } from '../world/layout';
import type { NpcId } from '../logic/state';

export type Pose = 'stand' | 'walk' | 'sit' | 'work' | 'talk';

export interface Appearance {
  uniform: 'inmate' | 'inmate-orange' | 'officer' | 'medic' | 'visitor';
  skin: number;
  hair: number;
  hairStyle: 'short' | 'bald' | 'bun' | 'buzz';
  accent: number;
  height: number;
  build: number;
  cap?: boolean;
  glasses?: boolean;
}

export interface ScheduleSlot {
  from: number;
  to: number;
  node: string;
  pos?: [number, number];
  rot?: number;
  pose: Pose;
  activity: string;
  patrol?: string[]; // các node tuần tra
}

export interface NpcDef {
  id: NpcId;
  name: string;
  role: string;
  bio: string;
  personality: string;
  goal: string;
  story: boolean;
  look: Appearance;
  schedule: ScheduleSlot[];
  whereHint: string;
}

function inmateSchedule(
  cell: string, bedPos: [number, number], rcIdx: number, seatIdx: number,
  benchNode: string, benchPos: [number, number],
  free1Node: string, free1Pos: [number, number], free1Pose: Pose, free1Act: string,
  free2Node: string, free2Pos: [number, number], free2Pose: Pose, free2Act: string,
): ScheduleSlot[] {
  const [sx, sz, srot] = MESS_SEATS[seatIdx];
  return [
    { from: 360, to: 390, node: cell, pos: bedPos, rot: 0, pose: 'stand', activity: 'Chuẩn bị buổi sáng' },
    { from: 390, to: 420, node: 'rc', pos: rollcallSlot(rcIdx), rot: Math.PI, pose: 'stand', activity: 'Đứng điểm danh' },
    { from: 420, to: 480, node: 'messAisle', pos: [sx, sz], rot: srot, pose: 'sit', activity: 'Ăn sáng' },
    { from: 480, to: 690, node: benchNode, pos: benchPos, rot: Math.PI, pose: 'work', activity: 'Lắp ráp ở xưởng' },
    { from: 690, to: 750, node: 'messAisle', pos: [sx, sz], rot: srot, pose: 'sit', activity: 'Ăn trưa' },
    { from: 750, to: 810, node: cell, pos: bedPos, rot: 0, pose: 'sit', activity: 'Nghỉ trưa' },
    { from: 810, to: 990, node: free1Node, pos: free1Pos, rot: 0, pose: free1Pose, activity: free1Act },
    { from: 990, to: 1050, node: 'messAisle', pos: [sx, sz], rot: srot, pose: 'sit', activity: 'Ăn tối' },
    { from: 1050, to: 1260, node: free2Node, pos: free2Pos, rot: 0, pose: free2Pose, activity: free2Act },
    { from: 1260, to: 1320, node: cell, pos: bedPos, rot: 0, pose: 'sit', activity: 'Về buồng nghỉ' },
  ];
}

export const NPCS: Record<NpcId, NpcDef> = {
  bay: {
    id: 'bay', name: 'Chú Bảy', role: 'Phạm nhân lâu năm · Buồng 3',
    bio: '56 tuổi, từng làm thợ điện, ở trại đã hơn 3 năm. Ít nói nhưng để ý từng người mới.',
    personality: 'Điềm đạm, trọng chữ tín, ghét trò bắt nạt.',
    goal: 'Giữ hồ sơ sạch để về kịp đám cưới con gái và xin lỗi vợ con.',
    story: true,
    look: { uniform: 'inmate', skin: 0xd8a882, hair: 0xb7bec9, hairStyle: 'short', accent: 0x2b6cb0, height: 0.98, build: 1.06, glasses: true },
    whereHint: 'Buồng 3 (sáng sớm/trưa/tối), Nhà ăn (giờ ăn), Bàn lắp ráp #2 (ca sáng), Bàn cờ đá ngoài sân (giờ tự do).',
    schedule: inmateSchedule(
      'c3', [-12.9, -28.8], 0, 0,
      'wsB2', NODES.wsB2,
      'yBench', [-10, 3.3], 'sit', 'Ngồi bên bàn cờ đá',
      'yBench', [-10, 3.3], 'sit', 'Hóng mát ngoài sân',
    ),
  },
  huy: {
    id: 'huy', name: 'Huy', role: 'Bạn cùng buồng · Buồng 3',
    bio: '22 tuổi, vào trại vì đánh nhau. Hay bốc đồng nhưng ai tốt với mình thì nhớ rất lâu.',
    personality: 'Nóng nảy, sĩ diện, trọng tình bạn.',
    goal: 'Thoát khỏi khoản nợ với Lâm mà không bị kéo sâu hơn.',
    story: true,
    look: { uniform: 'inmate-orange', skin: 0xe9b98f, hair: 0x7c3428, hairStyle: 'buzz', accent: 0xffbd73, height: 1.0, build: 0.96 },
    whereHint: 'Buồng 3 (sáng sớm/trưa/tối), Nhà ăn (giờ ăn), Bàn lắp ráp #3 (ca sáng), Khu xà đơn hoặc căn tin (giờ tự do).',
    schedule: inmateSchedule(
      'c3', [-15.2, -26.5], 1, 1,
      'wsB3', NODES.wsB3,
      'yEx', [-20.6, 3.8], 'stand', 'Đứng gần khu xà đơn',
      'messCanteen', [12.5, -28.8], 'stand', 'Đứng nhìn quầy căn tin',
    ),
  },
  lam: {
    id: 'lam', name: 'Lâm', role: 'Tổ trưởng tự phong · Buồng 4',
    bio: '34 tuổi, khéo miệng trước mặt cán bộ, đứng sau các khoản vay mượn và hàng lậu nhỏ trong khu.',
    personality: 'Thực dụng, tính toán, không bao giờ tự làm việc bẩn tay.',
    goal: 'Giữ thế lực trong khu mà hồ sơ vẫn sạch.',
    story: true,
    look: { uniform: 'inmate', skin: 0xc99672, hair: 0x191614, hairStyle: 'bald', accent: 0x991b1b, height: 1.04, build: 1.18 },
    whereHint: 'Buồng 4, Nhà ăn (giờ ăn), Bàn lắp ráp #4 (ca sáng), Góc khuất sau xưởng (13:30–16:30), Ghế đá sân (tối).',
    schedule: inmateSchedule(
      'c4', [-8.75, -28.4], 2, 4,
      'wsB4', NODES.wsB4,
      'lamCorner', [20, 12.5], 'stand', 'Đứng ở góc khuất sau xưởng',
      'yBench2', [-16, 3.6], 'sit', 'Ngồi ghế đá quan sát sân',
    ),
  },
  lan: {
    id: 'lan', name: 'Quản giáo Lan', role: 'Quản giáo phụ trách Khu A',
    bio: '38 tuổi, làm việc nguyên tắc, chỉ tin vào hồ sơ, nhân chứng và bằng chứng cụ thể.',
    personality: 'Nghiêm khắc, công bằng, ghét bao biện nhưng luôn lắng nghe khi có căn cứ.',
    goal: 'Giữ trật tự Khu A và giúp người thực tâm cải tạo sớm trở về.',
    story: true,
    look: { uniform: 'officer', skin: 0xe5b894, hair: 0x282128, hairStyle: 'bun', accent: 0x93c5fd, height: 0.99, build: 0.94, cap: true },
    whereHint: 'Ô điểm danh (06:30–07:00), Phòng quản giáo phía Nam sân (07:00–17:00), Tuần tra sân (buổi tối).',
    schedule: [
      { from: 360, to: 390, node: 'offLan', pos: [-4, 17.3], rot: Math.PI, pose: 'stand', activity: 'Chuẩn bị sổ điểm danh' },
      { from: 390, to: 420, node: 'rc', pos: LAN_ROLLCALL, rot: 0, pose: 'stand', activity: 'Điểm danh sáng' },
      { from: 420, to: 1020, node: 'offLan', pos: [-4, 17.3], rot: Math.PI, pose: 'sit', activity: 'Làm việc tại phòng quản giáo' },
      { from: 1020, to: 1260, node: 'yC', pose: 'walk', activity: 'Tuần tra sân', patrol: ['yC', 'yE', 'yS', 'yW'] },
      { from: 1260, to: 1320, node: 'cbOut', pos: [-17, -15.5], rot: Math.PI, pose: 'stand', activity: 'Giám sát giờ về buồng' },
    ],
  },
  tung: {
    id: 'tung', name: 'Cán bộ Tùng', role: 'Cán bộ trật tự & xưởng',
    bio: '30 tuổi, phụ trách trông coi xưởng lao động và kiểm tra buồng giam.',
    personality: 'Cẩn thận, đi tuần đúng tuyến.',
    goal: 'Không để thất thoát vật tư xưởng.',
    story: true,
    look: { uniform: 'officer', skin: 0xd9a982, hair: 0x171a26, hairStyle: 'short', accent: 0xbfdbfe, height: 1.03, build: 1.09, cap: true },
    whereHint: 'Xưởng lao động (giờ làm việc), Tuần tra sân & hành lang (ngoài giờ).',
    schedule: [
      { from: 360, to: 480, node: 'cbOut', pose: 'walk', activity: 'Tuần tra buổi sáng', patrol: ['cbOut', 'rc', 'messOut', 'yC'] },
      { from: 480, to: 690, node: 'wsHub', pose: 'walk', activity: 'Giám sát xưởng', patrol: ['wsBoard', 'wsHub', 'wsRow', 'wsRow2', 'wsHub', 'wsStoreOut'] },
      { from: 690, to: 810, node: 'messOut', pose: 'walk', activity: 'Trực giờ trưa', patrol: ['messOut', 'yE', 'yC'] },
      { from: 810, to: 990, node: 'wsHub', pose: 'walk', activity: 'Trực ca chiều', patrol: ['wsIn', 'wsHub', 'wsRow', 'wsRow2'] },
      { from: 990, to: 1260, node: 'yE', pose: 'walk', activity: 'Tuần tra tối', patrol: ['messOut', 'yE', 'yS', 'cbOut'] },
      { from: 1260, to: 1320, node: 'corC', pose: 'walk', activity: 'Kiểm tra buồng giam', patrol: ['cor1', 'cor2', 'cor3', 'cor4'] },
    ],
  },
  tu: {
    id: 'tu', name: 'Anh Tư', role: 'Phạm nhân · Buồng 1',
    bio: 'Phạm nhân phụ bếp và làm mộc.',
    personality: 'Hiền lành, ít chuyện.',
    goal: 'Chấp hành xong án.',
    story: false,
    look: { uniform: 'inmate-orange', skin: 0xd5a27c, hair: 0x543a27, hairStyle: 'short', accent: 0xffd28a, height: 0.99, build: 1.08 },
    whereHint: 'Buồng 1, Nhà ăn, Xưởng.',
    schedule: inmateSchedule('c1', [-25.25, -27.8], 3, 2, 'wsRest', [24.2, 4.5], 'yBench2', [-15, 3.6], 'stand', 'Đi dạo sân', 'yC', [-3.8, -5.2], 'stand', 'Hóng gió'),
  },
  son: {
    id: 'son', name: 'Sơn', role: 'Phạm nhân · Buồng 2',
    bio: 'Phạm nhân trẻ, thích tập xà.',
    personality: 'Hoạt bát.',
    goal: 'Rèn sức khỏe.',
    story: false,
    look: { uniform: 'inmate', skin: 0xe0b28c, hair: 0x9e4f30, hairStyle: 'buzz', accent: 0x7c3aed, height: 1.01, build: 1.0 },
    whereHint: 'Buồng 2, Nhà ăn, Xưởng, Khu xà đơn.',
    schedule: inmateSchedule('c2', [-19.75, -27.8], 4, 3, 'wsRest', [24.2, 0], 'yEx', [-22.5, 3.6], 'stand', 'Tập thể dục', 'yW', [-17, -4], 'stand', 'Nói chuyện ngoài sân'),
  },
  khai: {
    id: 'khai', name: 'Khải', role: 'Đàn em của Lâm · Buồng 4',
    bio: 'Hay đi theo Lâm.',
    personality: 'Hay dò xét.',
    goal: 'Theo đuôi Lâm.',
    story: false,
    look: { uniform: 'inmate-orange', skin: 0xcf9b74, hair: 0x221e20, hairStyle: 'buzz', accent: 0xffc78e, height: 0.98, build: 1.03 },
    whereHint: 'Buồng 4, Nhà ăn, Xưởng, Góc sau xưởng.',
    schedule: inmateSchedule('c4', [-7.9, -26.8], 5, 5, 'wsRest', [14.2, 6.4], 'lamCorner', [18.5, 13.2], 'stand', 'Canh chừng cho Lâm', 'yE', [8, -6], 'stand', 'Đứng ở sân Đông'),
  },
  phuc: {
    id: 'phuc', name: 'Thầy Phúc', role: 'Cán bộ giáo dục & dạy nghề',
    bio: '45 tuổi, là giáo viên dạy nghề điện - cơ khí lâu năm trong trại. Coi trọng tính kỷ luật, trung thực và sự chăm chỉ.',
    personality: 'Tận tình, nghiêm khắc nhưng nhân hậu.',
    goal: 'Truyền nghề cho các phạm nhân để khi ra trại có công việc lương thiện.',
    story: true,
    look: { uniform: 'officer', skin: 0xd4a373, hair: 0x59524b, hairStyle: 'short', accent: 0x60a5fa, height: 1.02, build: 1.0, cap: true, glasses: true },
    whereHint: 'Lớp học nghề & Thư viện (chiều 14:00–16:30 & tối 19:00–21:00), Nhà ăn (giờ ăn).',
    schedule: [
      { from: 360, to: 480, node: 'classLib', pos: [-25, 16], rot: 0, pose: 'work', activity: 'Chuẩn bị giáo án tại thư viện' },
      { from: 480, to: 690, node: 'classPhuc', pos: [-21.5, 16.5], rot: Math.PI, pose: 'stand', activity: 'Soạn giáo trình nghề' },
      { from: 690, to: 750, node: 'messAisle', pos: [11.4, -21.45], rot: Math.PI, pose: 'sit', activity: 'Ăn trưa' },
      { from: 750, to: 840, node: 'yBench', pos: [-10, 3.2], rot: 0, pose: 'sit', activity: 'Nghỉ trưa hóng mát' },
      { from: 840, to: 990, node: 'classPhuc', pos: [-21.5, 16.5], rot: Math.PI, pose: 'stand', activity: 'Giảng dạy lớp học nghề (14:00–16:30)' },
      { from: 990, to: 1050, node: 'messAisle', pos: [11.4, -21.45], rot: Math.PI, pose: 'sit', activity: 'Ăn tối' },
      { from: 1050, to: 1260, node: 'classLib', pos: [-25, 16], rot: 0, pose: 'sit', activity: 'Phụ trách giờ đọc sách thư viện' },
      { from: 1260, to: 1320, node: 'offOut', pos: [-4, 7.5], rot: 0, pose: 'stand', activity: 'Giao ban cuối ngày' },
    ],
  },
  an: {
    id: 'an', name: 'Y sĩ An', role: 'Y sĩ phụ trách Phòng y tế',
    bio: '32 tuổi, cẩn trọng, công tư phân minh. Ghét kẻ giả bệnh trốn việc nhưng luôn tận tụy với người ốm đau.',
    personality: 'Nhẹ nhàng, chu đáo, tinh ý.',
    goal: 'Đảm bảo sức khỏe cho toàn trại và ngăn chặn tình trạng tuồn thuốc lậu.',
    story: true,
    look: { uniform: 'medic', skin: 0xf5d0b5, hair: 0x49312e, hairStyle: 'bun', accent: 0x22d3ee, height: 0.98, build: 0.94 },
    whereHint: 'Phòng y tế (07:30–11:30 & 13:30–17:00), Nhà ăn (giờ ăn).',
    schedule: [
      { from: 360, to: 450, node: 'medDesk', pos: [23, -23.1], rot: 0, pose: 'stand', activity: 'Kiểm tra hồ sơ bệnh án' },
      { from: 450, to: 690, node: 'medDesk', pos: [23, -23.1], rot: 0, pose: 'sit', activity: 'Khám bệnh buổi sáng' },
      { from: 690, to: 750, node: 'messAisle', pos: [0.6, -21.45], rot: Math.PI, pose: 'sit', activity: 'Ăn trưa' },
      { from: 750, to: 810, node: 'yC', pos: [-4, -3], rot: 0, pose: 'stand', activity: 'Đi dạo sân giữa giờ' },
      { from: 810, to: 1020, node: 'medDesk', pos: [23, -23.1], rot: 0, pose: 'sit', activity: 'Trực y tế ca chiều' },
      { from: 1020, to: 1080, node: 'messAisle', pos: [0.6, -21.45], rot: Math.PI, pose: 'sit', activity: 'Ăn tối' },
      { from: 1080, to: 1260, node: 'yBench', pos: [-12.5, 3.3], rot: 0, pose: 'sit', activity: 'Hóng gió buổi tối' },
      { from: 1260, to: 1320, node: 'medIn', pos: [22.25, -20], rot: 0, pose: 'stand', activity: 'Khóa cửa phòng y tế' },
    ],
  },
  mai: {
    id: 'mai', name: 'Chị Mai', role: 'Chị gái của Minh (28 tuổi)',
    bio: 'Lam lũ gánh vác gia đình, luôn mong em trai tu tâm dưỡng tính để sớm hoàn lương trở về.',
    personality: 'Chịu thương chịu khó, nghiêm khắc nhưng giàu tình thương.',
    goal: 'Động viên Minh cải tạo tốt và chuẩn bị cuộc sống ngoài trại.',
    story: true,
    look: { uniform: 'visitor', skin: 0xe2b48d, hair: 0x65402f, hairStyle: 'bun', accent: 0xec4899, height: 0.97, build: 0.94 },
    whereHint: 'Phòng thăm gặp (giờ thăm gặp 08:00–11:00 & 14:00–17:00).',
    schedule: [
      { from: 360, to: 480, node: 'visitMai', pos: [-25.5, -10.25], rot: 0, pose: 'sit', activity: 'Chờ đăng ký vào thăm' },
      { from: 480, to: 660, node: 'visitMai', pos: [-25.5, -10.25], rot: 0, pose: 'sit', activity: 'Ngồi đợi Minh bên vách kính' },
      { from: 660, to: 840, node: 'visitMai', pos: [-25.5, -10.25], rot: 0, pose: 'sit', activity: 'Nghỉ trưa tại khu chờ thăm nuôi' },
      { from: 840, to: 1020, node: 'visitMai', pos: [-25.5, -10.25], rot: 0, pose: 'sit', activity: 'Tiếp tục ca thăm gặp buổi chiều' },
      { from: 1020, to: 1320, node: 'visitMai', pos: [-25.5, -10.25], rot: 0, pose: 'sit', activity: 'Chuẩn bị bắt xe đò về quê' },
    ],
  },
};

export function slotFor(def: NpcDef, minute: number): ScheduleSlot {
  for (const s of def.schedule) if (minute >= s.from && minute < s.to) return s;
  return def.schedule[def.schedule.length - 1];
}
