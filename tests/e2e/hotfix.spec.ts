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
  // The route action is conditional on guideTarget, but collapse is always available.
  await expect(page.locator('#btn-quest-toggle')).toBeVisible();
  await page.locator('#btn-quest-toggle').click();
  await expect(page.locator('#hud-quest-bar')).toHaveClass(/collapsed/);
});


test('top-right toolbar and labeled mini-map stay usable on iPhone landscape', async ({ page }) => {
  const toolbar = page.locator('.hud-action-row');
  await expect(toolbar).toBeVisible();
  await expect(page.locator('#btn-fullscreen')).toBeVisible();
  await expect(page.locator('#btn-bag')).toBeVisible();
  await expect(page.locator('#btn-menu')).toBeVisible();
  await expect(page.locator('#btn-sprint')).toHaveCount(0);
  await expect(page.locator('#btn-interact svg')).toBeVisible();

  const boxes = await page.evaluate(() => {
    const box = (selector: string) => document.querySelector(selector)!.getBoundingClientRect();
    const actions = box('.hud-action-row');
    const stats = box('#hud-stats-mini');
    const map = box('#minimap-box');
    return {
      toolbarRight: actions.right,
      mapRight: map.right,
      screenWidth: innerWidth,
      separated: actions.bottom <= stats.top && stats.bottom <= map.top,
    };
  });
  expect(boxes.toolbarRight).toBeLessThanOrEqual(boxes.screenWidth);
  expect(boxes.mapRight).toBeLessThanOrEqual(boxes.screenWidth);
  expect(boxes.separated).toBe(true);

  await page.evaluate(() => (window as any).__DITU__.teleport(16, 0.15));
  await expect(page.locator('#minimap-area')).toHaveText('Xưởng lao động');

  await page.locator('#minimap-box').click();
  await expect(page.locator('.modal h2')).toContainText('BẢN ĐỒ TRẠI GIAM');
  await expect(page.locator('.modal')).toContainText('Xưởng lao động');
  await page.locator('.modal-close-top').click();
  await expect(page.locator('.modal')).toHaveCount(0);

  // The existing joystick still controls automatic sprint when pushed far enough.
  await page.evaluate(() => (window as any).__DITU__.teleport(-14.9, -28.6));
  await expect(page.locator('#btn-interact')).toHaveClass(/is-available/);
  await expect(page.locator('#btn-interact')).toBeEnabled();
  await expect(page.locator('#btn-interact')).toHaveAttribute('aria-label', /Nhận chăn màn|Giường/i);
  const interactWidth = await page.locator('#btn-interact').evaluate((el) => el.getBoundingClientRect().width);
  expect(interactWidth).toBeLessThanOrEqual(160);
});


test('gameplay actions cannot bypass clock-in or skip medical/vocational quest steps', async ({ page }) => {
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.startQuest('ca_dau');
    d.logic.s.minute = 500; // 08:20
    d.app.ui.showWorkbenchMinigame();
  });
  await expect(page.locator('#wg-hit')).toHaveCount(0);
  await expect(page.locator('#hud-toasts')).toContainText('chấm công');

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.clockIn();
    d.app.ui.showWorkbenchMinigame();
  });
  await expect(page.locator('#wg-hit')).toBeVisible();
  await page.evaluate(() => (window as any).__DITU__.app.ui.closeModal());

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.startQuest('lop_nghe_dau');
    d.app.ui.showVocationalMinigame();
  });
  await expect(page.locator('[data-voc-btn]')).toHaveCount(0);
  await expect(page.locator('#hud-toasts')).toContainText('Thầy Phúc');

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.startQuest('phu_y_te');
    d.app.ui.showMedicineSortingMinigame();
  });
  await expect(page.locator('#med-done-btn')).toHaveCount(0);
  await expect(page.locator('#hud-toasts')).toContainText('hướng dẫn');

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.app.ui.showQuestDetail();
  });
  await expect(page.locator('.modal')).toContainText('Bước cần làm trước');
});
