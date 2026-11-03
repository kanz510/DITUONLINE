import * as THREE from 'three';
import './ui/styles.css';
import './ui/landing.css';
import { showLandingPage } from './ui/landing';
import { ACCESS, blockAt, fmtTime } from './logic/constants';
import { GameLogic } from './logic/game';
import { SaveManager } from './logic/save';
import { createInitialState, type NpcId } from './logic/state';
import { NPCS } from './data/npcs';
import { QUESTS, QUEST_ORDER } from './data/quests';
import { resolveQuestDestination } from './logic/quest-guide';
import { VIOLATIONS } from './data/violations';
import { buildDialogue } from './data/dialogues';
import { DOORS, NODES, SPOTS, ZONES, inBox, zonesAt, type Box } from './world/layout';
import { findPath, nearestNode } from './world/nav';
import { PrisonWorld } from './world/builder';
import { HumanoidRig } from './actors/humanoid';
import { NpcActor } from './actors/npc';
import { InputController, ThirdPersonCamera } from './core/controls';
import { SoundEngine } from './core/audio';
import { speechEngine } from './core/speech';
import { CutsceneController } from './core/cutscene';
import { UIManager, type PromptTarget, type GuideTarget } from './ui/manager';
import { fetchLiveRelease } from './version';

/** Keep the player model tied to the saved appearance preset across reloads. */
function playerModelSkin(preset?: number): string {
  const skins = ['g', 'f', 'd', 'e'];
  const index = Number.isFinite(preset) ? Math.abs(Math.trunc(preset!)) % skins.length : 0;
  return skins[index];
}

const AREA_EXIT_MAP: Record<string, { doorId: string; name: string; safeNode: [number, number]; insideBox: Box }> = {
  workshop: {
    doorId: 'door_workshop',
    name: 'Xưởng lao động',
    safeNode: [10.5, -2.75],
    insideBox: { x1: 12, z1: -12, x2: 28, z2: 8 },
  },
  mess: {
    doorId: 'door_mess',
    name: 'Nhà ăn',
    safeNode: [6.25, -16.5],
    insideBox: { x1: -2, z1: -32, x2: 16, z2: -18 },
  },
  medical: {
    doorId: 'door_medical',
    name: 'Phòng y tế',
    safeNode: [22.25, -16.5],
    insideBox: { x1: 18, z1: -32, x2: 28, z2: -18 },
  },
  classroom: {
    doorId: 'door_classroom',
    name: 'Lớp học nghề',
    safeNode: [-20.75, 8.5],
    insideBox: { x1: -28, z1: 10, x2: -15, z2: 20 },
  },
  visitation: {
    doorId: 'door_visitation',
    name: 'Phòng thăm gặp',
    safeNode: [-18.5, -10.25],
    insideBox: { x1: -28, z1: -15, x2: -20, z2: -4 },
  },
  discipline: {
    doorId: 'door_discipline',
    name: 'Khu kỷ luật',
    safeNode: [10, 8.5],
    insideBox: { x1: 6, z1: 10, x2: 14, z2: 20 },
  },
};

class App {
  renderer!: THREE.WebGLRenderer;
  world!: PrisonWorld;
  tpCam = new ThirdPersonCamera();
  input = new InputController();
  sfx = new SoundEngine();
  cutscene!: CutsceneController;
  saves = new SaveManager(typeof localStorage !== 'undefined' ? localStorage : null);
  g!: GameLogic;
  ui!: UIManager;
  playerRig!: HumanoidRig;
  npcs: Record<NpcId, NpcActor> = {} as Record<NpcId, NpcActor>;
  resting = false;
  tempUnlockedDoors = new Set<string>();
  private isEscorting = false;
  private escortTimer = 0;
  private escortTargetArea: string | null = null;
  private lastWarningMinute = -1;
  private autoWalking = false;
  private autoWalkTargetName = '';
  private autoWalkWaypoints: [number, number][] = [];
  private autoWalkIndex = 0;
  private autoWalkIsLocked = false;
  private restrictedEpisode = 0;
  private wasInStorage = false;
  private currentPrompt: PromptTarget | null = null;
  private trackedQuestId: string | null = null;

