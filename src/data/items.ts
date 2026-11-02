export interface ItemDef {
  id: string;
  name: string;
  desc: string;
  essential?: boolean; // không thể bán/vứt/tiêu thụ
  contraband?: boolean; // hàng cấm: bị tịch thu nếu khám xét
  quest?: boolean;
  price?: number; // giá căn tin (nghìn đồng)
  use?: { satiety?: number; morale?: number; stamina?: number; health?: number; hunger?: number; stress?: number };
  giftable?: boolean;
}

export const ITEMS: Record<string, ItemDef> = {
  ao_tu: { id: 'ao_tu', name: 'Bộ quần áo phạm nhân', desc: 'Áo sọc xanh trắng, số hiệu AP-0317.', essential: true },
  the_pham_nhan: { id: 'the_pham_nhan', name: 'Thẻ phạm nhân', desc: 'Dùng để chấm công, mua căn tin. Không thể bỏ.', essential: true },
  chan_man: { id: 'chan_man', name: 'Chăn màn, chiếu', desc: 'Đồ dùng cá nhân nhận khi nhập trại.', essential: true },
  mi_goi: { id: 'mi_goi', name: 'Mì gói', desc: 'Tăng 25 độ no. Huy rất thích.', price: 8, use: { satiety: 25, stamina: 5 }, giftable: true },
  banh_mi: { id: 'banh_mi', name: 'Bánh mì ngọt', desc: 'Tăng 15 độ no, hồi 10 thể lực.', price: 5, use: { satiety: 15, stamina: 10 }, giftable: true },
  tra_da: { id: 'tra_da', name: 'Trà đá đóng chai', desc: 'Hồi 8 tinh thần, giải khát.', price: 6, use: { morale: 8, stamina: 5 }, giftable: true },
  dau_gio: { id: 'dau_gio', name: 'Dầu gió', desc: 'Hồi 10 sức khoẻ, hồi 4 tinh thần.', price: 10, use: { health: 10, morale: 4 }, giftable: true },
  hop_mui_khoan: { id: 'hop_mui_khoan', name: 'Hộp mũi khoan (đồ kho)', desc: 'Tài sản của xưởng. Mang theo là bằng chứng trộm cắp.', quest: true, contraband: true },
  giay_no: { id: 'giay_no', name: 'Giấy ghi nợ của Huy', desc: 'Lâm ép Huy ký nợ 40.000đ kèm lãi. Có thể làm bằng chứng.', quest: true },
  loi_khai_bay: { id: 'loi_khai_bay', name: 'Lời khai của Chú Bảy', desc: 'Chú Bảy thấy đàn em của Lâm lén vào buồng 3 lúc rạng sáng.', quest: true },
  dao_lam: { id: 'dao_lam', name: 'Lưỡi dao lam', desc: 'Hàng cấm. Ai đó đã giấu vào chiếu của bạn.', contraband: true },
  dep_bay: { id: 'dep_bay', name: 'Đôi dép tổ ong của Chú Bảy', desc: 'Đã mòn gót, có khắc chữ "B7".', quest: true },
  thu_chi_mai: { id: 'thu_chi_mai', name: 'Bức thư của Chị Mai', desc: 'Thư tay chị Mai gửi vào trại động viên em trai cố gắng cải tạo.', essential: true, quest: true },
  thuoc_cam: { id: 'thuoc_cam', name: 'Vỉ thuốc cảm', desc: 'Thuốc hạ sốt do Y sĩ An cấp phát. Hồi 15 sức khoẻ, hồi 6 tinh thần.', price: 12, use: { health: 15, morale: 6 }, giftable: true },
  chai_thuoc_hen: { id: 'chai_thuoc_hen', name: 'Lọ thuốc hen suyễn', desc: 'Lọ thuốc đặc trị của Chú Bảy bị đánh rơi gần góc khuất sau xưởng. Vật chứng.', quest: true },
  chung_chi_nghe: { id: 'chung_chi_nghe', name: 'Chứng chỉ sơ cấp nghề điện', desc: 'Thầy Phúc ký xác nhận Minh hoàn thành khóa học an toàn điện cơ bản.', essential: true, quest: true },
  so_tay_dieu_tra: { id: 'so_tay_dieu_tra', name: 'Sổ tay ghi chép', desc: 'Ghi lại các mâu thuẫn, lời khai nhân chứng và giờ giấc camera.', essential: true },
  sach_phap_luat: { id: 'sach_phap_luat', name: 'Cẩm nang pháp luật & cải tạo', desc: 'Sách mượn từ thư viện. Đọc giúp hồi 10 tinh thần và hiểu rõ quy tắc giảm án.', use: { morale: 10 } },
  qua_luu_niem: { id: 'qua_luu_niem', name: 'Khung ảnh gỗ tự làm', desc: 'Gia công tỉ mỉ tại xưởng để gửi tặng Chị Mai trong phòng thăm gặp.', quest: true, giftable: true },
};

export function itemName(id: string) {
  return ITEMS[id]?.name ?? id;
}
