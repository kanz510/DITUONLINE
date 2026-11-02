import * as THREE from 'three';

export class InputController {
  keys = new Set<string>();
  joyX = 0;
  joyY = 0;
  sprintTouch = false;
  yaw = 0;
  pitch = 0.42;
  distance = 5.4;
  sensitivity = 1;
  private dragging = false;
  private lastX = 0;
  private lastY = 0;
  private camTouchId: number | null = null;
  private joyTouchId: number | null = null;
  private joyCenter = { x: 0, y: 0 };
  onInteract: () => void = () => {};
  onKeyCommand: (code: string) => void = () => {};

  bind(canvas: HTMLElement, joyZone: HTMLElement, joyKnob: HTMLElement) {
    window.addEventListener('keydown', (e) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      this.keys.add(e.code);
      if (['KeyE', 'KeyJ', 'KeyP', 'KeyR', 'KeyM', 'KeyB', 'Escape'].includes(e.code)) {
        this.onKeyCommand(e.code);
      }
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());

    // Chuột kéo xoay camera
    canvas.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      this.dragging = true;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
    });
    window.addEventListener('mousemove', (e) => {
      if (!this.dragging) return;
      const dx = e.clientX - this.lastX;
      const dy = e.clientY - this.lastY;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
      this.rotate(-dx * 0.0055, dy * 0.0045);
    });
    window.addEventListener('mouseup', () => (this.dragging = false));
    canvas.addEventListener(
      'wheel',
      (e) => {
        this.distance = Math.max(2.6, Math.min(9, this.distance + e.deltaY * 0.003));
      },
      { passive: true },
    );

    // Cảm ứng: joystick bên trái
    joyZone.addEventListener(
      'touchstart',
      (e) => {
        e.preventDefault();
        const t = e.changedTouches[0];
        this.joyTouchId = t.identifier;
        const rect = joyZone.getBoundingClientRect();
        this.joyCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        this.updateJoy(t.clientX, t.clientY, joyKnob);
      },
      { passive: false },
    );
    joyZone.addEventListener(
      'touchmove',
      (e) => {
        e.preventDefault();
        for (const t of Array.from(e.changedTouches)) {
          if (t.identifier === this.joyTouchId) this.updateJoy(t.clientX, t.clientY, joyKnob);
        }
      },
      { passive: false },
    );
    const endJoy = (e: TouchEvent) => {
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier === this.joyTouchId) {
          this.joyTouchId = null;
          this.joyX = 0;
          this.joyY = 0;
          joyKnob.style.transform = 'translate(0px, 0px)';
        }
      }
    };
    joyZone.addEventListener('touchend', endJoy);
    joyZone.addEventListener('touchcancel', endJoy);

    // Cảm ứng: vuốt trên canvas xoay camera
    canvas.addEventListener(
      'touchstart',
      (e) => {
        e.preventDefault();
        if (this.camTouchId !== null) return;
        const t = e.changedTouches[0];
        this.camTouchId = t.identifier;
        this.lastX = t.clientX;
        this.lastY = t.clientY;
      },
      { passive: false },
    );
    canvas.addEventListener(
      'touchmove',
      (e) => {
        e.preventDefault();
        for (const t of Array.from(e.changedTouches)) {
          if (t.identifier === this.camTouchId) {
            const dx = t.clientX - this.lastX;
            const dy = t.clientY - this.lastY;
            this.lastX = t.clientX;
            this.lastY = t.clientY;
            this.rotate(-dx * 0.007, dy * 0.0055);
          }
        }
      },
      { passive: false },
    );
    const endCam = (e: TouchEvent) => {
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier === this.camTouchId) this.camTouchId = null;
      }
    };
    canvas.addEventListener('touchend', endCam);
    canvas.addEventListener('touchcancel', endCam);
  }

  private updateJoy(cx: number, cy: number, knob: HTMLElement) {
    const maxR = 44;
    let dx = cx - this.joyCenter.x;
    let dy = cy - this.joyCenter.y;
    const d = Math.hypot(dx, dy);
    if (d > maxR) {
      dx = (dx / d) * maxR;
      dy = (dy / d) * maxR;
    }
    this.joyX = dx / maxR;
    this.joyY = dy / maxR;
    knob.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
  }

  rotate(dyaw: number, dpitch: number) {
    this.yaw += dyaw * this.sensitivity;
    this.pitch = Math.max(0.12, Math.min(1.25, this.pitch + dpitch * this.sensitivity));
  }

  moveVector(): { fwd: number; right: number; sprint: boolean } {
    let fwd = -this.joyY;
    let right = this.joyX;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) fwd += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) fwd -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) right += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) right -= 1;
    const len = Math.hypot(fwd, right);
    if (len > 1) {
      fwd /= len;
      right /= len;
    }
    const sprint = this.sprintTouch || this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || len > 0.92;
    return { fwd, right, sprint };
  }
}

export class ThirdPersonCamera {
  cam = new THREE.PerspectiveCamera(58, 16 / 9, 0.15, 130);
  private ray = new THREE.Raycaster();
  private smoothDist = 5.4;

  update(px: number, pz: number, yaw: number, pitch: number, desiredDist: number, obstacles: THREE.Object3D[]) {
    const target = new THREE.Vector3(px, 1.4, pz);
    const offset = new THREE.Vector3(
      Math.sin(yaw) * Math.cos(pitch),
      Math.sin(pitch),
      Math.cos(yaw) * Math.cos(pitch),
    );
    let maxD = desiredDist;
    this.ray.set(target, offset);
    this.ray.far = desiredDist;
    const hits = this.ray.intersectObjects(obstacles, false);
    if (hits.length > 0) {
      maxD = Math.max(0.65, hits[0].distance - 0.28);
    }
    this.smoothDist += (maxD - this.smoothDist) * (maxD < this.smoothDist ? 0.45 : 0.15);
    this.cam.position.copy(target).addScaledVector(offset, this.smoothDist);
    this.cam.lookAt(px, 1.32, pz);
  }
}
