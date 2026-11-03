import type { GameState, DailyTask, NpcId } from './state';
import { NPCS } from '../data/npcs';
import { QUESTS } from '../data/quests';

export interface ScheduleItem {
  id: string;
  label: string;
  timeRange: string;
  start: number;
  end: number;
  status: 'past' | 'active' | 'upcoming';
  where?: string;
}

export const NPC_NAMES: Record<NpcId, string> = {
  bay: 'Chú Bảy',
  huy: 'Huy (Bạn buồng)',
  lam: 'Lâm "Đầu bò"',
  lan: 'Quản giáo Lan',
  tung: 'Cán bộ Tùng',
  tu: 'Tú "Sẹo"',
  son: 'Sơn "Chuột"',
  khai: 'Khải "Già"',
  phuc: 'Thầy Phúc',
  an: 'Y sĩ An',
  mai: 'Chị Mai',
};

/** Kiểm tra NPC có mặt trong trại hôm nay không (loại trừ người vắng mặt). */
export function isNpcPresentToday(id: NpcId, _day: number, s?: GameState): boolean {
  if (id === 'mai') {
    // Chị Mai là thân nhân thăm gặp, chỉ có mặt khi có nhiệm vụ thăm gặp mở hoặc cờ mai_visit
    if (!s) return false;
    return s.quests.phong_tham_gap?.status === 'active' || Boolean(s.flags?.mai_visit);
  }
  if (s?.flags?.[`absent_${id}`]) return false;
  return true;
}

/** Thông tin chi tiết khung giờ chờ của nhiệm vụ chính/phụ hiện tại. */
export interface QuestWaitingDetails {
  waiting: boolean;
  timeRange?: string;
  hint?: string;
}

export function getQuestWaitingDetails(s: GameState): QuestWaitingDetails {
  if (s.quests.lop_nghe_dau?.status === 'active') {
    // Lớp học nghề mở cửa 14:00–16:30 (840–990)
    if (s.minute < 840 || s.minute > 990) {
      return {
        waiting: true,
        timeRange: '14:00–16:30',
        hint: 'Chờ mở cửa: 14:00–16:30 (Trong lúc chờ: Làm việc ngày / rèn luyện thể lực)',
      };
    }
  }
  if (s.quests.phong_tham_gap?.status === 'active') {
    // Thăm gặp mở 08:30–11:00 (510–660) & 14:00–16:30 (840–990)
    const inMorn = s.minute >= 510 && s.minute <= 660;
    const inAft = s.minute >= 840 && s.minute <= 990;
    if (!inMorn && !inAft) {
      return {
        waiting: true,
        timeRange: '08:30–11:00 & 14:00–16:30',
        hint: 'Chờ mở cửa: 08:30–11:00 & 14:00–16:30 (Trong lúc chờ: Làm việc ngày / rèn luyện thể lực)',
      };
    }
  }
  if (s.quests.nghi_an_thuoc?.status === 'active') {
    // Phòng y tế mở 07:30–11:30 (450–690) & 13:30–17:00 (810–1020)
    const inMorn = s.minute >= 450 && s.minute <= 690;
    const inAft = s.minute >= 810 && s.minute <= 1020;
    if (!inMorn && !inAft) {
      return {
        waiting: true,
        timeRange: '07:30–11:30 & 13:30–17:00',
        hint: 'Chờ mở cửa: 07:30–11:30 & 13:30–17:00 (Trong lúc chờ: Làm việc ngày / rèn luyện thể lực)',
      };
    }
  }
  return { waiting: false };
}

export interface QuestOverdueDetails {
  overdue: boolean;
  qId?: string;
  message?: string;
  timeRange?: string;
  failure?: string;
}

