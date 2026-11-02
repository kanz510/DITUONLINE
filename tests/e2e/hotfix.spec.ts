import { expect, test } from '@playwright/test';

test.use({ viewport: { width: 956, height: 440 }, isMobile: true, hasTouch: true });

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.locator('#btn-cc-submit').click();
  await page.locator('#btn-cutscene-skip').click();
});

test('closing time escorts the player once and the game continues afterwards', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.s.minute = 689;
    d.teleport(16, 0);
  });
  await page.waitForTimeout(200);
  expect(await page.evaluate(() => (window as any).__DITU__.app.isEscorting)).toBe(false);
  await page.evaluate(() => { (window as any).__DITU__.logic.s.minute = 690; });
  await expect.poll(() => page.evaluate(() => (window as any).__DITU__.app.isEscorting)).toBe(true);
  await expect.poll(() => page.evaluate(() => (window as any).__DITU__.logic.s.violations.filter((v: any) => v.type === 'disobedience').length), { timeout: 15000 }).toBe(1);
  const before = await page.evaluate(() => (window as any).__DITU__.logic.s.minute);
  await expect.poll(() => page.evaluate(() => (window as any).__DITU__.logic.s.minute)).toBeGreaterThan(before);
  expect(errors).toEqual([]);
  expect(await page.evaluate(() => {
    const d = (window as any).__DITU__;
    return { escort: d.app.isEscorting, open: d.app.isDoorPassable('workshop') };
  })).toEqual({ escort: false, open: false });
});

test('notifications stay below both expanded and collapsed quests in landscape', async ({ page }) => {
  for (const width of [956, 844]) {
    await page.setViewportSize({ width, height: width === 956 ? 440 : 390 });
    for (let i = 0; i < 2; i++) {
      await page.evaluate(() => (window as any).__DITU__.app.ui.toast('Thông báo kiểm tra', 'info'));
      await expect.poll(async () => {
        const q = await page.locator('#hud-quest-bar').boundingBox();
        const t = await page.locator('#hud-toasts').boundingBox();
        return !!q && !!t && t.y >= q.y + q.height + 4;
      }).toBe(true);
      await page.locator('#btn-quest-toggle').click();
    }
  }
});

test('canteen explains blocked purchases and confirms a successful purchase inside the popup', async ({ page }) => {
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.s.minute = 747;
    d.logic.s.stats.money = 37;
    d.app.ui.showCanteen();
  });
  await expect(page.locator('[data-buy="banh_mi"]')).toBeDisabled();
  await expect(page.locator('#canteen-status')).toContainText('16:30');
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.s.minute = 1000;
    d.app.ui.showCanteen();
  });
  await page.locator('[data-buy="banh_mi"]').click();
  await expect(page.locator('#canteen-status')).toContainText('Đã mua');
  expect(await page.evaluate(() => {
    const g = (window as any).__DITU__.logic;
    return { money: g.s.stats.money, bread: g.s.inventory.banh_mi };
  })).toEqual({ money: 32, bread: 1 });
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.s.flags.canteenBanUntil = d.logic.s.day + 1;
    d.app.ui.showCanteen();
  });
  await expect(page.locator('[data-buy="banh_mi"]')).toBeDisabled();
  await expect(page.locator('#canteen-status')).toContainText('cấm');
});
