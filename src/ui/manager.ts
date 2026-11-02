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
  private clockEl!: HTMLElement;
  private statsEl!: HTMLElement;
  private questEl!: HTMLElement;
  private promptEl!: HTMLElement;
  private toastsEl!: HTMLElement;
  private modalHost!: HTMLElement;
  paused = false;
  private activeMinigameCancel: (() => void) | null = null;

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
  }

  private buildShell() {
    this.root.innerHTML = `
      <div class="hud-top">
        <div class="hud-card" id="hud-clock"></div>
        <div class="hud-card" id="hud-stats"></div>
        <div class="nav-btns interactive">
          <button class="btn" data-panel="journal" title="Phím J">Nhật ký (J)</button>
          <button class="btn" data-panel="record" title="Phím P">Hồ sơ (P)</button>
          <button class="btn" data-panel="relations" title="Phím R">Quan hệ (R)</button>
          <button class="btn" data-panel="bag" title="Phím B">Túi đồ (B)</button>
          <button class="btn" data-panel="map" title="Phím M">Bản đồ (M)</button>
          <button class="btn" data-panel="wait">Chờ giờ</button>
          <button class="btn" data-panel="pause" title="Phím Esc">Menu</button>
        </div>
      </div>
      <div class="hud-card hud-quest" id="hud-quest"></div>
      <div class="toasts" id="hud-toasts"></div>
      <div class="prompt-box interactive" id="hud-prompt" style="display:none"></div>
      <div class="joy-zone interactive" id="joy-zone"><div class="joy-knob" id="joy-knob"></div></div>
      <div class="touch-right interactive">
        <button class="btn btn-accent" id="btn-interact">Tương tác (E)</button>
        <button class="btn" id="btn-sprint">Chạy</button>
      </div>
      <div id="modal-host"></div>
    `;
    this.clockEl = this.root.querySelector('#hud-clock')!;
    this.statsEl = this.root.querySelector('#hud-stats')!;
    this.questEl = this.root.querySelector('#hud-quest')!;
    this.promptEl = this.root.querySelector('#hud-prompt')!;
    this.toastsEl = this.root.querySelector('#hud-toasts')!;
    this.modalHost = this.root.querySelector('#modal-host')!;
    this.joyZone = this.root.querySelector('#joy-zone')!;
    this.joyKnob = this.root.querySelector('#joy-knob')!;

    this.root.querySelectorAll('[data-panel]').forEach((b) => {
      b.addEventListener('click', () => {
        this.sfx.click();
        this.openPanel((b as HTMLElement).dataset.panel!);
      });
    });
  }

  toast(text: string, kind = 'info') {
    const d = document.createElement('div');
    d.className = `toast ${kind}`;
    d.textContent = text;
    this.toastsEl.appendChild(d);
    while (this.toastsEl.children.length > 4) this.toastsEl.firstElementChild?.remove();
    setTimeout(() => d.remove(), 4800);
  }

  updateHUD(prompt: PromptTarget | null, guideTarget: { label: string; dist: number; angle: number } | null) {
    const s = this.g.s;
    const cur = blockAt(s.minute);
    const nxt = nextBlock(s.minute);
    const p = this.hooks.playerPos();
    const zn = zoneName(p.x, p.z);
    this.clockEl.innerHTML = `
      <div class="hud-clock">Ngày ${s.day} · ${fmtTime(s.minute)} — <span style="color:#93c5fd">${zn}</span></div>
      <div>Hiện tại: <b>${cur.label}</b> (${cur.where})</div>
      <div class="hud-sub">${nxt ? `Tiếp: ${fmtTime(nxt.start)} ${nxt.label}` : 'Cuối ngày — về giường ngủ'} · Án còn: <b>${s.sentence.remaining} ngày</b></div>
    `;

    const st = s.stats;
    const bar = (v: number, col = '#22c55e') =>
      `<span class="bar"><i style="width:${Math.round(v)}%;background:${col}"></i></span>`;
    this.statsEl.innerHTML = `
      <div class="stat-grid">
        <div>Sức khỏe ${Math.round(st.health)}${bar(st.health, st.health < 35 ? '#ef4444' : '#22c55e')}</div>
        <div>Thể lực ${Math.round(st.stamina)}${bar(st.stamina, '#38bdf8')}</div>
        <div>Đói ${Math.round(st.hunger)}${bar(st.hunger, st.hunger > 70 ? '#ef4444' : '#f59e0b')}</div>
        <div>Căng thẳng ${Math.round(st.stress)}${bar(st.stress, st.stress > 70 ? '#ef4444' : '#a855f7')}</div>
        <div>Cải tạo: <b>${Math.round(st.reform)}/100</b></div>
        <div>Tiền: <b>${fmtMoney(st.money)}</b> · Nghi ngờ: ${Math.round(st.suspicion)}</div>
      </div>
    `;

    // Mục tiêu đang theo
    const activeQuests = QUEST_ORDER.filter((q) => this.g.qStatus(q) === 'active');
    let qHtml = `<div style="font-weight:700;color:#fde68a;margin-bottom:3px">Chương ${s.chapter} — Mục tiêu</div>`;
    for (const qid of activeQuests.slice(0, 2)) {
      const def = QUESTS[qid];
      const br = this.g.qBranch(qid);
      const nextObj = def.objectives.find((o) => (!o.branch || o.branch === br) && !this.g.qObj(qid, o.id));
      qHtml += `<div>• <b>${def.title}:</b> ${nextObj ? nextObj.text : 'Hoàn tất'}</div>`;
    }
    if (s.settings.guide && guideTarget) {
      const arrow = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'][Math.round(((guideTarget.angle % (Math.PI * 2)) + Math.PI * 2) / (Math.PI / 4)) % 8];
      qHtml += `<div class="hud-sub" style="margin-top:4px;color:#fde68a">Chỉ đường: ${arrow} ${guideTarget.label} (${Math.round(guideTarget.dist)}m)</div>`;
    }
    this.questEl.innerHTML = qHtml;

    if (prompt && !this.paused) {
      this.promptEl.style.display = 'block';
      this.promptEl.innerHTML = `
        <div><b>[E]</b> ${prompt.label}</div>
        ${prompt.risk ? `<div class="prompt-risk">⚠ Quy tắc & hậu quả: ${prompt.risk}</div>` : ''}
      `;
      this.promptEl.onclick = () => prompt.run();
    } else {
      this.promptEl.style.display = 'none';
    }
  }

  closeModal() {
    if (this.activeMinigameCancel) {
      this.activeMinigameCancel();
      this.activeMinigameCancel = null;
    }
    this.modalHost.innerHTML = '';
    this.paused = false;
  }

  private showModal(html: string, onMount?: (el: HTMLElement) => void) {
    this.paused = true;
    this.modalHost.innerHTML = `<div class="modal-backdrop"><div class="modal">${html}</div></div>`;
    const m = this.modalHost.querySelector('.modal') as HTMLElement;
    m.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', () => this.closeModal()));
    if (onMount) onMount(m);
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
            const next = node.choices[idx].run();
            if (next) this.showDialogue(next, onEnd);
            else {
              this.closeModal();
              onEnd?.();
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
    this.showModal(`<h2>Nhật ký nhiệm vụ</h2>${rows}<button class="btn" data-close>Đóng</button>`);
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
