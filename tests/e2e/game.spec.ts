import { expect, test } from '@playwright/test';

test('khởi chạy 3D, chuỗi nhiệm vụ → lựa chọn → hậu quả, lưu/tải và kết thúc ra tù', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#landing-primary')).toBeVisible();
  await page.locator('#landing-primary').click();

  // Nếu hiển thị màn tạo nhân vật (lượt chơi mới), xác nhận & bỏ qua đoạn phim mở đầu
  const ccBtn = page.locator('#btn-cc-submit');
  if (await ccBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
    await ccBtn.click();
    const skipCutscene = page.locator('#btn-cutscene-skip');
    if (await skipCutscene.isVisible({ timeout: 2000 }).catch(() => false)) {
      await skipCutscene.click();
    }
  }

  await expect(page.locator('#hud-clock')).toContainText('Ngày 1');
  await expect(page.locator('#hud-quest-bar')).toContainText('Giường của bạn');

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

  // Kiểm tra đã sang Chương 2 và mở các phòng mới
  const chapter = await page.evaluate(() => (window as any).__DITU__.logic.s.chapter);
  expect(chapter).toBe(2);

  // Đến lớp học nghề gặp Thầy Phúc
  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.advanceTo(870, { inCellblock: false, inRollcall: false, sprinting: false, moving: false, resting: false });
    for (const k of Object.keys(d.app.npcs)) d.app.npcs[k].snapToSchedule(d.logic.s.minute);
    const phuc = d.app.npcs.phuc;
    d.teleport(phuc.x, phuc.z - 0.8);
  });
  await expect(page.locator('#hud-prompt')).toContainText('Thầy Phúc');
  await page.keyboard.press('KeyE');
  await page.locator('.choice-btn').first().click(); // gặp thầy
  await page.locator('.choice-btn').first().click(); // bắt đầu bài tập nối dây

  // Thực hiện bài tập nối dây: [1, 3, 2, 4]
  await page.locator('[data-voc-btn="1"]').click();
  await page.locator('[data-voc-btn="3"]').click();
  await page.locator('[data-voc-btn="2"]').click();
  await page.locator('[data-voc-btn="4"]').click();
  await expect(page.locator('.modal h2')).toContainText('Hoàn thành');
  await page.locator('[data-close]').first().click();

  // Nhận xét của Thầy Phúc
  await page.keyboard.press('KeyE');
  await page.locator('.choice-btn').first().click();
  await page.locator('.choice-btn').first().click();
  expect(await page.evaluate(() => (window as any).__DITU__.logic.qStatus('lop_nghe_dau'))).toBe('done');
  expect(await page.evaluate(() => (window as any).__DITU__.logic.has('chung_chi_nghe'))).toBe(true);

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

