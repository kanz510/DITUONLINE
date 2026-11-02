import { describe, expect, it } from 'vitest';
import { GameLogic } from '../../src/logic/game';
import { SaveManager, deserialize, serialize, type StorageLike } from '../../src/logic/save';
import { addSentence, applyReview, computeReview, project, serveDay } from '../../src/logic/sentence';
import { MAX_TOTAL_ADDITION } from '../../src/logic/constants';

class MemStorage implements StorageLike {
  m = new Map<string, string>();
  getItem(k: string) { return this.m.get(k) ?? null; }
  setItem(k: string, v: string) { this.m.set(k, v); }
  removeItem(k: string) { this.m.delete(k); }
}

const ctx = { inCellblock: false, inRollcall: false, sprinting: false, moving: false, resting: false };

describe('Án & xét giảm án', () => {
  it('quy tắc giờ mở cửa các khu vực phòng ốc Mốc 2', () => {
    const g = new GameLogic();
    // Phòng y tế mở lúc 08:00 (480 phút)
    g.s.minute = 480;
    expect(g.isOpen('medical')).toBe(true);
    // Phòng y tế đóng lúc 12:00 (720 phút)
    g.s.minute = 720;
    expect(g.isOpen('medical')).toBe(false);
    // Lớp học nghề mở ca chiều lúc 15:00 (900 phút)
    g.s.minute = 900;
    expect(g.isOpen('classroom')).toBe(true);
    // Phòng thăm gặp mở lúc 09:00 (540 phút)
    g.s.minute = 540;
    expect(g.isOpen('visitation')).toBe(true);
    // Khu kỷ luật luôn khóa ngoài trừ khi có lệnh
    expect(g.isOpen('discipline')).toBe(false);
  });

  it('mỗi ngày chỉ trừ án một lần', () => {
    const g = new GameLogic();
    expect(serveDay(g.s, 1)).toBe(true);
    expect(serveDay(g.s, 1)).toBe(false);
    expect(g.s.sentence.remaining).toBe(23);
  });

  it('kỳ xét giảm án không áp dụng trùng và không làm án âm', () => {
    const g = new GameLogic();
    g.s.day = 4;
    g.s.stats.reform = 90;
    g.s.sentence.remaining = 1;
    const r1 = applyReview(g.s, 4);
    expect(r1).not.toBeNull();
    expect(g.s.sentence.remaining).toBeGreaterThanOrEqual(0);
    const r2 = applyReview(g.s, 4);
    expect(r2).toBeNull();
    expect(applyReview(g.s, 3)).toBeNull();
  });

  it('giảm án 0–2 ngày tùy hồ sơ', () => {
    const g = new GameLogic();
    for (let i = 0; i < 4; i++) g.simulateGoodDay();
    const r = computeReview(g.s, 4);
    expect(r.reduction).toBeGreaterThanOrEqual(0);
    expect(r.reduction).toBeLessThanOrEqual(2);
    const bad = new GameLogic();
    bad.s.day = 4;
    bad.recordViolation('fight', 'x', 'test');
    expect(computeReview(bad.s, 4).reduction).toBe(0);
  });

  it('cộng án có trần tổng', () => {
    const g = new GameLogic();
    addSentence(g.s, 5, 'a', 1);
    addSentence(g.s, 5, 'b', 2);
    const total = g.s.sentence.additions.reduce((a, x) => a + x.amount, 0);
    expect(total).toBe(MAX_TOTAL_ADDITION);
  });

  it('dự kiến ngày ra tù hợp lý', () => {
    const g = new GameLogic();
    const p = project(g.s);
    expect(p.releaseNoReduction).toBe(24);
    expect(p.releaseEstimated).toBeLessThanOrEqual(24);
    expect(p.nextReview).toBe(4);
  });
});

