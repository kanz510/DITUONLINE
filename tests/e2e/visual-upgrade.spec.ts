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
      if (o.name === 'hydraulic.press' || (o.userData?.assetLoaded && o.userData?.assetPath === 'special/workshop-drill-press.glb')) machines++;
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
  // Retain checks for the batch-1 scenery GLBs, but officers must NEVER
  // load Kenney Blocky. Check both immediately and after asynchronous loads.
  const inspectVisuals = () => page.evaluate(() => {
    const d = (window as any).__DITU__;
    const kinds = new Set([
      'kitchen-fridge', 'kitchen-sink', 'kitchen-stove',
      'visit-sofa', 'visit-side-table', 'garden-pot',
      'yard-bush', 'yard-flower', 'yard-rock',
      'park-ambulance', 'park-police', 'park-van', 'park-delivery',
    ]);
    let loaded = 0;
    d.app.world.scene.traverse((o: any) => {
      if (o.name.startsWith('prop.') &&
          kinds.has(o.name.slice(5)) && o.userData.assetLoaded) loaded++;
    });
    const officers = (['lan', 'tung', 'phuc'] as const).map((id) => {
      const rig = d.app.npcs[id].rig;
      const skull = rig.head.children.find((o: any) => o.isMesh &&
        o.geometry?.type === 'SphereGeometry' &&
        Math.abs(o.geometry.parameters.radius - 0.275) < 0.001);
      return {
        id, roundHead: Boolean(skull), chibiVisible: rig.body.visible,
        nameHeight: rig.labelSprite?.position.y ?? 0,
        blocky: Boolean(rig.root.getObjectByName('guard.kenney.j')),
      };
    });
    return { loaded, officers, chibiPlayerVisible: d.app.playerRig.body.visible };
  });
  const expectedOfficers = (['lan', 'tung', 'phuc'] as const).map(id => ({
    id, roundHead: true, chibiVisible: true, nameHeight: 2.05, blocky: false,
  }));
  await expect.poll(inspectVisuals, { timeout: 20000 }).toEqual({
    loaded: 15, officers: expectedOfficers, chibiPlayerVisible: true,
  });
  await page.waitForTimeout(1500);
  expect(await inspectVisuals()).toEqual({
    loaded: 15, officers: expectedOfficers, chibiPlayerVisible: true,
  });

  // Five original phase-2 GLBs must load into real Three.js objects, not merely exist on disk.
  await expect.poll(() => page.evaluate(() => {
    const scene = (window as any).__DITU__.app.world.scene;
    const result = { bus: false, bed: false, drill: false, phones: false, kit: false, phoneCount: 0 };
    scene.traverse((o: any) => {
      if (o.userData?.assetLoaded && o.userData?.assetPath === 'special/prison-transfer-bus.glb') result.bus = true;
      if (o.userData?.assetLoaded && o.userData?.assetPath === 'special/hospital-bed.glb') result.bed = true;
      if (o.userData?.assetLoaded && o.userData?.assetPath === 'special/workshop-drill-press.glb') result.drill = true;
      if (o.userData?.phase2PhonesLoaded) result.phones = true;
      if (o.userData?.phase2MedkitLoaded) result.kit = true;
      if (o.name === 'phase2.visitation-phone') result.phoneCount++;
    });
    return result;
  }), { timeout: 25000 }).toEqual({
    bus: true, bed: true, drill: true, phones: true, kit: true, phoneCount: 3,
  });

  // Five original GLBs (cell, clinic, mess, office) must load into real Three.js objects.
  await expect.poll(() => page.evaluate(() => {
    const scene = (window as any).__DITU__.app.world.scene;
    const res = { toilet: false, locker: false, trolley: false, trays: false, radio: false, trayCount: 0 };
    scene.traverse((o: any) => {
      if (o.userData?.assetLoaded && o.userData?.assetPath === 'original/cell_sanitation_unit_blendstra.glb') res.toilet = true;
      if (o.userData?.assetLoaded && o.userData?.assetPath === 'original/single_prison_locker.glb') res.locker = true;
      if (o.userData?.assetLoaded && o.userData?.assetPath === 'original/infirmary_medical_trolley.glb') res.trolley = true;
      if (o.userData?.traysLoaded) res.trays = true;
      if (o.userData?.radioLoaded) res.radio = true;
      if (o.name === 'original.canteen_meal_tray') res.trayCount++;
    });
    return res;
  }), { timeout: 25000 }).toEqual({
    toilet: true, locker: true, trolley: true, trays: true, radio: true, trayCount: 8,
  });
  // Same view size as iPhone 16 Pro Max landscape; screenshots only after assets loaded.
  const newLocations = [
    { x: 21.2, z: 16.3, name: 'phase2-prison-transfer-bus.png' },
    { x: 23.1, z: -25.4, name: 'phase2-hospital-bed.png' },
    { x: -24.0, z: -8.5, name: 'phase2-visiting-phone.png' },
    { x: 24.9, z: 3.0, name: 'phase2-workshop-drill.png' },
  ];
  for (const site of newLocations) {
    await page.evaluate(({ x, z }) => {
      const d = (window as any).__DITU__;
      d.teleport(x, z);
      d.app.input.yaw = 0.3;
      d.app.input.pitch = 0.22;
      d.app.input.distance = 5.2;
    }, site);
    await page.waitForTimeout(220);
    await page.screenshot({ path: 'screenshots/' + site.name, animations: 'disabled' });
  }

  const locations = [
    { x: 4.1, z: -27.0, name: 'phase1-nha-an.png' },
    { x: -24.0, z: -8.6, name: 'phase1-tham-gap.png' },
    { x: -4, z: 14.8, name: 'phase1-quan-giao-chibi.png' },
    { x: 24.5, z: -14.2, name: 'phase1-xe-y-te.png' },
    { x: 22.0, z: 16.4, name: 'phase1-xe-pham-nhan.png' },
  ];
  for (const site of locations) {
    await page.evaluate(({ x, z }) => {
      const d = (window as any).__DITU__;
      d.teleport(x, z);
      d.app.input.yaw = .3;
      d.app.input.pitch = .2;
      d.app.input.distance = 5.4;
    }, site);
    await page.waitForTimeout(350);
    await page.screenshot({ path: 'screenshots/' + site.name, animations: 'disabled' });
  }

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
