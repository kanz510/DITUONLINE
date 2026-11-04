// Bố cục nhà tù An Phú (đơn vị mét). x: Tây→Đông, z: Bắc→Nam.

export interface Box {
  x1: number; z1: number; x2: number; z2: number;
}
export interface WallDef extends Box {
  h: number;
  kind: 'outer' | 'inner' | 'bars' | 'perimeter';
  building?: string;
}
export interface PropCollider extends Box {
  h?: number;
}

export const WALL_T = 0.3;

function hw(x1: number, x2: number, z: number, h: number, kind: WallDef['kind'], building?: string, t = WALL_T): WallDef {
  return { x1: Math.min(x1, x2), x2: Math.max(x1, x2), z1: z - t / 2, z2: z + t / 2, h, kind, building };
}
function vw(z1: number, z2: number, x: number, h: number, kind: WallDef['kind'], building?: string, t = WALL_T): WallDef {
  return { x1: x - t / 2, x2: x + t / 2, z1: Math.min(z1, z2), z2: Math.max(z1, z2), h, kind, building };
}

const H = 3.6;

export const BUILDINGS: Record<string, Box & { name: string; floor: string }> = {
  cellblock: { x1: -28, z1: -32, x2: -6, z2: -18, name: 'Khu buồng giam A', floor: 'tile' },
  mess: { x1: -2, z1: -32, x2: 16, z2: -18, name: 'Nhà ăn', floor: 'tile2' },
  workshop: { x1: 12, z1: -12, x2: 28, z2: 8, name: 'Xưởng lao động', floor: 'concrete' },
  office: { x1: -12, z1: 10, x2: 4, z2: 20, name: 'Phòng quản giáo', floor: 'wood' },
  medical: { x1: 18, z1: -32, x2: 28, z2: -18, name: 'Phòng y tế', floor: 'tile' },
  classroom: { x1: -28, z1: 10, x2: -15, z2: 20, name: 'Lớp học nghề & thư viện', floor: 'wood' },
  visitation: { x1: -28, z1: -15, x2: -20, z2: -4, name: 'Phòng thăm gặp', floor: 'tile2' },
  discipline: { x1: 6, z1: 10, x2: 14, z2: 20, name: 'Khu kỷ luật', floor: 'concrete' },
};

export const CELL_CENTERS = [-25.25, -19.75, -14.25, -8.75];

export const WALLS: WallDef[] = [
  // Tường rào ngoài
  hw(-30, 30, -34, 6, 'perimeter', undefined, 0.6),
  hw(-30, 30, 22, 6, 'perimeter', undefined, 0.6),
  vw(-34, 22, -30, 6, 'perimeter', undefined, 0.6),
  vw(-34, 22, 30, 6, 'perimeter', undefined, 0.6),
  // Khu buồng giam
  hw(-28, -6, -32, H, 'outer', 'cellblock'),
  vw(-32, -18, -28, H, 'outer', 'cellblock'),
  vw(-32, -18, -6, H, 'outer', 'cellblock'),
  hw(-28, -18, -18, H, 'outer', 'cellblock'),
  hw(-16, -6, -18, H, 'outer', 'cellblock'),
  // song sắt mặt trước các buồng (cửa buồng rộng 1.6m)
  hw(-28, -26.05, -25, H, 'bars', 'cellblock', 0.12),
  hw(-24.45, -20.55, -25, H, 'bars', 'cellblock', 0.12),
  hw(-18.95, -15.05, -25, H, 'bars', 'cellblock', 0.12),
  hw(-13.45, -9.55, -25, H, 'bars', 'cellblock', 0.12),
  hw(-7.95, -6, -25, H, 'bars', 'cellblock', 0.12),
  vw(-32, -25, -22.5, H, 'inner', 'cellblock'),
  vw(-32, -25, -17, H, 'inner', 'cellblock'),
  vw(-32, -25, -11.5, H, 'inner', 'cellblock'),
  // Nhà ăn
  hw(-2, 16, -32, H, 'outer', 'mess'),
  vw(-32, -18, -2, H, 'outer', 'mess'),
  vw(-32, -18, 16, H, 'outer', 'mess'),
  hw(-2, 5, -18, H, 'outer', 'mess'),
  hw(7.5, 16, -18, H, 'outer', 'mess'),
  // Xưởng
  hw(12, 28, -12, H, 'outer', 'workshop'),
  hw(12, 28, 8, H, 'outer', 'workshop'),
  vw(-12, 8, 28, H, 'outer', 'workshop'),
  vw(-12, -4, 12, H, 'outer', 'workshop'),
  vw(-1.5, 8, 12, H, 'outer', 'workshop'),
  // Kho (khu cấm) trong xưởng
  vw(-12, -7.8, 22, H, 'inner', 'workshop'),
  vw(-6.2, -4, 22, H, 'inner', 'workshop'),
  hw(22, 28, -4, H, 'inner', 'workshop'),
  // Phòng quản giáo
  hw(-12, -5, 10, H, 'outer', 'office'),
  hw(-3, 4, 10, H, 'outer', 'office'),
  hw(-12, 4, 20, H, 'outer', 'office'),
  vw(10, 20, -12, H, 'outer', 'office'),
  vw(10, 20, 4, H, 'outer', 'office'),
  // Phòng y tế
  hw(18, 28, -32, H, 'outer', 'medical'),
  vw(-32, -18, 18, H, 'outer', 'medical'),
  vw(-32, -18, 28, H, 'outer', 'medical'),
  hw(18, 21, -18, H, 'outer', 'medical'),
  hw(23.5, 28, -18, H, 'outer', 'medical'),
  // Lớp học nghề & thư viện
  hw(-28, -15, 20, H, 'outer', 'classroom'),
  vw(10, 20, -28, H, 'outer', 'classroom'),
  vw(10, 20, -15, H, 'outer', 'classroom'),
  hw(-28, -22, 10, H, 'outer', 'classroom'),
  hw(-19.5, -15, 10, H, 'outer', 'classroom'),
  // Phòng thăm gặp
  hw(-28, -20, -15, H, 'outer', 'visitation'),
  hw(-28, -20, -4, H, 'outer', 'visitation'),
  vw(-15, -4, -28, H, 'outer', 'visitation'),
  vw(-15, -11.5, -20, H, 'outer', 'visitation'),
  vw(-9, -4, -20, H, 'outer', 'visitation'),
  // Khu kỷ luật
  hw(6, 14, 20, H, 'outer', 'discipline'),
  vw(10, 20, 6, H, 'outer', 'discipline'),
  vw(10, 20, 14, H, 'outer', 'discipline'),
  hw(6, 8.5, 10, H, 'outer', 'discipline'),
  hw(11.5, 14, 10, H, 'outer', 'discipline'),
];

