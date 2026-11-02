import { DAY_START, START_SENTENCE } from './constants';

export const SAVE_VERSION = 1;

export type NpcId = 'bay' | 'huy' | 'lam' | 'lan' | 'tung' | 'tu' | 'son' | 'khai';
export const STORY_NPCS: NpcId[] = ['bay', 'huy', 'lam', 'lan', 'tung'];

export interface Stats {
  health: number; // 0..100
  stamina: number; // 0..100
  hunger: number; // 0..100 (cao = đói)
  stress: number; // 0..100
  money: number; // nghìn đồng
  reform: number; // 0..100 điểm cải tạo
  suspicion: number; // 0..100
}

export type ViolationStatus = 'active' | 'overturned' | 'upheld';

export interface Violation {
  id: string;
  key: string; // khoá chống trùng
  type: string;
  title: string;
  day: number;
  minute: number;
  evidence: string;
  penalty: string;
  reformDelta: number;
  severity: 0 | 1 | 2 | 3; // 0 = nhắc nhở, 3 = nghiêm trọng
  status: ViolationStatus;
  appealed: boolean;
  appealTag?: string; // điều kiện chứng minh oan
}

export type QuestStatus = 'locked' | 'active' | 'done' | 'failed';

export interface QuestState {
  status: QuestStatus;
  step: number;
  rewarded: boolean;
  outcome?: string;
  startedDay?: number;
  choices: string[];
}

export interface Relation {
  value: number; // -100..100
  met: boolean;
  memories: { day: number; text: string }[];
  lastTalkDay: number;
  lastGiftDay: number;
}

export type Obligation = 'pending' | 'ok' | 'late' | 'missed' | 'excused';

export interface DailyRecord {
  rollcall: Obligation;
  work: Obligation; // ok = đủ chỉ tiêu
  workClockedIn: boolean;
  workUnits: number;
  workQuality: number; // tổng chất lượng
  workPaid: boolean;
  extraShiftUnits: number;
  meals: { breakfast: boolean; lunch: boolean; dinner: boolean };
  curfew: Obligation;
  reformGained: number; // từ hoạt động lặp lại
  exercise: number;
  searchedToday: boolean;
  startStats: Stats;
  startRelations: Record<string, number>;
  events: string[];
}

export interface DaySummary {
  day: number;
  rollcall: Obligation;
  work: Obligation;
  workUnits: number;
  meals: number;
  reformDelta: number;
  moneyDelta: number;
  violations: string[];
  relationChanges: { npc: string; delta: number }[];
  served: boolean;
  review?: ReviewResult;
  remainingAfter: number;
  events: string[];
}

export interface ReviewResult {
  day: number;
  reduction: number;
  breakdown: { label: string; value: number }[];
  score: number;
}

export interface SentenceState {
  total: number;
  remaining: number;
  served: number;
  lastServedDay: number;
  reviewsDone: number[];
  reformAtLastReview: number;
  additions: { day: number; amount: number; reason: string }[];
  reductions: { day: number; amount: number; reason: string }[];
}

export interface Hearing {
  id: string;
  title: string;
  charge: string;
  evidence: string[];
  baseDays: number;
  canExplain: boolean;
  explainTag: string;
}

export interface GameState {
  version: number;
  createdAt: number;
  day: number;
  minute: number;
  chapter: number;
  stats: Stats;
  sentence: SentenceState;
  daily: DailyRecord;
  history: DaySummary[];
  violations: Violation[];
  quests: Record<string, QuestState>;
  relations: Record<string, Relation>;
  inventory: Record<string, number>;
  flags: Record<string, number | boolean | string>;
  skills: { workShifts: number; exerciseSessions: number; fitness: number };
  player: { x: number; z: number; rot: number };
  ending: string | null;
  hearing: Hearing | null;
  nextId: number;
  settings: { quality: 'low' | 'medium' | 'high'; volume: number; guide: boolean; sensitivity: number };
}

export function clampStat(v: number, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, v));
}

export function makeDaily(stats: Stats, relations: Record<string, Relation>): DailyRecord {
  const startRelations: Record<string, number> = {};
  for (const k of Object.keys(relations)) startRelations[k] = relations[k].value;
  return {
    rollcall: 'pending',
    work: 'pending',
    workClockedIn: false,
    workUnits: 0,
    workQuality: 0,
    workPaid: false,
    extraShiftUnits: 0,
    meals: { breakfast: false, lunch: false, dinner: false },
    curfew: 'pending',
    reformGained: 0,
    exercise: 0,
    searchedToday: false,
    startStats: { ...stats },
    startRelations,
    events: [],
  };
}

export function createInitialState(): GameState {
  const stats: Stats = { health: 90, stamina: 85, hunger: 35, stress: 45, money: 20, reform: 40, suspicion: 0 };
  const relations: Record<string, Relation> = {};
  const base: Record<NpcId, number> = { bay: 5, huy: 0, lam: 0, lan: 0, tung: 0, tu: 0, son: 0, khai: 0 };
  for (const id of Object.keys(base) as NpcId[]) {
    relations[id] = { value: base[id], met: false, memories: [], lastTalkDay: 0, lastGiftDay: 0 };
  }
  return {
    version: SAVE_VERSION,
    createdAt: Date.now(),
    day: 1,
    minute: DAY_START,
    chapter: 1,
    stats,
    sentence: {
      total: START_SENTENCE,
      remaining: START_SENTENCE,
      served: 0,
      lastServedDay: 0,
      reviewsDone: [],
      reformAtLastReview: stats.reform,
      additions: [],
      reductions: [],
    },
    daily: makeDaily(stats, relations),
    history: [],
    violations: [],
    quests: {},
    relations,
    inventory: { ao_tu: 1, the_pham_nhan: 1 },
    flags: {},
    skills: { workShifts: 0, exerciseSessions: 0, fitness: 0 },
    player: { x: -14.25, z: -27.6, rot: 0 },
    ending: null,
    hearing: null,
    nextId: 1,
    settings: { quality: 'medium', volume: 0.7, guide: true, sensitivity: 1 },
  };
}
