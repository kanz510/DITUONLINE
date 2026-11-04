import { NPCS, slotFor, type NpcDef, type ScheduleSlot } from '../data/npcs';
import type { NpcId } from '../logic/state';
import { Collision } from '../world/collision';
import { NODES } from '../world/layout';
import { findPath, nearestNode } from '../world/nav';
import { HumanoidRig } from './humanoid';

// Stable badge seeds only; all NPCs, including officers, use procedural chibi visuals.
const NPC_MODEL_SKINS: Record<NpcId, string> = {
  bay: 'g', huy: 'a', lam: 'c',
  lan: 'q', tung: 'q', tu: 'b', // same visual branch as Thầy Phúc; no Kenney replacement
  son: 'd', khai: 'e', phuc: 'q',
  an: 'i', mai: 'l',
};

export class NpcActor {
  def: NpcDef;
  rig: HumanoidRig;
  x = 0;
  z = 0;
  rot = 0;
  speed = 3.2;
  state: 'walk' | 'activity' | 'talk' | 'patrol' = 'activity';
  activity = '';
  yieldTimer = 0;
  yieldCooldown = 0;
  blockedTimer = 0;
  dodgeCount = 0;
  bubbleTimer = 0;
  barkTimer = 25 + Math.random() * 20;
  currentBark: string | null = null;
  guardDisciplineTimer = 40 + Math.random() * 30;
  private progressTimer = 0;
  private progressLastDist = Infinity;
  private blockedEdges = new Map<string, number>();
  private path: [number, number][] = [];
  private slot: ScheduleSlot | null = null;
  private patrolIdx = 0;
  private patrolWait = 0;

  constructor(id: NpcId) {
    this.def = NPCS[id];
    this.rig = new HumanoidRig(this.def.look, this.def.name, NPC_MODEL_SKINS[id]);
  }

  isMoving(): boolean {
    return this.path.length > 0;
  }

  targetPos(): [number, number] | null {
    if (this.path.length === 0) return null;
    return this.path[this.path.length - 1];
  }

  distToTarget(): number {
    const t = this.targetPos();
    if (!t) return 0;
    return Math.hypot(t[0] - this.x, t[1] - this.z);
  }

  yield(seconds = 2.5, force = false) {
    if (!force && this.yieldCooldown > 0) return;
    this.yieldTimer = Math.max(this.yieldTimer, Math.min(3.0, seconds));
    this.yieldCooldown = 3.5;
  }

  recordBlockedEdge(nodeA: string, nodeB: string, duration = 30) {
    const now = (typeof performance !== 'undefined' ? performance.now() : Date.now()) / 1000;
    const key = nodeA < nodeB ? `${nodeA}:${nodeB}` : `${nodeB}:${nodeA}`;
    this.blockedEdges.set(key, now + duration);
  }

  getActiveBlockedEdges(): Set<string> {
    const now = (typeof performance !== 'undefined' ? performance.now() : Date.now()) / 1000;
    const set = new Set<string>();
    for (const [key, exp] of this.blockedEdges.entries()) {
      if (exp > now) set.add(key);
      else this.blockedEdges.delete(key);
    }
    return set;
  }

