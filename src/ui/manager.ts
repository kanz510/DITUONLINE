import { ACCESS, SCHEDULE, blockAt, fmtMoney, fmtTime, nextBlock } from '../logic/constants';
import { EXTRA_SHIFT_MAX, GameLogic, NPC_NAMES, WORK_QUOTA } from '../logic/game';
import { computeReview, project } from '../logic/sentence';
import type { DaySummary, Hearing, NpcId, Violation } from '../logic/state';
import { ITEMS } from '../data/items';
import { NPCS } from '../data/npcs';
import { QUEST_ORDER, QUESTS } from '../data/quests';
import type { DNode } from '../data/dialogues';
import { BUILDINGS, ZONES, zoneName } from '../world/layout';
import type { NpcActor } from '../actors/npc';
import type { SoundEngine } from '../core/audio';
import { getReleaseInfo, type AppReleaseInfo } from '../version';

export interface PromptTarget {
  id: string;
  label: string;
  risk?: string;
  run: () => void;
}

const STEPS = [
  { name: '1. Lắp vỏ nhựa cách điện', zone: [0.32, 0.68] },
  { name: '2. Đặt hai lá đồng tiếp điện', zone: [0.36, 0.64] },
  { name: '3. Siết ốc cố định', zone: [0.4, 0.6] },
];

export class UIManager {
  root: HTMLElement;
  joyZone!: HTMLElement;
  joyKnob!: HTMLElement;
  btnInteract!: HTMLButtonElement;
  btnSprint!: HTMLElement;
  releaseInfo: AppReleaseInfo = getReleaseInfo();
  private clockEl!: HTMLElement;
  private questBarEl!: HTMLElement;
  private sentenceEl!: HTMLElement;
  private statsMiniEl!: HTMLElement;
  private btnBag!: HTMLElement;
  private btnMenu!: HTMLElement;
  private promptEl!: HTMLElement;
  private toastsEl!: HTMLElement;
  private modalHost!: HTMLElement;
  private orientOverlay!: HTMLElement;
  paused = false;
  private modalSeq = 0;
  private activeMinigameCancel: (() => void) | null = null;
  private pausedByOrientation = false;

  constructor(
    container: HTMLElement,
    private g: GameLogic,
    private sfx: SoundEngine,
    private hooks: {
      npcs: () => Record<NpcId, NpcActor>;
      playerPos: () => { x: number; z: number; rot: number };
      onWait: (targetMin: number) => void;
      onSleep: () => void;
      onReset: () => void;
      onSettingChange: () => void;
    },
  ) {
    this.root = container;
    this.buildShell();
    this.checkOrientation();
    window.addEventListener('resize', () => this.checkOrientation());
    window.addEventListener('orientationchange', () => this.checkOrientation());
  }

  private isTouchDevice(): boolean {
    return 'ontouchstart' in window || (navigator.maxTouchPoints ?? 0) > 0;
  }

  private hasOpenModal(): boolean {
    return this.modalHost.innerHTML.trim() !== '';
  }

  private checkOrientation() {
    const isPortrait = window.innerWidth < window.innerHeight;
    const isTouch = this.isTouchDevice();

    if (isPortrait && isTouch) {
      this.orientOverlay.style.display = 'flex';
      if (!this.paused) {
        this.pausedByOrientation = true;
        this.paused = true;
      }
    } else {
      this.orientOverlay.style.display = 'none';
      if (this.pausedByOrientation) {
        if (!this.hasOpenModal()) this.paused = false;
        this.pausedByOrientation = false;
      }
    }
  }

  private buildShell() {
    const isTouch = this.isTouchDevice();
    this.root.innerHTML = `
      <div class="hud-header">
        <div class="hud-left">
          <div class="hud-card" id="hud-clock"></div>
          <div class="hud-quest-bar interactive" id="hud-quest-bar" title="Nhấp để xem chi tiết mục tiêu"></div>
        </div>
        <div class="hud-right">
          <div class="hud-action-row interactive">
            <div class="sentence-tag" id="hud-sentence">Án: 30n</div>
            <div class="version-tag" id="hud-version" title="Phiên bản trò chơi">v${this.releaseInfo.version}-${this.releaseInfo.buildHash.slice(0, 6)}</div>
            <button class="btn" id="btn-fullscreen" title="Toàn màn hình">⛶</button>
            <button class="btn" id="btn-bag">${isTouch ? '🎒 Túi' : '🎒 Túi (B)'}</button>
            <button class="btn btn-accent" id="btn-menu">${isTouch ? '☰ Menu' : '☰ Menu (Esc)'}</button>
          </div>
          <div class="hud-stats-mini interactive" id="hud-stats-mini" title="Nhấp để xem chi tiết các chỉ số"></div>
        </div>
      </div>
      <div class="toasts" id="hud-toasts"></div>
      <div class="prompt-box interactive" id="hud-prompt" style="display:none"></div>
      <div class="joy-zone interactive" id="joy-zone"><div class="joy-knob" id="joy-knob"></div></div>
      <div class="touch-right interactive">
        <button class="btn" id="btn-interact" disabled>${isTouch ? 'Tương tác' : 'Tương tác (E)'}</button>
        <button class="btn" id="btn-sprint">Chạy</button>
      </div>
      <div id="modal-host"></div>
      <div id="orientation-overlay" style="display:none">
        <svg class="rotate-phone-icon" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="3" ry="3"></rect>
          <path d="M12 18h.01"></path>
          <path d="M19 12a7 7 0 0 0-7-7"></path>
          <polyline points="15 5 19 5 19 9"></polyline>
        </svg>
        <div class="rotate-title">Xoay ngang điện thoại để chơi</div>
        <div class="rotate-desc">ĐI TÙ ONLINE bắt buộc chơi ở màn hình ngang để đảm bảo góc nhìn 3D bao quát và điều khiển thuận tiện.</div>
      </div>
    `;

    this.clockEl = this.root.querySelector('#hud-clock')!;
    this.questBarEl = this.root.querySelector('#hud-quest-bar')!;
    this.sentenceEl = this.root.querySelector('#hud-sentence')!;
    this.statsMiniEl = this.root.querySelector('#hud-stats-mini')!;
    this.btnBag = this.root.querySelector('#btn-bag')!;
    this.btnMenu = this.root.querySelector('#btn-menu')!;
    this.promptEl = this.root.querySelector('#hud-prompt')!;
    this.toastsEl = this.root.querySelector('#hud-toasts')!;
    this.modalHost = this.root.querySelector('#modal-host')!;
    this.joyZone = this.root.querySelector('#joy-zone')!;
    this.joyKnob = this.root.querySelector('#joy-knob')!;
    this.btnInteract = this.root.querySelector('#btn-interact')!;
    this.btnSprint = this.root.querySelector('#btn-sprint')!;
    this.orientOverlay = this.root.querySelector('#orientation-overlay')!;

    this.btnMenu.addEventListener('click', () => {
      this.sfx.click();
      this.tryLockOrientation();
      this.showMainMenu();
    });

    this.btnBag.addEventListener('click', () => {
      this.sfx.click();
      this.tryLockOrientation();
      this.openPanel('bag');
    });

    this.questBarEl.addEventListener('click', () => {
      this.sfx.click();
      this.tryLockOrientation();
      this.showQuestDetail();
    });

    this.statsMiniEl.addEventListener('click', () => {
      this.sfx.click();
      this.tryLockOrientation();
      this.showStatsDetail();
    });

    this.root.querySelector('#btn-fullscreen')?.addEventListener('click', () => {
      this.sfx.click();
      if (!document.fullscreenElement && !(document as unknown as { webkitFullscreenElement?: Element }).webkitFullscreenElement) {
        const el = document.documentElement as HTMLElement & { webkitRequestFullscreen?: () => Promise<void> };
        if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      } else {
        const doc = document as Document & { webkitExitFullscreen?: () => Promise<void> };
        if (doc.exitFullscreen) doc.exitFullscreen().catch(() => {});
        else if (doc.webkitExitFullscreen) doc.webkitExitFullscreen();
      }
    });

    // Thử yêu cầu khóa màn hình ngang khi người dùng tương tác nếu trình duyệt hỗ trợ
    window.addEventListener('pointerdown', () => this.tryLockOrientation(), { once: true });
  }