export interface DoorDef {
  id: string;
  area: string;
  name: string;
  box: Box; // collider khi khoá
  zone: string; // khu bên trong
  /** Điểm tương tác phía ngoài */
  ix: number; iz: number;
}

export const DOORS: DoorDef[] = [
  { id: 'door_cellblock', area: 'cellblock', name: 'Cửa khu buồng giam', box: { x1: -18, z1: -18.2, x2: -16, z2: -17.8 }, zone: 'cellblock', ix: -17, iz: -16.6 },
  { id: 'door_mess', area: 'mess', name: 'Cửa nhà ăn', box: { x1: 5, z1: -18.2, x2: 7.5, z2: -17.8 }, zone: 'mess', ix: 6.25, iz: -16.6 },
  { id: 'door_workshop', area: 'workshop', name: 'Cửa xưởng', box: { x1: 11.8, z1: -4, x2: 12.2, z2: -1.5 }, zone: 'workshop', ix: 10.8, iz: -2.75 },
  { id: 'door_storage', area: 'storage', name: 'Cửa kho vật tư (khu cấm)', box: { x1: 21.8, z1: -7.8, x2: 22.2, z2: -6.2 }, zone: 'storage', ix: 21.0, iz: -7 },
  { id: 'door_office', area: 'office', name: 'Cửa phòng quản giáo', box: { x1: -5, z1: 9.8, x2: -3, z2: 10.2 }, zone: 'office', ix: -4, iz: 8.7 },
  { id: 'door_medical', area: 'medical', name: 'Cửa phòng y tế', box: { x1: 21, z1: -18.2, x2: 23.5, z2: -17.8 }, zone: 'medical', ix: 22.25, iz: -16.8 },
  { id: 'door_classroom', area: 'classroom', name: 'Cửa lớp học nghề & thư viện', box: { x1: -22, z1: 9.8, x2: -19.5, z2: 10.2 }, zone: 'classroom', ix: -20.75, iz: 8.8 },
  { id: 'door_visitation', area: 'visitation', name: 'Cửa phòng thăm gặp', box: { x1: -20.2, z1: -11.5, x2: -19.8, z2: -9 }, zone: 'visitation', ix: -18.8, iz: -10.25 },
  { id: 'door_discipline', area: 'discipline', name: 'Cửa khu kỷ luật', box: { x1: 8.5, z1: 9.8, x2: 11.5, z2: 10.2 }, zone: 'discipline', ix: 10, iz: 8.8 },
];

