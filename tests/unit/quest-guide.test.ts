import { describe, it, expect } from 'vitest';
import { QUESTS, QUEST_ORDER } from '../../src/data/quests';
import { createInitialState } from '../../src/logic/state';
import { resolveQuestDestination, QUEST_DESTINATIONS } from '../../src/logic/quest-guide';

describe('Data-driven Quest Guide & Auto-walk Destinations', () => {
  it('covers all 24 quests in QUEST_ORDER with destination definitions', () => {
    for (const qid of QUEST_ORDER) {
      expect(QUEST_DESTINATIONS[qid], `Quest ${qid} should be registered in QUEST_DESTINATIONS`).toBeDefined();
    }
  });

  it('resolves valid guide destination or hint for any active quest in initial state', () => {
    const s = createInitialState();
    // Start initial quest
    s.quests['nhap_trai'] = { status: 'active', startedAt: s.day, completedAt: null, objectives: {} };

    const dest = resolveQuestDestination('nhap_trai', s);
    expect(dest).not.toBeNull();
    expect(dest!.label).toBe('Giường của bạn (Nhận chăn màn)');
    expect(dest!.targetName).toBe('Giường của bạn');
    expect(dest!.tx).toBeCloseTo(-14.9, 1);
    expect(dest!.tz).toBeCloseTo(-28.6, 1);
  });

  it('resolves live NPC coordinates when available', () => {
    const s = createInitialState();
    s.quests['ca_dau'] = { status: 'active', startedAt: s.day, completedAt: null, objectives: {} };
    // Complete first two objectives to reach gap_bay
    s.flags['ca_dau:cham_cong'] = true;
    s.flags['ca_dau:lap_rap'] = true;

    const mockLiveNpcs = {
      bay: { x: 12.5, z: -3.5 },
    };

    const dest = resolveQuestDestination('ca_dau', s, mockLiveNpcs);
    expect(dest).not.toBeNull();
    expect(dest!.tx).toBe(12.5);
    expect(dest!.tz).toBe(-3.5);
    expect(dest!.label).toContain('Chú Bảy');
  });

  it('correctly marks closed zones as isLocked with safe waiting coords', () => {
    const s = createInitialState();
    s.quests['ca_dau'] = { status: 'active', startedAt: s.day, completedAt: null, objectives: {} };
    // At minute 360 (06:00), workshop is closed (opens at 08:00)
    s.minute = 360;

    const dest = resolveQuestDestination('ca_dau', s);
    expect(dest).not.toBeNull();
    expect(dest!.isLocked).toBe(true);
    expect(dest!.safeX).toBeDefined();
    expect(dest!.safeZ).toBeDefined();
  });

  it('handles hint-only steps without crashing and without physical coordinates', () => {
    const s = createInitialState();
    s.quests['sach_thu_vien'] = { status: 'active', startedAt: s.day, completedAt: null, objectives: {} };
    s.flags['sach_thu_vien:muon_sach'] = true;

    const dest = resolveQuestDestination('sach_thu_vien', s);
    expect(dest).not.toBeNull();
    expect(dest!.hint).toBeDefined();
  });

  it('resolves every quest in QUEST_ORDER at objective 0 without throwing', () => {
    const s = createInitialState();
    for (const qid of QUEST_ORDER) {
      s.quests[qid] = { status: 'active', startedAt: s.day, completedAt: null, objectives: {} };
      const dest = resolveQuestDestination(qid, s);
      expect(dest, `Destination for quest ${qid} should resolve`).not.toBeNull();
      expect(dest!.stepDesc).toBeTruthy();
    }
  });
});
