import { describe, expect, it } from 'vitest';
import { GameLogic } from '../../src/logic/game';
import { createInitialState } from '../../src/logic/state';

describe('Đặc quyền thực tế (Perks System)', () => {
  describe('1. Quyền mượn sách thư viện (library_borrow)', () => {
    it('chưa hoàn thành lop_nghe_dau thì khóa mượn sách', () => {
      const g = new GameLogic(createInitialState());
      expect(g.hasPerk('library_borrow')).toBe(false);

      g.startQuest('sach_thu_vien');
      const reason = g.objectiveBlockReason('sach_thu_vien', 'muon_sach');
      expect(reason).toContain('Bài học nghề đầu tiên');
    });

    it('hoàn thành lop_nghe_dau thì mở quyền mượn sách', () => {
      const g = new GameLogic(createInitialState());
      g.s.quests.lop_nghe_dau = { status: 'done', step: 3, rewarded: true, startedDay: 1, choices: [] };
      expect(g.hasPerk('library_borrow')).toBe(true);

      g.startQuest('sach_thu_vien');
      const reason = g.objectiveBlockReason('sach_thu_vien', 'muon_sach');
      expect(reason).toBeNull();
    });
  });

  describe('2. Chú Bảy bảo lãnh vắng mặt (bay_excuse)', () => {
    it('dưới mốc (rel = 19) thì khóa, đúng mốc biên (rel = 20) thì mở', () => {
      const g = new GameLogic(createInitialState());
      g.s.relations.bay.value = 19;
      expect(g.hasPerk('bay_excuse')).toBe(false);
      expect(g.canBayExcuse()).toBe(false);

      g.s.relations.bay.value = 20;
      expect(g.hasPerk('bay_excuse')).toBe(true);
      expect(g.canBayExcuse()).toBe(true);
    });

    it('sau khi dùng 1 lần trong kỳ xét thì khóa lại, sang kỳ mới thì mở lại', () => {
      const g = new GameLogic(createInitialState());
      g.s.day = 2; // Thuộc kỳ xét 1 (ngày 1..4, period 0)
      g.s.relations.bay.value = 25;
      expect(g.canBayExcuse()).toBe(true);

      const ok = g.useBayExcuse('rollcall');
      expect(ok).toBe(true);
      expect(g.s.daily.rollcall).toBe('excused');
      expect(g.canBayExcuse()).toBe(false);

      // Thử dùng lần 2 trong cùng kỳ xét
      const ok2 = g.useBayExcuse('work');
      expect(ok2).toBe(false);

      // Sang kỳ xét mới (ngày 5..8, period 1)
      g.s.day = 5;
      expect(g.canBayExcuse()).toBe(true);
    });
  });

  describe('3. Huy hỗ trợ ca xưởng (huy_work)', () => {
    it('dưới mốc (rel = 19) thì khóa, đúng mốc biên (rel = 20) thì mở', () => {
      const g = new GameLogic(createInitialState());
      g.s.relations.huy.value = 19;
      expect(g.hasPerk('huy_work')).toBe(false);

      g.s.relations.huy.value = 20;
      expect(g.hasPerk('huy_work')).toBe(true);
    });

    it('khi lắp sản phẩm ca sáng, Huy phụ thêm 1 sản phẩm chỉ tiêu', () => {
      const g = new GameLogic(createInitialState());
      g.s.relations.huy.value = 20;
      g.s.minute = 500; // 08:20 (ca sáng)
      g.s.daily.workClockedIn = true;

      expect(g.s.daily.workUnits).toBe(0);
      g.finishWorkUnit(85, true);

      // Người chơi làm 1 sản phẩm + Huy phụ thêm 1 sản phẩm = 2 sản phẩm
      expect(g.s.daily.workUnits).toBe(2);
      expect(g.s.flags.huy_assisted_day).toBe(g.s.day);

      // Làm tiếp sản phẩm thứ 2 trong ca: đạt chỉ tiêu 3/3 mà không bị cộng thêm lần nữa
      g.finishWorkUnit(85, true);
      expect(g.s.daily.workUnits).toBe(3);
      expect(g.s.daily.work).toBe('ok');
    });
  });

  describe('4. Y sĩ An khám và cấp thuốc miễn phí (an_heal)', () => {
    it('dưới mốc (rel = 14) thì khóa, đúng mốc biên (rel = 15) thì mở', () => {
      const g = new GameLogic(createInitialState());
      g.s.relations.an.value = 14;
      expect(g.hasPerk('an_heal')).toBe(false);
      expect(g.canAnHeal()).toBe(false);

      g.s.relations.an.value = 15;
      expect(g.hasPerk('an_heal')).toBe(true);
      expect(g.canAnHeal()).toBe(true);
    });

    it('dùng 1 lần/ngày thì hồi phục máu/thể lực và khóa lại, sang ngày mới mở lại', () => {
      const g = new GameLogic(createInitialState());
      g.s.relations.an.value = 15;
      g.s.stats.health = 50;
      g.s.stats.stamina = 40;

      const res = g.useAnHeal();
      expect(res.ok).toBe(true);
      expect(g.s.stats.health).toBe(75);
      expect(g.s.stats.stamina).toBe(75);
      expect(g.canAnHeal()).toBe(false);

      // Thử dùng lần 2 trong ngày
      const res2 = g.useAnHeal();
      expect(res2.ok).toBe(false);

      // Sang ngày mới
      g.s.day += 1;
      expect(g.canAnHeal()).toBe(true);
    });
  });

  describe('5. Trợ giá Căn tin 10% (canteen_discount)', () => {
    it('dưới mốc (reform = 29) thì giá gốc, đúng mốc biên (reform = 30) thì giảm 10%', () => {
      const g = new GameLogic(createInitialState());
      g.s.stats.reform = 29;
      expect(g.hasPerk('canteen_discount')).toBe(false);
      expect(g.itemPrice('mi_goi')).toBe(8); // Giá gốc 8
      expect(g.itemPrice('dau_gio')).toBe(10); // Giá gốc 10
      expect(g.itemPrice('thuoc_cam')).toBe(12); // Giá gốc 12

      g.s.stats.reform = 30;
      expect(g.hasPerk('canteen_discount')).toBe(true);
      expect(g.itemPrice('mi_goi')).toBe(7); // 8 * 0.9 = 7.2 -> 7
      expect(g.itemPrice('dau_gio')).toBe(9); // 10 * 0.9 = 9
      expect(g.itemPrice('thuoc_cam')).toBe(11); // 12 * 0.9 = 10.8 -> 11
    });
  });

  describe('6. Danh sách đặc quyền getPerks', () => {
    it('trả về 5 đặc quyền với trạng thái chính xác', () => {
      const g = new GameLogic(createInitialState());
      g.s.stats.reform = 20; // Dưới mốc 30
      const perks = g.getPerks();
      expect(perks).toHaveLength(5);
      expect(perks.map((p) => p.id)).toEqual([
        'library_borrow',
        'bay_excuse',
        'huy_work',
        'an_heal',
        'canteen_discount',
      ]);
      expect(perks.every((p) => p.unlocked === false)).toBe(true);

      // Mở tất cả
      g.s.quests.lop_nghe_dau = { status: 'done', step: 1, rewarded: true, startedDay: 1, choices: [] };
      g.s.relations.bay.value = 20;
      g.s.relations.huy.value = 20;
      g.s.relations.an.value = 15;
      g.s.stats.reform = 30;

      const updated = g.getPerks();
      expect(updated.every((p) => p.unlocked === true)).toBe(true);
    });
  });
});
