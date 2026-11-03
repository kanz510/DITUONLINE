import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { BUILDINGS, PROPS, EDGES } from '../../src/world/layout';
import { isConnected } from '../../src/world/nav';
import { makePrisonArchitecture } from '../../src/world/architecture';
import { PrisonAtmosphere, weatherForDay } from '../../src/world/atmosphere';
import { makeLightingProfile, samplePrisonLighting } from '../../src/world/lighting';

describe('Phase 3 render-only architectural upgrades', () => {
  it('builds all eight buildings from seven or fewer GPU-instanced batches', () => {
    const propsBefore = PROPS.length;
    const edgesBefore = EDGES.length;
    const arch = makePrisonArchitecture();
    expect(arch.root.name).toBe('phase3.architecture.render-only');
    expect(arch.fixtureAnchors.length).toBe(Object.keys(BUILDINGS).length);
    expect(arch.instancedBatches).toBeLessThanOrEqual(7);
    expect(arch.instanceCount).toBeGreaterThan(180);
    expect(arch.root.children.filter((o) => o instanceof THREE.InstancedMesh).length)
      .toBe(arch.instancedBatches);
    expect(PROPS.length).toBe(propsBefore);
    expect(EDGES.length).toBe(edgesBefore);
    expect(isConnected()).toBe(true);
  });
});

describe('Phase 3 visual time and weather', () => {
  it('interpolates sunlight, horizon and indoor glow without modifying time', () => {
    const profile = makeLightingProfile();
    samplePrisonLighting(12 * 60, profile);
    const dayStrength = profile.sunIntensity;
    const noonSky = profile.sky.getHex();
    const dayNight = profile.nightFactor;
    samplePrisonLighting(23 * 60, profile);
    expect(profile.sunIntensity).toBeLessThan(dayStrength);
    expect(profile.sky.getHex()).not.toBe(noonSky);
    expect(profile.nightFactor).toBeGreaterThan(dayNight);
    samplePrisonLighting(18 * 60, profile);
    expect(profile.nightFactor).toBeGreaterThan(0);
    expect(profile.nightFactor).toBeLessThan(1);
  });

  it('uses deterministic weather based exclusively on day and local clock time', () => {
    expect(weatherForDay(2, 17 * 60)).toBe('rain');
    expect(weatherForDay(3, 17 * 60)).toBe('clear');
    expect(weatherForDay(3, 6 * 60)).toBe('haze');
  });

  it('quality disables particles on Low and bounds particles on Medium/High', () => {
    const scene = new THREE.Scene();
    const sky = new PrisonAtmosphere(scene);
    expect(sky.rainGeometry.attributes.position.count).toBe(420);
    sky.setQuality('low');
    sky.update(.03, 2, 17 * 60, 0, 0);
    expect(sky.snapshot()).toMatchObject({
      rainParticles: 0, dustParticles: 0, rainVisible: false,
    });
    sky.setQuality('medium');
    sky.update(.4, 2, 17 * 60, 0, 0);
    expect(sky.snapshot()).toMatchObject({
      rainParticles: 160, dustParticles: 24, rainVisible: true,
    });
    sky.setQuality('high');
    sky.update(.4, 2, 17 * 60, 0, 0);
    expect(sky.snapshot()).toMatchObject({
      rainParticles: 420, dustParticles: 78, rainVisible: true,
    });
    sky.update(.5, 3, 12 * 60, 20, -2);
    expect(sky.snapshot()).toMatchObject({ rainVisible: false, dustVisible: true });
  });
});