describe('Vi phạm', () => {
  it('một hành vi chỉ tạo một hồ sơ', () => {
    const g = new GameLogic();
    g.s.day = 2;
    const a = g.recordViolation('restricted', 'ep1', 'camera');
    const b = g.recordViolation('restricted', 'ep1', 'camera');
    expect(a).not.toBeNull();
    expect(b).toBeNull();
    expect(g.s.violations.length).toBe(1);
  });

  it('vắng điểm danh ngày 2 bị ghi đúng một lần khi tick liên tục', () => {
    const g = new GameLogic();
    g.s.day = 2;
    for (let i = 0; i < 200; i++) g.tick(0.5, ctx);
    const rc = g.s.violations.filter((v) => v.type === 'missed_rollcall');
    expect(rc.length).toBe(1);
    expect(g.s.daily.rollcall).toBe('missed');
  });

  it('ngày đầu chỉ nhắc nhở, không trừ điểm', () => {
    const g = new GameLogic();
    const before = g.s.stats.reform;
    g.advanceTo(430, ctx);
    expect(g.s.violations[0].severity).toBe(0);
    expect(g.s.stats.reform).toBe(before);
  });

  it('khiếu nại vụ bị gài có bằng chứng thì được hủy và hoàn điểm', () => {
    const g = new GameLogic();
    g.s.day = 3;
    const before = g.s.stats.reform;
    const v = g.recordViolation('contraband', 'k', 'test', { appealTag: 'planted' })!;
    expect(g.s.stats.reform).toBeLessThan(before);
    expect(g.appeal(v.id).ok).toBe(false);
    expect(g.appeal(v.id).ok).toBe(false); // không khiếu nại lặp
    const g2 = new GameLogic();
    g2.s.day = 3;
    const v2 = g2.recordViolation('contraband', 'k', 'test', { appealTag: 'planted' })!;
    g2.s.inventory.loi_khai_bay = 1;
    expect(g2.appeal(v2.id).ok).toBe(true);
    expect(g2.s.stats.reform).toBe(before);
  });
});

describe('Chống cày điểm', () => {
  it('điểm cải tạo lặp lại bị giới hạn theo ngày', () => {
    const g = new GameLogic();
    const before = g.s.stats.reform;
    for (let i = 0; i < 20; i++) g.addReform(3, 'x', true);
    expect(g.s.stats.reform - before).toBe(8);
  });
});

describe('Nhiệm vụ', () => {
  it('chuỗi Người mới → Ca đầu, thưởng không trùng', () => {
    const g = new GameLogic();
    g.startQuest('nhap_trai');
    for (const o of ['chan_man', 'noi_quy', 'diem_danh', 'gap_bay']) g.completeObjective('nhap_trai', o);
    expect(g.qStatus('nhap_trai')).toBe('done');
    const reform = g.s.stats.reform;
    g.completeObjective('nhap_trai', 'gap_bay');
    g.finishQuest('nhap_trai', 'done');
    expect(g.s.stats.reform).toBe(reform);
    expect(g.qStatus('ca_dau')).toBe('active');
  });

  it('lựa chọn trả nợ có hậu quả và Huy giữ lời hứa', () => {
    const g = new GameLogic();
    g.startQuest('mon_no');
    g.completeObjective('mon_no', 'nghe_huy');
    g.completeObjective('mon_no', 'gap_lam');
    g.chooseBranch('mon_no', 'pay');
    expect(g.chooseBranch('mon_no', 'steal')).toBe(false);
    g.s.stats.money = 50;
    g.finishWorkUnit(50); // không có ca → bỏ qua
    g.completeObjective('mon_no', 'du_tien');
    g.s.stats.money -= 40;
    g.completeObjective('mon_no', 'tra_lam');
    expect(g.qStatus('mon_no')).toBe('done');
    expect(g.rel('huy')).toBeGreaterThan(20);
    g.endDay();
    g.endDay();
    expect(g.s.flags.huy_repaid).toBe(true);
  });

  it('thất hứa mua mì → nhiệm vụ thất bại khi quá hạn', () => {
    const g = new GameLogic();
    g.startQuest('mi_cho_huy');
    g.endDay();
    expect(g.qStatus('mi_cho_huy')).toBe('active');
    g.endDay();
    expect(g.qStatus('mi_cho_huy')).toBe('failed');
  });

  it('Chương 2: Bài học nghề Thầy Phúc cấp chứng chỉ và tăng điểm cải tạo', () => {
    const g = new GameLogic();
    g.s.chapter = 2;
    g.startQuest('lop_nghe_dau');
    g.completeObjective('lop_nghe_dau', 'den_lop');
    g.completeObjective('lop_nghe_dau', 'thao_tac');
    g.completeObjective('lop_nghe_dau', 'nhan_xet');
    expect(g.qStatus('lop_nghe_dau')).toBe('done');
    expect(g.has('chung_chi_nghe')).toBe(true);
    expect(g.rel('phuc')).toBe(10);
    expect(g.s.skills.vocationalExam).toBe(1);
    expect(g.qStatus('sach_thu_vien')).toBe('active');
  });

  it('Chương 2: Nghi án thuốc hen suyễn cứu Chú Bảy và lưu manh mối điều tra', () => {
    const g = new GameLogic();
    g.s.chapter = 2;
    g.startQuest('nghi_an_thuoc');
    g.completeObjective('nghi_an_thuoc', 'hoi_an');
    g.completeObjective('nghi_an_thuoc', 'hoi_bay');
    g.giveItem('chai_thuoc_hen');
    g.completeObjective('nghi_an_thuoc', 'nhat_thuoc');
    g.takeItem('chai_thuoc_hen');
    g.completeObjective('nghi_an_thuoc', 'tra_thuoc');
    expect(g.qStatus('nghi_an_thuoc')).toBe('done');
    expect(g.rel('bay')).toBeGreaterThan(15);
    expect(g.rel('an')).toBe(12);
    expect(g.s.clues.length).toBeGreaterThan(0);
  });

  it('Chương 2: Thăm gặp Chị Mai nhận tiền tiếp tế và giảm căng thẳng', () => {
    const g = new GameLogic();
    g.s.chapter = 2;
    const stressBefore = g.s.stats.stress;
    const moneyBefore = g.s.stats.money;
    g.startQuest('phong_tham_gap');
    g.completeObjective('phong_tham_gap', 'gap_chi');
    g.completeObjective('phong_tham_gap', 'thanh_that');
    g.completeObjective('phong_tham_gap', 'nhan_tien');
    expect(g.qStatus('phong_tham_gap')).toBe('done');
    expect(g.s.stats.money - moneyBefore).toBe(25);
    expect(g.s.stats.stress).toBeLessThan(stressBefore);
    expect(g.rel('mai')).toBeGreaterThan(20);
  });
});