  init() {
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
    const uiRoot = document.getElementById('ui') as HTMLElement;

    const loaded = this.saves.load();
    this.g = new GameLogic(loaded ?? createInitialState());
    if (this.g.qStatus('nhap_trai') === 'locked') this.g.startQuest('nhap_trai');
    this.checkStartupLockout();

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    // Cinematic grading; quality still controls pixel density and shadow cost.
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.17;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.world = new PrisonWorld();
    this.world.setQuality(this.g.s.settings.quality, this.renderer);
    this.sfx.volume = this.g.s.settings.volume;
    this.cutscene = new CutsceneController(this.tpCam.cam, this.sfx);

    // Nhân vật người chơi theo profile khởi tạo
    const prof = this.g.s.profile;
    this.playerRig = new HumanoidRig({
      uniform: 'inmate',
      skin: prof.skin ?? 0xe2b48d,
      hair: prof.hair ?? 0x18181b,
      hairStyle: prof.hairStyle ?? 'short',
      accent: 0x22c55e,
      height: 1.0,
      build: 1.0,
    }, undefined, playerModelSkin(prof.preset));
    this.world.scene.add(this.playerRig.root);
    this.updateCameraMode();

    // Các NPC
    for (const id of Object.keys(NPCS) as NpcId[]) {
      const a = new NpcActor(id);
      a.snapToSchedule(this.g.s.minute);
      this.npcs[id] = a;
      this.world.scene.add(a.rig.root);
    }

    this.world.collision.dynamic = (actorX?: number, actorZ?: number) =>
      this.world.updateDoors((area) => this.isDoorPassable(area), actorX, actorZ);
    speechEngine.init();

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
        this.updateCameraMode();
      },
      onUpdateAppearance: (p) => {
        this.g.s.profile.skin = p.skin;
        this.g.s.profile.hair = p.hair;
        this.g.s.profile.hairStyle = p.hairStyle;
        this.g.s.profile.preset = p.preset;
        this.rebuildPlayerRig(p);
        this.saves.save(this.g.s);
      },
      onRestoreBackup: () => {
        const b = this.saves.loadBackup();
        if (b) {
          this.g = new GameLogic(b);
          this.rebuildPlayerRig(this.g.s.profile);
          this.saves.save(this.g.s);
          this.ui.toast('Đã phục hồi bản sao lưu thành công.', 'good');
          window.location.reload();
        } else {
          this.ui.toast('Không tìm thấy bản sao lưu hợp lệ.', 'warn');
        }
      },
      onAutoWalk: (tx, tz, isLocked, safeX, safeZ, targetName) => {
        this.startAutoWalk(tx, tz, isLocked, safeX, safeZ, targetName);
      },
      onCancelAutoWalk: () => {
        this.cancelAutoWalk(true);
      },
      onTrackQuest: (qid) => {
        this.trackedQuestId = qid;
        this.currentPrompt = this.findPrompt();
        this.ui.updateHUD(this.currentPrompt, this.computeGuide());
      },
      getTrackedQuest: () => this.trackedQuestId,
      getQuestGuide: (qid) => {
        const liveNpcs = Object.fromEntries(Object.entries(this.npcs).map(([id, npc]) => [id, { x: npc.x, z: npc.z }]));
        return resolveQuestDestination(qid, this.g.s, liveNpcs);
      },
    });

    fetchLiveRelease().then((rel) => this.ui.updateReleaseInfo(rel));

    this.bindEvents();
    this.input.bind(canvas, this.ui.joyZone, this.ui.joyKnob);
    this.input.onInteract = () => {
      if (!this.ui.paused && !this.cutscene.isActive()) this.currentPrompt?.run();
    };
    this.input.onKeyCommand = (code) => this.handleKey(code);

    this.ui.btnInteract.addEventListener('click', () => {
      if (!this.ui.paused && !this.cutscene.isActive()) this.currentPrompt?.run();
    });
    // Sprint remains automatic at high joystick tilt (or Shift on desktop).
    // No separate mobile sprint button is needed.

    const onResize = () => {
      let w = Math.max(window.innerWidth, window.visualViewport?.width || 0, document.documentElement.clientWidth || 0);
      let h = Math.max(window.innerHeight, window.visualViewport?.height || 0, document.documentElement.clientHeight || 0);
      // Xử lý race condition khi xoay màn hình trên iOS Safari:
      // Nếu thiết bị đang ở landscape nhưng innerWidth vẫn giữ kích thước portrait cũ thì hoán đổi.
      const isLandscape = (typeof window.orientation === 'number' ? Math.abs(window.orientation) === 90 : false) ||
        window.matchMedia?.('(orientation: landscape)')?.matches ||
        (window.innerWidth > window.innerHeight);
      if (isLandscape && w < h) {
        const tmp = w; w = h; h = tmp;
      }
      this.world.setQuality(this.g.s.settings.quality, this.renderer);
      this.renderer.setSize(w, h, false);
      canvas.style.removeProperty('width');
      canvas.style.removeProperty('height');
      this.tpCam.cam.aspect = w / h;
      this.tpCam.cam.updateProjectionMatrix();
      this.input.reset();
      this.ui.checkOrientation();
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', () => {
      onResize();
      setTimeout(onResize, 120);
      setTimeout(onResize, 280);
      setTimeout(onResize, 500);
    });
    window.visualViewport?.addEventListener('resize', onResize);
    onResize();

    // Cinematic entry menu is a UI gate, not a new save mechanic.
    // Never reset an existing save without a separate explicit confirmation.
    this.ui.paused = true;
    showLandingPage({
      canContinue: Boolean(loaded?.profile?.introSeen),
      name: this.g.s.profile.name,
      day: this.g.s.day,
      remainingDays: this.g.s.sentence.remaining,
      onStart: () => {
        this.ui.showCharacterCreation((createdProfile) => {
          this.g.applyProfile(createdProfile);
          this.rebuildPlayerRig(createdProfile);
          const choice = createdProfile.flashbackChoice || 'keep_doc';
          this.g.applyFlashbackChoice(choice);
          this.g.s.profile.introSeen = true;
          if (this.g.qStatus('nhap_trai') === 'locked') {
            this.g.startQuest('nhap_trai');
          }
          this.saves.save(this.g.s);
          this.ui.paused = false;
          this.ui.checkOrientation();
        });
      },
      onContinue: () => {
        this.ui.paused = false;
        this.ui.checkOrientation();
        if (this.g.s.flags?.sentence_extended_for_reform) {
          const days = this.g.s.flags.sentence_extended_for_reform;
          delete this.g.s.flags.sentence_extended_for_reform;
          this.saves.save(this.g.s);
          this.ui.showNotice(
            '🏛️ THÔNG BÁO TỪ GIÁM THỊ TRẠI GIAM',
            `Thời hạn chấp hành án của bạn được điều chỉnh gia hạn (+${days} ngày) nhằm đảm bảo bạn có đủ thời gian hoàn thành đầy đủ chương trình giáo dục cải tạo, học nghề và nộp hồ sơ giải trình minh oan vai trò trong vụ án Kho số 7 trước ngày tự do.`
          );
        }
      },
      onReset: () => {
        this.saves.clear();
        // The beforeunload save handler must not rewrite the old progress.
        this.g = new GameLogic(createInitialState());
        this.g.startQuest('nhap_trai');
        this.saves.save(this.g.s);
        window.location.reload();
      },
    });

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
    let lastW = window.innerWidth;
    let lastH = window.innerHeight;
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (Math.abs(window.innerWidth - lastW) > 1 || Math.abs(window.innerHeight - lastH) > 1) {
        lastW = window.innerWidth;
        lastH = window.innerHeight;
        onResize();
      }
      this.step(dt);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  private bindEvents() {
    this.g.on('notice', (t: string, k: string) => this.ui.toast(t, k));
    this.g.on('save', () => this.saves.save(this.g.s));
    this.g.on('violation', (v) => this.ui.showViolationBanner(v));
    this.g.on('sideQuestUnlocked', () => this.ui.highlightQuestBar());
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

  rebuildPlayerRig(look: { skin?: number; hair?: number; hairStyle?: 'short' | 'buzz' | 'bald'; preset?: number }) {
    if (this.playerRig) {
      this.playerRig.dispose(); // old async GLB load must not attach to a discarded rig
      this.world.scene.remove(this.playerRig.root);
    }
    this.playerRig = new HumanoidRig({
      uniform: 'inmate',
      skin: look.skin ?? 0xe2b48d,
      hair: look.hair ?? 0x18181b,
      hairStyle: look.hairStyle ?? 'short',
      accent: 0x22c55e,
      height: 1.0,
      build: 1.0,
    }, undefined, playerModelSkin(look.preset));
    this.world.scene.add(this.playerRig.root);
    const p = this.g.s.player;
    this.playerRig.root.position.set(p.x, 0, p.z);
    this.playerRig.root.rotation.y = p.rot;
    this.updateCameraMode();
  }

  private updateCameraMode() {
    const isFirstPerson = (this.g.s.settings.cameraMode ?? 'third') === 'first';
    if (this.playerRig) {
      this.playerRig.root.visible = !isFirstPerson;
      if (this.playerRig.labelSprite) {
        this.playerRig.labelSprite.visible = !isFirstPerson;
      }
    }
    this.input.cameraMode = isFirstPerson ? 'first' : 'third';
  }

  isDoorPassable(area: string): boolean {
    return this.g.isOpen(area) || this.tempUnlockedDoors.has(area);
  }

  private checkStartupLockout() {
    const p = this.g.s.player;
    for (const [area, info] of Object.entries(AREA_EXIT_MAP)) {
      if (!this.g.isOpen(area) && inBox(info.insideBox, p.x, p.z)) {
        p.x = info.safeNode[0];
        p.z = info.safeNode[1];
        this.ui.toast(`Đã đưa bạn ra ngoài sân trại do ${info.name} hiện đang đóng cửa theo lịch.`, 'info');
        break;
      }
    }
  }

  private startAutoWalk(tx: number, tz: number, isLocked?: boolean, safeX?: number, safeZ?: number, targetName?: string) {
    if (this.isEscorting) return;
    const destX = isLocked && safeX !== undefined ? safeX : tx;
    const destZ = isLocked && safeZ !== undefined ? safeZ : tz;
    const p = this.g.s.player;

    const pNode = nearestNode(p.x, p.z);
    const tNode = nearestNode(destX, destZ);
    const path = findPath(pNode, tNode);
    if (!path || path.length === 0) {
      this.ui.toast('Không tìm được đường đi hợp lệ đến mục tiêu.', 'warn');
      return;
    }

    const waypoints: [number, number][] = [];
    for (const nid of path) {
      waypoints.push(NODES[nid]);
    }
    waypoints.push([destX, destZ]);

    this.autoWalking = true;
    this.autoWalkWaypoints = waypoints;
    this.autoWalkIndex = 0;
    this.autoWalkIsLocked = !!isLocked;
    this.autoWalkTargetName = targetName || 'Mục tiêu';
    this.ui.setAutoWalkState(true, this.autoWalkTargetName);
    this.resting = false;
  }

  private cancelAutoWalk(notify = false) {
    if (!this.autoWalking) return;
    this.autoWalking = false;
    this.autoWalkWaypoints = [];
    this.autoWalkIndex = 0;
    this.ui.setAutoWalkState(false);
    if (notify) {
      this.ui.toast('Đã dừng chế độ tự đi.', 'info');
    }
  }

  private updateAutoWalk(dt: number) {
    if (!this.autoWalking) return;
    const p = this.g.s.player;
    const wp = this.autoWalkWaypoints[this.autoWalkIndex];
    if (!wp) {
      this.cancelAutoWalk(false);
      return;
    }

    const dx = wp[0] - p.x;
    const dz = wp[1] - p.z;
    const d = Math.hypot(dx, dz);

    const isLast = this.autoWalkIndex >= this.autoWalkWaypoints.length - 1;
    const arriveDist = isLast ? 1.6 : 0.8;

    if (d <= arriveDist) {
      if (isLast) {
        this.cancelAutoWalk(false);
        this.sfx.good();
        if (this.autoWalkIsLocked) {
          this.ui.toast(`Đã đến điểm chờ an toàn ngoài cửa. Khu vực hiện đang đóng.`, 'info');
        } else {
          this.ui.toast(`Đã đến gần ${this.autoWalkTargetName}.`, 'good');
        }
        return;
      }
      this.autoWalkIndex++;
      return;
    }

    const speed = 3.7;
    const dirX = dx / d;
    const dirZ = dz / d;
    const [nx, nz] = this.world.collision.move(p.x, p.z, dirX * speed * dt, dirZ * speed * dt, 0.36);
    p.x = nx;
    p.z = nz;
    p.rot = Math.atan2(dirX, dirZ);
    this.sfx.step(dt, false);
    this.playerRig.pose = 'walk';
    this.playerRig.update(dt, speed);
    this.playerRig.root.position.set(p.x, 0, p.z);
    this.playerRig.root.rotation.y = p.rot;
  }

  private checkAreaLockoutsAndWarnings() {
    if (this.isEscorting) return;
    const curMin = this.g.s.minute;
    const p = this.g.s.player;

    // Cảnh báo trước 15 phút khi mọi khu vực có giờ sắp đóng cửa
    if (curMin !== this.lastWarningMinute) {
      for (const [area, rule] of Object.entries(ACCESS)) {
        const openNow = this.g.isOpen(area);
        const openIn15 = this.g.isOpenAt(area, curMin + 15);
        if (openNow && !openIn15) {
          const inArea = zonesAt(p.x, p.z).includes(area) || (area === 'cellblock' && zonesAt(p.x, p.z).includes('cell3'));
          if (inArea) {
            this.ui.toast(`⚠️ ${rule.label}: Sắp đóng cửa, vui lòng rời khu vực.`, 'warn');
            this.lastWarningMinute = curMin;
            break;
          }
        }
      }
    }

    // Nếu khu vực đã đóng cửa mà người chơi vẫn còn bên trong -> Quản giáo Tùng đến áp giải ra ngoài
    for (const [area, info] of Object.entries(AREA_EXIT_MAP)) {
      if (!this.g.isOpen(area) && inBox(info.insideBox, p.x, p.z)) {
        this.startEscort(area, info);
        break;
      }
    }
  }

  private startEscort(area: string, info: typeof AREA_EXIT_MAP[string]) {
    this.cancelAutoWalk(false);
    this.isEscorting = true;
    this.escortTimer = 0;
    this.escortTargetArea = area;
    this.tempUnlockedDoors.add(area);

    // Di chuyển cán bộ Tùng đến ngay gần người chơi
    const tung = this.npcs.tung;
    tung.moveTo(this.g.s.player.x + 1.2, this.g.s.player.z, this.g.s.player.rot);
    tung.state = 'walk';

    this.sfx.bell();
    this.ui.toast(`👮 Cán bộ Tùng: Hết giờ quy định rồi, ${info.name} đang đóng cửa! Theo tôi ra sân trại ngay!`, 'bad');
  }

  private updateEscort(dt: number) {
    if (!this.isEscorting || !this.escortTargetArea) return;
    this.escortTimer += dt;
    const info = AREA_EXIT_MAP[this.escortTargetArea];
    if (!info) {
      this.tempUnlockedDoors.delete(this.escortTargetArea);
      this.isEscorting = false;
      this.escortTargetArea = null;
      this.input.reset();
      return;
    }

    const p = this.g.s.player;
    const [destX, destZ] = info.safeNode;
    const dx = destX - p.x;
    const dz = destZ - p.z;
    const d = Math.hypot(dx, dz);

    // Đi cùng cán bộ Tùng ra ngoài điểm an toàn, fallback timeout 5.2s
    if (d < 1.0 || this.escortTimer >= 5.2) {
      p.x = destX;
      p.z = destZ;
      this.tempUnlockedDoors.delete(this.escortTargetArea);
      this.isEscorting = false;
      this.escortTargetArea = null;
      this.input.reset();
      this.playerRig.root.position.set(p.x, 0, p.z);
      const tung = this.npcs.tung;
      tung.snapToSchedule(this.g.s.minute);

      // Phạt nhẹ 1 lần duy nhất, không ngất
      this.g.recordViolation('disobedience', `escort-${this.g.s.day}-${this.g.s.minute}`, `Không chấp hành hiệu lệnh rời ${info.name} đúng giờ quy định.`);
      this.ui.toast(`Đã áp giải ra sân trại an toàn. Cửa ${info.name} đã được khóa lại.`, 'info');

      return;
    }

    const speed = 3.6;
    const dirX = dx / d;
    const dirZ = dz / d;
    p.x += dirX * speed * dt;
    p.z += dirZ * speed * dt;
    p.rot = Math.atan2(dirX, dirZ);

    const tung = this.npcs.tung;
    tung.moveTo(p.x + dirZ * 1.0, p.z - dirX * 1.0, p.rot);
    tung.rig.pose = 'walk';
    tung.rig.update(dt, speed);

    this.playerRig.pose = 'walk';
    this.playerRig.update(dt, speed);
    this.playerRig.root.position.set(p.x, 0, p.z);
    this.playerRig.root.rotation.y = p.rot;
  }

  private step(dt: number) {
    if (this.cutscene.isActive()) {
      speechEngine.stop();
      for (const a of Object.values(this.npcs)) { if (a.bubbleTimer > 0) a.clearBark(); }
      this.cutscene.update(dt);
      this.renderer.render(this.world.scene, this.tpCam.cam);
      return;
    }

    if (this.ui.hasOpenModal()) {
      speechEngine.stop();
      for (const a of Object.values(this.npcs)) { if (a.bubbleTimer > 0) a.clearBark(); }
    }

    const p = this.g.s.player;

    if (!this.ui.paused) {
      const mv = this.input.moveVector();
      const moving = Math.hypot(mv.fwd, mv.right) > 0.05;
      if (moving) {
        this.resting = false;
        if (this.autoWalking) this.cancelAutoWalk(false);
      }

      if (this.isEscorting) {
        this.updateEscort(dt);
      } else if (this.autoWalking) {
        this.updateAutoWalk(dt);
      } else {
        const canSprint = mv.sprint && this.g.s.stats.stamina > 5;
        const speed = moving ? (canSprint ? 5.8 : 3.7) : 0;

        const camMode = this.g.s.settings.cameraMode ?? 'third';
        const isFirstPerson = camMode === 'first';

        if (moving) {
          const sin = Math.sin(this.input.yaw);
          const cos = Math.cos(this.input.yaw);
          const wx = -sin * mv.fwd + cos * mv.right;
          const wz = -cos * mv.fwd - sin * mv.right;
          const [nx, nz] = this.world.collision.move(p.x, p.z, wx * speed * dt, wz * speed * dt, 0.36);
          p.x = nx;
          p.z = nz;
          p.rot = isFirstPerson
            ? Math.atan2(-Math.sin(this.input.yaw), -Math.cos(this.input.yaw))
            : Math.atan2(wx, wz);
          this.sfx.step(dt, canSprint);
        } else if (isFirstPerson) {
          p.rot = Math.atan2(-Math.sin(this.input.yaw), -Math.cos(this.input.yaw));
        }

        this.playerRig.pose = this.resting ? 'sit' : moving ? 'walk' : 'stand';
        this.playerRig.update(dt, speed);
        this.playerRig.root.position.set(p.x, 0, p.z);
        this.playerRig.root.rotation.y = p.rot;
      }

      for (const id of Object.keys(this.npcs) as NpcId[]) {
        const a = this.npcs[id];
        if (id === 'tung' && this.isEscorting) {
          // Tùng đã được cập nhật qua updateEscort
        } else {
          a.update(dt, this.g.s.minute, this.world.collision);
        }
        if (a.rig.labelSprite) {
          const d = Math.hypot(a.x - p.x, a.z - p.z);
          a.rig.labelSprite.visible = d < 8.0;
        }

        // 8b: NPC idle chatter
        const dPlayer = Math.hypot(a.x - p.x, a.z - p.z);
        if (dPlayer <= 12.0 && a.state !== 'talk' && !this.cutscene.isActive() && !this.ui.hasOpenModal() && (this.g.s.minute < 390 || this.g.s.minute >= 420)) {
          a.barkTimer -= dt;
          if (a.barkTimer <= 0) {
            a.barkTimer = 25 + Math.random() * 20;
            let barks = a.def.barks ?? [];
            if (a.def.id === 'lam' && this.g.qStatus('mon_no') === 'active') {
              barks = [
                'Bảo thằng Huy lo liệu cho sớm, kiên nhẫn của tao có hạn.',
                'Tiền bạc sòng phẳng thì mới dễ sống ở đây.',
                'Hẹn ngày nào thì trả ngày đó, đừng để tao nhắc lại.',
                'Món nợ nào rồi cũng có lúc phải thanh toán.',
              ];
            }
            if (barks.length > 0) {
              const line = barks[Math.floor(Math.random() * barks.length)];
              a.sayBark(line, 4.0);
              if (this.g.s.settings.npcVoice !== false && (this.g.s.settings.volume ?? 1) > 0) {
                speechEngine.speak(line, this.g.s.settings.volume ?? 0.7);
              }
            }
          }
        }
      }

      // 8c: Guard random discipline/interaction on NPC inmates
      if (!this.cutscene.isActive() && !this.ui.hasOpenModal() && (this.g.s.minute < 390 || this.g.s.minute >= 420)) {
        for (const guardId of ['lan', 'tung'] as NpcId[]) {
          const guard = this.npcs[guardId];
          if (!guard || guard.state === 'talk') continue;
          guard.guardDisciplineTimer -= dt;
          if (guard.guardDisciplineTimer <= 0) {
            guard.guardDisciplineTimer = 40 + Math.random() * 30; // 40-70s
            const inmateCandidates: NpcId[] = ['tu', 'son', 'khai', 'huy', 'bay', 'lam'];
            const nearby = inmateCandidates
              .map((cid) => this.npcs[cid])
              .filter((inmate) => inmate && inmate.state !== 'talk' && inmate.yieldTimer <= 0 && Math.hypot(inmate.x - guard.x, inmate.z - guard.z) <= 4.0);
            if (nearby.length > 0) {
              const target = nearby[Math.floor(Math.random() * nearby.length)];
              const isScold = Math.random() < 0.5;
              if (isScold) {
                const scolds = [
                  'Đi đứng cho ngay ngắn, không nhìn ngó lung tung!',
                  'Nghiêm túc chấp hành nội quy trại!',
                  'Không được tụ tập thì thầm, tản ra mau!',
                  'Làm việc cho tử tế, đừng có lơ là!',
                ];
                const scold = scolds[Math.floor(Math.random() * scolds.length)];
                guard.sayBark(scold, 3.0);
                if (this.g.s.settings.npcVoice !== false && (this.g.s.settings.volume ?? 1) > 0) {
                  speechEngine.speak(scold, this.g.s.settings.volume ?? 0.7);
                }
                target.faceToward(guard.x, guard.z);
                target.yield(3.0);
              } else {
                guard.faceToward(target.x, target.z);
                guard.rig.pose = 'work';
                guard.yield(2.5);
                target.faceToward(guard.x, guard.z);
                target.rig.pose = 'sit';
                target.yield(3.0);
                target.sayBark('...', 3.0);
              }
            }
          }
        }
      }

      // Soft separation: Player vs NPC & NPC vs NPC (khoảng cách tối thiểu ~0.52m)
      const allNpcs = Object.values(this.npcs);
      const MIN_DIST = 0.52;
      for (let i = 0; i < allNpcs.length; i++) {
        const n1 = allNpcs[i];
        for (let j = i + 1; j < allNpcs.length; j++) {
          const n2 = allNpcs[j];
          let dx = n1.x - n2.x;
          let dz = n1.z - n2.z;
          let d = Math.hypot(dx, dz);
          if (d < MIN_DIST) {
            if (d < 1e-4) { dx = 0.01; dz = 0; d = 0.01; }
            const overlap = MIN_DIST - d;
            const push = (overlap * 0.5) / d;
            const nx1 = n1.x + dx * push;
            const nz1 = n1.z + dz * push;
            const nx2 = n2.x - dx * push;
            const nz2 = n2.z - dz * push;

            const m1 = n1.isMoving();
            const m2 = n2.isMoving();
            if (m1 && m2) {
              // Cả hai đang di chuyển: bên xa đích hơn dừng chờ tối đa 3 giây cho bên kia qua
              const d1 = n1.distToTarget();
              const d2 = n2.distToTarget();
              if (d1 >= d2) {
                n1.yield(3.0);
                n1.noteBlocked(dt, this.world.collision);
              } else {
                n2.yield(3.0);
                n2.noteBlocked(dt, this.world.collision);
              }
            } else if (m1 && !m2) {
              n1.noteBlocked(dt, this.world.collision);
            } else if (!m1 && m2) {
              n2.noteBlocked(dt, this.world.collision);
            }

            if (this.world.collision.canPlace(nx1, nz1, 0.25)) n1.moveTo(nx1, nz1, n1.rot);
            if (this.world.collision.canPlace(nx2, nz2, 0.25)) n2.moveTo(nx2, nz2, n2.rot);
          }
        }
      }
      for (const n of allNpcs) {
        let dx = p.x - n.x;
        let dz = p.z - n.z;
        let d = Math.hypot(dx, dz);
        if (d < MIN_DIST) {
          if (d < 1e-4) { dx = 0.01; dz = 0; d = 0.01; }
          const overlap = MIN_DIST - d;
          const push = (overlap * 0.5) / d;
          const pxNew = p.x + dx * push;
          const pzNew = p.z + dz * push;
          const nxNew = n.x - dx * push;
          const nzNew = n.z - dz * push;

          // Người chơi luôn được ưu tiên: NPC nhường người chơi
          n.yield(3.0);
          n.noteBlocked(dt, this.world.collision);

          if (this.world.collision.canPlace(nxNew, nzNew, 0.25)) {
            n.moveTo(nxNew, nzNew, n.rot);
          }
          if (this.world.collision.canPlace(pxNew, pzNew, 0.32)) {
            p.x = pxNew;
            p.z = pzNew;
            this.playerRig.root.position.set(p.x, 0, p.z);
          }
        }
      }

      this.g.tick(dt, this.tickCtx(moving || this.autoWalking, moving && mv.sprint));
      this.checkRestrictedZone();
      this.checkAreaLockoutsAndWarnings();
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
      this.g.s.day,
      p.x,
      p.z,
    );

    const camMode = this.g.s.settings.cameraMode ?? 'third';
    this.updateCameraMode();

    this.tpCam.update(p.x, p.z, this.input.yaw, this.input.pitch, this.input.distance, this.world.cameraObstacles, camMode);

    // Kiểm tra NPC chắn giữa camera và người chơi để làm mờ (opacity ~0.25)
    if (camMode === 'third') {
      const camPos = this.tpCam.cam.position;
      const playerPos = new THREE.Vector3(p.x, 1.25, p.z);
      const camToP = playerPos.clone().sub(camPos);
      const rayDist = camToP.length();
      const rayDir = camToP.clone().normalize();
      for (const npc of Object.values(this.npcs)) {
        const npcPos = new THREE.Vector3(npc.x, 1.0, npc.z);
        const toNpc = npcPos.clone().sub(camPos);
        const proj = toNpc.dot(rayDir);
        if (proj > 0.4 && proj < rayDist - 0.35) {
          const perp = toNpc.sub(rayDir.clone().multiplyScalar(proj)).length();
          if (perp < 0.65) {
            npc.rig.setOpacity(0.25);
            continue;
          }
        }
        npc.rig.setOpacity(1.0);
      }
    }

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
        if (g.qStatus('loi_hua_chu_bay') === 'active' &&
            g.qObj('loi_hua_chu_bay', 'nghe_loi_hua') &&
            !g.qObj('loi_hua_chu_bay', 'danh_bong_hop')) {
          return { id, label: `${label}: Đánh bóng hộp gỗ giúp Chú Bảy`, run: () => {
            g.completeObjective('loi_hua_chu_bay', 'danh_bong_hop');
            this.ui.toast('Đã hoàn thiện hộp gỗ. Hãy gặp Chú Bảy để hứa gửi quà cho con gái chú.', 'good');
          } };
        }
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
            const reason = g.objectiveBlockReason('mon_no', 'lay_khoan');
            if (reason) { this.ui.toast(reason, 'warn'); return; }
            const p = g.s.player;
            const seen = this.world.seenByStorageCam(p.x, p.z) || this.npcs.tung.canSee(p.x, p.z, this.world.collision);
            if (seen) {
              g.recordViolation('theft', `caught-d${g.s.day}`, 'Camera kho / Cán bộ Tùng bắt quả tang bạn lấy hộp mũi khoan trên kệ.');
              // VIỆC 6: Bỏ đặt canteenBanUntil khi bắt quả tang
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
      case 'clue_crate':
        if (g.qStatus('manh_moi_kho_7') !== 'active' ||
            g.qObj('manh_moi_kho_7', 'lay_manh_giay')) return null;
        return {
          id,
          label: !g.qObj('manh_moi_kho_7', 'kiem_tra_tem')
            ? 'Kiện KHO-07: Kiểm tra tem niêm phong'
            : 'Kiện KHO-07: Thu thập mảnh vận đơn',
          run: () => {
            const step = !g.qObj('manh_moi_kho_7', 'kiem_tra_tem') ? 'kiem_tra_tem' : 'lay_manh_giay';
            const reason = g.objectiveBlockReason('manh_moi_kho_7', step);
            if (reason) { this.ui.toast(reason, 'warn'); return; }
            g.completeObjective('manh_moi_kho_7', step);
          },
        };
      case 'class_fan':
        if (g.qStatus('sua_quat_phong_hoc') !== 'active' ||
            g.qObj('sua_quat_phong_hoc', 'thay_vong_bi')) return null;
        return {
          id,
          label: !g.qObj('sua_quat_phong_hoc', 'kiem_tra_quat')
            ? 'Quạt lớp: Kiểm tra nguyên nhân hỏng'
            : 'Quạt lớp: Thay vòng bi và siết ốc',
          run: () => {
            const step = !g.qObj('sua_quat_phong_hoc', 'kiem_tra_quat') ? 'kiem_tra_quat' : 'thay_vong_bi';
            g.completeObjective('sua_quat_phong_hoc', step);
          },
        };
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
        if (g.qStatus('la_thu_que_nha') === 'active' && !g.qObj('la_thu_que_nha', 'nhan_thu')) {
          return { id, label: 'Bàn cán bộ: Nhận thư từ gia đình', run: () => {
            g.completeObjective('la_thu_que_nha', 'nhan_thu');
            g.giveItem('thu_chi_mai');
            this.ui.toast('Đã nhận thư. Hãy hồi âm cho gia đình khi gặp Chị Mai.', 'good');
          } };
        }
        if (g.qStatus('ho_so_giai_trinh') === 'active' &&
            !g.qObj('ho_so_giai_trinh', 'tong_hop_chung_cu')) {
          return { id, label: 'Bàn hồ sơ: Tổng hợp chứng cứ Kho 7', run: () => {
            const reason = g.objectiveBlockReason('ho_so_giai_trinh', 'tong_hop_chung_cu');
            if (reason) { this.ui.toast(reason, 'warn'); return; }
            if (!g.has('manh_van_don_kho_7')) {
              this.ui.toast('Cần mảnh vận đơn Kho số 7 để tổng hợp chứng cứ trước.', 'warn');
              return;
            }
            g.completeObjective('ho_so_giai_trinh', 'tong_hop_chung_cu');
            this.ui.toast('Đã tổng hợp hồ sơ. Hãy gặp Quản giáo Lan nộp chứng cứ.', 'good');
          } };
        }
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
            const reason = this.g.objectiveBlockReason('nghi_an_thuoc', 'nhat_thuoc');
            if (reason) { this.ui.toast(reason, 'warn'); return; }
            this.g.completeObjective('nghi_an_thuoc', 'nhat_thuoc');
            this.g.giveItem('chai_thuoc_hen');
            this.ui.toast('Đã nhặt lọ thuốc hen của Chú Bảy! Hãy mang về phòng y tế đưa cho Y sĩ An.', 'good');
          },
        };
      }
    }
    return null;
  }

  /** Điều hướng thông minh qua cửa & hành lang bằng đồ thị A* pathfinding (không trỏ xuyên tường). */
  private guideTo(
    label: string,
    tx: number,
    tz: number,
    isDuty: boolean,
    details?: {
      questId?: string;
      questTitle?: string;
      stepDesc?: string;
      progress?: string;
      targetName?: string;
      openCondition?: string;
      isLocked?: boolean;
      safeX?: number;
      safeZ?: number;
    },
  ): GuideTarget {
    const p = this.g.s.player;
    const directD = Math.hypot(tx - p.x, tz - p.z);
    const pZones = zonesAt(p.x, p.z);
    const tZones = zonesAt(tx, tz);
    const sameZone = pZones.length > 0 && tZones.length > 0 && pZones.some((z) => tZones.includes(z));

    const route: [number, number][] = [];

    // Nếu rất gần hoặc ở cùng khu vực mở: trỏ trực tiếp
    if (directD < 2.0 || (directD < 3.8 && sameZone)) {
      const dx = tx - p.x;
      const dz = tz - p.z;
      route.push([tx, tz]);
      return {
        label,
        dist: directD,
        angle: Math.atan2(dx, -dz) - this.input.yaw,
        isDuty,
        tx,
        tz,
        route,
        ...details,
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
    for (let i = startIdx; i < path.length; i++) {
      const pt = NODES[path[i]];
      route.push([pt[0], pt[1]]);
      if (i < path.length - 1) {
        const nextPt = NODES[path[i + 1]];
        totalDist += Math.hypot(pt[0] - nextPt[0], pt[1] - nextPt[1]);
      }
    }
    route.push([tx, tz]);
    const [lastX, lastZ] = NODES[path[path.length - 1]];
    totalDist += Math.hypot(tx - lastX, tz - lastZ);

    return {
      label,
      dist: totalDist,
      angle: Math.atan2(targetDx, -targetDz) - this.input.yaw,
      isDuty,
      tx,
      tz,
      route,
      ...details,
    };
  }

  /** Tìm mục tiêu tiếp theo để vẽ mũi tên chỉ đường trên HUD & Minimap 2D (phân biệt nghĩa vụ vs nhiệm vụ). */
  private computeGuide(): GuideTarget | null {
    const g = this.g;
    const p = g.s.player;
    const curBlock = blockAt(g.s.minute);

    // 1. ƯU TIÊN NGHĨA VỤ LỊCH TRÌNH BẮT BUỘC (chỉ hiện 1 mục tiêu duy nhất)
    if (curBlock.id === 'rollcall' && g.s.daily.rollcall === 'pending') {
      return this.guideTo('Ô điểm danh sáng sân trại', -9, -9, true, {
        questTitle: 'Điểm danh sáng',
        stepDesc: 'Có mặt tại ô vàng ngoài sân trại trước 06:45 để cán bộ Tùng điểm danh.',
        progress: 'Chờ điểm danh',
        targetName: 'Ô điểm danh',
        safeX: -9,
        safeZ: -9,
      });
    }

    if (curBlock.id === 'work') {
      if (!g.s.daily.workClockedIn) {
        const openWs = g.isOpen('workshop');
        return this.guideTo('Bảng chấm công xưởng (trước 08:30)', 13.1, -6, true, {
          questTitle: 'Lao động ca sáng',
          stepDesc: 'Đến xưởng lao động bấm bảng chấm công trước 08:30.',
          progress: 'Chưa bấm thẻ',
          targetName: 'Bảng chấm công',
          safeX: 10.5,
          safeZ: -2.75,
          isLocked: !openWs,
          openCondition: 'Mở cửa 08:00–11:30',
        });
      }
      if (g.s.daily.workUnits === 0) {
        const openWs = g.isOpen('workshop');
        return this.guideTo('Bàn xưởng: hoàn thành ca lao động sáng', 16, 0.15, true, {
          questTitle: 'Lao động ca sáng',
          stepDesc: 'Lắp ráp đủ 3 ổ cắm điện tại bàn xưởng.',
          progress: `${g.s.daily.workUnits}/3 ổ cắm`,
          targetName: 'Bàn xưởng',
          safeX: 10.5,
          safeZ: -2.75,
          isLocked: !openWs,
          openCondition: 'Mở cửa 08:00–11:30',
        });
      }
    }

    if (curBlock.id === 'curfew') {
      const inCell = zonesAt(p.x, p.z).includes('cellblock');
      if (!inCell) {
        return this.guideTo('Về buồng giam 3 điểm danh tối & ngủ', -14.9, -28.6, true, {
          questTitle: 'Giới nghiêm buổi tối',
          stepDesc: 'Đúng 21:00 phải có mặt tại buồng giam số 3 để kiểm tra quân số và ngủ.',
          progress: 'Về buồng ngủ',
          targetName: 'Buồng giam số 3',
          safeX: -17,
          safeZ: -17.75,
        });
      }
    }

    // 2. NHIỆM VỤ CỐT TRUYỆN & PHỤ (Data-driven cho toàn bộ 24 nhiệm vụ)
    let targetQid: string | null = null;
    if (this.trackedQuestId && g.qStatus(this.trackedQuestId) === 'active') {
      targetQid = this.trackedQuestId;
    } else {
      const activeMain = QUEST_ORDER.find((qid) => QUESTS[qid].type === 'main' && g.qStatus(qid) === 'active');
      const activeSide = QUEST_ORDER.find((qid) => QUESTS[qid].type === 'side' && g.qStatus(qid) === 'active');
      targetQid = activeMain || activeSide || null;
    }

    if (!targetQid) return null;

    const liveNpcs = Object.fromEntries(Object.entries(this.npcs).map(([id, npc]) => [id, { x: npc.x, z: npc.z }]));
    const dest = resolveQuestDestination(targetQid, g.s, liveNpcs);
    if (!dest) return null;

    const qDef = QUESTS[targetQid];
    if (dest.tx === undefined || dest.tz === undefined) {
      return {
        label: dest.label,
        dist: 0,
        angle: 0,
        questId: targetQid,
        isDuty: false,
        questTitle: qDef?.title || dest.label,
        stepDesc: dest.stepDesc,
        targetName: dest.targetName,
        openCondition: dest.openCondition,
        isLocked: dest.isLocked,
      };
    }

    return this.guideTo(dest.label, dest.tx, dest.tz, false, {
      questId: targetQid,
      questTitle: qDef?.title || dest.label,
      stepDesc: dest.stepDesc,
      targetName: dest.targetName,
      safeX: dest.safeX,
      safeZ: dest.safeZ,
      isLocked: dest.isLocked,
      openCondition: dest.openCondition,
    });
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
