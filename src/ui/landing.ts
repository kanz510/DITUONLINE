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
  // Original decorative SVG. Works offline and adds no image requests or dependency.
  const html = `
    <div class="landing-atmosphere" aria-hidden="true">
      <div class="landing-beam"></div>
      <svg class="landing-scene" viewBox="0 0 680 500" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="prison-glass" x1="0" y1="0" x2="1" y2="1">
            <stop stop-color="#bd9552" stop-opacity=".65"/>
            <stop offset="1" stop-color="#1a3341" stop-opacity=".85"/>
          </linearGradient>
          <pattern id="prison-stripes" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="#e7e8e1"/>
            <rect y="8" width="16" height="8" fill="#18232b"/>
          </pattern>
        </defs>
        <path d="M0 180L100 136L205 170V500H0ZM500 155L680 175V500H500Z" fill="#34454c"/>
        <path d="M430 191L448 53H521L544 191M437 92L539 177M529 92L438 177"
          stroke="#687881" stroke-width="9" fill="none"/>
        <rect x="418" y="32" width="145" height="76" rx="6" fill="#15212a" stroke="#7a8f92" stroke-width="7"/>
        <rect x="432" y="45" width="117" height="42" fill="url(#prison-glass)"/>
        <path d="M404 22H576L558 9H423Z" fill="#1a2932"/>
        <path d="M407 116H572M420 117V145M453 117V145M487 117V145M523 117V145M557 117V145" stroke="#879397" stroke-width="5"/>
        <circle cx="564" cy="76" r="12" fill="#ffd58b"/>
        <path d="M85 233H598V485H85Z" fill="#101d27" stroke="#87999a" stroke-width="10"/>
        <path d="M111 247H572V484H111Z" fill="#263943"/>
        <path d="M173 247V484M244 247V484M316 247V484M387 247V484M458 247V484M530 247V484M84 310H597M84 415H597"
          stroke="#91a09f" stroke-width="8"/>
        <path d="M38 500L184 366H505L648 500Z" fill="#26343d"/>
        <path d="M240 500L293 369M446 500L395 369" stroke="#77818b" stroke-opacity=".55" stroke-width="3"/>
        <g transform="translate(330 310)">
          <ellipse cx="0" cy="179" rx="68" ry="13" fill="#09141b" opacity=".5"/>
          <path d="M-34 110L-34 170H-4L4 170H35L32 110" fill="#26333f"/>
          <path d="M-45 52Q-65 60-61 125L-40 128L-27 109H31L44 127L62 121Q64 65 45 51Z"
            fill="url(#prison-stripes)" stroke="#25333b" stroke-width="4"/>
          <path d="M-49 71L-55 117M48 72L55 118" stroke="#dcab88" stroke-width="16" stroke-linecap="round"/>
          <ellipse cx="0" cy="16" rx="65" ry="67" fill="#e1af89"/>
          <path d="M-63 15Q-64-55-3-55Q55-55 63 9Q38 0 23-35Q0-3-61-5Z" fill="#252525"/>
          <circle cx="-22" cy="17" r="6" fill="#15212a"/>
          <circle cx="22" cy="17" r="6" fill="#15212a"/>
          <ellipse cx="-39" cy="37" rx="10" ry="5" fill="#d98484" opacity=".8"/>
          <ellipse cx="39" cy="37" rx="10" ry="5" fill="#d98484" opacity=".8"/>
          <path d="M-8 43Q0 51 9 43" fill="none" stroke="#875953" stroke-width="3"/>
        </g>
        <rect x="212" y="208" width="260" height="31" rx="3" fill="#dda64d"/>
        <text x="342" y="229" text-anchor="middle" font-family="system-ui" font-size="17" font-weight="900" fill="#18232b" letter-spacing="2">TRẠI GIAM AN PHÚ</text>
      </svg>
      <div class="landing-fence-left"></div><div class="landing-fence-right"></div>
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
