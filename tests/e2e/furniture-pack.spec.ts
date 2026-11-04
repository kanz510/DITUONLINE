import { expect, test } from '@playwright/test';

test('Furniture Pack v1: Bàn ghế 3D PBR mới trên iPhone landscape 956x440 (4 khu vực)', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 956, height: 440 },
    deviceScaleFactor: 1.5,
    hasTouch: true,
    isMobile: true,
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
  if (await skip.isVisible({ timeout: 1000 }).catch(() => false)) {
    await skip.click();
  }
  await expect(page.locator('#hud-clock')).toBeVisible();

  // Đợi các model GLB tải xong
  await expect.poll(() => page.evaluate(() => {
    const d = (window as any).__DITU__;
    let loadedCount = 0;
    d.app.world.scene.traverse((o: any) => {
      if (o.userData?.assetLoaded) loadedCount++;
    });
    return loadedCount;
  }), { timeout: 15000 }).toBeGreaterThan(10);

  // 1. Khu vực Nhà ăn: Bàn ăn Blendstra + ghế băng tích hợp
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    // Đặt nhân vật ngồi vào ghế băng phía Nam của Bàn 1
    d.teleport(0.6, -25.45);
    d.app.resting = true;
    if (d.app.playerRig) {
      d.app.playerRig.pose = 'sit';
      d.app.playerRig.root.rotation.y = Math.PI;
    }
    d.app.input.yaw = -0.55;
    d.app.input.pitch = 0.32;
    d.app.input.distance = 4.2;
  });
  await page.waitForTimeout(400);

  const canteenCheck = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    let blendstraFound = false;
    let traysFound = false;
    d.app.world.scene.traverse((o: any) => {
      if (o.name?.includes('canteen_table_set_blendstra')) blendstraFound = true;
      if (o.name === 'original.canteen_meal_tray') traysFound = true;
    });
    return { blendstraFound, traysFound };
  });
  expect(canteenCheck.blendstraFound).toBe(true);
  expect(canteenCheck.traysFound).toBe(true);
  await page.screenshot({ path: 'docs/screenshots/furniture-canteen.png', animations: 'disabled' });

  // 2. Khu vực Lớp học nghề: Bàn học (classroom_desk) + ghế học (classroom_chair)
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.teleport(-21.0, 15.0);
    d.app.resting = false;
    if (d.app.playerRig) {
      d.app.playerRig.pose = 'stand';
    }
    d.app.input.yaw = -Math.PI / 2; // Nhìn sang cụm bàn học bên trái
    d.app.input.pitch = 0.28;
    d.app.input.distance = 4.8;
  });
  await page.waitForTimeout(400);

  const classroomCheck = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    let deskFound = false;
    let chairFound = false;
    d.app.world.scene.traverse((o: any) => {
      if (o.name?.includes('classroom_desk')) deskFound = true;
      if (o.name?.includes('classroom_chair')) chairFound = true;
    });
    return { deskFound, chairFound };
  });
  expect(classroomCheck.deskFound).toBe(true);
  expect(classroomCheck.chairFound).toBe(true);
  await page.screenshot({ path: 'docs/screenshots/furniture-classroom.png', animations: 'disabled' });

  // 3. Khu vực Phòng cán bộ: Bàn làm việc có đèn (guard_office_desk) + ghế xoay (guard_office_chair) + radio
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.teleport(-4.0, 15.2);
    d.app.resting = false;
    if (d.app.playerRig) {
      d.app.playerRig.pose = 'stand';
    }
    d.app.input.yaw = Math.PI; // Nhìn vào bàn quản giáo và ghế xoay
    d.app.input.pitch = 0.25;
    d.app.input.distance = 3.8;
  });
  await page.waitForTimeout(400);

  const officeCheck = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    let deskFound = false;
    let chairFound = false;
    let radioFound = false;
    d.app.world.scene.traverse((o: any) => {
      if (o.name?.includes('guard_office_desk')) deskFound = true;
      if (o.name?.includes('guard_office_chair')) chairFound = true;
      if (o.name === 'original.guard_desk_radio') radioFound = true;
    });
    return { deskFound, chairFound, radioFound };
  });
  expect(officeCheck.deskFound).toBe(true);
  expect(officeCheck.chairFound).toBe(true);
  expect(officeCheck.radioFound).toBe(true);
  await page.screenshot({ path: 'docs/screenshots/furniture-office.png', animations: 'disabled' });

  // 4. Khu vực Sân trại: Bàn cờ đá tròn (yard_concrete_table) + đôn bê tông (yard_concrete_stool)
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.teleport(-10.0, 3.5); // Đứng ngay cạnh đôn đá của bàn cờ
    d.app.input.yaw = Math.PI; // Nhìn về phía bàn cờ đá
    d.app.input.pitch = 0.35;
    d.app.input.distance = 3.6;
  });
  await page.waitForTimeout(400);

  const yardCheck = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    let tableFound = false;
    let stoolFound = false;
    d.app.world.scene.traverse((o: any) => {
      if (o.name?.includes('yard_concrete_table')) tableFound = true;
      if (o.name?.includes('yard_concrete_stool')) stoolFound = true;
    });
    return { tableFound, stoolFound };
  });
  expect(yardCheck.tableFound).toBe(true);
  expect(yardCheck.stoolFound).toBe(true);
  await page.screenshot({ path: 'docs/screenshots/furniture-yard.png', animations: 'disabled' });

  // 5. Kiểm tra phòng thăm gặp và xưởng
  const extraCheck = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    let visitTableFound = false;
    let visitChairFound = false;
    let workshopBenchFound = false;
    d.app.world.scene.traverse((o: any) => {
      if (o.name?.includes('visitation_table')) visitTableFound = true;
      if (o.name?.includes('visitation_chair')) visitChairFound = true;
      if (o.name?.includes('workshop_bench')) workshopBenchFound = true;
    });
    return { visitTableFound, visitChairFound, workshopBenchFound };
  });
  expect(extraCheck.visitTableFound).toBe(true);
  expect(extraCheck.visitChairFound).toBe(true);
  expect(extraCheck.workshopBenchFound).toBe(true);

  expect(errors.filter((e) => !e.includes('favicon'))).toHaveLength(0);
  await context.close();
});
