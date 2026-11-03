import { expect, test } from '@playwright/test';

test('Phase 3: architecture, lighting, weather and iPhone quality throttles', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 956, height: 440 },
    deviceScaleFactor: 1.5,
    hasTouch: true, isMobile: true,
  });
  const page = await context.newPage();
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('#landing-primary')).toBeVisible();
  await page.locator('#landing-primary').click();
  await expect(page.locator('#btn-cc-submit')).toBeVisible();
  await page.locator('#btn-cc-submit').click();
  const skip = page.locator('#btn-cutscene-skip');
  if (await skip.isVisible({ timeout: 3000 }).catch(() => false)) await skip.click();
  await expect(page.locator('#hud-clock')).toBeVisible();

  await expect.poll(() => page.evaluate(() => {
    const d = (window as any).__DITU__;
    let pbr = 0;
    d.app.world.scene.traverse((o: any) => {
      if (o.isMesh && o.material?.roughnessMap && o.material?.bumpMap) pbr++;
    });
    return pbr;
  }), { timeout: 12000 }).toBeGreaterThan(5);

  const architecture = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    const a = d.app.world.architecture;
    return {
      fixtureCount: a.fixtureAnchors.length,
      batchCount: a.instancedBatches,
      instanceCount: a.instanceCount,
      oldColliders: d.app.world.collision.boxes.length,
    };
  });
  expect(architecture).toMatchObject({ fixtureCount: 8 });
  expect(architecture.batchCount).toBeLessThanOrEqual(7);
  expect(architecture.instanceCount).toBeGreaterThan(180);
  expect(architecture.oldColliders).toBeGreaterThan(25);

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.teleport(0, 0);
    d.logic.s.minute = 720;
    d.logic.s.day = 3;
    d.app.world.setQuality('high', d.app.renderer);
    d.app.input.yaw = .55;
    d.app.input.pitch = .2;
    d.app.input.distance = 5;
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshots/phase3-courtyard-noon.png', animations: 'disabled' });

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.s.minute = 1380;
    d.app.world.update(2, 1380, false, false, false, false, 3, 0, 0);
  });
  await page.waitForTimeout(250);
  const night = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    return {
      gateLight: d.app.world.architecture.fixtureMaterial.emissiveIntensity,
      hemisphere: d.app.world.hemi.intensity,
    };
  });
  expect(night.gateLight).toBeGreaterThan(1);
  expect(night.hemisphere).toBeLessThan(.6);
  await page.screenshot({ path: 'screenshots/phase3-courtyard-night.png', animations: 'disabled' });

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.s.day = 2;
    d.logic.s.minute = 1020;
    d.app.world.update(2, 1020, false, false, false, false, 2, 0, 0);
  });
  await page.waitForTimeout(250);
  const wet = await page.evaluate(() => (window as any).__DITU__.app.world.atmosphere.snapshot());
  expect(wet.rainVisible).toBe(true);
  expect(wet.wetness).toBeGreaterThan(.5);
  expect(wet.rainParticles).toBe(420);
  await page.screenshot({ path: 'screenshots/phase3-rain-wet-yard.png', animations: 'disabled' });

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.teleport(20, -2);
    d.logic.s.day = 3;
    d.logic.s.minute = 720;
    d.app.world.update(.3, 720, false, false, false, false, 3, 20, -2);
  });
  await page.waitForTimeout(200);
  expect(await page.evaluate(() => (window as any).__DITU__.app.world.atmosphere.snapshot().dustVisible)).toBe(true);
  await page.screenshot({ path: 'screenshots/phase3-workshop-dust.png', animations: 'disabled' });

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.s.settings.quality = 'low';
    d.app.world.setQuality('low', d.app.renderer);
    window.dispatchEvent(new Event('resize'));
  });
  await page.waitForTimeout(160);
  const low = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    return { dpr: d.app.renderer.getPixelRatio(), fx: d.app.world.atmosphere.snapshot() };
  });
  expect(low.dpr).toBe(1);
  expect(low.fx).toMatchObject({ rainParticles: 0, dustParticles: 0 });
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.s.settings.quality = 'medium';
    d.app.world.setQuality('medium', d.app.renderer);
    window.dispatchEvent(new Event('resize'));
  });
  await page.waitForTimeout(160);
  const medium = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    return { dpr: d.app.renderer.getPixelRatio(), fx: d.app.world.atmosphere.snapshot() };
  });
  expect(medium.dpr).toBeLessThanOrEqual(1.35);
  expect(medium.fx).toMatchObject({ rainParticles: 160, dustParticles: 24 });
  expect(errors).toEqual([]);
  await context.close();
});