  private tryLockOrientation() {
    try {
      const so = screen.orientation as unknown as { lock?: (mode: string) => Promise<void> } | undefined;
      so?.lock?.('landscape')?.catch?.(() => {});
    } catch {
      // Bỏ qua nếu trình duyệt không hỗ trợ (như iOS Safari)
    }
  }

  toast(text: string, kind = 'info') {
    const d = document.createElement('div');
    d.className = `toast ${kind}`;
    d.textContent = text;
    this.toastsEl.appendChild(d);
    while (this.toastsEl.children.length > 2) this.toastsEl.firstElementChild?.remove();
    setTimeout(() => d.remove(), 3200);
  }

  updateReleaseInfo(rel: AppReleaseInfo) {
    this.releaseInfo = rel;
    const shortHash = rel.buildHash.slice(0, 6);
    const vEl = this.root.querySelector('#hud-version');
    if (vEl) vEl.textContent = `v${rel.version}-${shortHash}`;
    const mEl = this.root.querySelector('#menu-build-tag');
    if (mEl) mEl.textContent = `v${rel.version} (${rel.buildHash.slice(0, 7)}) • M${rel.milestone}`;
  }

  updateHUD(
    prompt: PromptTarget | null,
    guideTarget: { label: string; dist: number; angle: number; isDuty?: boolean } | null,
  ) {
    const s = this.g.s;
    const cur = blockAt(s.minute);
    const nxt = nextBlock(s.minute);
    const p = this.hooks.playerPos();
    const zn = zoneName(p.x, p.z);
    const isTouch = this.isTouchDevice();

    // 1. Góc trên trái: Thời gian, khu vực, hoạt động
    this.clockEl.innerHTML = `
      <div class="hud-clock">Ngày ${s.day} · ${fmtTime(s.minute)} — <span style="color:#93c5fd">${zn}</span></div>
      <div>Hiện tại: <b style="color:#fde68a">${cur.label}</b> (${cur.where})</div>
      <div class="hud-sub">${nxt ? `Tiếp: ${fmtTime(nxt.start)} ${nxt.label}` : 'Cuối ngày — về buồng ngủ'}</div>
    `;

    // 2. Góc trên phải: Án còn lại
    this.sentenceEl.textContent = `Án: ${s.sentence.remaining}n`;

    // 3. Thanh mục tiêu 1 dòng gọn gàng
    let arrowStr = '';
    if (s.settings.guide && guideTarget) {
      const arrow = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'][
        Math.round(((guideTarget.angle % (Math.PI * 2)) + Math.PI * 2) / (Math.PI / 4)) % 8
      ];
      arrowStr = `${arrow} ${Math.round(guideTarget.dist)}m`;
    }

    let questTitle = '';
    let questTag = '🎯 Mục tiêu';
    if (guideTarget?.isDuty) {
      questTag = '🔔 Nghĩa vụ';
      questTitle = guideTarget.label;
    } else if (guideTarget) {
      questTitle = guideTarget.label;
    } else {
      const activeQuests = QUEST_ORDER.filter((q) => this.g.qStatus(q) === 'active');
      if (activeQuests.length > 0) {
        const def = QUESTS[activeQuests[0]];
        const br = this.g.qBranch(activeQuests[0]);
        const nextObj = def.objectives.find((o) => (!o.branch || o.branch === br) && !this.g.qObj(activeQuests[0], o.id));
        questTitle = `${def.title}: ${nextObj ? nextObj.text : 'Hoàn tất'}`;
      } else {
        questTitle = 'Sinh hoạt tự do trong khuôn viên';
      }
    }

    this.questBarEl.innerHTML = `
      <span class="quest-tag">${questTag}:</span>
      <span class="quest-text" title="${questTitle}">${questTitle}</span>
      ${arrowStr ? `<span class="quest-arrow">${arrowStr}</span>` : ''}
    `;

    // 4. Thanh chỉ số mini
    const st = s.stats;
    const isWarning =
      st.health < 30 || st.stamina < 15 || st.hunger > 75 || st.stress > 75 || st.suspicion > 70;
    if (isWarning) this.statsMiniEl.classList.add('stat-warning');
    else this.statsMiniEl.classList.remove('stat-warning');

    this.statsMiniEl.innerHTML = `
      <span class="stat-item ${st.health < 30 ? 'danger' : ''}">❤️${Math.round(st.health)}</span>
      <span class="stat-item ${st.stamina < 15 ? 'danger' : ''}">⚡${Math.round(st.stamina)}</span>
      <span class="stat-item ${st.hunger > 70 ? 'danger' : ''}">🍚${Math.round(st.hunger)}</span>
      <span class="stat-item ${st.stress > 70 ? 'danger' : ''}">🧠${Math.round(st.stress)}</span>
      <span class="stat-item">💰${fmtMoney(st.money)}</span>
    `;

