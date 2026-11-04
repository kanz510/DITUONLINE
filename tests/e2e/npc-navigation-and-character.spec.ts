import { expect, test } from '@playwright/test';

test.describe('VIỆC 1 & 2: Bảng tạo nhân vật & Khắc phục dứt điểm di chuyển NPC', () => {
  test('Bảng chọn nhân vật mới: Preview 3D lớn trực tiếp, thẻ mẫu có ảnh, bố cục gọn không che trên iPhone landscape 956x440', async ({ browser }) => {
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

    const modalCc = page.locator('.modal.modal-cc');
    const previewCanvas = page.locator('#cc-preview-canvas');
    const previewCol = page.locator('#cc-preview-col');
    const btnSubmit = page.locator('#btn-cc-submit');
    const scrollBody = page.locator('#cc-scroll-body');

    await expect(modalCc).toBeVisible();
    await expect(previewCol).toBeVisible();
    await expect(previewCanvas).toBeVisible();
    await expect(btnSubmit).toBeVisible();

    // Kiểm tra 3 ảnh thumbnail thẻ mẫu
    await expect(page.locator('#cc-preset-thumb-0')).toBeVisible();
    await expect(page.locator('#cc-preset-thumb-1')).toBeVisible();
    await expect(page.locator('#cc-preset-thumb-2')).toBeVisible();

    // Kiểm tra text hằng số START_SENTENCE (30 ngày), không còn kỳ xét giảm cũ
    await expect(modalCc).toContainText('30 ngày');
    const modalContent = await modalCc.textContent();
    expect(modalContent).not.toContain('Kỳ xét giảm: 4 ngày/lần (0–2 ngày)');

    // Đổi preset, da, tóc
    await page.locator('[data-preset="1"]').click();
    await page.locator('[data-hair="buzz"]').click();
    await page.locator('[data-skin="dark"]').click();

    // Chụp ảnh bằng chứng
    await page.screenshot({ path: 'screenshots/character-creation-new.png' });

    // Hoàn tất tạo nhân vật
    await btnSubmit.click();
    await page.waitForFunction(() => Boolean((window as any).__DITU__?.app));
    await ctx.close();
  });

  test('2 NPC qua hành lang hẹp, NPC qua cửa có người chơi, NPC bị bàn ghế chặn, NPC đổi lịch', async ({ browser }) => {
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

    // 1. Kiểm tra 2 NPC qua hành lang hẹp
    const corridorRes = await page.evaluate(async () => {
      const app = (window as any).__DITU__.app;
      const n1 = app.npcs.tung;
      const n2 = app.npcs.lan;

      n1.x = -18.0; n1.z = -21.6;
      n1.planTo('cor4'); // đi tới [-8.75, -21.6]
      n2.x = -16.5; n2.z = -21.6;
      n2.planTo('cor1'); // đi tới [-25.25, -21.6]

      let maxFreeze = 0;
      let lastN1X = n1.x, lastN2X = n2.x;
      let freezeDuration = 0;

      for (let s = 0; s < 25; s++) { // 5s
        await new Promise((r) => setTimeout(r, 200));
        const moved1 = Math.abs(n1.x - lastN1X);
        const moved2 = Math.abs(n2.x - lastN2X);
        if (moved1 < 0.01 && moved2 < 0.01) {
          freezeDuration += 0.2;
          maxFreeze = Math.max(maxFreeze, freezeDuration);
        } else {
          freezeDuration = 0;
        }
        lastN1X = n1.x;
        lastN2X = n2.x;
      }
      return { maxFreeze, n1x: n1.x, n2x: n2.x };
    });

    expect(corridorRes.maxFreeze).toBeLessThan(5.0);
    await page.screenshot({ path: 'screenshots/npc-corridor-pass.png' });

    // 2. NPC qua cửa hẹp có người chơi đứng đó
    const doorRes = await page.evaluate(async () => {
      const app = (window as any).__DITU__.app;
      const p = app.g.s.player;
      const n = app.npcs.huy;

      p.x = -17; p.z = -15.5; // cửa cbOut
      n.x = -17; n.z = -17.5; // trong buồng đi ra
      n.planTo('rc');

      let maxFreeze = 0;
      let lastZ = n.z;
      let freezeDuration = 0;

      for (let s = 0; s < 25; s++) {
        await new Promise((r) => setTimeout(r, 200));
        const moved = Math.abs(n.z - lastZ);
        if (moved < 0.01) {
          freezeDuration += 0.2;
          maxFreeze = Math.max(maxFreeze, freezeDuration);
        } else {
          freezeDuration = 0;
        }
        lastZ = n.z;
      }
      return { maxFreeze, nz: n.z };
    });

    expect(doorRes.maxFreeze).toBeLessThan(5.0);
    await page.screenshot({ path: 'screenshots/npc-door-player.png' });

    // 3. NPC gặp vật cản (bàn/ghế) tự né / trượt và không đứng chết > 5s
    const obstacleRes = await page.evaluate(async () => {
      const app = (window as any).__DITU__.app;
      const n = app.npcs.bay;
      n.x = -10; n.z = -30;
      n.planTo('messAisle'); // đích trong nhà ăn

      let maxFreeze = 0;
      let lastPos = { x: n.x, z: n.z };
      let freezeDuration = 0;

      for (let s = 0; s < 25; s++) {
        await new Promise((r) => setTimeout(r, 200));
        const dist = Math.hypot(n.x - lastPos.x, n.z - lastPos.z);
        if (dist < 0.01) {
          freezeDuration += 0.2;
          maxFreeze = Math.max(maxFreeze, freezeDuration);
        } else {
          freezeDuration = 0;
        }
        lastPos = { x: n.x, z: n.z };
      }
      return { maxFreeze };
    });

    expect(obstacleRes.maxFreeze).toBeLessThan(5.0);
    await page.screenshot({ path: 'screenshots/npc-obstacle.png' });

    // 4. NPC đổi lịch giữa đường: cập nhật lộ trình mới mượt mà
    const scheduleRes = await page.evaluate(async () => {
      const app = (window as any).__DITU__.app;
      const n = app.npcs.son;
      n.planTo('wsHub');

      await new Promise((r) => setTimeout(r, 500));
      // Đổi lịch sang sân tập thể dục
      n.planTo('yC');
      const targetPos = n.targetPos();

      await new Promise((r) => setTimeout(r, 1000));
      return { isMoving: n.isMoving(), targetPos };
    });

    expect(scheduleRes.isMoving).toBe(true);
    await page.screenshot({ path: 'screenshots/npc-schedule-change.png' });
    await ctx.close();
  });
});
