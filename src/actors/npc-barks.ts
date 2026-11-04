import { NPCS } from '../data/npcs';
import type { GameLogic } from '../logic/game';
import type { NpcId } from '../logic/state';

export interface NpcBarkResult {
  text: string;
  priority: number; // 0 = ambient, 1 = relation-based, 2 = quest/choice consequence, 3 = guard warning
  category: 'ambient' | 'relation' | 'quest' | 'guard';
}

/** Lời thoại nhắc nhở của Cán bộ (Quản giáo Lan, Cán bộ Tùng) khi quan sát thấy Người chơi có hành vi cần chấn chỉnh. */
export function getGuardWarningForPlayer(
  guardId: 'lan' | 'tung',
  reason: 'sprint_corridor' | 'loitering_closed_door',
  doorName?: string,
): string {
  if (guardId === 'lan') {
    if (reason === 'sprint_corridor') {
      const lines = [
        'Minh, không được chạy nhảy trong hành lang buồng giam!',
        'Đi đứng cho đàng hoàng, hành lang không phải chỗ chạy!',
        'Giữ trật tự khu buồng giam, đi bộ nghiêm túc không được chạy!',
      ];
      return lines[Math.floor(Math.random() * lines.length)];
    } else {
      const areaText = doorName ? `cửa ${doorName}` : 'khu vực này';
      const lines = [
        `Khu vực ${areaText} đang đóng cửa, Minh mau di chuyển ra sân!`,
        `Hết giờ làm việc ở ${areaText} rồi, cửa đã khóa không đứng lảng vảng!`,
        `Chấp hành đúng giờ giấc sinh hoạt, ${areaText} hiện đang khóa!`,
      ];
      return lines[Math.floor(Math.random() * lines.length)];
    }
  } else {
    // Cán bộ Tùng
    if (reason === 'sprint_corridor') {
      const lines = [
        'Này phạm nhân, đi chậm lại! Không chạy trong hành lang!',
        'Đi đứng nghiêm túc, tuân thủ đúng nội quy buồng giam!',
        'Đi chậm thôi, vội vàng cái gì! Chú ý bước chân!',
      ];
      return lines[Math.floor(Math.random() * lines.length)];
    } else {
      const areaText = doorName ? `cửa ${doorName}` : 'khu vực này';
      const lines = [
        `Khu vực ${areaText} chưa đến giờ mở, mau ra sân tập trung!`,
        `Đứng ngó nghiêng gì ở ${areaText}? Ra sân sinh hoạt ngay!`,
        `Chưa tới giờ mở ${areaText}, chấp hành nội quy đi chỗ khác!`,
      ];
      return lines[Math.floor(Math.random() * lines.length)];
    }
  }
}

