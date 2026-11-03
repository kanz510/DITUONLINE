import { describe, it, expect, vi } from 'vitest';
import { QUESTS } from '../../src/data/quests';
import { exportSaveString, importSaveString } from '../../src/logic/save';
import { getSuspicionStage } from '../../src/ui/manager';
import { createInitialState } from '../../src/logic/state';
import { GameLogic } from '../../src/logic/game';
import { buildDialogue } from '../../src/data/dialogues';

describe('VIỆC 10: Features and improvements', () => {
  it('10a: la_thu_que_nha nhan_thu text describes correct location', () => {
    const q = QUESTS['la_thu_que_nha'];
    expect(q).toBeDefined();
    const obj = q.objectives.find((o) => o.id === 'nhan_thu');
    expect(obj).toBeDefined();
    expect(obj!.text).toBe('Đến Bàn tiếp nhận trong Phòng quản giáo nhận thư từ gia đình');
  });

  it('10b: getSuspicionStage maps suspicion correctly', () => {
    expect(getSuspicionStage(0).label).toBe('Bình thường');
    expect(getSuspicionStage(29).label).toBe('Bình thường');
    expect(getSuspicionStage(30).label).toBe('Đang bị để ý');
    expect(getSuspicionStage(49).label).toBe('Đang bị để ý');
    expect(getSuspicionStage(50).label).toBe('Nguy cơ bị khám xét');
    expect(getSuspicionStage(90).label).toBe('Nguy cơ bị khám xét');
  });

  it('10c: Chapter transition emits chapterComplete event', () => {
    const s = createInitialState();
    const g = new GameLogic(s);
    g.startQuest('mon_no');
    g.completeObjective('mon_no', 'nghe_huy');
    g.completeObjective('mon_no', 'gap_lam');
    g.chooseBranch('mon_no', 'pay');
    g.completeObjective('mon_no', 'du_tien');
    const listener = vi.fn();
    g.on('chapterComplete', listener);

    g.completeObjective('mon_no', 'tra_lam');
    expect(s.chapter).toBe(2);
    expect(listener).toHaveBeenCalledWith(1, 2);
  });

  it('10c: Dialogue echoes reflect previous player choices', () => {
    const s = createInitialState();
    const g = new GameLogic(s);
    const noop = () => {};

    // 1. Huy echo
    s.quests['mon_no'] = { status: 'done', objectives: { nghe_huy: true, gap_lam: true, tra_tien_lam: true } };
    s.flags.stole_for_lam = true;
    let huyTree = buildDialogue('huy', g, noop);
    expect(huyTree.choices.some((c) => c.label.includes('Về món nợ hôm trước với Lâm'))).toBe(true);

    // 2. Chú Bảy echo
    s.quests['cam_do_im_lang'] = { status: 'done', objectives: {} };
    s.flags.accepted_lam_bribe = true;
    let bayTree = buildDialogue('bay', g, noop);
    expect(bayTree.choices.some((c) => c.label.includes('về lời đề nghị của Lâm'))).toBe(true);

    // 3. Quản giáo Lan echo
    s.flags.ho_so_kho_7_cleared = true;
    let lanTree = buildDialogue('lan', g, noop);
    expect(lanTree.choices.some((c) => c.label.includes('về hồ sơ giải trình kho số 7'))).toBe(true);
  });

  it('10d: Export and import save string roundtrip and validation', () => {
    const s = createInitialState();
    s.player.x = 12.5;
    s.stats.money = 50000;
    s.chapter = 2;

    const exported = exportSaveString(s);
    expect(typeof exported).toBe('string');
    expect(exported.length).toBeGreaterThan(50);

    const imported = importSaveString(exported);
    expect(imported.success).toBe(true);
    expect(imported.state).toBeDefined();
    expect(imported.state!.player.x).toBe(12.5);
    expect(imported.state!.stats.money).toBe(50000);
    expect(imported.state!.chapter).toBe(2);

    // Invalid code returns failure without throwing
    const bad = importSaveString('invalid-corrupted-data-xyz');
    expect(bad.success).toBe(false);
    expect(bad.error).toBeDefined();
  });
});
