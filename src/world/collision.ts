import type { Box } from './layout';

export class Collision {
  boxes: Box[] = [];
  sightBlockers: Box[] = [];
  dynamic: () => Box[] = () => [];

  /** Di chuyển hình tròn bán kính r, đẩy ra khỏi các hộp va chạm. */
  move(x: number, z: number, dx: number, dz: number, r: number): [number, number] {
    let nx = x + dx;
    let nz = z + dz;
    const all = this.boxes.concat(this.dynamic());
    for (let iter = 0; iter < 3; iter++) {
      let moved = false;
      for (const b of all) {
        if (nx < b.x1 - r || nx > b.x2 + r || nz < b.z1 - r || nz > b.z2 + r) continue;
        const cx = Math.max(b.x1, Math.min(nx, b.x2));
        const cz = Math.max(b.z1, Math.min(nz, b.z2));
        let ddx = nx - cx;
        let ddz = nz - cz;
        const d2 = ddx * ddx + ddz * ddz;
        if (d2 >= r * r) continue;
        if (d2 < 1e-8) {
          // tâm nằm trong hộp: đẩy theo trục gần nhất
          const pen = [nx - b.x1, b.x2 - nx, nz - b.z1, b.z2 - nz];
          const m = Math.min(...pen);
          if (m === pen[0]) nx = b.x1 - r;
          else if (m === pen[1]) nx = b.x2 + r;
          else if (m === pen[2]) nz = b.z1 - r;
          else nz = b.z2 + r;
        } else {
          const d = Math.sqrt(d2);
          const push = r - d;
          ddx /= d;
          ddz /= d;
          nx += ddx * push;
          nz += ddz * push;
        }
        moved = true;
      }
      if (!moved) break;
    }
    return [nx, nz];
  }

  /** Đoạn thẳng có bị tường chắn không (dùng cho tầm nhìn). */
  blocked(ax: number, az: number, bx: number, bz: number): boolean {
    for (const b of this.sightBlockers) if (segBox(ax, az, bx, bz, b)) return true;
    return false;
  }
}

export function segBox(ax: number, az: number, bx: number, bz: number, b: Box): boolean {
  let t0 = 0;
  let t1 = 1;
  const dx = bx - ax;
  const dz = bz - az;
  const p = [-dx, dx, -dz, dz];
  const q = [ax - b.x1, b.x2 - ax, az - b.z1, b.z2 - az];
  for (let i = 0; i < 4; i++) {
    if (Math.abs(p[i]) < 1e-9) {
      if (q[i] < 0) return false;
    } else {
      const t = q[i] / p[i];
      if (p[i] < 0) {
        if (t > t1) return false;
        if (t > t0) t0 = t;
      } else {
        if (t < t0) return false;
        if (t < t1) t1 = t;
      }
    }
  }
  return t0 <= t1;
}