export interface ZoneDef extends Box {
  id: string;
  name: string;
}

export const ZONES: ZoneDef[] = [
  { id: 'storage', name: 'Kho vật tư (KHU CẤM)', x1: 22, z1: -12, x2: 28, z2: -4 },
  { id: 'cell3', name: 'Buồng 3 (buồng của bạn)', x1: -17, z1: -32, x2: -11.5, z2: -25 },
  { id: 'cellblock', name: 'Khu buồng giam A', x1: -28, z1: -32, x2: -6, z2: -18 },
  { id: 'mess', name: 'Nhà ăn', x1: -2, z1: -32, x2: 16, z2: -18 },
  { id: 'workshop', name: 'Xưởng lao động', x1: 12, z1: -12, x2: 28, z2: 8 },
  { id: 'office', name: 'Phòng quản giáo', x1: -12, z1: 10, x2: 4, z2: 20 },
  { id: 'medical', name: 'Phòng y tế', x1: 18, z1: -32, x2: 28, z2: -18 },
  { id: 'classroom', name: 'Lớp học nghề & thư viện', x1: -28, z1: 10, x2: -15, z2: 20 },
  { id: 'visitation', name: 'Phòng thăm gặp', x1: -28, z1: -15, x2: -20, z2: -4 },
  { id: 'discipline', name: 'Khu kỷ luật', x1: 6, z1: 10, x2: 14, z2: 20 },
  { id: 'rollcall', name: 'Ô điểm danh', x1: -14, z1: -10.5, x2: -4, z2: -7.5 },
  { id: 'lamcorner', name: 'Góc khuất sau xưởng', x1: 15, z1: 9, x2: 27, z2: 17 },
];

export function inBox(b: Box, x: number, z: number) {
  return x >= b.x1 && x <= b.x2 && z >= b.z1 && z <= b.z2;
}

export function zonesAt(x: number, z: number): string[] {
  return ZONES.filter((zn) => inBox(zn, x, z)).map((zn) => zn.id);
}

export function zoneName(x: number, z: number): string {
  const z0 = ZONES.find((zn) => inBox(zn, x, z) && zn.id !== 'rollcall');
  return z0 ? z0.name : 'Sân sinh hoạt';
}

// ───────── Đồ vật có va chạm ─────────
export type PropKind =
  | 'bunk' | 'table' | 'counter' | 'canteen' | 'bench' | 'workbench' | 'shelf' | 'board' | 'desk'
  | 'pullup' | 'stonetable' | 'tree' | 'tank' | 'crate' | 'basin' | 'press' | 'tower' | 'cabinet' | 'chair' | 'plant' | 'lamp'
  | 'kitchen-fridge' | 'kitchen-sink' | 'kitchen-stove'
  | 'visit-sofa' | 'visit-side-table' | 'garden-pot'
  | 'yard-bush' | 'yard-flower' | 'yard-rock'
  | 'park-ambulance' | 'park-police' | 'park-van' | 'park-delivery'
  | 'cell-toilet' | 'cell-locker' | 'medical-trolley'
  | 'yard-concrete-stool';

export interface PropDef {
  kind: PropKind;
  x: number; z: number;
  w: number; d: number; // kích thước theo x, z
  rot?: number;
  collide?: boolean;
  label?: string;
}

