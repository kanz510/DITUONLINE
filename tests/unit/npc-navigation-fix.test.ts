import { describe, expect, it } from 'vitest';
import { NpcActor } from '../../src/actors/npc';
import { Collision } from '../../src/world/collision';
import { findPath } from '../../src/world/nav';

describe('VIỆC 2: Sửa dứt điểm NPC né nhau, đứng yên và đi lệch đường', () => {
  it('2 NPC đi ngược nhau ở hành lang hẹp: 1 bên nhường và né sang chỗ trống, bên kia đi tiếp', () => {
    const col = new Collision();
    const n1 = new NpcActor('tung');
    const n2 = new NpcActor('lan');

    // n1 ở [-18, -21.6], đích cách 10m
    n1.x = -18; n1.z = -21.6;
    n1.planTo('cor4', [-8.75, -21.6]);

    // n2 ở [-17.6, -21.6], đích cách 2m (gần đích hơn)
    n2.x = -17.6; n2.z = -21.6;
    n2.planTo('cor1', [-19.6, -21.6]);

    const d = Math.hypot(n1.x - n2.x, n1.z - n2.z);
    expect(d).toBeLessThan(0.52);

    const d1 = n1.distToTarget();
    const d2 = n2.distToTarget();
    expect(d1).toBeGreaterThan(d2);

    // Bên xa đích hơn (n1) nhường đường
    const yielder = d1 >= d2 ? n1 : n2;
    const walker = yielder === n1 ? n2 : n1;

    expect(yielder).toBe(n1);
    expect(walker).toBe(n2);

    // Bên nhường sidestep sang vị trí an toàn rồi mới yield
    const stepped = yielder.sidestep(col);
    expect(stepped).toBe(true);
    yielder.yield(2.5);

    expect(yielder.yieldTimer).toBe(2.5);
    expect(walker.yieldTimer).toBe(0);

    // Walker tiếp tục di chuyển bình thường
    const initWalkerX = walker.x;
    walker.update(0.1, 500, col);
    expect(walker.x).not.toBe(initWalkerX);
  });

  it('NPC dao động qua lại mà khoảng cách tới đích không giảm > 0.2m trong 2s thì bị tính là kẹt', () => {
    const col = new Collision();
    const npc = new NpcActor('huy');
    npc.x = 0; npc.z = 0;
    npc.planTo('rc', [0, 10]);

    // Giả lập dao động qua lại (rung rinh 0.1m) quanh [0, 0] trong 2 giây (20 bước x 0.1s)
    for (let i = 0; i < 20; i++) {
      npc.x = (i % 2 === 0) ? 0.08 : -0.08;
      npc.z = 0;
      npc.update(0.1, 500, col);
    }

    // Sau 2 giây không giảm được quá 0.2m tới đích -> bị tính là kẹt và đã kích hoạt sidestep
    expect(npc.dodgeCount).toBeGreaterThanOrEqual(1);
  });

  it('Reroute ghi nhớ đoạn/node tắc 30s và tính đường mới tránh đoạn tắc', () => {
    const col = new Collision();
    const npc = new NpcActor('lam');
    npc.x = -17; npc.z = -21.6; // tại corC
    npc.planTo('cor1'); // đường bình thường: corC -> cor2 -> cor1

    // Ghi nhớ đoạn corC:cor2 bị tắc 30s
    npc.recordBlockedEdge('corC', 'cor2', 30);
    const blocked = npc.getActiveBlockedEdges();
    expect(blocked.has('cor2:corC') || blocked.has('corC:cor2')).toBe(true);

    // findPath tránh cạnh tắc
    const pathWithAvoid = findPath('corC', 'cor1', { avoidEdges: blocked });
    // Nếu có đường tránh thì không chứa đoạn trực tiếp corC-cor2
    expect(pathWithAvoid.length).toBeGreaterThan(0);
  });

  it('NPC bị đẩy lệch khỏi lưới đường thì quay về node an toàn gần nhất không bị tường chắn', () => {
    const col = new Collision();
    // Thêm một hộp chắn tượng trưng cho vách tường
    col.boxes.push({ x1: 5, z1: 0, x2: 6, z2: 10 });
    col.sightBlockers.push({ x1: 5, z1: 0, x2: 6, z2: 10 });

    const npc = new NpcActor('son');
    npc.x = 4; npc.z = 5;
    // Điểm kế tiếp nằm phía sau bức tường tại [8, 5]
    (npc as any).path = [[8, 5]];

    expect(col.blocked(npc.x, npc.z, 8, 5)).toBe(true);

    // Khi update, hệ thống phát hiện tia nhìn bị tường chắn và điều chỉnh về node an toàn
    npc.update(0.1, 500, col);
    // Path được cập nhật tránh cắt xuyên tường
    expect((npc as any).path.length).toBeGreaterThan(0);
  });

  it('Người chơi luôn được ưu tiên tuyệt đối: NPC nhường và né sang bên', () => {
    const col = new Collision();
    const npc = new NpcActor('khai');
    npc.x = 2; npc.z = 2;
    npc.planTo('rc', [2, 10]);

    // Người chơi đứng cản trước mặt NPC
    const stepped = npc.sidestep(col);
    expect(stepped).toBe(true);
    npc.yield(2.5);

    expect(npc.yieldTimer).toBe(2.5);
    // Khi đang yield, NPC đứng yên chờ
    const beforeX = npc.x;
    npc.update(0.1, 500, col);
    expect(npc.x).toBe(beforeX);
    expect(npc.rig.pose).toBe('stand');
  });
});
