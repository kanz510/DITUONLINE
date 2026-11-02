import * as THREE from 'three';
import './ui/styles.css';
import { ACCESS, blockAt, fmtTime } from './logic/constants';
import { GameLogic } from './logic/game';
import { SaveManager } from './logic/save';
import { createInitialState, type NpcId } from './logic/state';
import { NPCS } from './data/npcs';
import { VIOLATIONS } from './data/violations';
import { buildDialogue } from './data/dialogues';
import { DOORS, NODES, SPOTS, ZONES, inBox, zonesAt } from './world/layout';
import { findPath, nearestNode } from './world/nav';
import { PrisonWorld } from './world/builder';
import { HumanoidRig } from './actors/humanoid';
import { NpcActor } from './actors/npc';
import { InputController, ThirdPersonCamera } from './core/controls';
import { SoundEngine } from './core/audio';
import { UIManager, type PromptTarget } from './ui/manager';
import { fetchLiveRelease } from './version';

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
    this.renderer.setSize(window.innerWidth, window.innerHeight, true);
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.width = '100dvw';
    canvas.style.height = '100dvh';
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.world = new PrisonWorld();
    this.world.setQuality(this.g.s.settings.quality, this.renderer);
    this.sfx.volume = this.g.s.settings.volume;

    // Nhân vật người chơi: Minh (không gắn nhãn chữ thường trực trên đầu)
    this.playerRig = new HumanoidRig(
      { uniform: 'inmate', skin: 0xe2b48d, hair: 0x18181b, hairStyle: 'short', accent: 0x22c55e, height: 1.0, build: 1.0 },
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

    fetchLiveRelease().then((rel) => this.ui.updateReleaseInfo(rel));

    this.bindEvents();
    this.input.bind(canvas, this.ui.joyZone, this.ui.joyKnob);
    this.input.onInteract = () => {
      if (!this.ui.paused) this.currentPrompt?.run();
    };
    this.input.onKeyCommand = (code) => this.handleKey(code);

    this.ui.btnInteract.addEventListener('click', () => {
      if (!this.ui.paused) this.currentPrompt?.run();
    });
    const sprintBtn = this.ui.btnSprint;
    const startSprint = (e?: Event) => {
      e?.preventDefault();
      this.input.sprintTouch = true;
    };
    const endSprint = () => {
      this.input.sprintTouch = false;
    };
    sprintBtn.addEventListener('touchstart', startSprint, { passive: false });
    sprintBtn.addEventListener('touchend', endSprint);
    sprintBtn.addEventListener('touchcancel', endSprint);
    sprintBtn.addEventListener('mousedown', startSprint);
    sprintBtn.addEventListener('mouseup', endSprint);
    sprintBtn.addEventListener('mouseleave', endSprint);

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.renderer.setSize(w, h, true);
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.width = '100dvw';
      canvas.style.height = '100dvh';
      this.tpCam.cam.aspect = w / h;
      this.tpCam.cam.updateProjectionMatrix();
      this.input.reset();
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    window.visualViewport?.addEventListener('resize', onResize);
    onResize();

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
        const a = this.npcs[id];
        a.update(dt, this.g.s.minute);
        if (a.rig.labelSprite) {
          const d = Math.hypot(a.x - p.x, a.z - p.z);
          a.rig.labelSprite.visible = d < 8.0;
        }
      }

      this.g.tick(dt, this.tickCtx(moving, moving && canSprint));
      this.checkRestrictedZone();
    } else {
      this.input.reset();
      this.playerRig.pose = 'stand';
      this.playerRig.update(dt, 0);
    }

    this.world.update(
      dt,
      this.g.s.minute,
      this.g.has('chan_man'),
      this.g.has('hop_mui_khoan') || !!this.g.s.flags.stole_for_lam,
      this.g.has('dep_bay') || this.g.qStatus('dep_bay') === 'done',
      this.g.has('chai_thuoc_hen') || this.g.qStatus('nghi_an_thuoc') === 'done',
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
          const node = buildDialogue(id, this.g, () => this.ui.showAppealModal(), () => this.ui.showVocationalMinigame());
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
      case 'med_table':
        return {
          id,
          label: `${label}: Nói chuyện với Y sĩ An`,
          run: () => {
            const an = this.npcs.an;
            an.state = 'talk';
            an.faceToward(this.g.s.player.x, this.g.s.player.z);
            const node = buildDialogue('an', this.g, () => this.ui.showAppealModal());
            this.ui.showDialogue(node, () => (an.state = 'activity'));
          },
        };
      case 'med_cabinet':
        return {
          id,
          label: `${label}: Phụ việc sắp xếp thuốc men`,
          run: () => this.ui.showMedicineSortingMinigame(),
        };
      case 'class_workbench':
        return {
          id,
          label: `${label}: Thực hành nối mạch an toàn`,
          run: () => this.ui.showVocationalMinigame(),
        };
      case 'library_shelf':
        return {
          id,
          label: `${label}: Mượn & đọc cẩm nang cải tạo`,
          run: () => this.ui.showLibraryReader(),
        };
      case 'visit_booth':
        return {
          id,
          label: `${label}: Nhấc ống nghe nói chuyện với Chị Mai`,
          run: () => {
            const mai = this.npcs.mai;
            mai.state = 'talk';
            mai.faceToward(this.g.s.player.x, this.g.s.player.z);
            const node = buildDialogue('mai', this.g, () => this.ui.showAppealModal());
            this.ui.showDialogue(node, () => (mai.state = 'activity'));
          },
        };
      case 'asthma_spot': {
        if (this.g.has('chai_thuoc_hen') || this.g.qStatus('nghi_an_thuoc') === 'done') return null;
        return {
          id,
          label: `${label}: Nhặt lọ thuốc hen suyễn`,
          run: () => {
            this.g.giveItem('chai_thuoc_hen');
            this.g.completeObjective('nghi_an_thuoc', 'nhat_thuoc');
            this.ui.toast('Đã nhặt lọ thuốc hen của Chú Bảy! Hãy mang về phòng y tế đưa cho Y sĩ An.', 'good');
          },
        };
      }
    }
    return null;
  }

  /** Điều hướng thông minh qua cửa & hành lang bằng đồ thị A* pathfinding (không trỏ xuyên tường). */
  private guideTo(label: string, tx: number, tz: number, isDuty: boolean): { label: string; dist: number; angle: number; isDuty: boolean } {
    const p = this.g.s.player;
    const directD = Math.hypot(tx - p.x, tz - p.z);
    const pZones = zonesAt(p.x, p.z);
    const tZones = zonesAt(tx, tz);
    const sameZone = pZones.length > 0 && tZones.length > 0 && pZones.some((z) => tZones.includes(z));

    // Nếu rất gần hoặc ở cùng khu vực mở: trỏ trực tiếp
    if (directD < 2.0 || (directD < 3.8 && sameZone)) {
      const dx = tx - p.x;
      const dz = tz - p.z;
      return {
        label,
        dist: directD,
        angle: Math.atan2(dx, -dz) - this.input.yaw,
        isDuty,
      };
    }

    // Tìm đường qua các cửa và hành lang
    const pNode = nearestNode(p.x, p.z);
    const tNode = nearestNode(tx, tz);
    const path = findPath(pNode, tNode);

    let nextNodeId = path[0];
    const [n0x, n0z] = NODES[nextNodeId];
    const distToFirst = Math.hypot(n0x - p.x, n0z - p.z);
    if (distToFirst < 1.3 && path.length > 1) {
      nextNodeId = path[1];
    }

    const [wx, wz] = NODES[nextNodeId];
    const targetDx = wx - p.x;
    const targetDz = wz - p.z;

    let totalDist = Math.hypot(targetDx, targetDz);
    const startIdx = Math.max(0, path.indexOf(nextNodeId));
    for (let i = startIdx; i < path.length - 1; i++) {
      const [ax, az] = NODES[path[i]];
      const [bx, bz] = NODES[path[i + 1]];
      totalDist += Math.hypot(ax - bx, az - bz);
    }
    const [lastX, lastZ] = NODES[path[path.length - 1]];
    totalDist += Math.hypot(tx - lastX, tz - lastZ);

    return {
      label,
      dist: totalDist,
      angle: Math.atan2(targetDx, -targetDz) - this.input.yaw,
      isDuty,
    };
  }

  /** Tìm mục tiêu tiếp theo để vẽ mũi tên chỉ đường trên HUD (phân biệt nghĩa vụ vs nhiệm vụ). */
  private computeGuide(): { label: string; dist: number; angle: number; isDuty?: boolean } | null {
    const g = this.g;
    const p = g.s.player;
    const curBlock = blockAt(g.s.minute);

    // 1. ƯU TIÊN NGHĨA VỤ LỊCH TRÌNH BẮT BUỘC (chỉ hiện 1 mục tiêu duy nhất)
    if (curBlock.id === 'rollcall' && g.s.daily.rollcall === 'pending') {
      return this.guideTo('Ô điểm danh sáng sân trại', -9, -9, true);
    }

    if (curBlock.id === 'work') {
      if (!g.s.daily.workClockedIn) {
        return this.guideTo('Bảng chấm công xưởng (trước 08:30)', 13.1, -6, true);
      }
      if (g.s.daily.workUnits === 0) {
        return this.guideTo('Bàn xưởng: hoàn thành ca lao động sáng', 16, 0.15, true);
      }
    }

    if (curBlock.id === 'curfew') {
      const inCell = zonesAt(p.x, p.z).includes('cellblock');
      if (!inCell) {
        return this.guideTo('Về buồng giam 3 điểm danh tối & ngủ', -14.9, -28.6, true);
      }
    }

    // 2. NHIỆM VỤ CỐT TRUYỆN & PHỤ
    let tx = 0;
    let tz = 0;
    let label = '';

    const bayWhere = () => {
      if (curBlock.id === 'work') return 'Chú Bảy (Bàn xưởng #2)';
      if (curBlock.id === 'breakfast' || curBlock.id === 'lunch' || curBlock.id === 'dinner') return 'Chú Bảy (Nhà ăn)';
      if (curBlock.id === 'wake' || curBlock.id === 'rest' || curBlock.id === 'curfew') return 'Chú Bảy (Buồng 3)';
      return 'Chú Bảy (Bàn cờ đá sân trại)';
    };

    if (g.qStatus('nhap_trai') === 'active') {
      if (!g.qObj('nhap_trai', 'chan_man')) { tx = -14.9; tz = -28.6; label = 'Giường của bạn (Nhận chăn màn)'; }
      else if (!g.qObj('nhap_trai', 'noi_quy')) { tx = -27.0; tz = -21.5; label = 'Bảng nội quy buồng giam'; }
      else if (!g.qObj('nhap_trai', 'diem_danh')) { tx = -9; tz = -9; label = 'Ô điểm danh sáng sân trại'; }
      else if (!g.qObj('nhap_trai', 'gap_bay')) {
        tx = this.npcs.bay.x; tz = this.npcs.bay.z;
        label = bayWhere();
      }
    } else if (g.qStatus('ca_dau') === 'active') {
      if (!g.qObj('ca_dau', 'cham_cong')) { tx = 13.1; tz = -6; label = 'Bảng chấm công xưởng'; }
      else if (!g.qObj('ca_dau', 'lap_rap')) { tx = 16; tz = 0.15; label = 'Bàn lắp ráp linh kiện'; }
      else { tx = this.npcs.bay.x; tz = this.npcs.bay.z; label = bayWhere(); }
    } else if (g.qStatus('mon_no') === 'active') {
      const br = g.qBranch('mon_no');
      if (!g.qObj('mon_no', 'nghe_huy')) { tx = this.npcs.huy.x; tz = this.npcs.huy.z; label = 'Huy (Buồng 3 / Sân)'; }
      else if (!g.qObj('mon_no', 'gap_lam') || !br) { tx = this.npcs.lam.x; tz = this.npcs.lam.z; label = 'Lâm (Khu thể thao sân)'; }
      else if (br === 'steal' && !g.qObj('mon_no', 'lay_khoan')) { tx = 26.2; tz = -5.2; label = 'Kệ kho xưởng (Lẻn lấy hộp khoan)'; }
      else if (br === 'steal') { tx = this.npcs.lam.x; tz = this.npcs.lam.z; label = 'Lâm (Giao đồ)'; }
      else if (br === 'pay') { tx = this.npcs.lam.x; tz = this.npcs.lam.z; label = 'Lâm (Trả 40.000đ)'; }
      else if (br === 'report') { tx = this.npcs.lan.x; tz = this.npcs.lan.z; label = 'Quản giáo Lan (Báo cáo kèm vật chứng)'; }
    } else if (g.qStatus('lop_nghe_dau') === 'active') {
      const openClass = g.isOpen('classroom');
      if (!g.qObj('lop_nghe_dau', 'den_lop')) {
        tx = this.npcs.phuc.x; tz = this.npcs.phuc.z;
        label = openClass ? 'Thầy Phúc (Lớp học nghề)' : 'Thầy Phúc (Lớp mở 14:00–16:30)';
      } else if (!g.qObj('lop_nghe_dau', 'thao_tac')) {
        tx = -21.5; tz = 13;
        label = openClass ? 'Bàn thực hành nối mạch' : 'Bàn thực hành (Mở 14:00–16:30)';
      } else {
        tx = this.npcs.phuc.x; tz = this.npcs.phuc.z;
        label = 'Thầy Phúc (Nhận chứng chỉ)';
      }
    } else if (g.qStatus('nghi_an_thuoc') === 'active') {
      const openMed = g.isOpen('medical');
      if (!g.qObj('nghi_an_thuoc', 'hoi_an')) {
        tx = this.npcs.an.x; tz = this.npcs.an.z;
        label = openMed ? 'Y sĩ An (Phòng y tế)' : 'Y sĩ An (Mở 07:30–11:30 & 13:30–17:00)';
      } else if (!g.qObj('nghi_an_thuoc', 'hoi_bay')) {
        tx = this.npcs.bay.x; tz = this.npcs.bay.z;
        label = bayWhere();
      } else if (!g.qObj('nghi_an_thuoc', 'nhat_thuoc')) {
        tx = 22.5; tz = 13;
        label = 'Lọ thuốc rơi góc sau xưởng';
      } else {
        tx = this.npcs.an.x; tz = this.npcs.an.z;
        label = openMed ? 'Y sĩ An (Giao thuốc cứu chú Bảy)' : 'Y sĩ An (Phòng y tế)';
      }
    } else if (g.qStatus('phong_tham_gap') === 'active') {
      const openVisit = g.isOpen('visitation');
      tx = -22.5; tz = -8.8;
      label = openVisit ? 'Vách kính thăm gặp (Chị Mai)' : 'Phòng thăm gặp (Mở 08:30–11:00 & 14:00–16:30)';
    }

    if (!label) return null;
    return this.guideTo(label, tx, tz, false);
  }
}

new App().init();

// Đăng ký Service Worker cho PWA & cache offline
if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      reg.addEventListener('updatefound', () => {
        const inst = reg.installing;
        if (inst) {
          inst.addEventListener('statechange', () => {
            if (inst.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('[SW] Bản cập nhật mới đã sẵn sàng.');
            }
          });
        }
      });
    }).catch((err) => {
      console.warn('[SW] Không thể đăng ký Service Worker:', err);
    });
  });
}