const P: PropDef[] = [];
// Giường tầng, toilet và tủ sắt trong 4 buồng giam
for (const cx of CELL_CENTERS) {
  P.push({ kind: 'bunk', x: cx - 1.65, z: -29.6, w: 0.95, d: 2.0, collide: true });
  P.push({ kind: 'bunk', x: cx + 1.65, z: -29.6, w: 0.95, d: 2.0, collide: true });
  P.push({ kind: 'cell-toilet', x: cx - 0.75, z: -31.45, w: 0.65, d: 0.75, collide: true, label: 'Toilet buồng giam' });
  P.push({ kind: 'cell-locker', x: cx + 0.75, z: -31.5, w: 0.60, d: 0.65, rot: Math.PI, collide: true, label: 'Tủ sắt cá nhân' });
  P.push({ kind: 'chair', x: cx, z: -30.8, w: 0.5, d: 0.5, rot: 0, label: 'Ghế buồng giam' });
}
P.push(
  { kind: 'board', x: -27.81, z: -21.5, w: 1.4, d: 0.05, rot: Math.PI / 2, label: 'NỘI QUY' },
  { kind: 'basin', x: -6.5, z: -22.5, w: 0.6, d: 3, collide: true },
  { kind: 'bench', x: -21, z: -19.2, w: 2.4, d: 0.5, collide: true },
  // Đồ đạc bổ sung hành lang buồng giam (bớt trống trải)
  { kind: 'bench', x: -24.5, z: -18.7, w: 2.2, d: 0.5, collide: true },
  { kind: 'cabinet', x: -13.5, z: -18.7, w: 1.6, d: 0.55, collide: true },
  { kind: 'desk', x: -8.0, z: -19.6, w: 1.8, d: 0.8, collide: true },
  { kind: 'chair', x: -8.0, z: -20.3, w: 0.5, d: 0.5 },
  // Nhà ăn: 4 bàn ăn dùng bộ Blendstra (gồm bàn 2.6x0.91m + 2 ghế băng 2 bên)
  { kind: 'table', x: 1.5, z: -26.2, w: 2.6, d: 0.90, collide: true, label: 'Bàn ăn nhà ăn' },
  { kind: 'table', x: 10.5, z: -26.2, w: 2.6, d: 0.90, collide: true, label: 'Bàn ăn nhà ăn' },
  { kind: 'table', x: 1.5, z: -22.2, w: 2.6, d: 0.90, collide: true, label: 'Bàn ăn nhà ăn' },
  { kind: 'table', x: 10.5, z: -22.2, w: 2.6, d: 0.90, collide: true, label: 'Bàn ăn nhà ăn' },
  // Quầy nhà ăn: Quầy phát cơm miễn phí và Quầy bán hàng căn tin
  { kind: 'counter', x: 5, z: -30, w: 10, d: 0.9, collide: true, label: 'Quầy phát cơm' },
  { kind: 'canteen', x: 13.5, z: -31.2, w: 3, d: 0.8, collide: true, label: 'Quầy căn tin' },
  // Xưởng: 4 bàn lắp ráp (workshop_bench.glb có gắn ê-tô và bảng dụng cụ phía sau)
  { kind: 'workbench', x: 16, z: -1, w: 1.85, d: 0.8, rot: Math.PI, collide: true },
  { kind: 'workbench', x: 20, z: -1, w: 1.85, d: 0.8, rot: Math.PI, collide: true },
  { kind: 'workbench', x: 16, z: 4, w: 1.85, d: 0.8, rot: Math.PI, collide: true },
  { kind: 'workbench', x: 20, z: 4, w: 1.85, d: 0.8, rot: Math.PI, collide: true },
  { kind: 'board', x: 12.19, z: -6, w: 1.3, d: 0.05, rot: Math.PI / 2, label: 'CHẤM CÔNG' },
  { kind: 'bench', x: 14.2, z: 7.2, w: 2.4, d: 0.5, collide: true },
  { kind: 'crate', x: 13.5, z: 6.5, w: 1.2, d: 1.2, collide: true },
  { kind: 'crate', x: 15.0, z: 6.5, w: 1.0, d: 1.0, collide: true },
  { kind: 'press', x: 25.5, z: 4.5, w: 1.6, d: 1.6, collide: true },
  { kind: 'crate', x: 25.8, z: 0, w: 1.2, d: 1.2, collide: true },
  { kind: 'shelf', x: 27.3, z: -9, w: 0.8, d: 4.5, collide: true },
  { kind: 'shelf', x: 27.3, z: -5.2, w: 0.8, d: 1.6, collide: true, label: 'drill' },
  { kind: 'crate', x: 23, z: -11.2, w: 1.2, d: 1.2, collide: true },
  // Văn phòng: bàn làm việc cán bộ (guard_office_desk.glb) và ghế xoay (guard_office_chair.glb)
  { kind: 'desk', x: -4, z: 16, w: 1.65, d: 0.8, rot: Math.PI, collide: true, label: 'Bàn làm việc cán bộ' },
  { kind: 'cabinet', x: -10.8, z: 18.8, w: 2, d: 0.7, collide: true },
  { kind: 'cabinet', x: 2.6, z: 18.8, w: 2, d: 0.7, collide: true },
  { kind: 'chair', x: -4, z: 17.2, w: 0.65, d: 0.65, rot: 0, label: 'Ghế xoay quản giáo' },
  { kind: 'chair', x: -4.6, z: 14.8, w: 0.65, d: 0.65, rot: Math.PI, label: 'Ghế tiếp dân' },
  { kind: 'board', x: -11.81, z: 14, w: 1.4, d: 0.05, rot: Math.PI / 2, label: 'KỶ LUẬT' },
  // Sân: Bàn cờ đá tròn (yard_concrete_table.glb) và 4 đôn bê tông (yard_concrete_stool.glb)
  { kind: 'pullup', x: -22.5, z: 5.2, w: 2.2, d: 0.3, collide: true },
  { kind: 'stonetable', x: -10, z: 4.6, w: 1.32, d: 1.32, collide: true, label: 'Bàn cờ đá' },
  { kind: 'yard-concrete-stool', x: -10, z: 3.5, w: 0.48, d: 0.48, collide: true, label: 'Đôn bê tông sân trại' },
  { kind: 'yard-concrete-stool', x: -10, z: 5.7, w: 0.48, d: 0.48, collide: true, label: 'Đôn bê tông sân trại' },
  { kind: 'yard-concrete-stool', x: -8.9, z: 4.6, w: 0.48, d: 0.48, collide: true, label: 'Đôn bê tông sân trại' },
  { kind: 'yard-concrete-stool', x: -11.1, z: 4.6, w: 0.48, d: 0.48, collide: true, label: 'Đôn bê tông sân trại' },
  { kind: 'tree', x: -15, z: -8, w: 0.8, d: 0.8, collide: true },
  { kind: 'tree', x: -14, z: 5, w: 0.8, d: 0.8, collide: true },
  { kind: 'tree', x: 7, z: 17, w: 0.8, d: 0.8, collide: true },
  { kind: 'tree', x: 26, z: 18.5, w: 0.8, d: 0.8, collide: true },
  { kind: 'tree', x: 0, z: -13, w: 0.8, d: 0.8, collide: true },
  // New scenery has explicit colliders and is kept outside the existing quest/patrol lanes.
  { kind: 'lamp', x: -26.6, z: -3.0, w: 0.55, d: 0.55, collide: true, label: 'Đèn sân phía Tây' },
  { kind: 'plant', x: -16.4, z: 18.45, w: 0.6, d: 0.6, collide: true, label: 'Chậu cây lớp học nghề' },
  { kind: 'tank', x: -27.3, z: -15.5, w: 2, d: 2, collide: true },
  { kind: 'tower', x: -27.2, z: 6.8, w: 2.4, d: 2.4, collide: true },
  { kind: 'tower', x: 28.2, z: 20.2, w: 2.4, d: 2.4, collide: true },
  { kind: 'bench', x: -16, z: 3.6, w: 2.4, d: 0.5, collide: true },
  { kind: 'bench', x: 2, z: 4.5, w: 2.4, d: 0.5, collide: true },
  // Phòng Y tế
  { kind: 'bunk', x: 25.5, z: -27.5, w: 0.95, d: 2.0, collide: true },
  { kind: 'cabinet', x: 19.2, z: -28, w: 1.8, d: 0.7, collide: true },
  { kind: 'desk', x: 23, z: -22, w: 2.4, d: 1.0, collide: true },
  { kind: 'chair', x: 23, z: -23.1, w: 0.5, d: 0.5, rot: 0, label: 'Ghế y sĩ' },
  { kind: 'medical-trolley', x: 26.85, z: -27.5, w: 0.62, d: 0.52, collide: true, label: 'Xe đẩy thuốc y tế' },
  // Lớp học nghề & Thư viện: bàn học (classroom_desk.glb) và ghế học (classroom_chair.glb)
  { kind: 'desk', x: -24, z: 13, w: 0.85, d: 0.6, rot: Math.PI, collide: true },
  { kind: 'chair', x: -24, z: 13.85, w: 0.48, d: 0.48, rot: 0, label: 'Ghế học nghề' },
  { kind: 'desk', x: -18, z: 13, w: 0.85, d: 0.6, rot: Math.PI, collide: true },
  { kind: 'chair', x: -18, z: 13.85, w: 0.48, d: 0.48, rot: 0, label: 'Ghế học nghề' },
  { kind: 'desk', x: -21.5, z: 17.5, w: 1.65, d: 0.8, rot: Math.PI, collide: true, label: 'Bàn giáo viên' },
  { kind: 'chair', x: -21.5, z: 18.5, w: 0.48, d: 0.48, rot: 0, label: 'Ghế giáo viên' },
  { kind: 'shelf', x: -26.8, z: 16.5, w: 0.8, d: 3.2, collide: true },
  { kind: 'chair', x: -25.5, z: 16.0, w: 0.48, d: 0.48, rot: Math.PI / 2, label: 'Ghế đọc sách thư viện' },
  { kind: 'board', x: -27.81, z: 12, w: 1.4, d: 0.05, rot: Math.PI / 2, label: 'LỚP HỌC NGHỀ' },
  // Phòng Thăm gặp: vách kính, bàn thăm gặp (visitation_table.glb) và ghế (visitation_chair.glb)
  { kind: 'counter', x: -24, z: -9.5, w: 6.8, d: 0.8, collide: true },
  { kind: 'chair', x: -22.5, z: -8.5, w: 0.5, d: 0.5, rot: 0, label: 'Ghế người nhà' },
  { kind: 'chair', x: -25.5, z: -10.5, w: 0.5, d: 0.5, rot: Math.PI, label: 'Ghế phạm nhân thăm' },
  { kind: 'table', x: -23.5, z: -6.0, w: 1.56, d: 0.69, collide: true, label: 'Bàn thăm gặp' },
  { kind: 'chair', x: -23.5, z: -5.25, w: 0.5, d: 0.5, rot: Math.PI, label: 'Ghế bàn thăm gặp khách' },
  { kind: 'chair', x: -23.5, z: -6.75, w: 0.5, d: 0.5, rot: 0, label: 'Ghế bàn thăm gặp cán bộ' },
  // Khu Kỷ luật
  { kind: 'bunk', x: 10, z: 18, w: 1.1, d: 2.0, collide: true },

  // Đợt asset CC0: từng vị trí đã kiểm tra KHÔNG cắt bất kỳ cạnh NODES/EDGES nào,
  // không đè những collider cũ hoặc SPOTS nhiệm vụ. Vật tĩnh có collider chuẩn.
  // Nhà ăn: tủ lạnh + chậu rửa ở đầu trái quầy, bếp sát tường sau
  { kind: 'kitchen-fridge', x: -0.95, z: -30.9, w: 0.85, d: 0.75, collide: true, label: 'Tủ lạnh nhà bếp' },
  { kind: 'kitchen-sink', x: -0.95, z: -28.9, w: 0.9, d: 0.65, collide: true, label: 'Chậu rửa bếp' },
  { kind: 'kitchen-stove', x: 11, z: -31.25, w: 0.85, d: 0.75, collide: true, label: 'Bếp nấu ăn' },

  // Phòng thăm gặp: ghế ngồi đợi, bàn nhỏ và cây để trong góc, xa booth nhiệm vụ
  { kind: 'visit-sofa', x: -25.6, z: -6.3, w: 1.55, d: 0.7, collide: true, label: 'Ghế phòng thăm gặp' },
  { kind: 'visit-side-table', x: -26.25, z: -4.9, w: 0.45, d: 0.45, collide: true, label: 'Bàn phụ phòng thăm gặp' },
  { kind: 'garden-pot', x: -27.1, z: -6.2, w: 0.5, d: 0.5, collide: true, label: 'Chậu cây trang trí' },

  // Sân: tất cả nằm xa lối tuần tra và vùng tương tác
  { kind: 'yard-bush', x: -27.3, z: 4.5, w: 0.8, d: 0.7, collide: true },
  { kind: 'yard-bush', x: 26, z: 15.5, w: 0.8, d: 0.7, collide: true },
  { kind: 'yard-flower', x: -26.4, z: 8.5, w: 0.48, d: 0.45, collide: true },
  { kind: 'yard-flower', x: 24.9, z: 16.5, w: 0.48, d: 0.45, collide: true },
  { kind: 'yard-rock', x: 27.3, z: 10.5, w: 0.75, d: 0.7, collide: true },

  // Xe đỗ TĨNH, không có tương tác hay AI: không đưa xe vào tuyến NPC
  { kind: 'park-ambulance', x: 26.8, z: -15.0, w: 3.4, d: 1.55, collide: true, label: 'Xe cứu thương' },
  { kind: 'park-police', x: -23.1, z: -16.5, w: 3.4, d: 1.7, collide: true, label: 'Xe tuần tra cán bộ' },
  { kind: 'park-van', x: 20, z: 18.75, w: 3.6, d: 1.85, collide: true, label: 'Xe chở phạm nhân' },
  { kind: 'park-delivery', x: -27.05, z: 2.0, w: 3.4, d: 1.65, collide: true, label: 'Xe tiếp tế' },
);
export const PROPS = P;

