import { describe, expect, it } from 'vitest';
import { GameLogic } from '../../src/logic/game';
import { createInitialState } from '../../src/logic/state';
import { generateDailyIncident, isWorkshopStoryConflicted, createPrng } from '../../src/logic/incidents';
import { getDynamicNpcBark } from '../../src/actors/npc-barks';
import { weatherForDay } from '../../src/world/atmosphere';

describe('ĐỢT 3: Biến cố sinh hoạt có kiểm soát (Controlled Prison Incidents)', () => {
  // ──────────────────────────────────────────────────────────────────────────
  // 1. Kiểm tra 3 biến cố & lựa chọn tham gia / bỏ qua
  // ──────────────────────────────────────────────────────────────────────────
  describe('1. Biến cố A: Mất điện xưởng (workshop_blackout)', () => {
    it('người chơi đủ kỹ năng (thợ máy) có thể sửa aptomat xưởng nhận thưởng cải tạo, XP và quan hệ cán bộ Tùng', () => {
      const g = new GameLogic(createInitialState({ background: 'mechanic' }));
      g.s.day = 2;
      g.s.minute = 520; // 08:40 trong ca lao động
      g.s.daily.incident = {
        id: 'workshop_blackout',
        title: 'Mất điện xưởng',
        description: 'Chập cầu dao',
        day: 2,
        status: 'active',
        startMinute: 510,
        endMinute: 690,
        rewardClaimed: false,
      };

      expect(g.canRepairBreaker()).toBe(true);

      const beforeReform = g.s.stats.reform;
      const beforeXp = g.s.progression.xp;
      const beforeTungRel = g.rel('tung');

      const res = g.resolveIncident('repair');
      expect(res.ok).toBe(true);
      expect(res.reward).toEqual({ reform: 1, xp: 30, relationTung: 5 });

      expect(g.s.stats.reform).toBe(beforeReform + 1);
      expect(g.s.progression.xp).toBe(beforeXp + 30);
      expect(g.rel('tung')).toBe(beforeTungRel + 5);
      expect(g.s.daily.incident?.status).toBe('resolved');
      expect(g.s.daily.incident?.choice).toBe('repair');
      expect(g.s.daily.incident?.rewardClaimed).toBe(true);

      // Thử nhận thưởng lần 2 -> từ chối
      const secondTry = g.resolveIncident('repair');
      expect(secondTry.ok).toBe(false);
      expect(secondTry.reason).toContain('đã nhận thưởng');
    });

    it('người chơi chưa đủ kỹ năng không thể tự sửa điện, nhưng có thể chọn đứng chờ thợ bảo trì an toàn', () => {
      // Background 'courier' với attrs mặc định không đủ điều kiện
      const g = new GameLogic(createInitialState({ background: 'courier' }));
      g.s.progression.attrs = { endurance: 1, agility: 1, perception: 1, charisma: 1 };
      g.s.skills.vocationalExam = 0;
      g.s.day = 2;
      g.s.daily.incident = {
        id: 'workshop_blackout',
        title: 'Mất điện xưởng',
        description: 'Chập cầu dao',
        day: 2,
        status: 'active',
        startMinute: 510,
        endMinute: 690,
        rewardClaimed: false,
      };

      expect(g.canRepairBreaker()).toBe(false);

      // Cố tình sửa -> từ chối với lý do rõ ràng
      const repairRes = g.resolveIncident('repair');
      expect(repairRes.ok).toBe(false);
      expect(repairRes.reason).toContain('chưa đủ kiến thức điện');

      // Chọn đứng chờ cán bộ/bảo trì -> thành công, an toàn, không bị phạt
      const waitRes = g.resolveIncident('wait');
      expect(waitRes.ok).toBe(true);
      expect(g.s.daily.incident?.status).toBe('resolved');
      expect(g.s.daily.incident?.choice).toBe('wait');
      expect(g.s.violations).toHaveLength(0); // Không vi phạm oan
    });

    it('bỏ qua biến cố hoặc hết ca lao động (11:30): biến cố tự hết hạn mà không bị phạt oan', () => {
      const g = new GameLogic(createInitialState());
      g.s.day = 3;
      g.s.minute = 510;
      g.s.daily.incident = {
        id: 'workshop_blackout',
        title: 'Mất điện xưởng',
        description: 'Chập cầu dao',
        day: 3,
        status: 'active',
        startMinute: 510,
        endMinute: 690,
        rewardClaimed: false,
      };

      // Tua giờ qua 11:30 (700 phút)
      g.advanceTo(700);

      expect(g.s.daily.incident?.status).toBe('expired');
      // Không tự tạo hình phạt mới
      const vio = g.s.violations.filter((v) => v.day === 3 && v.title.includes('Mất điện'));
      expect(vio).toHaveLength(0);
    });

    it('không kích hoạt mất điện khi xưởng đang có cốt truyện xung đột (ca_dau, nghi_an_thuoc, manh_moi_kho_7)', () => {
      const g = new GameLogic(createInitialState());
      g.s.day = 2;

      // 1. ca_dau chưa chấm công
      g.startQuest('ca_dau');
      expect(isWorkshopStoryConflicted(g.s)).toBe(true);

      // Hoàn thành chấm công
      g.setFlag('ca_dau:cham_cong', true);
      expect(isWorkshopStoryConflicted(g.s)).toBe(false);

      // 2. nghi_an_thuoc đang ở nhánh lén lút trong xưởng
      g.s.quests.nghi_an_thuoc = { status: 'active', step: 1, rewarded: false, choices: [] };
      g.setFlag('nghi_an_thuoc:branch', 'stealth');
      expect(isWorkshopStoryConflicted(g.s)).toBe(true);

      g.setFlag('nghi_an_thuoc:len_lut', true);
      expect(isWorkshopStoryConflicted(g.s)).toBe(false);

      // 3. manh_moi_kho_7 active
      g.s.quests.manh_moi_kho_7 = { status: 'active', step: 1, rewarded: false, choices: [] };
      expect(isWorkshopStoryConflicted(g.s)).toBe(true);
    });
  });

  describe('2. Biến cố B: Mưa lớn (heavy_rain)', () => {
    it('kích hoạt thời tiết mưa và cho phép tập thể lực trong buồng giam (tránh mưa ngoài sân)', () => {
      const g = new GameLogic(createInitialState());
      g.s.day = 4;
      g.s.minute = 750; // 12:30 giờ nghỉ trưa (free time)
      g.s.daily.incident = {
        id: 'heavy_rain',
        title: 'Mưa lớn',
        description: 'Trời mưa lớn ngoài sân',
        day: 4,
        status: 'active',
        startMinute: 360,
        endMinute: 1080,
        rewardClaimed: false,
      };

      // Kiểm tra thời tiết
      expect(weatherForDay(4, 750, true)).toBe('rain');

      const beforeFitness = g.s.skills.fitness;
      const beforeMorale = g.s.stats.morale;
      const beforeStamina = g.s.stats.stamina;

      // Tập thể lực trong buồng
      const res = g.resolveIncident('indoor_workout');
      expect(res.ok).toBe(true);

      expect(g.s.skills.fitness).toBeGreaterThan(beforeFitness);
      expect(g.s.stats.morale).toBeGreaterThan(beforeMorale);
      expect(g.s.stats.stamina).toBeLessThan(beforeStamina);
      expect(g.s.daily.exercise).toBe(1);
    });

    it('NPC phản hồi lời thoại liên quan đến thời tiết mưa khi có biến cố mưa lớn', () => {
      const g = new GameLogic(createInitialState());
      g.s.day = 3;
      g.s.minute = 400;
      g.s.daily.incident = {
        id: 'heavy_rain',
        title: 'Mưa lớn',
        description: 'Trời mưa lớn ngoài sân',
        day: 3,
        status: 'active',
        startMinute: 360,
        endMinute: 1080,
        rewardClaimed: false,
      };

      const bayBark = getDynamicNpcBark('bay', g);
      expect(bayBark.text).toMatch(/mưa|trơn|buồng giam/i);

      const huyBark = getDynamicNpcBark('huy', g);
      expect(huyBark.text).toMatch(/mưa|mì tôm/i);

      const tungBark = getDynamicNpcBark('tung', g);
      expect(tungBark.text).toMatch(/mưa|đường trơn/i);
    });
  });

  describe('3. Biến cố C: Kiểm tra nội vụ (cell_inspection)', () => {
    it('người chơi dọn giường đúng hạn nhận +1 điểm cải tạo và +15 XP', () => {
      const g = new GameLogic(createInitialState());
      g.s.day = 3;
      g.s.minute = 390; // 06:30 sáng
      g.s.daily.incident = {
        id: 'cell_inspection',
        title: 'Kiểm tra nội vụ',
        description: 'Kiểm tra chăn màn',
        day: 3,
        status: 'active',
        startMinute: 370,
        endMinute: 480,
        rewardClaimed: false,
      };

      const beforeReform = g.s.stats.reform;
      const beforeXp = g.s.progression.xp;

      const res = g.resolveIncident('tidy');
      expect(res.ok).toBe(true);
      expect(res.reward).toEqual({ reform: 1, xp: 15 });

      expect(g.s.stats.reform).toBe(beforeReform + 1);
      expect(g.s.progression.xp).toBe(beforeXp + 15);
      expect(g.s.daily.incident?.status).toBe('resolved');
      expect(g.s.daily.incident?.choice).toBe('tidy');
      expect(g.s.daily.incident?.rewardClaimed).toBe(true);
    });

    it('nếu bỏ qua dọn nội vụ: chỉ bỏ lỡ thưởng, tuyệt đối không tự tạo hình phạt mới', () => {
      const g = new GameLogic(createInitialState());
      g.s.day = 5;
      g.s.minute = 370;
      g.s.daily.rollcall = 'ok';
      g.s.daily.incident = {
        id: 'cell_inspection',
        title: 'Kiểm tra nội vụ',
        description: 'Kiểm tra chăn màn',
        day: 5,
        status: 'active',
        startMinute: 370,
        endMinute: 480,
        rewardClaimed: false,
      };

      // Người chơi bỏ qua
      const dismissRes = g.resolveIncident('dismiss');
      expect(dismissRes.ok).toBe(true);
      expect(g.s.daily.incident?.status).toBe('dismissed');

      // Tua qua 08:00
      g.advanceTo(500);

      // Kiểm tra: không có bất kỳ vi phạm hay phạt nào
      expect(g.s.violations).toHaveLength(0);
      expect(g.s.stats.suspicion).toBe(0);
    });
  });

  // ──────────────────────────────────────────────────────────────────────────
  // 2. Mô phỏng 30 ngày có thể tái lập (Deterministic Simulation)
  // ──────────────────────────────────────────────────────────────────────────
  describe('4. Mô phỏng 30 ngày: Tần suất, Cooldown và Chống lặp liên tiếp', () => {
    it('ngày 1 tuyệt đối không bao giờ kích hoạt biến cố', () => {
      const s = createInitialState();
      s.day = 1;
      for (let seed = 0; seed < 50; seed++) {
        const inc = generateDailyIncident(s, seed);
        expect(inc).toBeNull();
      }
    });

    it('mô phỏng 30 ngày với PRNG tái lập: tần suất đạt 1 lần mỗi 3-4 ngày, cooldown >= 2 ngày và không lặp loại liên tiếp', () => {
      // Khởi tạo state ban đầu
      const s = createInitialState();
      const incidentDays: { day: number; type: string }[] = [];

      // Chạy chuỗi 30 ngày bằng PRNG seed cố định
      const simulationSeed = 20261105;
      const rng = createPrng(simulationSeed);

      for (let day = 1; day <= 30; day++) {
        s.day = day;
        s.daily = { ...s.daily, incident: null };

        const inc = generateDailyIncident(s, Math.floor(rng() * 1000000));
        if (inc) {
          s.daily.incident = inc;
          incidentDays.push({ day, type: inc.id });
          s.flags.last_incident_day = day;
          s.flags.last_incident_type = inc.id;
        }
      }

      // 1. Kiểm tra không có biến cố vào Ngày 1
      expect(incidentDays.some((x) => x.day === 1)).toBe(false);

      // 2. Kiểm tra tổng số biến cố trong 30 ngày: mục tiêu trung bình 1 lần mỗi 3-4 ngày (7 đến 10 lần)
      expect(incidentDays.length).toBeGreaterThanOrEqual(7);
      expect(incidentDays.length).toBeLessThanOrEqual(11);

      // 3. Kiểm tra Cooldown: khoảng cách giữa 2 biến cố liên tiếp phải >= 2 ngày
      for (let i = 1; i < incidentDays.length; i++) {
        const delta = incidentDays[i].day - incidentDays[i - 1].day;
        expect(delta).toBeGreaterThanOrEqual(2);
      }

      // 4. Kiểm tra chống lặp loại liên tiếp: 2 biến cố kề nhau không được cùng 1 loại
      for (let i = 1; i < incidentDays.length; i++) {
        expect(incidentDays[i].type).not.toBe(incidentDays[i - 1].type);
      }
    });
  });

  // ──────────────────────────────────────────────────────────────────────────
  // 3. Kiểm tra chuyển ngày, ngủ, reload save và không nhận thưởng trùng
  // ──────────────────────────────────────────────────────────────────────────
  describe('5. Chuyển ngày, ngủ, dọn dẹp trạng thái và chống nhận thưởng trùng', () => {
    it('endDay() dọn dẹp incident, cập nhật last_incident_day và sinh incident mới cho ngày tiếp theo', () => {
      const g = new GameLogic(createInitialState());
      g.s.day = 2;
      g.s.daily.incident = {
        id: 'workshop_blackout',
        title: 'Mất điện xưởng',
        description: 'Chập cầu dao',
        day: 2,
        status: 'resolved',
        choice: 'repair',
        startMinute: 510,
        endMinute: 690,
        rewardClaimed: true,
      };

      // Ngủ kết thúc ngày
      g.endDay(true);

      // Ngày chuyển sang 3
      expect(g.s.day).toBe(3);
      expect(g.s.flags.last_incident_day).toBe(2);
      expect(g.s.flags.last_incident_type).toBe('workshop_blackout');

      // Ngày 3 ngay sau ngày 2 đang trong cooldown (daysSinceLast = 1 < 2), nên incident ngày 3 là null
      expect(g.s.daily.incident).toBeNull();
    });

    it('reload save giữ nguyên trạng thái biến cố của ngày hiện tại, không đổi loại hoặc tạo lại', () => {
      const s = createInitialState();
      s.day = 3;
      s.daily.incident = {
        id: 'cell_inspection',
        title: 'Kiểm tra nội vụ',
        description: 'Dọn dẹp',
        day: 3,
        status: 'active',
        startMinute: 370,
        endMinute: 480,
        rewardClaimed: false,
      };

      const g = new GameLogic(s);
      expect(g.activeIncident?.id).toBe('cell_inspection');
      expect(g.activeIncident?.status).toBe('active');
    });
  });
});