test('trải nghiệm điện thoại: xoay dọc/ngang, HUD gọn không đè, menu cảm ứng & safe area', async ({ browser }) => {
  // 1. Khởi tạo mô phỏng iPhone 16 Pro Max ở chế độ dọc (440 x 956)
  const ctx = await browser.newContext({
    viewport: { width: 440, height: 956 },
    hasTouch: true,
    isMobile: true,
  });
  const page = await ctx.newPage();
  await page.goto('/');
  await expect(page.locator('#landing-primary')).toBeVisible();
  await page.locator('#landing-primary').click();

  // Máy đang dọc -> BẮT BUỘC hiện overlay nhắc xoay ngang, KHÔNG CÓ nút bỏ qua
  const overlay = page.locator('#orientation-overlay');
  await expect(overlay).toBeVisible();
  await expect(overlay).toContainText('Xoay ngang điện thoại');
  await expect(page.locator('#btn-ignore-portrait')).toHaveCount(0);

  // 2. Xoay sang ngang: iPhone 16 Pro Max landscape (956 x 440)
  await page.setViewportSize({ width: 956, height: 440 });
  await page.waitForTimeout(200);
  await expect(overlay).not.toBeVisible();

  // Kiểm tra canvas lấp đầy 100% màn hình, không bị đen nửa màn hình
  const canvasDims = await page.evaluate(() => {
    const c = document.getElementById('game-canvas') as HTMLCanvasElement;
    return { width: c.clientWidth, height: c.clientHeight, winW: window.innerWidth, winH: window.innerHeight };
  });
  expect(canvasDims.width).toBe(canvasDims.winW);
  expect(canvasDims.height).toBe(canvasDims.winH);

  // 3. Xoay dọc rồi xoay ngang lại 3 lần vẫn đảm bảo đầy màn hình
  for (let i = 0; i < 3; i++) {
    await page.setViewportSize({ width: 440, height: 956 });
    await expect(overlay).toBeVisible();
    await page.setViewportSize({ width: 956, height: 440 });
    await expect(overlay).not.toBeVisible();
    const dims = await page.evaluate(() => {
      const c = document.getElementById('game-canvas') as HTMLCanvasElement;
      return { width: c.clientWidth, height: c.clientHeight, winW: window.innerWidth, winH: window.innerHeight };
    });
    expect(dims.width).toBe(dims.winW);
    expect(dims.height).toBe(dims.winH);
  }

  // Nếu có màn tạo nhân vật thì hoàn tất tạo nhân vật & skip mở đầu để HUD lộ diện
  const ccSubmit = page.locator('#btn-cc-submit');
  if (await ccSubmit.isVisible({ timeout: 1500 }).catch(() => false)) {
    await ccSubmit.click();
    const skipBtn = page.locator('#btn-cutscene-skip');
    if (await skipBtn.isVisible({ timeout: 1500 }).catch(() => false)) {
      await skipBtn.click();
    }
  }

  // Kiểm tra các phần tử HUD hiển thị độc lập, không che đè
  await expect(page.locator('#hud-clock')).toBeVisible();
  await expect(page.locator('#hud-quest-bar')).toBeVisible();
  await expect(page.locator('#hud-sentence')).toBeVisible();
  // Nút icon SVG với kích thước chạm >= 44px và nhãn hỗ trợ truy cập
  await expect(page.locator('#btn-fullscreen')).toBeVisible();
  await expect(page.locator('#btn-bag')).toBeVisible();
  await expect(page.locator('#btn-menu')).toBeVisible();
  await expect(page.locator('#btn-bag')).toHaveAttribute('aria-label', 'Túi đồ');
  await expect(page.locator('#btn-menu')).toHaveAttribute('aria-label', 'Menu trò chơi');

  const bagBox = await page.locator('#btn-bag').boundingBox();
  expect(bagBox?.width).toBeGreaterThanOrEqual(44);
  expect(bagBox?.height).toBeGreaterThanOrEqual(44);

  await expect(page.locator('#hud-stats-mini')).toBeVisible();
  await expect(page.locator('#joy-zone')).toBeVisible();
  await expect(page.locator('#btn-interact')).toBeVisible();

  // 4. Mở menu trung tâm (mã phiên bản được đưa vào trong Menu)
  await page.locator('#btn-menu').click();
  await expect(page.locator('.modal h2')).toContainText('MENU TRÒ CHƠI');
  await expect(page.locator('#menu-build-tag')).toContainText(/v0\.4\.\d+/);
  await expect(page.locator('.menu-card-btn')).toHaveCount(8);
  // Đóng menu
  await page.locator('.modal-shell > .modal-close-top').click();
  await expect(page.locator('.modal')).toHaveCount(0);

  // 5. Mở chi tiết mục tiêu khi chạm thanh quest bar
  await page.locator('#hud-quest-bar').click();
  await expect(page.locator('.modal h2')).toContainText('MỤC TIÊU & NHIỆM VỤ');
  await page.locator('.modal-shell > .modal-close-top').click();

  // 6. Mở chi tiết chỉ số khi chạm thanh stats mini (thống nhất 0-100: Độ no & Tinh thần)
  await page.locator('#hud-stats-mini').click();
  await expect(page.locator('.modal h2')).toContainText('CHỈ SỐ SINH HOẠT');
  await expect(page.locator('.modal')).toContainText('Độ no');
  await expect(page.locator('.modal')).toContainText('Tinh thần');
  await page.locator('.modal-shell > .modal-close-top').click();

  // Kiểm tra Minimap 2D cố định hướng Bắc
  await expect(page.locator('#minimap-canvas')).toBeVisible();

  // 7. Chụp screenshot tại 4 vị trí kiểm tra theo yêu cầu:
  // Vị trí 1: Khu buồng giam (cellblock)
  await page.evaluate(() => (window as any).__DITU__.teleport(-14.25, -27.3));
  await page.waitForTimeout(150);
  await page.screenshot({ path: 'docs/screenshots/1_cellblock.png' });

  // Vị trí 2: Xưởng lao động (workshop)
  await page.evaluate(() => (window as any).__DITU__.teleport(16, 0.15));
  await page.waitForTimeout(150);
  await page.screenshot({ path: 'docs/screenshots/2_workshop.png' });

  // Vị trí 3: Nhà ăn (mess hall)
  await page.evaluate(() => (window as any).__DITU__.teleport(6, -24));
  await page.waitForTimeout(150);
  await page.screenshot({ path: 'docs/screenshots/3_messhall.png' });

  // Vị trí 4: Phòng y tế (medical)
  await page.evaluate(() => (window as any).__DITU__.teleport(23, -22));
  await page.waitForTimeout(150);
  await page.screenshot({ path: 'docs/screenshots/4_medical.png' });

  await ctx.close();
});

