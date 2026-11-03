/** Cinematic start screen: UI only, never changes gameplay or save until confirmed. */
export interface LandingOptions {
  canContinue: boolean;
  name: string;
  day: number;
  remainingDays: number;
  onStart: () => void;
  onContinue: () => void;
  onReset: () => void;
}

function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c);
}

export function showLandingPage(options: LandingOptions): void {
  document.getElementById('game-landing')?.remove();
  const overlay = document.createElement('main');
  overlay.id = 'game-landing';
  overlay.className = 'landing-screen';
  overlay.setAttribute('aria-label', 'Màn hình bắt đầu ĐI TÙ ONLINE');
  // Cinematic background image: WebP with JPG fallback, lightweight & optimized for iPhone Safari
  const html = `
    <div class="landing-atmosphere" aria-hidden="true">
      <picture class="landing-backdrop">
        <source srcset="./assets/landing-bg.webp" type="image/webp">
        <img src="./assets/landing-bg.jpg" alt="" class="landing-bg-img" fetchpriority="high" decoding="async">
      </picture>
    </div>
    <header class="landing-header">
      <span class="landing-agency"><b class="landing-stamp">AP</b> TRẠI GIAM AN PHÚ <i>/</i> HỒ SƠ NHẬP TRẠI</span>
      <span class="landing-version">WEB 3D • CHƠI TRÊN ĐIỆN THOẠI</span>
    </header>
    <section class="landing-copy">
      <p class="landing-eyebrow">MÔ PHỎNG CUỘC SỐNG & CẢI TẠO</p>
      <h1 class="landing-wordmark">ĐI TÙ <strong>ONLINE<span>.</span></strong></h1>
      <p class="landing-quote">Mỗi ngày là một lựa chọn.<br><b>Mỗi lựa chọn quyết định ngày trở về.</b></p>
      <div class="landing-save">
        <div class="landing-save-icon">⌁</div>
        <div><b>%SAVE_HEADING%</b><small>%SAVE_DETAIL%</small></div>
      </div>
      <div class="landing-actions">
        <button id="landing-primary" class="landing-cta" type="button"><span>➜</span> %PRIMARY% <b>›</b></button>
        %NEW_GAME_BUTTON%
        <button id="landing-rules" class="landing-guide" type="button">HƯỚNG DẪN CHƠI ↗</button>
      </div>
      <div class="landing-rules-panel" id="landing-rules-panel" hidden>
        <button id="landing-close-rules" class="landing-panel-close" type="button" aria-label="Đóng hướng dẫn">×</button>
        <b>QUY TẮC SINH TỒN</b>
        <p>Điểm danh đúng giờ, hoàn thành công việc theo thứ tự và giữ quan hệ với bạn tù. Vi phạm có thể tăng án, cải tạo tốt có cơ hội về sớm.</p>
        <p>Điện thoại: joystick trái, tương tác phải. Máy tính: WASD và E.</p>
      </div>
      <div class="landing-confirm" id="landing-confirm" hidden role="dialog" aria-label="Xác nhận tạo hồ sơ mới">
        <b>XÓA TIẾN TRÌNH CŨ?</b>
        <p>Hồ sơ hiện tại sẽ mất. Không thể hoàn tác.</p>
        <button id="landing-confirm-reset" class="landing-danger" type="button">XÁC NHẬN CHƠI MỚI</button>
        <button id="landing-cancel-reset" class="landing-guide" type="button">GIỮ HỒ SƠ</button>
      </div>
    </section>
    <footer class="landing-bottom"><span>● HỆ THỐNG SẴN SÀNG</span><span>SỐNG TỐT • CẢI TẠO • TRỞ VỀ</span></footer>
  `;
  overlay.innerHTML = html
    .replace('%SAVE_HEADING%', options.canContinue ? 'HỒ SƠ ĐANG THỤ ÁN' : 'PHẠM NHÂN MỚI')
    .replace('%SAVE_DETAIL%', options.canContinue
      ? escapeHtml(options.name) + ' • Ngày ' + options.day + ' • Còn ' + options.remainingDays + ' ngày'
      : 'Chờ tiếp nhận • Tạo nhân vật để bắt đầu')
    .replace('%PRIMARY%', options.canContinue ? 'TIẾP TỤC HỒ SƠ' : 'BẮT ĐẦU NHẬP TRẠI')
    .replace('%NEW_GAME_BUTTON%', options.canContinue
      ? '<button id="landing-newgame" class="landing-secondary" type="button">BẮT ĐẦU HỒ SƠ MỚI</button>'
      : '');
  document.body.appendChild(overlay);
  let completed = false;
  const finish = (action: () => void) => {
    if (completed) return;
    completed = true;
    overlay.remove();
    action();
  };
  overlay.querySelector('#landing-primary')?.addEventListener('click', () =>
    finish(options.canContinue ? options.onContinue : options.onStart));
  overlay.querySelector('#landing-newgame')?.addEventListener('click', () => {
    const panel = overlay.querySelector<HTMLElement>('#landing-confirm');
    if (panel) panel.hidden = false;
  });
  overlay.querySelector('#landing-cancel-reset')?.addEventListener('click', () => {
    const panel = overlay.querySelector<HTMLElement>('#landing-confirm');
    if (panel) panel.hidden = true;
  });
  overlay.querySelector('#landing-confirm-reset')?.addEventListener('click', () => finish(options.onReset));
  overlay.querySelector('#landing-rules')?.addEventListener('click', () => {
    const panel = overlay.querySelector<HTMLElement>('#landing-rules-panel');
    if (panel) panel.hidden = !panel.hidden;
  });
  overlay.querySelector('#landing-close-rules')?.addEventListener('click', () => {
    const panel = overlay.querySelector<HTMLElement>('#landing-rules-panel');
    if (panel) panel.hidden = true;
  });
  overlay.querySelector<HTMLButtonElement>('#landing-primary')?.focus({ preventScroll: true });
}