  sidestep(col?: Collision): boolean {
    if (this.path.length === 0) return false;
    const [tx, tz] = this.path[0];
    const dx = tx - this.x;
    const dz = tz - this.z;
    const d = Math.hypot(dx, dz);
    if (d < 1e-4) return false;
    const ux = dx / d;
    const uz = dz / d;

    // Vuông góc 90 độ hai bên (+0.6m) hoặc lùi chéo (+0.6m)
    const perpA: [number, number] = [-uz * 0.6, ux * 0.6];
    const perpB: [number, number] = [uz * 0.6, -ux * 0.6];
    const canA = !col || col.canPlace(this.x + perpA[0], this.z + perpA[1], 0.28);
    const canB = !col || col.canPlace(this.x + perpB[0], this.z + perpB[1], 0.28);

    const chosen = canA ? perpA : canB ? perpB : null;
    if (chosen && this.dodgeCount < 2) {
      this.dodgeCount++;
      const nx = this.x + chosen[0];
      const nz = this.z + chosen[1];
      this.path.unshift([nx, nz]);
      this.blockedTimer = 0;
      return true;
    }

    // Thử né lùi chéo nếu hai bên thẳng đều kẹt
    const candidates: [number, number][] = [
      [-uz * 0.45 - ux * 0.35, ux * 0.45 - uz * 0.35],
      [uz * 0.45 - ux * 0.35, -ux * 0.45 - uz * 0.35],
    ];
    for (const cand of candidates) {
      const nx = this.x + cand[0];
      const nz = this.z + cand[1];
      if (!col || col.canPlace(nx, nz, 0.28)) {
        this.dodgeCount++;
        this.path.unshift([nx, nz]);
        this.blockedTimer = 0;
        return true;
      }
    }
    return false;
  }

  rerouteViaAlternate(col?: Collision) {
    const curNearest = nearestNode(this.x, this.z);
    let nextNode = '';
    if (this.path.length > 0) {
      nextNode = nearestNode(this.path[0][0], this.path[0][1]);
    }
    if (curNearest && nextNode && curNearest !== nextNode) {
      this.recordBlockedEdge(curNearest, nextNode, 30);
    }

    const avoid = this.getActiveBlockedEdges();
    const targetNode = this.slot?.node ?? curNearest;
    const targetPos = this.slot?.pos ?? (this.path.length > 0 ? this.path[this.path.length - 1] : undefined);

    const nodes = findPath(curNearest, targetNode, { avoidEdges: avoid });
    this.path = nodes.map((n) => [...NODES[n]] as [number, number]);
    if (targetPos) this.path.push([targetPos[0], targetPos[1]]);

    while (this.path.length > 1 && Math.hypot(this.path[0][0] - this.x, this.path[0][1] - this.z) < 0.6) {
      this.path.shift();
    }
    this.blockedTimer = 0;
    this.dodgeCount = 0;
  }

  noteBlocked(dt: number, col?: Collision) {
    if (!this.isMoving()) return;
    this.blockedTimer += dt;
    if (this.blockedTimer >= 6.0) {
      this.rerouteViaAlternate(col);
    } else if (this.blockedTimer >= 1.5 && this.dodgeCount < 2) {
      const dodged = this.sidestep(col);
      if (!dodged) this.rerouteViaAlternate(col);
    }
  }

  clearBark() {
    this.bubbleTimer = 0;
    this.currentBark = null;
    this.rig.showSpeechBubble(null);
  }

  sayBark(text: string, duration = 4.0) {
    this.currentBark = text;
    this.bubbleTimer = duration;
    this.rig.showSpeechBubble(text);
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
    this.yieldTimer = 0;
    this.yieldCooldown = 0;
    this.blockedTimer = 0;
    this.dodgeCount = 0;
    this.progressTimer = 0;
    this.progressLastDist = Infinity;
    this.syncMesh();
  }

  planTo(node: string, finalPos?: [number, number], startNode?: string) {
    const validTarget = NODES[node] ? node : nearestNode(this.x, this.z);
    const start = (startNode && NODES[startNode]) ? startNode : nearestNode(this.x, this.z);
    const nodes = findPath(start, validTarget);
    this.path = nodes.filter((n) => Boolean(NODES[n])).map((n) => [...NODES[n]] as [number, number]);
    if (finalPos) this.path.push([finalPos[0], finalPos[1]]);
    // Bỏ bớt điểm đầu nếu đã đứng sát
    while (this.path.length > 1 && Math.hypot(this.path[0][0] - this.x, this.path[0][1] - this.z) < 0.6) {
      this.path.shift();
    }
    this.dodgeCount = 0;
    this.blockedTimer = 0;
    this.progressTimer = 0;
    this.progressLastDist = this.distToTarget();
  }

