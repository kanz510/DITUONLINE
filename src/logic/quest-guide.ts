import { SPOTS, NODES, zonesAt } from '../world/layout';
import { NPCS } from '../data/npcs';
import { QUESTS } from '../data/quests';
import { isOpen } from './constants';
import type { GameState, NpcId } from './state';

export interface QuestStepTargetConfig {
  spot?: string;
  npc?: NpcId;
  coords?: [number, number];
  label?: string;
  targetName?: string;
  zone?: string;
  hint?: string;
}

export interface ResolvedQuestDestination {
  tx?: number;
  tz?: number;
  label: string;
  targetName: string;
  isLocked?: boolean;
  openCondition?: string;
  safeX?: number;
  safeZ?: number;
  stepDesc: string;
  hint?: string;
}

export const ZONE_SAFE_COORDS: Record<string, { safeX: number; safeZ: number; openCond: string }> = {
  cellblock: { safeX: -17, safeZ: -15.5, openCond: '06:00–22:00' },
  mess: { safeX: 6.25, safeZ: -15.5, openCond: '07:00–08:00, 11:30–12:30, 16:30–21:00' },
  workshop: { safeX: 10.5, safeZ: -2.75, openCond: '08:00–11:30 & 13:30–16:30' },
  classroom: { safeX: -20.75, safeZ: 8.5, openCond: '14:00–16:30' },
  medical: { safeX: 22.25, safeZ: -16.5, openCond: '07:30–11:30 & 13:30–17:00' },
  visitation: { safeX: -18.5, safeZ: -10.25, openCond: '08:30–11:00 & 14:00–16:30' },
  office: { safeX: -4, safeZ: 11, openCond: '07:30–17:00' },
  discipline: { safeX: -11.2, safeZ: 11, openCond: 'Khu vực quản giáo' },
};

