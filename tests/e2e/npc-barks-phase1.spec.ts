import { expect, test } from '@playwright/test';

test.describe('ĐỢT 1: NPC phản ứng tự nhiên với người chơi, quan hệ và lựa chọn quá khứ', () => {
  test('Cán bộ Lan/Tùng nhắc nhở khi Minh chạy trong hành lang buồng giam (không ghi vi phạm)', async ({ browser }) => {
    const ctx = await browser.newContext({
      viewport: { width: 956, height: 440 },
      hasTouch: true,
      isMobile: true,
    });
    const page = await ctx.newPage();
    await page.goto('/');

    await expect(page.locator('#landing-primary')).toBeVisible();
    await page.locator('#landing-primary').click();
    await expect(page.locator('#btn-cc-submit')).toBeVisible();
    await page.locator('#btn-cc-submit').click();

    await page.waitForFunction(() => Boolean((window as any).__DITU__?.app));

    const reminderResult = await page.evaluate(async () => {
      const app = (window as any).__DITU__.app;
      const g = (window as any).__DITU__.logic;

      // Đặt người chơi và Quản giáo Lan ở hành lang buồng giam lúc 06:10 sáng (370 phút)
      g.s.minute = 370;
      g.s.player.x = -17.0;
      g.s.player.z = -21.6;

      const guard = app.npcs.lan;
      guard.def.schedule = [{ from: 0, to: 1440, node: 'cor2', pos: [-14.0, -21.6], rot: -Math.PI / 2, pose: 'stand', activity: 'Trực hành lang buồng giam' }];
      guard.snapToSchedule(370);
      guard.x = -14.0;
      guard.z = -21.6;
      guard.rot = -Math.PI / 2;
      guard.path = [];

      const vioBefore = g.s.violations.length;

      // Giả lập người chơi chạy sprint trong hành lang buồng giam (keys là Set<string>)
      app.input.keys.add('KeyW');
      app.input.keys.add('ShiftLeft');
      app.guardSprintWarnCooldown = 0;

      // Chạy 5 frame bước mô phỏng
      for (let i = 0; i < 5; i++) {
        app.step(0.03);
      }

      app.input.keys.delete('KeyW');
      app.input.keys.delete('ShiftLeft');

      const vioAfter = g.s.violations.length;

      return {
        barkText: guard.currentBark,
        bubbleTimer: guard.bubbleTimer,
        vioDelta: vioAfter - vioBefore,
        guardCooldown: app.guardSprintWarnCooldown,
      };
    });

    expect(reminderResult.barkText).not.toBeNull();
    expect(reminderResult.barkText).toMatch(/hành lang|chạy|buồng giam|đi bộ/i);
    expect(reminderResult.vioDelta).toBe(0); // Tuyệt đối không tự tạo hình phạt mới
    expect(reminderResult.guardCooldown).toBeGreaterThan(0);
  });

  test('Cán bộ nhắc nhở khi Minh lảng vảng gần cửa xưởng đang đóng (không ghi vi phạm)', async ({ browser }) => {
    const ctx = await browser.newContext({
      viewport: { width: 956, height: 440 },
      hasTouch: true,
      isMobile: true,
    });
    const page = await ctx.newPage();
    await page.goto('/');

    await expect(page.locator('#landing-primary')).toBeVisible();
    await page.locator('#landing-primary').click();
    await expect(page.locator('#btn-cc-submit')).toBeVisible();
    await page.locator('#btn-cc-submit').click();

    await page.waitForFunction(() => Boolean((window as any).__DITU__?.app));

    const loiterResult = await page.evaluate(async () => {
      const app = (window as any).__DITU__.app;
      const g = (window as any).__DITU__.logic;

      // Lúc 07:15 sáng (435 phút), đã điểm danh xong, xưởng đang đóng cửa (mở lúc 08:00)
      g.s.daily.rollcall = 'ok';
      g.s.minute = 435;

      // Đặt người chơi đứng trước cửa xưởng (ix: 10.8, iz: -2.75)
      g.s.player.x = 10.8;
      g.s.player.z = -2.75;

      // Đặt Cán bộ Tùng ở gần cửa xưởng quan sát người chơi
      const guard = app.npcs.tung;
      guard.x = 8.5;
      guard.z = -2.75;
      guard.faceToward(g.s.player.x, g.s.player.z);

      const vioBefore = g.s.violations.length;
      app.guardLoiterWarnCooldown = 0;

      for (let i = 0; i < 5; i++) {
        app.step(0.03);
      }

      const vioAfter = g.s.violations.length;

      return {
        barkText: guard.currentBark,
        vioDelta: vioAfter - vioBefore,
        guardLoiterCooldown: app.guardLoiterWarnCooldown,
      };
    });

    expect(loiterResult.barkText).not.toBeNull();
    expect(loiterResult.barkText).toMatch(/đóng|mở|sân|lảng vảng/i);
    expect(loiterResult.vioDelta).toBe(0); // Không tạo hình phạt mới
    expect(loiterResult.guardLoiterCooldown).toBeGreaterThan(0);
  });

  test('Cơ chế chống nói đè và ưu tiên lời thoại: NPC không bật bong bóng đồng thời', async ({ browser }) => {
    const ctx = await browser.newContext({
      viewport: { width: 956, height: 440 },
      hasTouch: true,
      isMobile: true,
    });
    const page = await ctx.newPage();
    await page.goto('/');

    await expect(page.locator('#landing-primary')).toBeVisible();
    await page.locator('#landing-primary').click();
    await expect(page.locator('#btn-cc-submit')).toBeVisible();
    await page.locator('#btn-cc-submit').click();

    await page.waitForFunction(() => Boolean((window as any).__DITU__?.app));

    const overlapResult = await page.evaluate(async () => {
      const app = (window as any).__DITU__.app;
      const g = (window as any).__DITU__.logic;

      g.s.minute = 850; // Giờ tự do buổi chiều
      g.s.player.x = -15.0;
      g.s.player.z = 0;

      // Đặt 2 NPC ở gần nhau cạnh người chơi
      const n1 = app.npcs.bay;
      const n2 = app.npcs.huy;
      n1.x = -14.0; n1.z = 0; n1.barkTimer = 0;
      n2.x = -13.5; n2.z = 0.5; n2.barkTimer = 0;

      app.globalBarkCooldown = 0;

      // Chạy 1 frame step
      app.step(0.03);

      const n1Speaking = n1.bubbleTimer > 0;
      const n2Speaking = n2.bubbleTimer > 0;

      return {
        n1Speaking,
        n2Speaking,
        bothSpeaking: n1Speaking && n2Speaking,
        globalCooldown: app.globalBarkCooldown,
      };
    });

    expect(overlapResult.bothSpeaking).toBe(false); // Không bao giờ nói đè cùng lúc
    expect(overlapResult.globalCooldown).toBeGreaterThan(0);
  });
});
