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
  it('mỗi ngày chỉ trừ án một lần', () => {
    const g = new GameLogic();
    expect(serveDay(g.s, 1)).toBe(true);
    expect(serveDay(g.s, 1)).toBe(false);
    expect(g.s.sentence.remaining).toBe(29);
  });

  it('kỳ xét giảm án không áp dụng trùng và không làm án âm', () => {
    const g = new GameLogic();
    g.s.day = 5;
    g.s.stats.reform = 90;
    g.s.sentence.remaining = 1;
    const r1 = applyReview(g.s, 5);
    expect(r1).not.toBeNull();
    expect(g.s.sentence.remaining).toBeGreaterThanOrEqual(0);
    const r2 = applyReview(g.s, 5);
    expect(r2).toBeNull();
    expect(applyReview(g.s, 4)).toBeNull();
  });

  it('giảm án 0–3 ngày tùy hồ sơ', () => {
    const g = new GameLogic();
    for (let i = 0; i < 4; i++) g.simulateGoodDay();
    const r = computeReview(g.s, 5);
    expect(r.reduction).toBeGreaterThanOrEqual(0);
    expect(r.reduction).toBeLessThanOrEqual(3);
    const bad = new GameLogic();
    bad.s.day = 5;
    bad.recordViolation('fight', 'x', 'test');
    expect(computeReview(bad.s, 5).reduction).toBe(0);
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
    expect(p.releaseNoReduction).toBe(30);
    expect(p.releaseEstimated).toBeLessThanOrEqual(30);
    expect(p.nextReview).toBe(5);
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
    expect(g.version).toBe(1);
    expect(g.day).toBe(4);
    expect(g.stats.money).toBe(99);
    expect(g.stats.reform).toBe(40);
    expect(deserialize(JSON.stringify({ version: 999, state: {} }))).toBeNull();
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
