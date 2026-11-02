import { MAX_REVIEW_REDUCTION, MAX_TOTAL_ADDITION, REVIEW_INTERVAL } from './constants';
import type { GameState, ReviewResult } from './state';

/** Hệ thống án hư cấu phục vụ gameplay — không mô phỏng pháp luật thực tế. */

export function isReviewDay(day: number) {
  return day > 0 && day % REVIEW_INTERVAL === 0;
}

export function nextReviewDay(s: GameState): number {
  let d = Math.ceil(s.day / REVIEW_INTERVAL) * REVIEW_INTERVAL;
  if (d === 0) d = REVIEW_INTERVAL;
  while (s.sentence.reviewsDone.includes(d)) d += REVIEW_INTERVAL;
  return d;
}

/** Tính điểm xét giảm án cho kỳ kết thúc vào ngày `day` (gồm cả hôm nay đang chơi). */
export function computeReview(s: GameState, day: number): ReviewResult {
  const from = day - REVIEW_INTERVAL + 1;
  const days = s.history.filter((h) => h.day >= from && h.day <= day);
  // ngày hiện tại chưa vào history → tính trực tiếp từ daily nếu đúng ngày
  const todayWork = s.day === day ? (s.daily.work === 'ok' ? 1 : 0) : 0;
  const todayRoll = s.day === day ? (s.daily.rollcall === 'ok' || s.daily.rollcall === 'excused' ? 1 : 0) : 0;
  const workDays = days.filter((h) => h.work === 'ok').length + todayWork;
  const rollOk = days.filter((h) => h.rollcall === 'ok' || h.rollcall === 'excused').length + todayRoll;
  const periodDays = Math.min(REVIEW_INTERVAL, day);

  const reformGain = s.stats.reform - s.sentence.reformAtLastReview;
  const breakdown: { label: string; value: number }[] = [];

  let reformPts = 0;
  if (reformGain >= 20) reformPts = 1.5;
  else if (reformGain >= 12) reformPts = 1;
  else if (reformGain >= 6) reformPts = 0.5;
  breakdown.push({ label: `Điểm cải tạo tăng ${reformGain >= 0 ? '+' : ''}${reformGain} trong kỳ`, value: reformPts });

  let workPts = 0;
  if (workDays >= periodDays) workPts = 1;
  else if (workDays >= Math.ceil(periodDays * 0.6)) workPts = 0.5;
  breakdown.push({ label: `Lao động đủ chỉ tiêu ${workDays}/${periodDays} ngày`, value: workPts });

  const rollPts = rollOk >= periodDays ? 0.5 : 0;
  breakdown.push({ label: `Điểm danh đúng giờ ${rollOk}/${periodDays} ngày`, value: rollPts });

  const levelPts = s.stats.reform >= 70 ? 0.5 : s.stats.reform >= 55 ? 0.25 : 0;
  breakdown.push({ label: `Mức cải tạo hiện tại ${s.stats.reform}/100`, value: levelPts });

  const vio = s.violations.filter((v) => v.day >= from && v.day <= day && v.status !== 'overturned');
  const sevSum = vio.reduce((a, v) => a + v.severity, 0);
  const serious = vio.some((v) => v.severity >= 3);
  breakdown.push({ label: `Vi phạm trong kỳ: ${vio.length} (mức nặng cộng dồn ${sevSum})`, value: -sevSum });

  let score = reformPts + workPts + rollPts + levelPts - sevSum;
  if (serious) {
    breakdown.push({ label: 'Có hành vi nghiêm trọng → không xét giảm kỳ này', value: 0 });
    score = Math.min(score, 0);
  }
  const reduction = Math.max(0, Math.min(MAX_REVIEW_REDUCTION, Math.floor(score + 1e-6)));
  return { day, reduction, breakdown, score };
}

/** Trừ 1 ngày án cho ngày `day` nếu chưa trừ. Trả về true nếu đã trừ. */
export function serveDay(s: GameState, day: number): boolean {
  if (s.sentence.lastServedDay >= day) return false;
  s.sentence.lastServedDay = day;
  if (s.sentence.remaining > 0) {
    s.sentence.remaining -= 1;
    s.sentence.served += 1;
  }
  return true;
}

/** Áp dụng kỳ xét giảm án; không bao giờ trùng, không bao giờ âm. */
export function applyReview(s: GameState, day: number): ReviewResult | null {
  if (!isReviewDay(day) || s.sentence.reviewsDone.includes(day)) return null;
  const r = computeReview(s, day);
  const amount = Math.min(r.reduction, s.sentence.remaining);
  r.reduction = amount;
  s.sentence.reviewsDone.push(day);
  s.sentence.reformAtLastReview = s.stats.reform;
  if (amount > 0) {
    s.sentence.remaining -= amount;
    s.sentence.reductions.push({ day, amount, reason: `Kỳ xét giảm án ngày ${day}` });
  }
  return r;
}

/** Cộng án sau phiên xét xử. Có trần tổng để không mất đường tiến triển. */
export function addSentence(s: GameState, amount: number, reason: string, day: number): number {
  const already = s.sentence.additions.reduce((a, x) => a + x.amount, 0);
  const allowed = Math.max(0, Math.min(amount, MAX_TOTAL_ADDITION - already));
  if (allowed > 0) {
    s.sentence.remaining += allowed;
    s.sentence.total += allowed;
    s.sentence.additions.push({ day, amount: allowed, reason });
  }
  return allowed;
}

export interface Projection {
  remaining: number;
  nextReview: number;
  releaseNoReduction: number;
  releaseEstimated: number;
  estimatedPerReview: number;
}

export function project(s: GameState): Projection {
  const remaining = s.sentence.remaining;
  const servedToday = s.sentence.lastServedDay >= s.day;
  // ngày cuối: hôm nay chưa trừ → ra tù cuối ngày (day + remaining - 1)
  const releaseNoReduction = servedToday ? s.day + remaining : s.day + remaining - 1;
  const nr = nextReviewDay(s);
  const est = computeReview(s, nr).reduction;
  // ước tính đơn giản: mỗi kỳ giảm `est` ngày
  let rem = remaining;
  let d = servedToday ? s.day + 1 : s.day;
  const done = new Set(s.sentence.reviewsDone);
  let guard = 0;
  while (rem > 0 && guard++ < 500) {
    rem -= 1;
    if (d % REVIEW_INTERVAL === 0 && !done.has(d)) rem -= Math.min(est, Math.max(0, rem));
    if (rem <= 0) break;
    d++;
  }
  return { remaining, nextReview: nr, releaseNoReduction, releaseEstimated: d, estimatedPerReview: est };
}
