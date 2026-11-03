import * as THREE from 'three';
import { applyPBRMicroDetail } from './pbr';
import { GLTFLoader, type GLTF } from 'three/addons/loaders/GLTFLoader.js';

/**
 * Assets staged under assets/ are copied unchanged to public/assets/ at integration time.
 * Always resolve through Vite BASE_URL so GitHub Pages subpaths and offline previews work.
 * Do not flatten GLB sibling Textures/ folders: GLTFLoader resolves their relative URIs.
 * GLBs are plain glTF 2.0; no Draco or KTX2 decoders are required.
 */
export const assetUrl = (path: string): string =>
  `${import.meta.env.BASE_URL}assets/${path.replace(/^\/+/, '')}`;

const glbLoader = new GLTFLoader();
const glbCache = new Map<string, Promise<GLTF>>();

export function loadGlb(path: string): Promise<GLTF> {
  let pending = glbCache.get(path);
  if (!pending) {
    pending = new Promise<GLTF>((resolve, reject) => {
      glbLoader.load(assetUrl(path), resolve, undefined, reject);
    }).catch((error: unknown) => {
      glbCache.delete(path); // a transient fetch failure can recover on retry
      throw error;
    });
    glbCache.set(path, pending);
  }
  return pending;
}

const textureLoader = new THREE.TextureLoader();

/** A stable material immediately; its image streams in asynchronously when ready. */
export function surfaceMaterial(
  image: string,
  tint = 0xffffff,
  repeatX = 1,
  repeatY = 1,
): THREE.MeshStandardMaterial {
  const material = new THREE.MeshStandardMaterial({ color: tint, roughness: 0.88 });
  // 128px shared microdetail supplies PBR roughness/bump while the original
  // color JPEG remains the source of truth and keeps its relative asset URL.
  applyPBRMicroDetail(material, image, repeatX, repeatY);
  if (typeof document !== 'undefined') {
    textureLoader.load(
      assetUrl(`textures/${image}`),
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(repeatX, repeatY);
        texture.anisotropy = 2; // save bandwidth on mobile while retaining mipmapping
        material.map = texture;
        material.needsUpdate = true;
      },
      undefined,
      (error) => console.warn('[PrisonWorld] Texture failed, keeping solid material:', image, error),
    );
  }
  return material;
}

/** Swap a procedural placeholder for a Kenney model, without changing its collider.
 *  Props use a uniform footprint fit; tree crowns use real-world height.
 *  A failed load leaves the placeholder visible, keeping the map playable offline.
 */
export async function upgradePropModel(
  slot: THREE.Group,
  placeholder: THREE.Object3D,
  path: string,
  footprint: { width: number; depth: number },
  opts: { height?: number; rotateY?: number } = {},
): Promise<void> {
  try {
    const { scene } = await loadGlb(path);
    const model = scene.clone(true);
    if (opts.rotateY) model.rotation.y = opts.rotateY;
    model.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(model);
    const size = bounds.getSize(new THREE.Vector3());
    if (size.x < 1e-5 || size.y < 1e-5 || size.z < 1e-5) {
      throw new Error(`Zero-size GLB model ${path}`);
    }
    const scale = opts.height
      ? opts.height / size.y
      : Math.min(footprint.width / size.x, footprint.depth / size.z, 2.75 / size.y) * 0.94;
    // Keep the model's minimum Y on the ground and its footprint centered.
    const center = bounds.getCenter(new THREE.Vector3());
    const fitted = new THREE.Group();
    model.scale.setScalar(scale);
    model.position.set(-center.x * scale, -bounds.min.y * scale, -center.z * scale);
    model.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
    fitted.add(model);
    if (slot.parent) {
      slot.remove(placeholder);
      slot.add(fitted);
    }
  } catch (error) {
    console.warn('[PrisonWorld] GLB failed, keeping procedural fallback:', path, error);
  }
}
