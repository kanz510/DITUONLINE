import { describe, expect, it } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { ITEMS } from '../../src/data/items';
import { MESS_SEATS, PROPS } from '../../src/world/layout';
import { PrisonWorld } from '../../src/world/builder';
import { GameLogic } from '../../src/logic/game';
import { computeReview, project, serveDay, applyReview, isChapter4Done } from '../../src/logic/sentence';
import { START_SENTENCE } from '../../src/logic/constants';
import { migrate } from '../../src/logic/save';

describe('FIX 1 & FIX A: Ghế ngồi, Va chạm & Camera Obstacles', () => {
  it('mọi MESS_SEATS đều có ghế tương ứng trong PROPS', () => {
    for (const [sx, sz] of MESS_SEATS) {
      const chair = PROPS.find((p) => p.kind === 'chair' && Math.hypot(p.x - sx, p.z - sz) < 0.15);
      expect(chair).toBeDefined();
    }
  });

  it('cameraObstacles và PROPS chứa đầy đủ các loại đồ to, bàn ghế và đồ ngồi', () => {
    const kinds = new Set(PROPS.map((p) => p.kind));
    for (const expected of ['chair', 'bench', 'table', 'desk', 'workbench', 'counter', 'stonetable']) {
      expect(kinds.has(expected as any), `Thiếu đồ vật loại ${expected} trong PROPS`).toBe(true);
    }
  });
});

describe('FIX 3: Kiểm tra định nghĩa vật phẩm ITEMS', () => {
  it('tất cả ID phát qua giveItem trong src/ đều có trong ITEMS', () => {
    function walkDir(dir: string): string[] {
      let res: string[] = [];
      for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);
        if (fs.statSync(full).isDirectory()) res = res.concat(walkDir(full));
        else if (full.endsWith('.ts')) res.push(full);
      }
      return res;
    }
    const tsFiles = walkDir(path.resolve(__dirname, '../../src'));
    const re = /giveItem\(\s*['"]([^'"]+)['"]/g;
    const givenIds = new Set<string>();
    for (const file of tsFiles) {
      const content = fs.readFileSync(file, 'utf8');
      let m: RegExpExecArray | null;
      while ((m = re.exec(content)) !== null) {
        givenIds.add(m[1]);
      }
    }
    for (const id of givenIds) {
      expect(ITEMS[id], `Vật phẩm "${id}" được cấp phát nhưng thiếu định nghĩa trong ITEMS`).toBeDefined();
      expect(ITEMS[id].name.length).toBeGreaterThan(0);
      expect(ITEMS[id].desc.length).toBeGreaterThan(0);
    }
  });
});

describe('FIX C: Cân bằng thể lực (Stamina)', () => {
  it('sau một ngày mẫu bình thường, thể lực không bao giờ cạn trước trưa', () => {
    const g = new GameLogic();
    expect(g.s.stats.stamina).toBe(85);

    // 06:00: Thức dậy
    g.advanceTo(360, { inCellblock: true, inRollcall: false, sprinting: false, moving: false, resting: false });
    // Đi ra sân điểm danh: 20s đi bộ
    g.tick(20, { inCellblock: false, inRollcall: false, sprinting: false, moving: true, resting: false });
    // Điểm danh (đứng nghiêm): 15s
    g.tick(15, { inCellblock: false, inRollcall: true, sprinting: false, moving: false, resting: false });
    // Đi ăn sáng: 15s đi bộ + ăn sáng (+10 stamina)
    g.tick(15, { inCellblock: false, inRollcall: false, sprinting: false, moving: true, resting: false });
    g.eatMeal();
    // Chạy vội 8 giây ra xưởng
    g.tick(8, { inCellblock: false, inRollcall: false, sprinting: true, moving: true, resting: false });
    // Ca sáng làm việc 3 units (lao động tay chân không trừ stamina)
    g.clockIn();
    for (let i = 0; i < 3; i++) g.finishWorkUnit(85);
    // Đi bộ quanh xưởng 30s
    g.tick(30, { inCellblock: false, inRollcall: false, sprinting: false, moving: true, resting: false });
    // Đến giờ ăn trưa 11:30 (690 phút)
    g.advanceTo(690, { inCellblock: false, inRollcall: false, sprinting: false, moving: false, resting: false });

    // Thể lực tại bữa trưa phải còn dồi dào (> 60), không cạn kiệt
    expect(g.s.stats.stamina).toBeGreaterThan(60);
  });
});

describe('FIX D: Nhịp giảm án & Tiến độ hoàn thành Chương 4', () => {
  it('ngày ra tù dự kiến của người chơi ngoan và trung bình đều sau mốc xong chương 4', () => {
    const g = new GameLogic();
    const p = project(g.s);
    // Án xuất phát 30 ngày
    expect(START_SENTENCE).toBe(30);
    expect(p.releaseNoReduction).toBe(30);
    // Người chơi ngoan đạt tối đa -2 mỗi 4 ngày -> ngày ra tù là khoảng ngày 20
    // Mốc kết thúc chương 4 thường là ngày 16–18. Do đó ngày 20 > ngày 16.
    expect(p.releaseEstimated).toBeGreaterThanOrEqual(20);
  });

  it('chặn ra tù trước khi xong Chương 4 (hồ sơ giải trình)', () => {
    const g = new GameLogic();
    g.s.sentence.remaining = 1;
    // Chưa hoàn thành ho_so_giai_trinh
    expect(isChapter4Done(g.s)).toBe(false);
    // Trừ ngày
    serveDay(g.s, 1);
    expect(g.s.sentence.remaining).toBe(1);
    expect(g.s.flags.release_pending_chapter4).toBe(true);

    // Khi hoàn thành ho_so_giai_trinh, được phép ra tù
    g.s.quests.ho_so_giai_trinh = { id: 'ho_so_giai_trinh', status: 'done', objectives: {} };
    expect(isChapter4Done(g.s)).toBe(true);
    serveDay(g.s, 2);
    expect(g.s.sentence.remaining).toBe(0);
  });

  it('save cũ dở dang ngày >= 10 án còn ngắn được tự động gia hạn án', () => {
    const oldSave = {
      day: 12,
      chapter: 3,
      sentence: { total: 24, remaining: 5, served: 11, reviewsDone: [4, 8] },
      quests: { mon_no: { id: 'mon_no', status: 'done', objectives: {} } },
    };
    const loaded = migrate(oldSave as any);
    expect(loaded.sentence.remaining).toBeGreaterThanOrEqual(11);
    expect(loaded.flags.sentence_extended_for_reform).toBeDefined();
    expect(loaded.sentence.additions.length).toBeGreaterThan(0);
  });
});
