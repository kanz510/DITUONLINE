import { describe, expect, it } from 'vitest';
import { GameLogic } from '../../src/logic/game';
import { buildDialogue } from '../../src/data/dialogues';
import { deserialize, serialize } from '../../src/logic/save';
import { createInitialState } from '../../src/logic/state';

describe('Sửa nhiệm vụ "Lời đề nghị im lặng" (cam_do_im_lang)', () => {
  it('nhánh từ chối qua hội thoại Lâm: đóng nhiệm vụ, ghi branch refuse, trao 70 XP và mở bay_vat_cam', () => {
    const g = new GameLogic();
    g.startQuest('cam_do_im_lang');
    expect(g.qStatus('cam_do_im_lang')).toBe('active');

    const xpBefore = g.s.progression.xp;
    const reformBefore = g.s.stats.reform;
    const relLamBefore = g.rel('lam');

    // Mở hội thoại với Lâm
    const d1 = buildDialogue('lam', g, () => {});
    const talkChoice = d1.choices.find((c) => c.label.includes('Anh tìm tôi có việc gì'));
    expect(talkChoice).toBeDefined();

    const d2 = talkChoice!.run();
    expect(d2).not.toBeNull();

    const refuseChoice = d2!.choices.find((c) => c.label.includes('Tôi từ chối'));
    expect(refuseChoice).toBeDefined();

    const d3 = refuseChoice!.run();
    expect(d3).not.toBeNull();

    // Nhiệm vụ phải hoàn thành, không kẹt active
    expect(g.qStatus('cam_do_im_lang')).toBe('done');
    expect(g.qBranch('cam_do_im_lang')).toBe('refuse');
    expect(g.s.quests.cam_do_im_lang.outcome).toBe('Từ chối mua chuộc');
    expect(g.s.quests.cam_do_im_lang.rewarded).toBe(true);

    // bay_vat_cam phải được mở
    expect(g.qStatus('bay_vat_cam')).toBe('active');

    // Thưởng 70 XP + cải tạo + quan hệ
    expect(g.s.progression.xp).toBe(xpBefore + 70);
    expect(g.s.stats.reform).toBe(reformBefore + 6);
    expect(g.rel('lam')).toBe(relLamBefore - 30);
  });

  it('nhánh nhận tiền qua hội thoại Lâm: đóng nhiệm vụ, ghi branch accept, trao 70 XP và vẫn mở bay_vat_cam', () => {
    const g = new GameLogic();
    g.startQuest('cam_do_im_lang');
    expect(g.qStatus('cam_do_im_lang')).toBe('active');

    const xpBefore = g.s.progression.xp;
    const moneyBefore = g.s.stats.money;
    const relLamBefore = g.rel('lam');

    // Mở hội thoại với Lâm
    const d1 = buildDialogue('lam', g, () => {});
    const talkChoice = d1.choices.find((c) => c.label.includes('Anh tìm tôi có việc gì'));
    expect(talkChoice).toBeDefined();

    const d2 = talkChoice!.run();
    expect(d2).not.toBeNull();

    const acceptChoice = d2!.choices.find((c) => c.label.includes('tôi cầm tiền'));
    expect(acceptChoice).toBeDefined();

    const d3 = acceptChoice!.run();
    expect(d3).not.toBeNull();

    // Nhiệm vụ phải hoàn thành, không kẹt active
    expect(g.qStatus('cam_do_im_lang')).toBe('done');
    expect(g.qBranch('cam_do_im_lang')).toBe('accept');
    expect(g.s.quests.cam_do_im_lang.outcome).toBe('Nhận tiền im lặng');
    expect(g.s.quests.cam_do_im_lang.rewarded).toBe(true);
    expect(g.s.flags.accepted_lam_bribe).toBe(true);

    // bay_vat_cam CŨNG PHẢI ĐƯỢC MỞ ở nhánh nhận tiền
    expect(g.qStatus('bay_vat_cam')).toBe('active');

    // Thưởng 70 XP + 50.000đ tiền + quan hệ Lâm
    expect(g.s.progression.xp).toBe(xpBefore + 70);
    expect(g.s.stats.money).toBe(moneyBefore + 50);
    expect(g.rel('lam')).toBe(relLamBefore + 25);
  });

  it('tự sửa save cũ bị kẹt (trường hợp từ chối như của Him): tự đóng done, trao thưởng và mở bay_vat_cam', () => {
    const raw = createInitialState();
    raw.quests.cam_do_im_lang = {
      status: 'active',
      step: 0,
      choices: [],
      rewarded: false,
      startedDay: 3,
    };
    raw.quests.bay_vat_cam = {
      status: 'locked',
      step: 0,
      choices: [],
      rewarded: false,
      startedDay: 3,
    };
    raw.flags['cam_do_im_lang:gap_lam_ch3'] = true;
    raw.flags['cam_do_im_lang:quyet_dinh_im_lang'] = true;
    raw.flags.accepted_lam_bribe = false;
    raw.progression.xp = 15;
    raw.daily.tasks = [
      { id: 'duty_curfew', category: 'duty', title: 'Điểm danh tối', desc: '', done: false },
      { id: 'personal_quest', category: 'personal', title: 'Lời đề nghị im lặng', desc: '', done: false },
    ];

    const json = serialize(raw);
    const loaded = deserialize(json);
    expect(loaded).not.toBeNull();

    // Nhiệm vụ kẹt đã được tự đóng
    expect(loaded!.quests.cam_do_im_lang.status).toBe('done');
    expect(loaded!.flags['cam_do_im_lang:branch']).toBe('refuse');
    expect(loaded!.quests.cam_do_im_lang.outcome).toBe('Từ chối mua chuộc');
    expect(loaded!.quests.cam_do_im_lang.rewarded).toBe(true);

    // Mở bay_vat_cam
    expect(loaded!.quests.bay_vat_cam.status).toBe('active');

    // Trao thưởng 70 XP bị thiếu: 15 + 70 = 85. Cấp 1 cần 80 XP lên Cấp 2, dư 5 XP
    expect(loaded!.progression.level).toBe(2);
    expect(loaded!.progression.xp).toBe(5);

    // Dòng Việc hôm nay của quest kẹt cũng được tự đánh dấu hoàn thành
    const personalTask = loaded!.daily.tasks.find((t) => t.id === 'personal_quest');
    expect(personalTask?.done).toBe(true);
  });

  it('tự sửa save cũ bị kẹt (trường hợp nhận tiền): tự đóng done với branch accept và mở bay_vat_cam', () => {
    const raw = createInitialState();
    raw.quests.cam_do_im_lang = {
      status: 'active',
      step: 0,
      choices: [],
      rewarded: false,
      startedDay: 3,
    };
    raw.quests.bay_vat_cam = {
      status: 'locked',
      step: 0,
      choices: [],
      rewarded: false,
      startedDay: 3,
    };
    raw.flags['cam_do_im_lang:gap_lam_ch3'] = true;
    raw.flags['cam_do_im_lang:quyet_dinh_im_lang'] = true;
    raw.flags.accepted_lam_bribe = true;
    raw.progression.xp = 0;

    const loaded = deserialize(serialize(raw));
    expect(loaded).not.toBeNull();

    expect(loaded!.quests.cam_do_im_lang.status).toBe('done');
    expect(loaded!.flags['cam_do_im_lang:branch']).toBe('accept');
    expect(loaded!.quests.cam_do_im_lang.outcome).toBe('Nhận tiền im lặng');
    expect(loaded!.quests.cam_do_im_lang.rewarded).toBe(true);
    expect(loaded!.quests.bay_vat_cam.status).toBe('active');
    expect(loaded!.progression.xp).toBe(70);
  });

  it('tự mở bay_vat_cam nếu cam_do_im_lang đã done từ trước nhưng bay_vat_cam bị kẹt locked', () => {
    const raw = createInitialState();
    raw.quests.cam_do_im_lang = {
      status: 'done',
      step: 0,
      choices: ['Thỏa hiệp nhận 50.000đ và dừng đào sâu sự thật'],
      outcome: 'Nhận tiền im lặng',
      rewarded: true,
      startedDay: 3,
    };
    raw.quests.bay_vat_cam = {
      status: 'locked',
      step: 0,
      choices: [],
      rewarded: false,
      startedDay: 3,
    };

    const loaded = deserialize(serialize(raw));
    expect(loaded).not.toBeNull();
    expect(loaded!.quests.bay_vat_cam.status).toBe('active');
  });

  it('nhiệm vụ rẽ nhánh khác (mon_no) vẫn hoạt động trơn tru với chooseBranch', () => {
    const g = new GameLogic();
    g.startQuest('mon_no');
    expect(g.qStatus('mon_no')).toBe('active');

    // Bước 1: nghe Huy
    g.completeObjective('mon_no', 'nghe_huy');
    // Bước 2: gặp Lâm
    g.completeObjective('mon_no', 'gap_lam');

    // Bước 3: chọn nhánh pay
    const res = g.chooseBranch('mon_no', 'pay');
    expect(res).toBe(true);
    expect(g.qBranch('mon_no')).toBe('pay');
    expect(g.qObj('mon_no', 'quyet_dinh')).toBe(true);
    expect(g.qStatus('mon_no')).toBe('active'); // chưa xong vì còn thiếu tiền và trả nợ

    // Gom đủ tiền và trả Lâm
    g.addStat('money', 50);
    g.completeObjective('mon_no', 'tra_lam');
    expect(g.qStatus('mon_no')).toBe('done');
  });
});
