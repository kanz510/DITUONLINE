import { NPCS, slotFor, type NpcDef, type ScheduleSlot } from '../data/npcs';
import type { NpcId } from '../logic/state';
import { Collision } from '../world/collision';
import { NODES } from '../world/layout';
import { findPath, nearestNode } from '../world/nav';
import { HumanoidRig } from './humanoid';

export class NpcActor {
  def: NpcDef;
  rig: HumanoidRig;
  x = 0;
  z = 0;
  rot = 0;
  speed = 3.2;
  state: 'walk' | 'activity' | 'talk' | 'patrol' = 'activity';
  activity = '';
  private path: [number, number][] = [];
  private slot: ScheduleSlot | null = null;
  private patrolIdx = 0;
  private patrolWait = 0;

  constructor(id: NpcId) {
    this.def = NPCS[id];
    this.rig = new HumanoidRig(this.def.look, this.def.name);
  }

  /** Đặt thẳng tới vị trí theo giờ hiện tại (khi mới vào ngày / sau khi tua giờ). */
  snapToSchedule(minute: number) {
    const sl = slotFor(this.def, minute);
    this.slot = sl;
    const p = sl.pos ?? NODES[sl.node];
    this.x = p[0];
    this.z = p[1];
    this.rot = sl.rot ?? 0;
    this.path = [];
    this.activity = sl.activity;
    this.state = sl.patrol ? 'patrol' : 'activity';
    this.rig.pose = sl.pose;
    this.syncMesh();
  }

  private planTo(node: string, finalPos?: [number, number]) {
    const start = nearestNode(this.x, this.z);
    const nodes = findPath(start, node);
    this.path = nodes.map((n) => [...NODES[n]] as [number, number]);
    if (finalPos) this.path.push([finalPos[0], finalPos[1]]);
    // Bỏ bớt điểm đầu nếu đã đứng sát
    while (this.path.length > 1 && Math.hypot(this.path[0][0] - this.x, this.path[0][1] - this.z) < 0.6) {
      this.path.shift();
    }
  }

  update(dt: number, minute: number) {
    if (this.state === 'talk') {
      this.rig.pose = 'talk';
      this.rig.update(dt, 0);
      this.syncMesh();
      return;
    }

    const sl = slotFor(this.def, minute);
    if (sl !== this.slot) {
      this.slot = sl;
      this.activity = sl.activity;
      this.patrolIdx = 0;
      this.planTo(sl.node, sl.pos);
      this.state = 'walk';
    }

    if (this.path.length > 0) {
      const [tx, tz] = this.path[0];
      const dx = tx - this.x;
      const dz = tz - this.z;
      const d = Math.hypot(dx, dz);
      const step = this.speed * dt;
      if (d <= Math.max(0.12, step)) {
        this.x = tx;
        this.z = tz;
        this.path.shift();
      } else {
        this.x += (dx / d) * step;
        this.z += (dz / d) * step;
        this.rot = Math.atan2(dx, dz);
      }
      this.rig.pose = 'walk';
      this.rig.update(dt, this.speed);
    } else if (sl.patrol && sl.patrol.length > 0) {
      this.state = 'patrol';
      this.patrolWait -= dt;
      if (this.patrolWait <= 0) {
        this.patrolIdx = (this.patrolIdx + 1) % sl.patrol.length;
        this.planTo(sl.patrol[this.patrolIdx]);
        this.patrolWait = 3.5;
      } else {
        this.rig.pose = 'stand';
        this.rig.update(dt, 0);
      }
    } else {
      this.state = 'activity';
      if (sl.rot !== undefined) this.rot = sl.rot;
      this.rig.pose = sl.pose;
      this.rig.update(dt, 0);
    }
    this.syncMesh();
  }

  faceToward(px: number, pz: number) {
    this.rot = Math.atan2(px - this.x, pz - this.z);
    this.syncMesh();
  }

  /** Kiểm tra NPC có nhìn thấy điểm (px,pz) trong hình nón tầm nhìn & không bị tường chắn. */
  canSee(px: number, pz: number, col: Collision, range = 9.5, fov = 1.15): boolean {
    const dx = px - this.x;
    const dz = pz - this.z;
    const d = Math.hypot(dx, dz);
    if (d > range) return false;
    const fx = Math.sin(this.rot);
    const fz = Math.cos(this.rot);
    const dot = (dx * fx + dz * fz) / Math.max(1e-5, d);
    if (dot < Math.cos(fov * 0.5)) return false;
    return !col.blocked(this.x, this.z, px, pz);
  }

  private syncMesh() {
    this.rig.root.position.set(this.x, 0, this.z);
    this.rig.root.rotation.y = this.rot;
  }
}
