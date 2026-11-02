import * as THREE from 'three';
import './ui/styles.css';
import { ACCESS, fmtTime } from './logic/constants';
import { GameLogic } from './logic/game';
import { SaveManager } from './logic/save';
import { createInitialState, type NpcId } from './logic/state';
import { NPCS } from './data/npcs';
import { VIOLATIONS } from './data/violations';
import { buildDialogue } from './data/dialogues';
import { DOORS, SPOTS, ZONES, inBox, zonesAt } from './world/layout';
import { PrisonWorld } from './world/builder';
import { HumanoidRig } from './actors/humanoid';
import { NpcActor } from './actors/npc';
import { InputController, ThirdPersonCamera } from './core/controls';
import { SoundEngine } from './core/audio';
import { UIManager, type PromptTarget } from './ui/manager';

class App {
  renderer!: THREE.WebGLRenderer;
  world!: PrisonWorld;
  tpCam = new ThirdPersonCamera();
  input = new InputController();
  sfx = new SoundEngine();
  saves = new SaveManager(typeof localStorage !== 'undefined' ? localStorage : null);
  g!: GameLogic;
  ui!: UIManager;
  playerRig!: HumanoidRig;
  npcs: Record<NpcId, NpcActor> = {} as Record<NpcId, NpcActor>;
  resting = false;
  private restrictedEpisode = 0;
  private wasInStorage = false;
  private currentPrompt: PromptTarget | null = null;

