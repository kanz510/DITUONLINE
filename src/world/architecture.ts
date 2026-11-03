import * as THREE from 'three';
import { BUILDINGS, DOORS } from './layout';

/**
 * Phase 3 architectural shell. All details are fused into instanced render-only
 * batches mounted on existing walls/roof lines. Nothing changes WALLS, PROPS,
 * collision boxes, door cutouts or NPC navigation edges.
 */
export interface ArchitectureVisuals {
  root: THREE.Group;
  fixtureMaterial: THREE.MeshStandardMaterial;
  fixtureAnchors: ReadonlyArray<{ x: number; z: number }>;
  instancedBatches: number;
  instanceCount: number;
}

type MaterialKey = 'roof' | 'trim' | 'steel' | 'concrete' | 'glass' | 'sill' | 'copper';
type DetailBox = { x: number; y: number; z: number; w: number; h: number; d: number };

const PALETTE: Record<MaterialKey, THREE.MeshStandardMaterial> = {
  roof: new THREE.MeshStandardMaterial({ color: 0x293741, metalness: 0.34, roughness: 0.62 }),
  trim: new THREE.MeshStandardMaterial({ color: 0xb0b6b2, metalness: 0.19, roughness: 0.73 }),
  steel: new THREE.MeshStandardMaterial({ color: 0x354e59, metalness: 0.73, roughness: 0.36 }),
  concrete: new THREE.MeshStandardMaterial({ color: 0x6e7977, metalness: 0.08, roughness: 0.88 }),
  glass: new THREE.MeshStandardMaterial({ color: 0x345569, metalness: 0.16, roughness: 0.25, emissive: 0x091b28, emissiveIntensity: 0.18 }),
  sill: new THREE.MeshStandardMaterial({ color: 0xb39a74, metalness: 0.11, roughness: 0.74 }),
  copper: new THREE.MeshStandardMaterial({ color: 0x638179, metalness: 0.57, roughness: 0.49 }),
};

