import { describe, expect, it } from 'vitest';
import { GameLogic } from '../../src/logic/game';
import { healStuckQuests } from '../../src/logic/save';
import { getQuestWaitingDetails } from '../../src/logic/daily-plan';
import { QUEST_DESTINATIONS, resolveQuestDestination } from '../../src/logic/quest-guide';
import { buildDialogue } from '../../src/data/dialogues';

describe('ĐỢT 2: Multi-path Quest "Nghi án thuốc trị hen" & Sửa lỗi hướng dẫn', () => {
  it('Nhánh 1: Lén lút (Agility ≥ 2) kiểm tra chỉ số, hoàn thành và mở manh_moi_kho_7', () => {
    const g = new GameLogic();
    g.s.chapter = 2;
    g.startQuest('nghi_an_thuoc');

    // Bước 1 & 2
    g.completeObjective('nghi_an_thuoc', 'hoi_an');
    g.completeObjective('nghi_an_thuoc', 'hoi_bay');

    // Khi Agility < 2: không cho chọn nhánh stealth
    g.s.progression.attrs.agility = 1;
    expect(g.chooseBranch('nghi_an_thuoc', 'stealth')).toBe(false);

    // Khi Agility >= 2: chọn thành công
    g.s.progression.attrs.agility = 2;
    expect(g.chooseBranch('nghi_an_thuoc', 'stealth')).toBe(true);
    expect(g.qBranch('nghi_an_thuoc')).toBe('stealth');
    expect(g.qObj('nghi_an_thuoc', 'quyet_dinh')).toBe(true);

    // Thu hồi thuốc an toàn
    expect(g.completeObjective('nghi_an_thuoc', 'len_lut')).toBe(true);
    g.giveItem('chai_thuoc_hen');

    // Bàn giao cho Y sĩ An
    expect(g.completeObjective('nghi_an_thuoc', 'tra_thuoc')).toBe(true);
    expect(g.qStatus('nghi_an_thuoc')).toBe('done');
    expect(g.qStatus('manh_moi_kho_7')).toBe('active');
    expect(g.s.quests.nghi_an_thuoc.outcome).toContain('Lén lút');
  });

  it('Nhánh 2: Thuyết phục (Charisma ≥ 2) tương tác với Khải, hoàn thành và mở manh_moi_kho_7', () => {
    const g = new GameLogic();
    g.s.chapter = 2;
    g.startQuest('nghi_an_thuoc');
    g.completeObjective('nghi_an_thuoc', 'hoi_an');
    g.completeObjective('nghi_an_thuoc', 'hoi_bay');

    // Khi Charisma < 2: bị từ chối
    g.s.progression.attrs.charisma = 1;
    expect(g.chooseBranch('nghi_an_thuoc', 'persuade')).toBe(false);

    // Khi Charisma >= 2: chọn thành công
    g.s.progression.attrs.charisma = 2;
    expect(g.chooseBranch('nghi_an_thuoc', 'persuade')).toBe(true);
    expect(g.qBranch('nghi_an_thuoc')).toBe('persuade');

    // Đối thoại với Khải
    const node = buildDialogue('khai', g, () => {});
    const talkChoice = node.choices.find((c) => c.label.includes('lọ thuốc hen'));
    expect(talkChoice).toBeDefined();

    const subNode = talkChoice!.run()!;
    expect(subNode.speaker).toBe('Khải');
    const persuadeOption = subNode.choices.find((c) => c.label.includes('Giao tiếp ≥ 2'));
    expect(persuadeOption).toBeDefined();

    const resultNode = persuadeOption!.run()!;
    expect(resultNode.text).toContain('cầm lấy mang đi');
    expect(g.qObj('nghi_an_thuoc', 'thuyet_phuc_khai')).toBe(true);
    expect(g.has('chai_thuoc_hen')).toBe(true);

    // Bàn giao cho Y sĩ An
    expect(g.completeObjective('nghi_an_thuoc', 'tra_thuoc')).toBe(true);
    expect(g.qStatus('nghi_an_thuoc')).toBe('done');
    expect(g.qStatus('manh_moi_kho_7')).toBe('active');
    expect(g.s.quests.nghi_an_thuoc.outcome).toContain('Thuyết phục');
  });

  it('Nhánh 3: Quan sát (Perception ≥ 2) kiểm tra bàn xưởng và hốc gạch sau xưởng', () => {
    const g = new GameLogic();
    g.s.chapter = 2;
    g.startQuest('nghi_an_thuoc');
    g.completeObjective('nghi_an_thuoc', 'hoi_an');
    g.completeObjective('nghi_an_thuoc', 'hoi_bay');

    // Khi Perception < 2: bị từ chối
    g.s.progression.attrs.perception = 1;
    expect(g.chooseBranch('nghi_an_thuoc', 'observe')).toBe(false);

    // Khi Perception >= 2: chọn thành công
    g.s.progression.attrs.perception = 2;
    expect(g.chooseBranch('nghi_an_thuoc', 'observe')).toBe(true);
    expect(g.qBranch('nghi_an_thuoc')).toBe('observe');

    // Không thể nhảy cóc lấy thuốc ở hốc tường khi chưa quan sát bàn xưởng
    expect(g.completeObjective('nghi_an_thuoc', 'thu_hoi_hoc_tuong')).toBe(false);

    // Bước 1: Quan sát bàn xưởng
    expect(g.completeObjective('nghi_an_thuoc', 'quan_sat_dau_vet')).toBe(true);
    expect(g.s.flags['nghi_an_thuoc:quan_sat_dau_vet']).toBe(true);

    // Bước 2: Thu hồi tại hốc tường
    expect(g.completeObjective('nghi_an_thuoc', 'thu_hoi_hoc_tuong')).toBe(true);
    g.giveItem('chai_thuoc_hen');

    // Bàn giao cho Y sĩ An
    expect(g.completeObjective('nghi_an_thuoc', 'tra_thuoc')).toBe(true);
    expect(g.qStatus('nghi_an_thuoc')).toBe('done');
    expect(g.qStatus('manh_moi_kho_7')).toBe('active');
    expect(g.s.quests.nghi_an_thuoc.outcome).toContain('Quan sát');
  });

  it('Phương án cơ bản (Fallback): Hoàn thành bình thường dù mọi chỉ số đều < 2', () => {
    const g = new GameLogic();
    g.s.chapter = 2;
    g.startQuest('nghi_an_thuoc');
    g.completeObjective('nghi_an_thuoc', 'hoi_an');
    g.completeObjective('nghi_an_thuoc', 'hoi_bay');

    // Mọi chỉ số đều là 1
    g.s.progression.attrs.agility = 1;
    g.s.progression.attrs.charisma = 1;
    g.s.progression.attrs.perception = 1;

    // Vẫn chọn được nhánh basic
    expect(g.chooseBranch('nghi_an_thuoc', 'basic')).toBe(true);
    expect(g.qBranch('nghi_an_thuoc')).toBe('basic');

    expect(g.completeObjective('nghi_an_thuoc', 'nhat_thuoc')).toBe(true);
    g.giveItem('chai_thuoc_hen');

    expect(g.completeObjective('nghi_an_thuoc', 'tra_thuoc')).toBe(true);
    expect(g.qStatus('nghi_an_thuoc')).toBe('done');
    expect(g.qStatus('manh_moi_kho_7')).toBe('active');
  });

  it('Tương thích ngược save cũ đang làm dở nghi_an_thuoc', () => {
    const g = new GameLogic();
    g.s.chapter = 2;
    g.startQuest('nghi_an_thuoc');
    g.completeObjective('nghi_an_thuoc', 'hoi_an');
    g.completeObjective('nghi_an_thuoc', 'hoi_bay');

    // Giả lập save cũ đã nhặt thuốc nhưng chưa có branch
    g.s.flags['nghi_an_thuoc:nhat_thuoc'] = true;
    delete g.s.flags['nghi_an_thuoc:branch'];

    // Chạy healStuckQuests
    const healed = healStuckQuests(g.s);
    expect(healed).toBe(true);
    expect(g.s.flags['nghi_an_thuoc:branch']).toBe('basic');
    expect(g.s.flags['nghi_an_thuoc:quyet_dinh']).toBe(true);

    // Tiếp tục hoàn thành bình thường
    g.giveItem('chai_thuoc_hen');
    expect(g.completeObjective('nghi_an_thuoc', 'tra_thuoc')).toBe(true);
    expect(g.qStatus('nghi_an_thuoc')).toBe('done');
    expect(g.qStatus('manh_moi_kho_7')).toBe('active');
  });

  it('SỬA LỖI 1: bay_vat_cam.phat_hien_bay chỉ đường đến Cán bộ Tùng thay vì giường ngủ', () => {
    const cfg = QUEST_DESTINATIONS.bay_vat_cam.phat_hien_bay;
    expect(cfg.npc).toBe('tung');
    expect(cfg.spot).toBeUndefined();
    expect(cfg.label).toContain('Cán bộ Tùng');

    const g = new GameLogic();
    g.s.chapter = 3;
    g.startQuest('bay_vat_cam');

    const dest = resolveQuestDestination('bay_vat_cam', g.s);
    expect(dest.label).toContain('Cán bộ Tùng');
    expect(dest.targetName).toContain('Cán bộ Tùng');
  });

  it('SỬA LỖI 2: Thanh nhiệm vụ không hiển thị chờ giờ của Thăm gặp khi đang theo dõi Cái bẫy vật cấm', () => {
    const g = new GameLogic();
    g.s.chapter = 3;
    g.startQuest('bay_vat_cam');
    g.startQuest('phong_tham_gap');

    // Lúc 07:00 sáng (ngoài giờ thăm gặp 08:30–11:00)
    g.s.minute = 420;

    // Khi theo dõi bay_vat_cam: KHÔNG chờ giờ
    const waitBay = getQuestWaitingDetails(g.s, 'bay_vat_cam');
    expect(waitBay.waiting).toBe(false);

    // Khi theo dõi phong_tham_gap: có chờ giờ 08:30–11:00 & 14:00–16:30
    const waitTham = getQuestWaitingDetails(g.s, 'phong_tham_gap');
    expect(waitTham.waiting).toBe(true);
    expect(waitTham.timeRange).toContain('08:30–11:00');
  });
});