export function getQuestOverdueStatus(qId: string, s: GameState): QuestOverdueDetails {
  const q = s.quests[qId];
  if (!q || q.status !== 'active') return { overdue: false };
  const qDef = QUESTS[qId];
  if (!qDef) return { overdue: false };

  const br = (s.flags[`${qId}:branch`] as string) || '';
  const curObj = qDef.objectives.find((o) => (!o.branch || o.branch === br) && !s.flags[`${qId}:${o.id}`]);
  if (!curObj) return { overdue: false };

  let isOverdue = false;
  let timeRange = '';

  if (qId === 'nhap_trai' && curObj.id === 'diem_danh') {
    if (s.minute > 405) {
      isOverdue = true;
      timeRange = '06:30–06:45';
    }
  } else if (qId === 'ca_dau') {
    if (curObj.id === 'cham_cong' && s.minute > 510) {
      isOverdue = true;
      timeRange = '08:00–08:30';
    } else if (curObj.id === 'lao_dong' && s.minute > 690) {
      isOverdue = true;
      timeRange = '08:00–11:30';
    }
  } else if (qId === 'lop_nghe_dau' && curObj.id === 'den_lop') {
    if (s.minute > 990) {
      isOverdue = true;
      timeRange = '14:00–16:30';
    }
  } else if (qId === 'phong_tham_gap' && curObj.id === 'gap_mai') {
    if (s.minute > 990 || (s.minute > 660 && s.minute < 840)) {
      isOverdue = true;
      timeRange = '08:30–11:00 & 14:00–16:30';
    }
  }

  if (isOverdue) {
    const failureMsg = qDef.failure?.trim();
    const reason = failureMsg && failureMsg.length > 0 ? failureMsg : `Thử lại vào ${timeRange} sáng mai`;
    return {
      overdue: true,
      qId,
      timeRange,
      failure: failureMsg,
      message: `Đã qua giờ — ${reason}`,
    };
  }
  return { overdue: false };
}

export function getActiveQuestOverdue(s: GameState): QuestOverdueDetails {
  for (const qid of Object.keys(s.quests)) {
    if (s.quests[qid]?.status === 'active') {
      const res = getQuestOverdueStatus(qid, s);
      if (res.overdue) return res;
    }
  }
  return { overdue: false };
}

/** Quy tắc và mốc cốt truyện mở nhiệm vụ phụ. */
export const SIDE_QUEST_UNLOCK_RULES: Record<
  string,
  { milestone: string; condition: string; isUnlocked: (s: GameState) => boolean }
> = {
  dep_bay: {
    milestone: 'Hoàn thành nhiệm vụ chính "Nhập trại & ổn định chỗ ở" (Chương 1)',
    condition: 'Đã làm quen Chú Bảy tại buồng giam số 3 hoặc nhà ăn',
    isUnlocked: (s) => Boolean(s.flags['nhap_trai:gap_bay'] || s.quests.nhap_trai?.status === 'done'),
  },
  mi_cho_huy: {
    milestone: 'Hoàn thành nhiệm vụ chính "Nhập trại & ổn định chỗ ở" (Chương 1)',
    condition: 'Gặp bạn cùng buồng Huy sau khi ổn định chỗ ở',
    isUnlocked: (s) => Boolean(s.quests.nhap_trai?.status === 'done'),
  },
  lao_dong_phu: {
    milestone: 'Hoàn thành nhiệm vụ chính "Nhập trại & ổn định chỗ ở" (Chương 1)',
    condition: 'Sau ca lao động sáng tại xưởng',
    isUnlocked: (s) => Boolean(s.quests.nhap_trai?.status === 'done'),
  },
  phong_tham_gap: {
    milestone: 'Hoàn thành nhiệm vụ chính "Món nợ đầu tiên" (Bắt đầu Chương 2)',
    condition: 'Đến phòng thăm gặp trong khung giờ tiếp đón (08:30–11:00 & 14:00–16:30)',
    isUnlocked: (s) => Boolean(s.quests.mon_no?.status === 'done' || s.quests.mon_no?.status === 'failed' || s.chapter >= 2),
  },
  sach_thu_vien: {
    milestone: 'Hoàn thành nhiệm vụ chính "Bài học nghề đầu tiên" (Chương 2)',
    condition: 'Đạt chứng chỉ nghề và đến Thư viện lớp học nghề',
    isUnlocked: (s) => Boolean(s.quests.lop_nghe_dau?.status === 'done' || s.inventory.chung_chi_nghe),
  },
  phu_y_te: {
    milestone: 'Hoàn thành nhiệm vụ chính "Nghi án giấu thuốc" (Chương 2)',
    condition: 'Đến phòng y tế trong khung giờ làm việc (07:30–11:30 & 13:30–17:00)',
    isUnlocked: (s) => Boolean(s.quests.nghi_an_thuoc?.status === 'done'),
  },
  sua_quat_phong_hoc: {
    milestone: 'Hoàn thành nhiệm vụ chính "Đối chiếu sổ sách & chứng từ" (Chương 3)',
    condition: 'Có chứng chỉ nghề hoặc xuất thân Thợ xe, đến Lớp học nghề',
    isUnlocked: (s) => Boolean(s.quests.doi_chieu_chung_tu?.status === 'done'),
  },
  truyen_nghe_cho_huy: {
    milestone: 'Hoàn thành nhiệm vụ chính "Bẫy vật cấm buồng giam" (Bắt đầu Chương 4)',
    condition: 'Có chứng chỉ nghề và quan hệ với Huy ≥ 15',
    isUnlocked: (s) => Boolean(s.quests.bay_vat_cam?.status === 'done' || s.chapter >= 4),
  },
  chia_tay_thay_phuc: {
    milestone: 'Hoàn thành nhiệm vụ chính "Bẫy vật cấm buồng giam" (Bắt đầu Chương 4)',
    condition: 'Hoàn thành "Bài học nghề đầu tiên" và "Sửa quạt phòng học"',
    isUnlocked: (s) => Boolean(s.quests.bay_vat_cam?.status === 'done' || s.chapter >= 4),
  },
  kiem_tra_suc_khoe: {
    milestone: 'Hoàn thành nhiệm vụ chính "Bẫy vật cấm buồng giam" (Bắt đầu Chương 4)',
    condition: 'Đến phòng y tế làm thủ tục kiểm tra sức khỏe xuất trại',
    isUnlocked: (s) => Boolean(s.quests.bay_vat_cam?.status === 'done' || s.chapter >= 4),
  },
};