export const QUEST_DESTINATIONS: Record<string, Record<string, QuestStepTargetConfig>> = {
  // ─── CHƯƠNG 1 ───
  nhap_trai: {
    chan_man: { spot: 'bed', label: 'Giường của bạn (Nhận chăn màn)', targetName: 'Giường của bạn' },
    noi_quy: { spot: 'rules', label: 'Bảng nội quy buồng giam', targetName: 'Bảng nội quy' },
    diem_danh: { coords: [-9, -9], label: 'Ô điểm danh sáng sân trại', targetName: 'Ô điểm danh' },
    gap_bay: { npc: 'bay', label: 'Chú Bảy', targetName: 'Chú Bảy' },
  },

  ca_dau: {
    cham_cong: { spot: 'clock', label: 'Bảng chấm công xưởng', targetName: 'Bảng chấm công', zone: 'workshop' },
    lap_rap: { spot: 'workbench', label: 'Bàn xưởng (Lắp ráp 3 ổ cắm)', targetName: 'Bàn xưởng', zone: 'workshop' },
    bao_bay: { npc: 'bay', label: 'Chú Bảy (Báo cáo ca làm)', targetName: 'Chú Bảy' },
  },

  mon_no: {
    nghe_huy: { npc: 'huy', label: 'Huy', targetName: 'Huy' },
    gap_lam: { npc: 'lam', label: 'Lâm (Khu thể thao sân)', targetName: 'Lâm' },
    quyet_dinh: { npc: 'lam', label: 'Lâm (Quyết định hướng giải quyết món nợ)', targetName: 'Lâm' },
    lay_khoan: { spot: 'drill', label: 'Kệ kho xưởng (Lẻn lấy hộp khoan)', targetName: 'Kệ kho xưởng', zone: 'workshop' },
    giao_lam: { npc: 'lam', label: 'Lâm (Giao hộp mũi khoan)', targetName: 'Lâm' },
    du_tien: { spot: 'workbench', label: 'Bàn xưởng (Lao động kiếm 40.000đ)', targetName: 'Bàn xưởng', zone: 'workshop', hint: 'Lao động tại xưởng để tích lũy đủ 40.000đ tiền sạch' },
    tra_lam: { npc: 'lam', label: 'Lâm (Trả 40.000đ thay Huy)', targetName: 'Lâm' },
    lay_giay: { npc: 'huy', label: 'Huy (Thuyết phục lấy giấy nợ)', targetName: 'Huy' },
    bao_lan: { npc: 'lan', spot: 'lan_desk', label: 'Quản giáo Lan (Báo cáo ép nợ)', targetName: 'Quản giáo Lan', zone: 'office' },
    dam_phan: { npc: 'lam', label: 'Lâm (Đàm phán xóa nợ)', targetName: 'Lâm' },
  },

  dep_bay: {
    tim_dep: { spot: 'sandals', label: 'Bụi cỏ sân trại (Tìm dép tổ ong)', targetName: 'Bụi cỏ' },
    tra_dep: { npc: 'bay', label: 'Chú Bảy (Trả lại dép)', targetName: 'Chú Bảy' },
  },

  mi_cho_huy: {
    mua: { spot: 'canteen', label: 'Căn tin nhà ăn (Mua mì gói)', targetName: 'Căn tin', zone: 'mess' },
    dua: { npc: 'huy', label: 'Huy (Đưa mì gói)', targetName: 'Huy' },
  },

  lao_dong_phu: {
    dang_ky: { spot: 'clock', label: 'Bảng chấm công (Đăng ký ca chiều)', targetName: 'Bảng chấm công', zone: 'workshop' },
    lap_phu: { spot: 'workbench', label: 'Bàn xưởng (Lắp 2 sản phẩm ca chiều)', targetName: 'Bàn xưởng', zone: 'workshop' },
  },

  // ─── CHƯƠNG 2 ───
  lop_nghe_dau: {
    den_lop: { npc: 'phuc', label: 'Thầy Phúc (Lớp học nghề)', targetName: 'Thầy Phúc', zone: 'classroom' },
    thao_tac: { spot: 'class_workbench', label: 'Bàn thực hành nghề (Nối mạch)', targetName: 'Bàn thực hành', zone: 'classroom' },
    nhan_xet: { npc: 'phuc', label: 'Thầy Phúc (Nhận chứng chỉ nghề)', targetName: 'Thầy Phúc', zone: 'classroom' },
  },

  nghi_an_thuoc: {
    hoi_an: { npc: 'an', spot: 'med_table', label: 'Y sĩ An (Phòng y tế)', targetName: 'Y sĩ An', zone: 'medical' },
    hoi_bay: { npc: 'bay', label: 'Chú Bảy (Hỏi cơn hen)', targetName: 'Chú Bảy' },
    quyet_dinh: { npc: 'bay', label: 'Chú Bảy (Chọn phương án thu hồi thuốc)', targetName: 'Chú Bảy' },
    len_lut: { spot: 'asthma_spot', label: 'Góc tường sau xưởng (Lén lút nhặt thuốc)', targetName: 'Góc tường sau xưởng' },
    thuyet_phuc_khai: { npc: 'khai', label: 'Khải (Thuyết phục lấy lại thuốc)', targetName: 'Khải' },
    quan_sat_dau_vet: { spot: 'workbench', label: 'Bàn xưởng (Tìm manh mối giấu thuốc)', targetName: 'Bàn xưởng', zone: 'workshop' },
    thu_hoi_hoc_tuong: { spot: 'asthma_spot', label: 'Hốc tường sau xưởng (Thu hồi thuốc)', targetName: 'Hốc tường sau xưởng' },
    nhat_thuoc: { spot: 'asthma_spot', label: 'Góc tường sau xưởng (Nhặt lọ thuốc hen)', targetName: 'Lọ thuốc hen' },
    tra_thuoc: { npc: 'an', spot: 'med_table', label: 'Y sĩ An (Giao thuốc cấp cứu)', targetName: 'Y sĩ An', zone: 'medical' },
  },

  manh_moi_kho_7: {
    nghe_bay_ke: { npc: 'bay', label: 'Chú Bảy (Nghe kể về kho số 7)', targetName: 'Chú Bảy' },
    kiem_tra_tem: { spot: 'clue_crate', label: 'Kiện hàng niêm phong KHO-07', targetName: 'Kiện hàng KHO-07', zone: 'workshop' },
    lay_manh_giay: { spot: 'clue_crate', label: 'Kiện hàng niêm phong KHO-07', targetName: 'Kiện hàng KHO-07', zone: 'workshop' },
  },

  phong_tham_gap: {
    gap_chi: { spot: 'visit_booth', label: 'Vách kính thăm gặp (Chị Mai)', targetName: 'Vách kính thăm gặp', zone: 'visitation' },
    thanh_that: { spot: 'visit_booth', label: 'Vách kính thăm gặp (Chị Mai)', targetName: 'Vách kính thăm gặp', zone: 'visitation' },
    nhan_tien: { spot: 'visit_booth', label: 'Vách kính thăm gặp (Chị Mai)', targetName: 'Vách kính thăm gặp', zone: 'visitation' },
  },

  sach_thu_vien: {
    muon_sach: { spot: 'library_shelf', label: 'Giá sách thư viện (Mượn cẩm nang)', targetName: 'Giá sách thư viện', zone: 'classroom' },
    doc_xong: { spot: 'library_shelf', label: 'Thư viện (Đọc sách cẩm nang)', targetName: 'Giá sách thư viện', zone: 'classroom', hint: 'Mở túi đồ đọc sách hoặc đọc cẩm nang tại Thư viện' },
  },

  phu_y_te: {
    nhan_viec: { npc: 'an', spot: 'med_table', label: 'Y sĩ An (Phòng y tế)', targetName: 'Y sĩ An', zone: 'medical' },
    hoan_thanh: { spot: 'med_cabinet', label: 'Tủ thuốc y tế (Phân loại thuốc)', targetName: 'Tủ thuốc y tế', zone: 'medical' },
  },

  // ─── CHƯƠNG 3 ───
  doi_chieu_chung_tu: {
    dua_chung_tu: { npc: 'phuc', label: 'Thầy Phúc (Đưa chứng từ)', targetName: 'Thầy Phúc', zone: 'classroom' },
    doi_chieu: { spot: 'class_workbench', label: 'Bàn học nghề (Đối chiếu chứng từ)', targetName: 'Bàn học nghề', zone: 'classroom' },
    phat_hien: { npc: 'phuc', label: 'Thầy Phúc (Báo cáo chữ ký kho 7)', targetName: 'Thầy Phúc', zone: 'classroom' },
  },

  cam_do_im_lang: {
    gap_lam_ch3: { npc: 'lam', label: 'Lâm (Khu thể thao sân)', targetName: 'Lâm' },
    quyet_dinh_im_lang: { npc: 'lam', label: 'Lâm (Quyết định nhận tiền hay từ chối)', targetName: 'Lâm' },
  },

  bay_vat_cam: {
    phat_hien_bay: { npc: 'tung', label: 'Cán bộ Tùng (Kiểm tra đột xuất)', targetName: 'Cán bộ Tùng' },
    trinh_bay: { npc: 'lan', spot: 'lan_desk', label: 'Quản giáo Lan (Giải trình)', targetName: 'Quản giáo Lan', zone: 'office' },
    cung_cap_bang_chung: { npc: 'lan', spot: 'lan_desk', label: 'Quản giáo Lan (Trích xuất camera minh oan)', targetName: 'Quản giáo Lan', zone: 'office' },
  },

  la_thu_que_nha: {
    nhan_thu: { spot: 'lan_desk', label: 'Bàn tiếp nhận (Nhận thư gia đình)', targetName: 'Bàn tiếp nhận', zone: 'office' },
    hoi_am: { spot: 'bed', label: 'Buồng giam số 3 (Viết thư hồi âm)', targetName: 'Buồng giam số 3' },
  },

  ren_luyen_the_chat: {
    tap_the_duc: { spot: 'exercise', label: 'Khu tập xà đơn & tạ tay', targetName: 'Xà đơn & tạ tay' },
  },

  sua_quat_phong_hoc: {
    kiem_tra_quat: { spot: 'class_fan', label: 'Quạt phòng học bị hỏng', targetName: 'Quạt lớp học', zone: 'classroom' },
    thay_vong_bi: { spot: 'class_fan', label: 'Quạt phòng học (Thay vòng bi)', targetName: 'Quạt lớp học', zone: 'classroom' },
  },

  // ─── CHƯƠNG 4 ───
  ho_so_giai_trinh: {
    tong_hop_chung_cu: { spot: 'bed', label: 'Giường của bạn (Hoàn tất hồ sơ minh oan)', targetName: 'Giường của bạn' },
    nop_ho_so: { spot: 'lan_desk', label: 'Bàn tiếp nhận (Nộp hồ sơ cho Quản giáo Lan)', targetName: 'Bàn tiếp nhận', zone: 'office' },
    ket_luan_lan: { spot: 'lan_desk', label: 'Bàn tiếp nhận (Nhận kết luận minh oan)', targetName: 'Bàn tiếp nhận', zone: 'office' },
  },

  loi_hua_chu_bay: {
    nghe_loi_hua: { npc: 'bay', label: 'Chú Bảy (Lắng nghe tâm sự)', targetName: 'Chú Bảy' },
    danh_bong_hop: { spot: 'workbench', label: 'Bàn xưởng (Gia công hộp kỷ vật gỗ)', targetName: 'Bàn xưởng', zone: 'workshop' },
    hua_gui_ve: { npc: 'bay', label: 'Chú Bảy (Trao lại hộp kỷ vật)', targetName: 'Chú Bảy' },
  },

  ky_xet_cuoi_cung: {
    den_hoi_truong: { spot: 'lan_desk', label: 'Phòng quản giáo (Hội đồng đặc xá)', targetName: 'Phòng quản giáo', zone: 'office' },
    nhan_quyet_dinh: { spot: 'lan_desk', label: 'Phòng quản giáo (Nhận quyết định tự do)', targetName: 'Phòng quản giáo', zone: 'office' },
  },

  truyen_nghe_cho_huy: {
    huong_dan_huy: { npc: 'huy', label: 'Huy (Hướng dẫn nghề)', targetName: 'Huy' },
    huy_thuc_hanh: { spot: 'workbench', label: 'Bàn xưởng (Giúp Huy thực hành)', targetName: 'Bàn xưởng', zone: 'workshop' },
  },

  chia_tay_thay_phuc: {
    tam_su_thay: { npc: 'phuc', label: 'Thầy Phúc (Lớp học nghề)', targetName: 'Thầy Phúc', zone: 'classroom' },
    nhan_thu_gt: { npc: 'phuc', label: 'Thầy Phúc (Nhận thư giới thiệu việc làm)', targetName: 'Thầy Phúc', zone: 'classroom' },
  },

  kiem_tra_suc_khoe: {
    kham_tong_quat: { npc: 'an', spot: 'med_table', label: 'Y sĩ An (Khám tổng quát xuất trại)', targetName: 'Y sĩ An', zone: 'medical' },
  },
};