/** Lời thoại barks động của NPC dựa trên quan hệ, tiến trình nhiệm vụ và lựa chọn quá khứ. */
export function getDynamicNpcBark(npcId: NpcId, g: GameLogic): NpcBarkResult {
  const pName = g.s.profile.name || 'Minh';

  // ───────────────────── CHÚ BẢY ─────────────────────
  if (npcId === 'bay') {
    if (g.rel('bay') < 0) {
      const negativeLines = [
        `Sao dạo này chú thấy cháu hay tụ tập với đám thằng Lâm vậy ${pName}...`,
        'Đừng để đồng tiền làm mờ mắt, đường về lại xa thêm đó cháu.',
      ];
      return { text: negativeLines[Math.floor(Math.random() * negativeLines.length)], priority: 2, category: 'relation' };
    }
    if (g.qStatus('loi_hua_chu_bay') === 'done') {
      const promiseLines = [
        `Chiếc hộp gỗ cho con gái, chú trông cậy cả vào cháu đó ${pName}.`,
        'Chú mãn hạn trước, hẹn ngày gặp lại cháu ngoài đời tự do nghen.',
      ];
      return { text: promiseLines[Math.floor(Math.random() * promiseLines.length)], priority: 2, category: 'quest' };
    }
    if (g.qStatus('nghi_an_thuoc') === 'done') {
      const medicineLines = [
        'Hôm bữa không có cháu tìm được lọ thuốc hen, chú nguy to rồi...',
        'Cháu tốt bụng vậy, trời Phật sẽ phù hộ cho sớm về với gia đình.',
      ];
      return { text: medicineLines[Math.floor(Math.random() * medicineLines.length)], priority: 2, category: 'quest' };
    }
    if (g.qStatus('dep_bay') === 'done' && Math.random() < 0.6) {
      return { text: 'Đôi dép con gái chú gửi, chú giữ gìn kỹ lắm. Cảm ơn cháu nghen.', priority: 2, category: 'quest' };
    }
    if (g.rel('bay') >= 25) {
      const highRelLines = [
        `Cố gắng lên ${pName}, ráng giữ mình cho sạch nghen con.`,
        'Lao động chăm chỉ, tay nghề khéo léo là cán bộ thương ngay.',
        'Có khúc mắc gì cứ nói với chú, chú chỉ bảo cho.',
      ];
      return { text: highRelLines[Math.floor(Math.random() * highRelLines.length)], priority: 1, category: 'relation' };
    }
  }

  // ───────────────────── HUY ─────────────────────
  if (npcId === 'huy') {
    if (g.rel('huy') < 0) {
      const negativeLines = [
        'Mày tránh xa tao ra một chút đi...',
        'Tao không ngờ mày lại đối xử với tao như vậy.',
      ];
      return { text: negativeLines[Math.floor(Math.random() * negativeLines.length)], priority: 2, category: 'relation' };
    }
    if (g.qStatus('truyen_nghe_cho_huy') === 'done') {
      const tradeLines = [
        'Mấy bài nối dây điện mày chỉ tao vẫn đang ôn kỹ đây.',
        'Ra trại tao quyết tâm đi làm thợ điện lương thiện, không quậy nữa!',
      ];
      return { text: tradeLines[Math.floor(Math.random() * tradeLines.length)], priority: 2, category: 'quest' };
    }
    if (g.qStatus('mon_no') === 'done') {
      if (g.flag('stole_for_lam')) {
        return { text: `Tao thấy áy náy quá ${pName}... vì tao mà mày phải làm liều. Tao cạch bài bạc đến già!`, priority: 2, category: 'quest' };
      }
      if (g.flag('report_with_note')) {
        const reportLines = [
          'May mà có Quản giáo Lan can thiệp, giờ tao thở phào được rồi.',
          'Lâm dạo này nhìn tao hằn học lắm, nhưng không dám làm càn nữa.',
        ];
        return { text: reportLines[Math.floor(Math.random() * reportLines.length)], priority: 2, category: 'quest' };
      }
      if (g.qBranch('mon_no') === 'pay' || g.flag('huy_repaid')) {
        return { text: `Ơn mày trả nợ giúp tao, cả đời này tao không quên đâu ${pName}.`, priority: 2, category: 'quest' };
      }
      if (g.qBranch('mon_no') === 'negotiate') {
        return { text: `Mày khéo miệng thật đấy ${pName}, nói mà thằng Lâm cũng phải nể.`, priority: 2, category: 'quest' };
      }
    }
    if (g.qStatus('mon_no') === 'active') {
      const activeDebtLines = [
        `Lo quá ${pName} ơi, không biết lão Lâm tính làm gì tao nữa...`,
        'Mày cẩn thận nghe, thằng Lâm dữ dằn lắm đó.',
      ];
      return { text: activeDebtLines[Math.floor(Math.random() * activeDebtLines.length)], priority: 2, category: 'quest' };
    }
    if (g.qStatus('mi_cho_huy') === 'done' && Math.random() < 0.5) {
      return { text: 'Gói mì hôm bữa của mày cứu đói tao một phen, nhớ mãi.', priority: 2, category: 'quest' };
    }
    if (g.rel('huy') >= 25) {
      const highRelLines = [
        `Ê ${pName}! Chiều nay ra sân đu xà hoặc dạo mát với tao không?`,
        'Ở buồng này có mày tao mới thấy bớt ngột ngạt đó.',
      ];
      return { text: highRelLines[Math.floor(Math.random() * highRelLines.length)], priority: 1, category: 'relation' };
    }
  }

  // ───────────────────── LÂM ─────────────────────
  if (npcId === 'lam') {
    if (g.flag('lam_exposed')) {
      const exposedLines = [
        `Mày chơi tao một vố đau đấy... Mày đợi đấy ${pName}!`,
        'Đừng vội mừng, đường ở đây còn dài lắm thằng ranh con!',
      ];
      return { text: exposedLines[Math.floor(Math.random() * exposedLines.length)], priority: 2, category: 'quest' };
    }
    if (g.flag('refused_lam_bribe') || g.qBranch('cam_do_im_lang') === 'refuse') {
      const refuseLines = [
        'Đã cho đường sống mà không biết chọn. Để xem mày cứng được bao lâu!',
        'Cái giá của sự thật đắt lắm đấy thằng ranh con!',
      ];
      return { text: refuseLines[Math.floor(Math.random() * refuseLines.length)], priority: 2, category: 'quest' };
    }
    if (g.flag('accepted_lam_bribe') || g.qBranch('cam_do_im_lang') === 'accept') {
      return { text: 'Biết điều ngậm miệng như mày thì tốt cho cả hai bên. Tiền cầm rồi thì an phận đi.', priority: 2, category: 'quest' };
    }
    if (g.qStatus('mon_no') === 'done') {
      if (g.flag('lam_sanctioned') || g.flag('report_with_note')) {
        const angryLines = [
          `Thằng ${pName}... mày tưởng có cán bộ chống lưng là xong chuyện với tao à?`,
          'Mày coi chừng cái mồm mày đấy, ở đây tường cũng có tai.',
          'Mày làm tao mất mặt trước cả buồng, tao ghi sổ rồi.',
        ];
        return { text: angryLines[Math.floor(Math.random() * angryLines.length)], priority: 2, category: 'quest' };
      }
      if (g.flag('stole_for_lam')) {
        return { text: 'Khá lắm em trai! Biết điều như mày thì ở đâu cũng sống khỏe. Anh không để mày thiệt đâu.', priority: 2, category: 'quest' };
      }
      if (g.qBranch('mon_no') === 'pay') {
        return { text: 'Sòng phẳng đấy. Nợ xong xuôi thì đừng chõ mũi vào chuyện của tao nữa.', priority: 2, category: 'quest' };
      }
    }
    if (g.qStatus('mon_no') === 'active') {
      const debtLines = [
        'Bảo thằng Huy lo liệu cho sớm, kiên nhẫn của tao có hạn.',
        'Tiền bạc sòng phẳng thì mới dễ sống ở đây.',
        'Hẹn ngày nào thì trả ngày đó, đừng để tao nhắc lại.',
      ];
      return { text: debtLines[Math.floor(Math.random() * debtLines.length)], priority: 2, category: 'quest' };
    }
  }

  // ───────────────────── KHẢI (ĐÀN EM LÂM) ─────────────────────
  if (npcId === 'khai') {
    if (g.flag('lam_sanctioned') || g.rel('lam') < -15 || g.flag('lam_exposed')) {
      const hostileLines = [
        'Đi chỗ khác! Mày nhìn cái gì mà nhìn?',
        'Thằng chỉ điểm! Coi chừng cái mồm mày đấy!',
        'Đụng vào anh Lâm thì không có kết cục tốt đâu!',
      ];
      return { text: hostileLines[Math.floor(Math.random() * hostileLines.length)], priority: 2, category: 'relation' };
    }
    if (g.flag('stole_for_lam')) {
      return { text: `Chào anh ${pName} nghen! Anh Lâm khen anh làm được việc đấy.`, priority: 2, category: 'relation' };
    }
  }

  // ───────────────────── SƠN (BUỒNG 2 - THỂ THAO) ─────────────────────
  if (npcId === 'son') {
    if (g.s.skills.fitness >= 5 || g.qStatus('ren_luyen_the_chat') === 'done') {
      const fitnessLines = [
        `${pName}! Chiều nay ra kéo xà thi xem ai hít được nhiều hơn không?`,
        'Dạo này thấy ông cơ bắp săn chắc hẳn lên đấy, rèn luyện tốt thật!',
      ];
      return { text: fitnessLines[Math.floor(Math.random() * fitnessLines.length)], priority: 1, category: 'relation' };
    }
  }

  // ───────────────────── ANH TƯ (BUỒNG 1) ─────────────────────
  if (npcId === 'tu') {
    if (g.s.stats.reform >= 40) {
      const reformLines = [
        'Chú thấy cháu chịu khó lao động vậy là tốt lắm, ráng giữ phong độ nghen.',
        'Cải tạo nghiêm túc như cháu thì ngày về gần lắm rồi.',
      ];
      return { text: reformLines[Math.floor(Math.random() * reformLines.length)], priority: 1, category: 'relation' };
    }
  }

  // ───────────────────── THẦY PHÚC ─────────────────────
  if (npcId === 'phuc') {
    if (g.has('chung_chi_nghe') || g.qStatus('lop_nghe_dau') === 'done') {
      const certLines = [
        `${pName}, rảnh tay thì vào thư viện đọc thêm tài liệu an toàn điện nghen.`,
        'Tay nghề muốn vững thì phải rèn luyện mỗi ngày, không được ẩu.',
      ];
      return { text: certLines[Math.floor(Math.random() * certLines.length)], priority: 2, category: 'quest' };
    }
    if (g.qStatus('sua_quat_phong_hoc') === 'done') {
      return { text: 'Cái quạt phòng học chạy êm ru rồi, cảm ơn tay nghề của em.', priority: 2, category: 'quest' };
    }
    if (g.rel('phuc') >= 20) {
      return { text: 'Thầy thấy em tiến bộ rất nhanh, có chí hướng làm lại cuộc đời.', priority: 1, category: 'relation' };
    }
  }

  // ───────────────────── Y SĨ AN ─────────────────────
  if (npcId === 'an') {
    if (g.s.stats.stamina < 30 || g.s.stats.health < 50) {
      const sickLines = [
        `Sắc mặt em xanh xao quá ${pName}, rảnh ghé trạm y tế chị kiểm tra cho.`,
        'Đừng gắng sức quá, mệt thì phải báo y tế ngay để cấp thuốc bồi dưỡng.',
      ];
      return { text: sickLines[Math.floor(Math.random() * sickLines.length)], priority: 2, category: 'relation' };
    }
    if (g.qStatus('nghi_an_thuoc') === 'done' || g.qStatus('phu_y_te') === 'done') {
      const medicalThanksLines = [
        `${pName} đấy à, hôm nay thấy trong người thế nào? Nhớ uống đủ nước nghen.`,
        'Cảm ơn em vụ hôm trước, trạm xá đỡ việc đi bao nhiêu.',
      ];
      return { text: medicalThanksLines[Math.floor(Math.random() * medicalThanksLines.length)], priority: 2, category: 'quest' };
    }
  }

  // ───────────────────── QUẢN GIÁO LAN ─────────────────────
  if (npcId === 'lan') {
    if (g.flag('ho_so_kho_7_cleared')) {
      return { text: 'Hồ sơ của anh đang được xem xét đúng trình tự pháp luật, hãy yên tâm cải tạo.', priority: 2, category: 'quest' };
    }
    const todaysVio = g.s.violations.filter((v) => v.day === g.s.day && v.status !== 'overturned');
    if (todaysVio.length > 0) {
      return { text: 'Hôm nay đã có vi phạm ghi nhận trong hồ sơ, nghiêm túc chấn chỉnh lại tác phong!', priority: 2, category: 'guard' };
    }
    if (g.s.stats.reform >= 60) {
      return { text: `Phạm nhân ${pName} duy trì chấp hành nề nếp tốt, tiếp tục phát huy.`, priority: 1, category: 'relation' };
    }
  }

  // ───────────────────── CÁN BỘ TÙNG ─────────────────────
  if (npcId === 'tung') {
    if (g.qStatus('bay_vat_cam') === 'done') {
      return { text: 'Cán bộ ghi nhận thái độ trung thực của anh trong buổi làm việc hôm trước.', priority: 2, category: 'quest' };
    }
    if (g.flag('workshop_audit_day') === g.s.day) {
      return { text: 'Toàn xưởng giữ nguyên vị trí, chấp hành kiểm kê dụng cụ lao động!', priority: 2, category: 'quest' };
    }
  }

  // ───────────────────── MẶC ĐỊNH (AMBIENT) ─────────────────────
  const def = NPCS[npcId];
  const ambientLines = def?.barks ?? ['...'];
  const text = ambientLines[Math.floor(Math.random() * ambientLines.length)];
  return { text, priority: 0, category: 'ambient' };
}
