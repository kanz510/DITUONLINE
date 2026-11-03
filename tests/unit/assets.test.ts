import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { PROPS, EDGES, NODES, propBox } from '../../src/world/layout';
import { isConnected, findPath } from '../../src/world/nav';
import { segBox } from '../../src/world/collision';

const characterSkins = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'q'];
const furniture = ['bedBunk', 'bedSingle', 'table', 'desk', 'chair', 'cabinetBed', 'bookcaseOpen'];
const otherModels = [
  'models/nature/tree_detailed.glb',
  'models/nature/tree_oak.glb',
  'assets/models/nature/plant_bushDetailed.glb',
  'assets/models/roads/light-square.glb',
  'assets/models/furniture/bookcaseOpen.glb',
];

function validGlb(path: string): boolean {
  if (!existsSync(path)) return false;
  const bytes = readFileSync(path);
  return bytes.toString('ascii', 0, 4) === 'glTF' && bytes.readUInt32LE(4) === 2;
}

describe('GLB / texture bundle contract', () => {
  it('12 character GLBs have matching sibling texture paths and glTF 2.0 headers', () => {
    for (const key of characterSkins) {
      expect(validGlb(`public/models/characters/character-${key}.glb`), key).toBe(true);
      expect(existsSync(`public/models/characters/Textures/texture-${key}.png`), key).toBe(true);
    }
  });

  it('prop models and texture dependencies are shipped under public/', () => {
    for (const name of furniture) {
      expect(validGlb(`public/models/furniture/${name}.glb`), name).toBe(true);
    }
    for (const path of otherModels) {
      expect(validGlb(`public/${path}`), path).toBe(true);
    }
    for (const name of [
      'asphalt.jpg', 'concrete.jpg', 'floor_tiles.jpg',
      'wood_planks.jpg', 'plaster_beige.jpg', 'plaster_moss.jpg', 'brick.jpg',
    ]) {
      expect(existsSync(`public/assets/textures/${name}`), name).toBe(true);
    }
    expect(existsSync('public/assets/models/roads/Textures/colormap-roads.png')).toBe(true);
  });

  it('new lamps/planters have colliders but do not block the NPC path graph', () => {
    const added = PROPS.filter(p => p.kind === 'lamp' || p.kind === 'plant');
    expect(added).toHaveLength(2);
    expect(added.every(p => p.collide)).toBe(true);
    expect(isConnected()).toBe(true);
    expect(findPath('yW', 'yEx')).toContain('yEx');

    for (const p of added) {
      const bounds = propBox(p);
      const expanded = {
        x1: bounds.x1 - 0.36, x2: bounds.x2 + 0.36,
        z1: bounds.z1 - 0.36, z2: bounds.z2 + 0.36,
      };
      for (const [from, to] of EDGES) {
        const a = NODES[from], b = NODES[to];
        expect(segBox(a[0], a[1], b[0], b[1], expanded),
          `${p.kind} (${p.x},${p.z}) blocks NPC route ${from}->${to}`).toBe(false);
      }
    }
  });
});


