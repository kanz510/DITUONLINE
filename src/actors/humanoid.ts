import * as THREE from 'three';
import type { Appearance, Pose } from '../data/npcs';

/** Chibi geometry only. The scene uses metres, with a nominal 1.7m tall actor.
 * Keeping the same named pivot groups preserves the existing pose animation.
 */
function stripedTex(c1: string, c2: string, stripes = 12): THREE.CanvasTexture {
  if (typeof document === 'undefined') return new THREE.CanvasTexture({} as any);
  const cv = document.createElement('canvas');
  cv.width = 128;
  cv.height = 256;
  const ctx = cv.getContext('2d')!;
  for (let row = 0; row < stripes; row++) {
    ctx.fillStyle = row % 2 === 0 ? c1 : c2;
    ctx.fillRect(0, row * 256 / stripes, 128, 256 / stripes + 1);
  }
  const texture = new THREE.CanvasTexture(cv);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function numberTexture(number: number): THREE.CanvasTexture {
  if (typeof document === 'undefined') return new THREE.CanvasTexture({} as any);
  const cv = document.createElement('canvas');
  cv.width = 128;
  cv.height = 64;
  const ctx = cv.getContext('2d')!;
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, 128, 64);
  ctx.fillStyle = '#111827';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 39px system-ui, sans-serif';
  ctx.fillText(String(number).padStart(2, '0'), 64, 34);
  const texture = new THREE.CanvasTexture(cv);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

let inmateStripe: THREE.CanvasTexture | null = null;

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
  bubbleSprite: THREE.Sprite | null = null;

  // modelSkin remains a stable badge seed only; every officer shares
  // the same procedural chibi rig, with no delayed model replacement.
  constructor(look: Appearance, labelText?: string, modelSkin?: string) {
    this.root.scale.set(look.build, look.height, look.build);
    this.root.add(this.body);

    const isStriped = look.uniform === 'inmate';
    const isOrange = look.uniform === 'inmate-orange';
    const isOfficer = look.uniform === 'officer';
    const isMedic = look.uniform === 'medic';
    const isPrisoner = isStriped || isOrange;

    const skinMat = new THREE.MeshStandardMaterial({ color: look.skin, roughness: 0.78 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.82 });
    const accentMat = new THREE.MeshStandardMaterial({ color: look.accent, roughness: 0.66 });
    const blushMat = new THREE.MeshStandardMaterial({ color: 0xf3a6a9, roughness: 0.9 });

    let shirtMat: THREE.MeshStandardMaterial;
    let pantsMat: THREE.MeshStandardMaterial;
    if (isStriped) {
      inmateStripe ??= stripedTex('#f8fafc', '#0f172a', 12);
      shirtMat = new THREE.MeshStandardMaterial({ map: inmateStripe, roughness: 0.84 });
      pantsMat = new THREE.MeshStandardMaterial({ map: inmateStripe, roughness: 0.86 });
    } else if (isOrange) {
      shirtMat = new THREE.MeshStandardMaterial({ color: 0xff8c1a, roughness: 0.77 });
      pantsMat = new THREE.MeshStandardMaterial({ color: 0xff8c1a, roughness: 0.82 });
    } else if (isMedic) {
      shirtMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.84 });
      pantsMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.86 });
    } else if (isOfficer) {
      shirtMat = new THREE.MeshStandardMaterial({ color: 0x1e40af, roughness: 0.76 });
      pantsMat = new THREE.MeshStandardMaterial({ color: 0x172554, roughness: 0.82 });
    } else {
      // Visiting relatives wear ordinary clothes, not the prison uniform.
      shirtMat = new THREE.MeshStandardMaterial({ color: 0xe9a4b8, roughness: 0.82 });
      pantsMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.88 });
    }

    // Squat, rounded torso: nominal y=0.975, reaching just under the head.
    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.255, 0.27, 0.48, 22, 1), shirtMat);
    torso.position.y = 0.975;
    torso.castShadow = true;
    this.body.add(torso);
    const belly = new THREE.Mesh(new THREE.SphereGeometry(0.255, 20, 12), shirtMat);
    belly.scale.set(1.04, 0.75, 0.94);
    belly.position.set(0, 0.96, 0.012);
    belly.castShadow = true;
    this.body.add(belly);

    // Tiny accent trim: particularly important on the user's own character.
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.165, 0.18, 0.055, 18), isPrisoner && !!labelText ? darkMat : accentMat);
    collar.position.y = 1.22;
    this.body.add(collar);

    if (isOrange) {
      // Small WHITE ID plate with black digits on the orange jumpsuit.
      const seed = (modelSkin ?? labelText ?? '07');
      const index = Array.from(seed).reduce((v, ch) => v + ch.charCodeAt(0), 0) % 90 + 10;
      const plate = new THREE.Mesh(
        new THREE.PlaneGeometry(0.145, 0.075),
        new THREE.MeshStandardMaterial({
          map: numberTexture(index),
          roughness: 0.77,
          side: THREE.DoubleSide,
        }),
      );
      plate.position.set(0.112, 1.065, 0.270);
      this.body.add(plate);
    } else {
      const badge = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.035, 0.018), isPrisoner ? darkMat : accentMat);
      badge.position.set(0.13, 1.07, 0.267);
      this.body.add(badge);
    }

    const hips = new THREE.Mesh(new THREE.SphereGeometry(0.247, 18, 12), pantsMat);
    hips.scale.set(1, 0.48, 0.96);
    hips.position.y = 0.715;
    this.body.add(hips);

    // Oversized head: 0.275m radius at y=1.425 => top at 1.70m.
    this.head.position.set(0, 1.425, 0);
    this.body.add(this.head);
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.275, 24, 18), skinMat);
    skull.castShadow = true;
    this.head.add(skull);

    // Two widely spaced black dot eyes, with tiny glints.
    const eyeGeo = new THREE.SphereGeometry(0.038, 14, 10);
    const glintGeo = new THREE.SphereGeometry(0.010, 9, 7);
    const glintMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(eyeGeo, darkMat);
      eye.position.set(side * 0.095, 0.026, 0.257);
      this.head.add(eye);
      const glint = new THREE.Mesh(glintGeo, glintMat);
      glint.position.set(side * 0.095 - 0.009, 0.039, 0.291);
      this.head.add(glint);
      const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.054, 12, 8), blushMat);
      cheek.scale.set(1, 0.55, 0.25);
      cheek.position.set(side * 0.165, -0.083, 0.222);
      this.head.add(cheek);
    }
    const smile = new THREE.Mesh(
      new THREE.TorusGeometry(0.037, 0.006, 5, 18, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0x944d57, roughness: 0.9 }),
    );
    smile.rotation.z = Math.PI;
    smile.position.set(0, -0.099, 0.265);
    this.head.add(smile);

    // Scalp fits the new sphere. Officers wear a blue cap instead of hair.
    const hairMat = new THREE.MeshStandardMaterial({ color: look.hair, roughness: 0.87 });
    if (!isOfficer && look.hairStyle !== 'bald') {
      const hairCap = new THREE.Mesh(
        new THREE.SphereGeometry(0.288, 24, 14, 0, Math.PI * 2, 0, Math.PI * 0.48),
        hairMat,
      );
      hairCap.position.y = 0.025;
      hairCap.rotation.x = -0.10;
      hairCap.castShadow = true;
      this.head.add(hairCap);
      if (look.hairStyle === 'bun') {
        const bun = new THREE.Mesh(new THREE.SphereGeometry(0.09, 14, 10), hairMat);
        bun.position.set(0, 0.07, -0.265);
        this.head.add(bun);
      }
    }
    if (isOfficer || look.cap) {
      const capMat = new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.76 });
      const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.248, 0.272, 0.125, 24), capMat);
      crown.position.y = 0.235;
      crown.castShadow = true;
      const visor = new THREE.Mesh(new THREE.SphereGeometry(0.25, 20, 10), capMat);
      visor.scale.set(1, 0.16, 0.58);
      visor.position.set(0, 0.18, 0.153);
      this.head.add(crown, visor);
      const emblem = new THREE.Mesh(
        new THREE.SphereGeometry(0.028, 10, 8),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.25, roughness: 0.5 }),
      );
      emblem.position.set(0, 0.27, 0.257);
      this.head.add(emblem);
    }
    if (look.glasses) {
      for (const side of [-1, 1]) {
        const rim = new THREE.Mesh(new THREE.TorusGeometry(0.068, 0.009, 7, 16), darkMat);
        rim.position.set(side * 0.095, 0.025, 0.276);
        this.head.add(rim);
      }
      const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.012, 0.012), darkMat);
      bridge.position.set(0, 0.025, 0.277);
      this.head.add(bridge);
    }

    // Chunkier short arms, with rounded hands. Keep armL/armR animation pivots.
    const makeArm = () => {
      const g = new THREE.Group();
      const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.073, 0.265, 12), shirtMat);
      upper.position.y = -0.13;
      upper.castShadow = true;
      const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.072, 0.067, 0.22, 12), skinMat);
      lower.position.y = -0.35;
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.071, 12, 10), skinMat);
      hand.position.y = -0.48;
      g.add(upper, lower, hand);
      return g;
    };
    this.armL = makeArm();
    this.armR = makeArm();
    this.armL.position.set(-0.31, 1.17, 0);
    this.armR.position.set(0.31, 1.17, 0);
    this.body.add(this.armL, this.armR);

    const shoeMat = new THREE.MeshStandardMaterial({ color: isOfficer ? 0x111827 : 0x293548, roughness: 0.85 });
    const makeLeg = () => {
      const g = new THREE.Group();
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.095, 0.48, 14), pantsMat);
      leg.position.y = -0.265;
      leg.castShadow = true;
      const shoe = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 10), shoeMat);
      shoe.scale.set(1, 0.76, 1.45);
      shoe.position.set(0, -0.56, 0.05);
      shoe.castShadow = true;
      g.add(leg, shoe);
      return g;
    };
    this.legL = makeLeg();
    this.legR = makeLeg();
    this.legL.position.set(-0.135, 0.65, 0);
    this.legR.position.set(0.135, 0.65, 0);
    this.body.add(this.legL, this.legR);

    // NPCs use black-and-white name pills. The player gets a subtle accent
    // border and "BẠN" because the saved character name is not passed here.
    this.labelSprite = makeLabel(labelText ?? 'BẠN', look.accent, !labelText);
    this.labelSprite.position.set(0, 2.05, 0);
    this.root.add(this.labelSprite);
  }

  dispose() {
    // Rebuilding the player's appearance must not leak chibi mesh resources.
    // The striped texture is intentionally shared between all inmate rigs.
    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    this.root.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        geometries.add(obj.geometry);
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        for (const material of mats) materials.add(material);
      }
    });
    for (const geometry of geometries) geometry.dispose();
    for (const material of materials) {
      if (material instanceof THREE.MeshStandardMaterial && material.map &&
          material.map !== inmateStripe) material.map.dispose();
      material.dispose();
    }
    this.labelSprite?.material.map?.dispose();
    this.labelSprite?.material.dispose();
    this.bubbleSprite?.material.map?.dispose();
    this.bubbleSprite?.material.dispose();
  }

  showSpeechBubble(text: string | null) {
    if (this.bubbleSprite) {
      this.bubbleSprite.material.map?.dispose();
      this.bubbleSprite.material.dispose();
      this.root.remove(this.bubbleSprite);
      this.bubbleSprite = null;
    }
    if (text) {
      this.bubbleSprite = makeSpeechBubble(text);
      this.bubbleSprite.position.set(0, 2.55, 0);
      this.root.add(this.bubbleSprite);
    }
  }

  update(dt: number, speed = 0) {
    // Preserve the exact state machine and pose pivots used by the old rig.
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

  setOpacity(alpha: number) {
    const isTrans = alpha < 0.99;
    this.root.traverse((obj) => {
      if (obj instanceof THREE.Mesh && obj.material) {
        if (Array.isArray(obj.material)) {
          for (const m of obj.material) {
            m.transparent = isTrans;
            m.opacity = alpha;
          }
        } else {
          obj.material.transparent = isTrans;
          obj.material.opacity = alpha;
        }
      } else if (obj instanceof THREE.Sprite && obj.material) {
        obj.material.opacity = alpha;
      }
    });
  }
}

