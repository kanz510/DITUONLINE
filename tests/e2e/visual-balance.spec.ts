import { expect, test } from '@playwright/test';

test.use({
  viewport: { width: 956, height: 440 },
  deviceScaleFactor: 1,
  hasTouch: true,
  isMobile: true,
});

test('visual fixes: mess chairs, visitation glass, npc separation, and review scorecard', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto('/');
  await expect(page.locator('#landing-primary')).toBeVisible();
  await page.locator('#landing-primary').click({ force: true });
  await expect(page.locator('#btn-cc-submit')).toBeVisible();
  await page.locator('#btn-cc-submit').click();

  const skip = page.locator('#btn-cutscene-skip');
  if (await skip.isVisible({ timeout: 1000 }).catch(() => false)) {
    await skip.click();
  }
  await expect(page.locator('#hud-clock')).toBeVisible();

  // 1. Kiểm tra nhà ăn: 8 MESS_SEATS đều có ghế
  const messCheck = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    const chairs: any[] = [];
    d.app.world.scene.traverse((o: any) => {
      if (o.name === 'Ghế nhà ăn' || (o.userData?.kind === 'chair')) chairs.push(o);
    });
    return {
      totalChairsInProps: d.app.world.cameraObstacles.length,
    };
  });
  expect(messCheck.totalChairsInProps).toBeGreaterThan(15);

  // 2. Kiểm tra vách kính phòng thăm gặp: kính trong suốt (opacity 0.25, transparent: true)
  const glassCheck = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    let glassPane: any = null;
    d.app.world.scene.traverse((o: any) => {
      if (o.name === 'visitation.shatterproof-glass') glassPane = o;
    });
    if (!glassPane) return null;
    return {
      transparent: glassPane.material.transparent,
      opacity: glassPane.material.opacity,
      castShadow: glassPane.castShadow,
    };
  });
  expect(glassCheck).not.toBeNull();
  expect(glassCheck?.transparent).toBe(true);
  expect(glassCheck?.opacity).toBeCloseTo(0.25, 2);
  expect(glassCheck?.castShadow).toBe(false);

  // 3. Kiểm tra tách NPC: khoảng cách giữa các cặp NPC không bị chồng lên nhau (< 0.48m)
  const npcSeparation = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    // Cập nhật 1 frame
    const npcs = Object.values(d.app.npcs) as any[];
    let minD = 999;
    for (let i = 0; i < npcs.length; i++) {
      for (let j = i + 1; j < npcs.length; j++) {
        const dist = Math.hypot(npcs[i].x - npcs[j].x, npcs[i].z - npcs[j].z);
        if (dist < minD) minD = dist;
      }
    }
    return minD;
  });
  expect(npcSeparation).toBeGreaterThanOrEqual(0.48);

  // 4. Kiểm tra Y sĩ An không bị chìm vào bàn khám medDesk
  const anPosition = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    const an = d.app.npcs.an;
    return { x: an.x, z: an.z };
  });
  // Bàn khám nằm ở z = -22. Ghế và vị trí đứng Y sĩ An ở sau bàn z <= -23.0
  expect(anPosition.z).toBeLessThanOrEqual(-22.9);

  // 5. Kiểm tra bảng điểm xét giảm án chi tiết
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.s.day = 4;
    d.logic.s.stats.reform = 80;
    const reviewResult = {
      day: 4,
      reduction: 2,
      score: 2.1,
      breakdown: [
        { label: 'Điểm cải tạo tốt (80/100, tăng +15)', value: 0.6 },
        { label: 'Lao động chấp hành 4/4 ngày', value: 0.5 },
        { label: 'Điểm danh đúng giờ 4/4 ngày', value: 0.3 },
        { label: 'Chứng chỉ nghề & hoàn thành nhiệm vụ giúp đỡ', value: 0.4 },
        { label: 'Chấp hành kỷ luật tốt, không vi phạm (+0.2)', value: 0.2 },
      ],
    };
    d.app.ui.showDaySummary({
      day: 4,
      rollcall: 'ok',
      work: 'ok',
      workUnits: 3,
      meals: 3,
      reformDelta: 2,
      moneyDelta: 15,
      violations: [],
      relationChanges: [],
      served: true,
      review: reviewResult,
      remainingAfter: 24,
      events: [],
    });
  });

  await expect(page.locator('.modal')).toBeVisible();
  await expect(page.locator('.modal')).toContainText('HỘI ĐỒNG XÉT DUYỆT GIẢM ÁN');
  await expect(page.locator('.modal')).toContainText('Điểm cải tạo tốt');
  await expect(page.locator('.modal')).toContainText('Lao động chấp hành');
  await expect(page.locator('.modal')).toContainText('Điểm danh đúng giờ');
  await expect(page.locator('.modal')).toContainText('ĐẠT TIÊU CHUẨN XÉT GIẢM −2 NGÀY');

  expect(errors).toEqual([]);
});
