import { expect, test } from '@playwright/test';

test('An Phu cinematic landing, saved progress and upgraded scenery', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 956, height: 440 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('#game-landing')).toBeVisible();
  await expect(page.locator('.landing-wordmark')).toHaveText(/ĐI TÙ ONLINE/);
  await expect(page.locator('#landing-primary')).toBeVisible();
  await page.screenshot({ path: 'screenshots/landing-cinematic-iphone.png', animations: 'disabled' });
  await page.locator('#landing-rules').click();
  await expect(page.locator('#landing-rules-panel')).toBeVisible();
  await page.locator('#landing-close-rules').click();
  await expect(page.locator('#landing-rules-panel')).toBeHidden();

  await page.locator('#landing-primary').click();
  await expect(page.locator('#btn-cc-submit')).toBeVisible();
  await page.locator('#btn-cc-submit').click();
  const skip = page.locator('#btn-cutscene-skip');
  if (await skip.isVisible({ timeout: 3000 }).catch(() => false)) await skip.click();
  await expect(page.locator('#hud-clock')).toBeVisible();
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.s.minute = 550;
    d.teleport(16.5, 1.8);
    d.app.input.yaw = .45;
    d.app.input.pitch = .23;
    d.app.input.distance = 5;
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: 'screenshots/workshop-upgraded-iphone.png', animations: 'disabled' });
  const result = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    let watches = 0, benches = 0, machines = 0, coils = 0, gate = 0;
    d.app.world.scene.traverse((o: any) => {
      if (o.name === 'watchtower.steel.cabin') watches++;
      if (o.name === 'workshop.assembly-bench') benches++;
      if (o.name === 'hydraulic.press') machines++;
      if (o.name === 'perimeter.concertina-wire') coils++;
      if (o.name === 'prison.main-gate.facade') gate++;
    });
    return {
      watches, benches, machines, coils, gate,
      toneMapping: d.app.renderer.toneMapping,
      collisions: d.app.world.collision.boxes.length,
    };
  });
  expect(result.watches).toBeGreaterThanOrEqual(2);
  expect(result.benches).toBeGreaterThanOrEqual(4);
  expect(result.machines).toBeGreaterThanOrEqual(1);
  expect(result.coils).toBe(1);
  expect(result.gate).toBe(1);
  expect(result.toneMapping).toBeGreaterThan(0);
  expect(result.collisions).toBeGreaterThan(25);
  await page.reload();
  await expect(page.locator('#landing-primary')).toContainText('TIẾP TỤC HỒ SƠ');
  await expect(page.locator('#landing-newgame')).toBeVisible();
  await page.locator('#landing-newgame').click();
  await expect(page.locator('#landing-confirm')).toBeVisible();
  await page.locator('#landing-cancel-reset').click();
  await expect(page.locator('#landing-confirm')).toBeHidden();
  await page.screenshot({ path: 'screenshots/landing-continue-save-iphone.png', animations: 'disabled' });
  await page.locator('#landing-primary').click();
  await expect(page.locator('#game-landing')).toHaveCount(0);
  await expect(page.locator('#hud-clock')).toBeVisible();
  expect(errors).toEqual([]);
  await context.close();
});