export function propBox(p: PropDef): Box {
  return { x1: p.x - p.w / 2, x2: p.x + p.w / 2, z1: p.z - p.d / 2, z2: p.z + p.d / 2 };
}

// ───────── Điểm tương tác cố định ─────────
export interface SpotDef {
  id: string;
  x: number; z: number;
  r: number;
  label: string;
}

export const SPOTS: SpotDef[] = [
  { id: 'bed', x: -14.9, z: -28.6, r: 1.3, label: 'Giường của bạn' },
  { id: 'rules', x: -27.0, z: -21.5, r: 1.6, label: 'Bảng nội quy' },
  { id: 'meal', x: 5, z: -28.7, r: 1.5, label: 'Quầy phát cơm' },
  { id: 'canteen', x: 13.5, z: -30.0, r: 1.4, label: 'Căn tin' },
  { id: 'clock', x: 13.1, z: -6, r: 1.4, label: 'Bảng chấm công' },
  { id: 'workbench', x: 16, z: 0.15, r: 1.2, label: 'Bàn lắp ráp' },
  { id: 'rest_ws', x: 14.2, z: 6.5, r: 1.3, label: 'Ghế nghỉ' },
  { id: 'drill', x: 26.2, z: -5.2, r: 1.2, label: 'Kệ vật tư' },
  { id: 'clue_crate', x: 20.8, z: -7.0, r: 1.2, label: 'Kiện hàng niêm phong KHO-07' },
  { id: 'class_fan', x: -18.0, z: 15.5, r: 1.3, label: 'Quạt lớp học bị hỏng' },
  { id: 'exercise', x: -21.5, z: 4.2, r: 1.5, label: 'Xà đơn & tạ tay' },
  { id: 'stonetable', x: -10, z: 3.5, r: 1.5, label: 'Bàn cờ đá' },
  { id: 'bench_yard', x: -16, z: 3.8, r: 1.3, label: 'Ghế đá' },
  { id: 'sandals', x: -25.6, z: 8.6, r: 1.2, label: 'Bụi cỏ' },
  { id: 'lan_desk', x: -4, z: 14.4, r: 1.4, label: 'Bàn tiếp nhận' },
  { id: 'discipline', x: -11.2, z: 14, r: 1.4, label: 'Cửa khu kỷ luật' },
  { id: 'med_table', x: 23, z: -21, r: 1.4, label: 'Bàn Y sĩ An (Khám bệnh / nhận thuốc)' },
  { id: 'med_cabinet', x: 19.5, z: -26.8, r: 1.4, label: 'Tủ thuốc y tế (Phụ việc phân loại)' },
  { id: 'class_workbench', x: -21.5, z: 13, r: 1.4, label: 'Bàn thực hành nghề (Mini-game học nghề)' },
  { id: 'library_shelf', x: -25.5, z: 16.5, r: 1.4, label: 'Giá sách thư viện (Mượn cẩm nang)' },
  { id: 'visit_booth', x: -22.5, z: -8.8, r: 1.4, label: 'Vách kính thăm gặp (Gặp Chị Mai)' },
  { id: 'asthma_spot', x: 22.5, z: 13, r: 1.3, label: 'Góc tường sau xưởng (Nhặt lọ thuốc hen suyễn)' },
  { id: 'workshop_breaker', x: 13.5, z: -4.5, r: 1.5, label: 'Tủ cầu dao xưởng' },
];

