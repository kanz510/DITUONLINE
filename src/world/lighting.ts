import * as THREE from 'three';

export interface LightingProfile {
  sky: THREE.Color;
  sunlight: THREE.Color;
  sunIntensity: number;
  hemisphere: number;
  nightFactor: number;
}

const STOPS = [
  { h: 0, sky: 0x101d2c, sun: 0x9bb9df, sunI: .09, hemi: .28, night: 1 },
  { h: 5, sky: 0x203348, sun: 0xebaaa1, sunI: .19, hemi: .35, night: .95 },
  { h: 6.5, sky: 0xe7a57f, sun: 0xffd0a3, sunI: .85, hemi: .69, night: .45 },
  { h: 8, sky: 0x94b9d3, sun: 0xffefcd, sunI: 1.6, hemi: .84, night: 0 },
  { h: 12, sky: 0x83b9e5, sun: 0xfff7e1, sunI: 1.9, hemi: .92, night: 0 },
  { h: 16, sky: 0xa6c5dc, sun: 0xffe9c1, sunI: 1.45, hemi: .82, night: 0 },
  { h: 18, sky: 0xd18b73, sun: 0xffb17e, sunI: .74, hemi: .59, night: .5 },
  { h: 19.5, sky: 0x293c52, sun: 0xbacbed, sunI: .15, hemi: .36, night: .96 },
  { h: 22, sky: 0x101d2c, sun: 0x9bb9df, sunI: .09, hemi: .28, night: 1 },
  { h: 24, sky: 0x101d2c, sun: 0x9bb9df, sunI: .09, hemi: .28, night: 1 },
] as const;

const COLORS = STOPS.map((stop) => ({
  sky: new THREE.Color(stop.sky),
  sun: new THREE.Color(stop.sun),
}));

/** Pure time lookup; no changes to the underlying clock, calendar or save. */
export function samplePrisonLighting(minute: number, target: LightingProfile): LightingProfile {
  const h = ((minute % 1440) + 1440) % 1440 / 60;
  let i = 0;
  while (i < STOPS.length - 2 && h > STOPS[i + 1].h) i++;
  const a = STOPS[i], b = STOPS[i + 1];
  const t = THREE.MathUtils.clamp((h - a.h) / (b.h - a.h), 0, 1);
  target.sky.copy(COLORS[i].sky).lerp(COLORS[i + 1].sky, t);
  target.sunlight.copy(COLORS[i].sun).lerp(COLORS[i + 1].sun, t);
  target.sunIntensity = THREE.MathUtils.lerp(a.sunI, b.sunI, t);
  target.hemisphere = THREE.MathUtils.lerp(a.hemi, b.hemi, t);
  target.nightFactor = THREE.MathUtils.lerp(a.night, b.night, t);
  return target;
}

export function makeLightingProfile(): LightingProfile {
  return {
    sky: new THREE.Color(0x9ec5fe),
    sunlight: new THREE.Color(0xfff4d6),
    sunIntensity: 1.7,
    hemisphere: .85,
    nightFactor: 0,
  };
}
