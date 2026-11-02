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
