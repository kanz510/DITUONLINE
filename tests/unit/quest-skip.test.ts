import { describe, it, expect } from 'vitest';
import { GameLogic } from '../../src/logic/game';
import { QUESTS } from '../../src/data/quests';
import { getQuestOverdueStatus } from '../../src/logic/daily-plan';

describe('VIỆC 3 — Nút Bỏ qua nhiệm vụ (chịu phạt) & Bỏ qua việc ngày', () => {
  it('bỏ qua việc ngày: đánh dấu skipped, không +10 XP, mất thưởng cả 3 việc, không phạt chỉ số', () => {
    const g = new GameLogic();
    const tasks = g.s.daily.tasks;
    expect(tasks.length).toBeGreaterThan(0);
    const target = tasks[0];
    const initialXp = g.s.profile.xp;
    const initialReform = g.s.stats.reform;

    g.skipDailyTask(target.id);

    expect(target.skipped).toBe(true);
    expect(target.done).toBe(false);
    expect(g.s.profile.xp).toBe(initialXp); // không +10 XP
    expect(g.s.stats.reform).toBe(initialReform); // không trừ chỉ số

    // Thử hoàn thành tất cả các việc còn lại
    for (let i = 1; i < tasks.length; i++) {
      tasks[i].done = true;
    }
    // Gọi checkDailyTasks
    g.checkDailyTasks({ taskId: tasks[1].id });

    // Không được nhận thưởng hoàn thành cả 3 việc
    expect(g.s.daily.allTasksBonusAwarded).toBeFalsy();
  });

  it('nhiệm vụ có câu failure bắt đầu bằng "Không thể thất bại" thì KHÔNG được bỏ qua', () => {
    const g = new GameLogic();
    g.startQuest('nhap_trai');
    // nhap_trai bắt đầu bằng 'Không thể thất bại'
    expect(QUESTS['nhap_trai'].failure.startsWith('Không thể thất bại')).toBe(true);

    // Hoàn thành 2 bước đầu để tới bước điểm danh (06:30–06:45)
    g.completeObjective('nhap_trai', 'chan_man');
    g.completeObjective('nhap_trai', 'noi_quy');

    // Chỉnh giờ quá khung giờ điểm danh (07:00 => minute 420)
    g.s.minute = 420;
    const overdue = getQuestOverdueStatus('nhap_trai', g.s);
    expect(overdue.overdue).toBe(true);

    const res = g.skipOverdueQuest('nhap_trai');
    expect(res).toBe(false);
    expect(g.qStatus('nhap_trai')).toBe('active');
  });

  it('bỏ qua nhiệm vụ quá giờ: trừ đúng 5 điểm cải tạo, trạng thái thành failed, và mở tiếp nhiệm vụ sau', () => {
    const g = new GameLogic();
    // Mở ca_dau
    g.startQuest('ca_dau');
    expect(g.qStatus('ca_dau')).toBe('active');

    // Lúc 07:00 (chưa quá 08:30) => không được bỏ qua vì chưa quá giờ
    g.s.minute = 420;
    expect(g.skipOverdueQuest('ca_dau')).toBe(false);
    expect(g.qStatus('ca_dau')).toBe('active');

    // Chuyển tới 09:00 (quá ca chấm công 08:00–08:30)
    g.s.minute = 540;
    const overdue = getQuestOverdueStatus('ca_dau', g.s);
    expect(overdue.overdue).toBe(true);

    const prevReform = g.s.stats.reform;
    const res = g.skipOverdueQuest('ca_dau');
    expect(res).toBe(true);

    // Trừ đúng 5 điểm cải tạo
    expect(g.s.stats.reform).toBe(prevReform - 5);
    // Trạng thái thành 'failed'
    expect(g.qStatus('ca_dau')).toBe('failed');
    // Mở tiếp nhiệm vụ sau ('mon_no') để không làm đứt chuỗi cốt truyện
    expect(g.qStatus('mon_no')).toBe('active');
  });

  it('bỏ qua nhiệm vụ lop_nghe_dau quá giờ mở tiếp sach_thu_vien', () => {
    const g = new GameLogic();
    g.startQuest('lop_nghe_dau');
    // Quá giờ ca chiều (sau 16:30 => phút 1000)
    g.s.minute = 1000;
    expect(getQuestOverdueStatus('lop_nghe_dau', g.s).overdue).toBe(true);

    const prevReform = g.s.stats.reform;
    const res = g.skipOverdueQuest('lop_nghe_dau');
    expect(res).toBe(true);
    expect(g.s.stats.reform).toBe(prevReform - 5);
    expect(g.qStatus('lop_nghe_dau')).toBe('failed');
    // Nhiệm vụ sau vẫn mở
    expect(g.qStatus('sach_thu_vien')).toBe('active');
  });
});
