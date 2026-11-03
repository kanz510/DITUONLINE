import { describe, it, expect, vi } from 'vitest';
import { SoundEngine } from '../../src/core/audio';
import { GameLogic } from '../../src/logic/game';
import { createInitialState } from '../../src/logic/state';

describe('VIỆC 9 — Nhạc nền & hiệu ứng âm thanh WebAudio', () => {
  it('9a: SoundEngine initializes with BGM enabled and allows toggling BGM', () => {
    const sfx = new SoundEngine();
    expect(sfx.isBgmEnabled()).toBe(true);

    sfx.setBgmEnabled(false);
    expect(sfx.isBgmEnabled()).toBe(false);

    sfx.setBgmEnabled(true);
    expect(sfx.isBgmEnabled()).toBe(true);

    sfx.stopBgm();
  });

  it('9b: All new synthesized SFX methods exist and execute safely in headless environments', () => {
    const sfx = new SoundEngine();
    sfx.volume = 0.8;

    // Must not throw in headless / nodejs test runner
    expect(() => sfx.door()).not.toThrow();
    expect(() => sfx.eat()).not.toThrow();
    expect(() => sfx.hammer()).not.toThrow();
    expect(() => sfx.workout()).not.toThrow();
    expect(() => sfx.sleepBell()).not.toThrow();
    expect(() => sfx.levelUp()).not.toThrow();
    expect(() => sfx.officerWhistle()).not.toThrow();
    expect(() => sfx.questComplete()).not.toThrow();
    expect(() => sfx.setRain(true)).not.toThrow();
    expect(() => sfx.setRain(false)).not.toThrow();
  });

  it('9b: Zero volume safely suppresses audio and does not crash', () => {
    const sfx = new SoundEngine();
    sfx.volume = 0;

    expect(() => {
      sfx.tone(440);
      sfx.bell();
      sfx.door();
      sfx.eat();
      sfx.hammer();
      sfx.workout();
      sfx.sleepBell();
      sfx.levelUp();
      sfx.officerWhistle();
      sfx.questComplete();
      sfx.setRain(true);
      sfx.startBgm();
    }).not.toThrow();
  });

  it('9b: GameLogic emits workUnit and levelUp events', () => {
    const g = new GameLogic(createInitialState());
    let workEmitted = false;
    let levelEmitted = false;

    g.on('workUnit', () => { workEmitted = true; });
    g.on('levelUp', () => { levelEmitted = true; });

    // Advance to morning shift 08:30 (minute 510) and clock in
    g.s.minute = 510;
    g.clockIn();
    g.finishWorkUnit(85);
    expect(workEmitted).toBe(true);

    // Gain enough XP to level up
    g.gainXp(120, 'Test level up');
    expect(levelEmitted).toBe(true);
  });
});
