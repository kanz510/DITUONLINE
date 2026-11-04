import { expect, test } from '@playwright/test';

test.describe('ĐỢT 3: Biến cố sinh hoạt có kiểm soát (Controlled Prison Incidents)', () => {
  test('Biến cố A: Mất điện xưởng (workshop_blackout) - Khắc phục sự cố, nhận thưởng cải tạo và quan hệ cán bộ', async ({ browser }) => {
    const ctx = await browser.newContext({
      viewport: { width: 956, height: 440 },
      hasTouch: true,
      isMobile: true,
    });
    const page = await ctx.newPage();
    await page.addInitScript(() => {
      try {
        localStorage.clear();
        sessionStorage.clear();
      } catch {}
    });
    await page.goto('/');

    await expect(page.locator('#landing-primary')).toBeVisible();
    await page.locator('#landing-primary').click();
    await expect(page.locator('#btn-cc-submit')).toBeVisible();
    await page.locator('#btn-cc-submit').click();

    await page.waitForFunction(() => Boolean((window as any).__DITU__?.app));

    const result = await page.evaluate(async () => {
      const app = (window as any).__DITU__.app;
      const g = (window as any).__DITU__.logic;

      // Thiết lập ngày 3, giờ ca sáng (09:00 = 540 phút)
      g.s.day = 3;
      g.s.minute = 540;
      g.s.stats.stamina = 80;
      g.s.profile.origin = 'mechanic'; // Kỹ năng Thợ máy

      // Khởi tạo biến cố Mất điện xưởng
      g.s.daily.incident = {
        id: 'workshop_blackout',
        title: 'Mất điện xưởng mộc',
        description: 'Chập cầu dao xưởng, máy cưa ngừng chạy',
        day: 3,
        status: 'active',
        startMinute: 510,
        endMinute: 690,
        rewardClaimed: false,
      };

      const activeBefore = g.activeIncident?.id;
      const initialReform = g.s.stats.reform;
      const initialTungRel = g.rel('tung');
      const initialXp = g.s.progression.xp;

      // Sửa cầu dao
      const resolveRes = g.resolveIncident('repair');

      // Thử nhận lại lần 2
      const duplicateTry = g.resolveIncident('repair');

      return {
        activeBefore,
        resolveOk: resolveRes.ok,
        duplicateOk: duplicateTry.ok,
        duplicateReason: duplicateTry.reason,
        reformDelta: g.s.stats.reform - initialReform,
        tungRelDelta: g.rel('tung') - initialTungRel,
        xpDelta: g.s.progression.xp - initialXp,
        incidentStatus: g.s.daily.incident?.status,
        rewardClaimed: g.s.daily.incident?.rewardClaimed,
      };
    });

    expect(result.activeBefore).toBe('workshop_blackout');
    expect(result.resolveOk).toBe(true);
    expect(result.duplicateOk).toBe(false);
    expect(result.duplicateReason).toContain('đã nhận thưởng');
    expect(result.reformDelta).toBe(1);
    expect(result.tungRelDelta).toBe(5);
    expect(result.xpDelta).toBe(30);
    expect(result.incidentStatus).toBe('resolved');
    expect(result.rewardClaimed).toBe(true);

    await ctx.close();
  });

  test('Biến cố B & C: Mưa lớn (tập thể lực trong buồng giam) & Kiểm tra nội vụ trên iPhone landscape 956x440', async ({ browser }) => {
    const ctx = await browser.newContext({
      viewport: { width: 956, height: 440 },
      hasTouch: true,
      isMobile: true,
    });
    const page = await ctx.newPage();
    await page.addInitScript(() => {
      try {
        localStorage.clear();
        sessionStorage.clear();
      } catch {}
    });
    await page.goto('/');

    await expect(page.locator('#landing-primary')).toBeVisible();
    await page.locator('#landing-primary').click();
    await expect(page.locator('#btn-cc-submit')).toBeVisible();
    await page.locator('#btn-cc-submit').click();

    await page.waitForFunction(() => Boolean((window as any).__DITU__?.app));

    // 1. Kiểm tra biến cố Mưa lớn: Cho phép tập thể lực trong buồng giam
    const rainResult = await page.evaluate(async () => {
      const app = (window as any).__DITU__.app;
      const g = (window as any).__DITU__.logic;

      g.s.day = 4;
      g.s.minute = 840; // 14:00 chiều
      g.s.stats.stamina = 70;
      g.s.stats.morale = 50;
      const initialFitness = g.s.skills.fitness;

      g.s.daily.incident = {
        id: 'heavy_rain',
        title: 'Mưa dông lớn',
        description: 'Mưa rào lớn khiến sân trại ướt sũng',
        day: 4,
        status: 'active',
        startMinute: 780,
        endMinute: 1020,
        rewardClaimed: false,
      };

      const initialStamina = g.s.stats.stamina;
      const initialMorale = g.s.stats.morale;

      // Thực hiện bài tập trong buồng giam
      const workoutRes = g.resolveIncident('indoor_workout');

      return {
        workoutOk: workoutRes.ok,
        staminaDelta: g.s.stats.stamina - initialStamina,
        moraleDelta: g.s.stats.morale - initialMorale,
        fitnessDelta: g.s.skills.fitness - initialFitness,
      };
    });

    expect(rainResult.workoutOk).toBe(true);
    expect(rainResult.staminaDelta).toBe(-18);
    expect(rainResult.moraleDelta).toBe(16);
    expect(rainResult.fitnessDelta).toBe(1);

    // 2. Kiểm tra biến cố Kiểm tra nội vụ: Dọn dẹp buồng nhận thưởng, không vi phạm
    const inspectionResult = await page.evaluate(async () => {
      const app = (window as any).__DITU__.app;
      const g = (window as any).__DITU__.logic;

      g.s.day = 6;
      g.s.minute = 380; // 06:20 sáng
      g.s.daily.rollcall = 'ok';
      g.s.stats.reform = 50;
      const initialXp = g.s.progression.xp;

      g.s.daily.incident = {
        id: 'cell_inspection',
        title: 'Kiểm tra nội vụ buồng giam',
        description: 'Quản giáo Lan thông báo kiểm tra trật tự nội vụ buồng giam',
        day: 6,
        status: 'active',
        startMinute: 370,
        endMinute: 480,
        rewardClaimed: false,
      };

      // Dọn dẹp buồng
      const tidyRes = g.resolveIncident('tidy');
      const reformAfter = g.s.stats.reform;
      const xpAfter = g.s.progression.xp;

      // Dịch chuyển qua 08:00
      g.advanceTo(500);

      return {
        tidyOk: tidyRes.ok,
        reformDelta: reformAfter - 50,
        xpDelta: xpAfter - initialXp,
        violationsCount: g.s.violations.length,
        suspicion: g.s.stats.suspicion,
        incidentStatus: g.s.daily.incident?.status,
      };
    });

    expect(inspectionResult.tidyOk).toBe(true);
    expect(inspectionResult.reformDelta).toBe(1);
    expect(inspectionResult.xpDelta).toBe(15);
    expect(inspectionResult.violationsCount).toBe(0);
    expect(inspectionResult.suspicion).toBe(0);
    expect(inspectionResult.incidentStatus).toBe('resolved');

    await ctx.close();
  });
});