// ───────── Đồ thị đường đi cho NPC ─────────
export const NODES: Record<string, [number, number]> = {
  c1: [-25.25, -27.3], c2: [-19.75, -27.3], c3: [-14.25, -27.3], c4: [-8.75, -27.3],
  cor1: [-25.25, -21.6], cor2: [-19.75, -21.6], corC: [-17, -21.6], cor3: [-14.25, -21.6], cor4: [-8.75, -21.6],
  cbOut: [-17, -15.5],
  rc: [-9, -9],
  yC: [-4, -3], yW: [-18, -4], yEx: [-21, 3.6], yWestBypass: [-23.9, 0.3], yBench: [-10, 3.2], yBench2: [-16, 3.6], yE: [8, -6], ySE: [8, 10], yS: [-4, 7.5],
  lamCorner: [20, 12.5],
  messOut: [6.25, -15.5], messIn: [6.25, -20], messAisle: [6, -24.2], messCounter: [5, -28.6], messCanteen: [13.5, -29.2],
  medOut: [22.25, -15.5], medIn: [22.25, -20], medDesk: [23, -23.1], medBed: [25.5, -27],
  classOut: [-20.75, 7.5], classIn: [-20.75, 12], classDesk: [-21.5, 13], classPhuc: [-21.5, 16.5], classLib: [-25, 16],
  visitOut: [-17.5, -10.25], visitIn: [-22.5, -10.25], visitMai: [-25.5, -10.25],
  discOut: [10, 7.5], discIn: [10, 14],
  wsOut: [9.5, -2.75], wsIn: [13.5, -2.75], wsBoard: [13.2, -6], wsHub: [18, -3], wsStoreOut: [20.8, -7], storeIn: [23.8, -7],
  wsRow: [18, 2.3], wsGap: [18, 4], wsRow2: [18, 5.6],
  wsB1: [16, 0.15], wsB2: [20, 0.15], wsB3: [16, 5.15], wsB4: [20, 5.15], wsRest: [14.2, 6.4],
  offOut: [-4, 7.5], offIn: [-4, 12.2], offDesk: [-4, 13.8], offSide: [-1, 13], offBack: [-1, 17.4], offLan: [-4, 17.3],
};