  update(dt: number, minute: number, col?: Collision) {
    if (this.bubbleTimer > 0) {
      this.bubbleTimer -= dt;
      if (this.bubbleTimer <= 0) {
        this.clearBark();
      }
    }

    if (this.state === 'talk') {
      this.rig.pose = 'talk';
      this.rig.update(dt, 0);
      this.syncMesh();
      return;
    }

    if (this.yieldCooldown > 0) {
      this.yieldCooldown -= dt;
    }

    if (this.yieldTimer > 0) {
      this.yieldTimer -= dt;
      this.rig.pose = 'stand';
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
      // Đo kẹt theo TIẾN ĐỘ: Cứ mỗi 2 giây kiểm tra khoảng cách tới đích
      this.progressTimer += dt;
      if (this.progressTimer >= 2.0) {
        const curDist = this.distToTarget();
        if (this.progressLastDist - curDist < 0.2) {
          // Không tiến được quá 0.2m trong 2s -> Kẹt (kể cả khi bị đẩy dao động)
          this.blockedTimer += 2.0;
          if (this.dodgeCount < 2) {
            const dodged = this.sidestep(col);
            if (!dodged) {
              this.rerouteViaAlternate(col);
            }
          } else {
            this.rerouteViaAlternate(col);
          }
        } else {
          this.blockedTimer = Math.max(0, this.blockedTimer - 1.0);
        }
        this.progressLastDist = curDist;
        this.progressTimer = 0;
      }

      // Sửa đi lệch đường: nếu bị đẩy lệch khỏi lưới và tia tới path[0] bị tường/vật cản chặn
      if (col && this.path.length > 0 && col.blocked(this.x, this.z, this.path[0][0], this.path[0][1])) {
        const safeNode = nearestNode(this.x, this.z, (nid) => !col.blocked(this.x, this.z, NODES[nid][0], NODES[nid][1]));
        if (safeNode && NODES[safeNode]) {
          const targetNode = this.slot?.node ?? safeNode;
          const targetPos = this.slot?.pos;
          const avoid = this.getActiveBlockedEdges();
          const subNodes = findPath(safeNode, targetNode, { avoidEdges: avoid });
          this.path = subNodes.map((n) => [...NODES[n]] as [number, number]);
          if (targetPos) this.path.push([targetPos[0], targetPos[1]]);
        }
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
          const nx = this.x + (dx / d) * step;
          const nz = this.z + (dz / d) * step;
          if (!col || col.canPlace(nx, nz, 0.26)) {
            this.x = nx;
            this.z = nz;
            this.rot = Math.atan2(dx, dz);
          } else {
            // Thử trượt theo hộp va chạm
            if (col) {
              const [sx, sz] = col.move(this.x, this.z, (dx / d) * step, (dz / d) * step, 0.26);
              if (Math.hypot(sx - this.x, sz - this.z) > 0.005) {
                this.x = sx;
                this.z = sz;
                this.rot = Math.atan2(dx, dz);
              } else {
                this.noteBlocked(dt, col);
              }
            } else {
              this.noteBlocked(dt, col);
            }
          }
        }
        this.rig.pose = 'walk';
        this.rig.update(dt, this.speed);
      }
    } else if (sl.patrol && sl.patrol.length > 0) {
      this.progressTimer = 0;
      this.blockedTimer = 0;
      this.dodgeCount = 0;
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
      this.progressTimer = 0;
      this.blockedTimer = 0;
      this.dodgeCount = 0;
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

  moveTo(x: number, z: number, rot: number) {
    this.x = x;
    this.z = z;
    this.rot = rot;
    this.syncMesh();
  }

  private syncMesh() {
    this.rig.root.position.set(this.x, 0, this.z);
    this.rig.root.rotation.y = this.rot;
  }
}