function makeLabel(text: string, colorHex: number, player: boolean): THREE.Sprite {
  if (typeof document === 'undefined') return new THREE.Sprite();
  const cv = document.createElement('canvas');
  cv.width = 256;
  cv.height = 64;
  const ctx = cv.getContext('2d')!;
  ctx.fillStyle = '#090d16';
  ctx.beginPath();
  ctx.roundRect(5, 12, 246, 40, 20);
  ctx.fill();
  if (player) {
    ctx.strokeStyle = '#' + colorHex.toString(16).padStart(6, '0');
    ctx.lineWidth = 3;
    ctx.stroke();
  }
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 23px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 128, 33, 218);
  const texture = new THREE.CanvasTexture(cv);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, depthTest: false, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(1.14, 0.29, 1);
  return sprite;
}

function makeSpeechBubble(text: string): THREE.Sprite {
  if (typeof document === 'undefined') return new THREE.Sprite();
  const cv = document.createElement('canvas');
  cv.width = 384;
  cv.height = 128;
  const ctx = cv.getContext('2d')!;

  // Bubble background (white with rounded corners and dark border)
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.roundRect(8, 8, 368, 88, 16);
  ctx.fill();
  ctx.stroke();

  // Pointer triangle pointing down
  ctx.beginPath();
  ctx.moveTo(176, 96);
  ctx.lineTo(192, 116);
  ctx.lineTo(208, 96);
  ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(176, 96);
  ctx.lineTo(192, 116);
  ctx.lineTo(208, 96);
  ctx.stroke();
  // Clear the seam
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(178, 92, 28, 6);

  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 21px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (text.length > 26) {
    const mid = Math.floor(text.length / 2);
    const sp = text.lastIndexOf(' ', mid + 4);
    const splitAt = sp > 8 ? sp : mid;
    const l1 = text.slice(0, splitAt);
    const l2 = text.slice(splitAt).trim();
    ctx.fillText(l1, 192, 36, 340);
    ctx.fillText(l2, 192, 66, 340);
  } else {
    ctx.fillText(text, 192, 52, 340);
  }

  const texture = new THREE.CanvasTexture(cv);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, depthTest: false, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(1.9, 0.63, 1);
  return sprite;
}