const E: [string, string][] = [
  ['c1', 'cor1'], ['c2', 'cor2'], ['c3', 'cor3'], ['c4', 'cor4'],
  ['cor1', 'cor2'], ['cor2', 'corC'], ['corC', 'cor3'], ['cor3', 'cor4'], ['corC', 'cbOut'],
  ['cbOut', 'rc'], ['cbOut', 'yW'], ['cbOut', 'yC'], ['cbOut', 'messOut'], ['cbOut', 'visitOut'],
  ['rc', 'yC'], ['rc', 'yW'], ['rc', 'visitOut'],
  // Western detour runs inside the yard, away from the new lamp's 0.55 m collider.
  ['yW', 'yWestBypass'], ['yWestBypass', 'yEx'],
  ['yC', 'yE'], ['yC', 'yBench'], ['yC', 'yS'], ['yW', 'yEx'], ['yW', 'yBench2'], ['yEx', 'yBench2'], ['yBench2', 'yBench'],
  ['yBench', 'yS'], ['yE', 'messOut'], ['yE', 'medOut'], ['yE', 'wsOut'], ['yE', 'ySE'], ['yS', 'ySE'], ['ySE', 'lamCorner'], ['ySE', 'wsOut'],
  ['messOut', 'messIn'], ['messIn', 'messAisle'], ['messAisle', 'messCounter'], ['messCounter', 'messCanteen'], ['messAisle', 'messCanteen'],
  ['messOut', 'medOut'], ['medOut', 'medIn'], ['medIn', 'medDesk'], ['medDesk', 'medBed'],
  ['yW', 'visitOut'], ['visitOut', 'visitIn'], ['visitIn', 'visitMai'],
  ['yEx', 'classOut'], ['classOut', 'classIn'], ['classIn', 'classDesk'], ['classDesk', 'classPhuc'], ['classIn', 'classLib'], ['classOut', 'offOut'],
  ['ySE', 'discOut'], ['offOut', 'discOut'], ['discOut', 'discIn'],
  ['wsOut', 'wsIn'], ['wsIn', 'wsBoard'], ['wsIn', 'wsHub'], ['wsBoard', 'wsHub'], ['wsHub', 'wsStoreOut'], ['wsStoreOut', 'storeIn'],
  ['wsHub', 'wsRow'], ['wsRow', 'wsB1'], ['wsRow', 'wsB2'], ['wsRow', 'wsGap'], ['wsGap', 'wsRow2'], ['wsRow2', 'wsB3'], ['wsRow2', 'wsB4'], ['wsRow2', 'wsRest'],
  ['yS', 'offOut'], ['offOut', 'offIn'], ['offIn', 'offDesk'], ['offIn', 'offSide'], ['offSide', 'offBack'], ['offBack', 'offLan'],
];
export const EDGES = E;

