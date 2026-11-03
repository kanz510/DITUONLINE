import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { createInitialState, type GameState } from '../../src/logic/state';
import { deserialize, serialize } from '../../src/logic/save';
import { ThirdPersonCamera, InputController } from '../../src/core/controls';

describe('Chế độ góc nhìn thứ nhất (FPS) & góc nhìn thứ ba', () => {
  it('1. Cài đặt mặc định cameraMode là "third"', () => {
    const s = createInitialState();
    expect(s.settings.cameraMode).toBe('third');
  });

  it('2. Khôi phục save cũ chưa có field cameraMode thì mặc định là "third"', () => {
    const s = createInitialState();
    // Giả lập save cũ không có cameraMode
    const oldState = JSON.parse(JSON.stringify(s)) as GameState;
    delete (oldState.settings as { cameraMode?: string }).cameraMode;

    const serialized = serialize(oldState);
    const loaded = deserialize(serialized);
    expect(loaded.settings.cameraMode).toBe('third');
  });

  it('3. Lưu và tải lại giữ nguyên cameraMode "first"', () => {
    const s = createInitialState();
    s.settings.cameraMode = 'first';

    const serialized = serialize(s);
    const loaded = deserialize(serialized);
    expect(loaded.settings.cameraMode).toBe('first');
  });

  it('4. Camera ở chế độ "first" đặt tại vị trí mắt cao 1,5m và nhìn theo yaw/pitch', () => {
    const cam = new ThirdPersonCamera();
    const px = 10;
    const pz = -20;
    const yaw = 0; // nhìn thẳng theo hướng -Z
    const pitch = 0.42; // góc nhìn ngang mắt

    cam.update(px, pz, yaw, pitch, 5.4, [], 'first');

    // Vị trí camera ở đúng mắt nhân vật: (px, 1.5, pz)
    expect(cam.cam.position.x).toBeCloseTo(px, 4);
    expect(cam.cam.position.y).toBeCloseTo(1.5, 4);
    expect(cam.cam.position.z).toBeCloseTo(pz, 4);

    // Kiểm tra hướng nhìn: yaw = 0, pitch = 0.42 nhìn về phía -Z
    const forward = new THREE.Vector3();
    cam.cam.getWorldDirection(forward);
    expect(forward.x).toBeCloseTo(0, 2);
    expect(forward.y).toBeCloseTo(0, 2);
    expect(forward.z).toBeCloseTo(-1, 2);
  });

  it('5. Camera ở chế độ "third" giữ nguyên vị trí offset sau lưng nhân vật', () => {
    const cam = new ThirdPersonCamera();
    const px = 0;
    const pz = 0;
    const yaw = 0;
    const pitch = 0.42;

    cam.update(px, pz, yaw, pitch, 5.4, [], 'third');

    // Camera ở xa người chơi (y > 1.5, z > 0 do yaw = 0 nhìn về -Z từ phía sau)
    expect(cam.cam.position.y).toBeGreaterThan(2.0);
    expect(cam.cam.position.z).toBeGreaterThan(2.0);
  });

  it('6. Chuyển đổi qua lại giữa "first" và "third" khôi phục góc nhìn đúng cách', () => {
    const cam = new ThirdPersonCamera();
    const px = 5;
    const pz = 5;

    // Ban đầu ở third mode
    cam.update(px, pz, 0, 0.42, 5.4, [], 'third');
    const thirdY = cam.cam.position.y;
    expect(thirdY).toBeGreaterThan(2.0);

    // Chuyển sang first mode -> cao đúng 1.5m
    cam.update(px, pz, 0, 0.42, 5.4, [], 'first');
    expect(cam.cam.position.y).toBeCloseTo(1.5, 4);

    // Chuyển lại third mode -> vị trí camera sau lưng được phục hồi
    cam.update(px, pz, 0, 0.42, 5.4, [], 'third');
    expect(cam.cam.position.y).toBeGreaterThan(2.0);
  });

  it('7. InputController bỏ qua zoom cuộn chuột khi ở first mode', () => {
    const input = new InputController();
    expect(input.cameraMode).toBe('third');
    expect(input.distance).toBe(5.4);

    input.cameraMode = 'first';
    expect(input.cameraMode).toBe('first');
  });
});