export function makePrisonArchitecture(): ArchitectureVisuals {
  const root = new THREE.Group();
  root.name = 'phase3.architecture.render-only';
  const boxes: Record<MaterialKey, DetailBox[]> = {
    roof: [], trim: [], steel: [], concrete: [], glass: [], sill: [], copper: [],
  };
  const put = (kind: MaterialKey, x: number, y: number, z: number,
    w: number, h: number, d: number) => boxes[kind].push({ x, y, z, w, h, d });

  const fixtureMaterial = new THREE.MeshStandardMaterial({
    color: 0xf8da9a, emissive: 0xf2b95b, emissiveIntensity: 0.18,
    roughness: 0.44, metalness: 0.12,
  });
  const fixtureAnchors: { x: number; z: number }[] = [];
  const fixtureGeometry = new THREE.CylinderGeometry(0.23, 0.28, 0.1, 12);

  for (const [key, b] of Object.entries(BUILDINGS)) {
    const x = (b.x1 + b.x2) / 2;
    const z = (b.z1 + b.z2) / 2;
    const w = b.x2 - b.x1;
    const d = b.z2 - b.z1;

    // Roof edging above the original interior ceilings. No solid new ceiling
    // is introduced, avoiding a second layer of camera occlusion.
    put('roof', x, 3.77, b.z1, w + 0.24, .20, .34);
    put('roof', x, 3.77, b.z2, w + 0.24, .20, .34);
    put('roof', b.x1, 3.77, z, .34, .20, d + .24);
    put('roof', b.x2, 3.77, z, .34, .20, d + .24);
    put('trim', x, 3.53, b.z1, w, .095, .13);
    put('trim', x, 3.53, b.z2, w, .095, .13);
    put('trim', b.x1, 3.53, z, .13, .095, d);
    put('trim', b.x2, 3.53, z, .13, .095, d);

    // Painted foundation, narrow enough to remain inside old wall colliders.
    // Skip door openings so no raised concrete threshold / curb protrudes in front of doors.
    const addFoundationZ = (edgeZ: number) => {
      const doorOnEdge = DOORS.find((d) =>
        d.box.x1 >= b.x1 - 0.2 && d.box.x2 <= b.x2 + 0.2 &&
        Math.abs((d.box.z1 + d.box.z2) / 2 - edgeZ) < 0.4,
      );
      if (doorOnEdge) {
        const dx1 = Math.max(b.x1, doorOnEdge.box.x1);
        const dx2 = Math.min(b.x2, doorOnEdge.box.x2);
        const leftW = dx1 - b.x1;
        if (leftW > 0.1) {
          put('concrete', b.x1 + leftW / 2, 0.22, edgeZ, leftW, 0.44, 0.19);
        }
        const rightW = b.x2 - dx2;
        if (rightW > 0.1) {
          put('concrete', dx2 + rightW / 2, 0.22, edgeZ, rightW, 0.44, 0.19);
        }
      } else {
        put('concrete', x, 0.22, edgeZ, w, 0.44, 0.19);
      }
    };
    addFoundationZ(b.z1);
    addFoundationZ(b.z2);

    // Back walls are unbroken in the existing room layout. Windows are false
    // panels fixed to exterior faces rather than holes through solid walls.
    const backSide = (key === 'office' || key === 'classroom' ||
      key === 'discipline' || key === 'visitation') ? 1 : -1;
    const backZ = backSide > 0 ? b.z2 + .163 : b.z1 - .163;
    const panes = Math.max(1, Math.floor((w - 2.5) / 2.7));
    for (let i = 0; i < panes; i++) {
      const px = b.x1 + (i + 1) * w / (panes + 1);
      put('steel', px, 2.43, backZ, 1.12, .81, .073);
      put('glass', px, 2.43, backZ + backSide * .045, .90, .60, .032);
      put('steel', px, 2.43, backZ + backSide * .081, .055, .62, .042);
      put('steel', px, 2.43, backZ + backSide * .082, .93, .048, .042);
      put('sill', px, 1.99, backZ + backSide * .067, 1.20, .09, .16);
      put('sill', px, 2.89, backZ + backSide * .067, 1.20, .08, .13);
    }

    // Downpipes, roof maintenance boxes and copper drain collars.
    for (const side of [-1, 1]) {
      const sx = side < 0 ? b.x1 + .16 : b.x2 - .16;
      put('copper', sx, 1.71, backZ, .065, 3.12, .07);
      put('copper', sx, .14, backZ, .15, .13, .10);
    }
    put('roof', x + Math.min(w * .2, 2), 4.03, z, .65, .40, .56);
    put('steel', x + Math.min(w * .2, 2), 4.10, z + .30, .52, .17, .07);

    // Interior ceiling fixtures: 1 mesh each, no new ground collision.
    const fixture = new THREE.Mesh(fixtureGeometry, fixtureMaterial);
    fixture.position.set(x, 3.39, z);
    fixture.name = 'phase3.ceiling-lamp.' + key;
    fixture.castShadow = false;
    root.add(fixture);
    fixtureAnchors.push({ x, z });
  }

  const unitCube = new THREE.BoxGeometry(1, 1, 1);
  const dummy = new THREE.Object3D();
  let count = 0;
  let batches = 0;
  for (const key of Object.keys(boxes) as MaterialKey[]) {
    const records = boxes[key];
    if (!records.length) continue;
    const mesh = new THREE.InstancedMesh(unitCube, PALETTE[key], records.length);
    mesh.name = 'phase3.architecture.' + key;
    mesh.castShadow = key !== 'glass' && key !== 'trim';
    mesh.receiveShadow = true;
    for (let i = 0; i < records.length; i++) {
      const p = records[i];
      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(p.w, p.h, p.d);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingSphere();
    root.add(mesh);
    count += records.length;
    batches++;
  }
  return { root, fixtureMaterial, fixtureAnchors, instancedBatches: batches, instanceCount: count };
}
