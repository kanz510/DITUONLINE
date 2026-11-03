import { describe, it, expect } from 'vitest';
import { QUESTS, QUEST_ORDER } from '../../src/data/quests';
import { createInitialState } from '../../src/logic/state';
import { GameLogic } from '../../src/logic/game';
import { buildDialogue } from '../../src/data/dialogues';

describe('VIỆC 11: Quest enhancements (challenges, trade-offs, thresholds)', () => {
  it('11a: Every main quest has at least one optional challenge objective with optional: true', () => {
    const mainQuestIds = QUEST_ORDER.filter((q) => QUESTS[q].type === 'main');
    expect(mainQuestIds.length).toBeGreaterThanOrEqual(12);

    for (const qid of mainQuestIds) {
      const q = QUESTS[qid];
      const opt = q.objectives.find((o) => o.optional === true);
      expect(opt, `Main quest ${qid} should have an optional challenge objective`).toBeDefined();
      expect(opt!.text).toMatch(/Thử thách|tùy chọn/i);
    }
  });

  it('11a: Optional challenges do not block completing main quest when left unfulfilled', () => {
    const s = createInitialState();
    const g = new GameLogic(s);

    // Make sure stamina is too low for the optional challenge
    s.stats.stamina = 20;
    g.startQuest('nhap_trai');
    g.completeObjective('nhap_trai', 'chan_man');
    g.completeObjective('nhap_trai', 'noi_quy');
    g.completeObjective('nhap_trai', 'diem_danh');
    g.completeObjective('nhap_trai', 'gap_bay');

    // All mandatory done, optional challenge not fulfilled
    expect(s.quests['nhap_trai'].status).toBe('done');
    expect(g.qObj('nhap_trai', 'thu_thach_nhap_trai')).toBe(false);
  });

  it('11a: Optional challenges award bonus rewards when conditions are met upon completion', () => {
    const s = createInitialState();
    const g = new GameLogic(s);

    const initialXp = s.progression.xp;
    g.startQuest('nhap_trai');
    g.completeObjective('nhap_trai', 'chan_man');
    g.completeObjective('nhap_trai', 'noi_quy');
    g.completeObjective('nhap_trai', 'diem_danh');
    g.completeObjective('nhap_trai', 'thu_thach_nhap_trai');
    g.completeObjective('nhap_trai', 'gap_bay');

    expect(s.quests['nhap_trai'].status).toBe('done');
    expect(g.qObj('nhap_trai', 'thu_thach_nhap_trai')).toBe(true);
    // Base 50 XP + 15 bonus XP = 65 XP
    expect(s.progression.xp - initialXp).toBe(65);
  });

  it('11b: Linear main quests have binary trade-off choices in dialogues', () => {
    const s = createInitialState();
    const g = new GameLogic(s);
    const noop = () => {};

    // 1. ca_dau trade-off in bayDialogue
    g.startQuest('ca_dau');
    s.flags['ca_dau:lap_rap'] = true;
    const bayTree = buildDialogue('bay', g, noop);
    const reportCaDau = bayTree.choices.find((c) => c.label.includes('chỉ tiêu ca đầu tiên'));
    expect(reportCaDau).toBeDefined();

    const response = reportCaDau!.run!();
    expect(response).toBeDefined();
    // Has 2 binary trade-off choices
    expect(response!.choices.length).toBe(2);

    // Choice A: Careful (-stamina, +reform, +rel)
    const initialReform = s.stats.reform;
    response!.choices[0].run!();
    expect(s.stats.reform).toBeGreaterThan(initialReform);

    // 2. lop_nghe_dau trade-off in phucDialogue
    g.startQuest('lop_nghe_dau');
    s.flags['lop_nghe_dau:den_lop'] = true;
    s.flags['lop_nghe_dau:thao_tac'] = true;
    const phucTree = buildDialogue('phuc', g, noop);
    const finishLop = phucTree.choices.find((c) => c.label.includes('hoàn thành xong bài nối mạch'));
    expect(finishLop).toBeDefined();
    const phucResponse = finishLop!.run!();
    expect(phucResponse).toBeDefined();
    expect(phucResponse!.choices.length).toBe(2);
  });

  it('11c: Difficult steps show explicit stat or skill thresholds in text', () => {
    const monNo = QUESTS['mon_no'];
    const damPhan = monNo.objectives.find((o) => o.id === 'dam_phan');
    expect(damPhan!.text).toMatch(/Cần kỹ năng Giao tiếp ≥ 2/);

    const loiHua = QUESTS['loi_hua_chu_bay'];
    const danhBong = loiHua.objectives.find((o) => o.id === 'danh_bong_hop');
    expect(danhBong!.text).toMatch(/Cần thể lực ≥ 30/);
  });
});
