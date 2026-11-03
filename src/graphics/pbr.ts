import * as THREE from 'three';

/**
 * Lightweight shared procedural PBR microdetail. 128px grayscale tiles provide
 * a real roughness / bump texture without network requests, paid assets, or
 * large 4K maps. Source JPEG color maps and their relative paths are unchanged.
 */
const CACHE = new Map<string, THREE.CanvasTexture>();

function stringSeed(input: string): number {
  let seed = 2166136261;
  for (let i = 0; i < input.length; i++) {
    seed ^= input.charCodeAt(i);
    seed = Math.imul(seed, 16777619);
  }
  return seed >>> 0;
}

function createMicroTexture(kind: string, repeatX: number, repeatY: number): THREE.CanvasTexture {
  if (typeof document === 'undefined') return new THREE.CanvasTexture(null as any);
  const cv = document.createElement('canvas');
  cv.width = 128;
  cv.height = 128;
  const ctx = cv.getContext('2d');
  if (!ctx) throw new Error('Could not create microdetail texture');
  const image = ctx.createImageData(128, 128);
  let state = stringSeed(kind);
  const next = () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 4294967296;
  };
  const isWood = /wood/i.test(kind);
  const isMetal = /steel|metal|iron/i.test(kind);
  const isBrick = /brick|plaster/i.test(kind);
  for (let y = 0; y < 128; y++) {
    for (let x = 0; x < 128; x++) {
      const noise = next() - .5;
      const line = isWood
        ? Math.sin((y + noise * 2) * .42) * 11
        : isMetal
          ? Math.sin(x * .59) * 5
          : isBrick
            ? Math.sin((x + y * .27) * .14) * 8
            : Math.sin(x * .65 + y * .27) * 4;
      const fine = Math.round(Math.max(115, Math.min(252, 205 + noise * 55 + line)));
      const index = (y * 128 + x) * 4;
      image.data[index] = image.data[index + 1] = image.data[index + 2] = fine;
      image.data[index + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = 2;
  tex.generateMipmaps = true;
  return tex;
}

export function applyPBRMicroDetail(
  material: THREE.MeshStandardMaterial,
  kind: string,
  repeatX: number,
  repeatY: number,
): void {
  const key = [kind, repeatX, repeatY].join(':');
  let detail = CACHE.get(key);
  if (!detail) {
    detail = createMicroTexture(kind, repeatX, repeatY);
    CACHE.set(key, detail);
  }
  material.roughness = /metal|steel/i.test(kind) ? 0.7 : 0.98;
  material.roughnessMap = detail;
  material.bumpMap = detail;
  material.bumpScale = /wood/i.test(kind) ? 0.016
    : /plaster/i.test(kind) ? 0.024
    : /concrete|brick|asphalt/i.test(kind) ? 0.028 : 0.012;
  material.needsUpdate = true;
}

export function getMicroTextureCount(): number {
  return CACHE.size;
}