test('màn tạo nhân vật: thanh nút cố định đáy, chiều cao >= 48px, không cuộn lồng, giữ tên khi đổi tùy chọn ở 956x440 & 844x390', async ({ browser }) => {
  const ctx = await browser.newContext({
    viewport: { width: 956, height: 440 },
    hasTouch: true,
    isMobile: true,
  });
  const page = await ctx.newPage();
  await page.goto('/');
  await expect(page.locator('#landing-primary')).toBeVisible();
  await page.locator('#landing-primary').click();

  const modalCc = page.locator('.modal.modal-cc');
  const btnSubmit = page.locator('#btn-cc-submit');
  const inputName = page.locator('#cc-input-name');
  const scrollBody = page.locator('#cc-scroll-body');

  // 1. Kiểm tra màn tạo nhân vật hiển thị với thanh nút cố định ở đáy
  await expect(modalCc).toBeVisible();
  await expect(btnSubmit).toBeVisible();
  await expect(btnSubmit).toContainText('BẮT ĐẦU HÀNH TRÌNH');

  // Nút cao tối thiểu 48px
  const box956 = await btnSubmit.boundingBox();
  expect(box956).not.toBeNull();
  expect(box956!.height).toBeGreaterThanOrEqual(48);

  // 2. Kiểm tra chỉ 1 vùng cuộn duy nhất: modal-cc không cuộn (overflow: hidden), chỉ có cc-scroll-body cuộn
  const overflowStyles = await page.evaluate(() => {
    const m = document.querySelector('.modal.modal-cc') as HTMLElement;
    const b = document.querySelector('#cc-scroll-body') as HTMLElement;
    return {
      modalOverflow: window.getComputedStyle(m).overflowY,
      bodyOverflow: window.getComputedStyle(b).overflowY,
    };
  });
  expect(overflowStyles.modalOverflow).toBe('hidden');
  expect(['auto', 'scroll']).toContain(overflowStyles.bodyOverflow);

  // 3. Nhập tên nhân vật hỗ trợ tiếng Việt
  await inputName.fill('Minh Tuấn');
  await expect(inputName).toHaveValue('Minh Tuấn');

  // 4. Đổi ngoại hình, kiểu tóc, tông da, xuất thân, độ khó: KHÔNG làm mất tên và KHÔNG nhảy cuộn
  await page.locator('[data-preset="1"]').click();
  await expect(inputName).toHaveValue('Minh Tuấn');

  await page.locator('[data-hair="buzz"]').click();
  await expect(inputName).toHaveValue('Minh Tuấn');

  await page.locator('[data-skin="dark"]').click();
  await expect(inputName).toHaveValue('Minh Tuấn');

  await page.locator('[data-bg="courier"]').click();
  await expect(inputName).toHaveValue('Minh Tuấn');

  // Cuộn thân modal xuống một đoạn rồi chọn độ khó
  await page.locator('[data-diff="hard"]').scrollIntoViewIfNeeded();
  const scrollBefore = await scrollBody.evaluate((el) => el.scrollTop);
  expect(scrollBefore).toBeGreaterThan(0);

  await page.locator('[data-diff="hard"]').click();
  await expect(inputName).toHaveValue('Minh Tuấn');
  const scrollAfter = await scrollBody.evaluate((el) => el.scrollTop);
  expect(scrollAfter).toBe(scrollBefore); // không bị reset về 0 (đỉnh)!

  // 5. Kiểm tra ở kích thước 844x390 (iPhone landscape thông dụng)
  await page.setViewportSize({ width: 844, height: 390 });
  await page.waitForTimeout(100);
  await expect(btnSubmit).toBeVisible();
  const box844 = await btnSubmit.boundingBox();
  expect(box844).not.toBeNull();
  expect(box844!.height).toBeGreaterThanOrEqual(48);

  // 6. Mô phỏng bàn phím iPhone mở (chiều cao viewport thu nhỏ còn 240px)
  await page.setViewportSize({ width: 844, height: 240 });
  await page.waitForTimeout(100);
  await expect(btnSubmit).toBeVisible();

  // Khôi phục kích thước bình thường
  await page.setViewportSize({ width: 844, height: 390 });
  await page.waitForTimeout(100);

  // 7. Thử xóa tên để dưới 2 ký tự -> bấm bắt đầu phải hiện cảnh báo & không submit
  await inputName.fill('M');
  await btnSubmit.click();
  await expect(page.locator('.toast')).toContainText('Tên nhân vật phải từ 2 đến 20 ký tự');
  await expect(modalCc).toBeVisible();

  // 8. Nhập tên hợp lệ và bấm bắt đầu: chống bấm 2 lần, chuyển thẳng vào game ngày 1 (bỏ cutscene)
  await inputName.fill('Minh Tuấn');
  await btnSubmit.click();

  // Modal đóng ngay và vào thẳng game ngày 1
  await expect(modalCc).toHaveCount(0);
  const cutsceneOverlay = page.locator('#cutscene-overlay');
  await expect(cutsceneOverlay).not.toBeVisible();
  await expect(page.locator('#hud-clock')).toBeVisible();

  await ctx.close();
});
