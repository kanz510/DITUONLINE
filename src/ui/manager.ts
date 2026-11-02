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
import { BUILDINGS, zoneName } from '../world/layout';
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
      onRewatchIntro?: () => void;
      onUpdateAppearance?: (look: { skin: number; hair: number; hairStyle: 'short' | 'buzz' | 'bald'; preset: number }) => void;
      onRestoreBackup?: () => void;
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
    const isPortrait = window.innerHeight > window.innerWidth;
    const isTouch = this.isTouchDevice();

    if (isPortrait && isTouch) {
      this.orientOverlay.style.display = 'flex';
      if (!this.paused) {
        this.paused = true;
        this.pausedByOrientation = true;
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
          <div class="hud-progression-row interactive" id="hud-prog-bar" title="Cấp độ & Kinh nghiệm">
            <span class="hud-level-badge" id="hud-level">Lv.1</span>
            <div class="hud-xp-bar"><div class="hud-xp-fill" id="hud-xp-fill" style="width:0%"></div></div>
          </div>
          <div class="hud-quest-bar interactive" id="hud-quest-bar" title="Nhấp để xem chi tiết mục tiêu"></div>
        </div>
        <div class="hud-right">
          <div class="hud-action-row interactive">
            <div class="sentence-tag" id="hud-sentence">Án: 24n</div>
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

    // Cập nhật Cấp độ & Thanh XP
    const lvlEl = this.root.querySelector('#hud-level');
    const xpFill = this.root.querySelector('#hud-xp-fill') as HTMLElement;
    if (lvlEl) lvlEl.textContent = `Lv.${s.progression.level}`;
    if (xpFill) {
      const needed = xpForNextLevel(s.progression.level);
      const pct = needed === Infinity ? 100 : Math.min(100, Math.round((s.progression.xp / needed) * 100));
      xpFill.style.width = `${pct}%`;
    }

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
      this.btnInteract.textContent = isTouch ? act : `${act} (E)`;
    } else {
      this.promptEl.style.display = 'none';
      this.promptEl.onclick = null;
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
    this.modalSeq++;
    this.modalHost.innerHTML = '';
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

  // ───────────── Màn hình tạo nhân vật ─────────────
  showCharacterCreation(onDone: (profile: CharacterProfile) => void) {
    let name = (this.g.s.profile?.name || 'Minh').trim();
    let preset = 0;
    let skin = 0xe2b48d;
    let hair = 0x18181b;
    let hairStyle: 'short' | 'buzz' | 'bald' = 'short';
    let background: BackgroundId = 'mechanic';
    let difficulty: Difficulty = 'normal';

    const presets = [
      { name: 'Mẫu 1: Trẻ trung', skin: 0xf5d0b0, hairStyle: 'short' as const, desc: 'Dáng nhanh nhẹn, mắt sáng, tóc ngắn gọn gàng.' },
      { name: 'Mẫu 2: Rắn rỏi', skin: 0xe2b48d, hairStyle: 'buzz' as const, desc: 'Dáng đậm, tóc húi cua, da bánh mật khỏe khoắn.' },
      { name: 'Mẫu 3: Trầm tĩnh', skin: 0xba8c63, hairStyle: 'bald' as const, desc: 'Dáng cao gầy, đầu đinh, ánh mắt kiên định.' },
    ];

    const renderModal = () => {
      const html = `
        <h2>TẠO NHÂN VẬT & KHỞI ĐẦU</h2>
        <div class="hud-sub" style="margin-bottom:12px">Thiết lập hồ sơ trước khi bước vào Trại giam An Phú</div>
        
        <div class="cc-container">
          <div class="card-row">
            <label style="font-weight:700;display:block;margin-bottom:6px">1. Tên nhân vật (2–20 ký tự):</label>
            <input type="text" id="cc-input-name" class="text-input" value="${name}" maxlength="20" placeholder="Nhập tên nhân vật..."/>
          </div>

          <div class="card-row">
            <label style="font-weight:700;display:block;margin-bottom:6px">2. Mẫu ngoại hình cơ sở:</label>
            <div class="cc-grid">
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
                <div style="display:flex;gap:6px">
                  <button class="btn btn-sm ${hairStyle === 'short' ? 'btn-accent' : ''}" data-hair="short">Ngắn</button>
                  <button class="btn btn-sm ${hairStyle === 'buzz' ? 'btn-accent' : ''}" data-hair="buzz">Húi cua</button>
                  <button class="btn btn-sm ${hairStyle === 'bald' ? 'btn-accent' : ''}" data-hair="bald">Đầu trọc</button>
                </div>
              </div>
              <div>
                <label style="font-size:12px;color:var(--muted);display:block;margin-bottom:4px">Tông da:</label>
                <div style="display:flex;gap:6px">
                  <button class="btn btn-sm ${skin === 0xf5d0b0 ? 'btn-accent' : ''}" data-skin="light">Sáng</button>
                  <button class="btn btn-sm ${skin === 0xe2b48d ? 'btn-accent' : ''}" data-skin="med">Bánh mật</button>
                  <button class="btn btn-sm ${skin === 0xba8c63 ? 'btn-accent' : ''}" data-skin="dark">Ngăm</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card-row">
            <label style="font-weight:700;display:block;margin-bottom:6px">3. Chọn xuất thân (Quá khứ vụ án Kho số 7):</label>
            <div class="cc-grid" style="grid-template-columns:1fr">
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
            <label style="font-weight:700;display:block;margin-bottom:6px">4. Mức độ thử thách:</label>
            <div class="cc-grid">
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
        </div>

        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.1)">
          <div class="hud-sub">Bản án ban đầu: <b>24 ngày</b> · Mục tiêu: Cải tạo & Tìm lại sự thật</div>
          <button class="btn btn-accent" id="btn-cc-submit">Xác nhận & Bắt đầu hành trình ⏭</button>
        </div>
      `;

      this.showModal(html, (el) => {
        const inputName = el.querySelector('#cc-input-name') as HTMLInputElement;
        inputName?.addEventListener('input', (e) => {
          name = (e.target as HTMLInputElement).value;
        });

        el.querySelectorAll('[data-preset]').forEach((btn) => {
          btn.addEventListener('click', () => {
            preset = Number((btn as HTMLElement).dataset.preset);
            const p = presets[preset];
            skin = p.skin;
            hairStyle = p.hairStyle;
            this.hooks.onUpdateAppearance?.({ skin, hair, hairStyle, preset });
            renderModal();
          });
        });

        el.querySelectorAll('[data-hair]').forEach((btn) => {
          btn.addEventListener('click', () => {
            hairStyle = (btn as HTMLElement).dataset.hair as any;
            this.hooks.onUpdateAppearance?.({ skin, hair, hairStyle, preset });
            renderModal();
          });
        });

        el.querySelectorAll('[data-skin]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const sk = (btn as HTMLElement).dataset.skin;
            skin = sk === 'light' ? 0xf5d0b0 : sk === 'med' ? 0xe2b48d : 0xba8c63;
            this.hooks.onUpdateAppearance?.({ skin, hair, hairStyle, preset });
            renderModal();
          });
        });

        el.querySelectorAll('[data-bg]').forEach((btn) => {
          btn.addEventListener('click', () => {
            background = (btn as HTMLElement).dataset.bg as BackgroundId;
            renderModal();
          });
        });

        el.querySelectorAll('[data-diff]').forEach((btn) => {
          btn.addEventListener('click', () => {
            difficulty = (btn as HTMLElement).dataset.diff as Difficulty;
            renderModal();
          });
        });

        el.querySelector('#btn-cc-submit')?.addEventListener('click', () => {
          const finalName = (inputName ? inputName.value : name).replace(/[<>"'&]/g, '').trim();
          if (finalName.length < 2 || finalName.length > 20) {
            this.toast('Tên nhân vật phải từ 2 đến 20 ký tự.', 'warn');
            return;
          }
          this.closeModal();
          onDone({
            name: finalName,
            preset,
            skin,
            hair,
            hairStyle,
            background,
            difficulty,
            introSeen: false,
          });
        });
      });
    };

    renderModal();
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
        const objsHtml = def.objectives
          .filter((o) => !o.branch || o.branch === br)
          .map((o) => {
            const done = this.g.qObj(qid, o.id);
            return `<div style="font-size:13px;margin:3px 0;color:${done ? '#86efac' : '#cbd5e1'}">
              ${done ? '✔' : '○'} ${o.text}
            </div>`;
          })
          .join('');

        return `
          <div class="card-row">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
              <b>${def.title}</b>
              <span class="tag ${def.type === 'main' ? 'good' : ''}">${def.type === 'main' ? 'Chính' : 'Phụ'}</span>
            </div>
            <div class="hud-sub" style="margin-bottom:6px">Người giao: <b>${def.giver}</b> · ${def.reason}</div>
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
    const mandatoryList = [
      {
        title: 'Điểm danh buổi sáng (06:30–06:45)',
        status: d.rollcall === 'ok' ? 'Đã hoàn thành đúng giờ' : d.rollcall === 'late' ? 'Trễ giờ' : d.rollcall === 'missed' ? 'Bỏ điểm danh' : 'Đang chờ (có mặt ở ô vàng ngoài sân)',
        done: d.rollcall === 'ok',
      },
      {
        title: 'Lao động ca sáng (08:00–11:30)',
        status: d.work === 'ok' ? `Đã hoàn thành ${d.workUnits}/3 ổ cắm` : d.workClockedIn ? `Đã chấm công (làm ${d.workUnits}/3)` : 'Chưa chấm công (xưởng lao động)',
        done: d.work === 'ok',
      },
      {
        title: 'Về buồng giam điểm danh tối (21:30)',
        status: d.curfew === 'ok' ? 'Đã có mặt trong buồng' : d.curfew === 'missed' ? 'Vi phạm giới nghiêm' : 'Có mặt tại buồng giam trước 21:30',
        done: d.curfew === 'ok',
      },
    ];

    const mandatoryHtml = mandatoryList.map((m) => `
      <div class="card-row">
        <b>${m.done ? '✔' : '○'} ${m.title}</b>
        <div class="hud-sub" style="color:${m.done ? '#86efac' : '#cbd5e1'}">${m.status}</div>
      </div>
    `).join('');

    // 2. Nhiệm vụ cốt truyện đang theo
    const mainActive = QUEST_ORDER.filter((q) => QUESTS[q].type === 'main' && this.g.qStatus(q) === 'active');
    const mainHtml = mainActive.length ? mainActive.map((qid) => this.renderQuestCard(qid)).join('') : '<div class="hud-sub">Hiện không có nhiệm vụ cốt truyện nào. Hãy chú ý lịch sinh hoạt.</div>';

    // 3. Việc tự chọn đang làm
    const sideActive = QUEST_ORDER.filter((q) => QUESTS[q].type === 'side' && this.g.qStatus(q) === 'active');
    const sideHtml = sideActive.length ? sideActive.map((qid) => this.renderQuestCard(qid)).join('') : '<div class="hud-sub">Không có hoạt động tự chọn đang tiến hành.</div>';

    // 4. Chưa đến giờ hoặc cần điều kiện khác
    const locked = QUEST_ORDER.filter((q) => this.g.qStatus(q) === 'locked');
    const lockedHtml = locked.length ? locked.map((qid) => {
      const q = QUESTS[qid];
      return `<div class="card-row"><span class="tag">${q.type === 'main' ? 'Chính' : 'Phụ'}</span><b>${q.title}</b> <span class="hud-sub">(Điều kiện mở: ${q.requirement})</span></div>`;
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
    `);
  }

  private renderQuestCard(qid: string): string {
    const q = QUESTS[qid];
    const br = this.g.qBranch(qid);
    const objs = q.objectives
      .filter((o) => !o.branch || o.branch === br)
      .map((o) => `<div style="margin-left:8px">${this.g.qObj(qid, o.id) ? '✔' : '○'} ${o.text}</div>`)
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
         <label>Âm lượng: <input type="range" id="rng-vol" min="0" max="1" step="0.05" value="${st.volume}"/></label>
       </div>
       <div class="card-row">
         <div style="display:flex;justify-content:space-between;align-items:center">
           <span>Đoạn phim mở đầu (3D Cutscene):</span>
           <button class="btn btn-sm" id="btn-rewatch-cutscene">Xem lại mở đầu</button>
         </div>
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
        el.querySelector('#rng-vol')?.addEventListener('input', (e) => {
          this.g.s.settings.volume = Number((e.target as HTMLInputElement).value);
          this.hooks.onSettingChange();
          this.g.commit();
        });
        el.querySelector('#btn-rewatch-cutscene')?.addEventListener('click', () => {
          this.closeModal();
          this.hooks.onRewatchIntro?.();
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
        <div class="card-row" style="border-color:#f59e0b">
          <b style="color:#fde68a">🌟 KỲ XÉT GIẢM ÁN NGÀY ${sum.day}: GIẢM −${sum.review.reduction} NGÀY!</b>
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
    this.sfx.click();
    this.g.addStat('stamina', -15);
    this.g.addStat('stress', -15);
    this.g.addStat('health', 5);
    this.toast('Tập thể dục hoàn thành: −15 căng thẳng, +5 sức khỏe.', 'good');
    this.g.completeObjective('ren_luyen_the_chat', 'tap_the_duc');
  }

  showVocationalMinigame(onDone?: () => void) {
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
                this.g.completeObjective('lop_nghe_dau', 'thao_tac');
                this.g.addReform(3, 'Thực hành nối mạch điện an toàn');
                this.g.s.skills.vocationalExam++;
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
       <div class="hud-sub" style="margin-bottom:8px">Mở cửa 16:30–21:00. Nhu yếu phẩm & đồ ăn bổ sung thể lực.</div>
       ${rows}
       <button class="btn" data-close>Đóng</button>`,
      (el) => {
        el.querySelectorAll('[data-buy]').forEach((b) => {
          b.addEventListener('click', () => {
            const err = this.g.buy((b as HTMLElement).dataset.buy!);
            if (err) this.toast(err, 'warn');
            else this.sfx.good();
            this.showCanteen();
          });
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
            Bạn nắm rõ các điều kiện được giảm án: không vi phạm kỷ luật, tích cực lao động và có điểm cải tạo đạt từ 85 trở lên.
          </div>
          <button class="btn btn-accent" data-close>Đã hiểu</button>
        `);
      });
      el.querySelector('#lib-read-tech')?.addEventListener('click', () => {
        this.g.addStat('stress', -5);
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
