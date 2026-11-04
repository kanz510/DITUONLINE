export interface AppReleaseInfo {
  name: string;
  milestone: number;
  version: string;
  buildHash: string;
  files?: number;
}

export const APP_VERSION = '0.4.14';
export const MILESTONE = 3;
export let BUILD_HASH = '9590a1d1131e';

export function getReleaseInfo(): AppReleaseInfo {
  const globalRel = typeof window !== 'undefined' ? (window as any).__APP_RELEASE__ : null;
  return {
    name: 'di-tu-online',
    milestone: globalRel?.milestone ?? MILESTONE,
    version: globalRel?.version ?? APP_VERSION,
    buildHash: globalRel?.buildHash ?? BUILD_HASH,
    files: globalRel?.files,
  };
}

export async function fetchLiveRelease(): Promise<AppReleaseInfo> {
  try {
    const res = await fetch('./release.json?t=' + Date.now(), { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data?.buildHash) {
        BUILD_HASH = data.buildHash;
        if (typeof window !== 'undefined') {
          (window as any).__APP_RELEASE__ = data;
        }
        return data;
      }
    }
  } catch {
    // offline or static fallback
  }
  return getReleaseInfo();
}