/** Vị trí đứng điểm danh (hàng ngang trong ô vàng). */
export function rollcallSlot(i: number): [number, number] {
  return [-12.5 + i * 1.4, -8.6];
}
export const LAN_ROLLCALL: [number, number] = [-9, -11.6];

/** Chỗ ngồi nhà ăn: [x, z, hướng] khớp chính xác 2 ghế băng trong model canteen_table_set_blendstra.glb */
export const MESS_SEATS: [number, number, number][] = [
  // Bàn 1 (x: 1.5, z: -26.2): Băng ghế phía Nam nhìn về phía Bắc (Math.PI)
  [0.6, -25.45, Math.PI], [2.4, -25.45, Math.PI],
  // Bàn 1 (x: 1.5, z: -26.2): Băng ghế phía Bắc nhìn về phía Nam (0)
  [0.6, -26.95, 0], [2.4, -26.95, 0],
  // Bàn 2 (x: 10.5, z: -26.2): Băng ghế phía Nam nhìn về phía Bắc (Math.PI)
  [9.6, -25.45, Math.PI], [11.4, -25.45, Math.PI],
  // Bàn 3 & 4 (z: -22.2): Băng ghế phía Nam nhìn về phía Bắc (Math.PI)
  [9.6, -21.45, Math.PI], [0.6, -21.45, Math.PI],
];
