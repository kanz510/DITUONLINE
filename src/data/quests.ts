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
  recommendedLevel?: number;
  objectives: QuestObjective[];
  branches?: Record<string, string>;
  reward: string;
  xp: number;
  failure: string;
}

export const QUESTS: Record<string, QuestDef> = {
  // ═══════════════════ CHƯƠNG 1: NGƯỜI MỚI ═══════════════════
  nhap_trai: {
    id: 'nhap_trai',
    title: 'Người mới',
    type: 'main',
    chapter: 1,
    giver: 'Quản giáo Lan',
    reason: 'Phạm nhân mới phải làm quen buồng giam, nắm nội quy và nề nếp sinh hoạt trong ngày đầu nhập trại An Phú.',
    requirement: 'Bắt đầu trò chơi sau phần mở đầu.',
    recommendedLevel: 1,
    objectives: [
      { id: 'chan_man', text: 'Nhận chăn màn tại giường của bạn (Buồng số 3)' },
      { id: 'noi_quy', text: 'Đọc kỹ Bảng nội quy trại tại hành lang khu buồng giam' },
      { id: 'diem_danh', text: 'Có mặt điểm danh ở ô vàng ngoài sân (06:30–06:45)' },
      { id: 'gap_bay', text: 'Làm quen Chú Bảy (bạn cùng buồng, thường ngồi ở nhà ăn)' },
      { id: 'thu_thach_nhap_trai', text: 'Thử thách (tùy chọn): Nắm vững nề nếp trại ngay ngày đầu (Cần thể lực ≥ 70, thưởng +15 XP)', optional: true },
    ],
    reward: '+3 điểm cải tạo, 50 XP, Quản giáo Lan ghi nhận hồ sơ.',
    xp: 50,
    failure: 'Không thể thất bại. Nếu lỡ điểm danh ngày đầu, Quản giáo chỉ nhắc nhở; hãy điểm danh vào sáng hôm sau.',
  },

  ca_dau: {
    id: 'ca_dau',
    title: 'Ca lao động đầu tiên',
    type: 'main',
    chapter: 1,
    giver: 'Chú Bảy',
    reason: 'Lao động đủ chỉ tiêu là cơ sở cốt lõi để tích lũy điểm và được xét giảm án.',
    requirement: 'Hoàn thành nhiệm vụ "Người mới".',
    recommendedLevel: 1,
    objectives: [
      { id: 'cham_cong', text: 'Chấm công tại bảng xưởng lao động (08:00–08:30)' },
      { id: 'lap_rap', text: 'Lắp ráp đủ 3 ổ cắm điện tại bàn làm việc xưởng' },
      { id: 'bao_bay', text: 'Báo cáo lại với Chú Bảy sau giờ lao động' },
      { id: 'thu_thach_ca_dau', text: 'Thử thách (tùy chọn): Lắp ráp thêm sản phẩm vượt định mức (Cần thể lực ≥ 40, thưởng +20 XP)', optional: true },
    ],
    reward: '+4 điểm cải tạo, 60 XP, 15.000đ tiền công ca, Chú Bảy tin tưởng.',
    xp: 60,
    failure: 'Nếu bỏ lỡ ca sáng: bị ghi nhận "Bỏ lao động", có thể bù lại vào ca sáng ngày hôm sau.',
  },

  mon_no: {
    id: 'mon_no',
    title: 'Món nợ của Huy',
    type: 'main',
    chapter: 1,
    giver: 'Huy',
    reason: 'Huy bị Lâm ép trả món nợ 40.000đ với lãi cắt cổ, dọa sẽ "xử" nếu không trả trước cuối tuần.',
    requirement: 'Sau khi hoàn thành "Ca lao động đầu tiên". Gặp Huy ngoài sân giờ tự do.',
    recommendedLevel: 2,
    objectives: [
      { id: 'nghe_huy', text: 'Lắng nghe Huy tâm sự về nguồn cơn món nợ' },
      { id: 'gap_lam', text: 'Gặp Lâm ở góc khuất sau xưởng (giờ tự do)' },
      { id: 'quyet_dinh', text: 'Lựa chọn phương án giải quyết dứt điểm món nợ' },
      { id: 'lay_khoan', text: 'Lẻn vào kho xưởng lấy hộp mũi khoan đưa cho Lâm (Tránh camera và Cán bộ Tùng)', branch: 'steal' },
      { id: 'giao_lam', text: 'Giao hộp mũi khoan cho Lâm', branch: 'steal' },
      { id: 'du_tien', text: 'Tích lũy đủ 40.000đ tiền sạch từ tiền công lao động', branch: 'pay' },
      { id: 'tra_lam', text: 'Trả nợ thay Huy cho Lâm sòng phẳng', branch: 'pay' },
      { id: 'lay_giay', text: 'Thử thách (tùy chọn): Thuyết phục Huy giao giấy ghi nợ khống làm bằng chứng (Cần kỹ năng Giao tiếp ≥ 1)', branch: 'report', optional: true },
      { id: 'bao_lan', text: 'Báo cáo Quản giáo Lan xử lý hành vi cho vay nặng lãi', branch: 'report' },
      { id: 'dam_phan', text: 'Dùng kỹ năng Giao tiếp thương lượng xóa nợ và phân tích rủi ro cho Lâm (Cần kỹ năng Giao tiếp ≥ 2)', branch: 'negotiate' },
    ],
    branches: {
      steal: 'Thỏa hiệp: trộm đồ trong kho giao cho Lâm',
      pay: 'Trả nợ thay bằng tiền công sạch',
      report: 'Báo cáo Quản giáo Lan xử lý theo luật',
      negotiate: 'Dùng kỹ năng đàm phán thuyết phục Lâm dừng ép nợ',
    },
    reward: '70 XP, mở Chương 2. Điểm cải tạo và quan hệ thay đổi sâu sắc theo lựa chọn.',
    xp: 70,
    failure: 'Nếu bị bắt khi trộm đồ trong kho: bị kỷ luật, nhiệm vụ chuyển sang giải quyết bằng báo cáo hoặc tự trả nợ.',
  },

  dep_bay: {
    id: 'dep_bay',
    title: 'Đôi dép của Chú Bảy',
    type: 'side',
    chapter: 1,
    giver: 'Chú Bảy',
    reason: 'Chú Bảy đánh rơi đôi dép tổ ong màu xanh — kỷ vật duy nhất do con gái gửi vào trước khi chú chuyển trại.',
    requirement: 'Đã làm quen Chú Bảy tại buồng hoặc nhà ăn.',
    recommendedLevel: 1,
    objectives: [
      { id: 'tim_dep', text: 'Tìm kiếm đôi dép tổ ong quanh bãi tập thể dục ngoài sân' },
      { id: 'tra_dep', text: 'Mang dép trả lại cho Chú Bảy' },
    ],
    reward: '+10 quan hệ Chú Bảy, 25 XP, mở lòng chia sẻ về hoàn cảnh gia đình.',
    xp: 25,
    failure: 'Không giới hạn thời gian.',
  },

  mi_cho_huy: {
    id: 'mi_cho_huy',
    title: 'Gói mì cho Huy',
    type: 'side',
    chapter: 1,
    giver: 'Huy',
    reason: 'Huy bị phạt hạn chế mua đồ căn tin 1 ngày, đói lả sau ca làm việc, nhờ Minh mua giúp gói mì.',
    requirement: 'Đã gặp Huy ở buồng giam.',
    recommendedLevel: 1,
    objectives: [
      { id: 'mua', text: 'Mua 1 gói mì tại căn tin nhà ăn (mở 16:30–21:00)' },
      { id: 'dua', text: 'Đưa mì gói cho Huy trước khi hết ngày hôm sau' },
    ],
    reward: '+8 quan hệ Huy, 20 XP, Huy ghi nhớ Minh là người giữ chữ tín.',
    xp: 20,
    failure: 'Quá hạn không đưa: Huy −8 quan hệ và mất dần lòng tin.',
  },

  lao_dong_phu: {
    id: 'lao_dong_phu',
    title: 'Ca phụ tự nguyện',
    type: 'side',
    chapter: 1,
    giver: 'Chú Bảy',
    reason: 'Xưởng cần bổ sung sản phẩm lắp ráp cho đơn hàng bàn ghế trại. Tự nguyện tham gia ca chiều.',
    requirement: 'Sau khi hoàn thành chỉ tiêu ca sáng.',
    recommendedLevel: 1,
    objectives: [
      { id: 'dang_ky', text: 'Đến xưởng trong ca chiều tự do (13:30–16:30)' },
      { id: 'lap_phu', text: 'Lắp ráp thêm 2 cụm chi tiết máy' },
    ],
    reward: '+2 điểm cải tạo, 10.000đ tiền công, 30 XP.',
    xp: 30,
    failure: 'Có thể làm vào bất kỳ buổi chiều nào.',
  },

  // ═══════════════════ CHƯƠNG 2: CHỌN CHỖ ĐỨNG ═══════════════════
  lop_nghe_dau: {
    id: 'lop_nghe_dau',
    title: 'Bài học nghề đầu tiên',
    type: 'main',
    chapter: 2,
    giver: 'Thầy Phúc',
    reason: 'Thầy Phúc kiểm tra tính kỷ luật, kỹ năng an toàn điện và tư duy kỹ thuật của học viên mới.',
    requirement: 'Chương 2 mở ra. Đến Lớp học nghề ca chiều (14:00–16:30).',
    recommendedLevel: 3,
    objectives: [
      { id: 'den_lop', text: 'Gặp Thầy Phúc tại Lớp học nghề (14:00–16:30)' },
      { id: 'thao_tac', text: 'Hoàn thành bài tập nối mạch an toàn tại bàn thực hành' },
      { id: 'nhan_xet', text: 'Nghe Thầy Phúc đánh giá và nhận Chứng chỉ nghề điện căn bản' },
      { id: 'thu_thach_lop_nghe_dau', text: 'Thử thách (tùy chọn): Nối mạch đạt chuẩn cao không một lỗi nhỏ (Cần tinh thần ≥ 50, thưởng +25 XP)', optional: true },
    ],
    reward: '+4 điểm cải tạo, 50 XP, Chứng chỉ nghề, mở quyền mượn sách thư viện.',
    xp: 50,
    failure: 'Nếu làm sai mạch điện: Thầy Phúc hướng dẫn lại, có thể thực hành lại vào ca chiều hôm sau.',
  },

  nghi_an_thuoc: {
    id: 'nghi_an_thuoc',
    title: 'Nghi án thuốc trị hen',
    type: 'main',
    chapter: 2,
    giver: 'Y sĩ An',
    reason: 'Chú Bảy tái phát hen suyễn ban đêm nhưng cơ số thuốc xịt đặc trị trong tủ y tế bị thiếu hụt bí ẩn.',
    requirement: 'Gặp Y sĩ An tại Phòng y tế (07:30–11:30 hoặc 13:30–17:00).',
    recommendedLevel: 3,
    objectives: [
      { id: 'hoi_an', text: 'Nghe Y sĩ An trình bày sự việc tại Phòng y tế' },
      { id: 'hoi_bay', text: 'Hỏi Chú Bảy về thời điểm cơn hen xuất hiện' },
      { id: 'nhat_thuoc', text: 'Tìm kiếm vật chứng tại góc tường sau xưởng' },
      { id: 'tra_thuoc', text: 'Giao lại lọ thuốc cho Y sĩ An cấp cứu Chú Bảy' },
      { id: 'thu_thach_nghi_an_thuoc', text: 'Thử thách (tùy chọn): Thu hồi thuốc an toàn mà không để mức nghi ngờ tăng (Cần mức nghi ngờ < 30, thưởng +2 cải tạo)', optional: true },
    ],
    reward: '+6 điểm cải tạo, 60 XP, Chú Bảy +15, Y sĩ An +12 quan hệ, manh mối điều tra.',
    xp: 60,
    failure: 'Không giới hạn thời gian; hoàn thành để đảm bảo sức khỏe Chú Bảy.',
  },

  manh_moi_kho_7: {
    id: 'manh_moi_kho_7',
    title: 'Dấu vết kho số 7',
    type: 'main',
    chapter: 2,
    giver: 'Chú Bảy',
    reason: 'Chú Bảy vô tình nhìn thấy một kiện hàng cũ chuyển từ kho vật tư có tem niêm phong mang mã hiệu "KHO-07-AP".',
    requirement: 'Sau khi hoàn thành "Nghi án thuốc trị hen".',
    recommendedLevel: 4,
    objectives: [
      { id: 'nghe_bay_ke', text: 'Hỏi Chú Bảy về kiện hàng có tem niêm phong KHO-07' },
      { id: 'kiem_tra_tem', text: 'Quan sát kiện gỗ ở hành lang kho xưởng để đối chiếu mã số' },
      { id: 'lay_manh_giay', text: 'Thu thập mảnh vận đơn dán trên kiện hàng làm chứng cứ' },
      { id: 'thu_thach_kho_7', text: 'Thử thách (tùy chọn): Thu thập mảnh vận đơn khéo léo không để ai nhìn thấy (Cần thể lực ≥ 35, thưởng +25 XP)', optional: true },
    ],
    reward: '+4 điểm cải tạo, 65 XP, Manh mối hồ sơ kho số 7, mở Chương 3.',
    xp: 65,
    failure: 'Không thể thất bại.',
  },

  phong_tham_gap: {
    id: 'phong_tham_gap',
    title: 'Vách kính thăm gặp',
    type: 'side',
    chapter: 2,
    giver: 'Chị Mai',
    reason: 'Chị Mai bắt xe đò từ quê lên thăm Minh theo lịch thăm gặp định kỳ của trại.',
    requirement: 'Đến Phòng thăm gặp (08:30–11:00 hoặc 14:00–16:30).',
    recommendedLevel: 2,
    objectives: [
      { id: 'gap_chi', text: 'Ngồi vào vách kính nói chuyện với Chị Mai' },
      { id: 'thanh_that', text: 'Lựa chọn lời tâm sự chân thành làm gia đình an lòng' },
      { id: 'nhan_tien', text: 'Nhận 25.000đ tiền tiếp tế chị gửi vào sổ lưu ký' },
    ],
    reward: '+25.000đ căn tin, −20 căng thẳng, Chị Mai +15 quan hệ, 30 XP.',
    xp: 30,
    failure: 'Có thể gặp chị vào ca thăm gặp tiếp theo nếu lỡ giờ.',
  },

  sach_thu_vien: {
    id: 'sach_thu_vien',
    title: 'Độc giả chăm chỉ',
    type: 'side',
    chapter: 2,
    giver: 'Thầy Phúc',
    reason: 'Thầy Phúc khuyên nên đọc sách hướng nghiệp và cẩm nang pháp luật vào giờ sinh hoạt thư viện.',
    requirement: 'Đã hoàn thành bài học nghề đầu tiên.',
    recommendedLevel: 2,
    objectives: [
      { id: 'muon_sach', text: 'Mượn cẩm nang pháp luật từ giá sách thư viện' },
      { id: 'doc_xong', text: 'Đọc hết chương quy định giảm án tại bàn đọc sách' },
    ],
    reward: '+2 điểm cải tạo, −10 căng thẳng, 25 XP, hiểu sâu quy chế giảm án.',
    xp: 25,
    failure: 'Không giới hạn.',
  },

  phu_y_te: {
    id: 'phu_y_te',
    title: 'Phụ việc y tế',
    type: 'side',
    chapter: 2,
    giver: 'Y sĩ An',
    reason: 'Y tá trưởng nghỉ phép, trạm y tế cần người hỗ trợ phân loại bông băng và lau rửa tủ thuốc.',
    requirement: 'Đã làm quen Y sĩ An.',
    recommendedLevel: 3,
    objectives: [
      { id: 'nhan_viec', text: 'Đến phòng y tế nhận hướng dẫn phân loại thuốc' },
      { id: 'hoan_thanh', text: 'Hoàn thành sắp xếp thuốc men theo đúng chủng loại' },
    ],
    reward: '+3 điểm cải tạo, 30 XP, +1 vỉ thuốc cảm dự phòng, Y sĩ An +8 quan hệ.',
    xp: 30,
    failure: 'Không giới hạn.',
  },

  // ═══════════════════ CHƯƠNG 3: GIÁ CỦA SỰ THẬT ═══════════════════
  doi_chieu_chung_tu: {
    id: 'doi_chieu_chung_tu',
    title: 'Đối chiếu chứng từ',
    type: 'main',
    chapter: 3,
    giver: 'Thầy Phúc',
    reason: 'Thầy Phúc giúp Minh đối chiếu mảnh vận đơn kho số 7 với sổ giao nhận thiết bị cũ của trại giam.',
    requirement: 'Chương 3 mở ra. Gặp Thầy Phúc tại phòng học nghề.',
    recommendedLevel: 5,
    objectives: [
      { id: 'dua_chung_tu', text: 'Đưa mảnh vận đơn kho số 7 cho Thầy Phúc xem' },
      { id: 'doi_chieu', text: 'So sánh chữ ký người nhận kiện hàng với sổ sách lưu trữ' },
      { id: 'phat_hien', text: 'Phát hiện chữ ký thuộc về một đầu mối bên ngoài có liên hệ với Lâm' },
      { id: 'thu_thach_doi_chieu', text: 'Thử thách (tùy chọn): Tự giải mã mã vận đơn trước khi đối chiếu (Cần điểm cải tạo ≥ 30, thưởng +3 cải tạo)', optional: true },
    ],
    reward: '+5 điểm cải tạo, 70 XP, Manh mối người cầm đầu vụ án.',
    xp: 70,
    failure: 'Không giới hạn.',
  },

  cam_do_im_lang: {
    id: 'cam_do_im_lang',
    title: 'Lời đề nghị im lặng',
    type: 'main',
    chapter: 3,
    giver: 'Lâm',
    reason: 'Lâm biết Minh đang tìm hiểu chuyện kho số 7 và tìm cách chặn lại bằng lời đề nghị tiền mặt hoặc đe dọa.',
    requirement: 'Sau khi hoàn thành "Đối chiếu chứng từ". Gặp Lâm giờ tự do.',
    recommendedLevel: 5,
    objectives: [
      { id: 'gap_lam_ch3', text: 'Nghe lời đề nghị của Lâm tại góc sân' },
      { id: 'quyet_dinh_im_lang', text: 'Lựa chọn: Nhận tiền im lặng hay kiên quyết từ chối để bảo vệ sự thật' },
      { id: 'thu_thach_im_lang', text: 'Thử thách (tùy chọn): Giữ tinh thần vững vàng trước áp lực đe dọa (Cần tinh thần ≥ 50, thưởng +25 XP)', optional: true },
    ],
    branches: {
      accept: 'Thỏa hiệp nhận 50.000đ và dừng đào sâu sự thật',
      refuse: 'Kiên quyết từ chối, quyết tâm tìm lại sự trong sạch',
    },
    reward: '70 XP. Nếu từ chối: +6 cải tạo, Quản giáo đánh giá cao. Nếu nhận: +50.000đ nhưng bị ràng buộc.',
    xp: 70,
    failure: 'Không thể thất bại.',
  },

  bay_vat_cam: {
    id: 'bay_vat_cam',
    title: 'Cái bẫy vật cấm',
    type: 'main',
    chapter: 3,
    giver: 'Cán bộ Tùng',
    reason: 'Ai đó đã lén nhét một gói thuốc lá lậu và dao cạo dưới gầm giường buồng 3 để gài bẫy Minh.',
    requirement: 'Sau khi xử lý lời đề nghị của Lâm.',
    recommendedLevel: 6,
    objectives: [
      { id: 'phat_hien_bay', text: 'Cán bộ Tùng kiểm tra đột xuất và tìm thấy vật cấm dưới giường' },
      { id: 'trinh_bay', text: 'Đến phòng quản giáo giải trình với Quản giáo Lan' },
      { id: 'cung_cap_bang_chung', text: 'Dùng lời khai Chú Bảy (Cần quan hệ Chú Bảy ≥ 20) hoặc xin trích xuất camera minh oan' },
      { id: 'thu_thach_bay_vat_cam', text: 'Thử thách (tùy chọn): Giải trình mạch lạc với cán bộ (Cần kỹ năng Giao tiếp ≥ 1, thưởng +25 XP)', optional: true },
    ],
    reward: '+8 điểm cải tạo, 75 XP, Xóa sạch nghi ngờ, Cán bộ Tùng tôn trọng sự thật, mở Chương 4.',
    xp: 75,
    failure: 'Nếu thiếu bằng chứng: bị cảnh cáo nhắc nhở, nhưng Chú Bảy sẽ đứng ra làm chứng cứu Minh vào ngày hôm sau.',
  },

  la_thu_que_nha: {
    id: 'la_thu_que_nha',
    title: 'Lá thư từ quê nhà',
    type: 'side',
    chapter: 3,
    giver: 'Chị Mai',
    reason: 'Cán bộ quản giáo chuyển cho Minh lá thư từ gia đình, kể về tình hình sức khỏe mẹ ở quê.',
    requirement: 'Sau buổi thăm gặp của Chị Mai.',
    recommendedLevel: 4,
    objectives: [
      { id: 'nhan_thu', text: 'Đến Bàn tiếp nhận trong Phòng quản giáo nhận thư từ gia đình' },
      { id: 'hoi_am', text: 'Viết thư hồi âm trấn an mẹ và gửi vào hòm thư trại' },
    ],
    reward: '−20 căng thẳng, +15 quan hệ Chị Mai, 35 XP.',
    xp: 35,
    failure: 'Không giới hạn.',
  },

  ren_luyen_the_chat: {
    id: 'ren_luyen_the_chat',
    title: 'Rèn luyện thể chất',
    type: 'side',
    chapter: 3,
    giver: 'Chú Bảy',
    reason: 'Chú Bảy khuyên rèn luyện sức khỏe ở xà đơn ngoài sân để tăng cường sức chịu đựng và giảm căng thẳng.',
    requirement: 'Giờ sinh hoạt tự do ngoài sân.',
    recommendedLevel: 4,
    objectives: [
      { id: 'tap_the_duc', text: 'Hoàn thành 3 hiệp hít xà đơn tại bãi tập thể dục ngoài sân' },
    ],
    reward: '+10 thể lực tối đa, −15 căng thẳng, 30 XP, Chú Bảy khen ngợi.',
    xp: 30,
    failure: 'Có thể tập lại mỗi ngày (tối đa 1 lần/ngày).',
  },

  sua_quat_phong_hoc: {
    id: 'sua_quat_phong_hoc',
    title: 'Sửa quạt phòng học',
    type: 'side',
    chapter: 3,
    giver: 'Thầy Phúc',
    reason: 'Chiếc quạt trần trong lớp học nghề bị kẹt bạc đạn giữa trưa nóng bức, Thầy Phúc cần thợ hỗ trợ.',
    requirement: 'Đã có Chứng chỉ nghề hoặc xuất thân Thợ sửa xe.',
    recommendedLevel: 5,
    objectives: [
      { id: 'kiem_tra_quat', text: 'Kiểm tra hộp số và dây nối quạt trong lớp học' },
      { id: 'thay_vong_bi', text: 'Dùng dầu bôi trơn và siết lại ốc cố định' },
    ],
    reward: '+4 điểm cải tạo, 15.000đ tiền thưởng công ích, Thầy Phúc +15 quan hệ, 40 XP.',
    xp: 40,
    failure: 'Không giới hạn.',
  },

  // ═══════════════════ CHƯƠNG 4: NGÀY TRỞ VỀ ═══════════════════
  ho_so_giai_trinh: {
    id: 'ho_so_giai_trinh',
    title: 'Hồ sơ giải trình kho số 7',
    type: 'main',
    chapter: 4,
    giver: 'Quản giáo Lan',
    reason: 'Tập hợp tất cả chứng từ, lời khai và chứng cứ để Quản giáo Lan gửi văn bản kiến nghị xem xét vai trò trong vụ án.',
    requirement: 'Chương 4 mở ra. Đã có đủ manh mối từ Chương 2 & 3.',
    recommendedLevel: 7,
    objectives: [
      { id: 'tong_hop_chung_cu', text: 'Tổng hợp mảnh vận đơn và bản đối chiếu chữ ký' },
      { id: 'nop_ho_so', text: 'Nộp hồ sơ giải trình tại Phòng quản giáo' },
      { id: 'ket_luan_lan', text: 'Nghe Quản giáo Lan thông báo quyết định tiếp nhận xem xét tình tiết giảm nhẹ' },
      { id: 'thu_thach_ho_so', text: 'Thử thách (tùy chọn): Soạn thảo hồ sơ giải trình chuẩn mực (Cần kỹ năng Giao tiếp ≥ 2, thưởng +35 XP)', optional: true },
    ],
    reward: '+10 điểm cải tạo, 80 XP, Xóa án tích chủ mưu, mở đường cho kết thúc Tự do vững vàng.',
    xp: 80,
    failure: 'Không thể thất bại.',
  },

  loi_hua_chu_bay: {
    id: 'loi_hua_chu_bay',
    title: 'Lời hứa Chú Bảy',
    type: 'main',
    chapter: 4,
    giver: 'Chú Bảy',
    reason: 'Chú Bảy sắp mãn hạn, muốn gửi một hộp gỗ chạm khắc tay về cho cháu gái nhưng tay bị run khớp.',
    requirement: 'Chú Bảy tin tưởng (quan hệ >= 30).',
    recommendedLevel: 7,
    objectives: [
      { id: 'nghe_loi_hua', text: 'Nghe Chú Bảy gửi gắm tâm nguyện tại xưởng' },
      { id: 'danh_bong_hop', text: 'Giúp chú đánh bóng và tra khóa chiếc hộp gỗ (Cần thể lực ≥ 30)' },
      { id: 'hua_gui_ve', text: 'Hứa sẽ tận tay gửi hộp quà về địa chỉ con gái chú khi ra trại' },
      { id: 'thu_thach_loi_hua', text: 'Thử thách (tùy chọn): Đánh bóng hộp gỗ đạt độ tinh xảo cao (Cần thể lực ≥ 50, thưởng +25 XP & +10 quan hệ Chú Bảy)', optional: true },
    ],
    reward: '+8 điểm cải tạo, Chú Bảy +30 quan hệ, 75 XP, Chú Bảy tặng lại cuốn cẩm nang cuộc sống.',
    xp: 75,
    failure: 'Không thể thất bại.',
  },

  ky_xet_cuoi_cung: {
    id: 'ky_xet_cuoi_cung',
    title: 'Kỳ xét đặc xá & Ngày tự do',
    type: 'main',
    chapter: 4,
    giver: 'Quản giáo Lan',
    reason: 'Hội đồng trại họp phiên cuối cùng để đánh giá toàn diện quá trình cải tạo và quyết định ngày trả tự do.',
    requirement: 'Sau khi hoàn thành hồ sơ giải trình và lời hứa Chú Bảy.',
    recommendedLevel: 8,
    objectives: [
      { id: 'den_hoi_truong', text: 'Có mặt tại phòng quản giáo để nghe công bố kết quả xét giảm án' },
      { id: 'nhan_quyet_dinh', text: 'Nhận quyết định chấp hành xong án phạt và giấy chứng nhận học nghề' },
      { id: 'thu_thach_ky_xet', text: 'Thử thách (tùy chọn): Đạt danh hiệu Cải tạo xuất sắc trước phiên xét (Cần điểm cải tạo ≥ 60, thưởng +50 XP)', optional: true },
    ],
    reward: 'Hoàn thành cốt truyện, mở màn kết thúc phân nhánh theo quá trình chơi.',
    xp: 100,
    failure: 'Không thể thất bại.',
  },

  truyen_nghe_cho_huy: {
    id: 'truyen_nghe_cho_huy',
    title: 'Truyền nghề cho Huy',
    type: 'side',
    chapter: 4,
    giver: 'Huy',
    reason: 'Huy muốn học nghề nối dây điện từ Minh để sau này ra trại kiếm việc lương thiện, không đi theo phe xấu nữa.',
    requirement: 'Minh đã có Chứng chỉ nghề và quan hệ với Huy >= 15.',
    recommendedLevel: 6,
    objectives: [
      { id: 'huong_dan_huy', text: 'Hướng dẫn Huy các nguyên tắc an toàn tại bàn thực hành' },
      { id: 'huy_thuc_hanh', text: 'Kiểm tra mạch điện do Huy tự tay nối' },
    ],
    reward: '+5 điểm cải tạo, Huy +25 quan hệ, 40 XP, Huy quyết tâm làm lại cuộc đời.',
    xp: 40,
    failure: 'Không giới hạn.',
  },

  chia_tay_thay_phuc: {
    id: 'chia_tay_thay_phuc',
    title: 'Lời dặn ngày về',
    type: 'side',
    chapter: 4,
    giver: 'Thầy Phúc',
    reason: 'Thầy Phúc muốn gặp Minh trước kỳ xét cuối để viết thư giới thiệu vào xưởng cơ điện của bạn thầy ở ngoài đời.',
    requirement: 'Đã hoàn thành "Bài học nghề đầu tiên" và "Sửa quạt phòng học".',
    recommendedLevel: 7,
    objectives: [
      { id: 'tam_su_thay', text: 'Gặp Thầy Phúc tại lớp học nghề nghe lời dặn dò' },
      { id: 'nhan_thu_gt', text: 'Nhận Thư giới thiệu việc làm sau khi ra trại' },
    ],
    reward: '+1 Thư giới thiệu việc làm, Thầy Phúc +20 quan hệ, 40 XP.',
    xp: 40,
    failure: 'Không giới hạn.',
  },

  kiem_tra_suc_khoe: {
    id: 'kiem_tra_suc_khoe',
    title: 'Khám sức khỏe xuất trại',
    type: 'side',
    chapter: 4,
    giver: 'Y sĩ An',
    reason: 'Kiểm tra tổng quát sức khỏe, cấp phát vitamin và chứng nhận thể lực trước khi làm thủ tục ra trại.',
    requirement: 'Chương 4 mở ra. Đến phòng y tế.',
    recommendedLevel: 6,
    objectives: [
      { id: 'kham_tong_quat', text: 'Đến phòng y tế đo huyết áp và kiểm tra thể lực' },
    ],
    reward: '+15 sức khỏe tối đa, +10 thể lực, Y sĩ An +10 quan hệ, 35 XP.',
    xp: 35,
    failure: 'Không giới hạn.',
  },
};

export const QUEST_ORDER = [
  // Chương 1
  'nhap_trai', 'ca_dau', 'mon_no', 'dep_bay', 'mi_cho_huy', 'lao_dong_phu',
  // Chương 2
  'lop_nghe_dau', 'nghi_an_thuoc', 'manh_moi_kho_7', 'phong_tham_gap', 'sach_thu_vien', 'phu_y_te',
  // Chương 3
  'doi_chieu_chung_tu', 'cam_do_im_lang', 'bay_vat_cam', 'la_thu_que_nha', 'ren_luyen_the_chat', 'sua_quat_phong_hoc',
  // Chương 4
  'ho_so_giai_trinh', 'loi_hua_chu_bay', 'ky_xet_cuoi_cung', 'truyen_nghe_cho_huy', 'chia_tay_thay_phuc', 'kiem_tra_suc_khoe',
];
