import { expect, test } from '@playwright/test';

test('chế độ FPS (góc nhìn thứ nhất) và góc nhìn thứ ba trên iPhone landscape 956x440', async ({ browser }) => {
  const ctx = await browser.newContext({
    viewport: { width: 956, height: 440 },
    hasTouch: true,
    isMobile: true,
  });
  const page = await ctx.newPage();
  await page.goto('/');

  // 1. Vào game từ màn hình bắt đầu
  await expect(page.locator('#landing-primary')).toBeVisible();
  await page.locator('#landing-primary').click();

  const ccBtn = page.locator('#btn-cc-submit');
  if (await ccBtn.isVisible({ timeout: 2500 }).catch(() => false)) {
    await ccBtn.click();
    const skipCutscene = page.locator('#btn-cutscene-skip');
    if (await skipCutscene.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skipCutscene.click();
    }
  }

  await expect(page.locator('#hud-clock')).toBeVisible();

  // 2. Kiểm tra trạng thái mặc định (Góc nhìn thứ ba - Third person)
  const thirdState = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    return {
      cameraMode: d.logic.s.settings.cameraMode ?? 'third',
      rigVisible: d.app.playerRig.root.visible,
      camY: d.app.tpCam.cam.position.y,
      camZ: d.app.tpCam.cam.position.z,
    };
  });

  expect(thirdState.cameraMode).toBe('third');
  expect(thirdState.rigVisible).toBe(true);
  expect(thirdState.camY).toBeGreaterThan(2.0);

  // Kiểm tra các phần tử HUD & điều khiển hiển thị đầy đủ
  await expect(page.locator('#hud-quest-bar')).toBeVisible();
  await expect(page.locator('#joy-zone')).toBeVisible();
  await expect(page.locator('#btn-interact')).toBeVisible();

  // 3. Mở Menu -> Cài đặt & Âm thanh -> Bật Góc nhìn thứ nhất (FPS)
  await page.locator('#btn-menu').click();
  await expect(page.locator('[data-menu="pause"]')).toBeVisible();
  await page.locator('[data-menu="pause"]').click();

  const selectCamMode = page.locator('#sel-camera-mode');
  await expect(selectCamMode).toBeVisible();
  await selectCamMode.selectOption('first');

  // Đóng modal cài đặt
  await page.locator('.modal [data-close]').first().click();
  await page.waitForTimeout(200);

  // 4. Kiểm tra góc nhìn thứ nhất (First person):
  // - Camera ở đúng vị trí mắt (~1.5 m)
  // - Rig người chơi và nhãn "BẠN" bị ẩn hoàn toàn
  const firstState = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    const p = d.logic.s.player;
    const cam = d.app.tpCam.cam;
    return {
      cameraMode: d.logic.s.settings.cameraMode,
      rigVisible: d.app.playerRig.root.visible,
      labelVisible: d.app.playerRig.labelSprite ? d.app.playerRig.labelSprite.visible : false,
      camX: cam.position.x,
      camY: cam.position.y,
      camZ: cam.position.z,
      playerX: p.x,
      playerZ: p.z,
    };
  });

  expect(firstState.cameraMode).toBe('first');
  expect(firstState.rigVisible).toBe(false);
  expect(firstState.labelVisible).toBe(false);
  // Camera nằm đúng tại mắt nhân vật cao 1.5m
  expect(firstState.camY).toBeCloseTo(1.5, 1);
  expect(firstState.camX).toBeCloseTo(firstState.playerX, 1);
  expect(firstState.camZ).toBeCloseTo(firstState.playerZ, 1);

  // 5. Kiểm tra tương tác (Interact) và di chuyển vẫn hoạt động bình thường trong FPS
  // Tương tác với giường ở ngay vị trí xuất phát
  await expect(page.locator('#hud-prompt')).toBeVisible();
  const promptText = await page.locator('#hud-prompt').textContent();
  expect(promptText).toBeTruthy();

  // Nhấn nút tương tác #btn-interact
  await page.locator('#btn-interact').click();
  await page.waitForTimeout(250);

  // Kiểm tra di chuyển bằng phím trong FPS
  const posBefore = await page.evaluate(() => {
    const p = (window as any).__DITU__.logic.s.player;
    return { x: p.x, z: p.z };
  });

  await page.keyboard.down('KeyW');
  await page.waitForTimeout(400);
  await page.keyboard.up('KeyW');

  const posAfter = await page.evaluate(() => {
    const p = (window as any).__DITU__.logic.s.player;
    return { x: p.x, z: p.z };
  });

  // Người chơi di chuyển được trong FPS
  const moved = Math.hypot(posAfter.x - posBefore.x, posAfter.z - posBefore.z);
  expect(moved).toBeGreaterThan(0.01);

  // 6. Chuyển lại góc nhìn thứ ba (Third person)
  await page.locator('#btn-menu').click();
  await page.locator('[data-menu="pause"]').click();
  await page.locator('#sel-camera-mode').selectOption('third');
  await page.locator('.modal [data-close]').first().click();
  await page.waitForTimeout(200);

  // Kiểm tra khôi phục góc nhìn thứ ba:
  // - Rig người chơi hiện lại
  // - Camera lùi ra sau lưng (y > 2.0, distance > 2)
  const restoredState = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    return {
      cameraMode: d.logic.s.settings.cameraMode,
      rigVisible: d.app.playerRig.root.visible,
      camY: d.app.tpCam.cam.position.y,
    };
  });

  expect(restoredState.cameraMode).toBe('third');
  expect(restoredState.rigVisible).toBe(true);
  expect(restoredState.camY).toBeGreaterThan(2.0);

  await ctx.close();
});