    // 5. Nút tương tác và hộp nhắc ngữ cảnh
    if (prompt && !this.paused) {
      this.promptEl.style.display = 'block';
      this.promptEl.innerHTML = `
        <div>${isTouch ? '' : '<b>[E]</b> '}<b>${prompt.label}</b></div>
        ${prompt.risk ? `<div class="prompt-risk">⚠ Quy tắc & hậu quả: ${prompt.risk}</div>` : ''}
      `;
      this.promptEl.onclick = () => prompt.run();

      this.btnInteract.disabled = false;
      this.btnInteract.classList.add('btn-accent');
      let act = prompt.label;
      if (act.includes(':')) act = act.split(':')[1].trim();
      if (act.length > 16) act = act.slice(0, 16) + '…';
      this.btnInteract.textContent = act;
    } else {
      this.promptEl.style.display = 'none';
      this.btnInteract.disabled = true;
      this.btnInteract.classList.remove('btn-accent');
      this.btnInteract.textContent = isTouch ? 'Tương tác' : 'Tương tác (E)';
    }
  }

  closeModal() {
    if (this.activeMinigameCancel) {
      this.activeMinigameCancel();
      this.activeMinigameCancel = null;
    }
    this.modalHost.innerHTML = '';
    // Chỉ unpause nếu không bị pause bởi màn hình xoay dọc
    if (!this.pausedByOrientation) {
      this.paused = false;
    }
  }

  private showModal(html: string, onMount?: (el: HTMLElement) => void) {
    this.modalSeq++;
    this.paused = true;
    this.modalHost.innerHTML = `<div class="modal-backdrop"><div class="modal">${html}</div></div>`;
    const m = this.modalHost.querySelector('.modal') as HTMLElement;
    m.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', () => this.closeModal()));
    if (onMount) onMount(m);
  }

  // ───────────── Menu Chính Trung Tâm ─────────────
  showMainMenu() {
    const isTouch = this.isTouchDevice();
    this.showModal(
      `
      <h2>MENU TRÒ CHƠI</h2>
      <div class="hud-sub">Quản lý nhật ký, thông tin án, quan hệ và cài đặt trò chơi</div>
      <div class="menu-grid">
        <button class="menu-card-btn" data-menu="journal">
          <span class="icon">📜</span>
          <span>Nhật ký nhiệm vụ ${isTouch ? '' : '(J)'}</span>
        </button>
        <button class="menu-card-btn" data-menu="record">
          <span class="icon">📋</span>
          <span>Hồ sơ & Giảm án ${isTouch ? '' : '(P)'}</span>
        </button>
        <button class="menu-card-btn" data-menu="relations">
          <span class="icon">🤝</span>
          <span>Quan hệ bạn tù ${isTouch ? '' : '(R)'}</span>
        </button>
        <button class="menu-card-btn" data-menu="bag">
          <span class="icon">🎒</span>
          <span>Túi đồ cá nhân ${isTouch ? '' : '(B)'}</span>
        </button>
        <button class="menu-card-btn" data-menu="map">
          <span class="icon">🗺</span>
          <span>Bản đồ trại giam ${isTouch ? '' : '(M)'}</span>
        </button>
        <button class="menu-card-btn" data-menu="wait">
          <span class="icon">⏳</span>
          <span>Chờ giờ / Nghỉ</span>
        </button>
        <button class="menu-card-btn" data-menu="pause">
          <span class="icon">⚙</span>
          <span>Cài đặt & Âm thanh</span>
        </button>
      </div>
      <div class="menu-footer-bar" style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08);font-size:11px;color:#94a3b8">
        <span id="menu-build-tag">v${this.releaseInfo.version} (${this.releaseInfo.buildHash.slice(0, 7)}) • M${this.releaseInfo.milestone}</span>
        <button class="btn btn-accent" data-close>Đóng Menu</button>
      </div>
    `,
      (el) => {
        el.querySelectorAll('[data-menu]').forEach((b) => {
          b.addEventListener('click', () => {
            this.sfx.click();
            const p = (b as HTMLElement).dataset.menu!;
            this.openPanel(p);
          });
        });
      },
    );
  }

  // ───────────── Xem Chi Tiết Nhiệm Vụ ─────────────
  showQuestDetail() {
    const s = this.g.s;
    const activeQuests = QUEST_ORDER.filter((q) => this.g.qStatus(q) === 'active');
    const rows = activeQuests
      .map((qid) => {
        const def = QUESTS[qid];
        const br = this.g.qBranch(qid);
        const objsHtml = def.objectives
          .filter((o) => !o.branch || o.branch === br)
          .map((o) => {
            const done = this.g.qObj(qid, o.id);
            return `<div style="font-size:13px;margin:3px 0;color:${done ? '#86efac' : '#cbd5e1'}">
            ${done ? '✓' : '○'} ${o.text}
          </div>`;
          })
          .join('');
        return `
        <div class="card-row">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
            <b style="color:#fde68a;font-size:14px">${def.title}</b>
            <span class="tag good">Đang tiến hành</span>
          </div>
          <div style="color:var(--muted);font-size:12px;margin-bottom:6px">${def.reason}</div>
          <div style="padding-left:4px">${objsHtml}</div>
        </div>
      `;
      })
      .join('');

    this.showModal(`
      <h2>MỤC TIÊU & NHIỆM VỤ HIỆN TẠI</h2>
      <div class="hud-sub" style="margin-bottom:10px">Chương ${s.chapter} — Khám phá và đáp ứng quy chế trại giam</div>
      ${rows || '<div style="color:var(--muted);padding:10px 0">Hiện không có nhiệm vụ nào cần làm. Hãy tham gia lao động, học nghề hoặc gặp gỡ NPC.</div>'}
      <div style="text-align:right;margin-top:12px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `);
  }

  // ───────────── Xem Chi Tiết Chỉ Số ─────────────
  showStatsDetail() {
    const st = this.g.s.stats;
    const bar = (v: number, col = '#22c55e') =>
      `<span class="bar" style="width:100px;height:8px"><i style="width:${Math.round(v)}%;background:${col}"></i></span>`;

    this.showModal(`
      <h2>CHỈ SỐ SINH HOẠT & CẢI TẠO</h2>
      <div class="hud-sub" style="margin-bottom:10px">Cân bằng sức khỏe, nhu cầu cơ bản và hồ sơ kỷ luật</div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>❤️ <b>Sức khỏe</b>: ${Math.round(st.health)}/100</span>
          ${bar(st.health, st.health < 35 ? '#ef4444' : '#22c55e')}
        </div>
        <div class="hud-sub">Giảm khi bị thương tích, lao động quá sức hoặc đói kéo dài. Ngất xỉu khi về 0. Khám tại Phòng y tế để hồi phục.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>⚡ <b>Thể lực</b>: ${Math.round(st.stamina)}/100</span>
          ${bar(st.stamina, '#38bdf8')}
        </div>
        <div class="hud-sub">Tiêu hao khi chạy nhanh và thao tác xưởng. Tự hồi phục khi đi bộ hoặc nghỉ ngơi.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>🍚 <b>Mức đói</b>: ${Math.round(st.hunger)}/100</span>
          ${bar(st.hunger, st.hunger > 70 ? '#ef4444' : '#f59e0b')}
        </div>
        <div class="hud-sub">Tăng dần theo giờ. Cần ăn cơm đúng giờ tại Nhà ăn hoặc mua đồ ăn nhẹ tại quầy căn tin.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>🧠 <b>Căng thẳng</b>: ${Math.round(st.stress)}/100</span>
          ${bar(st.stress, st.stress > 70 ? '#ef4444' : '#a855f7')}
        </div>
        <div class="hud-sub">Tăng khi vi phạm hoặc chịu sức ép. Giảm bằng tập thể dục sân trại, đọc sách thư viện hoặc ngủ đủ giấc.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>🌟 <b>Điểm cải tạo</b>: ${Math.round(st.reform)}/100</span>
          ${bar(st.reform, '#f59e0b')}
        </div>
        <div class="hud-sub">Tiêu chí quan trọng nhất trong kỳ xét giảm án 5 ngày một lần. Tăng khi lao động đủ định mức, học nghề, giúp đỡ người khác.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>👀 <b>Mức nghi ngờ</b>: ${Math.round(st.suspicion)}/100</span>
          ${bar(st.suspicion, st.suspicion > 50 ? '#ef4444' : '#64748b')}
        </div>
        <div class="hud-sub">Tăng khi lảng vảng gần khu cấm, kho vật tư. Khi quá cao sẽ bị quản giáo khám xét bất ngờ.</div>
      </div>
      <div class="card-row">
        <div>💰 <b>Tiền lưu ký / căn tin</b>: <span style="color:#fde68a;font-size:15px;font-weight:700">${fmtMoney(st.money)}</span></div>
        <div class="hud-sub">Tiền thù lao lao động hoặc người nhà gửi vào. Dùng mua thuốc, đồ dùng căn tin.</div>
      </div>
      <div style="text-align:right;margin-top:12px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `);
  }

  openPanel(name: string) {
    switch (name) {
      case 'journal': return this.showJournal();
      case 'record': return this.showRecord();
      case 'relations': return this.showRelations();
      case 'bag': return this.showBag();
      case 'map': return this.showMap();
      case 'wait': return this.showWait();
      case 'pause': return this.showPause();
    }
  }

  // ───────────── Hội thoại ─────────────
  showDialogue(node: DNode, onEnd?: () => void) {
    const choicesHtml = node.choices
      .map(
        (c, i) => `
        <button class="choice-btn ${c.important ? 'important' : ''}" data-idx="${i}" ${c.disabled ? 'disabled' : ''}>
          ${c.important ? '<span class="tag bad">Quyết định quan trọng</span>' : ''}${c.label}
          ${c.risk ? `<span class="choice-risk">⚠ ${c.risk}</span>` : ''}
          ${c.disabled ? `<span class="choice-risk">🔒 ${c.disabled}</span>` : ''}
        </button>`,
      )
      .join('');
    this.showModal(
      `
      <h2>${node.speaker}</h2>
      ${node.role ? `<div class="hud-sub" style="margin-bottom:8px">${node.role}</div>` : ''}
      <div style="font-size:14.5px;line-height:1.55;white-space:pre-line">${node.text}</div>
      <div class="choice-list">${choicesHtml}</div>
    `,
      (el) => {
        el.querySelectorAll('[data-idx]').forEach((btn) => {
          btn.addEventListener('click', () => {
            this.sfx.click();
            const idx = Number((btn as HTMLElement).dataset.idx);
            const currentSeq = this.modalSeq;
            const next = node.choices[idx].run();
            if (next) this.showDialogue(next, onEnd);
            else {
              onEnd?.();
              if (this.modalSeq === currentSeq) {
                this.closeModal();
              }
            }
          });
        });
      },
    );
  }

  // ───────────── Thông báo vi phạm ─────────────
  showViolationBanner(v: Violation) {
    this.sfx.bad();
    this.toast(`VI PHẠM: ${v.title} — ${v.penalty}`, 'bad');
  }

  // ───────────── Nhật ký nhiệm vụ ─────────────
  private showJournal() {
    const rows = QUEST_ORDER.map((id) => {
      const q = QUESTS[id];
      const st = this.g.s.quests[id];
      const status = st?.status ?? 'locked';
      if (status === 'locked') {
        return `<div class="card-row"><span class="tag">${q.type === 'main' ? 'Chính' : 'Phụ'}</span><b>${q.title}</b> <span class="hud-sub">(Chưa mở — ${q.requirement})</span></div>`;
      }
      const badge = status === 'done' ? '<span class="tag good">Hoàn thành</span>' : status === 'failed' ? '<span class="tag bad">Thất bại</span>' : '<span class="tag">Đang làm</span>';
      const br = this.g.qBranch(id);
      const objs = q.objectives
        .filter((o) => !o.branch || o.branch === br)
        .map((o) => `<div style="margin-left:8px">${this.g.qObj(id, o.id) ? '✔' : '○'} ${o.text}</div>`)
        .join('');
      const choices = st.choices.length ? `<div class="hud-sub" style="margin-top:4px">Lựa chọn đã thực hiện: <b>${st.choices.join(' → ')}</b>${st.outcome ? ` (${st.outcome})` : ''}</div>` : '';
      return `
        <div class="card-row">
          <div>${badge}<span class="tag">${q.type === 'main' ? 'Chính' : 'Phụ'}</span><b>${q.title}</b> — Người giao: ${q.giver}</div>
          <div class="hud-sub">${q.reason}</div>
          <div style="margin-top:4px">${objs}</div>
          <div class="hud-sub" style="margin-top:4px">Thưởng: ${q.reward} · Nếu lỡ: ${q.failure}</div>
          ${choices}
        </div>`;
    }).join('');
    const clueHtml = this.g.s.clues.length
      ? this.g.s.clues.map((c) => `<div class="card-row" style="border-color:#38bdf8">🔍 <b>Manh mối:</b> ${c}</div>`).join('')
      : '<div class="hud-sub">Chưa có manh mối nào trong sổ tay điều tra.</div>';

    this.showModal(`
      <h2>Nhật ký nhiệm vụ & Sổ tay điều tra</h2>
      ${rows}
      <h3>Sổ tay điều tra & Manh mối</h3>
      ${clueHtml}
      <button class="btn" data-close>Đóng</button>
    `);
  }

  // ───────────── Hồ sơ án & vi phạm ─────────────
  showRecord() {
    const s = this.g.s;
    const proj = project(s);
    const rev = computeReview(s, proj.nextReview);
    const brk = rev.breakdown.map((b) => `<div>• ${b.label}: <b>${b.value >= 0 ? '+' : ''}${b.value}</b></div>`).join('');
    const vios = s.violations.length
      ? s.violations
          .slice()
          .reverse()
          .map(
            (v) => `
          <div class="card-row">
            <div><span class="tag ${v.status === 'overturned' ? 'good' : 'bad'}">${v.status === 'overturned' ? 'ĐÃ HỦY' : `Mức ${v.severity}`}</span><b>${v.title}</b> (Ngày ${v.day}, ${fmtTime(v.minute)})</div>
            <div class="hud-sub">Bằng chứng: ${v.evidence}</div>
            <div class="hud-sub">Xử lý: ${v.penalty} (${v.reformDelta} điểm cải tạo)</div>
          </div>`,
          )
          .join('')
      : '<div class="hud-sub">Chưa có hồ sơ vi phạm nào.</div>';

    this.showModal(`
      <h2>Hồ sơ phạm nhân Minh · AP-0317</h2>
      <div class="card-row">
        <div>Án ban đầu: <b>${s.sentence.total} ngày</b> · Đã chấp hành: <b>${s.sentence.served} ngày</b> · Còn lại: <b style="color:#fde68a">${s.sentence.remaining} ngày</b></div>
        <div>Kỳ xét giảm án tiếp theo: <b>Ngày ${proj.nextReview}</b> (mỗi 5 ngày xét 1 lần, giảm thêm 0–3 ngày)</div>
        <div>Dự kiến ngày ra tù: <b>Ngày ${proj.releaseEstimated}</b> (nếu không giảm thêm: Ngày ${proj.releaseNoReduction})</div>
        <div class="hud-sub" style="margin-top:4px">Ghi chú: Đây là hệ thống luật hư cấu phục vụ gameplay.</div>
      </div>
      <h3>Cách tính kỳ xét tiếp theo (ước tính hiện tại: −${rev.reduction} ngày)</h3>
      <div class="card-row">${brk}</div>
      <h3>Lịch sử vi phạm (${s.violations.length})</h3>
      ${vios}
      <button class="btn" data-close>Đóng</button>
    `);
  }

  // ───────────── Khiếu nại với Quản giáo Lan ─────────────
  showAppealModal() {
    const list = this.g.s.violations.filter((v) => v.status === 'active' && !v.appealed && v.severity > 0);
    const rows = list.length
      ? list
          .map((v) => {
            const chk = this.g.appealCheck(v);
            return `
            <div class="card-row">
              <div><b>${v.title}</b> (Ngày ${v.day}) — ${v.penalty}</div>
              <div class="hud-sub">Bằng chứng trong hồ sơ: ${v.evidence}</div>
              <div class="hud-sub" style="color:#fde68a">Đánh giá căn cứ: ${chk.reason}</div>
              <button class="btn btn-accent" style="margin-top:6px" data-appeal="${v.id}">Gửi giải trình hồ sơ này</button>
            </div>`;
          })
          .join('')
      : '<div class="card-row">Hiện không có hồ sơ vi phạm nào cần giải trình.</div>';
    this.showModal(`<h2>Giải trình / Khiếu nại với Quản giáo Lan</h2>${rows}<button class="btn" data-close>Đóng</button>`, (el) => {
      el.querySelectorAll('[data-appeal]').forEach((b) => {
        b.addEventListener('click', () => {
          const id = (b as HTMLElement).dataset.appeal!;
          const r = this.g.appeal(id);
          this.showModal(`<h2>Kết quả giải trình</h2><div class="card-row">${r.reason}</div><button class="btn" data-close>Đóng</button>`);
        });
      });
    });
  }

  // ───────────── Quan hệ & tìm NPC ─────────────
  private showRelations() {
    const actors = this.hooks.npcs();
    const p = this.hooks.playerPos();
    const rows = (Object.keys(NPCS) as NpcId[])
      .map((id) => {
        const def = NPCS[id];
        const rel = this.g.s.relations[id];
        const act = actors[id];
        const d = Math.round(Math.hypot(act.x - p.x, act.z - p.z));
        const mems = rel.memories.length
          ? rel.memories.map((m) => `<div>• Ngày ${m.day}: ${m.text}</div>`).join('')
          : '<div class="hud-sub">Chưa có sự kiện đáng nhớ.</div>';
        return `
        <div class="card-row">
          <div><b>${def.name}</b> — ${def.role} · Quan hệ: <b>${rel.value}</b></div>
          <div class="hud-sub">Hiện tại: <b>${act.activity}</b> tại ${zoneName(act.x, act.z)} (cách ${d}m)</div>
          <div class="hud-sub">Lịch thường ngày: ${def.whereHint}</div>
          <div style="margin-top:4px">${mems}</div>
        </div>`;
      })
      .join('');
    this.showModal(`<h2>Quan hệ & Vị trí nhân vật</h2>${rows}<button class="btn" data-close>Đóng</button>`);
  }

  // ───────────── Túi đồ ─────────────
  private showBag() {
    const entries = Object.entries(this.g.s.inventory).filter(([, n]) => n > 0);
    const rows = entries
      .map(([id, n]) => {
        const def = ITEMS[id];
        const tag = def?.essential ? '<span class="tag">Thiết yếu</span>' : def?.quest ? '<span class="tag">Nhiệm vụ</span>' : def?.contraband ? '<span class="tag bad">Hàng cấm</span>' : '';
        return `
        <div class="card-row">
          <div>${tag}<b>${def?.name ?? id}</b> ×${n}</div>
          <div class="hud-sub">${def?.desc ?? ''}</div>
          ${def?.use ? `<button class="btn" style="margin-top:5px" data-use="${id}">Sử dụng</button>` : ''}
        </div>`;
      })
      .join('');
    this.showModal(`<h2>Túi đồ</h2>${rows || '<div class="hud-sub">Trống.</div>'}<button class="btn" data-close>Đóng</button>`, (el) => {
      el.querySelectorAll('[data-use]').forEach((b) => {
        b.addEventListener('click', () => {
          const err = this.g.useItem((b as HTMLElement).dataset.use!);
          if (err) this.toast(err, 'warn');
          this.showBag();
        });
      });
    });
  }

  // ───────────── Căn tin ─────────────
  showCanteen() {
    const shopIds = Object.keys(ITEMS).filter((k) => ITEMS[k].price);
    const rows = shopIds
      .map((id) => {
        const it = ITEMS[id];
        return `
        <div class="card-row" style="display:flex;justify-content:space-between;align-items:center">
          <div><b>${it.name}</b> — ${fmtMoney(it.price!)}<div class="hud-sub">${it.desc}</div></div>
          <button class="btn btn-accent" data-buy="${id}">Mua</button>
        </div>`;
      })
      .join('');
    this.showModal(
      `<h2>Quầy căn tin (Tiền hiện có: ${fmtMoney(this.g.s.stats.money)})</h2>
       <div class="hud-sub" style="margin-bottom:8px">Mở cửa 16:30–21:00. Vật phẩm thiết yếu và nhiệm vụ không thể bán hay vứt.</div>
       ${rows}
       <button class="btn" data-close>Đóng</button>`,
      (el) => {
        el.querySelectorAll('[data-buy]').forEach((b) => {
          b.addEventListener('click', () => {
            const err = this.g.buy((b as HTMLElement).dataset.buy!);
            if (err) this.toast(err, 'bad');
            else this.sfx.good();
            this.showCanteen();
          });
        });
      },
    );
  }

  // ───────────── Bản đồ & giờ mở cửa ─────────────
  private showMap() {
    const p = this.hooks.playerPos();
    const actors = this.hooks.npcs();
    const accessRows = Object.entries(ACCESS)
      .map(([k, r]) => {
        const open = this.g.isOpen(k);
        return `<div>• <b>${r.label}:</b> <span style="color:${open ? '#4ade80' : '#f87171'}">${open ? 'Đang mở' : 'Đang khóa'}</span> — ${r.reason}</div>`;
      })
      .join('');
    this.showModal(
      `<h2>Bản đồ Trại giam An Phú</h2>
       <canvas id="map-cv" width="540" height="440" style="width:100%;background:#1e293b;border-radius:8px"></canvas>
       <div style="margin:8px 0">
         <label><input type="checkbox" id="chk-guide" ${this.g.s.settings.guide ? 'checked' : ''}/> Hiển thị mũi tên chỉ đường mục tiêu trên HUD</label>
       </div>
       <h3>Giờ mở cửa & quy tắc tiếp cận</h3>
       <div class="card-row">${accessRows}</div>
       <button class="btn" data-close>Đóng</button>`,
      (el) => {
        const cv = el.querySelector('#map-cv') as HTMLCanvasElement;
        const ctx = cv.getContext('2d')!;
        const toX = (x: number) => ((x + 31) / 62) * cv.width;
        const toY = (z: number) => ((z + 35) / 58) * cv.height;
        ctx.fillStyle = '#334155';
        ctx.fillRect(0, 0, cv.width, cv.height);
        for (const k of Object.keys(BUILDINGS)) {
          const b = BUILDINGS[k];
          ctx.fillStyle = '#475569';
          ctx.strokeStyle = '#94a3b8';
          ctx.fillRect(toX(b.x1), toY(b.z1), toX(b.x2) - toX(b.x1), toY(b.z2) - toY(b.z1));
          ctx.strokeRect(toX(b.x1), toY(b.z1), toX(b.x2) - toX(b.x1), toY(b.z2) - toY(b.z1));
          ctx.fillStyle = '#f8fafc';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(b.name, toX(b.x1) + 6, toY(b.z1) + 16);
        }
        const rc = ZONES.find((z) => z.id === 'rollcall')!;
        ctx.strokeStyle = '#facc15';
        ctx.strokeRect(toX(rc.x1), toY(rc.z1), toX(rc.x2) - toX(rc.x1), toY(rc.z2) - toY(rc.z1));
        ctx.fillStyle = '#fde68a';
        ctx.fillText('Ô điểm danh', toX(rc.x1) + 4, toY(rc.z1) + 14);

        for (const id of Object.keys(actors) as NpcId[]) {
          const a = actors[id];
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.arc(toX(a.x), toY(a.z), 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#e2e8f0';
          ctx.font = '11px sans-serif';
          ctx.fillText(NPC_NAMES[id], toX(a.x) + 7, toY(a.z) + 4);
        }
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(toX(p.x), toY(p.z), 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText('BẠN', toX(p.x) + 9, toY(p.z) + 4);

        el.querySelector('#chk-guide')?.addEventListener('change', (ev) => {
          this.g.s.settings.guide = (ev.target as HTMLInputElement).checked;
          this.g.commit();
        });
      },
    );
  }

  // ───────────── Chờ tới mốc giờ tiếp theo ─────────────
  showWait() {
    const pv = this.g.previewWait();
    const sleep = this.g.canSleep();
    const schedRows = SCHEDULE.map(
      (b) => `<div style="${this.g.s.minute >= b.start && this.g.s.minute < b.end ? 'color:#fde68a;font-weight:700' : ''}">${fmtTime(b.start)}–${fmtTime(b.end)}: ${b.label} (${b.where})</div>`,
    ).join('');
    this.showModal(
      `<h2>Lịch sinh hoạt & Chờ giờ</h2>
       <div class="card-row">${schedRows}</div>
       ${
         pv
           ? `<div class="card-row">
                <div>Chuyển tới mốc tiếp theo: <b>${pv.label}</b></div>
                ${pv.warnings.map((w) => `<div class="choice-risk">⚠ ${w}</div>`).join('')}
                <button class="btn btn-accent" style="margin-top:6px" id="btn-do-wait">Chờ đến ${fmtTime(pv.target)}</button>
              </div>`
           : ''
       }
       <div class="card-row">
         <div>Ngủ qua đêm: ${sleep.reason}</div>
         <button class="btn btn-accent" style="margin-top:6px" id="btn-do-sleep" ${sleep.ok ? '' : 'disabled'}>Đi ngủ kết thúc ngày</button>
       </div>
       <button class="btn" data-close>Đóng</button>`,
      (el) => {
        el.querySelector('#btn-do-wait')?.addEventListener('click', () => {
          this.closeModal();
          if (pv) this.hooks.onWait(pv.target);
        });
        el.querySelector('#btn-do-sleep')?.addEventListener('click', () => {
          this.closeModal();
          this.hooks.onSleep();
        });
      },
    );
  }

  // ───────────── Mini-game xưởng: lắp ráp 3 bước ─────────────
  showWorkbenchMinigame() {
    const reason = this.g.canWorkReason();
    const autoErr = this.g.canAutoWork();
    if (reason) {
      this.showModal(`
        <h2>Bàn lắp ráp ổ cắm điện</h2>
        <div class="card-row">${reason}</div>
        ${!autoErr ? `<button class="btn btn-accent" id="btn-auto-work">Tự hoàn thành ca sáng (70% tiền công)</button>` : `<div class="hud-sub">${autoErr}</div>`}
        <button class="btn" style="margin-top:8px" data-close>Đóng</button>
      `, (el) => {
        el.querySelector('#btn-auto-work')?.addEventListener('click', () => {
          this.g.autoWork();
          this.closeModal();
        });
      });
      return;
    }

    let step = 0;
    let cursor = 0;
    let dir = 1;
    const scores: number[] = [];
    let raf = 0;
    let last = performance.now();

    const mode = this.g.workMode();
    const progressLabel = mode === 'morning'
      ? `Sản phẩm ca sáng: ${this.g.s.daily.workUnits}/${WORK_QUOTA}`
      : `Sản phẩm ca chiều: ${this.g.s.daily.extraShiftUnits}/${EXTRA_SHIFT_MAX}`;

    this.showModal(
      `<h2>Lắp ráp ổ cắm điện (${progressLabel})</h2>
       <div class="hud-sub">Mỗi bước tốn 3 thể lực (hiện còn <b id="wg-stam">${Math.round(this.g.s.stats.stamina)}</b>). Canh vạch trắng vào vùng xanh rồi bấm <b>Thực hiện bước</b>.</div>
       <div class="card-row" style="margin-top:8px">
         <div id="wg-step" style="font-weight:700;margin-bottom:6px">${STEPS[0].name}</div>
         <div style="position:relative;height:26px;background:#1e293b;border-radius:6px;overflow:hidden">
           <div id="wg-zone" style="position:absolute;top:0;bottom:0;background:#15803d"></div>
           <div id="wg-cur" style="position:absolute;top:0;bottom:0;width:5px;background:#fde68a"></div>
         </div>
         <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
           <button class="btn btn-accent" id="wg-hit">Thực hiện bước (Space)</button>
           ${!autoErr ? `<button class="btn" id="wg-auto">Tự hoàn thành ca (70% công)</button>` : ''}
           <button class="btn" data-close>Nghỉ tay</button>
         </div>
       </div>`,
      (el) => {
        const stepEl = el.querySelector('#wg-step')!;
        const zoneEl = el.querySelector('#wg-zone') as HTMLElement;
        const curEl = el.querySelector('#wg-cur') as HTMLElement;
        const stamEl = el.querySelector('#wg-stam')!;

        const renderZone = () => {
          const [a, b] = STEPS[step].zone;
          zoneEl.style.left = `${a * 100}%`;
          zoneEl.style.width = `${(b - a) * 100}%`;
          stepEl.textContent = STEPS[step].name;
          stamEl.textContent = String(Math.round(this.g.s.stats.stamina));
        };
        renderZone();

        const loop = (now: number) => {
          const dt = Math.min(0.05, (now - last) / 1000);
          last = now;
          cursor += dir * dt * 1.15;
          if (cursor >= 1) { cursor = 1; dir = -1; }
          if (cursor <= 0) { cursor = 0; dir = 1; }
          curEl.style.left = `${cursor * 98}%`;
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        this.activeMinigameCancel = () => cancelAnimationFrame(raf);

        const hit = () => {
          this.g.addStat('stamina', -3);
          const [a, b] = STEPS[step].zone;
          const mid = (a + b) / 2;
          const inside = cursor >= a && cursor <= b;
          const q = inside ? 95 - Math.abs(cursor - mid) * 60 : Math.max(35, 75 - Math.abs(cursor - mid) * 110);
          scores.push(q);
          this.sfx.click();
          step++;
          if (step >= STEPS.length) {
            cancelAnimationFrame(raf);
            this.activeMinigameCancel = null;
            const avg = scores.reduce((x, y) => x + y, 0) / scores.length;
            this.g.finishWorkUnit(avg, true);
            this.sfx.good();
            this.closeModal();
          } else {
            renderZone();
          }
        };

        el.querySelector('#wg-hit')?.addEventListener('click', hit);
        el.querySelector('#wg-auto')?.addEventListener('click', () => {
          cancelAnimationFrame(raf);
          this.activeMinigameCancel = null;
          this.g.autoWork();
          this.closeModal();
        });
      },
    );
  }

  // ───────────── Mini-game tập xà đơn ngoài sân ─────────────
  showExerciseMinigame() {
    const err = this.g.exerciseReason();
    if (err) {
      this.toast(err, 'warn');
      return;
    }
    let reps = 0;
    let cursor = 0.5;
    let dir = 1;
    let score = 0;
    let raf = 0;
    let last = performance.now();

    this.showModal(
      `<h2>Tập xà đơn (Hiệp ${this.g.s.daily.exercise + 1}/2 hôm nay)</h2>
       <div class="hud-sub">Canh nhịp thở trong vùng xanh cho 3 lần kéo xà để giảm căng thẳng và tăng thể chất.</div>
       <div class="card-row" style="margin-top:8px">
         <div id="ex-lbl" style="font-weight:700;margin-bottom:6px">Nhịp 1 / 3</div>
         <div style="position:relative;height:24px;background:#1e293b;border-radius:6px;overflow:hidden">
           <div style="position:absolute;left:35%;width:30%;top:0;bottom:0;background:#0284c7"></div>
           <div id="ex-cur" style="position:absolute;top:0;bottom:0;width:5px;background:#fde68a"></div>
         </div>
         <button class="btn btn-accent" style="margin-top:10px" id="ex-pull">Kéo xà!</button>
         <button class="btn" style="margin-top:10px" data-close>Dừng</button>
       </div>`,
      (el) => {
        const curEl = el.querySelector('#ex-cur') as HTMLElement;
        const lbl = el.querySelector('#ex-lbl')!;
        const loop = (now: number) => {
          const dt = Math.min(0.05, (now - last) / 1000);
          last = now;
          cursor += dir * dt * 1.25;
          if (cursor >= 1) { cursor = 1; dir = -1; }
          if (cursor <= 0) { cursor = 0; dir = 1; }
          curEl.style.left = `${cursor * 98}%`;
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        this.activeMinigameCancel = () => cancelAnimationFrame(raf);

        el.querySelector('#ex-pull')?.addEventListener('click', () => {
          const ok = cursor >= 0.35 && cursor <= 0.65;
          score += ok ? 1 : 0.45;
          reps++;
          this.sfx.click();
          if (reps >= 3) {
            cancelAnimationFrame(raf);
            this.activeMinigameCancel = null;
            this.g.exercise(score / 3);
            this.sfx.good();
            this.closeModal();
          } else {
            lbl.textContent = `Nhịp ${reps + 1} / 3`;
          }
        });
      },
    );
  }

  // ───────────── Mini-game 2: Lớp học nghề quan sát mạch điện ─────────────
  showVocationalMinigame(onDone?: () => void) {
    const COLORS = [
      { id: 1, name: 'Dây Đỏ (Pha L1)', color: '#ef4444' },
      { id: 2, name: 'Dây Vàng (Pha L2)', color: '#facc15' },
      { id: 3, name: 'Dây Xanh lam (Trung tính)', color: '#38bdf8' },
      { id: 4, name: 'Dây Xanh lá (Tiếp địa PE)', color: '#22c55e' },
    ];
    // Sơ đồ mẫu
    const targetSeq = [1, 3, 2, 4];
    const playerSeq: number[] = [];

    this.showModal(
      `<h2>Lớp học nghề — Bài kiểm tra an toàn điện</h2>
       <div class="hud-sub">Quy tắc an toàn của Thầy Phúc: Nối đúng thứ tự theo sơ đồ chuẩn: <b>1. Dây Đỏ → 2. Dây Xanh lam → 3. Dây Vàng → 4. Dây Xanh lá (Tiếp địa)</b>.</div>
       <div class="card-row" style="margin-top:10px;text-align:center">
         <div id="voc-display" style="font-weight:700;font-size:16px;color:#fde68a;min-height:30px;margin-bottom:10px">
           Tiến độ nối: 0 / 4 dây
         </div>
         <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:400px;margin:0 auto">
           ${COLORS.map((c) => `
             <button class="btn" style="background:${c.color};color:#0f172a;font-weight:700;padding:12px;font-size:14px" data-voc-btn="${c.id}">
               ${c.name}
             </button>
           `).join('')}
         </div>
         <div style="margin-top:14px">
           <button class="btn" id="voc-reset">Nối lại từ đầu</button>
           <button class="btn" data-close>Thoát</button>
         </div>
       </div>`,
      (el) => {
        const display = el.querySelector('#voc-display')!;
        el.querySelectorAll('[data-voc-btn]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const id = Number((btn as HTMLElement).dataset.vocBtn);
            playerSeq.push(id);
            this.sfx.click();
            const step = playerSeq.length;
            display.textContent = `Đã nối ${step}/4: ${playerSeq.map((x) => COLORS.find((c) => c.id === x)?.name).join(' → ')}`;

            if (step === targetSeq.length) {
              const correct = playerSeq.every((val, idx) => val === targetSeq[idx]);
              if (correct) {
                this.sfx.good();
                this.g.completeObjective('lop_nghe_dau', 'thao_tac');
                this.g.addReform(3, 'Thực hành nối mạch điện an toàn');
                this.g.s.skills.vocationalExam++;
                this.showModal(`
                  <h2>Hoàn thành bài tập học nghề!</h2>
                  <div class="card-row" style="color:#4ade80">
                    ✔ Chính xác tuyệt đối! Trình tự đóng cắt và tiếp địa chuẩn quy chuẩn an toàn điện. Thầy Phúc đã ghi nhận bài thực hành của bạn.
                  </div>
                  <button class="btn btn-accent" data-close>Gặp Thầy Phúc nhận xét</button>
                `, () => onDone?.());
              } else {
                this.sfx.bad();
                display.textContent = '❌ Sai trình tự an toàn! Hãy bấm "Nối lại từ đầu" để làm lại.';
                playerSeq.length = 0;
              }
            }
          });
        });
        el.querySelector('#voc-reset')?.addEventListener('click', () => {
          playerSeq.length = 0;
          display.textContent = 'Tiến độ nối: 0 / 4 dây';
        });
      },
    );
  }

  // ───────────── Hoạt động phụ việc y tế ─────────────
  showMedicineSortingMinigame() {
    this.showModal(`
      <h2>Tủ thuốc y tế — Phân loại thuốc men</h2>
      <div class="card-row">
        Bạn dành 30 phút cùng Y sĩ An lau dọn tủ kính, phân loại các vỉ thuốc hạ sốt, kháng sinh và đóng gói băng gạc sạch sẽ.
      </div>
      <div class="card-row" style="color:#4ade80">
        ✔ Hoàn thành tốt việc được giao. Y sĩ An rất hài lòng.
      </div>
      <button class="btn btn-accent" id="med-done-btn">Nhận thưởng & Đóng</button>
    `, (el) => {
      el.querySelector('#med-done-btn')?.addEventListener('click', () => {
        this.g.completeObjective('phu_y_te', 'nhan_viec');
        this.g.completeObjective('phu_y_te', 'hoan_thanh');
        this.closeModal();
      });
    });
  }

  // ───────────── Đọc sách thư viện ─────────────
  showLibraryReader() {
    this.showModal(`
      <h2>Thư viện trại giam An Phú</h2>
      <div class="card-row">
        Giá sách gồm nhiều đầu sách cẩm nang phổ biến giáo dục pháp luật, sổ tay nghề cơ điện và tác phẩm văn học phục vụ cải tạo.
      </div>
      <div class="choice-list">
        <button class="choice-btn" id="lib-read-law">Đọc Cẩm nang pháp luật & quyền giảm án (−10 căng thẳng, +1 điểm cải tạo)</button>
        <button class="choice-btn" id="lib-read-tech">Đọc Sách hướng dẫn kỹ thuật điện dân dụng (−5 căng thẳng)</button>
        <button class="choice-btn" data-close>Rời giá sách</button>
      </div>
    `, (el) => {
      el.querySelector('#lib-read-law')?.addEventListener('click', () => {
        this.g.addStat('stress', -10);
        this.g.addReform(1, 'Đọc sách pháp luật');
        this.g.completeObjective('sach_thu_vien', 'muon_sach');
        this.g.completeObjective('sach_thu_vien', 'doc_xong');
        this.sfx.good();
        this.showModal(`
          <h2>Đã đọc xong Cẩm nang pháp luật</h2>
          <div class="card-row">
            Bạn nắm rõ hơn các tiêu chí đánh giá giảm án: hồ sơ kỷ luật sạch, tích cực học nghề, chấp hành thời gian biểu nghiêm túc và có thái độ hòa nhã với mọi người.
          </div>
          <button class="btn" data-close>Đóng</button>
        `);
      });
      el.querySelector('#lib-read-tech')?.addEventListener('click', () => {
        this.g.addStat('stress', -5);
        this.sfx.good();
        this.showModal(`
          <h2>Sách kỹ thuật điện dân dụng</h2>
          <div class="card-row">
            Ghi nhớ các nguyên lý đấu dây cơ bản: dây nóng (pha) đi qua công tắc, dây tiếp địa bảo vệ chống rò rỉ điện giật.
          </div>
          <button class="btn" data-close>Đóng</button>
        `);
      });
    });
  }

  // ───────────── Phiên xem xét tăng án ─────────────
  showHearing(h: Hearing) {
    this.showModal(
      `<h2>Phiên xem xét kỷ luật: ${h.title}</h2>
       <div class="card-row">
         <div><b>Hành vi:</b> ${h.charge}</div>
         <div><b>Bằng chứng:</b> ${h.evidence.join('; ')}</div>
         <div><b>Mức đề nghị:</b> Cộng ${h.baseDays} ngày án.</div>
       </div>
       <div class="choice-list">
         <button class="choice-btn important" data-h="confess">Thành khẩn nhận lỗi (giảm 1 ngày so với mức đề nghị, +2 điểm cải tạo)</button>
         <button class="choice-btn important" data-h="explain">Giải trình: Lâm đe dọa và gây sự trước (cần nhân chứng Huy hoặc Chú Bảy tin tưởng ≥ 20)</button>
         <button class="choice-btn" data-h="silent">Im lặng chấp nhận quyết định</button>
       </div>`,
      (el) => {
        el.querySelectorAll('[data-h]').forEach((b) => {
          b.addEventListener('click', () => {
            const c = (b as HTMLElement).dataset.h as 'confess' | 'explain' | 'silent';
            const res = this.g.resolveHearing(c);
            this.showModal(`<h2>Quyết định của Hội đồng</h2><div class="card-row">${res.text}</div><button class="btn" data-close>Đóng</button>`);
          });
        });
      },
    );
  }

  // ───────────── Tổng kết cuối ngày & Kết thúc ─────────────
  showDaySummary(sum: DaySummary) {
    const revHtml = sum.review
      ? `<div class="card-row" style="border-color:#22c55e">
           <b>KỲ XÉT GIẢM ÁN NGÀY ${sum.review.day}:</b> Giảm thêm <b>${sum.review.reduction} ngày án</b>!
           ${sum.review.breakdown.map((b) => `<div class="hud-sub">• ${b.label}: ${b.value}</div>`).join('')}
         </div>`
      : '';
    this.showModal(
      `<h2>Tổng kết Ngày ${sum.day}</h2>
       <div class="card-row">
         <div>Điểm danh: <b>${sum.rollcall}</b> · Lao động: <b>${sum.work}</b> (${sum.workUnits}/${WORK_QUOTA} sản phẩm) · Bữa ăn: ${sum.meals}/3</div>
         <div>Thay đổi điểm cải tạo: <b>${sum.reformDelta >= 0 ? '+' : ''}${sum.reformDelta}</b> · Tiền: <b>${sum.moneyDelta >= 0 ? '+' : ''}${fmtMoney(sum.moneyDelta)}</b></div>
         <div>Vi phạm trong ngày: ${sum.violations.length ? sum.violations.join(', ') : 'Không có'}</div>
         <div>Quan hệ thay đổi: ${sum.relationChanges.length ? sum.relationChanges.map((r) => `${r.npc} (${r.delta > 0 ? '+' : ''}${r.delta})`).join(', ') : 'Không'}</div>
         <div style="margin-top:6px;color:#fde68a">Án còn lại sau ngày ${sum.day}: <b>${sum.remainingAfter} ngày</b></div>
       </div>
       ${revHtml}
       <button class="btn btn-accent" id="btn-next-day">${this.g.s.ending ? 'Xem kết thúc ra tù' : `Bắt đầu Ngày ${this.g.s.day}`}</button>`,
      (el) => {
        el.querySelector('#btn-next-day')?.addEventListener('click', () => {
          this.closeModal();
          if (this.g.s.ending) this.showEnding(this.g.s.ending);
        });
      },
    );
  }

  showEnding(code: string) {
    const endings: Record<string, { title: string; body: string }> = {
      tu_te: {
        title: 'KẾT THÚC 1 — NGÀY TRỞ VỀ TỬ TẾ',
        body: 'Cánh cổng sắt Trại giam An Phú mở ra vào buổi sáng nắng nhẹ. Chị Mai đứng đợi sẵn bên hàng phượng. Nhờ giữ mình không khuất phục trước cám dỗ, chăm chỉ lao động và sống có tình nghĩa với Chú Bảy, Huy, bạn được giảm án sớm và bước ra với cái đầu ngẩng cao.',
      },
      lang_le: {
        title: 'KẾT THÚC 2 — BƯỚC QUA CÁNH CỔNG',
        body: 'Bạn hoàn thành bản án và bước ra khỏi cổng trại An Phú. Những va vấp trong trại khiến ngày về dài hơn dự tính, nhưng phía trước vẫn là cuộc đời tự do để làm lại từ đầu.',
      },
      rang_buoc: {
        title: 'KẾT THÚC 3 — CÁI GIÁ CỦA ĐƯỜNG TẮT',
        body: 'Bạn ra khỏi cổng trại với vài đồng tiền kiếm nhanh trong túi, nhưng ở góc đường đã có người của Lâm đứng đợi nhắc về "chuyện hộp mũi khoan hôm trước". Tự do đã đến, nhưng cái bóng của lựa chọn dễ dãi vẫn đi theo.',
      },
    };
    const e = endings[code] ?? endings.lang_le;
    this.showModal(
      `<h2>${e.title}</h2>
       <div class="card-row" style="font-size:14.5px;line-height:1.6">${e.body}</div>
       <div class="card-row">
         <div>Tổng số ngày trong trại: <b>${this.g.s.sentence.served} ngày</b> · Điểm cải tạo cuối: <b>${Math.round(this.g.s.stats.reform)}</b></div>
       </div>
       <button class="btn btn-accent" id="btn-replay">Chơi lại từ đầu</button>`,
      (el) => {
        el.querySelector('#btn-replay')?.addEventListener('click', () => {
          this.closeModal();
          this.hooks.onReset();
        });
      },
    );
  }

  // ───────────── Menu tạm dừng & cài đặt ─────────────
  private showPause() {
    const st = this.g.s.settings;
    this.showModal(
      `<h2>Menu tạm dừng — ĐI TÙ ONLINE (Mốc 1)</h2>
       <div class="card-row">
         <label>Chất lượng đồ họa:
           <select id="sel-q">
             <option value="low" ${st.quality === 'low' ? 'selected' : ''}>Thấp (điện thoại yếu)</option>
             <option value="medium" ${st.quality === 'medium' ? 'selected' : ''}>Vừa</option>
             <option value="high" ${st.quality === 'high' ? 'selected' : ''}>Cao</option>
           </select>
         </label>
       </div>
       <div class="card-row">
         <label>Âm lượng: <input type="range" id="rng-vol" min="0" max="1" step="0.05" value="${st.volume}"/></label>
       </div>
       <div class="card-row">
         <div class="hud-sub">Điều khiển: WASD di chuyển, kéo chuột/vuốt xoay camera, Shift chạy, E tương tác, J/P/R/B/M mở bảng. Tiến trình tự động lưu vào trình duyệt.</div>
       </div>
       <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
         <button class="btn btn-accent" data-close>Tiếp tục chơi</button>
         <button class="btn btn-danger" id="btn-reset">Bắt đầu lại từ đầu</button>
       </div>`,
      (el) => {
        el.querySelector('#sel-q')?.addEventListener('change', (e) => {
          this.g.s.settings.quality = (e.target as HTMLSelectElement).value as 'low' | 'medium' | 'high';
          this.hooks.onSettingChange();
          this.g.commit();
        });
        el.querySelector('#rng-vol')?.addEventListener('input', (e) => {
          this.g.s.settings.volume = Number((e.target as HTMLInputElement).value);
          this.hooks.onSettingChange();
          this.g.commit();
        });
        el.querySelector('#btn-reset')?.addEventListener('click', () => {
          this.showModal(
            `<h2>Xác nhận bắt đầu lại?</h2>
             <div class="card-row">Toàn bộ tiến trình hiện tại sẽ bị xóa và bắt đầu lại từ Ngày 1.</div>
             <button class="btn btn-danger" id="btn-confirm-reset">Xác nhận xóa & chơi mới</button>
             <button class="btn" data-close>Hủy</button>`,
            (el2) => {
              el2.querySelector('#btn-confirm-reset')?.addEventListener('click', () => {
                this.closeModal();
                this.hooks.onReset();
              });
            },
          );
        });
      },
    );
  }
}
