import { expect, test } from '@playwright/test';

test('Ghế nhà tù stylized (InstancedMesh) tải đúng, đổ bóng và hiển thị trên iPhone landscape', async ({ browser }) => {
  test.setTimeout(120000);
  const context = await browser.newContext({
    viewport: { width: 956, height: 440 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1'
  });

  const page = await context.newPage();
  const errors: string[] = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto('/');

  // Landing screen
  const primaryBtn = page.locator('#landing-primary');
  await expect(primaryBtn).toBeVisible();
  await primaryBtn.click({ force: true });

  const ccBtn = page.locator('#btn-cc-submit');
  if (await ccBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
    await ccBtn.click();
    const skip = page.locator('#btn-cutscene-skip');
    if (await skip.isVisible({ timeout: 3000 }).catch(() => false)) await skip.click();
  }

  await expect(page.locator('#hud-clock')).toBeVisible();

  // Đợi assets và instanced mesh tải xong
  await page.waitForTimeout(2500);

  // Kiểm tra instanced mesh ghế nhà tù trong Three.js scene
  const chairInfo = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    const scene = d.app.world.scene;
    const renderer = d.app.renderer;

    let instancedChair: any = null;
    scene.traverse((o: any) => {
      if (o.name === 'instanced.prison_chair_stylized') instancedChair = o;
    });

    if (!instancedChair) return null;

    const mat = instancedChair.material;

    // Đưa camera tới Buồng giam để quan sát ghế buồng giam
    d.teleport(-8.75, -28.2);
    d.app.input.yaw = Math.PI; // Nhìn về phía ghế tại z = -30.8
    d.app.input.pitch = 0.28;
    d.app.input.distance = 2.4;

    renderer.info.reset();
    renderer.render(scene, d.app.tpCam.cam);

    return {
      name: instancedChair.name,
      isInstancedMesh: instancedChair.isInstancedMesh,
      instanceCount: instancedChair.count,
      castShadow: instancedChair.castShadow,
      receiveShadow: instancedChair.receiveShadow,
      hasTexture: !!mat?.map,
      roughness: mat?.roughness,
      metalness: mat?.metalness,
      drawCalls: renderer.info.render.calls,
      triangles: renderer.info.render.triangles
    };
  });

  expect(chairInfo).not.toBeNull();
  expect(chairInfo!.isInstancedMesh).toBe(true);
  expect(chairInfo!.instanceCount).toBe(6);
  expect(chairInfo!.castShadow).toBe(true);
  expect(chairInfo!.receiveShadow).toBe(true);
  expect(chairInfo!.hasTexture).toBe(true);

  // Đợi 1 frame để render ổn định
  await page.waitForTimeout(600);

  // Chụp ảnh Playwright iPhone landscape làm bằng chứng kiểm thử
  const screenshotPath = 'screenshots/chair_in_gameplay_iphone.png';
  await page.screenshot({ path: screenshotPath });

  // Đo hiệu năng FPS trong game
  const perf = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    const frames = 15;
    const t0 = performance.now();
    for (let i = 0; i < frames; i++) {
      d.app.renderer.render(d.app.world.scene, d.app.tpCam.cam);
    }
    const elapsed = performance.now() - t0;
    return {
      fps: Math.max(1, Math.round(frames / (elapsed / 1000))),
      frameTimeMs: elapsed / frames
    };
  });

  expect(perf.frameTimeMs).toBeGreaterThan(0);
  expect(perf.frameTimeMs).toBeLessThan(500);
  expect(errors).toEqual([]);

  await context.close();
});
