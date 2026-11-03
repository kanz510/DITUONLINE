import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {
  BUILDINGS, DOORS, PROPS, WALLS, ZONES, propBox, type Box, type PropDef, type WallDef,
} from './layout';
import { Collision } from './collision';
import { surfaceMaterial, upgradePropModel } from '../graphics/assets';
import { makeDetailedProp } from './hero-props';
import { makePrisonArchitecture, type ArchitectureVisuals } from './architecture';
import { PrisonAtmosphere, weatherForDay } from './atmosphere';
import { makeLightingProfile, samplePrisonLighting } from './lighting';
import { makeBlanketParcel, makeDrillKit, makeSandals, makeAsthmaInhaler, makeSecurityCameraHousing } from './quest-props';

// Keep the original PROPS footprints, collisions and NPC navigation unchanged.
// GLBs replace visuals only. This guarantees no new path blockers without nav review.
const propLoader = new GLTFLoader();
const propAssets: Record<string, string> = {
  bunk: 'furniture/bedBunk.glb',
  desk: 'furniture/desk.glb',
  chair: 'furniture/chair.glb',
  table: 'furniture/table.glb',
  tree: 'nature/tree_detailed.glb',
  cabinet: 'furniture/cabinetBed.glb',
  // Đợt 1: dùng GLB CC0 đã có trong kho assets, không cần dịch vụ ngoài.
  'kitchen-fridge': 'furniture/kitchenFridge.glb',
  'kitchen-sink': 'furniture/kitchenSink.glb',
  'kitchen-stove': 'furniture/kitchenStoveElectric.glb',
  'visit-sofa': 'furniture/loungeSofa.glb',
  'visit-side-table': 'furniture/sideTable.glb',
  'garden-pot': 'furniture/pottedPlant.glb',
  'yard-bush': 'nature/plant_bush.glb',
  'yard-flower': 'nature/flower_redA.glb',
  'yard-rock': 'nature/rock_largeA.glb',
  'park-ambulance': 'vehicles/ambulance.glb',
  'park-police': 'vehicles/police.glb',
  'park-van': 'special/prison-transfer-bus.glb',
  press: 'special/workshop-drill-press.glb',
  'park-delivery': 'vehicles/delivery.glb',
  // Model nguyên bản
  'cell-toilet': 'original/cell_sanitation_unit_blendstra.glb',
  'cell-locker': 'original/single_prison_locker.glb',
  'medical-trolley': 'original/infirmary_medical_trolley.glb',
};
const propCache = new Map<string, Promise<THREE.Group>>();
function loadProp(path: string) {
  let pending = propCache.get(path);
  if (!pending) {
    pending = propLoader.loadAsync(`${import.meta.env.BASE_URL}models/${path}`).then((gltf) => gltf.scene);
    propCache.set(path, pending);
  }
  return pending;
}

function signTex(title: string, sub = '', bg = '#1e293b', fg = '#f8fafc'): THREE.CanvasTexture {
  const cv = document.createElement('canvas');
  cv.width = 512;
  cv.height = 256;
  const ctx = cv.getContext('2d')!;
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 512, 256);
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 10;
  ctx.strokeRect(8, 8, 496, 240);
  ctx.fillStyle = fg;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Tự động co dãn cỡ chữ theo độ dài để tuyệt đối không tràn hay cắt chữ
  let fontSize = sub ? 42 : 54;
  ctx.font = `bold ${fontSize}px system-ui, sans-serif`;
  while (fontSize > 18 && ctx.measureText(title).width > 470) {
    fontSize -= 2;
    ctx.font = `bold ${fontSize}px system-ui, sans-serif`;
  }
  ctx.fillText(title, 256, sub ? 96 : 128);

  if (sub) {
    let subSize = 26;
    ctx.font = `600 ${subSize}px system-ui, sans-serif`;
    while (subSize > 15 && ctx.measureText(sub).width > 470) {
      subSize -= 1.5;
      ctx.font = `600 ${subSize}px system-ui, sans-serif`;
    }
    ctx.fillStyle = '#fde68a';
    ctx.fillText(sub, 256, 168);
  }
  return new THREE.CanvasTexture(cv);
}

export class PrisonWorld {
  scene = new THREE.Scene();
  collision = new Collision();
  cameraObstacles: THREE.Object3D[] = [];
  sun = new THREE.DirectionalLight(0xfff4d6, 1.8);
  hemi = new THREE.HemisphereLight(0xcbd5e1, 0x475569, 0.85);
  doorMeshes: Record<string, THREE.Mesh> = {};
  drillMesh!: THREE.Object3D;
  sandalsMesh!: THREE.Object3D;
  bedsheetMesh!: THREE.Object3D;
  asthmaBottleMesh!: THREE.Object3D;
  camCone!: THREE.Mesh;
  camAngle = 0;
  private camSweep = 0;
  private gateLights: THREE.PointLight[] = [];
  readonly architecture: ArchitectureVisuals;
  readonly atmosphere: PrisonAtmosphere;
  private readonly indoorLight = new THREE.PointLight(0xffd8a1, 0, 12, 2);
  private readonly lightingTarget = makeLightingProfile();
  private readonly yardDry = new THREE.Color(0xd1d5db);
  private readonly yardWet = new THREE.Color(0x667580);
  private readonly overcastSky = new THREE.Color(0x6b899a);
  private yardMaterial!: THREE.MeshStandardMaterial;
  private visualQuality: 'low' | 'medium' | 'high' = 'medium';