  init() {
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
    const uiRoot = document.getElementById('ui') as HTMLElement;

    const loaded = this.saves.load();
    this.g = new GameLogic(loaded ?? createInitialState());
    if (this.g.qStatus('nhap_trai') === 'locked') this.g.startQuest('nhap_trai');

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.world = new PrisonWorld();
    this.world.setQuality(this.g.s.settings.quality, this.renderer);
    this.sfx.volume = this.g.s.settings.volume;

    // Nhân vật người chơi: Minh
    this.playerRig = new HumanoidRig(
      { uniform: 'inmate', skin: 0xe2b48d, hair: 0x18181b, hairStyle: 'short', accent: 0x22c55e, height: 1.0, build: 1.0 },
      'Minh (Bạn)',
    );
    this.world.scene.add(this.playerRig.root);

    // Các NPC
    for (const id of Object.keys(NPCS) as NpcId[]) {
      const a = new NpcActor(id);
      a.snapToSchedule(this.g.s.minute);
      this.npcs[id] = a;
      this.world.scene.add(a.rig.root);
    }

    this.world.collision.dynamic = () => this.world.updateDoors((area) => this.g.isOpen(area));

    this.ui = new UIManager(uiRoot, this.g, this.sfx, {
      npcs: () => this.npcs,
      playerPos: () => this.g.s.player,
      onWait: (target) => {
        this.g.advanceTo(target, this.tickCtx(false, false));
        for (const id of Object.keys(this.npcs) as NpcId[]) this.npcs[id].snapToSchedule(this.g.s.minute);
        this.saves.save(this.g.s);
      },
      onSleep: () => this.sleepAndEndDay(true),
      onReset: () => {
        this.saves.clear();
        this.g = new GameLogic(createInitialState());
        this.g.startQuest('nhap_trai');
        window.location.reload();
      },
      onSettingChange: () => {
        this.world.setQuality(this.g.s.settings.quality, this.renderer);
        this.sfx.volume = this.g.s.settings.volume;
      },
    });

    this.bindEvents();
    this.input.bind(canvas, this.ui.joyZone, this.ui.joyKnob);
    this.input.onInteract = () => this.currentPrompt?.run();
    this.input.onKeyCommand = (code) => this.handleKey(code);

    document.getElementById('btn-interact')?.addEventListener('click', () => this.currentPrompt?.run());
    const sprintBtn = document.getElementById('btn-sprint')!;
    sprintBtn.addEventListener('touchstart', (e) => { e.preventDefault(); this.input.sprintTouch = true; }, { passive: false });
    sprintBtn.addEventListener('touchend', () => (this.input.sprintTouch = false));
    sprintBtn.addEventListener('mousedown', () => (this.input.sprintTouch = true));
    sprintBtn.addEventListener('mouseup', () => (this.input.sprintTouch = false));

    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.tpCam.cam.aspect = window.innerWidth / window.innerHeight;
      this.tpCam.cam.updateProjectionMatrix();
    });
    this.tpCam.cam.aspect = window.innerWidth / window.innerHeight;
    this.tpCam.cam.updateProjectionMatrix();

    // Lưu định kỳ & khi đóng tab
    window.addEventListener('beforeunload', () => this.saves.save(this.g.s));
    this.saves.save(this.g.s);

    // Biến toàn cục hỗ trợ kiểm thử tự động e2e
    (window as unknown as Record<string, unknown>).__DITU__ = {
      app: this,
      logic: this.g,
      saves: this.saves,
      teleport: (x: number, z: number) => {
        this.g.s.player.x = x;
        this.g.s.player.z = z;
        for (const id of Object.keys(this.npcs) as NpcId[]) this.npcs[id].snapToSchedule(this.g.s.minute);
        this.currentPrompt = this.findPrompt();
        this.ui.updateHUD(this.currentPrompt, this.computeGuide());
      },
    };

    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      this.step(dt);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  private bindEvents() {
    this.g.on('notice', (t: string, k: string) => this.ui.toast(t, k));
    this.g.on('save', () => this.saves.save(this.g.s));
    this.g.on('violation', (v) => this.ui.showViolationBanner(v));
    this.g.on('block', (b) => {
      this.sfx.bell();
      this.ui.toast(`🔔 ${fmtTime(b.start)} — ${b.label} (${b.where})`, 'info');
    });
    this.g.on('hearing', (h) => this.ui.showHearing(h));
    this.g.on('faint', () => {
      this.g.s.player.x = -14.25;
      this.g.s.player.z = -27.6;
      this.g.advanceTo(Math.min(1260, this.g.s.minute + 60), this.tickCtx(false, false));
    });
    this.g.on('forceSleep', () => {
      const inCb = zonesAt(this.g.s.player.x, this.g.s.player.z).includes('cellblock');
      this.sleepAndEndDay(inCb);
    });
  }

  private sleepAndEndDay(inBed: boolean) {
    const sum = this.g.endDay(inBed);
    for (const id of Object.keys(this.npcs) as NpcId[]) this.npcs[id].snapToSchedule(this.g.s.minute);
    this.saves.save(this.g.s);
    this.ui.showDaySummary(sum);
  }

  private handleKey(code: string) {
    if (code === 'KeyE') {
      if (!this.ui.paused) this.currentPrompt?.run();
      return;
    }
    if (this.ui.paused) {
      if (code === 'Escape') this.ui.closeModal();
      return;
    }
    if (code === 'KeyJ') this.ui.openPanel('journal');
    else if (code === 'KeyP') this.ui.openPanel('record');
    else if (code === 'KeyR') this.ui.openPanel('relations');
    else if (code === 'KeyB') this.ui.openPanel('bag');
    else if (code === 'KeyM') this.ui.openPanel('map');
    else if (code === 'Escape') this.ui.openPanel('pause');
  }

  private tickCtx(moving: boolean, sprinting: boolean) {
    const zs = zonesAt(this.g.s.player.x, this.g.s.player.z);
    return {
      inCellblock: zs.includes('cellblock'),
      inRollcall: zs.includes('rollcall'),
      sprinting,
      moving,
      resting: this.resting,
    };
  }

  private step(dt: number) {
    const p = this.g.s.player;

    if (!this.ui.paused) {
      const mv = this.input.moveVector();
      const moving = Math.hypot(mv.fwd, mv.right) > 0.05;
      if (moving) this.resting = false;
      const canSprint = mv.sprint && this.g.s.stats.stamina > 5;
      const speed = moving ? (canSprint ? 5.8 : 3.7) : 0;

      if (moving) {
        const sin = Math.sin(this.input.yaw);
        const cos = Math.cos(this.input.yaw);
        const wx = -sin * mv.fwd + cos * mv.right;
        const wz = -cos * mv.fwd - sin * mv.right;
        const [nx, nz] = this.world.collision.move(p.x, p.z, wx * speed * dt, wz * speed * dt, 0.36);
        p.x = nx;
        p.z = nz;
        p.rot = Math.atan2(wx, wz);
        this.sfx.step(dt, canSprint);
      }

      this.playerRig.pose = this.resting ? 'sit' : moving ? 'walk' : 'stand';
      this.playerRig.update(dt, speed);
      this.playerRig.root.position.set(p.x, 0, p.z);
      this.playerRig.root.rotation.y = p.rot;

      for (const id of Object.keys(this.npcs) as NpcId[]) {
        this.npcs[id].update(dt, this.g.s.minute);
      }

      this.g.tick(dt, this.tickCtx(moving, moving && canSprint));
      this.checkRestrictedZone();
    }

    this.world.update(
      dt,
      this.g.s.minute,
      this.g.has('chan_man'),
      this.g.has('hop_mui_khoan') || !!this.g.s.flags.stole_for_lam,
      this.g.has('dep_bay') || this.g.qStatus('dep_bay') === 'done',
    );

    this.tpCam.update(p.x, p.z, this.input.yaw, this.input.pitch, this.input.distance, this.world.cameraObstacles);
    this.currentPrompt = this.findPrompt();
    this.ui.updateHUD(this.currentPrompt, this.computeGuide());
    this.renderer.render(this.world.scene, this.tpCam.cam);
  }

  /** Phát hiện vào khu cấm dựa trên tầm nhìn thật của camera kho hoặc cán bộ. */
  private checkRestrictedZone() {
    const p = this.g.s.player;
    const inStorage = inBox(ZONES.find((z) => z.id === 'storage')!, p.x, p.z);
    if (inStorage && !this.wasInStorage) {
      this.restrictedEpisode++;
      this.g.addStat('suspicion', 5);
    }
    this.wasInStorage = inStorage;
    if (!inStorage) return;

    const seenCam = this.world.seenByStorageCam(p.x, p.z);
    const seenTung = this.npcs.tung.canSee(p.x, p.z, this.world.collision);
    const seenLan = this.npcs.lan.canSee(p.x, p.z, this.world.collision);
    if (seenCam || seenTung || seenLan) {
      const who = seenCam ? 'Camera góc kho ghi hình' : seenTung ? 'Cán bộ Tùng bắt gặp trực tiếp' : 'Quản giáo Lan bắt gặp';
      this.g.recordViolation('restricted', `ep${this.restrictedEpisode}-d${this.g.s.day}`, `${who} bạn ở trong kho vật tư lúc ${fmtTime(this.g.s.minute)}.`);
      // Đưa ra ngoài cửa kho
      p.x = 20.6;
      p.z = -7;
      this.wasInStorage = false;
    }
  }

  private findPrompt(): PromptTarget | null {
    const p = this.g.s.player;
    let best: { d: number; target: PromptTarget } | null = null;

    const consider = (d: number, maxR: number, target: PromptTarget) => {
      if (d <= maxR && (!best || d < best.d)) best = { d, target };
    };

    // 1. NPC gần nhất
    for (const id of Object.keys(this.npcs) as NpcId[]) {
      const a = this.npcs[id];
      const d = Math.hypot(a.x - p.x, a.z - p.z);
      consider(d, 2.2, {
        id: `npc_${id}`,
        label: `Nói chuyện với ${a.def.name} (${a.activity})`,
        run: () => {
          a.state = 'talk';
          a.faceToward(p.x, p.z);
          const node = buildDialogue(id, this.g, () => this.ui.showAppealModal());
          this.ui.showDialogue(node, () => (a.state = 'activity'));
        },
      });
    }

    // 2. Cửa đang khóa → giải thích lý do và cách mở
    for (const door of DOORS) {
      if (this.g.isOpen(door.area)) continue;
      const d = Math.hypot(door.ix - p.x, door.iz - p.z);
      consider(d, 2.1, {
        id: door.id,
        label: `${door.name} (Đang khóa — nhấn E xem lý do)`,
        run: () => {
          const rule = ACCESS[door.area];
          this.ui.toast(`🔒 ${rule.label}: ${rule.reason}`, 'warn');
        },
      });
    }

    // 3. Điểm tương tác cố định
    for (const sp of SPOTS) {
      const d = Math.hypot(sp.x - p.x, sp.z - p.z);
      if (d > sp.r) continue;
      const t = this.spotTarget(sp.id, sp.label);
      if (t) consider(d, sp.r, t);
    }

    return best ? (best as { d: number; target: PromptTarget }).target : null;
  }

  private spotTarget(id: string, label: string): PromptTarget | null {
    const g = this.g;
    switch (id) {
      case 'bed': {
        if (!g.has('chan_man')) {
          return {
            id,
            label: `${label}: Nhận chăn màn & đồ cá nhân`,
            run: () => {
              g.giveItem('chan_man');
              g.completeObjective('nhap_trai', 'chan_man');
            },
          };
        }
        const sl = g.canSleep();
        return {
          id,
          label: sl.ok ? `${label}: Đi ngủ kết thúc Ngày ${g.s.day}` : `${label}: Nghỉ lưng / Chờ giờ (${sl.reason})`,
          run: () => (sl.ok ? this.sleepAndEndDay(true) : this.ui.showWait()),
        };
      }
      case 'rules':
        return {
          id,
          label: `${label}: Đọc nội quy Trại giam An Phú`,
          run: () => {
            g.completeObjective('nhap_trai', 'noi_quy');
            this.ui.showDialogue({
              speaker: 'BẢNG NỘI QUY KHU GIAM A',
              text: '1. Điểm danh sáng 06:30–06:45 tại ô sơn vàng ngoài sân. Đến sau 06:45 tính trễ (−3 điểm), sau 07:00 tính vắng (−6 điểm).\n2. Lao động ca sáng 08:00–11:30 tại xưởng: bấm bảng chấm công trước 08:30 và hoàn thành đủ 3 sản phẩm.\n3. Tuyệt đối không tự ý vào Kho vật tư hoặc tàng trữ hàng cấm.\n4. Đúng 21:00 về khu buồng giam; 21:30 kiểm tra buồng.\n5. Mọi khiếu nại có bằng chứng được tiếp nhận tại Phòng quản giáo (07:00–17:00).',
              choices: [{ label: 'Đã đọc và ghi nhớ', run: () => null }],
            });
          },
        };
      case 'meal':
        return {
          id,
          label: `${label}: Nhận suất cơm trại`,
          run: () => {
            const err = g.eatMeal();
            if (err) this.ui.toast(err, 'warn');
            else this.sfx.good();
          },
        };
      case 'canteen':
        return {
          id,
          label: `${label}: Mua đồ ăn & nhu yếu phẩm`,
          run: () => this.ui.showCanteen(),
        };
      case 'clock':
        return {
          id,
          label: `${label}: Chấm công lao động`,
          run: () => {
            const err = g.clockIn();
            if (err) this.ui.toast(err, 'warn');
            else this.sfx.good();
          },
        };
      case 'workbench':
        return {
          id,
          label: `${label}: Lắp ráp ổ cắm điện (${g.s.daily.workUnits}/3)`,
          run: () => this.ui.showWorkbenchMinigame(),
        };
      case 'rest_ws':
      case 'bench_yard':
      case 'stonetable':
        return {
          id,
          label: `${label}: Ngồi nghỉ hồi thể lực & giảm căng thẳng`,
          run: () => {
            this.resting = !this.resting;
            this.ui.toast(this.resting ? 'Đang ngồi nghỉ — thể lực hồi nhanh hơn.' : 'Đã đứng dậy.', 'info');
          },
        };
      case 'drill': {
        if (g.has('hop_mui_khoan') || g.s.flags.stole_for_lam) return null;
        return {
          id,
          label: `${label}: Lấy hộp mũi khoan`,
          risk: VIOLATIONS.theft.risk,
          run: () => {
            const p = g.s.player;
            const seen = this.world.seenByStorageCam(p.x, p.z) || this.npcs.tung.canSee(p.x, p.z, this.world.collision);
            if (seen) {
              g.recordViolation('theft', `caught-d${g.s.day}`, 'Camera kho / Cán bộ Tùng bắt quả tang bạn lấy hộp mũi khoan trên kệ.');
              g.s.flags.canteenBanUntil = g.s.day + 2;
              if (g.qStatus('mon_no') === 'active' && g.qBranch('mon_no') === 'steal') {
                g.finishQuest('mon_no', 'failed', 'Bị bắt quả tang khi lấy hộp mũi khoan');
              }
              p.x = 20.6;
              p.z = -7;
            } else {
              g.giveItem('hop_mui_khoan');
              g.addStat('suspicion', 18);
              g.completeObjective('mon_no', 'lay_khoan');
            }
          },
        };
      }
      case 'exercise':
        return {
          id,
          label: `${label}: Tập thể lực & giảm căng thẳng`,
          run: () => this.ui.showExerciseMinigame(),
        };
      case 'sandals':
        if (g.qStatus('dep_bay') !== 'active' || g.has('dep_bay')) return null;
        return {
          id,
          label: `${label}: Nhặt đôi dép tổ ong chữ B7 của Chú Bảy`,
          run: () => {
            g.giveItem('dep_bay');
            g.completeObjective('dep_bay', 'tim_dep');
          },
        };
      case 'lan_desk':
        return {
          id,
          label: `${label}: Xem hồ sơ / Giải trình vi phạm`,
          run: () => this.ui.showAppealModal(),
        };
      case 'discipline':
        return {
          id,
          label: `${label} (Đang khóa)`,
          run: () => this.ui.toast(`🔒 ${ACCESS.discipline.reason}`, 'info'),
        };
    }
    return null;
  }

  /** Tìm mục tiêu tiếp theo để vẽ mũi tên chỉ đường trên HUD. */
  private computeGuide(): { label: string; dist: number; angle: number } | null {
    const g = this.g;
    const p = g.s.player;
    let tx = 0;
    let tz = 0;
    let label = '';

    if (g.qStatus('nhap_trai') === 'active') {
      if (!g.qObj('nhap_trai', 'chan_man')) { tx = -14.9; tz = -28.6; label = 'Giường của bạn'; }
      else if (!g.qObj('nhap_trai', 'noi_quy')) { tx = -27.0; tz = -21.5; label = 'Bảng nội quy'; }
      else if (!g.qObj('nhap_trai', 'diem_danh')) { tx = -9; tz = -9; label = 'Ô điểm danh sân'; }
      else if (!g.qObj('nhap_trai', 'gap_bay')) { tx = this.npcs.bay.x; tz = this.npcs.bay.z; label = 'Chú Bảy'; }
    } else if (g.qStatus('ca_dau') === 'active') {
      if (!g.qObj('ca_dau', 'cham_cong')) { tx = 13.1; tz = -6; label = 'Bảng chấm công xưởng'; }
      else if (!g.qObj('ca_dau', 'lap_rap')) { tx = 16; tz = 0.15; label = 'Bàn lắp ráp'; }
      else { tx = this.npcs.bay.x; tz = this.npcs.bay.z; label = 'Chú Bảy'; }
    } else if (g.qStatus('mon_no') === 'active') {
      const br = g.qBranch('mon_no');
      if (!g.qObj('mon_no', 'nghe_huy')) { tx = this.npcs.huy.x; tz = this.npcs.huy.z; label = 'Huy'; }
      else if (!g.qObj('mon_no', 'gap_lam') || !br) { tx = this.npcs.lam.x; tz = this.npcs.lam.z; label = 'Lâm'; }
      else if (br === 'steal' && !g.qObj('mon_no', 'lay_khoan')) { tx = 26.2; tz = -5.2; label = 'Kệ kho xưởng'; }
      else if (br === 'steal') { tx = this.npcs.lam.x; tz = this.npcs.lam.z; label = 'Lâm'; }
      else if (br === 'pay') { tx = this.npcs.lam.x; tz = this.npcs.lam.z; label = 'Lâm (trả 40.000đ)'; }
      else if (br === 'report') { tx = this.npcs.lan.x; tz = this.npcs.lan.z; label = 'Quản giáo Lan'; }
    }

    if (!label) return null;
    const dx = tx - p.x;
    const dz = tz - p.z;
    return { label, dist: Math.hypot(dx, dz), angle: Math.atan2(dx, -dz) - this.input.yaw };
  }
}

new App().init();
