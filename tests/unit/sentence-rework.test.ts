import { describe, it, expect } from 'vitest';
import { GameLogic } from '../../src/logic/game';
import { createInitialState } from '../../src/logic/state';

describe('VIỆC 5: Xóa cơ chế mãn hạn tù theo ngày', () => {
  it('endDay không bao giờ tự kết thúc game khi remaining <= 0', () => {
    const g = new GameLogic();
    g.s.sentence.remaining = 0;
    const summary = g.endDay();
    expect(g.s.ending).toBeNull();
    expect(summary.remainingAfter).toBe(0);
  });

  it('ngày trôi qua bình thường mà không phát sinh sự kiện kỳ xét giảm án trừ ngày', () => {
    const g = new GameLogic();
    const eventsEmitted: string[] = [];
    g.on('event', (ev) => eventsEmitted.push(ev));

    for (let day = 1; day <= 12; day++) {
      g.simulateGoodDay();
    }

    expect(g.s.day).toBeGreaterThan(12);
    expect(g.s.ending).toBeNull();
    const hasReviewReductionEvent = eventsEmitted.some((e) => e.includes('Kỳ xét giảm án: −'));
    expect(hasReviewReductionEvent).toBe(false);
  });

  it('khi load save cũ có s.ending nhưng chưa xong ky_xet_cuoi_cung thì s.ending bị xóa bỏ', () => {
    const oldSave = createInitialState();
    oldSave.ending = 'parole';
    oldSave.quests = {
      ho_so_giai_trinh: { id: 'ho_so_giai_trinh', status: 'done', objectives: {} },
    };

    const g = new GameLogic(oldSave);
    expect(g.s.ending).toBeNull();
  });

  it('khi load save cũ đã hoàn thành ky_xet_cuoi_cung thì s.ending được giữ nguyên', () => {
    const oldSave = createInitialState();
    oldSave.ending = 'freedom_full';
    oldSave.quests = {
      ky_xet_cuoi_cung: { id: 'ky_xet_cuoi_cung', status: 'done', objectives: {} },
    };

    const g = new GameLogic(oldSave);
    expect(g.s.ending).toBe('freedom_full');
  });

  it('chỉ có nhiệm vụ ky_xet_cuoi_cung mới kết thúc game và kích hoạt ending', () => {
    const g = new GameLogic();
    let endingEmitted: string | null = null;
    g.on('ending', (code) => { endingEmitted = code; });

    g.startQuest('ky_xet_cuoi_cung');
    g.completeObjective('ky_xet_cuoi_cung', 'den_hoi_truong');
    g.completeObjective('ky_xet_cuoi_cung', 'nhan_quyet_dinh');

    expect(g.s.ending).not.toBeNull();
    expect(endingEmitted).toBe(g.s.ending);
  });
});