describe('Lưu / tải', () => {
  it('giữ đúng thời gian, án, nhiệm vụ, quan hệ, vật phẩm', () => {
    const st = new MemStorage();
    const sm = new SaveManager(st);
    const g = new GameLogic();
    g.simulateGoodDay();
    g.advanceTo(600, ctx);
    g.startQuest('dep_bay');
    g.changeRel('huy', 12);
    g.giveItem('mi_goi', 2);
    g.recordViolation('curfew', 'x', 'e');
    sm.save(g.s);
    const loaded = sm.load()!;
    expect(loaded.day).toBe(g.s.day);
    expect(loaded.minute).toBeCloseTo(g.s.minute);
    expect(loaded.sentence).toEqual(g.s.sentence);
    expect(loaded.quests).toEqual(g.s.quests);
    expect(loaded.relations.huy.value).toBe(g.s.relations.huy.value);
    expect(loaded.inventory.mi_goi).toBe(2);
    expect(loaded.violations.length).toBe(g.s.violations.length);
    expect(loaded.violations.map((v) => v.key)).toContain('curfew:x');
  });

  it('tải lại không nhân phần thưởng', () => {
    const g = new GameLogic();
    g.startQuest('dep_bay');
    g.completeObjective('dep_bay', 'tim_dep');
    g.completeObjective('dep_bay', 'tra_dep');
    const txt = serialize(g.s);
    const g2 = new GameLogic(deserialize(txt)!);
    const rel = g2.rel('bay');
    g2.finishQuest('dep_bay', 'done');
    g2.completeObjective('dep_bay', 'tra_dep');
    expect(g2.rel('bay')).toBe(rel);
    // kết thúc ngày trùng không trừ án hai lần
    const g3 = new GameLogic(deserialize(txt)!);
    const s1 = g3.endDay();
    const rem = g3.s.sentence.remaining;
    const g4 = new GameLogic(deserialize(serialize(g3.s))!);
    expect(g4.s.sentence.remaining).toBe(rem);
    expect(s1.served).toBe(true);
  });

  it('di chuyển dữ liệu không có version', () => {
    const g = deserialize(JSON.stringify({ day: 4, stats: { money: 99 } }))!;
    expect(g.version).toBe(2);
    expect(g.day).toBe(4);
    expect(g.stats.money).toBe(99);
    expect(g.stats.reform).toBe(40);
    expect(deserialize(JSON.stringify({ version: 999, state: {} }))).toBeNull();
  });
});

