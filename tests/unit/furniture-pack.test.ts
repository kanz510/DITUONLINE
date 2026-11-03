import { describe, expect, it } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { DOORS, MESS_SEATS, NODES, PROPS, propBox } from '../../src/world/layout';

const PACK_FILES = [
  'canteen_table_set_blendstra.glb',
  'classroom_desk.glb',
  'classroom_chair.glb',
  'guard_office_desk.glb',
  'guard_office_chair.glb',
  'visitation_table.glb',
  'visitation_chair.glb',
  'yard_concrete_table.glb',
  'yard_concrete_stool.glb',
  'workshop_bench.glb'
];

describe('Furniture Pack v1: Kiểm tra tệp GLB và cấu trúc 3D', () => {
  it('đủ 10 file GLB trong public/models/original/', () => {
    const dir = path.resolve(__dirname, '../../public/models/original');
    for (const f of PACK_FILES) {
      const fullPath = path.join(dir, f);
      expect(fs.existsSync(fullPath), `Tệp ${f} phải tồn tại`).toBe(true);
      const stat = fs.statSync(fullPath);
      expect(stat.size, `Tệp ${f} không được rỗng`).toBeGreaterThan(1000);
    }
  });

  it('10 file GLB đều là glTF 2.0 hợp lệ với magic 0x46546C67', () => {
    const dir = path.resolve(__dirname, '../../public/models/original');
    for (const f of PACK_FILES) {
      const buf = fs.readFileSync(path.join(dir, f));
      // glTF binary magic: 0x46546C67 ("glTF")
      const magic = buf.readUInt32LE(0);
      expect(magic).toBe(0x46546C67);
      const version = buf.readUInt32LE(4);
      expect(version).toBe(2);
      const jsonLen = buf.readUInt32LE(12);
      const jsonStr = buf.toString('utf8', 20, 20 + jsonLen);
      const gltf = JSON.parse(jsonStr);
      expect(gltf.asset?.version).toBe('2.0');
      expect(Array.isArray(gltf.meshes)).toBe(true);
      expect(gltf.meshes.length).toBeGreaterThan(0);
    }
  });
});

describe('Furniture Pack v1: Định vị bàn ghế nhà ăn (Blendstra)', () => {
  it('4 bàn ăn trong nhà ăn có kích thước mới 2.6m x 0.90m', () => {
    const diningTables = PROPS.filter((p) => p.kind === 'table' && p.z < -18 && p.x > -2 && p.x < 16);
    expect(diningTables.length).toBe(4);
    for (const t of diningTables) {
      expect(t.w).toBe(2.6);
      expect(t.d).toBe(0.9);
      expect(t.collide).toBe(true);
    }
  });

  it('8 vị trí MESS_SEATS bám sát mặt ghế băng Blendstra (cách tâm bàn ~0.75m trục Z)', () => {
    expect(MESS_SEATS.length).toBe(8);
    const tables = PROPS.filter((p) => p.kind === 'table' && p.z < -18);
    for (const [sx, sz, srot] of MESS_SEATS) {
      // Tìm bàn ăn gần nhất theo khoảng cách Euclid
      const table = [...tables].sort((a, b) => Math.hypot(a.x - sx, a.z - sz) - Math.hypot(b.x - sx, b.z - sz))[0];
      expect(table, `Phải có bàn ăn cho ghế tại [${sx}, ${sz}]`).toBeDefined();
      if (table) {
        const deltaZ = Math.abs(sz - table.z);
        // Ghế băng trong GLB Blendstra nằm tại |dz| ≈ 0.75m
        expect(deltaZ).toBeGreaterThan(0.65);
        expect(deltaZ).toBeLessThan(0.85);

        // Hướng ngồi quay về phía bàn ăn
        if (sz < table.z) {
          // Băng phía Bắc nhìn về phía Nam (+Z, rot 0)
          expect(srot).toBe(0);
        } else {
          // Băng phía Nam nhìn về phía Bắc (-Z, rot Math.PI)
          expect(srot).toBe(Math.PI);
        }
      }
    }
  });

  it('collider bàn ăn không đè lên bất kỳ điểm ngồi MESS_SEATS nào', () => {
    const diningTables = PROPS.filter((p) => p.kind === 'table' && p.z < -18 && p.x > -2 && p.x < 16);
    for (const t of diningTables) {
      const box = propBox(t);
      for (const [sx, sz] of MESS_SEATS) {
        const inside = sx >= box.x1 && sx <= box.x2 && sz >= box.z1 && sz <= box.z2;
        expect(inside, `MESS_SEATS [${sx}, ${sz}] không được nằm trong collider bàn`).toBe(false);
      }
    }
  });
});