/** Kiểm tra bước quest chính hiện tại có đang chờ khung giờ mở cửa hay không. */
export function isQuestWaitingForTime(s: GameState): boolean {
  if (s.flags?.quest_waiting_for_time) return true;
  return getQuestWaitingDetails(s).waiting;
}

/** Sinh đúng 3 mục tiêu ngày theo thứ tự ưu tiên cố định và quy tắc loại trừ khung giờ đã qua. */
export function generateDailyTasks(s: GameState): DailyTask[] {
  const tasks: DailyTask[] = [];
  const min = s.minute;

  // 1. VIỆC TRỰC (Duty)
  // Quy tắc: không giao việc có khung giờ đã qua (endMinute <= s.minute).
  // Ưu tiên điểm danh nếu chưa xong và chưa qua (deadline 07:00 = 420)
  if (s.daily.rollcall === 'pending' && min < 420) {
    tasks.push({
      id: 'duty_rollcall',
      category: 'duty',
      title: 'Điểm danh buổi sáng',
      desc: 'Có mặt ở ô vàng ngoài sân trước 06:45 để điểm danh đầu ngày.',
      timeHint: '06:30–06:45',
      startMinute: 390,
      endMinute: 420,
      done: false,
    });
  } else if (!s.daily.workClockedIn && min < 690) {
    tasks.push({
      id: 'duty_clockin',
      category: 'duty',
      title: 'Chấm công ca sáng',
      desc: 'Đến xưởng lao động bấm bảng chấm công trước 08:30.',
      timeHint: '08:00–11:30',
      startMinute: 480,
      endMinute: 690,
      done: s.daily.workClockedIn,
    });
  } else if (min < 990) {
    tasks.push({
      id: 'duty_work_units',
      category: 'duty',
      title: 'Hoàn thành sản phẩm xưởng',
      desc: 'Lắp ráp ổ cắm điện tại bàn xưởng để tích lũy sản phẩm.',
      timeHint: 'Trước 16:30',
      startMinute: 480,
      endMinute: 990,
      done: s.daily.workUnits >= 3,
    });
  } else {
    tasks.push({
      id: 'duty_curfew',
      category: 'duty',
      title: 'Điểm danh buồng giam tối',
      desc: 'Có mặt tại buồng giam số 3 trước 21:30 để điểm danh & tắt đèn.',
      timeHint: '21:00–21:30',
      startMinute: 1260,
      endMinute: 1320,
      done: s.daily.curfew === 'ok',
    });
  }

  // 2. VIỆC QUAN HỆ (Relation)
  // Gặp NPC có quan hệ thấp nhất trong số NPC đã biết (met === true), chỉ chỗ bằng whereHint.
  // Bỏ qua NPC không có mặt hôm nay.
  const knownNpcs = (Object.keys(s.relations) as NpcId[]).filter((id) => {
    return s.relations[id]?.met && isNpcPresentToday(id, s.day, s);
  });

  if (knownNpcs.length > 0) {
    // Sắp xếp tăng dần theo điểm quan hệ (thấp nhất xếp đầu)
    knownNpcs.sort((a, b) => (s.relations[a]?.value ?? 0) - (s.relations[b]?.value ?? 0));
    const targetNpc = knownNpcs[0];
    const npcDef = NPCS[targetNpc];
    const npcName = NPC_NAMES[targetNpc] ?? targetNpc;
    const where = npcDef?.whereHint ?? 'khuôn viên trại';
    tasks.push({
      id: `rel_${targetNpc}`,
      category: 'relation',
      title: `Gặp gỡ ${npcName}`,
      desc: `Trò chuyện với ${npcName} (${where}) để tìm hiểu và cải thiện quan hệ.`,
      targetNpc,
      targetWhere: where,
      done: false,
    });
  } else {
    tasks.push({
      id: 'rel_bay',
      category: 'relation',
      title: 'Làm quen Chú Bảy',
      desc: 'Trò chuyện với Chú Bảy (buồng 3 / nhà ăn giờ ăn) để tìm hiểu nội quy trại.',
      targetNpc: 'bay',
      targetWhere: NPCS.bay?.whereHint ?? 'buồng 3 / nhà ăn',
      done: false,
    });
  }

  // 3. VIỆC CÁ NHÂN (Personal)
  // Bước quest chính đang mở; nếu quest chính đang chờ khung giờ thì giao rèn luyện hoặc đọc sách
  const isWaiting = isQuestWaitingForTime(s);
  let activeQuestTitle = '';
  let activeQuestDesc = '';

  for (const [qid, qst] of Object.entries(s.quests)) {
    if (qst.status === 'active') {
      const qDef = QUESTS[qid];
      activeQuestTitle = qDef?.title ?? qid;
      const stepIdx = qst.step ?? 0;
      activeQuestDesc = qDef?.objectives?.[stepIdx]?.text ?? 'Tiếp tục mục tiêu của nhiệm vụ.';
      break;
    }
  }

  if (!isWaiting && activeQuestTitle) {
    tasks.push({
      id: 'personal_quest',
      category: 'personal',
      title: activeQuestTitle,
      desc: activeQuestDesc,
      done: false,
    });
  } else {
    // Quest chính đang chờ giờ mở cửa -> giao rèn luyện hoặc đọc sách
    if (min < 840) {
      tasks.push({
        id: 'personal_exercise',
        category: 'personal',
        title: 'Rèn luyện thể lực',
        desc: 'Tập thể dục tại sân sinh hoạt để nâng cao thể chất và tinh thần.',
        done: s.daily.exercise > 0,
      });
    } else {
      tasks.push({
        id: 'personal_reading',
        category: 'personal',
        title: 'Đọc sách trau dồi',
        desc: 'Đọc sách hoặc cẩm nang pháp luật tại thư viện lớp học nghề.',
        done: Boolean(s.flags?.read_book_today),
      });
    }
  }

  return tasks;
}

