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

test('dismissible information panels use a single X and balanced content', async ({ page }) => {
  await page.evaluate(() => (window as any).__DITU__.app.ui.showQuestDetail());

  const closeX = page.locator('.modal-shell > .modal-close-top');
  await expect(closeX).toBeVisible();
  await expect(closeX).toHaveAttribute('aria-label', 'Đóng bảng');
  await expect(page.locator('.modal button[data-close]')).toHaveCount(0);

  const margins = await page.evaluate(() => {
    const panel = document.querySelector('.modal')!.getBoundingClientRect();
    const card = document.querySelector('.modal .card-row')!.getBoundingClientRect();
    return {
      left: card.left - panel.left,
      right: panel.right - card.right,
    };
  });
  expect(Math.abs(margins.left - margins.right)).toBeLessThanOrEqual(5);

  await closeX.click();
  await expect(page.locator('.modal')).toHaveCount(0);

  await page.evaluate(() => (window as any).__DITU__.app.ui.openPanel('profile'));
  await expect(page.locator('.modal-shell > .modal-close-top')).toBeVisible();
  await expect(page.locator('.modal button[data-close]')).toHaveCount(0);

  await page.evaluate(() => (window as any).__DITU__.app.ui.showMainMenu());
  await expect(page.locator('#menu-build-tag')).toBeVisible();
  await expect(page.locator('.modal button[data-close]')).toHaveCount(0);

  await page.evaluate(() => (window as any).__DITU__.app.ui.openPanel('pause'));
  await expect(page.locator('.modal-shell > .modal-close-top')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Tiếp tục chơi' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Bắt đầu lượt chơi mới' })).toBeVisible();
});

test('landscape HUD is compact and translucent without hiding quest controls', async ({ page }) => {
  for (const size of [{ width: 956, height: 440 }, { width: 844, height: 390 }]) {
    await page.setViewportSize(size);
    const metrics = await page.evaluate(() => {
      const clock = document.querySelector<HTMLElement>('#hud-clock')!;
      const quest = document.querySelector<HTMLElement>('#hud-quest-bar')!;
      const left = document.querySelector<HTMLElement>('.hud-left')!;
      const alpha = (value: string) => {
        const match = value.match(/rgba?\(([^)]+)\)/);
        const values = match?.[1].split(',').map(x => x.trim()) || [];
        return values.length === 4 ? Number(values[3]) : 1;
      };
      return {
        width: left.getBoundingClientRect().width,
        clockAlpha: alpha(getComputedStyle(clock).backgroundColor),
        questAlpha: alpha(getComputedStyle(quest).backgroundColor),
        clockWidth: clock.getBoundingClientRect().width,
        questWidth: quest.getBoundingClientRect().width,
      };
    });
    expect(metrics.width).toBeLessThanOrEqual(296);
    expect(metrics.clockAlpha).toBeLessThan(0.7);
    expect(metrics.questAlpha).toBeLessThan(0.7);
    expect(metrics.clockWidth).toBeLessThanOrEqual(296);
    expect(metrics.questWidth).toBeLessThanOrEqual(296);
  }
  await expect(page.locator('#btn-quest-autowalk')).toBeVisible();
  await page.locator('#btn-quest-toggle').click();
  await expect(page.locator('#hud-quest-bar')).toHaveClass(/collapsed/);
});
