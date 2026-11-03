import { describe, expect, it } from 'vitest';
import { GameLogic } from '../../src/logic/game';
import { getQuestOverdueStatus, generateDailyTasks } from '../../src/logic/daily-plan';
import { QUESTS } from '../../src/data/quests';

describe('VIỆC 2: Nhiệm vụ quá giờ nói rõ lý do và khung giờ làm lại', () => {
  it('nhiệm vụ Nhập trại khi tới bước điểm danh sáng mà quá giờ (sau 06:45) hiện đúng câu failure', () => {
    const g = new GameLogic();
    g.startQuest('nhap_trai');
    expect(g.qStatus('nhap_trai')).toBe('active');

    // Hoàn thành 2 bước đầu để tới bước điểm danh
    g.completeObjective('nhap_trai', 'chan_man');
    g.completeObjective('nhap_trai', 'noi_quy');

    // Lúc 06:30 (390 phút): chưa quá giờ
    g.s.minute = 390;
    const resNormal = getQuestOverdueStatus('nhap_trai', g.s);
    expect(resNormal.overdue).toBe(false);

    // Lúc 07:05 (425 phút): đã quá giờ điểm danh sáng
    g.s.minute = 425;
    const resOverdue = getQuestOverdueStatus('nhap_trai', g.s);
    expect(resOverdue.overdue).toBe(true);
    expect(resOverdue.message).toContain('Đã qua giờ');
    expect(resOverdue.message).toContain(QUESTS.nhap_trai.failure);

    // Trạng thái nhiệm vụ vẫn là active (không bị đổi hoặc hủy)
    expect(g.qStatus('nhap_trai')).toBe('active');
  });

  it('nhiệm vụ Ca đầu khi quá giờ chấm công sáng (sau 08:30) hiện đúng câu failure', () => {
    const g = new GameLogic();
    g.startQuest('ca_dau');
    g.s.minute = 520; // 08:40 (sau 08:30)

    const res = getQuestOverdueStatus('ca_dau', g.s);
    expect(res.overdue).toBe(true);
    expect(res.message).toContain('Đã qua giờ');
    expect(res.message).toContain(QUESTS.ca_dau.failure);
  });

  it('việc ngày quá giờ hiện "Đã lỡ hôm nay", sang hôm sau sinh lại việc mới bình thường', () => {
    const g = new GameLogic();
    g.s.minute = 360;
    g.s.daily.tasks = generateDailyTasks(g.s);
    expect(g.s.daily.tasks.length).toBeGreaterThan(0);

    const rollcallTask = g.s.daily.tasks.find((t) => t.id === 'duty_rollcall');
    expect(rollcallTask).toBeDefined();

    // Lúc 07:15 (435 phút), rollcallTask (endMinute: 420) đã quá giờ
    g.s.minute = 435;
    const isMissed = !rollcallTask!.done && rollcallTask!.endMinute !== undefined && g.s.minute > rollcallTask!.endMinute;
    expect(isMissed).toBe(true);

    // Sang hôm sau: endDay() sinh lại việc mới
    g.s.stats.stamina = 50;
    g.endDay();
    expect(g.s.day).toBe(2);
    expect(g.s.daily.tasks.length).toBeGreaterThan(0);
    expect(g.s.daily.tasks.every((t) => !t.done)).toBe(true);
  });
});
