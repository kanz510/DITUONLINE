import { expect, test } from '@playwright/test';

test('khởi chạy 3D, chuỗi nhiệm vụ → lựa chọn → hậu quả, lưu/tải và kết thúc ra tù', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#hud-clock')).toContainText('Ngày 1');
  await expect(page.locator('#hud-quest')).toContainText('Người mới');

  // 1. Nhận chăn màn ở giường ngay cạnh vị trí xuất phát
  await expect(page.locator('#hud-prompt')).toContainText('Nhận chăn màn');
  await page.keyboard.press('KeyE');

  // 2. Đi tới bảng nội quy & đọc
  await page.evaluate(() => (window as any).__DITU__.teleport(-27.0, -21.5));
  await expect(page.locator('#hud-prompt')).toContainText('Bảng nội quy');
  await page.keyboard.press('KeyE');
  await page.locator('.choice-btn').first().click();

  // 3. Tua tới 06:35 và đứng ở ô điểm danh
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.advanceTo(395, { inCellblock: false, inRollcall: true, sprinting: false, moving: false, resting: false });
    d.logic.rollcallCheckIn();
    for (const k of Object.keys(d.app.npcs)) d.app.npcs[k].snapToSchedule(d.logic.s.minute);
    const bay = d.app.npcs.bay;
    d.teleport(bay.x, bay.z + 0.9);
  });
  await expect(page.locator('#hud-prompt')).toContainText('Chú Bảy');
  await page.keyboard.press('KeyE');
  await expect(page.locator('.modal h2')).toContainText('Chú Bảy');
  await page.locator('.choice-btn').first().click();
  await page.locator('.choice-btn').first().click();

  const caDau = await page.evaluate(() => (window as any).__DITU__.logic.qStatus('ca_dau'));
  expect(caDau).toBe('active');

  // 5. Vào xưởng ca sáng, chấm công và làm đủ 3 sản phẩm qua mini-game
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.advanceTo(485, { inCellblock: false, inRollcall: false, sprinting: false, moving: false, resting: false });
    d.teleport(13.1, -6);
  });
  await page.keyboard.press('KeyE'); // chấm công
  await page.evaluate(() => (window as any).__DITU__.teleport(16, 0.15));
  await page.keyboard.press('KeyE'); // mở mini-game bàn lắp ráp
  await expect(page.locator('#wg-hit')).toBeVisible();
  for (let i = 0; i < 3; i++) await page.locator('#wg-hit').click();
  // hoàn thành nốt 2 sản phẩm còn lại
  await page.evaluate(() => {
    const g = (window as any).__DITU__.logic;
    g.finishWorkUnit(90);
    g.finishWorkUnit(90);
  });

  // Báo lại Chú Bảy → xong "Ca lao động đầu tiên"
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    const bay = d.app.npcs.bay;
    d.teleport(bay.x, bay.z + 0.8);
  });
  await expect(page.locator('#hud-prompt')).toContainText('Chú Bảy');
  await page.keyboard.press('KeyE');
  await page.locator('.choice-btn').first().click();
  await page.locator('.choice-btn').first().click();
  expect(await page.evaluate(() => (window as any).__DITU__.logic.qStatus('ca_dau'))).toBe('done');

  // 6. Nhận "Món nợ của Huy" → gặp Lâm → lấy giấy nợ → báo Quản giáo Lan
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.advanceTo(820, { inCellblock: false, inRollcall: false, sprinting: false, moving: false, resting: false });
    for (const k of Object.keys(d.app.npcs)) d.app.npcs[k].snapToSchedule(d.logic.s.minute);
    const huy = d.app.npcs.huy;
    d.teleport(huy.x, huy.z + 0.8);
  });
  await expect(page.locator('#hud-prompt')).toContainText('Huy');
  await page.keyboard.press('KeyE');
  await page.locator('.choice-btn').first().click();
  await page.locator('.choice-btn').first().click();
  await page.locator('.choice-btn').first().click();
  await expect(page.locator('.modal')).toHaveCount(0);

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    const lam = d.app.npcs.lam;
    d.teleport(lam.x + 0.8, lam.z);
  });
  await expect(page.locator('#hud-prompt')).toContainText('Lâm');
  await page.keyboard.press('KeyE');
  await page.locator('.choice-btn').first().click();
  // Chọn nhánh 3: Báo Quản giáo Lan
  await page.locator('.choice-btn').nth(2).click();
  await page.locator('.choice-btn').first().click();

  // Quay lại hỏi Huy lấy giấy nợ, rồi báo Quản giáo Lan
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    const huy = d.app.npcs.huy;
    d.teleport(huy.x, huy.z + 0.8);
  });
  await expect(page.locator('#hud-prompt')).toContainText('Huy');
  await page.keyboard.press('KeyE');
  await page.locator('.choice-btn').first().click();
  await page.locator('.choice-btn').first().click();
  await page.locator('.choice-btn').first().click();
  await expect(page.locator('.modal')).toHaveCount(0);

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    const lan = d.app.npcs.lan;
    d.teleport(lan.x, lan.z - 0.8);
  });
  await expect(page.locator('#hud-prompt')).toContainText('Quản giáo Lan');
  await page.keyboard.press('KeyE');
  await page.locator('.choice-btn').first().click();
  await page.locator('.choice-btn').first().click();

  expect(await page.evaluate(() => (window as any).__DITU__.logic.qStatus('mon_no'))).toBe('done');

  // 7. Kiểm tra tải lại trang giữ nguyên trạng thái & không nhân phần thưởng
  const beforeReload = await page.evaluate(() => {
    const s = (window as any).__DITU__.logic.s;
    return { reform: s.stats.reform, relLan: s.relations.lan.value, monNo: s.quests.mon_no.status };
  });
  await page.reload();
  const afterReload = await page.evaluate(() => {
    const s = (window as any).__DITU__.logic.s;
    return { reform: s.stats.reform, relLan: s.relations.lan.value, monNo: s.quests.mon_no.status };
  });
  expect(afterReload).toEqual(beforeReload);

  // 8. Chạy tới ngày ra tù và xác nhận màn hình kết thúc hiển thị
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    let guard = 0;
    while (!d.logic.s.ending && guard++ < 40) d.logic.simulateGoodDay();
    d.app.ui.showEnding(d.logic.s.ending);
  });
  await expect(page.locator('.modal h2')).toContainText('KẾT THÚC');
});
