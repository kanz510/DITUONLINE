import { expect, it } from 'vitest';
import { GameLogic } from '../../src/logic/game';

it('records one mild escort penalty without crashing or duplicating it', () => {
  const g = new GameLogic();
  const health = g.s.stats.health;
  const reform = g.s.stats.reform;
  expect(() => g.recordViolation('disobedience', 'workshop-day1-close', 'Stayed after closing')).not.toThrow();
  g.recordViolation('disobedience', 'workshop-day1-close', 'Stayed after closing');
  expect(g.s.violations).toHaveLength(1);
  expect(g.s.stats.health).toBe(health);
  expect(g.s.stats.reform).toBeLessThan(reform);
});

it('ignores an unrecognised penalty without crashing or writing a corrupt record', () => {
  const g = new GameLogic();
  expect(g.recordViolation('unknown-test-penalty', 'unknown', 'Unknown')).toBeNull();
  expect(g.s.violations).toHaveLength(0);
});
