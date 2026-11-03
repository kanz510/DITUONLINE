import * as THREE from 'three';
import { BUILDINGS } from './layout';

/**
 * Visual-only, deterministic rain, morning haze, workshop dust and wet pavement.
 * Weather is derived from existing day/time and is NEVER stored in game saves.
 * One Points draw call per enabled system, with fixed-size typed arrays.
 */
export type AtmosphereQuality = 'low' | 'medium' | 'high';

const MAX_RAIN = 420;
const MAX_DUST = 78;
const WIDTH = 26;

function sequence(seed: number): number {
  let n = seed | 0;
  n ^= n << 13;
  n ^= n >>> 17;
  n ^= n << 5;
  return (n >>> 0) / 4294967296;
}

export function weatherForDay(day: number, minute: number): 'clear' | 'rain' | 'haze' {
  const h = minute / 60;
  if ((day * 37 + 11) % 5 < 2 && h >= 9 && h < 19.5) return 'rain';
  if (h >= 5 && h <= 7.2) return 'haze';
  return 'clear';
}

const outsideBuildings = (x: number, z: number) =>
  !Object.values(BUILDINGS).some((b) => x > b.x1 && x < b.x2 && z > b.z1 && z < b.z2);

export class PrisonAtmosphere {
  readonly rain: THREE.Points;
  readonly dust: THREE.Points;
  readonly puddles: THREE.Group;
  readonly rainGeometry: THREE.BufferGeometry;
  readonly dustGeometry: THREE.BufferGeometry;
  readonly rainPositions: Float32Array;
  readonly dustPositions: Float32Array;
  readonly wetMaterial: THREE.MeshStandardMaterial;

  quality: AtmosphereQuality = 'medium';
  wetness = 0;
  rainActive = false;
  rainCount = 0;
  dustCount = 0;
  private readonly rainMaterial: THREE.PointsMaterial;
  private readonly dustMaterial: THREE.PointsMaterial;
  private puddleMaterials: THREE.MeshBasicMaterial[] = [];

  constructor(scene: THREE.Scene) {
    this.rainPositions = new Float32Array(MAX_RAIN * 3);
    this.dustPositions = new Float32Array(MAX_DUST * 3);
    for (let i = 0; i < MAX_RAIN; i++) {
      this.rainPositions[i * 3] = (sequence(i * 1459 + 9) - .5) * WIDTH;
      this.rainPositions[i * 3 + 1] = sequence(i * 1579 + 13) * 8;
      this.rainPositions[i * 3 + 2] = (sequence(i * 1609 + 17) - .5) * WIDTH;
    }
    for (let i = 0; i < MAX_DUST; i++) {
      this.dustPositions[i * 3] = (sequence(i * 101 + 21) - .5) * 12;
      this.dustPositions[i * 3 + 1] = sequence(i * 103 + 22) * 2.8 + .25;
      this.dustPositions[i * 3 + 2] = (sequence(i * 107 + 23) - .5) * 14;
    }

    this.rainGeometry = new THREE.BufferGeometry();
    this.rainGeometry.setAttribute('position', new THREE.BufferAttribute(this.rainPositions, 3));
    this.dustGeometry = new THREE.BufferGeometry();
    this.dustGeometry.setAttribute('position', new THREE.BufferAttribute(this.dustPositions, 3));
    this.rainMaterial = new THREE.PointsMaterial({
      color: 0xc2dcf1, size: .055, transparent: true,
      opacity: .64, depthWrite: false, sizeAttenuation: true,
    });
    this.dustMaterial = new THREE.PointsMaterial({
      color: 0xe5cb9f, size: .085, transparent: true,
      opacity: .28, depthWrite: false, sizeAttenuation: true,
    });
    this.rain = new THREE.Points(this.rainGeometry, this.rainMaterial);
    this.rain.name = 'phase3.weather.rain';
    this.rain.frustumCulled = false;
    this.dust = new THREE.Points(this.dustGeometry, this.dustMaterial);
    this.dust.name = 'phase3.weather.workshop-dust';
    this.dust.position.set(20, 0, -2);
    this.dust.frustumCulled = false;
    this.puddles = new THREE.Group();
    this.puddles.name = 'phase3.weather.puddles';

    for (const [x, z, radius] of [
      [-8, 6, 1.1], [6, 4, .85], [1, -14, .9],
      [20, 12, .8], [3, 19, 1.2], [-19, 2, .75],
    ] as const) {
      const m = new THREE.MeshBasicMaterial({
        color: 0x94b7ca, transparent: true, opacity: 0,
        depthWrite: false, side: THREE.DoubleSide,
      });
      const patch = new THREE.Mesh(new THREE.CircleGeometry(radius, 20), m);
      patch.rotation.x = -Math.PI / 2;
      patch.position.set(x, .029, z);
      patch.renderOrder = 1;
      this.puddles.add(patch);
      this.puddleMaterials.push(m);
    }

    this.wetMaterial = new THREE.MeshStandardMaterial({
      color: 0x71889e, metalness: .20, roughness: .28, transparent: true,
      opacity: 0, depthWrite: false,
    });
    scene.add(this.rain, this.dust, this.puddles);
    this.setQuality('medium');
  }