describe('Furniture Pack v1: Định vị bàn ghế phòng ốc & an toàn di chuyển', () => {
  it('không có collider PROPS nào đè lên bất kỳ node đi lại chính của NPC', () => {
    // Các điểm ngồi/làm việc (yBench, medDesk, offDesk...) cho phép trùng vị trí để ngồi
    const transitNodes = Object.entries(NODES).filter(([id]) =>
      !['yBench', 'yBench2', 'wsB1', 'wsB2', 'wsB3', 'wsB4', 'medDesk', 'medBed', 'offLan', 'offDesk', 'wsRest'].includes(id)
    );
    for (const p of PROPS) {
      if (!p.collide) continue;
      const b = propBox(p);
      for (const [nodeId, [nx, nz]] of transitNodes) {
        const inside = nx > b.x1 && nx < b.x2 && nz > b.z1 && nz < b.z2;
        expect(inside, `Prop ${p.kind} [${p.x}, ${p.z}] đè lên node hành lang/lối đi ${nodeId} [${nx}, ${nz}]`).toBe(false);
      }
    }
  });

  it('không có collider PROPS nào đè lên ngưỡng cửa DOORS', () => {
    for (const p of PROPS) {
      if (!p.collide) continue;
      for (const door of DOORS) {
        const insideDoor = p.x >= door.box.x1 && p.x <= door.box.x2 && p.z >= door.box.z1 && p.z <= door.box.z2;
        expect(insideDoor, `Prop ${p.kind} đè lên cửa ${door.id}`).toBe(false);
      }
    }
  });

  it('đôn bê tông sân trại đặt quanh bàn cờ đá trong bán kính hợp lý', () => {
    const stoneTable = PROPS.find((p) => p.kind === 'stonetable');
    expect(stoneTable).toBeDefined();
    const stools = PROPS.filter((p) => p.kind === 'yard-concrete-stool');
    expect(stools.length).toBeGreaterThanOrEqual(2);
    for (const s of stools) {
      const dist = Math.hypot(s.x - stoneTable!.x, s.z - stoneTable!.z);
      expect(dist).toBeGreaterThan(0.65);
      expect(dist).toBeLessThan(1.5);
    }
  });

  it('bàn xưởng workbench và bàn cán bộ được đăng ký xoay hợp lý và có mặt trong cameraObstacles', () => {
    const builderContent = fs.readFileSync(path.resolve(__dirname, '../../src/world/builder.ts'), 'utf8');
    for (const kind of ['workbench', 'stonetable', 'table', 'desk', 'chair', 'yard-concrete-stool']) {
      expect(builderContent.includes(`'${kind}'`), `builder.ts phải đăng ký ${kind} trong cameraObstacles`).toBe(true);
    }

    const workbenches = PROPS.filter((p) => p.kind === 'workbench');
    expect(workbenches.length).toBe(4);
    for (const wb of workbenches) {
      expect(wb.rot).toBe(Math.PI);
    }

    const officeDesk = PROPS.find((p) => p.kind === 'desk' && p.x > -10 && p.z > 10);
    expect(officeDesk).toBeDefined();
    expect(officeDesk!.rot).toBe(Math.PI);
  });
});
