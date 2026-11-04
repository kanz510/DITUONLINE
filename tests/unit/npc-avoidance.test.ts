import { describe, expect, it } from 'vitest';
import { NpcActor } from '../../src/actors/npc';
import { Collision } from '../../src/world/collision';

describe('VIỆC 1: NPC tránh kẹt, nhường đường và né cản', () => {
  it('2 NPC đi ngược nhau ở hành lang: bên xa đích hơn dừng chờ tối đa 3s cho bên kia qua', () => {
    const n1 = new NpcActor('tung');
    const n2 = new NpcActor('lan');

    // Giả lập n1 ở [0, 0] đang đi tới [0, 10] (cách đích 10m)
    n1.x = 0; n1.z = 0;
    n1.planTo('rc', [0, 10]);

    // Giả lập n2 ở [0, 0.4] đang đi tới [0, -2] (cách đích 2.4m)
    n2.x = 0; n2.z = 0.4;
    n2.planTo('rc', [0, -2]);

    expect(n1.isMoving()).toBe(true);
    expect(n2.isMoving()).toBe(true);

    const d1 = n1.distToTarget();
    const d2 = n2.distToTarget();
    expect(d1).toBeGreaterThan(d2);

    // Xử lý cản nhau khi khoảng cách < 0.52m
    const d = Math.hypot(n1.x - n2.x, n1.z - n2.z);
    expect(d).toBeLessThan(0.52);

    if (d1 >= d2) {
      n1.yield(3.0);
    } else {
      n2.yield(3.0);
    }

    expect(n1.yieldTimer).toBe(3.0);
    expect(n2.yieldTimer).toBe(0);

    // Khi n1 đang yield, update n1 không di chuyển mà đứng chờ
    const beforeX = n1.x, beforeZ = n1.z;
    n1.update(0.5, 500);
    expect(n1.x).toBe(beforeX);
    expect(n1.z).toBe(beforeZ);
    expect(n1.rig.pose).toBe('stand');
  });

  it('NPC luôn nhường người chơi khi va chạm/cản đường', () => {
    const npc = new NpcActor('huy');
    npc.x = 2; npc.z = 2;
    npc.planTo('rc', [2, 10]);

    // Người chơi áp sát NPC (< 0.52m)
    const px = 2, pz = 2.3;
    const d = Math.hypot(px - npc.x, pz - npc.z);
    expect(d).toBeLessThan(0.52);

    // Hệ thống kích hoạt nhường người chơi
    npc.yield(3.0);
    expect(npc.yieldTimer).toBeGreaterThanOrEqual(2.0);

    // NPC dừng lại chờ người chơi
    npc.update(0.1, 500);
    expect(npc.rig.pose).toBe('stand');
  });

  it('NPC có đích mà 2 giây không tiến được quá 0.2m thì kích hoạt né vuông góc 0.6m', () => {
    const col = new Collision();
    const npc = new NpcActor('tu');
    npc.x = 5; npc.z = 5;
    // Đi theo hướng +Z tới [5, 10]
    npc.planTo('rc', [5, 10]);
    expect(npc.isMoving()).toBe(true);

    const initPathLen = (npc as any).path.length;

    // Giả lập 2 giây bị kẹt tại chỗ (ví dụ vật cản chặn lại khiến moveTo không tiến)
    for (let i = 0; i < 20; i++) {
      // NPC bị giữ nguyên tại [5, 5]
      npc.x = 5; npc.z = 5;
      npc.update(0.1, 500, col);
    }

    // Đã kích hoạt sidestep: thêm 1 điểm né vuông góc vào đầu path
    expect(npc.dodgeCount).toBe(1);
    const newPath = (npc as any).path;
    expect(newPath.length).toBeGreaterThan(initPathLen);

    // Điểm né lệch sang bên vuông góc khoảng ~0.6m (dx ~ 0.6m)
    const [dodgeX, dodgeZ] = newPath[0];
    const dodgeDist = Math.hypot(dodgeX - 5, dodgeZ - 5);
    expect(dodgeDist).toBeCloseTo(0.6, 1);
  });

  it('NPC bị chặn quá 1.5s né tối đa 2 lần, bị chặn quá 10s đổi tuyến qua nav node gần nhất', () => {
    const col = new Collision();
    const npc = new NpcActor('phuc');
    npc.x = 10; npc.z = 10;
    npc.planTo('rc', [10, 20]);

    // Bị chặn 1.6 giây -> né lần 1
    npc.noteBlocked(1.6, col);
    expect(npc.dodgeCount).toBe(1);

    // Bị chặn thêm 1.6 giây -> né lần 2
    npc.noteBlocked(1.6, col);
    expect(npc.dodgeCount).toBe(2);

    // Né tối đa 2 lần, bị chặn tiếp không tăng dodgeCount nữa
    npc.noteBlocked(1.6, col);
    expect(npc.dodgeCount).toBe(2);

    // Bị chặn quá 10 giây -> kích hoạt rerouteViaAlternate
    npc.noteBlocked(10.5, col);
    expect(npc.dodgeCount).toBe(0); // reset sau khi đổi tuyến
    expect(npc.blockedTimer).toBe(0);
  });
});