describe('Đợt 1 dùng GLB Kenney và bảo toàn đường đi', () => {
  const kinds = new Set([
    'kitchen-fridge', 'kitchen-sink', 'kitchen-stove',
    'visit-sofa', 'visit-side-table', 'garden-pot',
    'yard-bush', 'yard-flower', 'yard-rock',
    'park-ambulance', 'park-police', 'park-van', 'park-delivery',
  ]);
  const added = PROPS.filter((p) => kinds.has(p.kind));

  it('15 vật thể mới đều đăng ký collider, không chặn 75 cạnh di chuyển NPC', () => {
    expect(added).toHaveLength(15);
    expect(added.every((p) => p.collide)).toBe(true);
    expect(isConnected()).toBe(true);
    for (const p of added) {
      const box = propBox(p);
      const expanded = {
        x1: box.x1 - .36, x2: box.x2 + .36,
        z1: box.z1 - .36, z2: box.z2 + .36,
      };
      for (const [from, to] of EDGES) {
        const a = NODES[from], b = NODES[to];
        expect(segBox(a[0], a[1], b[0], b[1], expanded),
          `${p.kind} @ (${p.x}, ${p.z}) blocks ${from}->${to}`).toBe(false);
      }
      // No furniture/vehicle can physically overlap an existing prop collider.
      for (const other of PROPS) {
        if (other === p || !other.collide) continue;
        const o = propBox(other);
        const overlap = box.x1 < o.x2 && box.x2 > o.x1 &&
          box.z1 < o.z2 && box.z2 > o.z1;
        expect(overlap, `${p.kind} overlaps ${other.kind}`).toBe(false);
      }
    }
  });

  it('ship GLB 2.0 textures and all kitchen/visitation/yard/vehicle source files', () => {
    for (const model of [
      'furniture/kitchenFridge.glb', 'furniture/kitchenSink.glb',
      'furniture/kitchenStoveElectric.glb', 'furniture/loungeSofa.glb',
      'furniture/sideTable.glb', 'furniture/pottedPlant.glb',
      'nature/plant_bush.glb', 'nature/flower_redA.glb',
      'nature/flower_yellowA.glb', 'nature/rock_largeA.glb',
      'vehicles/ambulance.glb', 'vehicles/police.glb',
      'vehicles/van.glb', 'vehicles/delivery.glb',
      'characters/character-j.glb', 'characters/character-k.glb',
    ]) {
      expect(validGlb(`public/models/${model}`), model).toBe(true);
    }
    for (const texture of [
      'vehicles/Textures/colormap-vehicles.png',
      'characters/Textures/texture-j.png', 'characters/Textures/texture-k.png',
    ]) {
      expect(existsSync(`public/models/${texture}`), texture).toBe(true);
    }
  });
});


describe('Đợt 2: GLB chuyên biệt được đóng gói độc lập', () => {
  const models = [
    'prison-transfer-bus.glb', 'hospital-bed.glb',
    'workshop-drill-press.glb', 'visitation-phone.glb',
    'medical-first-aid-kit.glb',
  ];
  it('5 model GLB 2.0 hợp lệ và đúng bytes của catalog nguồn', () => {
    for (const model of models) {
      const src = 'assets/models/special/' + model;
      const runtime = 'public/models/special/' + model;
      expect(validGlb(src), src).toBe(true);
      expect(validGlb(runtime), runtime).toBe(true);
      const a = readFileSync(src), b = readFileSync(runtime);
      expect(a.equals(b), model).toBe(true);
      expect(b.readUInt32LE(8), model).toBe(b.length);
      expect(b.toString('ascii', 16, 20), model).toBe('JSON');
      const jsonBytes = b.readUInt32LE(12);
      const gltf = JSON.parse(b.subarray(20, 20 + jsonBytes).toString('utf8').trim());
      expect(gltf.asset.version).toBe('2.0');
      expect(gltf.buffers).toHaveLength(1);
      expect(gltf.buffers[0].uri).toBeUndefined();
      expect(gltf.meshes[0].primitives.length).toBeGreaterThan(0);
    }
  });
  it('không thay PROPS hoặc cắt đường đi của NPC', () => {
    expect(PROPS.some(p => p.kind === 'park-van' && p.x === 20 && p.z === 18.75)).toBe(true);
    expect(PROPS.some(p => p.kind === 'bunk' && p.x === 25.5 && p.z === -27.5)).toBe(true);
    expect(PROPS.some(p => p.kind === 'press' && p.x === 25.5 && p.z === 4.5)).toBe(true);
    expect(PROPS.some(p => p.kind === 'counter' && p.x === -24 && p.z === -9.5)).toBe(true);
    expect(isConnected()).toBe(true);
  });
});
