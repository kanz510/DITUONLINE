import { describe, it, expect } from 'vitest';
import { createInitialState } from '../../src/logic/state';
import { generateDailyTasks, isNpcPresentToday, isQuestWaitingForTime } from '../../src/logic/daily-plan';
import { GameLogic } from '../../src/logic/game';

describe('Hệ thống Việc hôm nay & Lịch sinh hoạt (Daily Tasks)', () => {
  // Ca 1: Khung giờ đã qua (Past time window exclusion)
  it('Ca 1: loại trừ việc có khung giờ đã qua trong ngày', () => {
    const s = createInitialState();
    // 09:00 (minute = 540) -> điểm danh (06:30–06:45, deadline 420) đã qua
    s.minute = 540;
    const tasks = generateDailyTasks(s);
    expect(tasks).toHaveLength(3);

    const dutyTask = tasks.find((t) => t.category === 'duty');
    expect(dutyTask).toBeDefined();
    // Không giao điểm danh sáng vì khung giờ đã qua
    expect(dutyTask?.id).not.toBe('duty_rollcall');
    // Giao việc chấm công hoặc việc còn hạn trong ngày
    expect(dutyTask?.id).toBe('duty_clockin');
    expect(dutyTask?.endMinute).toBeGreaterThan(s.minute);
  });

  // Ca 2: Quest chính chờ khung giờ (Main quest waiting for time window)
  it('Ca 2: quest chính đang chờ khung giờ mở cửa thì giao rèn luyện hoặc đọc sách', () => {
    const s = createInitialState();
    // Đang có quest lớp học nghề (chỉ mở 14:00–16:30)
    s.quests.lop_nghe_dau = {
      status: 'active',
      step: 0,
      rewarded: false,
      choices: [],
    };
    // Lúc 06:00 sáng -> lớp học chưa mở
    s.minute = 360;
    expect(isQuestWaitingForTime(s)).toBe(true);

    const tasks = generateDailyTasks(s);
    expect(tasks).toHaveLength(3);

    const personalTask = tasks.find((t) => t.category === 'personal');
    expect(personalTask).toBeDefined();
    // Không bắt làm quest lớp học nghề lúc này, giao rèn luyện thể lực sáng
    expect(personalTask?.id).toBe('personal_exercise');
    expect(personalTask?.title).toContain('Rèn luyện thể lực');
  });

  // Ca 3: Việc trực đã xong (Duty already completed)
  it('Ca 3: việc trực đã hoàn thành thì chuyển sang việc tiếp theo trong ngày', () => {
    const s = createInitialState();
    s.minute = 400; // trong giờ điểm danh (06:40)
    s.daily.rollcall = 'ok'; // điểm danh đã xong
    s.daily.workClockedIn = false;

    const tasks = generateDailyTasks(s);
    expect(tasks).toHaveLength(3);

    const dutyTask = tasks.find((t) => t.category === 'duty');
    expect(dutyTask).toBeDefined();
    // Điểm danh đã xong nên chuyển sang việc tiếp theo là chấm công ca sáng
    expect(dutyTask?.id).toBe('duty_clockin');
    expect(dutyTask?.title).toContain('Chấm công ca sáng');
  });

  // Ca 4: NPC không có mặt trong ngày (NPC absent today exclusion)
  it('Ca 4: bỏ qua NPC không có mặt hôm nay để chọn NPC tiếp theo có quan hệ thấp nhất', () => {
    const s = createInitialState();
    // Người chơi đã gặp Chị Mai (mai) và Chú Bảy (bay)
    s.relations.mai = {
      value: -15, // quan hệ thấp nhất
      met: true,
      memories: [],
      lastTalkDay: 0,
      lastGiftDay: 0,
    };
    s.relations.bay = {
      value: 5,
      met: true,
      memories: [],
      lastTalkDay: 0,
      lastGiftDay: 0,
    };

    // Chị Mai không có mặt hôm nay (không có quest thăm gặp mở)
    expect(isNpcPresentToday('mai', s.day, s)).toBe(false);

    const tasks = generateDailyTasks(s);
    expect(tasks).toHaveLength(3);

    const relTask = tasks.find((t) => t.category === 'relation');
    expect(relTask).toBeDefined();
    // Bỏ qua Mai vì vắng mặt, chọn Chú Bảy (NPC có mặt với quan hệ thấp nhất)
    expect(relTask?.targetNpc).toBe('bay');
    expect(relTask?.title).toContain('Chú Bảy');
    expect(relTask?.desc.toLowerCase()).toContain('buồng');
  });
});
