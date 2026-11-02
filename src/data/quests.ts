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
  lop_nghe_dau: {
    id: 'lop_nghe_dau', title: 'Bài học nghề đầu tiên', type: 'main', chapter: 2, giver: 'Thầy Phúc',
    reason: 'Thầy Phúc kiểm tra tính kỷ luật, kỹ năng quan sát và an toàn điện của Minh.',
    requirement: 'Đã sang Chương 2. Đến lớp học nghề trong ca chiều (14:00–16:30).',
    objectives: [
      { id: 'den_lop', text: 'Gặp Thầy Phúc tại Lớp học nghề (14:00–16:30)' },
      { id: 'thao_tac', text: 'Hoàn thành bài tập quan sát & nối dây an toàn tại bàn thực hành' },
      { id: 'nhan_xet', text: 'Nghe Thầy Phúc đánh giá và nhận chứng chỉ nghề' },
    ],
    reward: '+4 điểm cải tạo, Chứng chỉ nghề, mở quyền mượn sách thư viện.',
    failure: 'Có thể làm lại bài kiểm tra vào ca chiều hôm sau.',
  },
  nghi_an_thuoc: {
    id: 'nghi_an_thuoc', title: 'Nghi án thuốc trị hen', type: 'main', chapter: 2, giver: 'Y sĩ An',
    reason: 'Chú Bảy tái phát hen suyễn nhưng thuốc trong tủ y tế bị thiếu hụt bí ẩn.',
    requirement: 'Gặp Y sĩ An tại Phòng y tế (07:30–11:30 hoặc 13:30–17:00).',
    objectives: [
      { id: 'hoi_an', text: 'Nghe Y sĩ An trình bày sự việc tại Phòng y tế' },
      { id: 'hoi_bay', text: 'Hỏi Chú Bảy về thời điểm cơn hen xuất hiện' },
      { id: 'nhat_thuoc', text: 'Tìm kiếm vật chứng tại góc tường sau xưởng' },
      { id: 'tra_thuoc', text: 'Giao lại lọ thuốc cho Y sĩ An để cấp cứu Chú Bảy' },
    ],
    reward: '+6 điểm cải tạo, Chú Bảy +15, Y sĩ An +12 quan hệ, ghi lại manh mối điều tra.',
    failure: 'Không giới hạn thời gian.',
  },
  phong_tham_gap: {
    id: 'phong_tham_gap', title: 'Cuộc gặp sau vách kính', type: 'main', chapter: 2, giver: 'Chị Mai',
    reason: 'Chị Mai bắt xe đò từ quê lên trại giam An Phú thăm Minh theo lịch hẹn.',
    requirement: 'Đến Phòng thăm gặp (08:00–11:00 hoặc 14:00–17:00).',
    objectives: [
      { id: 'gap_chi', text: 'Ngồi vào vách kính nói chuyện với Chị Mai' },
      { id: 'thanh_that', text: 'Lựa chọn lời tâm sự chân thành làm chị yên tâm' },
      { id: 'nhan_tien', text: 'Nhận 25.000đ tiền tiếp tế chị gửi vào sổ lưu ký' },
    ],
    reward: '+25.000đ tiền căn tin, −20 căng thẳng, Chị Mai tin tưởng (+15 quan hệ).',
    failure: 'Có thể gặp chị vào ca thăm gặp tiếp theo.',
  },
  sach_thu_vien: {
    id: 'sach_thu_vien', title: 'Độc giả chăm chỉ', type: 'side', chapter: 2, giver: 'Thầy Phúc',
    reason: 'Đọc cẩm nang cải tạo tại thư viện trong giờ đọc sách buổi tối (19:00–21:00).',
    requirement: 'Đã hoàn thành bài học nghề đầu tiên.',
    objectives: [
      { id: 'muon_sach', text: 'Mượn cẩm nang pháp luật từ giá sách thư viện' },
      { id: 'doc_xong', text: 'Đọc sách tại bàn thư viện' },
    ],
    reward: '+2 điểm cải tạo, −10 căng thẳng, hiểu rõ quy tắc xét giảm án.',
    failure: 'Không giới hạn.',
  },
  phu_y_te: {
    id: 'phu_y_te', title: 'Phụ việc y tế', type: 'side', chapter: 2, giver: 'Y sĩ An',
    reason: 'Giúp Y sĩ An phân loại bông băng và vệ sinh dụng cụ tại tủ thuốc.',
    requirement: 'Đã làm quen Y sĩ An.',
    objectives: [
      { id: 'nhan_viec', text: 'Nhận việc tại tủ thuốc y tế' },
      { id: 'hoan_thanh', text: 'Hoàn thành sắp xếp thuốc men' },
    ],
    reward: '+3 điểm cải tạo, +1 vỉ thuốc cảm, Y sĩ An +8 quan hệ.',
    failure: 'Không giới hạn.',
  },
};

export const QUEST_ORDER = [
  'nhap_trai', 'ca_dau', 'mon_no',
  'lop_nghe_dau', 'nghi_an_thuoc', 'phong_tham_gap',
  'dep_bay', 'mi_cho_huy', 'sach_thu_vien', 'phu_y_te',
];