  constructor() {
    this.scene.background = new THREE.Color(0x9ec5fe);
    this.scene.fog = new THREE.FogExp2(0x9ec5fe, 0.011);

    this.sun.position.set(-22, 34, 18);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    const sc = this.sun.shadow.camera;
    sc.left = -35; sc.right = 35; sc.top = 35; sc.bottom = -35; sc.near = 5; sc.far = 90;
    this.scene.add(this.sun, this.hemi);

    this.buildGround();
    this.buildWalls();
    this.architecture = makePrisonArchitecture();
    this.scene.add(this.architecture.root);
    this.indoorLight.castShadow = false;
    this.scene.add(this.indoorLight);
    this.atmosphere = new PrisonAtmosphere(this.scene);
    this.buildPerimeterDetails();
    this.buildDoors();
    this.buildProps();
    this.buildSignsAndMarkers();
    this.buildSecurityCam();
  }

  private buildGround() {
    const yardMat = surfaceMaterial('asphalt.jpg', 0xd1d5db, 18, 17);
    this.yardMaterial = yardMat;
    const yard = new THREE.Mesh(new THREE.PlaneGeometry(64, 60), yardMat);
    yard.rotation.x = -Math.PI / 2;
    yard.position.set(0, -0.02, -6);
    yard.receiveShadow = true;
    this.scene.add(yard);

    // Sàn từng khu
    const mats: Record<string, THREE.Material> = {
      tile: surfaceMaterial('floor_tiles.jpg', 0xffffff, 6, 7),
      tile2: surfaceMaterial('floor_tiles.jpg', 0xf1f5f9, 6, 7),
      concrete: surfaceMaterial('concrete.jpg', 0xd4d4d8, 8, 9),
      wood: surfaceMaterial('wood_planks.jpg', 0xe5d5b5, 6, 7),
    };
    for (const k of Object.keys(BUILDINGS)) {
      const b = BUILDINGS[k];
      const m = new THREE.Mesh(new THREE.PlaneGeometry(b.x2 - b.x1, b.z2 - b.z1), mats[b.floor]);
      m.rotation.x = -Math.PI / 2;
      m.position.set((b.x1 + b.x2) / 2, 0.005, (b.z1 + b.z2) / 2);
      m.receiveShadow = true;
      this.scene.add(m);
    }

    // Ô điểm danh sơn vàng
    const rc = ZONES.find((z) => z.id === 'rollcall')!;
    const rcGeo = new THREE.PlaneGeometry(rc.x2 - rc.x1, rc.z2 - rc.z1);
    const rcMat = new THREE.MeshBasicMaterial({ color: 0xfacc15, transparent: true, opacity: 0.35 });
    const rcMesh = new THREE.Mesh(rcGeo, rcMat);
    rcMesh.rotation.x = -Math.PI / 2;
    rcMesh.position.set((rc.x1 + rc.x2) / 2, 0.015, (rc.z1 + rc.z2) / 2);
    this.scene.add(rcMesh);

    // Vạch đỏ trước cửa kho cấm (thẳng tắp, khớp chuẩn xác với khung cửa kho 1.6m)
    const warnLine = new THREE.Mesh(
      new THREE.PlaneGeometry(0.25, 1.6),
      new THREE.MeshBasicMaterial({ color: 0xef4444 }),
    );
    warnLine.rotation.x = -Math.PI / 2;
    warnLine.position.set(21.75, 0.02, -7.0);
    this.scene.add(warnLine);
  }

