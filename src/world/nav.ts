import { EDGES, NODES } from './layout';

const adj: Record<string, string[]> = {};
for (const [a, b] of EDGES) {
  (adj[a] ??= []).push(b);
  (adj[b] ??= []).push(a);
}

function dist(a: string, b: string) {
  const [ax, az] = NODES[a];
  const [bx, bz] = NODES[b];
  return Math.hypot(ax - bx, az - bz);
}

export function nearestNode(x: number, z: number, filter?: (id: string) => boolean): string {
  let best = '';
  let bd = Infinity;
  for (const id of Object.keys(NODES)) {
    if (filter && !filter(id)) continue;
    const [nx, nz] = NODES[id];
    const d = (nx - x) ** 2 + (nz - z) ** 2;
    if (d < bd) {
      bd = d;
      best = id;
    }
  }
  return best;
}

export interface PathOptions {
  avoidEdges?: Set<string>;
  avoidNodes?: Set<string>;
}

/** A* trên đồ thị điểm mốc, hỗ trợ tránh các cạnh/node đang tắc. */
export function findPath(from: string, to: string, options?: PathOptions): string[] {
  if (from === to) return [to];
  const open = new Set([from]);
  const came: Record<string, string> = {};
  const g: Record<string, number> = { [from]: 0 };
  const f: Record<string, number> = { [from]: dist(from, to) };
  while (open.size) {
    let cur = '';
    let bf = Infinity;
    for (const n of open) if ((f[n] ?? Infinity) < bf) { bf = f[n]; cur = n; }
    if (cur === to) {
      const path = [cur];
      while (came[cur]) { cur = came[cur]; path.unshift(cur); }
      return path;
    }
    open.delete(cur);
    for (const nb of adj[cur] ?? []) {
      if (options?.avoidNodes?.has(nb) && nb !== to) continue;
      const edgeKey1 = `${cur}:${nb}`;
      const edgeKey2 = `${nb}:${cur}`;
      if (options?.avoidEdges && (options.avoidEdges.has(edgeKey1) || options.avoidEdges.has(edgeKey2))) continue;

      const tg = g[cur] + dist(cur, nb);
      if (tg < (g[nb] ?? Infinity)) {
        came[nb] = cur;
        g[nb] = tg;
        f[nb] = tg + dist(nb, to);
        open.add(nb);
      }
    }
  }
  // Nếu có options mà không tìm thấy đường, thử lại không có options để tránh kẹt
  if (options && ((options.avoidEdges && options.avoidEdges.size > 0) || (options.avoidNodes && options.avoidNodes.size > 0))) {
    return findPath(from, to);
  }
  return [to];
}

export function isConnected(): boolean {
  const ids = Object.keys(NODES);
  const seen = new Set<string>([ids[0]]);
  const st = [ids[0]];
  while (st.length) {
    const c = st.pop()!;
    for (const n of adj[c] ?? []) if (!seen.has(n)) { seen.add(n); st.push(n); }
  }
  return seen.size === ids.length;
}
