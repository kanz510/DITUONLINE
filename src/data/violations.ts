export interface ViolationDef {
  type: string;
  title: string;
  severity: 0 | 1 | 2 | 3;
  reform: number;
  suspicion?: number;
  morale?: number;
  stress?: number;
  penalty: string;
  /** Mô tả trước khi hành động để người chơi hiểu rủi ro. */
  risk: string;
}

export const VIOLATIONS: Record<string, ViolationDef> = {
  disobedience: {
    type: 'disobedience', title: 'Không rời khu vực sau giờ đóng cửa', severity: 1, reform: -2,
    penalty: 'Được áp giải ra ngoài, cảnh cáo và trừ 2 điểm cải tạo.',
    risk: 'Ở lại khu vực đã đóng cửa: được đưa ra ngoài an toàn, −2 điểm cải tạo.',
  },
  late_rollcall: {
    type: 'late_rollcall', title: 'Trễ điểm danh', severity: 1, reform: -3, morale: -5,
    penalty: 'Cảnh cáo, trừ 3 điểm cải tạo.',
    risk: 'Có mặt sau 06:45 bị ghi trễ điểm danh: cảnh cáo, −3 điểm cải tạo.',
  },
  missed_rollcall: {
    type: 'missed_rollcall', title: 'Vắng mặt điểm danh', severity: 2, reform: -6, morale: -8,
    penalty: 'Cảnh cáo, trừ 6 điểm cải tạo.',
    risk: 'Không có mặt đến 07:00: vắng điểm danh, −6 điểm cải tạo.',
  },
  late_work: {
    type: 'late_work', title: 'Trễ giờ lao động', severity: 1, reform: -2,
    penalty: 'Nhắc nhở, trừ 2 điểm cải tạo.',
    risk: 'Chấm công sau 08:30: −2 điểm cải tạo.',
  },
  skip_work: {
    type: 'skip_work', title: 'Bỏ lao động', severity: 2, reform: -6, morale: -5,
    penalty: 'Mất toàn bộ tiền công ca sáng, trừ 6 điểm cải tạo.',
    risk: 'Không làm sản phẩm nào trong ca sáng: mất tiền công, −6 điểm cải tạo.',
  },
  curfew: {
    type: 'curfew', title: 'Không về buồng đúng giờ', severity: 1, reform: -4,
    penalty: 'Cảnh cáo, trừ 4 điểm cải tạo.',
    risk: 'Ngoài khu buồng giam lúc 21:30: −4 điểm cải tạo.',
  },
  restricted: {
    type: 'restricted', title: 'Tự ý vào khu cấm', severity: 2, reform: -5, suspicion: 15, morale: -8,
    penalty: 'Bị đưa ra ngoài, trừ 5 điểm cải tạo, +15 nghi ngờ.',
    risk: 'Nếu camera hoặc cán bộ thấy: −5 điểm cải tạo, +15 nghi ngờ. Nếu không ai thấy: chỉ +5 nghi ngờ.',
  },
  theft: {
    type: 'theft', title: 'Trộm cắp tài sản xưởng', severity: 2, reform: -10, suspicion: 20, morale: -12,
    penalty: 'Tịch thu tang vật, trừ 10 điểm cải tạo, cấm mua căn tin 2 ngày.',
    risk: 'Bị bắt quả tang: −10 điểm cải tạo, cấm căn tin 2 ngày. Không bị phát hiện: nghi ngờ tăng, chỉ bị xử khi có bằng chứng.',
  },
  contraband: {
    type: 'contraband', title: 'Tàng trữ hàng cấm', severity: 2, reform: -6, suspicion: 10, morale: -10,
    penalty: 'Tịch thu, trừ 6 điểm cải tạo.',
    risk: 'Bị khám thấy hàng cấm: tịch thu, −6 điểm cải tạo.',
  },
  fight: {
    type: 'fight', title: 'Gây thương tích cho người khác', severity: 3, reform: -12, morale: -15,
    penalty: 'Trừ 12 điểm cải tạo, đưa ra phiên xem xét — có thể cộng 1–3 ngày án.',
    risk: 'HÀNH VI NGHIÊM TRỌNG: −12 điểm cải tạo và mở phiên xem xét tăng án (1–3 ngày).',
  },
};
