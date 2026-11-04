import { expect, test } from '@playwright/test';

test.describe('ĐỢT 2: Multi-path Quest & Sửa lỗi hướng dẫn nhiệm vụ', () => {
  test('Nhiệm vụ nghi_an_thuoc: Chọn phương án thuyết phục, đối thoại với Khải, giao thuốc cho An và mở manh_moi_kho_7', async ({ browser }) => {
    const ctx = await browser.newContext({
      viewport: { width: 956, height: 440 },
      hasTouch: true,
      isMobile: true,
    });
    const page = await ctx.newPage();
    await page.addInitScript(() => {
      try {
        localStorage.clear();
        sessionStorage.clear();
      } catch {}
    });
    await page.goto('/');

    await expect(page.locator('#landing-primary')).toBeVisible();
    await page.locator('#landing-primary').click();
    await expect(page.locator('#btn-cc-submit')).toBeVisible();
    await page.locator('#btn-cc-submit').click();

    await page.waitForFunction(() => Boolean((window as any).__DITU__?.app));

    const flowResult = await page.evaluate(async () => {
      const app = (window as any).__DITU__.app;
      const g = (window as any).__DITU__.logic;

      // Thiết lập Chương 2 và bắt đầu nghi_an_thuoc
      g.s.chapter = 2;
      g.startQuest('nghi_an_thuoc');
      g.s.progression.attrs.charisma = 2;

      // Bước 1: Hỏi Y sĩ An
      g.completeObjective('nghi_an_thuoc', 'hoi_an');

      // Bước 2: Hỏi Chú Bảy và chọn phương án thuyết phục (Charisma >= 2)
      g.completeObjective('nghi_an_thuoc', 'hoi_bay');
      const branchOk = g.chooseBranch('nghi_an_thuoc', 'persuade', 'Thuyết phục Khải giao lại lọ thuốc');

      // Bước 3: Đối thoại Khải
      const hasBranch = g.qBranch('nghi_an_thuoc');
      g.completeObjective('nghi_an_thuoc', 'thuyet_phuc_khai');
      g.giveItem('chai_thuoc_hen');

      // Bước 4: Bàn giao thuốc cho Y sĩ An
      const returnOk = g.completeObjective('nghi_an_thuoc', 'tra_thuoc');

      return {
        branchOk,
        hasBranch,
        hasItem: g.has('chai_thuoc_hen'),
        returnOk,
        questStatus: g.qStatus('nghi_an_thuoc'),
        nextQuestStatus: g.qStatus('manh_moi_kho_7'),
        outcome: g.s.quests.nghi_an_thuoc?.outcome,
      };
    });

    expect(flowResult.branchOk).toBe(true);
    expect(flowResult.hasBranch).toBe('persuade');
    expect(flowResult.returnOk).toBe(true);
    expect(flowResult.questStatus).toBe('done');
    expect(flowResult.nextQuestStatus).toBe('active');
    expect(flowResult.outcome).toContain('Thuyết phục');
    await ctx.close();
  });

  test('Sửa lỗi hướng dẫn trên iPhone landscape 956x440: bay_vat_cam trỏ Cán bộ Tùng và HUD không bị đè giờ chờ', async ({ browser }) => {
    const ctx = await browser.newContext({
      viewport: { width: 956, height: 440 },
      hasTouch: true,
      isMobile: true,
    });
    const page = await ctx.newPage();
    await page.addInitScript(() => {
      try {
        localStorage.clear();
        sessionStorage.clear();
      } catch {}
    });
    await page.goto('/');

    await expect(page.locator('#landing-primary')).toBeVisible();
    await page.locator('#landing-primary').click();
    await expect(page.locator('#btn-cc-submit')).toBeVisible();
    await page.locator('#btn-cc-submit').click();

    await page.waitForFunction(() => Boolean((window as any).__DITU__?.app));

    const checkResult = await page.evaluate(async () => {
      const app = (window as any).__DITU__.app;
      const g = (window as any).__DITU__.logic;

      // Khởi tạo Chương 3, mở cả bay_vat_cam và phong_tham_gap
      g.s.chapter = 3;
      g.startQuest('bay_vat_cam');
      g.startQuest('phong_tham_gap');

      // Lúc 07:15 sáng (ngoài giờ thăm gặp 08:30–11:00)
      g.s.minute = 435;
      app.trackedQuestId = 'bay_vat_cam';

      // Cập nhật step mô phỏng để HUD render lại
      app.step(0.016);

      const guide = app.computeGuide();
      const hudTitleEl = document.querySelector('.quest-title-text');
      const hudTagEl = document.querySelector('.quest-tag');
      const hudText = hudTitleEl?.textContent || '';
      const tagText = hudTagEl?.textContent || '';

      return {
        guideLabel: guide?.label || '',
        guideTargetName: guide?.targetName || '',
        hudText,
        tagText,
        isLocked: guide?.isLocked,
      };
    });

    // 1. Chỉ đường phải trỏ đến Cán bộ Tùng (không trỏ đến giường)
    expect(checkResult.guideLabel).toContain('Cán bộ Tùng');
    expect(checkResult.guideTargetName).toContain('Cán bộ Tùng');

    // 2. HUD không được hiển thị tag ⏳ Chờ giờ hay giờ chờ thăm gặp
    expect(checkResult.tagText).not.toContain('Chờ giờ');
    expect(checkResult.hudText).not.toContain('08:30–11:00');

    // 3. Đảm bảo thanh điều hướng HUD hiển thị rõ ràng trên mobile landscape
    const questHud = page.locator('#hud-quest-bar');
    await expect(questHud).toBeVisible();
    const box = await questHud.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeGreaterThan(150);
    expect(box!.height).toBeGreaterThan(30);
    await ctx.close();
  });
});
