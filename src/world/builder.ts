import * as THREE from 'three';
import {
  BUILDINGS, DOORS, PROPS, WALLS, ZONES, propBox, type Box, type PropDef, type WallDef,
} from './layout';
import { Collision } from './collision';

function checkerTex(c1: string, c2: string, cells = 8): THREE.CanvasTexture {
  const cv = document.createElement('canvas');
  cv.width = 128;
  cv.height = 128;
  const ctx = cv.getContext('2d')!;
  const s = 128 / cells;
  for (let y = 0; y < cells; y++) {
    for (let x = 0; x < cells; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? c1 : c2;
      ctx.fillRect(x * s, y * s, s, s);
    }
  }
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(8, 8);
  return t;
}

function signTex(title: string, sub = '', bg = '#1e293b', fg = '#f8fafc'): THREE.CanvasTexture {
  const cv = document.createElement('canvas');
  cv.width = 256;
  cv.height = 128;
  const ctx = cv.getContext('2d')!;
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 256, 128);
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 6;
  ctx.strokeRect(6, 6, 244, 116);
  ctx.fillStyle = fg;
  ctx.font = 'bold 28px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(title, 128, sub ? 54 : 72);
  if (sub) {
    ctx.font = '20px system-ui, sans-serif';
    ctx.fillStyle = '#fde68a';
    ctx.fillText(sub, 128, 92);
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
    this.buildDoors();
    this.buildProps();
    this.buildSignsAndMarkers();
    this.buildSecurityCam();
  }

  private buildGround() {
    const yardMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.95 });
    const yard = new THREE.Mesh(new THREE.PlaneGeometry(64, 60), yardMat);
    yard.rotation.x = -Math.PI / 2;
    yard.position.set(0, -0.02, -6);
    yard.receiveShadow = true;
    this.scene.add(yard);

    // Sàn từng khu
    const tile1 = checkerTex('#cbd5e1', '#94a3b8');
    const tile2 = checkerTex('#e2e8f0', '#cbd5e1');
    const mats: Record<string, THREE.Material> = {
      tile: new THREE.MeshStandardMaterial({ map: tile1, roughness: 0.8 }),
      tile2: new THREE.MeshStandardMaterial({ map: tile2, roughness: 0.75 }),
      concrete: new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 0.9 }),
      wood: new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.75 }),
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
    const outerUpper = new THREE.MeshStandardMaterial({ color: 0xd6d3c4, roughness: 0.88 });
    const outerLower = new THREE.MeshStandardMaterial({ color: 0x4a5d4e, roughness: 0.9 });
    const perimMat = new THREE.MeshStandardMaterial({ color: 0x52525b, roughness: 0.95 });
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
      const obj = this.makePropMesh(p);
      obj.position.set(p.x, 0, p.z);
      if (p.rot) obj.rotation.y = p.rot;
      this.scene.add(obj);
    }

    // Chăn màn trên giường của Minh (Buồng 3, giường trái)
    this.bedsheetMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.65, 0.14, 0.55),
      new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.8 }),
    );
    this.bedsheetMesh.position.set(-15.9, 0.52, -29.2);
    this.scene.add(this.bedsheetMesh);

    // Hộp mũi khoan trong kho
    this.drillMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.38, 0.22, 0.28),
      new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.5 }),
    );
    this.drillMesh.position.set(27.1, 1.05, -5.2);
    this.scene.add(this.drillMesh);

    // Đôi dép tổ ong của Chú Bảy ở bụi cỏ
    const sg = new THREE.Group();
    const sm = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.8 });
    const s1 = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.04, 0.28), sm);
    const s2 = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.04, 0.28), sm);
    s1.position.set(-0.09, 0.03, 0);
    s2.position.set(0.09, 0.03, 0.04);
    s2.rotation.y = 0.25;
    sg.add(s1, s2);
    sg.position.set(-25.6, 0, 8.6);
    this.sandalsMesh = sg;
    this.scene.add(sg);

    // Lọ thuốc hen suyễn rơi sau xưởng (manh mối nhiệm vụ)
    this.asthmaBottleMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 0.22, 8),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.5 }),
    );
    this.asthmaBottleMesh.position.set(22.5, 0.11, 13);
    this.asthmaBottleMesh.rotation.z = Math.PI / 3;
    this.scene.add(this.asthmaBottleMesh);
  }

  private makePropMesh(p: PropDef): THREE.Object3D {
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
          new THREE.MeshBasicMaterial({ map: tex, side: THREE.FrontSide }),
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
      default: {
        const box = new THREE.Mesh(new THREE.BoxGeometry(p.w, 1.0, p.d), stone);
        box.position.y = 0.5;
        g.add(box);
      }
    }
    return g;
  }

  private buildSignsAndMarkers() {
    const signs: { title: string; sub: string; x: number; y: number; z: number; ry?: number }[] = [
      { title: 'KHU BUỒNG GIAM A', sub: 'Giờ về buồng: 21:00', x: -17, y: 3.05, z: -17.75, ry: 0 },
      { title: 'NHÀ ĂN & CĂN TIN', sub: '07:00 · 11:30 · 16:30', x: 6.25, y: 3.05, z: -17.75, ry: 0 },
      { title: 'XƯỞNG LAO ĐỘNG', sub: 'Ca sáng 08:00–11:30', x: 11.75, y: 3.05, z: -2.75, ry: -Math.PI / 2 },
      { title: 'KHO VẬT TƯ — CẤM VÀO', sub: 'Khu vực có camera', x: 21.75, y: 3.05, z: -7.0, ry: -Math.PI / 2 },
      { title: 'PHÒNG QUẢN GIÁO', sub: 'Tiếp nhận 07:00–17:00', x: -4, y: 3.05, z: 9.75, ry: Math.PI },
      { title: 'PHÒNG Y TẾ', sub: '07:30–11:30 · 13:30–17:00', x: 22.25, y: 3.05, z: -17.75, ry: 0 },
      { title: 'LỚP HỌC NGHỀ & THƯ VIỆN', sub: '14:00–16:30 · 19:00–21:00', x: -20.75, y: 3.05, z: 9.75, ry: Math.PI },
      { title: 'PHÒNG THĂM GẶP', sub: 'Tiếp đón người nhà', x: -19.75, y: 3.05, z: -10.25, ry: Math.PI / 2 },
      { title: 'KHU KỶ LUẬT', sub: 'Khu biệt giam', x: 10, y: 3.05, z: 9.75, ry: Math.PI },
    ];
    for (const s of signs) {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(1.3, 0.42),
        new THREE.MeshBasicMaterial({ map: signTex(s.title, s.sub), side: THREE.DoubleSide }),
      );
      m.position.set(s.x, s.y, s.z);
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
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.18, 0.35), new THREE.MeshStandardMaterial({ color: 0x111827 }));
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
  update(dt: number, minute: number, hasSheet: boolean, hasDrill: boolean, hasSandals: boolean, hasAsthmaBottle = false) {
    this.camSweep += dt * 0.85;
    // Quét từ hướng Tây-Nam sang Đông-Bắc của kho
    this.camAngle = -1.1 + Math.sin(this.camSweep) * 0.75;
    this.camCone.rotation.y = this.camAngle;

    this.bedsheetMesh.visible = !hasSheet;
    this.drillMesh.visible = !hasDrill;
    this.sandalsMesh.visible = !hasSandals;
    this.asthmaBottleMesh.visible = !hasAsthmaBottle;

    // Đổi màu trời & nắng theo giờ (06:00 → 22:00)
    const h = minute / 60;
    let sky = 0x9ec5fe;
    let sunI = 1.7;
    if (h < 7) { sky = 0xfdba74; sunI = 1.1; }
    else if (h < 16.5) { sky = 0x93c5fd; sunI = 1.85; }
    else if (h < 19) { sky = 0xfb923c; sunI = 1.15; }
    else { sky = 0x1e293b; sunI = 0.35; }
    (this.scene.background as THREE.Color).setHex(sky);
    (this.scene.fog as THREE.FogExp2).color.setHex(sky);
    this.sun.intensity = sunI;
    const ang = ((h - 6) / 16) * Math.PI;
    this.sun.position.set(-Math.cos(ang) * 28, Math.max(8, Math.sin(ang) * 34), 16);
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
    const dpr = window.devicePixelRatio || 1;
    if (q === 'low') {
      renderer.setPixelRatio(1);
      renderer.shadowMap.enabled = false;
    } else if (q === 'medium') {
      renderer.setPixelRatio(Math.min(dpr, 1.5));
      renderer.shadowMap.enabled = true;
    } else {
      renderer.setPixelRatio(Math.min(dpr, 2));
      renderer.shadowMap.enabled = true;
    }
    this.sun.castShadow = q !== 'low';
  }
}
