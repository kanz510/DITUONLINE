import { describe, it, expect } from 'vitest';
import { BUILDINGS, DOORS, PROPS, SPOTS, propBox } from '../../src/world/layout';
import { makePrisonArchitecture } from '../../src/world/architecture';

describe('VIỆC 7 — Sửa 3 lỗi hình ảnh (quầy cơm, đài quan sát, bục trắng trước cửa)', () => {
  it('7a: 2 quầy nhà ăn tồn tại đúng vị trí và kích thước trong PROPS', () => {
    const mealCounter = PROPS.find((p) => p.kind === 'counter' && Math.abs(p.x - 5) < 0.1 && Math.abs(p.z - (-30)) < 0.1);
    expect(mealCounter).toBeDefined();
    expect(mealCounter!.w).toBe(10);
    expect(mealCounter!.d).toBe(0.9);
    expect(mealCounter!.collide).toBe(true);

    const canteenCounter = PROPS.find((p) => p.kind === 'canteen' && Math.abs(p.x - 13.5) < 0.1 && Math.abs(p.z - (-31.2)) < 0.1);
    expect(canteenCounter).toBeDefined();
    expect(canteenCounter!.w).toBe(3);
    expect(canteenCounter!.d).toBe(0.8);
    expect(canteenCounter!.collide).toBe(true);

    // Kiểm tra SPOTS tương ứng tồn tại và nằm sát quầy để tương tác
    const mealSpot = SPOTS.find((s) => s.id === 'meal');
    expect(mealSpot).toBeDefined();
    expect(Math.hypot(mealSpot!.x - mealCounter!.x, mealSpot!.z - mealCounter!.z)).toBeLessThan(2.0);

    const canteenSpot = SPOTS.find((s) => s.id === 'canteen');
    expect(canteenSpot).toBeDefined();
    expect(Math.hypot(canteenSpot!.x - canteenCounter!.x, canteenSpot!.z - canteenCounter!.z)).toBeLessThan(2.0);
  });

  it('7b: chân đài và nón đài quan sát không giao với bất kỳ hộp BUILDINGS nào và không xuyên tường rào', () => {
    const towers = PROPS.filter((p) => p.kind === 'tower');
    expect(towers.length).toBe(2);

    // Ranh giới mặt trong tường rào:
    // West/East: x = -29.7 .. 29.7; North/South: z = -33.7 .. 21.7
    const fenceInner = { xMin: -29.7, xMax: 29.7, zMin: -33.7, zMax: 21.7 };

    for (const tower of towers) {
      const tb = propBox(tower);
      // Bán kính nón tối đa 1.2m, khớp chân đài 2.4m
      expect(tower.w).toBeLessThanOrEqual(2.4);
      expect(tower.d).toBeLessThanOrEqual(2.4);

      // Nằm hoàn toàn trong khuôn viên rào
      expect(tb.x1).toBeGreaterThanOrEqual(fenceInner.xMin);
      expect(tb.x2).toBeLessThanOrEqual(fenceInner.xMax);
      expect(tb.z1).toBeGreaterThanOrEqual(fenceInner.zMin);
      expect(tb.z2).toBeLessThanOrEqual(fenceInner.zMax);

      // Không giao với bất kỳ hộp tòa nhà nào trong BUILDINGS
      for (const [bName, b] of Object.entries(BUILDINGS)) {
        const overlapX = tb.x1 < b.x2 && tb.x2 > b.x1;
        const overlapZ = tb.z1 < b.z2 && tb.z2 > b.z1;
        const intersects = overlapX && overlapZ;
        expect(intersects, `Đài tại (${tower.x}, ${tower.z}) không được đè lên tòa nhà ${bName}`).toBe(false);
      }
    }
  });

  it('7c: trước cửa các phòng không còn bục/thềm bê tông chắn ngang lối đi', () => {
    const arch = makePrisonArchitecture();
    const concreteMesh = arch.root.children.find((c: any) => c.name === 'phase3.architecture.concrete') as any;
    expect(concreteMesh).toBeDefined();

    // Rà soát tất cả các cửa: không có khối bê tông nào cắt ngang vùng mở của cửa
    for (const door of DOORS) {
      const count = concreteMesh.count;
      for (let i = 0; i < count; i++) {
        // Ma trận 4x4: pos tại [12]=x, [13]=y, [14]=z; scale tại hypot các cột
        const arr = concreteMesh.instanceMatrix.array;
        const offset = i * 16;
        const px = arr[offset + 12];
        const pz = arr[offset + 14];
        const sx = Math.hypot(arr[offset], arr[offset + 1], arr[offset + 2]);
        const sz = Math.hypot(arr[offset + 8], arr[offset + 9], arr[offset + 10]);

        const boxX1 = px - sx / 2;
        const boxX2 = px + sx / 2;
        const boxZ1 = pz - sz / 2;
        const boxZ2 = pz + sz / 2;

        const doorOverlapX = boxX1 < door.box.x2 && boxX2 > door.box.x1;
        const doorOverlapZ = boxZ1 < door.box.z2 && boxZ2 > door.box.z1;
        const crossesDoor = doorOverlapX && doorOverlapZ;

        expect(crossesDoor, `Bục bê tông tại (${px}, ${pz}) không được chắn ngang cửa ${door.name}`).toBe(false);
      }
    }
  });
});
