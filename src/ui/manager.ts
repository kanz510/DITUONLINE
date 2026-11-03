import {
  ACCESS, BACKGROUNDS, DIFFICULTIES, blockAt, fmtMoney, fmtTime, nextBlock,
  type AttributeId, type BackgroundId, type Difficulty,
} from '../logic/constants';
import { GameLogic, NPC_NAMES } from '../logic/game';
import { computeReview, project } from '../logic/sentence';
import {
  xpForNextLevel, type CharacterProfile, type DaySummary, type Hearing, type NpcId, type Violation,
} from '../logic/state';
import { ITEMS } from '../data/items';
import { QUEST_ORDER, QUESTS } from '../data/quests';
import type { DNode } from '../data/dialogues';
import { BUILDINGS, DOORS, zoneName } from '../world/layout';
import type { NpcActor } from '../actors/npc';
import type { SoundEngine } from '../core/audio';
import { getReleaseInfo, type AppReleaseInfo } from '../version';
import { getDailySchedule, getQuestWaitingDetails, getQuestOverdueStatus, getActiveQuestOverdue, SIDE_QUEST_UNLOCK_RULES } from '../logic/daily-plan';
import { FLASHBACK_CHOICES } from '../core/cutscene';

export interface PromptTarget {
  id: string;
  label: string;
  risk?: string;
  run: () => void;
}

export interface GuideTarget {
  label: string;
  dist: number;
  angle: number;
  questId?: string;
  isDuty?: boolean;
  questTitle?: string;
  stepDesc?: string;
  progress?: string;
  targetName?: string;
  tx?: number;
  tz?: number;
  openCondition?: string;
  isLocked?: boolean;
  safeX?: number;
  safeZ?: number;
  route?: [number, number][];
}

const STEPS = [
  { name: '1. Lắp vỏ nhựa cách điện', zone: [0.32, 0.68] },
  { name: '2. Đặt hai lá đồng tiếp điện', zone: [0.36, 0.64] },
  { name: '3. Siết ốc cố định', zone: [0.4, 0.6] },
];

const MINIMAP_LABELS: Record<string, string> = {
  cellblock: 'Giam', mess: 'Ăn', workshop: 'Xưởng', office: 'QL',
  medical: 'YT', classroom: 'Học', visitation: 'Thăm', discipline: 'KL',
};

