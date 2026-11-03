import { describe, it, expect } from 'vitest';
import { PrisonWorld } from '../../src/world/builder';
import { Collision } from '../../src/world/collision';
import { DOORS, zonesAt } from '../../src/world/layout';
import { NPCS } from '../../src/data/npcs';
import { NpcActor } from '../../src/actors/npc';
import { speechEngine } from '../../src/core/speech';
import * as THREE from 'three';

describe('VIỆC 8 — 1-way doors, NPC barks and guard discipline', () => {
  it('8a: closed door allows 1-way exit when actor is inside the area, but blocks entry from outside', () => {
    const scene = new THREE.Scene();
    const collision = new Collision();
    const builder = new PrisonWorld(scene, collision);

    // Workshop door area is 'workshop'. Let's simulate workshop is closed.
    const isOpenFn = (area: string) => area !== 'workshop';

    // 1. Outside yard [0, 0]: door box MUST be closed
    const closedFromOutside = builder.updateDoors(isOpenFn, 0, 0);
    const workshopDoorDef = DOORS.find((d) => d.area === 'workshop')!;
    expect(closedFromOutside).toContainEqual(workshopDoorDef.box);

    // 2. Inside workshop [16, 0]: actor is in 'workshop' zone -> door box MUST NOT block exit
    const closedFromInside = builder.updateDoors(isOpenFn, 16, 0);
    expect(closedFromInside).not.toContainEqual(workshopDoorDef.box);

    // 3. Collision dynamic callback respects actor position
    collision.dynamic = (ax, az) => builder.updateDoors(isOpenFn, ax, az);
    // Can move freely towards door while inside
    const movedInside = collision.move(12.5, -2.75, -0.6, 0, 0.3);
    expect(movedInside[0]).toBeLessThan(12.5);
  });

  it('8b: all NPCs have authentic barks and NpcActor handles sayBark and clearBark', () => {
    // Every NPC has barks defined
    for (const [id, def] of Object.entries(NPCS)) {
      expect(def.barks).toBeDefined();
      expect(def.barks!.length).toBeGreaterThanOrEqual(3);
      for (const bark of def.barks!) {
        expect(bark.length).toBeGreaterThan(5);
        expect(bark.length).toBeLessThan(100);
      }
    }

    const bay = new NpcActor('bay');
    expect(bay.bubbleTimer).toBe(0);
    expect(bay.currentBark).toBeNull();

    bay.sayBark('Rang giu minh nghen con', 4.0);
    expect(bay.bubbleTimer).toBe(4.0);
    expect(bay.currentBark).toBe('Rang giu minh nghen con');

    bay.clearBark();
    expect(bay.bubbleTimer).toBe(0);
    expect(bay.currentBark).toBeNull();
  });

  it('8b: speechEngine can be enabled/disabled and handles calls gracefully without browser APIs', () => {
    expect(speechEngine.isEnabled()).toBe(true);
    speechEngine.speak('Test speech', 0.8);
    speechEngine.stop();

    speechEngine.setEnabled(false);
    expect(speechEngine.isEnabled()).toBe(false);
    speechEngine.speak('Test speech', 0.8);

    speechEngine.setEnabled(true);
    expect(speechEngine.isEnabled()).toBe(true);
  });

  it('8c: guard actors have guardDisciplineTimer and proper inmate targets exist', () => {
    const lan = new NpcActor('lan');
    const tung = new NpcActor('tung');
    expect(lan.guardDisciplineTimer).toBeGreaterThanOrEqual(40);
    expect(tung.guardDisciplineTimer).toBeGreaterThanOrEqual(40);

    const inmateIds = ['tu', 'son', 'khai', 'huy', 'bay', 'lam'];
    for (const id of inmateIds) {
      expect(NPCS[id as keyof typeof NPCS]).toBeDefined();
    }
  });
});
