import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import type { Appearance, Pose } from '../data/npcs';

function stripedTex(c1: string, c2: string): THREE.CanvasTexture {
  const cv = document.createElement('canvas');
  cv.width = 64;
  cv.height = 64;
  const ctx = cv.getContext('2d')!;
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = i % 2 === 0 ? c1 : c2;
    ctx.fillRect(0, i * 8, 64, 8);
  }
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

let inmateStripe: THREE.CanvasTexture | null = null;

/** Shared GLB cache: one network request per skin, cloned nodes per actor.
 *  The GLB keeps its relative Textures/texture-X.png references under public/models.
 */
const characterLoader = new GLTFLoader();
const characterCache = new Map<string, Promise<{ scene: THREE.Group; animations: THREE.AnimationClip[] }>>();
function loadCharacter(skin: string) {
  let promise = characterCache.get(skin);
  if (!promise) {
    promise = characterLoader.loadAsync(`${import.meta.env.BASE_URL}models/characters/character-${skin}.glb`)
      .then((gltf) => ({ scene: gltf.scene, animations: gltf.animations }));
    characterCache.set(skin, promise);
  }
  return promise;
}
let nextInmateSkin = 0;
let nextOfficerSkin = 0;


export class HumanoidRig {
  root = new THREE.Group();
  body = new THREE.Group();
  head = new THREE.Group();
  armL = new THREE.Group();
  armR = new THREE.Group();
  legL = new THREE.Group();
  legR = new THREE.Group();
  pose: Pose = 'stand';
  phase = Math.random() * 10;
  labelSprite: THREE.Sprite | null = null;
  private glbModel: THREE.Group | null = null;
  private mixer: THREE.AnimationMixer | null = null;
  private actions = new Map<string, THREE.AnimationAction>();
  private activeClip = '';


