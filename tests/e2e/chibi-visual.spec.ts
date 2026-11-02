import { expect, test } from '@playwright/test';

test('capture actual chibi players in the cellblock and dining hall', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 956, height: 440 },
    hasTouch: true,
    isMobile: true,
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');

  const submit = page.locator('#btn-cc-submit');
  if (await submit.isVisible({ timeout: 6000 }).catch(() => false)) {
    await submit.click();
    const skip = page.locator('#btn-cutscene-skip');
    if (await skip.isVisible({ timeout: 3000 }).catch(() => false)) await skip.click();
  }
  await expect(page.locator('#hud-clock')).toBeVisible({ timeout: 15000 });
  const measures = await page.evaluate(() => {
    const d = (window as any).__DITU__;
    const npc = d.app.npcs.bay.rig;
    const skull = npc.head.children.find((obj: any) => obj.isMesh && obj.geometry.type === 'SphereGeometry');
    return {
      headRadius: skull?.geometry.parameters.radius,
      playerBodyVisible: d.app.playerRig.body.visible,
      skin: d.app.npcs.huy.def.look.uniform,
      npcNamePosition: npc.labelSprite?.position.y,
    };
  });
  expect(measures.headRadius).toBeGreaterThanOrEqual(0.26);
  expect(measures.playerBodyVisible).toBe(true);
  expect(measures.skin).toBe('inmate-orange');
  expect(measures.npcNamePosition).toBeGreaterThanOrEqual(2.03);

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.s.minute = 370;
    for (const id of Object.keys(d.app.npcs)) d.app.npcs[id].snapToSchedule(370);
    d.teleport(-14.9, -23.1);
    d.app.input.yaw = 0;
    d.app.input.pitch = 0.18;
    d.app.input.distance = 4;
  });
  await page.waitForTimeout(850);
  await page.screenshot({ path: 'screenshots/chibi-buong-giam.png', fullPage: false });

  await page.evaluate(() => {
    const d = (window as any).__DITU__;
    d.logic.s.minute = 445;
    for (const id of Object.keys(d.app.npcs)) d.app.npcs[id].snapToSchedule(445);
    d.teleport(6.2, -22.4);
    d.app.input.yaw = 0;
    d.app.input.pitch = 0.16;
    d.app.input.distance = 5;
  });
  await page.waitForTimeout(850);
  await page.screenshot({ path: 'screenshots/chibi-nha-an.png', fullPage: false });
  expect(errors).toEqual([]);
  await context.close();
});