  private buildWalls() {
    const outerUpper = surfaceMaterial('plaster_beige.jpg', 0xf6f0e1, 2, 1);
    const outerLower = surfaceMaterial('plaster_moss.jpg', 0xbacaba, 2, 1);
    const perimMat = surfaceMaterial('brick.jpg', 0xa8a29e, 4, 3);
    const barMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.6, roughness: 0.4 });

    for (const w of WALLS) {
      const sx = w.x2 - w.x1;
      const sz = w.z2 - w.z1;
      const cx = (w.x1 + w.x2) / 2;
      const cz = (w.z1 + w.z2) / 2;
      this.collision.boxes.push({ x1: w.x1, z1: w.z1, x2: w.x2, z2: w.z2 });

      if (w.kind === 'bars') {
        this.buildBars(w, barMat);
        continue;
      }
      this.collision.sightBlockers.push({ x1: w.x1, z1: w.z1, x2: w.x2, z2: w.z2 });

      if (w.kind === 'perimeter') {
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(sx, w.h, sz), perimMat);
        mesh.position.set(cx, w.h / 2, cz);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.scene.add(mesh);
        this.cameraObstacles.push(mesh);
      } else {
        // tường 2 tông kiểu trại giam Việt Nam: chân tường xanh rêu, trên vàng kem
        const lowH = Math.min(1.2, w.h * 0.35);
        const hiH = w.h - lowH;
        const low = new THREE.Mesh(new THREE.BoxGeometry(sx, lowH, sz), outerLower);
        low.position.set(cx, lowH / 2, cz);
        const hi = new THREE.Mesh(new THREE.BoxGeometry(sx, hiH, sz), outerUpper);
        hi.position.set(cx, lowH + hiH / 2, cz);
        low.castShadow = hi.castShadow = true;
        low.receiveShadow = hi.receiveShadow = true;
        this.scene.add(low, hi);
        this.cameraObstacles.push(low, hi);
      }
    }

    // ─── BỊT KHOẢNG HỞ TRÊN CỬA (Lanh-tô cửa từ 2.5m đến 3.6m) ───
    const lintelH = 1.1; // 3.6m - 2.5m
    const lintelY = 2.5 + lintelH / 2; // 3.05m
    for (const d of DOORS) {
      const sx = Math.max(d.box.x2 - d.box.x1, 0.3);
      const sz = Math.max(d.box.z2 - d.box.z1, 0.3);
      const lintel = new THREE.Mesh(new THREE.BoxGeometry(sx, lintelH, sz), outerUpper);
      lintel.position.set((d.box.x1 + d.box.x2) / 2, lintelY, (d.box.z1 + d.box.z2) / 2);
      lintel.castShadow = lintel.receiveShadow = true;
      this.scene.add(lintel);
      this.cameraObstacles.push(lintel);
    }

    // Lanh-tô phía trên 4 cửa buồng giam song sắt (z = -25)
    const cellDoors = [
      [-26.05, -24.45],
      [-20.55, -18.95],
      [-15.05, -13.45],
      [-7.95, -6.35],
    ];
    for (const [x1, x2] of cellDoors) {
      const sx = x2 - x1;
      const lintel = new THREE.Mesh(new THREE.BoxGeometry(sx, lintelH, 0.2), outerUpper);
      lintel.position.set((x1 + x2) / 2, lintelY, -25);
      lintel.castShadow = lintel.receiveShadow = true;
      this.scene.add(lintel);
      this.cameraObstacles.push(lintel);
    }

    // ─── THÊM TRẦN / MÁI NHÀ CHO TẤT CẢ CÁC TÒA NHÀ TRONG NHÀ ───
    const ceilMat = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      roughness: 0.95,
      side: THREE.DoubleSide,
    });
    for (const b of Object.values(BUILDINGS)) {
      const bw = b.x2 - b.x1;
      const bd = b.z2 - b.z1;
      const ceil = new THREE.Mesh(new THREE.PlaneGeometry(bw, bd), ceilMat);
      ceil.rotation.x = Math.PI / 2; // mặt nhìn xuống sàn
      ceil.position.set((b.x1 + b.x2) / 2, 3.6, (b.z1 + b.z2) / 2);
      ceil.receiveShadow = true;
      this.scene.add(ceil);
      this.cameraObstacles.push(ceil);
    }
  }

  /** Prison facade decoration is mounted ON registered perimeter walls.
   * No new ground obstacles or walkable routes are introduced.
   * The coils and posts share two instanced meshes to stay cheap on iPhone.
   */
  private buildPerimeterDetails() {
    const perimeter = WALLS.filter((wall) => wall.kind === 'perimeter');
    const segments: { x: number; z: number; y: number; vertical: boolean }[] = [];
    for (const wall of perimeter) {
      const width = wall.x2 - wall.x1;
      const depth = wall.z2 - wall.z1;
      const horizontal = width > depth;
      const distance = horizontal ? width : depth;
      const count = Math.max(1, Math.floor(distance / .67));
      for (let i = 0; i < count; i++) {
        const t = (i + .5) / count;
        segments.push({
          x: horizontal ? wall.x1 + t * width : (wall.x1 + wall.x2) / 2,
          z: horizontal ? (wall.z1 + wall.z2) / 2 : wall.z1 + t * depth,
          y: wall.h + .29,
          vertical: !horizontal,
        });
      }
    }
    const wire = new THREE.InstancedMesh(
      new THREE.TorusGeometry(.305, .018, 4, 10),
      new THREE.MeshStandardMaterial({ color: 0x85939a, metalness: .78, roughness: .38 }),
      segments.length,
    );
    wire.name = 'perimeter.concertina-wire';
    const transform = new THREE.Object3D();
    for (let i = 0; i < segments.length; i++) {
      const p = segments[i];
      transform.position.set(p.x, p.y, p.z);
      transform.rotation.set(0, p.vertical ? Math.PI / 2 : 0, 0);
      transform.updateMatrix();
      wire.setMatrixAt(i, transform.matrix);
    }
    wire.instanceMatrix.needsUpdate = true;
    wire.frustumCulled = false;
    this.scene.add(wire);

    const gate = new THREE.Group();
    gate.name = 'prison.main-gate.facade';
    gate.position.set(0, 0, 21.60);
    const dark = new THREE.MeshStandardMaterial({ color: 0x172530, metalness: .73, roughness: .44 });
    const frame = new THREE.MeshStandardMaterial({ color: 0x72828a, metalness: .7, roughness: .37 });
    const orange = new THREE.MeshStandardMaterial({ color: 0xdd9844, metalness: .27, roughness: .47 });
    const panel = new THREE.Mesh(new THREE.BoxGeometry(5.2, 3.5, .12), dark);
    panel.name = 'gate.locked.surface';panel.position.y = 1.77;panel.castShadow = true;
    gate.add(panel);
    for (const x of [-2.53, 0, 2.53]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(.13, 3.85, .21), frame);
      post.position.set(x, 1.92, -.12);
      gate.add(post);
    }
    for (let i = -8; i <= 8; i++) {
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(.037, .037, 3.15, 7), frame);
      bar.position.set(i * .28, 1.75, -.195);
      gate.add(bar);
    }
    for (const y of [.55, 2.94]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(5.06, .11, .16), frame);
      rail.position.set(0, y, -.23);
      gate.add(rail);
    }
    const topBeam = new THREE.Mesh(new THREE.BoxGeometry(6.0, .21, .22), orange);
    topBeam.position.set(0, 3.94, -.22);
    gate.add(topBeam);
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(4.1, .58),
      new THREE.MeshBasicMaterial({ map: signTex('TRẠI GIAM AN PHÚ', 'KỶ LUẬT · TRÁCH NHIỆM · TÁI HÒA NHẬP'), side: THREE.DoubleSide }),
    );
    sign.name = 'gate.official.sign';
    sign.position.set(0, 4.48, -.28);
    sign.rotation.y = Math.PI;
    gate.add(sign);
    for (const x of [-3.3, 3.3]) {
      const lamp = new THREE.Mesh(
        new THREE.CylinderGeometry(.17, .17, .16, 14),
        new THREE.MeshStandardMaterial({ color: 0xe6c079, emissive: 0xc47b24, emissiveIntensity: .75 }),
      );
      lamp.position.set(x, 4.17, -.36);
      lamp.rotation.x = Math.PI / 2;
      gate.add(lamp);
      const glow = new THREE.PointLight(0xffb96d, .25, 7.5, 2);
      glow.position.set(x, 4.05, -.75);
      gate.add(glow);
      this.gateLights.push(glow);
    }
    this.scene.add(gate);
  }

  private buildBars(w: WallDef, mat: THREE.Material) {
    const g = new THREE.Group();
    const len = w.x2 - w.x1;
    const n = Math.max(2, Math.floor(len / 0.22));
    for (let i = 0; i <= n; i++) {
      const x = w.x1 + (len * i) / n;
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, w.h, 6), mat);
      bar.position.set(x, w.h / 2, (w.z1 + w.z2) / 2);
      g.add(bar);
    }
    const rail = new THREE.Mesh(new THREE.BoxGeometry(len, 0.06, 0.08), mat);
    rail.position.set((w.x1 + w.x2) / 2, 2.2, (w.z1 + w.z2) / 2);
    g.add(rail);
    this.scene.add(g);
  }

  private buildDoors() {
    for (const d of DOORS) {
      const sx = d.box.x2 - d.box.x1;
      const sz = d.box.z2 - d.box.z1;
      const mat = new THREE.MeshStandardMaterial({
        color: d.area === 'storage' ? 0x991b1b : 0x3b4252,
        roughness: 0.6,
        metalness: 0.3,
      });
      const m = new THREE.Mesh(new THREE.BoxGeometry(sx, 2.5, sz), mat);
      m.position.set((d.box.x1 + d.box.x2) / 2, 1.25, (d.box.z1 + d.box.z2) / 2);
      m.castShadow = true;
      // Door detail lives on the same visibility-controlled mesh: locked/open
      // transitions and existing collision logic are completely unchanged.
      const trim = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: .73, roughness: .34 });
      const steelDark = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: .75, roughness: .41 });
      const warningMat = new THREE.MeshStandardMaterial({ color: 0xe6ad54, roughness: .49 });
      const alongX = sx >= sz;
      const width = alongX ? sx : sz;
      const depth = alongX ? sz : sx;
      for (const v of [-width * .43, width * .43]) {
        const rim = new THREE.Mesh(new THREE.BoxGeometry(
          alongX ? .055 : depth + .07, 2.4, alongX ? depth + .07 : .055), trim);
        rim.position.set(alongX ? v : 0, 0, alongX ? 0 : v);
        m.add(rim);
      }
      const nearFace = depth / 2 + .015;
      for (const h of [-.88, .79]) {
        const line = new THREE.Mesh(new THREE.BoxGeometry(
          alongX ? width * .78 : .033, .045, alongX ? .033 : width * .78), steelDark);
        line.position.set(alongX ? 0 : nearFace, h, alongX ? nearFace : 0);
        m.add(line);
      }
      const hatch = new THREE.Mesh(new THREE.BoxGeometry(
        alongX ? .45 : .05, .34, alongX ? .05 : .45), steelDark);
      hatch.position.set(alongX ? 0 : nearFace, .35, alongX ? nearFace : 0);
      m.add(hatch);
      for (let n = -2; n <= 2; n++) {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(
          alongX ? .025 : .05, .29, alongX ? .05 : .025), trim);
        bar.position.set(alongX ? n * .068 : nearFace + .01, .35, alongX ? nearFace + .01 : n * .068);
        m.add(bar);
      }
      const plate = new THREE.Mesh(new THREE.BoxGeometry(
        alongX ? .19 : .032, .25, alongX ? .032 : .19), warningMat);
      plate.position.set(alongX ? width * .33 : nearFace + .015, -.30, alongX ? nearFace + .015 : width * .33);
      m.add(plate);
      this.scene.add(m);
      this.doorMeshes[d.id] = m;
    }
  }

  updateDoors(isOpenFn: (area: string) => boolean): Box[] {
    const closed: Box[] = [];
    for (const d of DOORS) {
      const open = isOpenFn(d.area);
      const m = this.doorMeshes[d.id];
      if (m) m.visible = !open;
      if (!open) closed.push(d.box);
    }
    return closed;
  }

  private buildProps() {
    for (const p of PROPS) {
      if (p.collide) this.collision.boxes.push(propBox(p));
      const placeholder = this.makePropMesh(p);
      const obj = new THREE.Group();
      obj.name = 'prop.' + p.kind;
      obj.add(placeholder);
      // Clone shared CC0 GLBs after a single load, keeping procedural fallback
      // visible until the corresponding file AND its relative texture load.
      const asset = p.kind === 'bunk' && p.x > 20 && p.z < -20
        ? 'special/hospital-bed.glb'
        : p.kind === 'bunk' && (p.x > 20 || (p.x > 5 && p.z > 10))
          ? 'furniture/bedSingle.glb'
        : p.kind === 'tree' && Math.floor(Math.abs(p.x * 17 + p.z * 11)) % 2 === 0
          ? 'nature/tree_oak.glb'
          : p.kind === 'yard-flower' && p.x > 0
            ? 'nature/flower_yellowA.glb'
            : propAssets[p.kind];
      if (asset) {
        void loadProp(asset).then((template) => {
          const model = template.clone(true);
          model.name = 'asset.' + asset;
          const isVehicle = p.kind.startsWith('park-');
          // Vehicles are authored along the local Z axis; park them lengthwise
          // along our X-aligned collider before measuring the bounding box.
          if (isVehicle) model.rotation.y = Math.PI / 2;
          const bounds = new THREE.Box3().setFromObject(model);
          const width = bounds.max.x - bounds.min.x;
          const depth = bounds.max.z - bounds.min.z;
          const height = bounds.max.y - bounds.min.y;
          if (!Number.isFinite(width * depth * height) ||
              Math.min(width, depth, height) <= 0.001) return;
          // Uniform scale prevents squashing. The declared PROPS boxes remain
          // the ONLY collision source (vehicle footprint included).
          const maxHeight = p.kind === 'tree' ? 4.5
            : p.kind === 'bunk' ? 2.0
              : p.kind === 'cell-locker' ? 1.65
                : p.kind === 'cell-toilet' ? 1.4
                  : p.kind === 'medical-trolley' ? 1.1
                    : p.kind === 'kitchen-fridge' ? 2.25
                      : isVehicle ? 2.4
                        : p.kind === 'press' ? 2.45
                          : p.kind === 'garden-pot' ? 1.3
                          : p.kind.startsWith('yard-') ? 0.85 : 1.9;
          const factor = p.kind === 'tree'
            ? 4.5 / height
            : Math.min(p.w / width, p.d / depth, maxHeight / height) * 0.96;
          model.scale.setScalar(factor);
          model.position.set(
            -(bounds.min.x + bounds.max.x) * 0.5 * factor,
            -bounds.min.y * factor,
            -(bounds.min.z + bounds.max.z) * 0.5 * factor,
          );
          model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          obj.clear();
          obj.add(model);
          obj.userData.assetLoaded = true;
          obj.userData.assetPath = asset;
          // Kit stays on the existing clinic cabinet: no new obstacle.
          if (p.kind === 'cabinet' && p.x > 18 && p.z < -18) {
            void loadProp('special/medical-first-aid-kit.glb').then((kitSrc) => {
              const kit = kitSrc.clone(true);
              kit.name = 'phase2.medical-first-aid-kit';
              kit.position.set(0, 1.52, 0);
              kit.traverse((child) => {
                if (child instanceof THREE.Mesh) child.castShadow = true;
              });
              obj.add(kit);
              obj.userData.phase2MedkitLoaded = true;
            }).catch((error) => console.warn('[Phase 2] Medical kit fallback:', error));
          }
          // Khay cơm nhà ăn: gắn dưới Group của 4 bàn ăn, nâng lên mặt bàn
          if (p.kind === 'table' && p.x > -2 && p.x < 16 && p.z < -18) {
            void loadProp('original/canteen_meal_tray.glb').then((traySrc) => {
              const trayBounds = new THREE.Box3().setFromObject(traySrc);
              const tableTopY = bounds.max.y * factor;
              for (const offsetX of [-0.7, 0.7]) {
                const tray = traySrc.clone(true);
                tray.name = 'original.canteen_meal_tray';
                tray.position.set(offsetX, tableTopY - trayBounds.min.y, 0);
                tray.traverse((child) => {
                  if (child instanceof THREE.Mesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                  }
                });
                obj.add(tray);
              }
              obj.userData.traysLoaded = true;
            }).catch((error) => console.warn('[Canteen Tray] Fallback:', error));
          }
          // Radio phòng cán bộ: gắn dưới Group của bàn làm việc cán bộ, nâng lên mặt bàn
          if (p.kind === 'desk' && p.x === -4 && p.z === 16) {
            void loadProp('original/guard_desk_radio.glb').then((radioSrc) => {
              const radio = radioSrc.clone(true);
              radio.name = 'original.guard_desk_radio';
              const radioBounds = new THREE.Box3().setFromObject(radioSrc);
              const deskTopY = bounds.max.y * factor;
              radio.position.set(0.65, deskTopY - radioBounds.min.y, -0.05);
              radio.rotation.y = -Math.PI / 6;
              radio.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                  child.castShadow = true;
                  child.receiveShadow = true;
                }
              });
              obj.add(radio);
              obj.userData.radioLoaded = true;
            }).catch((error) => console.warn('[Guard Desk Radio] Fallback:', error));
          }
        }).catch((err) => console.warn('[Prop GLB] Procedural fallback:', asset, err));
      } else if (p.kind === 'counter' && p.x < -20) {
        // Mounted on the existing booth; original collider and quest spot stay.
        void loadProp('special/visitation-phone.glb').then((phoneSrc) => {
          for (const pos of [-2.05, 0, 2.05]) {
            const phone = phoneSrc.clone(true);
            phone.name = 'phase2.visitation-phone';
            phone.position.set(pos, 1.10, -0.11);
            phone.traverse((child) => {
              if (child instanceof THREE.Mesh) child.castShadow = true;
            });
            obj.add(phone);
          }
          obj.userData.phase2PhonesLoaded = true;
        }).catch((error) => console.warn('[Phase 2] Visitation phones fallback:', error));
      } else if (p.kind === 'lamp') {
        void upgradePropModel(obj, placeholder, 'models/roads/light-square.glb',
          { width: p.w, depth: p.d }, { height: 3.8 });
      } else if (p.kind === 'plant') {
        void upgradePropModel(obj, placeholder, 'models/nature/plant_bushDetailed.glb',
          { width: p.w, depth: p.d }, { height: 0.75 });
      } else if (p.kind === 'shelf' && p.x < -20 && p.z > 10) {
        void upgradePropModel(obj, placeholder, 'models/furniture/bookcaseOpen.glb',
          { width: p.w, depth: p.d }, { rotateY: Math.PI / 2 });
        // Dress the existing library shelf with CC0 book stacks. All meshes
        // remain inside its current PROPS collision footprint.
        void loadProp('furniture/books.glb').then((template) => {
          const bounds = new THREE.Box3().setFromObject(template);
          const size = bounds.getSize(new THREE.Vector3());
          const center = bounds.getCenter(new THREE.Vector3());
          if (Math.min(size.x, size.y, size.z) <= .001) return;
          for (let i = 0; i < 3; i++) {
            const books = template.clone(true);
            const scale = Math.min(.36 / size.x, .33 / size.y, .45 / size.z);
            books.scale.setScalar(scale);
            books.position.set(-center.x * scale, .56 + i * .48 - bounds.min.y * scale,
              (-.75 + i * .75) - center.z * scale);
            books.traverse((mesh) => {
              if (mesh instanceof THREE.Mesh) mesh.castShadow = true;
            });
            obj.add(books);
          }
        }).catch((error) => console.warn('[Books GLB] Shelf remains usable:', error));
      }
      if (p.kind === 'tree' || p.kind === 'lamp' || p.kind === 'shelf' || p.kind === 'tower' || p.kind === 'cell-locker') this.cameraObstacles.push(obj);
      obj.position.set(p.x, 0, p.z);
      if (p.rot) obj.rotation.y = p.rot;
      this.scene.add(obj);
    }

    // Quest props only change geometry: exact world positions and visibility are unchanged.
    this.bedsheetMesh = makeBlanketParcel();
    this.bedsheetMesh.position.set(-15.9, 0.52, -29.2);
    this.scene.add(this.bedsheetMesh);

    this.drillMesh = makeDrillKit();
    this.drillMesh.position.set(27.1, 1.05, -5.2);
    this.scene.add(this.drillMesh);

    this.sandalsMesh = makeSandals();
    this.sandalsMesh.position.set(-25.6, 0, 8.6);
    this.scene.add(this.sandalsMesh);

    this.asthmaBottleMesh = makeAsthmaInhaler();
    this.asthmaBottleMesh.position.set(22.5, 0.11, 13);
    this.asthmaBottleMesh.rotation.z = Math.PI / 3;
    this.scene.add(this.asthmaBottleMesh);
  }

  private makePropMesh(p: PropDef): THREE.Object3D {
    const detailed = makeDetailedProp(p);
    if (detailed) return detailed;
    const g = new THREE.Group();
    const wood = new THREE.MeshStandardMaterial({ color: 0x7c4a1e, roughness: 0.8 });
    const steel = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.5, roughness: 0.5 });
    const stone = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.9 });
    const green = new THREE.MeshStandardMaterial({ color: 0x2e6f40, roughness: 0.85 });

    switch (p.kind) {
      case 'bunk': {
        const m1 = new THREE.Mesh(new THREE.BoxGeometry(p.w, 0.1, p.d), wood);
        m1.position.y = 0.42;
        const m2 = new THREE.Mesh(new THREE.BoxGeometry(p.w, 0.1, p.d), wood);
        m2.position.y = 1.35;
        g.add(m1, m2);
        for (const dx of [-p.w / 2 + 0.05, p.w / 2 - 0.05]) {
          for (const dz of [-p.d / 2 + 0.05, p.d / 2 - 0.05]) {
            const post = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.75, 6), steel);
            post.position.set(dx, 0.88, dz);
            g.add(post);
          }
        }
        break;
      }
      case 'table':
      case 'workbench':
      case 'desk': {
        const topMat = p.kind === 'workbench' ? steel : wood;
        const top = new THREE.Mesh(new THREE.BoxGeometry(p.w, 0.1, p.d), topMat);
        top.position.y = 0.82;
        top.castShadow = true;
        g.add(top);
        const leg = new THREE.Mesh(new THREE.BoxGeometry(p.w * 0.85, 0.78, p.d * 0.75), p.kind === 'desk' ? wood : steel);
        leg.position.y = 0.39;
        g.add(leg);
        if (p.kind === 'workbench') {
          const box = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.22, 0.3), new THREE.MeshStandardMaterial({ color: 0xd97706 }));
          box.position.set(-0.5, 0.96, 0);
          g.add(box);
        }
        break;
      }
      case 'counter':
      case 'canteen': {
        const body = new THREE.Mesh(
          new THREE.BoxGeometry(p.w, 1.05, p.d),
          new THREE.MeshStandardMaterial({ color: p.kind === 'canteen' ? 0x92400e : 0x64748b, roughness: 0.7 }),
        );
        body.position.y = 0.525;
        g.add(body);
        break;
      }
      case 'bench': {
        const seat = new THREE.Mesh(new THREE.BoxGeometry(p.w, 0.1, p.d), stone);
        seat.position.y = 0.45;
        g.add(seat);
        break;
      }
      case 'shelf':
      case 'cabinet': {
        const sh = new THREE.Mesh(new THREE.BoxGeometry(p.w, 1.9, p.d), steel);
        sh.position.y = 0.95;
        sh.castShadow = true;
        g.add(sh);
        break;
      }
      case 'board': {
        const tex = signTex(p.label ?? 'THÔNG BÁO', 'Nhấn E để xem');
        const g0 = new THREE.Group();
        const frame = new THREE.Mesh(
          new THREE.BoxGeometry(p.w, 1.0, 0.04),
          new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.8 }),
        );
        frame.position.y = 1.6;
        const face = new THREE.Mesh(
          new THREE.PlaneGeometry(p.w - 0.06, 0.88),
          new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }),
        );
        face.position.set(0, 1.6, 0.025);
        g0.add(frame, face);
        g.add(g0);
        break;
      }
      case 'pullup': {
        const l = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.3, 8), steel);
        const r = l.clone();
        l.position.set(-p.w / 2 + 0.1, 1.15, 0);
        r.position.set(p.w / 2 - 0.1, 1.15, 0);
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, p.w, 8), steel);
        bar.rotation.z = Math.PI / 2;
        bar.position.y = 2.25;
        g.add(l, r, bar);
        break;
      }
      case 'stonetable': {
        const t = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.1, 12), stone);
        t.position.y = 0.72;
        const p0 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.7, 10), stone);
        p0.position.y = 0.35;
        g.add(t, p0);
        break;
      }
      case 'tree': {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, 2.2, 8), wood);
        trunk.position.y = 1.1;
        const crown = new THREE.Mesh(new THREE.SphereGeometry(1.45, 10, 8), green);
        crown.position.y = 2.9;
        crown.castShadow = true;
        g.add(trunk, crown);
        break;
      }
      case 'tower': {
        const base = new THREE.Mesh(new THREE.BoxGeometry(p.w, 6.5, p.d), stone);
        base.position.y = 3.25;
        const roof = new THREE.Mesh(new THREE.ConeGeometry(1.9, 1.2, 4), new THREE.MeshStandardMaterial({ color: 0x7f1d1d }));
        roof.position.y = 7.1;
        roof.rotation.y = Math.PI / 4;
        g.add(base, roof);
        break;
      }
      case 'cell-toilet': {
        const toilet = new THREE.Mesh(new THREE.BoxGeometry(p.w, 1.05, p.d), steel);
        toilet.position.y = 0.525;
        g.add(toilet);
        break;
      }
      case 'cell-locker': {
        const locker = new THREE.Mesh(new THREE.BoxGeometry(p.w, 1.6, p.d), steel);
        locker.position.y = 0.8;
        locker.castShadow = true;
        g.add(locker);
        break;
      }
      case 'medical-trolley': {
        const cart = new THREE.Mesh(new THREE.BoxGeometry(p.w, 1.0, p.d), steel);
        cart.position.y = 0.5;
        g.add(cart);
        break;
      }
      default: {
        const box = new THREE.Mesh(new THREE.BoxGeometry(p.w, 1.0, p.d), stone);
        box.position.y = 0.5;
        g.add(box);
      }
    }
    return g;
  }

  private buildSignsAndMarkers() {
    const signs: { title: string; sub: string; x: number; y: number; z: number; ry: number }[] = [
      { title: 'KHU BUỒNG GIAM A', sub: 'Giờ về buồng: 21:00', x: -17, y: 3.05, z: -17.78, ry: 0 },
      { title: 'NHÀ ĂN & CĂN TIN', sub: '07:00 · 11:30 · 16:30', x: 6.25, y: 3.05, z: -17.78, ry: 0 },
      { title: 'XƯỞNG LAO ĐỘNG', sub: 'Ca sáng 08:00–11:30', x: 11.78, y: 3.05, z: -2.75, ry: -Math.PI / 2 },
      { title: 'KHO VẬT TƯ — CẤM VÀO', sub: 'Khu vực có camera', x: 21.78, y: 3.05, z: -7.0, ry: -Math.PI / 2 },
      { title: 'PHÒNG QUẢN GIÁO', sub: 'Tiếp nhận 07:00–17:00', x: -4, y: 3.05, z: 9.78, ry: Math.PI },
      { title: 'PHÒNG Y TẾ', sub: '07:30–11:30 · 13:30–17:00', x: 22.25, y: 3.05, z: -17.78, ry: 0 },
      { title: 'LỚP HỌC NGHỀ & THƯ VIỆN', sub: '14:00–16:30 · 19:00–21:00', x: -20.75, y: 3.05, z: 9.78, ry: Math.PI },
      { title: 'PHÒNG THĂM GẶP', sub: 'Tiếp đón người nhà', x: -19.78, y: 3.05, z: -10.25, ry: Math.PI / 2 },
      { title: 'KHU KỶ LUẬT', sub: 'Khu biệt giam', x: 10, y: 3.05, z: 9.78, ry: Math.PI },
    ];
    for (const s of signs) {
      const isZ = s.ry === -Math.PI / 2 || s.ry === Math.PI / 2;
      const plate = new THREE.Mesh(
        isZ ? new THREE.BoxGeometry(0.04, 0.38, 1.20) : new THREE.BoxGeometry(1.20, 0.38, 0.04),
        new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.6 }),
      );
      plate.position.set(s.x, s.y, s.z);
      this.scene.add(plate);

      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(1.16, 0.34),
        new THREE.MeshBasicMaterial({ map: signTex(s.title, s.sub), side: THREE.DoubleSide }),
      );
      const offset = 0.022;
      const px = s.x + (s.ry === -Math.PI / 2 ? -offset : s.ry === Math.PI / 2 ? offset : 0);
      const pz = s.z + (s.ry === 0 ? offset : s.ry === Math.PI ? -offset : 0);
      m.position.set(px, s.y, pz);
      if (s.ry) m.rotation.y = s.ry;
      this.scene.add(m);
    }

    // Số buồng 1..4 (treo trên lanh-tô cửa buồng cao 3.05m)
    for (let i = 0; i < 4; i++) {
      const x = -25.25 + i * 5.5;
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(0.95, 0.38),
        new THREE.MeshBasicMaterial({ map: signTex(`BUỒNG ${i + 1}`, i === 2 ? 'Minh · Bảy · Huy' : ''), side: THREE.DoubleSide }),
      );
      m.position.set(x, 3.05, -24.88);
      this.scene.add(m);
    }
  }

  private buildSecurityCam() {
    // Camera gắn ở góc kho (22.3, -4.3), quét qua cửa kho và kệ mũi khoan
    const body = makeSecurityCameraHousing();
    body.position.set(22.4, 2.9, -4.3);
    this.scene.add(body);

    // Hình nón tầm nhìn camera hiển thị trên sàn để người chơi canh nhịp
    const coneGeo = new THREE.CircleGeometry(5.5, 24, -0.42, 0.84);
    coneGeo.rotateX(-Math.PI / 2);
    const coneMat = new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0.26, side: THREE.DoubleSide });
    this.camCone = new THREE.Mesh(coneGeo, coneMat);
    this.camCone.position.set(22.4, 0.03, -4.3);
    this.scene.add(this.camCone);
  }

  /** Cập nhật góc quét camera & ánh sáng bầu trời theo giờ trong ngày. */
  update(dt: number, minute: number, hasSheet: boolean, hasDrill: boolean,
    hasSandals: boolean, hasAsthmaBottle = false, day = 1, playerX = 0, playerZ = 0) {
    this.camSweep += dt * 0.85;
    // Quét từ hướng Tây-Nam sang Đông-Bắc của kho
    this.camAngle = -1.1 + Math.sin(this.camSweep) * 0.75;
    this.camCone.rotation.y = this.camAngle;

    this.bedsheetMesh.visible = !hasSheet;
    this.drillMesh.visible = !hasDrill;
    this.sandalsMesh.visible = !hasSandals;
    this.asthmaBottleMesh.visible = !hasAsthmaBottle;

    // Phase 3: smooth cinematic light, single moving indoor fill and
    // deterministic graphics-only weather (no gameplay or save changes).
    const h = minute / 60;
    const profile = samplePrisonLighting(minute, this.lightingTarget);
    const blend = THREE.MathUtils.clamp(dt * 2.4, 0, 1);
    (this.scene.background as THREE.Color).lerp(profile.sky, blend);
    const fog = this.scene.fog as THREE.FogExp2;
    fog.color.lerp(profile.sky, blend);
    this.sun.color.lerp(profile.sunlight, blend);
    this.sun.intensity = THREE.MathUtils.lerp(this.sun.intensity, profile.sunIntensity, blend);
    this.hemi.intensity = THREE.MathUtils.lerp(this.hemi.intensity, profile.hemisphere, blend);
    const ang = ((h - 6) / 16) * Math.PI;
    this.sun.position.set(-Math.cos(ang) * 28, Math.max(7.5, Math.sin(ang) * 34), 16);

    const night = profile.nightFactor;
    this.architecture.fixtureMaterial.emissiveIntensity = this.visualQuality === 'low'
      ? 0.12 : 0.20 + night * (this.visualQuality === 'high' ? 1.9 : 1.25);
    for (const light of this.gateLights) {
      light.intensity = this.visualQuality === 'low' ? 0
        : 0.09 + night * (this.visualQuality === 'high' ? 1.1 : .64);
    }
    const indoors = Object.values(BUILDINGS).some((b) =>
      playerX > b.x1 && playerX < b.x2 && playerZ > b.z1 && playerZ < b.z2);
    this.indoorLight.position.set(playerX, 3.0, playerZ);
    this.indoorLight.intensity = this.visualQuality === 'low' || !indoors ? 0
      : (this.visualQuality === 'high' ? 1.65 : 0.85) * (0.42 + night * .8);

    this.atmosphere.update(dt, day, minute, playerX, playerZ);
    const weather = weatherForDay(day, minute);
    if (weather === 'rain') {
      // Overcast, not sunset-pink: overcast sky and fog stay consistent with wet asphalt.
      (this.scene.background as THREE.Color).lerp(this.overcastSky, .46 * this.atmosphere.wetness);
      fog.color.lerp(this.overcastSky, .34 * this.atmosphere.wetness);
    }
    const morning = weather === 'haze' ? .006 : 0;
    const rainFog = weather === 'rain' ? .0035 : 0;
    const targetDensity = this.visualQuality === 'low' ? .008
      : .010 + morning + rainFog;
    fog.density = THREE.MathUtils.lerp(fog.density, targetDensity, blend);
    const wetness = this.atmosphere.wetness;
    this.yardMaterial.roughness = .91 - wetness * .52;
    this.yardMaterial.color.lerpColors(this.yardDry, this.yardWet, wetness * .48);
  }

  /** Kiểm tra người chơi tại (x,z) có nằm trong vùng quét của camera kho không. */
  seenByStorageCam(x: number, z: number): boolean {
    if (x < 21.7 || x > 28 || z < -12 || z > -4) return false;
    const dx = x - 22.4;
    const dz = z - -4.3;
    const d = Math.hypot(dx, dz);
    if (d > 5.5) return false;
    const fx = Math.cos(this.camAngle);
    const fz = -Math.sin(this.camAngle);
    const dot = (dx * fx + dz * fz) / Math.max(1e-5, d);
    return dot >= Math.cos(0.42);
  }

  setQuality(q: 'low' | 'medium' | 'high', renderer: THREE.WebGLRenderer) {
    this.visualQuality = q;
    this.atmosphere.setQuality(q);
    const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;
    const targetDpr = q === 'low' ? 1 : q === 'medium' ? 1.35 : 2;
    renderer.setPixelRatio(Math.min(dpr, targetDpr));
    renderer.shadowMap.enabled = q !== 'low';
    this.sun.castShadow = q !== 'low';
    const shadowSize = q === 'high' ? 1024 : q === 'medium' ? 768 : 512;
    if (this.sun.shadow.mapSize.x !== shadowSize) {
      this.sun.shadow.mapSize.set(shadowSize, shadowSize);
      this.sun.shadow.dispose();
      renderer.shadowMap.needsUpdate = true;
    }
  }
}