  constructor(look: Appearance, labelText?: string) {
    this.root.scale.set(look.build, look.height, look.build);
    this.root.add(this.body);

    const skinMat = new THREE.MeshStandardMaterial({ color: look.skin, roughness: 0.75 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const accentMat = new THREE.MeshStandardMaterial({ color: look.accent, roughness: 0.65 });

    let shirtMat: THREE.MeshStandardMaterial;
    let pantsMat: THREE.MeshStandardMaterial;
    if (look.uniform === 'inmate') {
      inmateStripe ??= stripedTex('#e2e8f0', '#1e3a5f');
      shirtMat = new THREE.MeshStandardMaterial({ map: inmateStripe, roughness: 0.8 });
      pantsMat = new THREE.MeshStandardMaterial({ color: 0x1e3a5f, roughness: 0.85 });
    } else {
      shirtMat = new THREE.MeshStandardMaterial({ color: 0x2f5e3d, roughness: 0.7 });
      pantsMat = new THREE.MeshStandardMaterial({ color: 0x1f3f2b, roughness: 0.8 });
    }

    // Thân trên
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.19, 0.56, 12), shirtMat);
    torso.position.y = 1.02;
    torso.castShadow = true;
    this.body.add(torso);

    // Cổ áo / bảng tên màu nhận diện
    const collar = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.08, 0.28), accentMat);
    collar.position.set(0, 1.26, 0.02);
    this.body.add(collar);

    const badge = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.05, 0.02), accentMat);
    badge.position.set(0.09, 1.12, 0.2);
    this.body.add(badge);

    // Hông
    const hips = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.16, 10), pantsMat);
    hips.position.y = 0.68;
    this.body.add(hips);

    // Đầu
    this.head.position.set(0, 1.46, 0);
    this.body.add(this.head);
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.17, 14, 12), skinMat);
    skull.scale.set(0.95, 1.06, 0.98);
    skull.castShadow = true;
    this.head.add(skull);

    // Mắt + lông mày
    const eyeGeo = new THREE.SphereGeometry(0.022, 8, 8);
    const eyeL = new THREE.Mesh(eyeGeo, darkMat);
    const eyeR = new THREE.Mesh(eyeGeo, darkMat);
    eyeL.position.set(-0.055, 0.02, 0.15);
    eyeR.position.set(0.055, 0.02, 0.15);
    this.head.add(eyeL, eyeR);

    // Tóc / mũ
    const hairMat = new THREE.MeshStandardMaterial({ color: look.hair, roughness: 0.85 });
    if (look.hairStyle !== 'bald') {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.178, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.58), hairMat);
      cap.position.y = 0.02;
      cap.rotation.x = -0.15;
      this.head.add(cap);
      if (look.hairStyle === 'bun') {
        const bun = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), hairMat);
        bun.position.set(0, 0.03, -0.17);
        this.head.add(bun);
      }
    }
    if (look.cap) {
      const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.09, 12), shirtMat);
      crown.position.y = 0.13;
      const visor = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.02, 0.14), darkMat);
      visor.position.set(0, 0.09, 0.15);
      this.head.add(crown, visor);
    }
    if (look.glasses) {
      const g = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.045, 0.02), darkMat);
      g.position.set(0, 0.02, 0.165);
      this.head.add(g);
    }

    // Tay
    const makeArm = () => {
      const g = new THREE.Group();
      const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.055, 0.28, 8), shirtMat);
      upper.position.y = -0.14;
      const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.24, 8), skinMat);
      lower.position.y = -0.38;
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), skinMat);
      hand.position.y = -0.51;
      g.add(upper, lower, hand);
      return g;
    };
    this.armL = makeArm();
    this.armR = makeArm();
    this.armL.position.set(-0.26, 1.24, 0);
    this.armR.position.set(0.26, 1.24, 0);
    this.body.add(this.armL, this.armR);

    // Chân
    const shoeMat = new THREE.MeshStandardMaterial({ color: look.uniform === 'officer' ? 0x111827 : 0x475569, roughness: 0.85 });
    const makeLeg = () => {
      const g = new THREE.Group();
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.06, 0.56, 8), pantsMat);
      leg.position.y = -0.28;
      leg.castShadow = true;
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.08, 0.22), shoeMat);
      shoe.position.set(0, -0.58, 0.04);
      g.add(leg, shoe);
      return g;
    };
    this.legL = makeLeg();
    this.legR = makeLeg();
    this.legL.position.set(-0.1, 0.62, 0);
    this.legR.position.set(0.1, 0.62, 0);
    this.body.add(this.legL, this.legR);

    // Character assets are loaded asynchronously; keep the procedural rig as a
    // visual fallback only until a valid GLB and its animation clips arrive.
    const skin = look.uniform === 'officer'
      ? ['j', 'q', 'j', 'i'][nextOfficerSkin++ % 4]
      : ['g', 'a', 'b', 'c', 'd', 'e', 'f', 'h', 'k', 'l', 'm', 'o', 'p', 'r'][nextInmateSkin++ % 14];
    void loadCharacter(skin).then(({ scene, animations }) => {
      const model = scene.clone(true);
      const bounds = new THREE.Box3().setFromObject(model);
      const height = bounds.max.y - bounds.min.y;
      if (!Number.isFinite(height) || height <= 0.01) return;
      // Root already applies appearance.height; model local height stays 1.7m.
      const scale = 1.7 / height;
      model.scale.setScalar(scale);
      model.position.y = -bounds.min.y * scale;
      model.traverse((obj) => {
        if (obj instanceof THREE.Mesh) obj.castShadow = true;
      });
      this.body.visible = false;
      this.root.add(model);
      this.glbModel = model;
      this.mixer = new THREE.AnimationMixer(model);
      for (const clip of animations) {
        this.actions.set(clip.name.toLowerCase(), this.mixer.clipAction(clip));
      }
      this.activeClip = '';
      this.update(0, 0);
    }).catch((err) => {
      console.warn('[Character GLB] Fallback to procedural rig:', skin, err);
    });

    if (labelText) {
      this.labelSprite = makeLabel(labelText, look.accent);
      this.labelSprite.position.set(0, 1.92, 0);
      this.root.add(this.labelSprite);
    }
  }

  update(dt: number, speed = 0) {
    if (this.mixer) {
      const clip = this.pose === 'walk' ? 'walk'
        : this.pose === 'sit' ? 'sit'
        : this.pose === 'work' ? 'interact-right'
        : this.pose === 'talk' ? 'emote-yes' : 'idle';
      if (this.activeClip !== clip) {
        const next = this.actions.get(clip) ?? this.actions.get('idle');
        const prev = this.actions.get(this.activeClip);
        if (prev && prev !== next) prev.fadeOut(0.18);
        if (next) {
          next.reset().fadeIn(0.18).play();
          next.setEffectiveTimeScale(clip === 'walk' ? Math.max(0.7, Math.min(1.6, speed / 3.2)) : 1);
        }
        this.activeClip = clip;
      }
      this.mixer.update(Math.min(Math.max(dt, 0), 0.1));
      return;
    }
    this.phase += dt * (this.pose === 'walk' ? Math.max(4, speed * 2.2) : 2.5);
    const p = this.phase;
    this.body.position.y = 0;
    this.head.rotation.set(0, 0, 0);
    this.armL.rotation.set(0, 0, 0.06);
    this.armR.rotation.set(0, 0, -0.06);
    this.legL.rotation.set(0, 0, 0);
    this.legR.rotation.set(0, 0, 0);

    if (this.pose === 'walk') {
      const sw = Math.sin(p) * 0.55;
      this.legL.rotation.x = sw;
      this.legR.rotation.x = -sw;
      this.armL.rotation.x = -sw * 0.7;
      this.armR.rotation.x = sw * 0.7;
      this.body.position.y = Math.abs(Math.cos(p)) * 0.03;
    } else if (this.pose === 'sit') {
      this.body.position.y = -0.26;
      this.legL.rotation.x = -1.35;
      this.legR.rotation.x = -1.35;
      this.armL.rotation.x = -0.4;
      this.armR.rotation.x = -0.4;
      this.head.rotation.y = Math.sin(p * 0.5) * 0.1;
    } else if (this.pose === 'work') {
      this.armL.rotation.x = -0.9 + Math.sin(p * 2.2) * 0.25;
      this.armR.rotation.x = -0.9 - Math.sin(p * 2.2) * 0.25;
      this.head.rotation.x = 0.28;
    } else if (this.pose === 'talk') {
      this.armL.rotation.x = -0.35 + Math.sin(p * 1.8) * 0.2;
      this.armR.rotation.x = -0.25 - Math.cos(p * 1.5) * 0.18;
      this.head.rotation.y = Math.sin(p * 1.1) * 0.12;
    } else {
      this.body.position.y = Math.sin(p) * 0.01;
      this.head.rotation.y = Math.sin(p * 0.4) * 0.08;
    }
  }
}

function makeLabel(text: string, colorHex: number): THREE.Sprite {
  const cv = document.createElement('canvas');
  cv.width = 256;
  cv.height = 64;
  const ctx = cv.getContext('2d')!;
  ctx.fillStyle = 'rgba(15, 23, 42, 0.82)';
  ctx.beginPath();
  ctx.roundRect(8, 10, 240, 44, 12);
  ctx.fill();
  ctx.strokeStyle = '#' + colorHex.toString(16).padStart(6, '0');
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = '#f8fafc';
  ctx.font = 'bold 24px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 33);
  const tex = new THREE.CanvasTexture(cv);
  const mat = new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true });
  const s = new THREE.Sprite(mat);
  s.scale.set(1.15, 0.29, 1);
  return s;
}