/**
 * Bộ phân giải đích theo dữ liệu cho mọi nhiệm vụ (26 nhiệm vụ).
 * Thứ tự ưu tiên phân giải:
 * 1. Điểm SPOTS tương ứng (lan_desk, workbench, exercise, bed, rules, ...).
 * 2. Vị trí hiện tại của NPC liên quan (kèm whereHint khi NPC vắng mặt).
 * 3. Tọa độ cố định của bước đó.
 * 4. Nếu là bước không có đích vật lý (suy nghĩ, chờ giờ, đọc sách): trả về hint rõ ràng, không vẽ nút chết.
 */
export function resolveQuestDestination(
  qid: string,
  s: GameState,
  liveNpcs?: Record<string, { x: number; z: number }>,
): ResolvedQuestDestination | null {
  const qDef = QUESTS[qid];
  if (!qDef) return null;

  const br = (s.flags[`${qid}:branch`] as string) || '';
  const curObj = qDef.objectives.find((o) => (!o.branch || o.branch === br) && !s.flags[`${qid}:${o.id}`]);
  if (!curObj) return null;

  const cfg = QUEST_DESTINATIONS[qid]?.[curObj.id];

  // Nếu là bước không có đích vật lý được cấu hình riêng
  if (cfg?.hint && !cfg.spot && !cfg.npc && !cfg.coords) {
    return {
      label: cfg.label || qDef.title,
      targetName: cfg.targetName || qDef.title,
      stepDesc: cfg.hint,
      hint: cfg.hint,
    };
  }

  let tx: number | undefined;
  let tz: number | undefined;
  let label = cfg?.label || '';
  let targetName = cfg?.targetName || '';
  let zone = cfg?.zone;

  // 1. ƯU TIÊN 1: SPOTS
  if (cfg?.spot) {
    const sp = SPOTS.find((item) => item.id === cfg.spot);
    if (sp) {
      tx = sp.x;
      tz = sp.z;
      if (!label) label = sp.label;
      if (!targetName) targetName = sp.label;
    }
  }

  // 2. ƯU TIÊN 2: NPC
  if (tx === undefined && cfg?.npc) {
    const npcId = cfg.npc;
    const npcDef = NPCS[npcId];
    if (liveNpcs && liveNpcs[npcId]) {
      tx = liveNpcs[npcId].x;
      tz = liveNpcs[npcId].z;
    } else if (npcDef) {
      // Ước lượng vị trí NPC theo lịch trình
      const slot = npcDef.schedule.find((sl) => s.minute >= sl.from && s.minute < sl.to) || npcDef.schedule[0];
      if (slot?.pos) {
        tx = slot.pos[0];
        tz = slot.pos[1];
      } else if (slot?.node && NODES[slot.node]) {
        tx = NODES[slot.node][0];
        tz = NODES[slot.node][1];
      }
    }
    const npcName = NPCS[npcId]?.name || npcId;
    if (!label) label = npcName;
    if (!targetName) targetName = npcName;
  }

  // 3. ƯU TIÊN 3: COORDS
  if (tx === undefined && cfg?.coords) {
    tx = cfg.coords[0];
    tz = cfg.coords[1];
    if (!label) label = qDef.title;
    if (!targetName) targetName = qDef.title;
  }

  // 4. Fallback tự động nếu chưa có cấu hình riêng (chống sót nhiệm vụ tương lai)
  if (tx === undefined) {
    const txt = curObj.text.toLowerCase();
    if (txt.includes('bảy') || txt.includes('bay')) {
      const sp = liveNpcs?.['bay'] || NODES['yBench'];
      if (sp) { tx = (sp as any).x ?? (sp as any)[0]; tz = (sp as any).z ?? (sp as any)[1]; label = 'Chú Bảy'; targetName = 'Chú Bảy'; }
    } else if (txt.includes('lâm') || txt.includes('lam')) {
      const sp = liveNpcs?.['lam'] || NODES['lamCorner'];
      if (sp) { tx = (sp as any).x ?? (sp as any)[0]; tz = (sp as any).z ?? (sp as any)[1]; label = 'Lâm'; targetName = 'Lâm'; }
    } else if (txt.includes('huy')) {
      const sp = liveNpcs?.['huy'] || NODES['c3'];
      if (sp) { tx = (sp as any).x ?? (sp as any)[0]; tz = (sp as any).z ?? (sp as any)[1]; label = 'Huy'; targetName = 'Huy'; }
    } else if (txt.includes('phúc') || txt.includes('phuc')) {
      const sp = liveNpcs?.['phuc'] || NODES['c1'];
      if (sp) { tx = (sp as any).x ?? (sp as any)[0]; tz = (sp as any).z ?? (sp as any)[1]; label = 'Thầy Phúc'; targetName = 'Thầy Phúc'; }
    } else if (txt.includes('an') || txt.includes('y tế') || txt.includes('thuốc')) {
      const sp = liveNpcs?.['an'] || NODES['medDesk'];
      if (sp) { tx = (sp as any).x ?? (sp as any)[0]; tz = (sp as any).z ?? (sp as any)[1]; label = 'Y sĩ An'; targetName = 'Y sĩ An'; }
    } else if (txt.includes('lan') || txt.includes('quản giáo')) {
      const sp = liveNpcs?.['lan'] || NODES['yC'];
      if (sp) { tx = (sp as any).x ?? (sp as any)[0]; tz = (sp as any).z ?? (sp as any)[1]; label = 'Quản giáo Lan'; targetName = 'Quản giáo Lan'; }
    } else if (txt.includes('tùng') || txt.includes('tung')) {
      const sp = liveNpcs?.['tung'] || NODES['rc'];
      if (sp) { tx = (sp as any).x ?? (sp as any)[0]; tz = (sp as any).z ?? (sp as any)[1]; label = 'Cán bộ Tùng'; targetName = 'Cán bộ Tùng'; }
    }
  }

  // Nếu vẫn không có tọa độ (bước hành động tại chỗ: đọc, chờ, suy nghĩ)
  if (tx === undefined || tz === undefined) {
    return {
      label: label || qDef.title,
      targetName: targetName || qDef.title,
      stepDesc: cfg?.hint || curObj.text,
      hint: cfg?.hint || curObj.text,
    };
  }

  // Xác định khu vực đóng/mở & điểm chờ an toàn bên ngoài cửa
  let isLocked = false;
  let openCondition: string | undefined;
  let safeX: number | undefined;
  let safeZ: number | undefined;

  if (!zone) {
    const insideZones = zonesAt(tx, tz);
    if (insideZones.length > 0) zone = insideZones[0];
  }

  if (zone && ZONE_SAFE_COORDS[zone]) {
    isLocked = !isOpen(zone, s.minute);
    safeX = ZONE_SAFE_COORDS[zone].safeX;
    safeZ = ZONE_SAFE_COORDS[zone].safeZ;
    openCondition = ZONE_SAFE_COORDS[zone].openCond;
  }

  return {
    tx,
    tz,
    label: label || qDef.title,
    targetName: targetName || qDef.title,
    isLocked,
    openCondition,
    safeX,
    safeZ,
    stepDesc: curObj.text,
    hint: cfg?.hint,
  };
}