export class UIManager {
  root: HTMLElement;
  joyZone!: HTMLElement;
  joyKnob!: HTMLElement;
  btnInteract!: HTMLButtonElement;
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
  private minimapCanvas!: HTMLCanvasElement;
  private minimapCtx!: CanvasRenderingContext2D;
  private minimapStatusEl!: HTMLElement;
  private minimapAreaEl!: HTMLElement;
  private interactLabelEl!: HTMLElement;
  private autowalkBannerEl!: HTMLElement;
  private autowalkTextEl!: HTMLElement;
  private btnCancelAutoWalk!: HTMLElement;
  private morningBannerEl!: HTMLElement;
  private morningPlanSubEl!: HTMLElement;
  private questCollapsed = false;
  private lastMinimapDraw = 0;
  private lastClockHTML = '';
  private lastQuestHTML = '';
  private questBarHighlightTimeout: number | null = null;
  private lastStatsHTML = '';
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
      onUpdateAppearance?: (look: { skin: number; hair: number; hairStyle: 'short' | 'buzz' | 'bald'; preset: number }) => void;
      onRestoreBackup?: () => void;
      onAutoWalk?: (tx: number, tz: number, isLocked?: boolean, safeX?: number, safeZ?: number, targetName?: string) => void;
      onCancelAutoWalk?: () => void;
    },
  ) {
    this.root = container;
    this.buildShell();
    this.checkOrientation();
    const onOrient = () => {
      this.checkOrientation();
      setTimeout(() => this.checkOrientation(), 120);
      setTimeout(() => this.checkOrientation(), 280);
      setTimeout(() => this.checkOrientation(), 500);
    };
    window.addEventListener('resize', onOrient);
    window.addEventListener('orientationchange', onOrient);
    window.visualViewport?.addEventListener('resize', onOrient);
  }

  private isTouchDevice(): boolean {
    return 'ontouchstart' in window || (navigator.maxTouchPoints ?? 0) > 0;
  }

  hasOpenModal(): boolean {
    return this.modalHost.innerHTML.trim() !== '';
  }

  checkOrientation() {
    const isPortrait = (window.innerHeight > window.innerWidth) || (window.matchMedia?.('(orientation: portrait)')?.matches === true);
    const isTouch = this.isTouchDevice() || ('ontouchstart' in window) || ((navigator.maxTouchPoints ?? 0) > 0);

    if (isPortrait && (isTouch || window.innerWidth < 650)) {
      this.orientOverlay.style.display = 'flex';
      if (!this.paused) {
        this.paused = true;
        this.pausedByOrientation = true;
      }
    } else {
      this.orientOverlay.style.display = 'none';
      if (this.pausedByOrientation) {
        if (!this.hasOpenModal() && !document.getElementById('game-landing')) this.paused = false;
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
          <div class="hud-progression-row interactive" id="hud-prog-bar" title="Cấp độ & Kinh nghiệm">
            <span class="hud-level-badge" id="hud-level">Lv.1</span>
            <div class="hud-xp-bar"><div class="hud-xp-fill" id="hud-xp-fill" style="width:0%"></div></div>
          </div>
          <div class="hud-quest-bar interactive" id="hud-quest-bar" title="Nhấp để xem chi tiết / tự đi"></div>
          <div class="toasts" id="hud-toasts" aria-live="polite"></div>
        </div>
        <div class="hud-right">
          <div class="hud-action-row interactive">
            <div class="sentence-tag" id="hud-sentence">Án: 24n</div>
            <button class="btn icon-btn" id="btn-fullscreen" title="Toàn màn hình" aria-label="Toàn màn hình">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
            </button>
            <button class="btn icon-btn" id="btn-bag" title="${isTouch ? 'Túi đồ' : 'Túi đồ (B)'}" aria-label="Túi đồ">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </button>
            <button class="btn icon-btn btn-accent" id="btn-menu" title="${isTouch ? 'Menu cài đặt' : 'Menu (Esc)'}" aria-label="Menu trò chơi">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
          <div class="hud-stats-mini interactive" id="hud-stats-mini" title="Nhấp để xem chi tiết các chỉ số"></div>
          <button type="button" class="minimap-box interactive" id="minimap-box"
            title="Xem các khu trong trại" aria-label="Mở bản đồ khu vực">
            <span class="minimap-compass" aria-hidden="true">▲ B</span>
            <canvas id="minimap-canvas" width="132" height="114" aria-hidden="true"></canvas>
            <span class="minimap-status" id="minimap-status" style="display:none"></span>
            <span class="minimap-area" id="minimap-area" aria-live="off">Sân sinh hoạt</span>
          </button>
        </div>
      </div>
      <div class="autowalk-banner" id="autowalk-banner" style="display:none">
        <span class="pulse-dot"></span>
        <span class="autowalk-text" id="autowalk-text">Đang tự đi...</span>
        <button class="btn btn-sm" id="btn-cancel-autowalk">Hủy [X]</button>
      </div>
      <div class="morning-plan-banner interactive" id="morning-plan-banner" style="display:none">
        <div class="morning-plan-content">
          <div class="morning-plan-title">📋 06:00 — Việc hôm nay & Lịch sinh hoạt</div>
          <div class="morning-plan-sub" id="morning-plan-sub">3 việc cần làm đã sẵn sàng</div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
          <button class="btn btn-sm btn-accent" id="btn-morning-open" style="min-height:36px;min-width:68px">Xem [📋]</button>
          <button class="btn btn-sm" id="btn-morning-dismiss" aria-label="Đóng" style="min-height:36px;min-width:36px;padding:0 8px">✕</button>
        </div>
      </div>
      <div class="prompt-box interactive" id="hud-prompt" style="display:none"></div>
      <div class="joy-zone interactive" id="joy-zone"><div class="joy-knob" id="joy-knob"></div></div>
      <div class="touch-right interactive">
        <button class="btn interact-action" id="btn-interact" type="button" disabled aria-label="Tương tác" title="Tương tác">
          <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="8"></circle>
            <path d="M12 8v8M8 12h8"></path>
          </svg>
          <span class="interact-label" id="interact-label">Tương tác</span>
        </button>
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
    this.interactLabelEl = this.root.querySelector('#interact-label')!;
    this.orientOverlay = this.root.querySelector('#orientation-overlay')!;
    this.minimapCanvas = this.root.querySelector('#minimap-canvas')!;
    this.minimapCtx = this.minimapCanvas.getContext('2d')!;
    this.minimapStatusEl = this.root.querySelector('#minimap-status')!;
    this.minimapAreaEl = this.root.querySelector('#minimap-area')!;
    this.autowalkBannerEl = this.root.querySelector('#autowalk-banner')!;
    this.autowalkTextEl = this.root.querySelector('#autowalk-text')!;
    this.btnCancelAutoWalk = this.root.querySelector('#btn-cancel-autowalk')!;
    this.morningBannerEl = this.root.querySelector('#morning-plan-banner')!;
    this.morningPlanSubEl = this.root.querySelector('#morning-plan-sub')!;

    this.root.querySelector('#btn-morning-open')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.sfx.click();
      this.morningBannerEl.style.display = 'none';
      this.showDailyPlanModal();
    });
    this.root.querySelector('#btn-morning-dismiss')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.sfx.click();
      this.morningBannerEl.style.display = 'none';
    });

    // Keep notifications in normal flow below the quest, with room for the joystick.
    const layoutToasts = () => {
      const top = this.toastsEl.getBoundingClientRect().top;
      const controlsTop = this.joyZone.getBoundingClientRect().top;
      this.toastsEl.style.maxHeight = `${Math.max(0, Math.min(120, controlsTop - top - 8))}px`;
    };
    const toastLayoutObserver = new ResizeObserver(layoutToasts);
    toastLayoutObserver.observe(this.questBarEl);
    toastLayoutObserver.observe(this.joyZone);
    window.addEventListener('resize', layoutToasts);
    window.visualViewport?.addEventListener('resize', layoutToasts);
    layoutToasts();

    this.btnCancelAutoWalk.addEventListener('click', (e) => {
      e.stopPropagation();
      this.hooks.onCancelAutoWalk?.();
    });

    this.clockEl.addEventListener('click', () => {
      this.sfx.click();
      this.showDailyPlanModal();
    });
    this.clockEl.style.cursor = 'pointer';
    this.clockEl.title = 'Nhấp để xem Việc hôm nay & Lịch sinh hoạt';

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

    this.statsMiniEl.addEventListener('click', () => {
      this.sfx.click();
      this.tryLockOrientation();
      this.showStatsDetail();
    });

    this.root.querySelector('#minimap-box')?.addEventListener('click', () => {
      this.sfx.click();
      this.tryLockOrientation();
      this.showMap();
    });

    this.root.querySelector('#hud-prog-bar')?.addEventListener('click', () => {
      this.sfx.click();
      this.tryLockOrientation();
      this.showProfileAndSkills();
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

    // Thoát game khi bấm ESC trên máy tính
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.hasOpenModal()) this.showMainMenu();
    });
  }

  private tryLockOrientation() {
    try {
      const scr = screen as unknown as { orientation?: { lock?: (o: string) => Promise<void> } };
      scr.orientation?.lock?.('landscape').catch(() => {});
    } catch {
      // bỏ qua nếu trình duyệt không cho phép khóa hướng
    }
  }

  setAutoWalkState(active: boolean, targetName?: string) {
    if (active) {
      this.autowalkBannerEl.style.display = 'flex';
      this.autowalkTextEl.textContent = `Đang tự đi tới: ${targetName || 'Mục tiêu'}...`;
    } else {
      this.autowalkBannerEl.style.display = 'none';
    }
  }

  highlightQuestBar() {
    if (!this.questBarEl) return;
    this.questBarEl.classList.remove('highlight');
    void this.questBarEl.offsetWidth;
    this.questBarEl.classList.add('highlight');
    if (this.questBarHighlightTimeout) clearTimeout(this.questBarHighlightTimeout);
    this.questBarHighlightTimeout = window.setTimeout(() => {
      this.questBarEl?.classList.remove('highlight');
    }, 6000);
  }

  toast(text: string, kind = 'info') {
    const last = this.toastsEl.lastElementChild as HTMLElement | null;
    if (last && (last.dataset.rawText === text || last.textContent?.startsWith(text))) {
      const count = parseInt(last.dataset.count || '1', 10) + 1;
      last.dataset.count = String(count);
      last.textContent = `${text} (x${count})`;
      last.className = `toast ${kind}`;
      return;
    }
    const d = document.createElement('div');
    d.className = `toast ${kind}`;
    d.dataset.rawText = text;
    d.dataset.count = '1';
    d.textContent = text;
    this.toastsEl.appendChild(d);
    while (this.toastsEl.children.length > 3) this.toastsEl.firstElementChild?.remove();
    setTimeout(() => {
      d.style.opacity = '0';
      d.style.transform = 'translateY(-4px)';
      d.style.transition = 'opacity 0.25s, transform 0.25s';
      setTimeout(() => d.remove(), 260);
    }, 3500);
  }

  updateReleaseInfo(rel: AppReleaseInfo) {
    this.releaseInfo = rel;
    const mEl = this.root.querySelector('#menu-build-tag');
    if (mEl) mEl.textContent = `v${rel.version} (${rel.buildHash.slice(0, 7)}) • M${rel.milestone}`;
  }

  updateHUD(
    prompt: PromptTarget | null,
    guideTarget: GuideTarget | null,
  ) {
    const s = this.g.s;
    const cur = blockAt(s.minute);
    const nxt = nextBlock(s.minute);
    const p = this.hooks.playerPos();
    const zn = zoneName(p.x, p.z);
    const isTouch = this.isTouchDevice();

    // 1. Góc trên trái: Thời gian, khu vực, hoạt động
    const clockHTML = `
      <div class="hud-clock">Ngày ${s.day} · ${fmtTime(s.minute)} — <span style="color:#93c5fd">${zn}</span></div>
      <div>Hiện tại: <b style="color:#fde68a">${cur.label}</b> (${cur.where})</div>
      <div class="hud-sub">${nxt ? `Tiếp: ${fmtTime(nxt.start)} ${nxt.label}` : 'Cuối ngày — về buồng ngủ'}</div>
    `;
    if (clockHTML !== this.lastClockHTML) {
      this.lastClockHTML = clockHTML;
      this.clockEl.innerHTML = clockHTML;
    }

    // 2. Góc trên phải: Án còn lại
    this.sentenceEl.textContent = `Án: ${s.sentence.remaining}n`;

    // Cập nhật Cấp độ & Thanh XP
    const lvlEl = this.root.querySelector('#hud-level');
    const xpFill = this.root.querySelector('#hud-xp-fill') as HTMLElement;
    if (lvlEl) lvlEl.textContent = `Lv.${s.progression.level}`;
    if (xpFill) {
      const needed = xpForNextLevel(s.progression.level);
      const pct = needed === Infinity ? 100 : Math.min(100, Math.round((s.progression.xp / needed) * 100));
      xpFill.style.width = `${pct}%`;
    }

    // 3. Bảng mục tiêu chi tiết, hỗ trợ tự đi và thu gọn
    const waitingDetails = getQuestWaitingDetails(s);
    const overdue = guideTarget?.questId ? getQuestOverdueStatus(guideTarget.questId, s) : getActiveQuestOverdue(s);
    const isWaiting = !guideTarget?.isDuty && waitingDetails.waiting && !overdue.overdue;

    let qTitle = guideTarget?.questTitle || 'Sinh hoạt trại giam';
    let qStep = overdue.overdue ? (overdue.message || 'Đã qua giờ') : (guideTarget?.stepDesc || guideTarget?.label || 'Tham gia các hoạt động theo lịch trình');
    const qProg = guideTarget?.progress ? ` <span style="color:#86efac;font-weight:700">(${guideTarget.progress})</span>` : '';
    let qTag = guideTarget?.isDuty ? '🔔 Nghĩa vụ' : overdue.overdue ? '⚠️ Quá giờ' : isWaiting ? '⏳ Chờ giờ' : '🎯 Mục tiêu';
    const isDutyCls = guideTarget?.isDuty ? 'duty' : overdue.overdue ? 'missed' : isWaiting ? 'waiting' : '';
    const destName = guideTarget?.targetName || guideTarget?.label || '';
    const distText = guideTarget ? `${Math.round(guideTarget.dist)}m` : '';
    let openCond = guideTarget?.openCondition ? `<span class="quest-open-cond ${guideTarget.isLocked ? 'locked' : ''}">⏰ ${guideTarget.openCondition}</span>` : '';

    if (overdue.overdue) {
      qStep = overdue.message || 'Đã qua giờ';
      openCond = `<span class="quest-open-cond locked">⚠️ ${overdue.timeRange ? `Lỡ khung giờ ${overdue.timeRange}` : 'Đã qua giờ'}</span>`;
    } else if (isWaiting && waitingDetails.timeRange) {
      qStep = `Chờ mở cửa: ${waitingDetails.timeRange} · Gợi ý: Làm việc ngày / rèn luyện trong lúc chờ`;
      openCond = `<span class="quest-open-cond locked">⏰ Chờ mở cửa: ${waitingDetails.timeRange}</span>`;
    } else if (!guideTarget) {
      const activeSide = QUEST_ORDER.filter((q) => QUESTS[q].type === 'side' && this.g.qStatus(q) === 'active');
      if (activeSide.length > 0) {
        qTitle = 'Nhiệm vụ tự chọn';
        qStep = `Đang mở: ${activeSide.map((q) => QUESTS[q].title).join(', ')}. Mở Nhật ký để xem chi tiết.`;
        qTag = '⭐ Tự chọn';
      } else {
        const remainingTasks = (s.daily.tasks || []).filter((t) => !t.done);
        if (remainingTasks.length > 0) {
          qTitle = 'Việc hôm nay';
          qStep = `Còn ${remainingTasks.length} việc chưa hoàn thành. Bấm nút "📋 Lịch" để xem chi tiết.`;
          qTag = '📋 Việc ngày';
        } else {
          qTitle = 'Sinh hoạt trại giam';
          qStep = 'Đã hoàn thành hết mục tiêu hôm nay. Rèn luyện thể lực hoặc về buồng nghỉ ngơi.';
          qTag = '🌿 Tự do';
        }
      }
    }

    const shortLabel = isWaiting && waitingDetails.timeRange ? `Chờ mở cửa: ${waitingDetails.timeRange}` : (destName || qTitle);
    const questHTML = this.questCollapsed
      ? `
        <div class="quest-row-header">
          <span class="quest-tag ${isDutyCls}">${qTag}</span>
          <span class="quest-title-text">${shortLabel}</span>
          <button type="button" class="btn-daily-plan" id="btn-open-daily-plan" title="Xem Việc hôm nay & Lịch sinh hoạt">📋 Lịch</button>
          ${distText ? `<span style="color:#38bdf8;font-weight:700">${distText}</span>` : ''}
          <span class="quest-toggle-icon" id="btn-quest-toggle" title="Mở rộng bảng nhiệm vụ">▸</span>
        </div>
      `
      : `
        <div class="quest-row-header">
          <div style="display:flex;align-items:center;gap:6px;overflow:hidden">
            <span class="quest-tag ${isDutyCls}">${qTag}</span>
            <span class="quest-title-text">${qTitle}</span>
          </div>
          <div style="display:flex;align-items:center;gap:4px">
            <button type="button" class="btn-daily-plan" id="btn-open-daily-plan" title="Xem Việc hôm nay & Lịch sinh hoạt">📋 Lịch</button>
            <span class="quest-toggle-icon" id="btn-quest-toggle" title="Thu gọn bảng nhiệm vụ">▾</span>
          </div>
        </div>
        <div class="quest-row-desc">${qStep}${qProg}</div>
        <div class="quest-row-footer">
          <div class="quest-dest-info" id="quest-dest-info">
            <span>📍 <b>${destName}</b></span>
            ${distText ? `<span style="color:#38bdf8;font-weight:700">· ${distText}</span>` : ''}
            ${openCond ? `· ${openCond}` : ''}
          </div>
          ${guideTarget?.tx !== undefined ? `<button class="btn-auto-walk" id="btn-quest-autowalk">🚶 Tự đi</button>` : ''}
        </div>
      `;

    if (questHTML !== this.lastQuestHTML) {
      this.lastQuestHTML = questHTML;
      const isHighlighted = this.questBarEl.classList.contains('highlight');
      this.questBarEl.className = this.questCollapsed ? 'hud-quest-bar collapsed interactive' : 'hud-quest-bar interactive';
      if (isHighlighted) this.questBarEl.classList.add('highlight');
      this.questBarEl.innerHTML = questHTML;

      // Gắn sự kiện thu gọn & tự đi
      const toggleBtn = this.questBarEl.querySelector('#btn-quest-toggle');
      toggleBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.sfx.click();
        this.questCollapsed = !this.questCollapsed;
        this.lastQuestHTML = ''; // force re-render
      });

      const triggerAutoWalk = (e: Event) => {
        e.stopPropagation();
        this.sfx.click();
        if (guideTarget?.tx !== undefined && guideTarget?.tz !== undefined) {
          this.hooks.onAutoWalk?.(guideTarget.tx, guideTarget.tz, guideTarget.isLocked, guideTarget.safeX, guideTarget.safeZ, destName);
        }
      };
      this.questBarEl.querySelector('#btn-quest-autowalk')?.addEventListener('click', triggerAutoWalk);
      this.questBarEl.querySelector('#quest-dest-info')?.addEventListener('click', triggerAutoWalk);
      this.questBarEl.querySelector('#btn-open-daily-plan')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.sfx.click();
        this.showDailyPlanModal();
      });

      this.questBarEl.onclick = (e) => {
        this.questBarEl.classList.remove('highlight');
        if (
          (e.target as HTMLElement).closest('#btn-quest-toggle') ||
          (e.target as HTMLElement).closest('#btn-quest-autowalk') ||
          (e.target as HTMLElement).closest('#quest-dest-info') ||
          (e.target as HTMLElement).closest('#btn-open-daily-plan')
        ) {
          return;
        }
        this.sfx.click();
        this.showQuestDetail();
      };
    }

    // Popup sáng 06:00 thông báo Việc hôm nay & Lịch sinh hoạt (tự đóng được, không khóa game)
    if (s.minute === 360 && !s.daily.morningPopupShown && !document.getElementById('game-landing')) {
      s.daily.morningPopupShown = true;
      this.showMorningBanner();
    }

    // 4. Thanh chỉ số mini (thống nhất 0% xấu, 100% tốt)
    const st = s.stats;
    const isWarning =
      st.health < 30 || st.stamina <= 30 || st.satiety < 25 || st.morale < 25 || st.suspicion > 70;
    if (isWarning) this.statsMiniEl.classList.add('stat-warning');
    else this.statsMiniEl.classList.remove('stat-warning');

    const statsHTML = `
      <span class="stat-item ${st.health < 30 ? 'danger' : ''}">❤️${Math.round(st.health)}</span>
      <span class="stat-item ${st.stamina <= 30 ? 'danger' : ''}">⚡${Math.round(st.stamina)}</span>
      <span class="stat-item ${st.satiety < 25 ? 'danger' : ''}">🍚${Math.round(st.satiety)}</span>
      <span class="stat-item ${st.morale < 25 ? 'danger' : ''}">🧠${Math.round(st.morale)}</span>
      <span class="stat-item">💰${fmtMoney(st.money)}</span>
    `;
    if (statsHTML !== this.lastStatsHTML) {
      this.lastStatsHTML = statsHTML;
      this.statsMiniEl.innerHTML = statsHTML;
    }

    // The location label updates every HUD tick, independently of minimap draw throttling.
    this.minimapAreaEl.textContent = zn;

    // 5. Vẽ Minimap 2D
    this.renderMinimap(p, guideTarget);

    // 6. Nút tương tác và hộp nhắc ngữ cảnh
    if (prompt && !this.paused) {
      this.promptEl.style.display = 'block';
      this.promptEl.innerHTML = `
        <div>${isTouch ? '' : '<b>[E]</b> '}<b>${prompt.label}</b></div>
        ${prompt.risk ? `<div class="prompt-risk">⚠ Quy tắc & hậu quả: ${prompt.risk}</div>` : ''}
      `;
      this.promptEl.onclick = () => prompt.run();

      this.btnInteract.disabled = false;
      this.btnInteract.classList.add('is-available');
      // Keep full instruction accessible while using a compact action caption.
      let act = prompt.label;
      if (act.includes(':')) act = act.split(':').slice(1).join(':').trim();
      if (act.length > 14) act = act.slice(0, 13).trimEnd() + '…';
      this.interactLabelEl.textContent = isTouch ? act : `${act} (E)`;
      this.btnInteract.title = prompt.label;
      this.btnInteract.setAttribute('aria-label', prompt.label);
    } else {
      this.promptEl.style.display = 'none';
      this.promptEl.onclick = null;
      this.btnInteract.disabled = true;
      this.btnInteract.classList.remove('is-available');
      this.interactLabelEl.textContent = isTouch ? 'Tương tác' : 'Tương tác (E)';
      this.btnInteract.title = 'Tương tác';
      this.btnInteract.setAttribute('aria-label', 'Tương tác');
    }
  }

  private renderMinimap(player: { x: number; z: number; rot: number }, guide: GuideTarget | null) {
    if (!this.minimapCanvas || !this.minimapCtx) return;
    const ctx = this.minimapCtx;
    const cw = this.minimapCanvas.width;
    const ch = this.minimapCanvas.height;

    // Giảm tần suất vẽ tránh lag (~15fps)
    const now = performance.now();
    if (now - this.lastMinimapDraw < 65) return;
    this.lastMinimapDraw = now;

    const px = (wx: number) => Math.round(((wx - (-30)) / 60) * cw);
    const py = (wz: number) => Math.round(((wz - (-34)) / 56) * ch);

    ctx.fillStyle = '#0b1120';
    ctx.fillRect(0, 0, cw, ch);

    // Vẽ sân trại
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(px(-28), py(-32), px(28) - px(-28), py(20) - py(-32));

    // Vẽ các phòng và tên viết tắt. Sáng viền phòng mà người chơi đang đứng.
    for (const [key, b] of Object.entries(BUILDINGS)) {
      const x1 = px(b.x1);
      const y1 = py(b.z1);
      const w = px(b.x2) - x1;
      const h = py(b.z2) - y1;
      const current = player.x >= b.x1 && player.x <= b.x2 &&
        player.z >= b.z1 && player.z <= b.z2;
      ctx.fillStyle = current ? '#27566b' : '#334155';
      ctx.fillRect(x1, y1, w, h);
      ctx.strokeStyle = current ? '#67e8f9' : '#475569';
      ctx.lineWidth = current ? 1.5 : 1;
      ctx.strokeRect(x1, y1, w, h);
      const shortName = MINIMAP_LABELS[key];
      if (shortName) {
        ctx.font = 'bold 8px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineJoin = 'round';
        const cx = x1 + w / 2;
        const cy = y1 + h / 2;
        ctx.strokeStyle = '#0b1120';
        ctx.lineWidth = 2;
        ctx.strokeText(shortName, cx, cy, Math.max(12, w - 2));
        ctx.fillStyle = current ? '#e0faff' : '#dbeafe';
        ctx.fillText(shortName, cx, cy, Math.max(12, w - 2));
      }
    }

    // Vẽ cửa (Xanh lá = Mở, Đỏ = Khóa)
    for (const d of DOORS) {
      const open = this.g.isOpen(d.area);
      ctx.strokeStyle = open ? '#22c55e' : '#ef4444';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(px(d.box.x1), py(d.box.z1));
      ctx.lineTo(px(d.box.x2), py(d.box.z2));
      ctx.stroke();
    }

    // Tuyến đường hợp lệ (A* path không xuyên tường)
    if (guide?.route && guide.route.length > 0) {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 2]);
      ctx.beginPath();
      ctx.moveTo(px(player.x), py(player.z));
      for (const pt of guide.route) {
        ctx.lineTo(px(pt[0]), py(pt[1]));
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Mục tiêu (Target)
    if (guide?.tx !== undefined && guide?.tz !== undefined) {
      const tx = px(guide.tx);
      const ty = py(guide.tz);
      ctx.fillStyle = guide.isDuty ? '#38bdf8' : '#f59e0b';
      ctx.beginPath();
      ctx.arc(tx, ty, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Người chơi (Player) + Mũi tên hướng quay
    const pX = px(player.x);
    const pY = py(player.z);
    ctx.fillStyle = '#06b6d4';
    ctx.beginPath();
    ctx.arc(pX, pY, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.stroke();

    const hx = Math.sin(player.rot);
    const hy = Math.cos(player.rot);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(pX, pY);
    ctx.lineTo(pX + hx * 7, pY + hy * 7);
    ctx.stroke();

    // Hiển thị trạng thái khóa nếu mục tiêu chưa tiếp cận được
    if (guide?.isLocked) {
      this.minimapStatusEl.style.display = 'block';
      this.minimapStatusEl.textContent = guide.openCondition ? `Khóa · ${guide.openCondition}` : 'Khu vực đang đóng';
    } else {
      this.minimapStatusEl.style.display = 'none';
    }
  }

  closeModal() {
    if (this.activeMinigameCancel) {
      this.activeMinigameCancel();
      this.activeMinigameCancel = null;
    }
    this.modalSeq++;
    this.modalHost.innerHTML = '';
    if (!this.pausedByOrientation) {
      this.paused = false;
    }
  }

  private showModal(html: string, onMount?: (el: HTMLElement) => void, extraClass = '') {
    this.modalSeq++;
    this.paused = true;
    const cls = extraClass ? `modal ${extraClass}` : 'modal';
    this.modalHost.innerHTML = `<div class="modal-backdrop"><div class="modal-shell"><div class="${cls}">${html}</div></div></div>`;
    const m = this.modalHost.querySelector('.modal') as HTMLElement;
    // Add the always-visible X only to dismissible panels.
    // Keep action labels such as "Hủy", "Thoát" and "Tiếp tục chơi":
    // unlike a redundant "Đóng" footer, these convey gameplay context.
    const closeButtons = Array.from(m.querySelectorAll<HTMLButtonElement>('button[data-close]'));
    if (closeButtons.length) {
      m.classList.add('has-top-close');
      const closeTop = document.createElement('button');
      closeTop.type = 'button';
      closeTop.className = 'modal-close-top';
      closeTop.setAttribute('aria-label', 'Đóng bảng');
      closeTop.title = 'Đóng bảng';
      closeTop.textContent = '×';
      closeTop.addEventListener('click', () => this.closeModal());
      (m.parentElement as HTMLElement).append(closeTop);

      // Remove only duplicate "Đóng" / "Đóng Menu" buttons.
      // Remove their otherwise empty footer containers to avoid dead space.
      for (const button of closeButtons) {
        const label = (button.textContent ?? '').replace(/\s+/g, ' ').trim().toLocaleLowerCase('vi');
        if (label === 'đóng' || label === 'đóng menu') {
          const wrapper = button.parentElement;
          button.remove();
          if (wrapper && wrapper !== m && wrapper.parentElement === m &&
              wrapper.children.length === 0 && !wrapper.textContent?.trim()) {
            wrapper.remove();
          }
        } else {
          button.addEventListener('click', () => this.closeModal());
        }
      }
    }
    if (onMount) onMount(m);
  }

  // ───────────── Màn hình tạo nhân vật ─────────────
  showCharacterCreation(onDone: (profile: CharacterProfile) => void) {
    let name = (this.g.s.profile?.name || 'Minh').trim();
    let preset = 0;
    let skin: number = this.g.s.profile?.skin ?? 0xe2b48d;
    let hair = 0x18181b;
    let hairStyle: 'short' | 'buzz' | 'bald' = (this.g.s.profile?.hairStyle as any) || 'short';
    let background: BackgroundId = this.g.s.profile?.background ?? 'mechanic';
    let flashbackChoice: 'keep_doc' | 'help_victim' | 'chase_contact' = this.g.s.profile?.flashbackChoice ?? 'keep_doc';
    let difficulty: Difficulty = this.g.s.profile?.difficulty ?? 'normal';

    const presets = [
      { name: 'Mẫu 1: Trẻ trung', skin: 0xf5d0b0, hairStyle: 'short' as const, desc: 'Dáng nhanh nhẹn, mắt sáng, tóc ngắn gọn gàng.' },
      { name: 'Mẫu 2: Rắn rỏi', skin: 0xe2b48d, hairStyle: 'buzz' as const, desc: 'Dáng đậm, tóc húi cua, da bánh mật khỏe khoắn.' },
      { name: 'Mẫu 3: Trầm tĩnh', skin: 0xba8c63, hairStyle: 'bald' as const, desc: 'Dáng cao gầy, đầu đinh, ánh mắt kiên định.' },
    ];

    const html = `
      <div class="cc-header">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <h2>TẠO NHÂN VẬT & KHỞI ĐẦU</h2>
          <span class="tag good">Mốc 3 · 24 ngày</span>
        </div>
        <div class="hud-sub">Thiết lập hồ sơ trước khi bước vào Trại giam An Phú</div>
      </div>

      <div class="cc-body" id="cc-scroll-body">
        <div class="card-row">
          <label style="font-weight:700;display:block;margin-bottom:6px">1. Tên nhân vật (2–20 ký tự):</label>
          <input type="text" id="cc-input-name" class="text-input" value="${name}" maxlength="20" placeholder="Nhập tên nhân vật..." autocomplete="off" autocapitalize="words" spellcheck="false"/>
        </div>

        <div class="card-row">
          <label style="font-weight:700;display:block;margin-bottom:6px">2. Mẫu ngoại hình cơ sở:</label>
          <div class="cc-grid" id="cc-presets-grid">
            ${presets.map((p, idx) => `
              <div class="cc-card ${preset === idx ? 'selected' : ''}" data-preset="${idx}">
                <b>${p.name}</b>
                <div class="hud-sub" style="margin-top:4px">${p.desc}</div>
              </div>
            `).join('')}
          </div>
          <div style="display:flex;gap:12px;margin-top:10px;flex-wrap:wrap">
            <div>
              <label style="font-size:12px;color:var(--muted);display:block;margin-bottom:4px">Kiểu tóc:</label>
              <div style="display:flex;gap:6px" id="cc-hair-btns">
                <button class="btn btn-sm ${hairStyle === 'short' ? 'btn-accent' : ''}" data-hair="short">Ngắn</button>
                <button class="btn btn-sm ${hairStyle === 'buzz' ? 'btn-accent' : ''}" data-hair="buzz">Húi cua</button>
                <button class="btn btn-sm ${hairStyle === 'bald' ? 'btn-accent' : ''}" data-hair="bald">Đầu trọc</button>
              </div>
            </div>
            <div>
              <label style="font-size:12px;color:var(--muted);display:block;margin-bottom:4px">Tông da:</label>
              <div style="display:flex;gap:6px" id="cc-skin-btns">
                <button class="btn btn-sm ${skin === 0xf5d0b0 ? 'btn-accent' : ''}" data-skin="light">Sáng</button>
                <button class="btn btn-sm ${skin === 0xe2b48d ? 'btn-accent' : ''}" data-skin="med">Bánh mật</button>
                <button class="btn btn-sm ${skin === 0xba8c63 ? 'btn-accent' : ''}" data-skin="dark">Ngăm</button>
              </div>
            </div>
          </div>
        </div>

        <div class="card-row">
          <label style="font-weight:700;display:block;margin-bottom:6px">3. Chọn xuất thân (Quá khứ vụ án Kho số 7):</label>
          <div class="cc-grid" style="grid-template-columns:1fr" id="cc-bg-grid">
            ${(Object.keys(BACKGROUNDS) as BackgroundId[]).map((bId) => {
              const b = BACKGROUNDS[bId];
              const isSel = background === bId;
              return `
                <div class="cc-card cc-bg-card ${isSel ? 'selected' : ''}" data-bg="${bId}">
                  <div style="display:flex;justify-content:space-between;align-items:center">
                    <b style="font-size:14px;color:#fde68a">${b.name}</b>
                    <span class="hud-sub">${b.tagline}</span>
                  </div>
                  <div style="font-size:12.5px;color:#cbd5e1;margin:5px 0">${b.desc}</div>
                  <div class="cc-attr-row">
                    <span class="cc-attr-tag">Ưu điểm: ${b.pros}</span>
                    <span class="cc-attr-tag" style="color:#f87171">Hạn chế: ${b.cons}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="card-row">
          <label style="font-weight:700;display:block;margin-bottom:6px">4. Quyết định trong biến cố Kho số 7:</label>
          <div class="hud-sub" style="margin-bottom:8px">Hành động của bạn trong đêm hỏa hoạn quyết định manh mối và lợi thế khởi đầu</div>
          <div class="cc-grid" style="grid-template-columns:1fr" id="cc-fb-grid">
            ${FLASHBACK_CHOICES.map((c) => {
              const isSel = flashbackChoice === c.id;
              return `
                <div class="cc-card cc-bg-card ${isSel ? 'selected' : ''}" data-fb="${c.id}">
                  <div style="display:flex;justify-content:space-between;align-items:center">
                    <b style="font-size:13.5px;color:#93c5fd">${c.label}</b>
                  </div>
                  <div style="font-size:12px;color:#cbd5e1;margin:4px 0">${c.desc}</div>
                  <div class="cc-attr-row">
                    <span class="cc-attr-tag" style="color:#86efac">Khởi đầu: ${c.gain}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="card-row">
          <label style="font-weight:700;display:block;margin-bottom:6px">5. Mức độ thử thách:</label>
          <div class="cc-grid" id="cc-diff-grid">
            ${(Object.keys(DIFFICULTIES) as Difficulty[]).map((dId) => {
              const d = DIFFICULTIES[dId];
              return `
                <div class="cc-card ${difficulty === dId ? 'selected' : ''}" data-diff="${dId}">
                  <b>${d.name}</b>
                  <div class="hud-sub" style="margin-top:4px">${d.desc}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="cc-bottom-spacer"></div>
      </div>

      <div class="cc-footer">
        <div class="cc-footer-info">
          <div>Bản án: <b>24 ngày</b></div>
          <div class="hud-sub" style="font-size:11px">Kỳ xét giảm: 4 ngày/lần (0–2 ngày)</div>
        </div>
        <button class="btn btn-accent btn-cc-submit" id="btn-cc-submit">
          BẮT ĐẦU HÀNH TRÌNH ⏭
        </button>
      </div>
    `;

    this.showModal(html, (el) => {
      const inputName = el.querySelector('#cc-input-name') as HTMLInputElement;
      inputName?.addEventListener('input', (e) => {
        name = (e.target as HTMLInputElement).value;
      });
      inputName?.addEventListener('focus', () => {
        setTimeout(() => {
          inputName.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 120);
      });

      // Đổi mẫu ngoại hình cơ sở in-place (không re-render làm mất tên hay nhảy cuộn)
      el.querySelectorAll('[data-preset]').forEach((btn) => {
        btn.addEventListener('click', () => {
          preset = Number((btn as HTMLElement).dataset.preset);
          el.querySelectorAll('[data-preset]').forEach((b) => b.classList.remove('selected'));
          btn.classList.add('selected');

          const p = presets[preset];
          skin = p.skin;
          hairStyle = p.hairStyle;

          // Cập nhật nút kiểu tóc & tông da tương ứng
          el.querySelectorAll('[data-hair]').forEach((b) => {
            b.classList.toggle('btn-accent', (b as HTMLElement).dataset.hair === hairStyle);
          });
          el.querySelectorAll('[data-skin]').forEach((b) => {
            const skVal = (b as HTMLElement).dataset.skin === 'light' ? 0xf5d0b0 : (b as HTMLElement).dataset.skin === 'med' ? 0xe2b48d : 0xba8c63;
            b.classList.toggle('btn-accent', skVal === skin);
          });

          this.hooks.onUpdateAppearance?.({ skin, hair, hairStyle, preset });
        });
      });

      // Đổi kiểu tóc in-place
      el.querySelectorAll('[data-hair]').forEach((btn) => {
        btn.addEventListener('click', () => {
          hairStyle = (btn as HTMLElement).dataset.hair as any;
          el.querySelectorAll('[data-hair]').forEach((b) => b.classList.remove('btn-accent'));
          btn.classList.add('btn-accent');
          this.hooks.onUpdateAppearance?.({ skin, hair, hairStyle, preset });
        });
      });

      // Đổi tông da in-place
      el.querySelectorAll('[data-skin]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const sk = (btn as HTMLElement).dataset.skin;
          skin = sk === 'light' ? 0xf5d0b0 : sk === 'med' ? 0xe2b48d : 0xba8c63;
          el.querySelectorAll('[data-skin]').forEach((b) => b.classList.remove('btn-accent'));
          btn.classList.add('btn-accent');
          this.hooks.onUpdateAppearance?.({ skin, hair, hairStyle, preset });
        });
      });

      // Đổi xuất thân in-place
      el.querySelectorAll('[data-bg]').forEach((btn) => {
        btn.addEventListener('click', () => {
          background = (btn as HTMLElement).dataset.bg as BackgroundId;
          el.querySelectorAll('[data-bg]').forEach((b) => b.classList.remove('selected'));
          btn.classList.add('selected');
        });
      });

      // Đổi lựa chọn biến cố Kho số 7 in-place
      el.querySelectorAll('[data-fb]').forEach((btn) => {
        btn.addEventListener('click', () => {
          flashbackChoice = (btn as HTMLElement).dataset.fb as any;
          el.querySelectorAll('[data-fb]').forEach((b) => b.classList.remove('selected'));
          btn.classList.add('selected');
        });
      });

      // Đổi độ khó in-place
      el.querySelectorAll('[data-diff]').forEach((btn) => {
        btn.addEventListener('click', () => {
          difficulty = (btn as HTMLElement).dataset.diff as Difficulty;
          el.querySelectorAll('[data-diff]').forEach((b) => b.classList.remove('selected'));
          btn.classList.add('selected');
        });
      });

      // Nút xác nhận & bắt đầu hành trình: kiểm tra hợp lệ, chống bấm lặp (double-click)
      let isSubmitting = false;
      const btnSubmit = el.querySelector('#btn-cc-submit') as HTMLButtonElement;
      btnSubmit?.addEventListener('click', (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        const raw = inputName ? inputName.value : name;
        const finalName = raw.replace(/[<>"'&]/g, '').trim();
        if (finalName.length < 2 || finalName.length > 20) {
          this.toast('Tên nhân vật phải từ 2 đến 20 ký tự (hỗ trợ tiếng Việt).', 'warn');
          inputName?.focus();
          return;
        }

        isSubmitting = true;
        btnSubmit.disabled = true;
        btnSubmit.textContent = 'ĐANG VÀO TRẠI...';

        this.closeModal();
        onDone({
          name: finalName,
          preset,
          skin,
          hair,
          hairStyle,
          background,
          difficulty,
          flashbackChoice,
          introSeen: true,
        });
      });
    }, 'modal-cc');
  }

  // ───────────── Menu Chính Trung Tâm ─────────────
  showMainMenu() {
    const isTouch = this.isTouchDevice();
    this.showModal(
      `
      <h2>MENU TRÒ CHƠI</h2>
      <div class="hud-sub">Quản lý nhân vật, kỹ năng, hồ sơ án và nhiệm vụ</div>
      <div class="menu-grid">
        <button class="menu-card-btn" data-menu="profile">
          <span class="icon">👤</span>
          <span>Nhân vật & Kỹ năng</span>
        </button>
        <button class="menu-card-btn" data-menu="perks">
          <span class="icon">⭐</span>
          <span>Đặc quyền đã mở</span>
        </button>
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

  // ───────────── Đặc quyền đã mở ─────────────
  showPerks() {
    const perks = this.g.getPerks();
    const rows = perks.map((p) => `
      <div class="card-row" style="border-left: 3px solid ${p.unlocked ? '#4ade80' : '#64748b'}; padding-left: 10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <b style="font-size:14px;color:${p.unlocked ? '#fde68a' : '#94a3b8'}">${p.name}</b>
          <span class="tag ${p.unlocked ? 'good' : 'muted'}">${p.unlocked ? 'ĐÃ MỞ' : 'CHƯA MỞ'}</span>
        </div>
        <div style="font-size:12.5px;color:#cbd5e1;margin-bottom:4px">${p.desc}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:#94a3b8">
          <span>Nguồn: <b>${p.source}</b></span>
          <span style="color:${p.unlocked ? '#86efac' : '#f87171'}">${p.usageStatus ?? ''}</span>
        </div>
      </div>
    `).join('');

    this.showModal(`
      <h2>ĐẶC QUYỀN ĐÃ MỞ (PERKS)</h2>
      <div class="hud-sub" style="margin-bottom:12px">Quyền lợi và trợ giúp thực tế từ cải tạo và quan hệ trong trại giam</div>
      <div style="display:flex;flex-direction:column;gap:8px;max-height:60vh;overflow-y:auto;padding-right:4px">
        ${rows}
      </div>
      <div style="margin-top:14px;display:flex;justify-content:flex-end">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `);
  }

  // ───────────── Nhân vật & Kỹ năng ─────────────
  showProfileAndSkills() {
    const s = this.g.s;
    const pr = s.progression;
    const p = s.profile;
    const bg = BACKGROUNDS[p.background] || BACKGROUNDS.mechanic;
    const nextXp = xpForNextLevel(pr.level);

    const render = () => {
      const html = `
        <h2>NHÂN VẬT & KỸ NĂNG</h2>
        <div class="hud-sub" style="margin-bottom:12px">Hồ sơ cá nhân và phát triển năng lực bản thân</div>

        <div class="card-row" style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-size:16px;font-weight:700;color:#fde68a">${p.name}</div>
            <div class="hud-sub">Xuất thân: <b>${bg.name}</b> · Độ khó: <b>${p.difficulty}</b></div>
          </div>
          <div style="text-align:right">
            <span class="hud-level-badge">Cấp độ ${pr.level}</span>
            <div class="hud-sub" style="margin-top:3px">XP: <b>${pr.xp}</b> / ${nextXp === Infinity ? 'MAX' : nextXp}</div>
          </div>
        </div>

        <div class="card-row">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <b style="color:#38bdf8">Điểm kỹ năng khả dụng: ${pr.skillPoints}</b>
            <span class="hud-sub">Tối đa 5 điểm/thuộc tính</span>
          </div>

          <div class="skill-row">
            <div class="skill-info">
              <div class="skill-title">💪 Bền bỉ (Endurance)</div>
              <div class="skill-desc">Giảm ${(pr.attrs.endurance - 1) * 8}% tiêu hao thể lực khi chạy và lao động.</div>
            </div>
            <div class="skill-val">${pr.attrs.endurance}/5</div>
            ${pr.skillPoints > 0 && pr.attrs.endurance < 5
              ? `<button class="btn btn-sm btn-accent" data-upgrade="endurance">+ Nâng</button>`
              : ''}
          </div>

          <div class="skill-row">
            <div class="skill-info">
              <div class="skill-title">🖐 Khéo léo (Agility)</div>
              <div class="skill-desc">Mở rộng +${(pr.attrs.agility - 1) * 12}% vùng chính xác trong mini-game xưởng & nối điện.</div>
            </div>
            <div class="skill-val">${pr.attrs.agility}/5</div>
            ${pr.skillPoints > 0 && pr.attrs.agility < 5
              ? `<button class="btn btn-sm btn-accent" data-upgrade="agility">+ Nâng</button>`
              : ''}
          </div>

          <div class="skill-row">
            <div class="skill-info">
              <div class="skill-title">🔍 Quan sát (Perception)</div>
              <div class="skill-desc">Tăng khả năng phát hiện manh mối, giảm thời gian tìm kiếm vật phẩm.</div>
            </div>
            <div class="skill-val">${pr.attrs.perception}/5</div>
            ${pr.skillPoints > 0 && pr.attrs.perception < 5
              ? `<button class="btn btn-sm btn-accent" data-upgrade="perception">+ Nâng</button>`
              : ''}
          </div>

          <div class="skill-row">
            <div class="skill-info">
              <div class="skill-title">🗣 Giao tiếp (Charisma)</div>
              <div class="skill-desc">Giảm ${(pr.attrs.charisma - 1) * 5}% giá căn tin; tăng +${(pr.attrs.charisma - 1) * 15}% thiện cảm khi trò chuyện.</div>
            </div>
            <div class="skill-val">${pr.attrs.charisma}/5</div>
            ${pr.skillPoints > 0 && pr.attrs.charisma < 5
              ? `<button class="btn btn-sm btn-accent" data-upgrade="charisma">+ Nâng</button>`
              : ''}
          </div>
        </div>

        <div style="text-align:right;margin-top:12px">
          <button class="btn btn-accent" data-close>Đóng</button>
        </div>
      `;

      this.showModal(html, (el) => {
        el.querySelectorAll('[data-upgrade]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const attr = (btn as HTMLElement).dataset.upgrade as AttributeId;
            if (this.g.spendSkillPoint(attr)) {
              render();
            }
          });
        });
      });
    };

    render();
  }

  // ───────────── Xem Chi Tiết Nhiệm Vụ ─────────────
  showQuestDetail() {
    const s = this.g.s;
    const activeQuests = QUEST_ORDER.filter((q) => this.g.qStatus(q) === 'active');
    const rows = activeQuests
      .map((qid) => {
        const def = QUESTS[qid];
        const br = this.g.qBranch(qid);
        const visibleObjectives = def.objectives.filter((o) => !o.branch || o.branch === br);
        const nextRequired = visibleObjectives.find((o) => !o.optional && !this.g.qObj(qid, o.id));
        const objsHtml = visibleObjectives.map((o) => {
          const done = this.g.qObj(qid, o.id);
          const blocked = !done && !!this.g.objectiveBlockReason(qid, o.id);
          const isNext = !done && o === nextRequired;
          return `<div style="font-size:13px;margin:4px 0;line-height:1.45;color:${done ? '#86efac' : isNext ? '#fde68a' : '#cbd5e1'}">
            ${done ? '✔' : blocked ? '🔒' : '➜'} ${o.text}
          </div>`;
        }).join('');
        const nextHint = nextRequired
          ? `<div style="margin:8px 0;padding:7px 9px;border-radius:8px;background:rgba(245,158,11,.11);border-left:3px solid #f59e0b;color:#fde68a;font-size:12px">
              Bước cần làm trước: ${nextRequired.text}
            </div>`
          : '';

        return `
          <div class="card-row">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
              <b>${def.title}</b>
              <span class="tag ${def.type === 'main' ? 'good' : ''}">${def.type === 'main' ? 'Chính' : 'Phụ'}</span>
            </div>
            <div class="hud-sub" style="margin-bottom:6px">Người giao: <b>${def.giver}</b> · ${def.reason}</div>
            ${nextHint}
            <div style="margin-left:4px">${objsHtml}</div>
            <div class="hud-sub" style="margin-top:6px;color:#fde68a">Phần thưởng: ${def.reward}</div>
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

  // ───────────── Xem Việc Hôm Nay & Lịch Sinh Hoạt ─────────────
  showDailyPlanModal() {
    const s = this.g.s;
    const tasks = s.daily.tasks || [];
    const schedule = getDailySchedule(s.minute);

    const taskItemsHTML = tasks
      .map((t) => {
        const isDone = t.done;
        const isMissed = !isDone && t.endMinute !== undefined && s.minute > t.endMinute;
        const statusBadge = isDone
          ? `<span class="daily-badge done">✔ Đã xong (+10 XP)</span>`
          : isMissed
            ? `<span class="daily-badge missed" style="background:rgba(239,68,68,0.18);color:#fca5a5;border:1px solid rgba(239,68,68,0.4)">⚠️ Đã lỡ hôm nay</span>`
            : `<span class="daily-badge pending">⏳ Chưa xong</span>`;
        const catLabel = t.category === 'duty' ? 'Nghĩa vụ' : t.category === 'relation' ? 'Quan hệ' : 'Cá nhân';
        return `
          <div class="daily-task-card ${isDone ? 'done' : ''}">
            <div class="daily-task-top">
              <span class="daily-cat ${t.category}">${catLabel}</span>
              <b class="daily-task-title">${t.title}</b>
              ${statusBadge}
            </div>
            <div class="daily-task-desc">${t.desc}</div>
            ${t.timeHint ? `<div class="daily-task-time">⏰ Khung giờ: <b>${t.timeHint}</b></div>` : ''}
          </div>
        `;
      })
      .join('');

    const scheduleItemsHTML = schedule
      .map((item) => {
        const statusText =
          item.status === 'active'
            ? ' <b style="color:#22c55e">(đang mở)</b>'
            : item.status === 'past'
              ? ' <span style="opacity:0.55">(đã qua)</span>'
              : '';
        return `
          <div class="schedule-row ${item.status}">
            <span class="schedule-time">${item.timeRange}</span>
            <span class="schedule-label"><b>${item.label}</b>${item.where ? ` (${item.where})` : ''}${statusText}</span>
          </div>
        `;
      })
      .join('');

    const allDone = tasks.length > 0 && tasks.every((t) => t.done);
    const bonusHTML = allDone
      ? `<div class="daily-bonus achieved">🎉 Đã hoàn thành 3/3 việc hôm nay! Nhận thưởng +1 điểm cải tạo.</div>`
      : `<div class="daily-bonus info">💡 Thưởng: +10 XP/việc · Hoàn thành cả 3 việc trong ngày: <b>+1 điểm cải tạo</b>.</div>`;

    this.showModal(`
      <h2>VIỆC HÔM NAY & LỊCH SINH HOẠT</h2>
      <div class="hud-sub" style="margin-bottom:8px">Ngày ${s.day} · Trại giam An Phú</div>
      ${bonusHTML}
      <h3 style="margin-top:12px;margin-bottom:6px;font-size:13.5px">📋 3 Việc Hôm Nay</h3>
      <div class="daily-tasks-list">
        ${taskItemsHTML || '<div class="hud-sub">Chưa có mục tiêu ngày.</div>'}
      </div>
      <h3 style="margin-top:14px;margin-bottom:6px;font-size:13.5px">⏰ Lịch Sinh Hoạt Cố Định</h3>
      <div class="daily-schedule-list">
        ${scheduleItemsHTML}
      </div>
      <div style="margin-top:14px;display:flex;justify-content:flex-end">
        <button class="btn btn-accent" style="min-height:44px;min-width:120px" data-close>Đã hiểu</button>
      </div>
    `);
  }

  showMorningBanner() {
    if (!this.morningBannerEl) return;
    const tasks = this.g.s.daily.tasks || [];
    if (this.morningPlanSubEl) {
      this.morningPlanSubEl.textContent =
        tasks.length > 0 ? tasks.map((t) => t.title).join(' • ') : '3 việc cần làm đã sẵn sàng';
    }
    this.morningBannerEl.style.display = 'flex';
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
        <div class="hud-sub">Tiêu hao khi chạy nhanh và thao tác xưởng. Tự hồi phục khi đi bộ hoặc nghỉ ngơi. Thuộc tính Bền bỉ giúp giảm hao tổn.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>🍚 <b>Độ no</b>: ${Math.round(st.satiety)}/100</span>
          ${bar(st.satiety, st.satiety < 25 ? '#ef4444' : st.satiety < 60 ? '#f59e0b' : '#22c55e')}
        </div>
        <div class="hud-sub">0 là đói lả, 100 là no căng. Giảm dần theo giờ và khi lao động nặng. Cần ăn cơm đúng giờ tại Nhà ăn hoặc dùng thức ăn nhẹ mua tại quầy căn tin.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>🧠 <b>Tinh thần</b>: ${Math.round(st.morale)}/100</span>
          ${bar(st.morale, st.morale < 25 ? '#ef4444' : st.morale < 60 ? '#f59e0b' : '#a855f7')}
        </div>
        <div class="hud-sub">0 là suy sụp tinh thần, 100 là vững vàng lạc quan. Giảm khi vi phạm kỷ luật hoặc chịu sức ép. Phục hồi bằng tập thể dục sân trại, đọc sách thư viện, trò chuyện hoặc ngủ đủ giấc.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>🌟 <b>Điểm cải tạo</b>: ${Math.round(st.reform)}/100</span>
          ${bar(st.reform, '#f59e0b')}
        </div>
        <div class="hud-sub">Tiêu chí quan trọng nhất trong kỳ xét giảm án 4 ngày một lần. Tăng khi lao động đủ định mức, học nghề, giúp đỡ người khác.</div>
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
      case 'profile': return this.showProfileAndSkills();
      case 'perks': return this.showPerks();
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
    if (node.speaker === 'Y sĩ An' && this.g.hasPerk('an_heal') && !node.choices.some((c) => c.label.includes('Y sĩ An khám'))) {
      const alreadyHealed = !this.g.canAnHeal();
      node.choices.unshift({
        label: alreadyHealed
          ? 'Hôm nay Y sĩ An đã cấp thuốc bồi dưỡng rồi (đã dùng).'
          : '🩺 Nhờ Y sĩ An khám & cấp thuốc miễn phí (Đặc quyền An ≥ 15)',
        disabled: alreadyHealed ? 'Đã dùng hôm nay' : undefined,
        run: () => {
          if (!alreadyHealed) {
            this.g.useAnHeal();
          }
          return null;
        },
      });
    }

    if (node.speaker === 'Chú Bảy' && this.g.hasPerk('bay_excuse') && !node.choices.some((c) => c.label.includes('Chú Bảy bảo lãnh'))) {
      const canRoll = this.g.s.daily.rollcall === 'missed';
      const canWork = this.g.s.daily.work === 'missed';
      if (this.g.canBayExcuse() && (canRoll || canWork)) {
        node.choices.unshift({
          label: `🤝 Nhờ Chú Bảy bảo lãnh xin phép vắng ${canRoll ? 'điểm danh' : 'ca làm'} (1 lần/kỳ xét)`,
          run: () => {
            this.g.useBayExcuse(canRoll ? 'rollcall' : 'work');
            return null;
          },
        });
      }
    }

    const choicesHtml = node.choices
      .map(
        (c, i) => `
        <button class="choice-btn ${c.important ? 'important' : ''}" data-idx="${i}" ${c.disabled ? 'disabled' : ''}>
          ${c.important ? '<span class="tag bad">Quyết định quan trọng</span>' : ''}${c.label}
          ${c.risk ? `<div class="prompt-risk">⚠ ${c.risk}</div>` : ''}
          ${c.disabled ? `<div class="hud-sub" style="color:#f87171">${c.disabled}</div>` : ''}
        </button>
      `,
      )
      .join('');

    this.showModal(
      `
      <h2>${node.speaker}</h2>
      ${node.role ? `<div class="hud-sub" style="margin-bottom:8px">${node.role}</div>` : ''}
      <div class="dialogue-text">${node.text}</div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-top:12px">${choicesHtml}</div>
    `,
      (el) => {
        el.querySelectorAll('[data-idx]').forEach((b) => {
          b.addEventListener('click', () => {
            const idx = Number((b as HTMLElement).dataset.idx);
            const choice = node.choices[idx];
            if (!choice) return;
            this.sfx.click();
            const prevSeq = this.modalSeq;
            const next = choice.run();
            if (next) {
              this.showDialogue(next, onEnd);
            } else if (this.modalSeq === prevSeq) {
              this.closeModal();
              if (onEnd) onEnd();
            }
          });
        });
      },
    );
  }

  showViolationBanner(v: Violation) {
    this.sfx.bad();
    this.toast(`VI PHẠM: ${v.title} — ${v.penalty}`, 'bad');
  }

  // ───────────── Nhật ký nhiệm vụ 4 phân loại ─────────────
  private showJournal() {
    const s = this.g.s;
    const d = s.daily;

    // 1. Việc bắt buộc hôm nay
    const isRollcallLate = d.rollcall === 'late';
    const isRollcallDone = d.rollcall === 'ok' || isRollcallLate;
    const mandatoryList = [
      {
        title: 'Điểm danh buổi sáng (06:30–06:45)',
        status: d.rollcall === 'ok' ? 'Đã hoàn thành đúng giờ' : isRollcallLate ? 'Trễ giờ' : d.rollcall === 'missed' ? 'Bỏ điểm danh' : 'Đang chờ (có mặt ở ô vàng ngoài sân)',
        done: isRollcallDone,
        late: isRollcallLate,
      },
      {
        title: 'Lao động ca sáng (08:00–11:30)',
        status: d.work === 'ok' ? `Đã hoàn thành ${d.workUnits}/3 ổ cắm` : d.workClockedIn ? `Đã chấm công (làm ${d.workUnits}/3)` : 'Chưa chấm công (xưởng lao động)',
        done: d.work === 'ok',
        late: false,
      },
      {
        title: 'Về buồng giam điểm danh tối (21:30)',
        status: d.curfew === 'ok' ? 'Đã có mặt trong buồng' : d.curfew === 'missed' ? 'Vi phạm giới nghiêm' : 'Có mặt tại buồng giam trước 21:30',
        done: d.curfew === 'ok',
        late: false,
      },
    ];

    const mandatoryHtml = mandatoryList.map((m) => `
      <div class="card-row">
        <b>${m.done ? '✔' : '○'} ${m.title}</b>
        <div class="hud-sub" style="color:${m.late ? '#fde68a' : m.done ? '#86efac' : '#cbd5e1'}">${m.status}</div>
      </div>
    `).join('');

    // 2. Nhiệm vụ cốt truyện đang theo
    const mainActive = QUEST_ORDER.filter((q) => QUESTS[q].type === 'main' && this.g.qStatus(q) === 'active');
    const mainHtml = mainActive.length
      ? mainActive.map((qid) => this.renderQuestCard(qid)).join('')
      : `
        <div class="card-row" style="border-left:3px solid #38bdf8">
          <b>Chưa có nhiệm vụ cốt truyện tiếp theo</b>
          <div class="hud-sub" style="margin-top:4px">
            👉 <b>Bước làm tiếp:</b> Mở <b>"Việc hôm nay"</b> để hoàn thành 3 việc trong ngày hoặc tham gia các <b>Nhiệm vụ tự chọn</b> đang mở để tích lũy điểm cải tạo & chuẩn bị cho bước ngoặt mới.
          </div>
        </div>
      `;

    // 3. Việc tự chọn đang làm
    const sideActive = QUEST_ORDER.filter((q) => QUESTS[q].type === 'side' && this.g.qStatus(q) === 'active');
    const sideHtml = sideActive.length ? sideActive.map((qid) => this.renderQuestCard(qid)).join('') : '<div class="hud-sub">Không có hoạt động tự chọn đang tiến hành.</div>';

    // 4. Chưa đến giờ hoặc cần điều kiện khác
    const locked = QUEST_ORDER.filter((q) => this.g.qStatus(q) === 'locked');
    const lockedHtml = locked.length ? locked.map((qid) => {
      const q = QUESTS[qid];
      const rule = SIDE_QUEST_UNLOCK_RULES[qid];
      const canAccept = q.type === 'side' && rule && rule.isUnlocked(s);
      const conditionText = rule ? rule.condition : q.requirement;
      const milestoneText = rule?.milestone ? ` · Mốc cốt truyện: ${rule.milestone}` : '';
      return `
        <div class="card-row" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
          <div style="flex:1;min-width:200px">
            <span class="tag ${q.type === 'main' ? 'good' : ''}">${q.type === 'main' ? 'Chính' : 'Phụ'}</span>
            <b>${q.title}</b>
            <div class="hud-sub" style="margin-top:3px">
              <b>Sẽ tự mở khi:</b> ${conditionText}${milestoneText}
            </div>
          </div>
          ${canAccept ? `<button class="btn btn-sm btn-accent btn-journal-accept" data-accept-quest="${qid}">Nhận</button>` : ''}
        </div>
      `;
    }).join('') : '<div class="hud-sub">Đã mở toàn bộ nhiệm vụ.</div>';

    // 5. Sổ tay manh mối
    const clueHtml = this.g.s.clues.length
      ? this.g.s.clues.map((c) => `<div class="card-row" style="border-color:#38bdf8">🔍 <b>Manh mối:</b> ${c}</div>`).join('')
      : '<div class="hud-sub">Chưa có manh mối nào trong sổ tay điều tra.</div>';

    this.showModal(`
      <h2>NHẬT KÝ & TIẾN TRÌNH NHIỆM VỤ</h2>
      <div class="journal-section">
        <h3>📌 Việc bắt buộc hôm nay</h3>
        ${mandatoryHtml}
      </div>
      <div class="journal-section">
        <h3>📖 Nhiệm vụ cốt truyện đang theo</h3>
        ${mainHtml}
      </div>
      <div class="journal-section">
        <h3>⭐ Hoạt động & Nhiệm vụ tự chọn</h3>
        ${sideHtml}
      </div>
      <div class="journal-section">
        <h3>🔒 Nhiệm vụ sắp tới (Chưa đến giờ hoặc cần điều kiện)</h3>
        ${lockedHtml}
      </div>
      <div class="journal-section">
        <h3>🔍 Sổ tay điều tra & Manh mối Kho số 7</h3>
        ${clueHtml}
      </div>
      <div style="text-align:right;margin-top:14px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `, (el) => {
      el.querySelectorAll<HTMLButtonElement>('.btn-journal-accept').forEach((btn) => {
        btn.onclick = (e) => {
          e.stopPropagation();
          this.sfx.click();
          const qid = btn.dataset.acceptQuest;
          if (qid) {
            this.g.startQuest(qid);
            this.showJournal();
          }
        };
      });
    });
  }

  private renderQuestCard(qid: string): string {
    const q = QUESTS[qid];
    const br = this.g.qBranch(qid);
    const overdue = getQuestOverdueStatus(qid, this.g.s);
    const objs = q.objectives
      .filter((o) => !o.branch || o.branch === br)
      .map((o) => {
        const isDone = this.g.qObj(qid, o.id);
        if (isDone) return `<div style="margin-left:8px">✔ ${o.text}</div>`;
        if (overdue.overdue && !isDone) {
          return `<div style="margin-left:8px;color:#fca5a5">⚠️ ${o.text} — <b style="color:#f87171">${overdue.message}</b></div>`;
        }
        return `<div style="margin-left:8px">○ ${o.text}</div>`;
      })
      .join('');
    return `
      <div class="card-row">
        <div><span class="tag ${q.type === 'main' ? 'good' : ''}">${q.type === 'main' ? 'Chính' : 'Phụ'}</span><b>${q.title}</b> — Người giao: ${q.giver}</div>
        <div class="hud-sub">${q.reason}</div>
        <div style="margin-top:4px">${objs}</div>
        <div class="hud-sub" style="margin-top:4px">Phần thưởng: ${q.reward}</div>
      </div>
    `;
  }

  // ───────────── Hồ sơ án & Giảm án ─────────────
  showRecord() {
    const s = this.g.s;
    const proj = project(s);
    const rev = computeReview(s, proj.nextReview);

    const breakdownHtml = rev.breakdown.map((b) => `
      <div style="display:flex;justify-content:space-between;padding:3px 0;font-size:12.5px">
        <span>${b.label}</span>
        <b style="color:${b.value > 0 ? '#86efac' : b.value < 0 ? '#f87171' : '#cbd5e1'}">${b.value > 0 ? '+' : ''}${b.value}</b>
      </div>
    `).join('');

    const vioList = s.violations.map((v) => `
      <div class="card-row" style="border-color:${v.severity >= 3 ? '#ef4444' : '#64748b'}">
        <div style="display:flex;justify-content:space-between">
          <b>${v.title}</b>
          <span class="tag ${v.status === 'overturned' ? 'good' : v.status === 'upheld' ? 'bad' : ''}">${v.status === 'overturned' ? 'Đã hủy' : v.status === 'upheld' ? 'Y án' : 'Hiệu lực'}</span>
        </div>
        <div class="hud-sub">Ngày ${v.day} · Chứng cứ: ${v.evidence}</div>
        <div class="hud-sub" style="color:#f87171">Hình phạt: ${v.penalty} (${v.reformDelta} cải tạo)</div>
      </div>
    `).join('') || '<div class="hud-sub">Không có tiền án hay vi phạm kỷ luật. Hồ sơ trong sạch!</div>';

    this.showModal(`
      <h2>HỒ SƠ CHẤP HÀNH ÁN & GIẢM ÁN</h2>
      <div class="hud-sub" style="margin-bottom:12px">Quy chế xét giảm án 4 ngày một lần (Án ban đầu: 24 ngày)</div>

      <div class="card-row">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px">
          <span>Thời hạn bản án: <b>24 ngày</b></span>
          <span>Đã chấp hành: <b>${s.sentence.served} ngày</b></span>
        </div>
        <div style="font-size:15px;margin:6px 0">Án còn lại: <b style="color:#fde68a;font-size:17px">${s.sentence.remaining} ngày</b></div>
        <div>Kỳ xét tiếp theo: <b>Ngày ${proj.nextReview}</b> (Dự kiến xét giảm: <b style="color:#86efac">−${rev.reduction} ngày</b>)</div>
        <div class="hud-sub">Dự kiến ngày ra tù: <b>Ngày ${proj.releaseEstimated}</b> (Nếu không giảm thêm: Ngày ${proj.releaseNoReduction})</div>
      </div>

      <h3>Phân tích kỳ xét giảm án (Ngày ${proj.nextReview})</h3>
      <div class="card-row">
        ${breakdownHtml}
        <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:6px;margin-top:6px;display:flex;justify-content:space-between">
          <b>Tổng điểm tích lũy: ${rev.score}</b>
          <b style="color:#fde68a">Mức giảm dự kiến: −${rev.reduction} ngày</b>
        </div>
      </div>

      <h3>Hồ sơ vi phạm kỷ luật</h3>
      ${vioList}

      <div style="text-align:right;margin-top:14px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `);
  }

  showAppealModal() {
    const s = this.g.s;
    const pending = s.violations.filter((v) => !v.appealed && v.severity > 0);
    if (pending.length === 0) {
      this.toast('Không có biên bản vi phạm nào cần giải trình.', 'info');
      return;
    }

    const items = pending.map((v) => {
      let canClear = false;
      let hint = 'Cần bằng chứng để giải trình.';
      if (v.appealTag === 'planted' && s.flags.bay_saw_planting) {
        canClear = true;
        hint = 'Chú Bảy có thể làm chứng bạn bị gài bẫy.';
      } else if (v.type === 'late_rollcall' && s.flags.an_excuse_slip) {
        canClear = true;
        hint = 'Có giấy xác nhận điều trị của Y sĩ An.';
      }

      return `
        <div class="card-row">
          <b>${v.title} (Ngày ${v.day})</b>
          <div class="hud-sub">${v.evidence}</div>
          <div class="hud-sub" style="color:${canClear ? '#86efac' : '#f87171'}">${hint}</div>
          ${canClear ? `<button class="btn btn-sm btn-accent" data-appeal="${v.id}" style="margin-top:6px">Trình bằng chứng khiếu nại</button>` : ''}
        </div>
      `;
    }).join('');

    this.showModal(`
      <h2>KHIẾU NẠI & GIẢI TRÌNH VI PHẠM</h2>
      <div class="hud-sub" style="margin-bottom:10px">Nộp chứng cứ minh oan để Quản giáo hủy bỏ biên bản kỷ luật</div>
      ${items}
      <button class="btn" data-close style="margin-top:10px">Đóng</button>
    `, (el) => {
      el.querySelectorAll('[data-appeal]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const vid = (btn as HTMLElement).dataset.appeal;
          const v = s.violations.find((x) => x.id === vid);
          if (v) {
            v.appealed = true;
            v.status = 'overturned';
            s.stats.reform = Math.min(100, s.stats.reform - v.reformDelta);
            this.toast(`Đã hủy biên bản: ${v.title}. Điểm cải tạo được phục hồi.`, 'good');
            this.closeModal();
          }
        });
      });
    });
  }

  // ───────────── Quan hệ bạn tù ─────────────
  private showRelations() {
    const s = this.g.s;
    const rows = (Object.keys(s.relations) as NpcId[]).map((id) => {
      const r = s.relations[id];
      const name = NPC_NAMES[id] ?? id;
      const val = r.value;
      const col = val > 20 ? '#86efac' : val < -10 ? '#f87171' : '#cbd5e1';
      const mems = r.memories.slice(-2).map((m) => `<div class="hud-sub">• Ngày ${m.day}: ${m.text}</div>`).join('');
      return `
        <div class="card-row">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <b>${name}</b>
            <b style="color:${col}">${val >= 0 ? '+' : ''}${val}</b>
          </div>
          <div class="hud-sub">${val > 30 ? 'Tin tưởng, sẵn sàng giúp đỡ' : val > 0 ? 'Thân thiện' : val < -20 ? 'Thù hằn, đề phòng' : 'Bình thường'}</div>
          ${mems}
        </div>
      `;
    }).join('');

    this.showModal(`
      <h2>QUAN HỆ BẠN TÙ & CÁN BỘ</h2>
      <div class="hud-sub" style="margin-bottom:10px">Lòng tin được xây dựng qua hành động, lời hứa và sự sẻ chia</div>
      ${rows}
      <div style="text-align:right;margin-top:12px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `);
  }

  // ───────────── Túi đồ ─────────────
  private showBag() {
    const inv = this.g.s.inventory;
    const entries = Object.keys(inv).filter((k) => (inv[k] ?? 0) > 0);
    const rows = entries.map((k) => {
      const it = ITEMS[k];
      return `
        <div class="card-row" style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <b>${it ? it.name : k}</b> <span class="tag">x${inv[k]}</span>
            <div class="hud-sub">${it ? it.desc : ''}</div>
          </div>
          ${it && it.use ? `<button class="btn btn-sm btn-accent" data-use="${k}">Dùng</button>` : ''}
        </div>
      `;
    }).join('');

    this.showModal(`
      <h2>TÚI ĐỒ CÁ NHÂN</h2>
      <div class="hud-sub" style="margin-bottom:10px">Đồ dùng tư trang và vật phẩm thu thập được</div>
      ${rows || '<div class="hud-sub">Túi đồ trống.</div>'}
      <div style="text-align:right;margin-top:12px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `, (el) => {
      el.querySelectorAll('[data-use]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const k = (btn as HTMLElement).dataset.use!;
          const err = this.g.useItem(k);
          if (err) this.toast(err, 'warn');
          else {
            this.toast(`Đã sử dụng ${ITEMS[k]?.name ?? k}.`, 'good');
            this.closeModal();
          }
        });
      });
    });
  }

  // ───────────── Bản đồ trại giam ─────────────
  private showMap() {
    const p = this.hooks.playerPos();
    const zn = zoneName(p.x, p.z);
    const bList = Object.keys(BUILDINGS).map((k) => {
      const b = BUILDINGS[k];
      const open = this.g.isOpen(k);
      return `
        <div class="card-row">
          <div style="display:flex;justify-content:space-between">
            <b>${b.name}</b>
            <span class="tag ${open ? 'good' : 'bad'}">${open ? 'Đang mở cửa' : 'Đang khóa'}</span>
          </div>
          <div class="hud-sub">${ACCESS[k]?.reason ?? ''}</div>
        </div>
      `;
    }).join('');

    this.showModal(`
      <h2>BẢN ĐỒ TRẠI GIAM AN PHÚ</h2>
      <div class="card-row" style="border-color:#38bdf8">Vị trí hiện tại của bạn: <b style="color:#fde68a">${zn}</b></div>
      <h3>Quy tắc tiếp cận & Giờ mở cửa các khu vực</h3>
      ${bList}
      <div style="text-align:right;margin-top:12px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `);
  }

  // ───────────── Chờ giờ / Nghỉ ngơi ─────────────
  showWait() {
    const pv = this.g.previewWait();
    if (!pv) {
      this.toast('Đã là cuối ngày, hãy về buồng giam nghỉ ngơi.', 'info');
      return;
    }
    const warnHtml = pv.warnings.map((w) => `<div style="color:#f87171">• ${w}</div>`).join('');
    this.showModal(`
      <h2>CHỜ GIỜ / NGHỈ NGƠI</h2>
      <div class="card-row">
        <div>Mốc thời gian tiếp theo: <b>${pv.label}</b></div>
        ${pv.warnings.length ? `<div style="margin-top:8px"><b>Cảnh báo hoạt động sẽ bỏ lỡ:</b>${warnHtml}</div>` : ''}
      </div>
      <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px">
        <button class="btn btn-accent" id="btn-do-wait">Xác nhận chờ đến giờ</button>
        <button class="btn" data-close>Hủy</button>
      </div>
    `, (el) => {
      el.querySelector('#btn-do-wait')?.addEventListener('click', () => {
        this.closeModal();
        this.hooks.onWait(pv.target);
      });
    });
  }

  // ───────────── Menu Tạm dừng & Cài đặt ─────────────
  private showPause() {
    const st = this.g.s.settings;
    this.showModal(
      `<h2>CÀI ĐẶT TRÒ CHƠI</h2>
       <div class="card-row">
         <label>Chất lượng đồ họa:
           <select id="sel-q">
             <option value="low" ${st.quality === 'low' ? 'selected' : ''}>Thấp (tiết kiệm pin)</option>
             <option value="medium" ${st.quality === 'medium' ? 'selected' : ''}>Vừa (cân bằng)</option>
             <option value="high" ${st.quality === 'high' ? 'selected' : ''}>Cao</option>
           </select>
         </label>
       </div>
       <div class="card-row">
         <label>Góc nhìn camera:
           <select id="sel-camera-mode">
             <option value="third" ${(st.cameraMode ?? 'third') === 'third' ? 'selected' : ''}>Góc nhìn thứ ba (Mặc định)</option>
             <option value="first" ${(st.cameraMode ?? 'third') === 'first' ? 'selected' : ''}>Góc nhìn thứ nhất (FPS)</option>
           </select>
         </label>
       </div>
       <div class="card-row">
         <label>Âm lượng: <input type="range" id="rng-vol" min="0" max="1" step="0.05" value="${st.volume}"/></label>
       </div>
       ${this.hooks.onRestoreBackup ? `
       <div class="card-row">
         <div style="display:flex;justify-content:space-between;align-items:center">
           <span>Dữ liệu sao lưu phiên bản cũ (v1):</span>
           <button class="btn btn-sm" id="btn-restore-backup">Khôi phục bản lưu v1</button>
         </div>
       </div>` : ''}
       <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
         <button class="btn btn-accent" data-close>Tiếp tục chơi</button>
         <button class="btn btn-danger" id="btn-reset">Bắt đầu lượt chơi mới</button>
       </div>`,
      (el) => {
        el.querySelector('#sel-q')?.addEventListener('change', (e) => {
          this.g.s.settings.quality = (e.target as HTMLSelectElement).value as 'low' | 'medium' | 'high';
          this.hooks.onSettingChange();
          this.g.commit();
        });
        el.querySelector('#sel-camera-mode')?.addEventListener('change', (e) => {
          this.g.s.settings.cameraMode = (e.target as HTMLSelectElement).value as 'third' | 'first';
          this.hooks.onSettingChange();
          this.g.commit();
        });
        el.querySelector('#rng-vol')?.addEventListener('input', (e) => {
          this.g.s.settings.volume = Number((e.target as HTMLInputElement).value);
          this.hooks.onSettingChange();
          this.g.commit();
        });
        el.querySelector('#btn-restore-backup')?.addEventListener('click', () => {
          this.closeModal();
          this.hooks.onRestoreBackup?.();
        });
        el.querySelector('#btn-reset')?.addEventListener('click', () => {
          this.showModal(
            `<h2>Xác nhận bắt đầu lại?</h2>
             <div class="card-row">Toàn bộ tiến trình hiện tại sẽ bị xóa và bắt đầu lại từ Tạo nhân vật Ngày 1.</div>
             <button class="btn btn-danger" id="btn-confirm-reset">Xác nhận chơi mới</button>
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

  showEnding(code: string) {
    const pName = this.g.s.profile.name || 'Minh';
    const endings: Record<string, { title: string; body: string }> = {
      tro_ve_vung_vang: {
        title: 'KẾT THÚC 1 — TỰ DO CÓ CHUẨN BỊ (VỮNG VÀNG)',
        body: `Cánh cổng sắt Trại giam An Phú mở rộng đón ánh ban mai rực rỡ. Chị Mai và người thân đứng chờ sẵn bên hàng phượng râm mát. Nhờ kiên định giữ vững lương tri, học được nghề nghiệp từ Thầy Phúc, giữ trọn lời hứa với Chú Bảy và minh oan thành công vụ án Kho số 7, ${pName} ngẩng cao đầu bước về phía tương lai tươi sáng với bản lĩnh vững vàng.`,
      },
      tu_te: {
        title: 'KẾT THÚC 1 — TỰ DO CÓ CHUẨN BỊ (VỮNG VÀNG)',
        body: `Cánh cổng sắt Trại giam An Phú mở rộng đón ánh ban mai rực rỡ. Chị Mai và người thân đứng chờ sẵn bên hàng phượng râm mát. Nhờ kiên định giữ vững lương tri, học được nghề nghiệp từ Thầy Phúc, giữ trọn lời hứa với Chú Bảy và minh oan thành công vụ án Kho số 7, ${pName} ngẩng cao đầu bước về phía tương lai tươi sáng với bản lĩnh vững vàng.`,
      },
      tro_ve_con_no: {
        title: 'KẾT THÚC 2 — CÁI GIÁ CỦA ĐƯỜNG TẮT (CÒN RÀNG BUỘC)',
        body: `Bản án khép lại, ${pName} bước ra khỏi cổng trại với vài đồng tiền kiếm nhanh trong túi, nhưng ở góc đường đã có người của Lâm đứng đợi để nhắc nhở về "món nợ ân tình hôm trước". Tự do trên danh nghĩa đã đến, nhưng cái bóng của những thỏa hiệp sai lầm vẫn còn đeo bám phía trước.`,
      },
      rang_buoc: {
        title: 'KẾT THÚC 2 — CÁI GIÁ CỦA ĐƯỜNG TẮT (CÒN RÀNG BUỘC)',
        body: `Bản án khép lại, ${pName} bước ra khỏi cổng trại với vài đồng tiền kiếm nhanh trong túi, nhưng ở góc đường đã có người của Lâm đứng đợi để nhắc nhở về "món nợ ân tình hôm trước". Tự do trên danh nghĩa đã đến, nhưng cái bóng của những thỏa hiệp sai lầm vẫn còn đeo bám phía trước.`,
      },
      man_an_im_lang: {
        title: 'KẾT THÚC 3 — MÃN HẠN TRONG LẶNG LẼ',
        body: `${pName} chấp hành đủ 24 ngày án phạt và bước ra khỏi cổng trại An Phú. Không dính vào rắc rối lớn, nhưng cũng bỏ lỡ cơ hội làm sáng tỏ vụ án Kho số 7 và chưa kịp tích lũy tay nghề vững vàng. Phía trước vẫn là cuộc đời tự do, đòi hỏi nhiều nỗ lực để làm lại từ đầu.`,
      },
      lang_le: {
        title: 'KẾT THÚC 3 — MÃN HẠN TRONG LẶNG LẼ',
        body: `${pName} chấp hành đủ 24 ngày án phạt và bước ra khỏi cổng trại An Phú. Không dính vào rắc rối lớn, nhưng cũng bỏ lỡ cơ hội làm sáng tỏ vụ án Kho số 7 và chưa kịp tích lũy tay nghề vững vàng. Phía trước vẫn là cuộc đời tự do, đòi hỏi nhiều nỗ lực để làm lại từ đầu.`,
      },
    };

    const e = endings[code] ?? endings.man_an_im_lang;
    this.showModal(`
      <h2>${e.title}</h2>
      <div class="card-row" style="font-size:14.5px;line-height:1.6">${e.body}</div>
      <div class="card-row">
        <div>Tổng số ngày chấp hành: <b>${this.g.s.sentence.served} ngày</b> · Điểm cải tạo cuối: <b>${Math.round(this.g.s.stats.reform)}</b></div>
        <div>Cấp độ đạt được: <b>Cấp ${this.g.s.progression.level}</b> · Xuất thân: <b>${BACKGROUNDS[this.g.s.profile.background]?.name}</b></div>
      </div>
      <button class="btn btn-accent" id="btn-replay">Chơi lại từ đầu</button>
    `, (el) => {
      el.querySelector('#btn-replay')?.addEventListener('click', () => {
        this.closeModal();
        this.hooks.onReset();
      });
    });
  }

  showNotice(title: string, message: string) {
    this.showModal(`
      <h2>${title}</h2>
      <div class="card-row" style="white-space: pre-wrap; line-height: 1.6; margin: 12px 0;">
        ${message}
      </div>
      <button class="btn btn-accent" id="btn-notice-close" style="width:100%; margin-top:8px">Đã hiểu</button>
    `, (el) => {
      el.querySelector('#btn-notice-close')?.addEventListener('click', () => this.closeModal());
    });
  }

  showDaySummary(sum: DaySummary) {
    this.sfx.good();
    const relHtml = sum.relationChanges.map((r) => `
      <div>${r.npc}: <b style="color:${r.delta > 0 ? '#86efac' : '#f87171'}">${r.delta > 0 ? '+' : ''}${r.delta}</b></div>
    `).join('') || '<div class="hud-sub">Không có thay đổi lớn về quan hệ hôm nay.</div>';

    this.showModal(`
      <h2>TỔNG KẾT NGÀY ${sum.day}</h2>
      <div class="card-row">
        <div>Điểm danh: <b>${sum.rollcall === 'ok' ? 'Đúng giờ' : sum.rollcall}</b></div>
        <div>Lao động: <b>${sum.work === 'ok' ? `Đủ chỉ tiêu (${sum.workUnits}/3)` : sum.work}</b></div>
        <div>Điểm cải tạo thay đổi: <b style="color:${sum.reformDelta >= 0 ? '#86efac' : '#f87171'}">${sum.reformDelta >= 0 ? '+' : ''}${sum.reformDelta}</b></div>
        <div>Tiền công & biến động: <b style="color:#fde68a">${fmtMoney(sum.moneyDelta)}</b></div>
      </div>
      ${sum.review ? `
        <div class="card-row" style="border-color:#f59e0b; background: rgba(245, 158, 11, 0.08); padding: 12px">
          <div style="font-weight:700; color:#fde68a; font-size:15px; margin-bottom:8px">
            📋 HỘI ĐỒNG XÉT DUYỆT GIẢM ÁN ĐỢT ${Math.ceil(sum.day / 4)} (NGÀY ${sum.day})
          </div>
          <table style="width:100%; font-size:13px; border-collapse:collapse; margin-bottom:8px">
            <tbody>
              ${sum.review.breakdown.map((b) => `
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.08)">
                  <td style="padding: 4px 0">${b.label}</td>
                  <td style="text-align:right; font-weight:700; color:${b.value > 0 ? '#86efac' : (b.value < 0 ? '#f87171' : '#94a3b8')}">
                    ${b.value > 0 ? '+' : ''}${b.value}
                  </td>
                </tr>
              `).join('')}
              <tr style="border-top: 1px solid rgba(245,158,11,0.4); font-weight:700">
                <td style="padding: 6px 0; color:#fde68a">Tổng điểm đánh giá</td>
                <td style="text-align:right; color:#fde68a; font-size:14px">${sum.review.score.toFixed(1)} / 2.0</td>
              </tr>
            </tbody>
          </table>
          <div style="font-size:13px; text-align:center; padding: 6px; background: rgba(0,0,0,0.3); border-radius:6px; font-weight:700; color: ${sum.review.reduction > 0 ? '#86efac' : '#fca5a5'}">
            ${sum.review.reduction > 0
              ? `⭐ KẾT QUẢ: ĐẠT TIÊU CHUẨN XÉT GIẢM −${sum.review.reduction} NGÀY ÁN PHẠT!`
              : `⚠️ KẾT QUẢ: Chưa đủ điều kiện xét giảm kỳ này (cần cải tạo & nhiệm vụ tích cực hơn)`}
          </div>
        </div>
      ` : ''}
      <div class="card-row">
        <div>Án phạt còn lại: <b style="color:#fde68a;font-size:16px">${sum.remainingAfter} ngày</b></div>
      </div>
      <h3>Quan hệ bạn tù</h3>
      <div class="card-row">${relHtml}</div>
      <button class="btn btn-accent" id="btn-next-day" style="margin-top:10px">Bắt đầu ngày mới</button>
    `, (el) => {
      el.querySelector('#btn-next-day')?.addEventListener('click', () => {
        this.closeModal();
        if (this.g.s.ending) this.showEnding(this.g.s.ending);
      });
    });
  }

  // ───────────── Mini-games ─────────────
  showWorkbenchMinigame() {
    const reason = this.g.canWorkReason();
    if (reason) {
      this.toast(reason, 'warn');
      return;
    }
    const agility = this.g.s.progression.attrs.agility;
    const agilityBonus = (agility - 1) * 0.04;
    const diff = DIFFICULTIES[this.g.s.profile.difficulty] || DIFFICULTIES.normal;

    let step = 0;
    let cursor = 0;
    let dir = 1;
    let raf = 0;
    const scores: number[] = [];

    const cancel = () => cancelAnimationFrame(raf);
    this.activeMinigameCancel = cancel;

    this.showModal(`
      <h2>BÀN LẮP RÁP Ổ CẮM XƯỞNG</h2>
      <div class="hud-sub">Nhấn [BẤM CHÍNH XÁC] khi con trỏ nằm trong vùng màu xanh</div>
      <div class="card-row" style="margin:12px 0">
        <div id="wg-step-name" style="font-weight:700;margin-bottom:8px">Bước 1</div>
        <div class="mg-track" style="position:relative;height:24px;background:#1e293b;border-radius:12px;overflow:hidden">
          <div id="wg-zone" style="position:absolute;top:0;bottom:0;background:rgba(34,197,94,0.4);border-left:2px solid #22c55e;border-right:2px solid #22c55e"></div>
          <div id="wg-cursor" style="position:absolute;top:0;bottom:0;width:4px;background:#fde68a"></div>
        </div>
      </div>
      <div style="display:flex;gap:8px;justify-content:center">
        <button class="btn btn-accent" id="wg-hit" style="padding:10px 24px;font-size:16px">BẤM CHÍNH XÁC</button>
      </div>
    `, (el) => {
      const stepName = el.querySelector('#wg-step-name')!;
      const zoneEl = el.querySelector('#wg-zone') as HTMLElement;
      const cursorEl = el.querySelector('#wg-cursor') as HTMLElement;

      const renderZone = () => {
        const sDef = STEPS[step];
        stepName.textContent = sDef.name;
        const z0 = Math.max(0.1, sDef.zone[0] - agilityBonus * diff.hitZoneMultiplier);
        const z1 = Math.min(0.9, sDef.zone[1] + agilityBonus * diff.hitZoneMultiplier);
        zoneEl.style.left = `${z0 * 100}%`;
        zoneEl.style.width = `${(z1 - z0) * 100}%`;
      };

      const loop = () => {
        cursor += dir * 0.02 * (1 / diff.hitZoneMultiplier);
        if (cursor >= 1) { cursor = 1; dir = -1; }
        if (cursor <= 0) { cursor = 0; dir = 1; }
        cursorEl.style.left = `${cursor * 100}%`;
        raf = requestAnimationFrame(loop);
      };

      renderZone();
      raf = requestAnimationFrame(loop);

      el.querySelector('#wg-hit')?.addEventListener('click', () => {
        const sDef = STEPS[step];
        const z0 = Math.max(0.1, sDef.zone[0] - agilityBonus * diff.hitZoneMultiplier);
        const z1 = Math.min(0.9, sDef.zone[1] + agilityBonus * diff.hitZoneMultiplier);
        const center = (z0 + z1) / 2;
        const dist = Math.abs(cursor - center);
        const maxDist = (z1 - z0) / 2;
        const score = Math.max(20, Math.round(100 - (dist / maxDist) * 60));
        scores.push(score);

        step++;
        if (step >= STEPS.length) {
          cancelAnimationFrame(raf);
          this.activeMinigameCancel = null;
          this.closeModal();
          const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
          this.g.finishWorkUnit(avg, true);
        } else {
          renderZone();
        }
      });
    });
  }

  showExerciseMinigame() {
    const reason = this.g.exerciseReason();
    if (reason) { this.toast(reason, 'warn'); return; }
    let reps = 0;
    this.showModal(`
      <h2>Tập thể lực ngoài sân</h2>
      <div class="hud-sub">Thực hiện đủ 3 hiệp mới hoàn thành một buổi tập.</div>
      <div class="card-row" id="exercise-progress">Hiệp 0/3</div>
      <button class="btn btn-accent" id="exercise-rep">Thực hiện hiệp tiếp theo</button>
      <button class="btn" data-close>Thoát</button>
    `, (el) => {
      el.querySelector('#exercise-rep')?.addEventListener('click', () => {
        reps++;
        const status = el.querySelector('#exercise-progress');
        if (status) status.textContent = `Hiệp ${reps}/3`;
        if (reps >= 3) {
          this.g.exercise(1);
          this.g.completeObjective('ren_luyen_the_chat', 'tap_the_duc');
          this.closeModal();
        }
      });
    });
  }

  showVocationalMinigame(onDone?: () => void) {
    if (this.g.qObj('lop_nghe_dau', 'thao_tac')) {
      this.toast('Đã thực hành xong. Hãy gặp Thầy Phúc để nghe nhận xét.', 'info');
      return;
    }
    const prerequisite = this.g.objectiveBlockReason('lop_nghe_dau', 'thao_tac');
    if (prerequisite) { this.toast(prerequisite, 'warn'); return; }
    const COLORS = [
      { id: 1, name: 'Dây Đỏ (Pha L1)', color: '#ef4444' },
      { id: 2, name: 'Dây Vàng (Pha L2)', color: '#facc15' },
      { id: 3, name: 'Dây Xanh lam (Trung tính)', color: '#38bdf8' },
      { id: 4, name: 'Dây Xanh lá (Tiếp địa PE)', color: '#22c55e' },
    ];
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
                if (this.g.completeObjective('lop_nghe_dau', 'thao_tac')) {
                  this.g.addReform(3, 'Thực hành nối mạch điện an toàn');
                }
                this.showModal(`
                  <h2>Hoàn thành bài tập học nghề</h2>
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

  // ───────────── Căn tin ─────────────
  showCanteen(feedback?: string) {
    const hasDiscount = this.g.hasPerk('canteen_discount');
    const status = !this.g.canteenOpen()
      ? 'Căn tin đang đóng cửa. Mở cửa 16:30–21:00.'
      : this.g.canteenBanned()
        ? `Bạn đang bị cấm mua căn tin đến hết ngày ${this.g.s.flags.canteenBanUntil}.`
        : feedback ?? 'Căn tin đang mở. Chọn món để mua, sau đó dùng trong Túi đồ.';
    const shopIds = Object.keys(ITEMS).filter((k) => ITEMS[k].price);
    const rows = shopIds
      .map((id) => {
        const it = ITEMS[id];
        const price = this.g.itemPrice(id);
        const reason = this.g.purchaseError(id);
        const discountBadge = hasDiscount ? '<span class="tag good" style="font-size:10px;margin-left:4px">−10%</span>' : '';
        return `
        <div class="card-row" style="display:flex;justify-content:space-between;align-items:center">
          <div><b>${it.name}</b> — ${fmtMoney(price)}${discountBadge}<div class="hud-sub">${it.desc}</div></div>
          <div style="text-align:right">
            <button class="btn btn-accent" data-buy="${id}" ${reason ? 'disabled' : ''}>Mua</button>
            ${reason ? `<div class="hud-sub" style="max-width:150px">${reason}</div>` : ''}
          </div>
        </div>`;
      })
      .join('');
    this.showModal(
      `<h2>Quầy căn tin (Tiền hiện có: ${fmtMoney(this.g.s.stats.money)})</h2>
       <div class="hud-sub" style="margin-bottom:8px">Mở cửa 16:30–21:00. Nhu yếu phẩm & đồ ăn bổ sung thể lực.${hasDiscount ? ' <b style="color:#4ade80">(Đang hưởng đặc quyền giảm giá 10%)</b>' : ''}</div>
       <div class="card-row" id="canteen-status" role="status">${status}</div>
       ${rows}
       <button class="btn" data-close>Đóng</button>`,
      (el) => {
        el.querySelectorAll('[data-buy]').forEach((b) => {
          b.addEventListener('click', () => {
            const id = (b as HTMLElement).dataset.buy!;
            const err = this.g.buy(id);
            if (!err) this.sfx.good();
            this.showCanteen(err ?? `Đã mua ${ITEMS[id].name}. Vật phẩm đã vào Túi đồ.`);
          });
        });
      },
    );
  }

  // ───────────── Hoạt động phụ việc y tế ─────────────
  showMedicineSortingMinigame() {
    const reason = this.g.objectiveBlockReason('phu_y_te', 'hoan_thanh');
    if (reason) { this.toast(reason, 'warn'); return; }
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
        this.g.completeObjective('phu_y_te', 'hoan_thanh');
        this.closeModal();
      });
    });
  }

  // ───────────── Đọc sách thư viện ─────────────
  showLibraryReader() {
    const hasPerk = this.g.hasPerk('library_borrow');
    const needsBorrow = this.g.qStatus('sach_thu_vien') === 'active' &&
      !this.g.qObj('sach_thu_vien', 'muon_sach');
    this.showModal(`
      <h2>Thư viện trại giam An Phú</h2>
      <div class="card-row">
        Giá sách gồm nhiều đầu sách cẩm nang phổ biến giáo dục pháp luật, sổ tay nghề cơ điện và tác phẩm văn học phục vụ cải tạo.
        ${hasPerk
          ? '<div class="tag good" style="margin-top:6px;display:inline-block">✔ Đã có chứng chỉ nghề — Quyền mượn sách khả dụng</div>'
          : '<div class="tag warn" style="margin-top:6px;display:inline-block">🔒 Chưa có quyền mượn sách (Cần chứng chỉ từ "Bài học nghề đầu tiên")</div>'}
      </div>
      <div class="choice-list">
        ${!hasPerk
          ? '<button class="choice-btn" id="lib-borrow-blocked"><span class="tag bad" style="margin-right:6px">Khóa</span> Mượn sách thư viện (Cần chứng chỉ nghề "Bài học nghề đầu tiên")</button>'
          : needsBorrow
            ? '<button class="choice-btn important" id="lib-borrow-law">Bước 1: Mượn cẩm nang pháp luật từ giá sách</button>'
            : '<button class="choice-btn" id="lib-borrow-extra">Mượn sách đọc thêm (−5 căng thẳng, +1 điểm cải tạo)</button>'}
        ${hasPerk
          ? '<button class="choice-btn" id="lib-read-law">Đọc Cẩm nang pháp luật & quyền giảm án (−10 căng thẳng, +1 điểm cải tạo)</button>'
          : '<button class="choice-btn" id="lib-read-law-blocked" disabled><span class="tag bad" style="margin-right:6px">Khóa</span> Đọc cẩm nang tại chỗ (Cần chứng chỉ nghề)</button>'}
        <button class="choice-btn" id="lib-read-tech">Đọc Sách hướng dẫn kỹ thuật điện dân dụng (−5 căng thẳng)</button>
        <button class="choice-btn" data-close>Rời giá sách</button>
      </div>
    `, (el) => {
      el.querySelector('#lib-borrow-blocked')?.addEventListener('click', () => {
        this.toast('Cần hoàn thành "Bài học nghề đầu tiên" để nhận chứng chỉ trước khi được mượn sách thư viện.', 'warn');
      });
      el.querySelector('#lib-borrow-extra')?.addEventListener('click', () => {
        this.g.addStat('stress', -5);
        this.g.addReform(1, 'Mượn sách thư viện', true);
        this.toast('Đã mượn sách đọc thêm (−5 căng thẳng, +1 điểm cải tạo).', 'good');
      });
      el.querySelector('#lib-borrow-law')?.addEventListener('click', () => {
        if (!this.g.hasPerk('library_borrow')) {
          this.toast('Cần hoàn thành "Bài học nghề đầu tiên" để nhận chứng chỉ nghề.', 'warn');
          return;
        }
        this.g.addStat('stress', -5);
        this.g.addReform(1, 'Mượn sách thư viện', true);
        this.g.completeObjective('sach_thu_vien', 'muon_sach');
        this.toast('Đã mượn sách (−5 căng thẳng, +1 điểm cải tạo). Bước tiếp theo: đọc cẩm nang pháp luật.', 'good');
        this.showLibraryReader();
      });
      el.querySelector('#lib-read-law')?.addEventListener('click', () => {
        this.g.s.flags.read_book_today = true;
        this.g.addStat('stress', -10);
        this.g.addReform(1, 'Đọc sách pháp luật');
        this.g.completeObjective('sach_thu_vien', 'doc_xong');
        this.g.checkDailyTasks({ category: 'personal', taskId: 'personal_reading' });
        this.sfx.good();
        this.showModal(`
          <h2>Đã đọc xong Cẩm nang pháp luật</h2>
          <div class="card-row">
            Bạn nắm rõ các điều kiện được giảm án: không vi phạm kỷ luật, tích cực lao động và có điểm cải tạo đạt từ 85 trở lên.
          </div>
          <button class="btn btn-accent" data-close>Đã hiểu</button>
        `);
      });
      el.querySelector('#lib-read-tech')?.addEventListener('click', () => {
        this.g.s.flags.read_book_today = true;
        this.g.addStat('stress', -5);
        this.g.checkDailyTasks({ category: 'personal', taskId: 'personal_reading' });
        this.sfx.good();
        this.showModal(`
          <h2>Đã đọc Sách kỹ thuật điện dân dụng</h2>
          <div class="card-row">Sách giúp bạn hiểu rõ nguyên lý mạch điện và thao tác an toàn trong xưởng.</div>
          <button class="btn btn-accent" data-close>Đóng</button>
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
}
