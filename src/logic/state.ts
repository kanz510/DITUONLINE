import { BACKGROUNDS, DAY_START, START_SENTENCE, type BackgroundId, type Difficulty } from './constants';
import type { IncidentState } from './incidents';
export type { IncidentState, IncidentType } from './incidents';

export const SAVE_VERSION = 3;

export interface CharacterProfile {
  name: string;
  preset: number;
  skin: number;
  hair: number;
  hairStyle: 'short' | 'buzz' | 'bald';
  background: BackgroundId;
  difficulty: Difficulty;
  flashbackChoice?: 'keep_doc' | 'help_victim' | 'chase_contact';
  introSeen: boolean;
}

export interface Attributes {
  endurance: number;  // Bền bỉ: 1..5
  agility: number;    // Khéo léo: 1..5
  perception: number; // Quan sát: 1..5
  charisma: number;   // Giao tiếp: 1..5
}

export interface Progression {
  level: number;       // 1..10
  xp: number;
  skillPoints: number;
  attrs: Attributes;
}

export function xpForNextLevel(level: number): number {
  if (level >= 10) return Infinity;
  return 80 + 30 * (level - 1);
}

export type NpcId = 'bay' | 'huy' | 'lam' | 'lan' | 'tung' | 'tu' | 'son' | 'khai' | 'phuc' | 'an' | 'mai';
export const STORY_NPCS: NpcId[] = ['bay', 'huy', 'lam', 'lan', 'tung', 'phuc', 'an', 'mai'];

export interface Stats {
  health: number; // 0..100 (0 yếu/ngất, 100 khỏe)
  stamina: number; // 0..100 (0 kiệt sức, 100 hồi đầy)
  satiety: number; // 0..100 (độ no: 0 đói lả, 100 no căng)
  morale: number; // 0..100 (tinh thần: 0 suy sụp, 100 ổn định)
  money: number; // nghìn đồng
  reform: number; // 0..100 điểm cải tạo
  suspicion: number; // 0..100
  hunger?: number; // tương thích ngược: 100 - satiety
  stress?: number; // tương thích ngược: 100 - morale
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

export type DailyTaskCategory = 'duty' | 'relation' | 'personal';

export interface DailyTask {
  id: string;
  category: DailyTaskCategory;
  title: string;
  desc: string;
  timeHint?: string;
  targetNpc?: NpcId;
  targetWhere?: string;
  startMinute?: number;
  endMinute?: number;
  done: boolean;
  skipped?: boolean;
}

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
  tasks: DailyTask[];
  allTasksBonusAwarded?: boolean;
  morningPopupShown?: boolean;
  startStats: Stats;
  startRelations: Record<string, number>;
  events: string[];
  incident?: IncidentState | null;
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
  profile: CharacterProfile;
  progression: Progression;
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
  clues: string[];
  flags: Record<string, number | boolean | string>;
  skills: { workShifts: number; exerciseSessions: number; fitness: number; vocationalExam: number };
  player: { x: number; z: number; rot: number };
  ending: string | null;
  hearing: Hearing | null;
  nextId: number;
  settings: {
    quality: 'low' | 'medium' | 'high';
    volume: number;
    guide: boolean;
    sensitivity: number;
    cameraMode?: 'third' | 'first';
    npcVoice?: boolean;
    bgm?: boolean;
  };
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
    tasks: [],
    allTasksBonusAwarded: false,
    morningPopupShown: false,
    startStats: { ...stats },
    startRelations,
    events: [],
    incident: null,
  };
}

export function createStats(s: Partial<Stats> = {}): Stats {
  const obj: Stats = {
    health: s.health ?? 90,
    stamina: s.stamina ?? 85,
    satiety: s.satiety ?? (s.hunger !== undefined ? clampStat(100 - s.hunger) : 65),
    morale: s.morale ?? (s.stress !== undefined ? clampStat(100 - s.stress) : 55),
    money: s.money ?? 20,
    reform: s.reform ?? 40,
    suspicion: s.suspicion ?? 0,
  };
  Object.defineProperty(obj, 'hunger', {
    get() { return 100 - this.satiety; },
    set(v: number) { this.satiety = clampStat(100 - v); },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(obj, 'stress', {
    get() { return 100 - this.morale; },
    set(v: number) { this.morale = clampStat(100 - v); },
    enumerable: true,
    configurable: true,
  });
  return obj;
}

export function createInitialState(customProfile?: Partial<CharacterProfile>): GameState {
  const profile: CharacterProfile = {
    name: 'Minh',
    preset: 0,
    skin: 0xe2b48d,
    hair: 0x18181b,
    hairStyle: 'short',
    background: 'mechanic',
    difficulty: 'normal',
    introSeen: false,
    ...customProfile,
  };

  // Áp dụng điểm khởi đầu thuộc tính dựa theo Xuất thân
  const bgDef = BACKGROUNDS[profile.background] || BACKGROUNDS.mechanic;
  const attrs: Attributes = {
    endurance: 1 + (bgDef.bonusAttrs.endurance || 0),
    agility: 1 + (bgDef.bonusAttrs.agility || 0),
    perception: 1 + (bgDef.bonusAttrs.perception || 0),
    charisma: 1 + (bgDef.bonusAttrs.charisma || 0),
  };

  const progression: Progression = {
    level: 1,
    xp: 0,
    skillPoints: 0,
    attrs,
  };

  const stats = createStats();
  const relations: Record<string, Relation> = {};
  const base: Record<NpcId, number> = { bay: 5, huy: 0, lam: 0, lan: 0, tung: 0, tu: 0, son: 0, khai: 0, phuc: 0, an: 0, mai: 20 };
  for (const id of Object.keys(base) as NpcId[]) {
    relations[id] = { value: base[id], met: false, memories: [], lastTalkDay: 0, lastGiftDay: 0 };
  }
  return {
    version: SAVE_VERSION,
    createdAt: Date.now(),
    profile,
    progression,
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
    clues: [],
    flags: {},
    skills: { workShifts: 0, exerciseSessions: 0, fitness: 0, vocationalExam: 0 },
    player: { x: -14.25, z: -27.6, rot: 0 },
    ending: null,
    hearing: null,
    nextId: 1,
    settings: { quality: 'medium', volume: 0.7, guide: true, sensitivity: 1, cameraMode: 'third', npcVoice: true, bgm: true },
  };
}
