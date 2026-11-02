export interface QuestObjective {
  id: string;
  text: string;
  branch?: string;
  optional?: boolean;
}

export interface QuestDef {
  id: string;
  title: string;
  type: 'main' | 'side';
  chapter: number;
  giver: string;
  reason: string;
  requirement: string;
  objectives: QuestObjective[];
  branches?: Record<string, string>; // id → mô tả lựa chọn
  reward: string;
  failure: string;
}

export const QUESTS: Record<string, QuestDef> = {
  nhap_trai: {
    id: 'nhap_trai', title: 'Người mới', type: 'main', chapter: 1, giver: 'Quản giáo Lan',
    reason: 'Phạm nhân mới phải nắm nội quy và nề nếp trong ngày đầu nhập trại.',
    requirement: 'Tự động nhận khi nhập trại.',
    objectives: [
      { id: 'chan_man', text: 'Nhận chăn màn ở giường của bạn (Buồng 3)' },
      { id: 'noi_quy', text: 'Đọc Bảng nội quy ở hành lang khu buồng' },
      { id: 'diem_danh', text: 'Có mặt điểm danh ở ô vàng ngoài sân (06:30–06:45)' },
      { id: 'gap_bay', text: 'Làm quen Chú Bảy (bạn cùng buồng, thường ngồi ở nhà ăn giờ ăn)' },
    ],
    reward: '+3 điểm cải tạo, Quản giáo Lan ghi nhận.',
    failure: 'Không thể thất bại. Nếu lỡ điểm danh ngày đầu, Quản giáo chỉ nhắc nhở; hãy điểm danh sáng hôm sau.',
  },
  ca_dau: {
    id: 'ca_dau', title: 'Ca lao động đầu tiên', type: 'main', chapter: 1, giver: 'Chú Bảy',
    reason: 'Lao động đủ chỉ tiêu là nền tảng của hồ sơ xét giảm án.',
    requirement: 'Hoàn thành "Người mới" hoặc nói chuyện với Chú Bảy.',
    objectives: [
      { id: 'cham_cong', text: 'Chấm công ở bảng cạnh cửa xưởng (08:00–08:30)' },
      { id: 'lap_rap', text: 'Lắp ráp đủ 3 ổ cắm điện tại bàn làm việc' },
      { id: 'bao_bay', text: 'Kể lại với Chú Bảy' },
    ],
    reward: '+4 điểm cải tạo, tiền công ca, Chú Bảy tin tưởng hơn.',
    failure: 'Nếu bỏ lỡ ca sáng: bị ghi "Bỏ lao động", nhưng có thể làm lại vào ca sáng hôm sau.',
  },
  mon_no: {
    id: 'mon_no', title: 'Món nợ của Huy', type: 'main', chapter: 1, giver: 'Huy',
    reason: 'Huy nợ Lâm 40.000đ. Lâm dọa "xử" Huy nếu không trả trong tuần.',
    requirement: 'Sau khi hoàn thành "Ca lao động đầu tiên". Gặp Huy giờ tự do ngoài sân.',
    objectives: [
      { id: 'nghe_huy', text: 'Nghe Huy kể chuyện' },
      { id: 'gap_lam', text: 'Gặp Lâm ở góc khuất sau xưởng (giờ tự do)' },
      { id: 'quyet_dinh', text: 'Quyết định cách giải quyết' },
      { id: 'lay_khoan', text: 'Lẻn vào kho xưởng lấy hộp mũi khoan (kho chỉ mở ca sáng; tránh camera và cán bộ Tùng)', branch: 'steal' },
      { id: 'giao_lam', text: 'Giao hộp mũi khoan cho Lâm', branch: 'steal' },
      { id: 'du_tien', text: 'Có đủ 40.000đ (tiền công, ca chiều tự nguyện)', branch: 'pay' },
      { id: 'tra_lam', text: 'Trả nợ thay Huy cho Lâm', branch: 'pay' },
      { id: 'lay_giay', text: '(Không bắt buộc) Thuyết phục Huy đưa giấy ghi nợ làm bằng chứng', branch: 'report', optional: true },
      { id: 'bao_lan', text: 'Báo cáo Quản giáo Lan tại phòng quản giáo (07:00–17:00)', branch: 'report' },
    ],
    branches: {
      steal: 'Nhận lời Lâm: trộm đồ trong kho',
      pay: 'Trả nợ thay Huy bằng tiền sạch',
      report: 'Báo cáo Quản giáo Lan',
      fight: 'Ra tay với Lâm',
    },
    reward: 'Tuỳ lựa chọn: tiền, quan hệ, điểm cải tạo — mỗi lựa chọn có cái giá riêng.',
    failure: 'Bị bắt khi trộm: nhiệm vụ thất bại, Lâm phủi tay. Huy vẫn nợ nhưng sẽ tự trả dần; cốt truyện vẫn tiếp tục.',
  },
  dep_bay: {
    id: 'dep_bay', title: 'Đôi dép của Chú Bảy', type: 'side', chapter: 1, giver: 'Chú Bảy',
    reason: 'Chú Bảy đánh rơi đôi dép tổ ong mà con gái gửi vào — kỷ vật duy nhất.',
    requirement: 'Đã làm quen Chú Bảy.',
    objectives: [
      { id: 'tim_dep', text: 'Tìm đôi dép quanh khu tập thể dục ngoài sân' },
      { id: 'tra_dep', text: 'Trả dép cho Chú Bảy' },
    ],
    reward: 'Chú Bảy +10 quan hệ, mở chuyện về gia đình chú.',
    failure: 'Không giới hạn thời gian.',
  },
  mi_cho_huy: {
    id: 'mi_cho_huy', title: 'Gói mì cho Huy', type: 'side', chapter: 1, giver: 'Huy',
    reason: 'Huy bị cấm căn tin, đói meo, nhờ bạn mua giúp một gói mì.',
    requirement: 'Đã gặp Huy.',
    objectives: [
      { id: 'mua', text: 'Mua mì gói ở căn tin (nhà ăn, tối 16:30–21:00)' },
      { id: 'dua', text: 'Đưa mì cho Huy trước khi hết ngày mai' },
    ],
    reward: 'Huy +8, Huy nhớ bạn giữ lời.',
    failure: 'Quá hạn: Huy −8 và nhớ bạn thất hứa.',
  },
};

export const QUEST_ORDER = ['nhap_trai', 'ca_dau', 'mon_no', 'dep_bay', 'mi_cho_huy'];
