import { expect, test } from '@playwright/test';

test.describe('Màn hình bắt đầu 3D điện ảnh (Landing Screen)', () => {
  test('chưa có save: ảnh nền 3D WebP/JPG, logo, gradient trái, nút bấm chạm tốt, panel hướng dẫn (iPhone 16 Pro Max 956x440)', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 956, height: 440 },
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));

    await page.goto('/');

    // 1. Kiểm tra màn hình landing hiển thị
    const landing = page.locator('#game-landing');
    await expect(landing).toBeVisible();

    // 2. Kiểm tra ảnh nền 3D với WebP và JPG fallback
    const backdrop = page.locator('.landing-backdrop');
    await expect(backdrop).toBeVisible();
    const webpSource = page.locator('.landing-backdrop source');
    await expect(webpSource).toHaveAttribute('type', 'image/webp');
    await expect(webpSource).toHaveAttribute('srcset', './assets/landing-bg.webp');
    const bgImg = page.locator('.landing-bg-img');
    await expect(bgImg).toBeVisible();
    await expect(bgImg).toHaveAttribute('src', './assets/landing-bg.jpg');

    // 3. Kiểm tra pointer-events: none trên atmosphere/backdrop để không chặn nút
    const atmospherePointerEvents = await page.locator('.landing-atmosphere').evaluate((el) => {
      return window.getComputedStyle(el).pointerEvents;
    });
    expect(atmospherePointerEvents).toBe('none');

    // 4. Kiểm tra bố cục: Logo & cụm thao tác nằm gọn bên trái (<= 50vw), để lộ nhân vật bên phải
    const copyBox = await page.locator('.landing-copy').boundingBox();
    expect(copyBox).not.toBeNull();
    if (copyBox) {
      expect(copyBox.x).toBeLessThan(100);
      expect(copyBox.width).toBeLessThanOrEqual(956 * 0.52);
    }

    await expect(page.locator('.landing-wordmark')).toContainText('ĐI TÙ ONLINE');
    await expect(page.locator('.landing-save')).toContainText('PHẠM NHÂN MỚI');

    // 5. Nút chính ở trạng thái chưa save: "BẮT ĐẦU NHẬP TRẠI"
    const primaryBtn = page.locator('#landing-primary');
    await expect(primaryBtn).toBeVisible();
    await expect(primaryBtn).toContainText('BẮT ĐẦU NHẬP TRẠI');
    await expect(page.locator('#landing-newgame')).toHaveCount(0);

    const primaryBox = await primaryBtn.boundingBox();
    expect(primaryBox?.height).toBeGreaterThanOrEqual(36);

    // 6. Mở và đóng hướng dẫn chơi
    const rulesBtn = page.locator('#landing-rules');
    await expect(rulesBtn).toBeVisible();
    await rulesBtn.click();
    const rulesPanel = page.locator('#landing-rules-panel');
    await expect(rulesPanel).toBeVisible();
    await expect(rulesPanel).toContainText('QUY TẮC SINH TỒN');

    const closeRulesBtn = page.locator('#landing-close-rules');
    await closeRulesBtn.click();
    await expect(rulesPanel).toBeHidden();

    // 7. Chụp screenshot thực tế lưu vào docs/screenshots
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'docs/screenshots/landing-iphone-nosave.png', animations: 'disabled' });

    expect(errors).toEqual([]);
    await context.close();
  });

  test('đã có save: hiện "TIẾP TỤC HỒ SƠ", "BẮT ĐẦU HỒ SƠ MỚI", popup xác nhận reset và vào game thành công', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 956, height: 440 },
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));

    // 1. Khởi động lượt chơi mới và lưu tiến trình
    await page.goto('/');
    await expect(page.locator('#landing-primary')).toBeVisible();
    await page.locator('#landing-primary').click();

    // Nhập tên và tạo nhân vật
    await expect(page.locator('#btn-cc-submit')).toBeVisible();
    await page.locator('#cc-input-name').fill('Phạm Văn Nam');
    await page.locator('#btn-cc-submit').click();

    const skip = page.locator('#btn-cutscene-skip');
    if (await skip.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skip.click();
    }

    // Đảm bảo game đã nạp và lưu
    await expect(page.locator('#hud-clock')).toBeVisible();

    // 2. Tải lại trang: lúc này đã có hồ sơ đã lưu
    await page.reload();

    const landing = page.locator('#game-landing');
    await expect(landing).toBeVisible();

    // Kiểm tra thông tin hồ sơ cũ được hiển thị
    const saveCard = page.locator('.landing-save');
    await expect(saveCard).toContainText('HỒ SƠ ĐANG THỤ ÁN');
    await expect(saveCard).toContainText('Phạm Văn Nam');
    await expect(saveCard).toContainText('Ngày 1');

    // Nút tiếp tục
    const primaryBtn = page.locator('#landing-primary');
    await expect(primaryBtn).toContainText('TIẾP TỤC HỒ SƠ');

    // Nút chơi mới
    const newGameBtn = page.locator('#landing-newgame');
    await expect(newGameBtn).toBeVisible();
    await newGameBtn.click();

    // Hiện modal xác nhận xóa tiến trình
    const confirmDialog = page.locator('#landing-confirm');
    await expect(confirmDialog).toBeVisible();
    await expect(confirmDialog).toContainText('XÓA TIẾN TRÌNH CŨ?');

    // Hủy bỏ xác nhận -> modal đóng lại
    await page.locator('#landing-cancel-reset').click();
    await expect(confirmDialog).toBeHidden();

    // Chụp screenshot thực tế có save lưu vào docs/screenshots
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'docs/screenshots/landing-iphone-withsave.png', animations: 'disabled' });

    // Bấm TIẾP TỤC HỒ SƠ -> landing screen gỡ bỏ, vào thẳng game
    await primaryBtn.click();
    await expect(landing).toHaveCount(0);
    await expect(page.locator('#hud-clock')).toBeVisible();

    expect(errors).toEqual([]);
    await context.close();
  });
});
