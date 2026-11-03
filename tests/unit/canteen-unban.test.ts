import { describe, it, expect } from 'vitest';
import { GameLogic } from '../../src/logic/game';
import { createInitialState } from '../../src/logic/state';

describe('VIỆC 6: Mở lại căn tin, bỏ hẳn cơ chế cấm mua', () => {
  it('canteenBanned() luôn trả về false', () => {
    const g = new GameLogic();
    expect(g.canteenBanned()).toBe(false);
  });

  it('xóa sạch canteenBanUntil khi load save cũ', () => {
    const oldSave = createInitialState();
    oldSave.flags.canteenBanUntil = oldSave.day + 5;

    const g = new GameLogic(oldSave);
    expect(g.s.flags.canteenBanUntil).toBeUndefined();
    expect(g.canteenBanned()).toBe(false);
  });

  it('tái phạm nhiều lần trong 5 ngày không bao giờ cấm căn tin', () => {
    const g = new GameLogic();
    g.recordViolation('fight', 'v1', 'Đánh nhau');
    g.recordViolation('insubordination', 'v2', 'Chống đối');
    g.recordViolation('curfew', 'v3', 'Vi phạm giới nghiêm');

    expect(g.s.flags.canteenBanUntil).toBeUndefined();
    expect(g.canteenBanned()).toBe(false);
  });

  it('khám buồng thấy hộp mũi khoan phạt vi phạm nhưng không cấm căn tin', () => {
    const g = new GameLogic();
    g.s.inventory.hop_mui_khoan = 1;
    g.morningSearch('đột xuất');

    expect(g.s.flags.canteenBanUntil).toBeUndefined();
    expect(g.canteenBanned()).toBe(false);
  });

  it('purchaseError() không chặn mua vì lý do kỷ luật căn tin khi trong giờ mở', () => {
    const g = new GameLogic();
    g.s.minute = 1000; // 16:40 (trong khung 16:30 - 21:00)
    g.s.stats.money = 50;

    const err = g.purchaseError('banh_mi');
    expect(err).toBeNull();
  });
});