describe('Hệ thống Cấp độ, Điểm kỹ năng & Xuất thân', () => {
  it('công thức XP và tăng cấp chính xác', () => {
    const g = new GameLogic();
    expect(g.s.progression.level).toBe(1);
    expect(g.s.progression.xp).toBe(0);
    expect(g.s.progression.skillPoints).toBe(0);

    // Level 1 cần 80 XP để lên Level 2
    g.gainXp(50);
    expect(g.s.progression.level).toBe(1);
    expect(g.s.progression.xp).toBe(50);
    expect(g.s.progression.skillPoints).toBe(0);

    g.gainXp(35); // Tổng 85 >= 80 -> lên Level 2, dư 5 XP
    expect(g.s.progression.level).toBe(2);
    expect(g.s.progression.xp).toBe(5);
    expect(g.s.progression.skillPoints).toBe(1);
  });

  it('cộng điểm chỉ số có giới hạn tối đa là 5', () => {
    const g = new GameLogic();
    g.s.progression.skillPoints = 2;
    g.s.progression.attrs.endurance = 4;

    expect(g.spendSkillPoint('endurance')).toBe(true);
    expect(g.s.progression.attrs.endurance).toBe(5);
    expect(g.s.progression.skillPoints).toBe(1);

    // Đạt trần 5 -> không thể tăng tiếp
    expect(g.spendSkillPoint('endurance')).toBe(false);
    expect(g.s.progression.attrs.endurance).toBe(5);
    expect(g.s.progression.skillPoints).toBe(1);

    // Tăng chỉ số khác
    expect(g.spendSkillPoint('charisma')).toBe(true);
    expect(g.s.progression.attrs.charisma).toBe(2);
    expect(g.s.progression.skillPoints).toBe(0);

    // Hết điểm kỹ năng
    expect(g.spendSkillPoint('charisma')).toBe(false);
  });

  it('khởi tạo thuộc tính theo từng xuất thân nhân vật', () => {
    const mech = new GameLogic();
    mech.applyProfile({ name: 'Minh', background: 'mechanic', difficulty: 'normal', skin: 0xe2b48d, hair: 0x18181b, hairStyle: 'short', preset: 0, introSeen: true });
    expect(mech.s.progression.attrs.endurance).toBe(2);
    expect(mech.s.progression.attrs.agility).toBe(2);

    const cou = new GameLogic();
    cou.applyProfile({ name: 'Minh', background: 'courier', difficulty: 'normal', skin: 0xe2b48d, hair: 0x18181b, hairStyle: 'short', preset: 0, introSeen: true });
    expect(cou.s.progression.attrs.endurance).toBe(2);
    expect(cou.s.progression.attrs.perception).toBe(2);

    const clk = new GameLogic();
    clk.applyProfile({ name: 'Minh', background: 'clerk', difficulty: 'normal', skin: 0xe2b48d, hair: 0x18181b, hairStyle: 'short', preset: 0, introSeen: true });
    expect(clk.s.progression.attrs.perception).toBe(2);
    expect(clk.s.progression.attrs.charisma).toBe(2);
  });

  it('lựa chọn hồi tưởng kho số 7 ban phát thưởng tương ứng', () => {
    const g1 = new GameLogic();
    g1.applyFlashbackChoice('keep_doc');
    expect(g1.s.clues).toContain('chung_tu_goc_kho_7');

    const g2 = new GameLogic();
    const stressBefore = g2.s.stats.stress;
    g2.applyFlashbackChoice('help_victim');
    expect(g2.s.stats.stress).toBeLessThan(stressBefore);
    expect(g2.rel('bay')).toBeGreaterThan(0);

    const g3 = new GameLogic();
    g3.applyFlashbackChoice('chase_contact');
    expect(g3.s.clues).toContain('nhan_dang_ke_cam_dau');
  });
});

describe('Lượt chơi trọn vẹn', () => {
  it('cải tạo tốt → ra tù sớm hơn 30 ngày và nhận kết thúc', () => {
    const g = new GameLogic();
    let guard = 0;
    while (!g.s.ending && guard++ < 40) g.simulateGoodDay();
    expect(g.s.ending).not.toBeNull();
    expect(g.s.sentence.remaining).toBe(0);
    expect(g.s.day).toBeLessThan(30);
  });

  it('ngày nhiều vi phạm vẫn có đường ra tù (án không tăng vô hạn)', () => {
    const g = new GameLogic();
    let guard = 0;
    while (!g.s.ending && guard++ < 80) {
      if (g.s.day % 3 === 0) g.recordViolation('fight', `f${g.s.day}`, 'x');
      if (g.s.day % 3 === 0) addSentence(g.s, 3, 'test', g.s.day);
      g.endDay(false);
    }
    expect(g.s.ending).not.toBeNull();
  });

  it('ngất xỉu khi hết sức khỏe vẫn tiếp tục được', () => {
    const g = new GameLogic();
    let fainted = false;
    g.on('faint', () => (fainted = true));
    g.s.stats.health = 1;
    g.s.stats.hunger = 100;
    g.advanceTo(700, ctx);
    expect(fainted).toBe(true);
    expect(g.s.stats.health).toBeGreaterThan(0);
  });
});
