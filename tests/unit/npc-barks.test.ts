import { describe, expect, it } from 'vitest';
import { getDynamicNpcBark, getGuardWarningForPlayer } from '../../src/actors/npc-barks';
import { GameLogic } from '../../src/logic/game';

describe('NPC Dynamic Barks & Guard Warning System (Đợt 1)', () => {
  it('Quản giáo Lan và Cán bộ Tùng đưa ra lời nhắc nhở thích hợp khi chạy hành lang hoặc lảng vảng', () => {
    const lanSprint = getGuardWarningForPlayer('lan', 'sprint_corridor');
    expect(lanSprint).toMatch(/hành lang|chạy|buồng giam/i);

    const lanLoiter = getGuardWarningForPlayer('lan', 'loitering_closed_door', 'Xưởng lao động');
    expect(lanLoiter).toMatch(/Xưởng lao động|đóng cửa|khóa|lảng vảng/i);

    const tungSprint = getGuardWarningForPlayer('tung', 'sprint_corridor');
    expect(tungSprint).toMatch(/đi chậm|hành lang|nội quy|chạy/i);

    const tungLoiter = getGuardWarningForPlayer('tung', 'loitering_closed_door', 'Phòng quản giáo');
    expect(tungLoiter).toMatch(/Phòng quản giáo|chưa đến giờ|chưa tới giờ|sân|nội quy|mở/i);
  });

  it('Chú Bảy thay đổi lời thoại theo quan hệ và nhiệm vụ đã làm', () => {
    const g = new GameLogic();

    // Mặc định ban đầu
    const defaultBark = getDynamicNpcBark('bay', g);
    expect(defaultBark.priority).toBe(0);

    // Khi quan hệ cao (>= 25)
    g.s.relations.bay.value = 30;
    const highRelBark = getDynamicNpcBark('bay', g);
    expect(highRelBark.priority).toBe(1);
    expect(highRelBark.category).toBe('relation');

    // Khi quan hệ tiêu cực (< 0)
    g.s.relations.bay.value = -10;
    const negBark = getDynamicNpcBark('bay', g);
    expect(negBark.priority).toBe(2);
    expect(negBark.text).toMatch(/thằng Lâm|đồng tiền/i);

    // Khi hoàn thành cứu thuốc hen
    g.s.relations.bay.value = 20;
    g.s.quests.nghi_an_thuoc = { status: 'done', step: 0, rewarded: true, startedDay: 1, choices: [] };
    const henBark = getDynamicNpcBark('bay', g);
    expect(henBark.priority).toBe(2);
    expect(henBark.text).toMatch(/thuốc hen|gia đình/i);
  });

  it('Huy phản ứng theo các nhánh giải quyết món nợ và quan hệ', () => {
    const g = new GameLogic();

    // Khi món nợ đang active
    g.s.quests.mon_no = { status: 'active', step: 0, rewarded: false, startedDay: 1, choices: [] };
    const activeDebtBark = getDynamicNpcBark('huy', g);
    expect(activeDebtBark.priority).toBe(2);
    expect(activeDebtBark.text).toMatch(/lão Lâm|cẩn thận/i);

    // Khi hoàn thành bằng cách báo Quản giáo kèm giấy nợ
    g.s.quests.mon_no.status = 'done';
    g.s.flags.report_with_note = true;
    const reportBark = getDynamicNpcBark('huy', g);
    expect(reportBark.priority).toBe(2);
    expect(reportBark.text).toMatch(/Quản giáo Lan|hằn học/i);

    // Khi hoàn thành bằng cách trộm đồ cho Lâm
    g.s.flags.report_with_note = false;
    g.s.flags.stole_for_lam = true;
    const stealBark = getDynamicNpcBark('huy', g);
    expect(stealBark.priority).toBe(2);
    expect(stealBark.text).toMatch(/áy náy|làm liều/i);
  });

  it('Lâm và đàn em Khải phản ứng gay gắt khi bị vạch trần hoặc báo cáo', () => {
    const g = new GameLogic();

    // Lâm khi bị vạch trần vụ dao lam
    g.s.flags.lam_exposed = true;
    const exposedBark = getDynamicNpcBark('lam', g);
    expect(exposedBark.priority).toBe(2);
    expect(exposedBark.text).toMatch(/vố đau|đợi đấy|đường ở đây còn dài/i);

    // Khải khi Minh đối đầu với Lâm
    g.s.relations.lam.value = -20;
    const hostileKhai = getDynamicNpcBark('khai', g);
    expect(hostileKhai.priority).toBe(2);
    expect(hostileKhai.text).toMatch(/chỉ điểm|nhìn cái gì|anh Lâm/i);

    // Khải khi Minh giúp Lâm trộm đồ
    g.s.relations.lam.value = 20;
    g.s.flags.lam_exposed = false;
    g.s.flags.stole_for_lam = true;
    const friendlyKhai = getDynamicNpcBark('khai', g);
    expect(friendlyKhai.priority).toBe(2);
    expect(friendlyKhai.text).toMatch(/anh Minh|khen anh/i);
  });

  it('Y sĩ An và Thầy Phúc có lời thoại ghi nhận thành tích hoặc tình trạng sức khỏe', () => {
    const g = new GameLogic();

    // Y sĩ An khi Minh kiệt sức
    g.s.stats.stamina = 15;
    const sickBark = getDynamicNpcBark('an', g);
    expect(sickBark.priority).toBe(2);
    expect(sickBark.text).toMatch(/xanh xao|y tế/i);

    // Thầy Phúc khi Minh đã có chứng chỉ nghề
    g.s.inventory.chung_chi_nghe = 1;
    const certBark = getDynamicNpcBark('phuc', g);
    expect(certBark.priority).toBe(2);
    expect(certBark.text).toMatch(/thư viện|tay nghề|quy chuẩn/i);
  });
});