/** Lịch sinh hoạt trại giam với các khung giờ cố định và trạng thái tương ứng. */
export function getDailySchedule(
  minute: number,
  questBlock?: { label: string; start: number; end: number; where?: string },
): ScheduleItem[] {
  const baseBlocks: { id: string; label: string; timeRange: string; start: number; end: number; where?: string }[] = [
    { id: 'rollcall', label: 'Điểm danh', timeRange: '06:30–06:45', start: 390, end: 405, where: 'Sân trại' },
    { id: 'breakfast', label: 'Ăn sáng', timeRange: '07:00–08:00', start: 420, end: 480, where: 'Nhà ăn' },
    { id: 'work_morning', label: 'Ca sáng', timeRange: '08:00–11:30', start: 480, end: 690, where: 'Xưởng' },
    { id: 'lunch', label: 'Ăn trưa', timeRange: '11:30–12:30', start: 690, end: 750, where: 'Nhà ăn' },
    { id: 'work_afternoon', label: 'Ca chiều tự nguyện', timeRange: '13:30–16:30', start: 810, end: 990, where: 'Xưởng' },
    { id: 'dinner', label: 'Ăn chiều', timeRange: '16:30–17:30', start: 990, end: 1050, where: 'Nhà ăn' },
    { id: 'canteen_night', label: 'Căn tin tối', timeRange: 'đến 21:00', start: 1050, end: 1260, where: 'Căn tin' },
    { id: 'curfew', label: 'Tắt đèn', timeRange: '22:00', start: 1320, end: 1440, where: 'Buồng giam' },
  ];

  const items = [...baseBlocks];
  if (questBlock) {
    const fmt = (m: number) =>
      `${Math.floor(m / 60).toString().padStart(2, '0')}:${(m % 60).toString().padStart(2, '0')}`;
    items.push({
      id: 'quest_block',
      label: questBlock.label,
      timeRange: `${fmt(questBlock.start)}–${fmt(questBlock.end)}`,
      start: questBlock.start,
      end: questBlock.end,
      where: questBlock.where,
    });
    items.sort((a, b) => a.start - b.start);
  }

  return items.map((item) => {
    let status: 'past' | 'active' | 'upcoming';
    if (minute >= item.end) {
      status = 'past';
    } else if (minute >= item.start && minute < item.end) {
      status = 'active';
    } else {
      status = 'upcoming';
    }
    return { ...item, status };
  });
}
