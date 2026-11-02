export interface ItemDef {
  id: string;
  name: string;
  desc: string;
  essential?: boolean; // không thể bán/vứt/tiêu thụ
  contraband?: boolean; // hàng cấm: bị tịch thu nếu khám xét
  quest?: boolean;
  price?: number; // giá căn tin (nghìn đồng)
  use?: { hunger?: number; stress?: number; stamina?: number; health?: number };
  giftable?: boolean;
}

export const ITEMS: Record<string, ItemDef> = {
  ao_tu: { id: 'ao_tu', name: 'Bộ quần áo phạm nhân', desc: 'Áo sọc xanh trắng, số hiệu AP-0317.', essential: true },
  the_pham_nhan: { id: 'the_pham_nhan', name: 'Thẻ phạm nhân', desc: 'Dùng để chấm công, mua căn tin. Không thể bỏ.', essential: true },
  chan_man: { id: 'chan_man', name: 'Chăn màn, chiếu', desc: 'Đồ dùng cá nhân nhận khi nhập trại.', essential: true },
  mi_goi: { id: 'mi_goi', name: 'Mì gói', desc: 'Giảm đói 25. Huy rất thích.', price: 8, use: { hunger: -25, stamina: 5 }, giftable: true },
  banh_mi: { id: 'banh_mi', name: 'Bánh mì ngọt', desc: 'Giảm đói 15, hồi 10 thể lực.', price: 5, use: { hunger: -15, stamina: 10 }, giftable: true },
  tra_da: { id: 'tra_da', name: 'Trà đá đóng chai', desc: 'Giảm căng thẳng 8.', price: 6, use: { stress: -8, stamina: 5 }, giftable: true },
  dau_gio: { id: 'dau_gio', name: 'Dầu gió', desc: 'Hồi 10 sức khoẻ, giảm căng thẳng 4.', price: 10, use: { health: 10, stress: -4 }, giftable: true },
  hop_mui_khoan: { id: 'hop_mui_khoan', name: 'Hộp mũi khoan (đồ kho)', desc: 'Tài sản của xưởng. Mang theo là bằng chứng trộm cắp.', quest: true, contraband: true },
  giay_no: { id: 'giay_no', name: 'Giấy ghi nợ của Huy', desc: 'Lâm ép Huy ký nợ 40.000đ kèm lãi. Có thể làm bằng chứng.', quest: true },
  loi_khai_bay: { id: 'loi_khai_bay', name: 'Lời khai của Chú Bảy', desc: 'Chú Bảy thấy đàn em của Lâm lén vào buồng 3 lúc rạng sáng.', quest: true },
  dao_lam: { id: 'dao_lam', name: 'Lưỡi dao lam', desc: 'Hàng cấm. Ai đó đã giấu vào chiếu của bạn.', contraband: true },
  dep_bay: { id: 'dep_bay', name: 'Đôi dép tổ ong của Chú Bảy', desc: 'Đã mòn gót, có khắc chữ "B7".', quest: true },
};

export function itemName(id: string) {
  return ITEMS[id]?.name ?? id;
}