  setQuality(quality: AtmosphereQuality): void {
    this.quality = quality;
    this.rainCount = quality === 'low' ? 0 : quality === 'medium' ? 160 : MAX_RAIN;
    this.dustCount = quality === 'low' ? 0 : quality === 'medium' ? 24 : MAX_DUST;
    this.rainGeometry.setDrawRange(0, this.rainCount);
    this.dustGeometry.setDrawRange(0, this.dustCount);
    if (quality === 'low') {
      this.rain.visible = false;
      this.dust.visible = false;
      this.puddles.visible = false;
    } else this.puddles.visible = true;
  }

  update(dt: number, day: number, minute: number, playerX: number, playerZ: number): void {
    const weather = weatherForDay(day, minute);
    const outdoor = outsideBuildings(playerX, playerZ);
    const rainTarget = weather === 'rain' ? 1 : 0;
    this.wetness += (rainTarget - this.wetness) * Math.min(1, Math.max(0, dt) * 1.8);

    this.rainActive = this.rainCount > 0 && rainTarget > 0 && outdoor;
    this.rain.visible = this.rainActive;
    if (this.rain.visible) {
      this.rain.position.set(playerX, 0, playerZ);
      for (let i = 0; i < this.rainCount; i++) {
        const y = i * 3 + 1;
        this.rainPositions[y] -= dt * (8.8 + sequence(i * 7 + 48) * 3.2);
        if (this.rainPositions[y] < .05) this.rainPositions[y] += 8.0;
      }
      (this.rainGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      this.rainMaterial.opacity = .54 + this.wetness * .18;
    }

    const closeToWorkshop = Math.abs(playerX - 20) < 14 && Math.abs(playerZ + 2) < 15;
    this.dust.visible = this.dustCount > 0 && closeToWorkshop && weather !== 'rain';
    if (this.dust.visible) {
      for (let i = 0; i < this.dustCount; i++) {
        const y = i * 3 + 1;
        this.dustPositions[y] += dt * (.08 + sequence(i * 2 + 39) * .09);
        if (this.dustPositions[y] > 3.18) this.dustPositions[y] = .24;
      }
      (this.dustGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    }

    const opacity = this.quality === 'low' ? 0 : this.wetness * .22;
    for (const material of this.puddleMaterials) material.opacity = opacity;
  }

  snapshot(): {
    quality: AtmosphereQuality; rainParticles: number; dustParticles: number;
    rainVisible: boolean; dustVisible: boolean; wetness: number;
  } {
    return {
      quality: this.quality, rainParticles: this.rainCount, dustParticles: this.dustCount,
      rainVisible: this.rain.visible, dustVisible: this.dust.visible, wetness: this.wetness,
    };
  }
}
