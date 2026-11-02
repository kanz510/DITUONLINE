import type { GameLogic } from '../logic/game';

export interface DChoice {
  label: string;
  important?: boolean;
  risk?: string;
  disabled?: string;
  run: () => DNode | null;
}

export interface DNode {
  speaker: string;
  role?: string;
  text: string;
  choices: DChoice[];
}

export function buildDialogue(npc: string, g: GameLogic, openAppeal: () => void, openVocational?: () => void): DNode {
  g.meet(npc);
  switch (npc) {
    case 'bay': return bayDialogue(g);
    case 'huy': return huyDialogue(g);
    case 'lam': return lamDialogue(g);
    case 'lan': return lanDialogue(g, openAppeal);
    case 'tung': return tungDialogue(g);
    case 'phuc': return phucDialogue(g, openVocational);
    case 'an': return anDialogue(g);
    case 'mai': return maiDialogue(g);
    default: return ambientDialogue(npc, g);
  }
}

function giftChoice(npc: string, item: string, label: string, g: GameLogic, reply: string): DChoice | null {
  if (!g.has(item)) return null;
  return {
    label: `Tặng ${label}`,
    run: () => {
      const err = g.gift(npc, item);
      return { speaker: g.s.relations[npc] ? npcTitle(npc) : npc, text: err ?? reply, choices: [{ label: 'Đóng', run: () => null }] };
    },
  };
}

function npcTitle(id: string) {
  return ({
    bay: 'Chú Bảy', huy: 'Huy', lam: 'Lâm', lan: 'Quản giáo Lan', tung: 'Cán bộ Tùng',
    phuc: 'Thầy Phúc', an: 'Y sĩ An', mai: 'Chị Mai',
  } as Record<string, string>)[id] ?? id;
}

// ───────────────────── CHÚ BẢY ─────────────────────
function bayDialogue(g: GameLogic): DNode {
  const pName = g.s.profile.name || 'Minh';
  const first = !g.qObj('nhap_trai', 'gap_bay') && g.qStatus('nhap_trai') === 'active';
  if (first) {
    const reminder = g.objectiveBlockReason('nhap_trai', 'gap_bay');
    if (reminder) return {
      speaker: 'Chú Bảy', role: 'Phạm nhân lâu năm · Buồng 3',
      text: `Cháu cứ hoàn thành các thủ tục nhập trại trước đã. ${reminder}`,
      choices: [{ label: 'Dạ, cháu sẽ làm theo thứ tự.', run: () => null }],
    };
    g.completeObjective('nhap_trai', 'gap_bay');
    return {
      speaker: 'Chú Bảy', role: 'Phạm nhân lâu năm · Buồng 3',
      text: `Cậu là ${pName} mới vào sáng nay hả? Ngồi xuống thở cái đã. Ở đây mới vào ai cũng ngợp. Cứ nhớ ba chuyện: đúng giờ điểm danh 6 rưỡi ở ô vàng ngoài sân, 8 giờ vào xưởng nhớ bấm bảng chấm công trước khi ngồi vào bàn, và tối 9 rưỡi phải có mặt trong buồng. Giữ cái đầu lạnh thì đường về mới ngắn.`,
      choices: [
        {
          label: 'Cháu cảm ơn chú. Cháu sẽ chú ý.',
          run: () => {
            g.changeRel('bay', 5, 'Lần đầu gặp gỡ lịch thiệp');
            return {
              speaker: 'Chú Bảy',
              text: 'Sáng 8 giờ vào xưởng làm đủ 3 ổ cắm điện cho chú xem. Xong việc qua kể chú nghe.',
              choices: [{ label: 'Vâng, cháu nhớ rồi.', run: () => null }],
            };
          },
        },
        {
          label: 'Ở đây có ai cần phải né tránh không chú?',
          run: () => {
            return {
              speaker: 'Chú Bảy',
              text: 'Có Lâm ở buồng 2. Hắn hay gom nợ của mấy đứa mới, dụ dỗ làm chuyện mờ ám trong xưởng rồi ăn chia. Thấy hắn thì cứ dạ vâng rồi lùi ra, đừng dính dáng.',
              choices: [{ label: 'Cháu hiểu rồi.', run: () => null }],
            };
          },
        },
      ],
    };
  }

  const choices: DChoice[] = [];

  // Báo cáo hoàn thành Ca đầu tiên
  if (g.qStatus('ca_dau') === 'active' && g.qObj('ca_dau', 'lap_rap') && !g.qObj('ca_dau', 'bao_bay')) {
    choices.push({
      label: 'Chú Bảy, cháu đã làm xong chỉ tiêu ca đầu tiên rồi!',
      important: true,
      run: () => {
        g.completeObjective('ca_dau', 'bao_bay');
        return {
          speaker: 'Chú Bảy',
          text: 'Tốt lắm. Tay nghề chưa quen mà làm đủ chỉ tiêu là có cố gắng. Cứ giữ nhịp đó. À… hồi trưa thằng Huy tìm cháu ngoài sân đấy, mặt mũi xanh mét.',
          choices: [{ label: 'Để cháu ra sân hỏi Huy xem sao.', run: () => null }],
        };
      },
    });
  }

  // Nhiệm vụ: Đôi dép của Chú Bảy
  if (g.qStatus('dep_bay') === 'locked' && g.qStatus('nhap_trai') === 'done') {
    choices.push({
      label: 'Chú tìm gì dưới gầm ghế vậy?',
      run: () => ({
        speaker: 'Chú Bảy',
        text: 'Đôi dép tổ ong màu xanh của chú... sáng ra sân tập thể dục để quên ở đâu mất rồi. Đó là kỷ vật con gái chú gửi vào trước đợt chuyển trại, mất chú xót lắm.',
        choices: [
          {
            label: 'Để cháu ra sân tìm giúp chú.',
            run: () => {
              g.startQuest('dep_bay');
              return { speaker: 'Chú Bảy', text: 'Cảm ơn cậu, nó nằm quanh mấy cây xà đơn ngoài sân ấy.', choices: [{ label: 'Đóng', run: () => null }] };
            },
          },
          { label: 'Để khi khác cháu tìm.', run: () => null },
        ],
      }),
    });
  } else if (g.qStatus('dep_bay') === 'active' && g.has('dep_bay')) {
    choices.push({
      label: 'Cháu tìm thấy đôi dép của chú rồi này!',
      important: true,
      run: () => {
        if (g.objectiveBlockReason('dep_bay', 'tra_dep')) {
          return { speaker: 'Chú Bảy', text: g.objectiveBlockReason('dep_bay', 'tra_dep')!, choices: [{ label: 'Cháu sẽ làm đúng bước.', run: () => null }] };
        }
        g.completeObjective('dep_bay', 'tra_dep');
        g.takeItem('dep_bay');
        return {
          speaker: 'Chú Bảy',
          text: 'Đúng nó rồi! Đôi dép con gái chú gửi... Đa tạ cậu. Người biết quý đồ của người khác như cậu, trong này hiếm lắm.',
          choices: [{ label: 'Dạ, có gì đâu chú.', run: () => null }],
        };
      },
    });
  }

  // Theo thứ tự: hỏi Y sĩ An trước, rồi hỏi Chú Bảy để biết chỗ tìm thuốc.
  if (g.qStatus('nghi_an_thuoc') === 'active' &&
      g.qObj('nghi_an_thuoc', 'hoi_an') && !g.qObj('nghi_an_thuoc', 'hoi_bay')) {
    choices.push({
      label: 'Chú Bảy, chú nhớ đã dùng lọ thuốc hen lần cuối ở đâu không?',
      important: true,
      run: () => {
        g.completeObjective('nghi_an_thuoc', 'hoi_bay');
        return {
          speaker: 'Chú Bảy',
          text: 'Chú có mang lọ thuốc ra sân phía sau xưởng, khi đi về không thấy nữa. Cậu xem ở góc tường xem sao.',
          choices: [{ label: 'Cháu sẽ đi tìm.', run: () => null }],
        };
      },
    });
  }

  // Nhiệm vụ Chương 2: Dấu vết kho số 7
  if (g.qStatus('manh_moi_kho_7') === 'active' && !g.qObj('manh_moi_kho_7', 'nghe_bay_ke')) {
    choices.push({
      label: 'Chú ơi, chú có từng nghe nói về kiện hàng chuyển từ Kho số 7 không?',
      important: true,
      run: () => {
        g.completeObjective('manh_moi_kho_7', 'nghe_bay_ke');
        return {
          speaker: 'Chú Bảy',
          text: `Kho số 7 ngoại ô hả? Hồi tháng trước xưởng có nhận một lô phụ tùng cơ điện cũ, chú thấy dán tem niêm phong KHO-07-AP. Kiện gỗ đó hiện vẫn xếp ở góc hành lang kho xưởng ấy, ${pName} cẩn thận quan sát xem.`,
          choices: [{ label: 'Cháu sẽ ra xưởng kiểm tra ngay.', run: () => null }],
        };
      },
    });
  }

  // Nhiệm vụ Chương 3: Cái bẫy vật cấm - Chú Bảy làm chứng
  if (g.qStatus('bay_vat_cam') === 'active' && !g.qObj('bay_vat_cam', 'cung_cap_bang_chung')) {
    choices.push({
      label: 'Chú Bảy! Có người gài đồ cấm dưới chiếu buồng 3 của cháu!',
      important: true,
      run: () => {
        if (g.rel('bay') >= 20) {
          g.completeObjective('bay_vat_cam', 'cung_cap_bang_chung');
          return {
            speaker: 'Chú Bảy',
            text: `Đêm qua chú thức giấc đi vệ sinh, thấy thằng đàn em của Lâm lén lút thò tay vào gầm phản của ${pName}. Đi! Chú cùng cậu lên phòng Quản giáo Lan nói cho ra lẽ!`,
            choices: [{ label: 'Cháu biết ơn chú lắm!', run: () => null }],
          };
        } else {
          return {
            speaker: 'Chú Bảy',
            text: 'Chú có thấy bóng người lảng vảng, nhưng chú chưa dám chắc là ai. Cậu lên phòng Quản giáo trình bày thành thật xem camera hành lang xem.',
            choices: [{ label: 'Dạ cháu hiểu.', run: () => null }],
          };
        }
      },
    });
  }

  // Nhiệm vụ Chương 4: Lời hứa Chú Bảy
  if (g.qStatus('loi_hua_chu_bay') === 'active' && !g.qObj('loi_hua_chu_bay', 'nghe_loi_hua')) {
    choices.push({
      label: 'Chú Bảy, cháu nghe nói chú có chuyện muốn nhờ cháu?',
      important: true,
      run: () => {
        g.completeObjective('loi_hua_chu_bay', 'nghe_loi_hua');
        return {
          speaker: 'Chú Bảy',
          text: 'Chú dành dụm tiền công làm được chiếc hộp gỗ khảm trai cho con gái. Chú già rồi, tay run không đánh bóng nổi. Cậu khéo tay giúp chú hoàn thiện, rồi khi nào cậu ra trại trước, chuyển giúp chú về quê được không?',
          choices: [
            {
              label: 'Cháu hứa chắc chắn sẽ giúp chú!',
              run: () => {
                g.completeObjective('loi_hua_chu_bay', 'danh_bong_hop');
                g.completeObjective('loi_hua_chu_bay', 'hua_gui_ve');
                g.s.flags.loi_hua_chu_bay_done = true;
                g.finishQuest('loi_hua_chu_bay', 'done');
                return {
                  speaker: 'Chú Bảy',
                  text: 'Được lời hứa của cậu là chú yên tâm rồi. Đây là cuốn cẩm nang sống chú ghi chép bao năm nay, tặng lại cho cậu làm hành trang ngày về.',
                  choices: [{ label: 'Cảm ơn chú Bảy.', run: () => null }],
                };
              },
            },
          ],
        };
      },
    });
  }

  const gift = giftChoice('bay', 'thuoc_cam', 'vỉ thuốc cảm', g, 'Cảm ơn cậu, chú đang đau họng quá. Người tốt như cậu ở đâu cũng sống được.');
  if (gift) choices.push(gift);

  choices.push({ label: 'Cháu chào chú.', run: () => null });

  return {
    speaker: 'Chú Bảy',
    role: `Bạn cùng buồng · Quan hệ: ${g.rel('bay')}`,
    text: `Có chuyện gì cần hỏi chú không ${pName}? Cứ bình tĩnh mà cải tạo, ngày về không xa đâu.`,
    choices,
  };
}

// ───────────────────── HUY ─────────────────────
function huyDialogue(g: GameLogic): DNode {
  const pName = g.s.profile.name || 'Minh';
  const choices: DChoice[] = [];

  // Món nợ của Huy
  if (g.qStatus('ca_dau') === 'done' && (g.qStatus('mon_no') === 'locked' || (g.qStatus('mon_no') === 'active' && !g.qObj('mon_no', 'nghe_huy')))) {
    choices.push({
      label: 'Nghe Chú Bảy nói cậu đang tìm tôi. Có chuyện gì thế?',
      important: true,
      run: () => {
        g.startQuest('mon_no');
        g.completeObjective('mon_no', 'nghe_huy');
        return {
          speaker: 'Huy',
          role: 'Bạn cùng buồng · 21 tuổi',
          text: `Tôi dính bẫy nợ của anh Lâm rồi ${pName} ơi... Tháng trước đánh cờ thua có 20 ngàn, hắn bắt ký giấy nợ tính lãi lên 40 ngàn. Hắn bảo trong tuần này không có tiền thì hắn bắt tôi lấy trộm hộp mũi khoan xưởng đưa cho hắn, không thì hắn cho người quậy nát buồng!`,
          choices: [
            {
              label: 'Bình tĩnh. Giờ tự do tôi qua góc sau xưởng gặp Lâm xem lão muốn gì.',
              run: () => ({
                speaker: 'Huy',
                text: 'Anh ấy hay đứng ở góc sau xưởng giờ tự do chiều. Cẩn thận nghe ông, Lâm dữ dằn lắm.',
                choices: [{ label: 'Được, cứ để tôi xem.', run: () => null }],
              }),
            },
          ],
        };
      },
    });
  }

  // Huy giao giấy nợ khi Minh chọn nhánh báo quản giáo
  if (g.qStatus('mon_no') === 'active' && g.qBranch('mon_no') === 'report' && !g.s.flags.huy_gave_note) {
    choices.push({
      label: 'Huy, đưa tôi tờ giấy nợ anh Lâm bắt ký để làm bằng chứng báo Quản giáo.',
      important: true,
      run: () => {
        g.s.flags.report_with_note = true;
        g.s.flags.huy_gave_note = true;
        g.completeObjective('mon_no', 'lay_giay');
        return {
          speaker: 'Huy',
          text: 'Đây... giấy nợ đây. Minh cẩn thận nghe, tôi sợ bị trả thù lắm.',
          choices: [
            {
              label: 'Yên tâm, có quản giáo can thiệp Lâm không dám làm bậy đâu.',
              run: () => ({
                speaker: 'Huy',
                text: 'Cảm ơn Minh nhiều. Tôi trông cậy cả vào ông.',
                choices: [{ label: 'Để tôi đi gặp Quản giáo Lan ngay.', run: () => null }],
              }),
            },
          ],
        };
      },
    });
  }

  // Nhiệm vụ phụ: Gói mì cho Huy
  if (g.qStatus('mi_cho_huy') === 'active' && g.has('mi_goi')) {
    choices.push({
      label: 'Tôi mua mì gói căn tin cho cậu này.',
      important: true,
      run: () => {
        if (g.objectiveBlockReason('mi_cho_huy', 'dua')) {
          return { speaker: 'Huy', text: g.objectiveBlockReason('mi_cho_huy', 'dua')!, choices: [{ label: 'Để tôi chuẩn bị.', run: () => null }] };
        }
        g.completeObjective('mi_cho_huy', 'dua');
        g.takeItem('mi_goi');
        return {
          speaker: 'Huy',
          text: 'Cảm ơn ông nhiều lắm! Cả ngày hôm nay đói cồn cào ruột gan. Ông đúng là người bạn tốt.',
          choices: [{ label: 'Không có gì đâu.', run: () => null }],
        };
      },
    });
  }

  // Nhiệm vụ Chương 4: Truyền nghề cho Huy
  if (g.qStatus('truyen_nghe_cho_huy') === 'active' && !g.qObj('truyen_nghe_cho_huy', 'huong_dan_huy')) {
    choices.push({
      label: 'Huy, cậu muốn học nối mạch điện an toàn không? Ra trại còn kiếm việc.',
      important: true,
      run: () => {
        g.completeObjective('truyen_nghe_cho_huy', 'huong_dan_huy');
        g.completeObjective('truyen_nghe_cho_huy', 'huy_thuc_hanh');
        g.finishQuest('truyen_nghe_cho_huy', 'done');
        return {
          speaker: 'Huy',
          text: `Thật hả ${pName}? Tôi muốn học lắm! Ra trại tôi sẽ đi làm công nhân đàng hoàng, không bao giờ cờ bạc vướng vào nợ nần nữa!`,
          choices: [{ label: 'Tốt lắm, cố gắng lên!', run: () => null }],
        };
      },
    });
  }

  choices.push({ label: 'Hẹn gặp lại sau.', run: () => null });

  return {
    speaker: 'Huy',
    role: `Bạn cùng buồng · Quan hệ: ${g.rel('huy')}`,
    text: `Chào ${pName}. Có chuyện gì thế ông bạn?`,
    choices,
  };
}

// ───────────────────── LÂM ─────────────────────
function lamDialogue(g: GameLogic): DNode {
  const pName = g.s.profile.name || 'Minh';
  const choices: DChoice[] = [];

  // Món nợ của Huy - Gặp Lâm
  if (g.qStatus('mon_no') === 'active' && !g.qObj('mon_no', 'gap_lam')) {
    choices.push({
      label: 'Tôi đến nói chuyện về món nợ của Huy.',
      important: true,
      run: () => {
        g.completeObjective('mon_no', 'gap_lam');
        return {
          speaker: 'Lâm',
          role: 'Phạm nhân có "tiếng nói" · Buồng 2',
          text: `À, thằng ${pName} mới vào đúng không? Huy nó nợ tao 40.000đ trắng phớ giấy mực. Một là mày trả thay nó 40 ngàn tiền sạch. Hai là sáng mai lẻn vào kho xưởng lấy cho tao hộp mũi khoan hợp kim. Ba là cứ để yên cho tao xử nó. Mày chọn đi.`,
          choices: [
            {
              label: 'Tôi sẽ gom đủ 40.000đ trả thay Huy.',
              run: () => {
                g.chooseBranch('mon_no', 'pay');
                return { speaker: 'Lâm', text: 'Được, có tiền sạch mang lại đây tao xé giấy nợ.', choices: [{ label: 'Được.', run: () => null }] };
              },
            },
            {
              label: 'Tôi sẽ lấy hộp mũi khoan đưa anh.',
              risk: 'Nguy hiểm: Nếu bị Cán bộ Tùng bắt sẽ bị kỷ luật nặng!',
              run: () => {
                g.chooseBranch('mon_no', 'steal');
                return { speaker: 'Lâm', text: 'Khôn ngoan đấy em trai. Kho chỉ mở ca sáng, nhớ né camera và cán bộ Tùng ra.', choices: [{ label: 'Rõ.', run: () => null }] };
              },
            },
            {
              label: 'Tôi sẽ báo Quản giáo Lan về việc anh ép nợ trái luật trong trại.',
              run: () => {
                g.chooseBranch('mon_no', 'report');
                return {
                  speaker: 'Lâm',
                  text: 'Mày dám dọa tao? Mày thích thì cứ đi báo, xem cán bộ tin mày hay tin tao. Nhưng liệu hồn giữ thân!',
                  choices: [{ label: 'Để rồi xem.', run: () => null }],
                };
              },
            },
            // Tùy chọn theo kỹ năng Giao tiếp (Charisma >= 2)
            ...(g.s.progression.attrs.charisma >= 2
              ? [
                  {
                    label: '[Giao tiếp] Phân tích: Ép nợ rùm beng Quản giáo Lan sẽ sờ gáy buồng 2, anh mất nhiều hơn được.',
                    run: () => {
                      g.chooseBranch('mon_no', 'negotiate');
                      g.finishQuest('mon_no', 'done', 'Thương lượng thành công');
                      g.changeRel('lam', 10, 'Nể phục tài đàm phán của Minh');
                      g.s.flags.huy_debt_cleared = true;
                      return {
                        speaker: 'Lâm',
                        text: 'Mày nói có lý đấy. Thằng nhóc này ăn nói khéo. Thôi được, tao tha cho thằng Huy gốc nợ, nhưng bảo nó cút khỏi mắt tao.',
                        choices: [{ label: 'Cảm ơn anh Lâm.', run: () => null }],
                      };
                    },
                  },
                ]
              : []),
          ],
        };
      },
    });
  }

  // Trả tiền nợ cho Lâm
  if (g.qBranch('mon_no') === 'pay' && g.s.stats.money >= 40) {
    choices.push({
      label: 'Đây là 40.000đ trả dứt nợ cho Huy. Đưa giấy nợ đây.',
      important: true,
      run: () => {
        g.addStat('money', -40);
        g.finishQuest('mon_no', 'done', 'Trả nợ bằng tiền');
        g.s.flags.huy_debt_cleared = true;
        return {
          speaker: 'Lâm',
          text: 'Tiền tươi thóc thật. Giấy nợ đây, xé trước mặt mày luôn. Thằng Huy có thằng bạn hào phóng đấy.',
          choices: [{ label: 'Từ nay đừng quậy bạn tôi nữa.', run: () => null }],
        };
      },
    });
  }

  // Giao hộp mũi khoan cho Lâm
  if (g.qBranch('mon_no') === 'steal' && g.has('hop_mui_khoan')) {
    choices.push({
      label: 'Hộp mũi khoan lấy trong kho đây.',
      important: true,
      risk: 'Rủi ro: Tang vật trộm cắp',
      run: () => {
        g.takeItem('hop_mui_khoan');
        g.finishQuest('mon_no', 'done', 'Trộm đồ giúp Lâm');
        g.s.flags.stole_for_lam = true;
        g.s.flags.huy_debt_cleared = true;
        return {
          speaker: 'Lâm',
          text: 'Khá lắm em trai! Chữ tín đấy. Từ nay ở xưởng có việc gì tao chống lưng cho mày.',
          choices: [{ label: 'Nhớ xóa nợ cho Huy là được.', run: () => null }],
        };
      },
    });
  }

  // Nhiệm vụ Chương 3: Lời đề nghị im lặng
  if (g.qStatus('cam_do_im_lang') === 'active' && !g.qObj('cam_do_im_lang', 'quyet_dinh_im_lang')) {
    choices.push({
      label: 'Anh tìm tôi có việc gì?',
      important: true,
      run: () => ({
        speaker: 'Lâm',
        text: `Mày đang đào bới chuyện Kho số 7 đúng không ${pName}? Khuyên mày chân thành: chuyện ngoài xã hội để ngoài xã hội. Đây là 50.000đ tiền mặt, cầm lấy mà ăn tiêu trong trại, ngậm miệng lại thì hai bên cùng vui. Mày từ chối thì đừng trách tao không báo trước.`,
        choices: [
          {
            label: 'Tôi từ chối. Sự thật phải được làm rõ.',
            run: () => {
              g.completeObjective('cam_do_im_lang', 'quyet_dinh_im_lang');
              g.finishQuest('cam_do_im_lang', 'done', 'Từ chối mua chuộc');
              g.changeRel('lam', -30, 'Minh từ chối lời đề nghị im lặng');
              g.addReform(6, 'Kiên quyết giữ vững sự thật');
              g.startQuest('bay_vat_cam');
              return {
                speaker: 'Lâm',
                text: 'Rượu mời không uống muốn uống rượu phạt. Để rồi xem mày trụ được bao lâu!',
                choices: [{ label: 'Để rồi xem.', run: () => null }],
              };
            },
          },
          {
            label: 'Được rồi, tôi cầm tiền và không nhắc tới nữa.',
            run: () => {
              g.completeObjective('cam_do_im_lang', 'quyet_dinh_im_lang');
              g.finishQuest('cam_do_im_lang', 'done', 'Nhận tiền im lặng');
              g.addStat('money', 50);
              g.s.flags.accepted_lam_bribe = true;
              g.changeRel('lam', 25, 'Minh đồng ý nhận tiền im lặng');
              return {
                speaker: 'Lâm',
                text: 'Biết điều đấy. Cứ yên phận cải tạo thì tao không để mày thiệt đâu.',
                choices: [{ label: 'Đóng', run: () => null }],
              };
            },
          },
        ],
      }),
    });
  }

  choices.push({ label: 'Tôi đi đây.', run: () => null });

  return {
    speaker: 'Lâm',
    role: `Phạm nhân buồng 2 · Quan hệ: ${g.rel('lam')}`,
    text: `Gì đấy ${pName}? Biết điều thì sống êm, đừng để tao ngứa mắt.`,
    choices,
  };
}

// ───────────────────── QUẢN GIÁO LAN ─────────────────────
function lanDialogue(g: GameLogic, openAppeal: () => void): DNode {
  const pName = g.s.profile.name || 'Minh';
  const choices: DChoice[] = [];

  // Báo cáo món nợ của Huy
  if (g.qBranch('mon_no') === 'report' || (g.qStatus('mon_no') === 'active' && g.s.flags.report_with_note)) {
    choices.push({
      label: 'Báo cáo Quản giáo về tình trạng cho vay nặng lãi và đe dọa trong trại.',
      important: true,
      run: () => {
        g.finishQuest('mon_no', 'done', 'Báo cáo quản giáo');
        g.addReform(6, 'Tố giác vi phạm nội quy');
        g.changeRel('lan', 15, 'Minh tố giác vi phạm dũng cảm');
        g.s.flags.huy_debt_cleared = true;
        return {
          speaker: 'Quản giáo Lan',
          text: 'Tôi ghi nhận thông tin và bằng chứng này của phạm nhân. Trại giam An Phú kiên quyết xử lý nghiêm các hành vi cưỡng đoạt, ép nợ. Cậu làm rất đúng.',
          choices: [{ label: 'Cảm ơn cán bộ.', run: () => null }],
        };
      },
    });
  }

  // Nhiệm vụ Chương 4: Nộp hồ sơ giải trình kho số 7
  if (g.qStatus('ho_so_giai_trinh') === 'active' && !g.qObj('ho_so_giai_trinh', 'nop_ho_so')) {
    choices.push({
      label: 'Nộp Hồ sơ giải trình vụ án Kho số 7 và các chứng cứ mới thu thập được.',
      important: true,
      run: () => {
        g.completeObjective('ho_so_giai_trinh', 'nop_ho_so');
        g.completeObjective('ho_so_giai_trinh', 'ket_luan_lan');
        g.s.flags.ho_so_kho_7_cleared = true;
        g.finishQuest('ho_so_giai_trinh', 'done');
        return {
          speaker: 'Quản giáo Lan',
          text: `Tôi đã xem xét kỹ vận đơn và bản đối chiếu chữ ký mà cậu và Thầy Phúc gửi lên. Chứng cứ này chứng minh ${pName} chỉ là người bị lừa gạt, không phải kẻ chủ mưu vụ cháy kho số 7. Tôi sẽ chuyển văn bản chính thức đến Hội đồng xét giảm án!`,
          choices: [{ label: 'Cháu biết ơn Quản giáo rất nhiều!', run: () => null }],
        };
      },
    });
  }

  // Nhiệm vụ Chương 4: Kỳ xét cuối cùng
  if (g.qStatus('ky_xet_cuoi_cung') === 'active') {
    choices.push({
      label: 'Nghe kết luận của Hội đồng xét giảm án đặc xá.',
      important: true,
      run: () => {
        g.finishQuest('ky_xet_cuoi_cung', 'done');
        // Kích hoạt kết thúc phân nhánh
        const endCode = g.computeEnding();
        g.s.ending = endCode;
        return {
          speaker: 'Quản giáo Lan',
          text: `Hội đồng Trại giam An Phú đã họp và quyết định: Phạm nhân ${pName} đã hoàn thành tốt quá trình cải tạo, được giảm hết thời hạn chấp hành án còn lại. Ngày mai cậu chính thức được tự do!`,
          choices: [{ label: 'Bước ra cổng trại và đón nhận tương lai', run: () => null }],
        };
      },
    });
  }

  // Khiếu nại vi phạm
  const pendingVio = g.s.violations.filter((v) => !v.appealed && v.severity > 0);
  if (pendingVio.length > 0) {
    choices.push({
      label: 'Gửi đơn khiếu nại / giải trình về biên bản vi phạm kỷ luật',
      run: () => {
        openAppeal();
        return null;
      },
    });
  }

  choices.push({ label: 'Xin phép cán bộ.', run: () => null });

  return {
    speaker: 'Quản giáo Lan',
    role: 'Cán bộ quản giáo phụ trách phân trại',
    text: `Phạm nhân ${pName}, có vấn đề gì về hồ sơ cải tạo hay đời sống cần trao đổi?`,
    choices,
  };
}

// ───────────────────── THẦY PHÚC ─────────────────────
function phucDialogue(g: GameLogic, openVocational?: () => void): DNode {
  const pName = g.s.profile.name || 'Minh';
  const choices: DChoice[] = [];

  // Bài học nghề đầu tiên
  if (g.qStatus('lop_nghe_dau') === 'active') {
    if (!g.qObj('lop_nghe_dau', 'den_lop')) {
      choices.push({
        label: 'Em chào Thầy Phúc. Em đến đăng ký học nghề ca chiều ạ.',
        important: true,
        run: () => {
          g.completeObjective('lop_nghe_dau', 'den_lop');
          return {
            speaker: 'Thầy Phúc',
            text: `Tốt lắm ${pName}. Vào đây thì ngoài việc chấp hành nội quy, học một cái nghề là tấm vé để sau này ra đời tự nuôi sống bản thân. Thầy có bài tập nối mạch điện an toàn tại bàn thực hành kia — qua đó kiểm tra khả năng quan sát và ghi nhớ màu dây cho thầy xem.`,
            choices: [
              {
                label: 'Bắt đầu bài kiểm tra học nghề tại bàn thực hành',
                run: () => {
                  openVocational?.();
                  return null;
                },
              },
              { label: 'Dạ, để em chuẩn bị một chút.', run: () => null },
            ],
          };
        },
      });
    } else if (g.qObj('lop_nghe_dau', 'thao_tac') && !g.qObj('lop_nghe_dau', 'nhan_xet')) {
      choices.push({
        label: 'Thưa Thầy Phúc, em đã hoàn thành xong bài nối mạch an toàn rồi ạ.',
        important: true,
        run: () => {
          g.completeObjective('lop_nghe_dau', 'nhan_xet');
          g.finishQuest('lop_nghe_dau', 'done', 'Hoàn thành bài học nghề');
          return {
            speaker: 'Thầy Phúc',
            text: 'Khá lắm! Nối đúng trình tự, thao tác dứt khoát và cẩn thận. Đây là Chứng chỉ nghề cơ điện bậc sơ cấp của em. Giữ lấy nó làm nền tảng trong hồ sơ xét giảm án.',
            choices: [{ label: 'Em cảm ơn thầy nhiều lắm!', run: () => null }],
          };
        },
      });
    }
  }

  // Nhiệm vụ Chương 3: Đối chiếu chứng từ
  if (g.qStatus('doi_chieu_chung_tu') === 'active' && !g.qObj('doi_chieu_chung_tu', 'phat_hien')) {
    choices.push({
      label: 'Thầy Phúc ơi, nhờ thầy xem giúp cháu mảnh vận đơn Kho số 7 này với ạ.',
      important: true,
      run: () => {
        g.completeObjective('doi_chieu_chung_tu', 'dua_chung_tu');
        g.completeObjective('doi_chieu_chung_tu', 'doi_chieu');
        g.completeObjective('doi_chieu_chung_tu', 'phat_hien');
        g.finishQuest('doi_chieu_chung_tu', 'done');
        return {
          speaker: 'Thầy Phúc',
          text: `Để thầy xem... Mảnh giấy này có dấu mộc và chữ ký người nhận là "Trần Văn Định". Đây chính là đầu mối từng giao dịch thiết bị với bên Lâm trước khi xảy ra hỏa hoạn. Chứng cứ này rất có giá trị đấy ${pName}!`,
          choices: [{ label: 'Cháu cảm ơn thầy nhiều!', run: () => null }],
        };
      },
    });
  }

  // Nhiệm vụ phụ Chương 3: Sửa quạt phòng học
  if (g.qStatus('sua_quat_phong_hoc') === 'active' && !g.qObj('sua_quat_phong_hoc', 'thay_vong_bi')) {
    choices.push({
      label: 'Cháu sửa xong quạt trần lớp học rồi thầy ạ.',
      important: true,
      run: () => {
        g.completeObjective('sua_quat_phong_hoc', 'thay_vong_bi');
        g.finishQuest('sua_quat_phong_hoc', 'done');
        return {
          speaker: 'Thầy Phúc',
          text: 'Giỏi lắm! Quạt chạy êm ru lại rồi. Đúng là có tay nghề có khác. Thầy cộng điểm công ích cho cậu.',
          choices: [{ label: 'Dạ, cảm ơn thầy.', run: () => null }],
        };
      },
    });
  }

  // Nhiệm vụ Chương 4: Lời dặn ngày về
  if (g.qStatus('chia_tay_thay_phuc') === 'active' && !g.qObj('chia_tay_thay_phuc', 'nhan_thu_gt')) {
    choices.push({
      label: 'Thưa thầy, cháu sắp mãn hạn, xin phép đến chào thầy.',
      important: true,
      run: () => {
        g.completeObjective('chia_tay_thay_phuc', 'tam_su_thay');
        g.completeObjective('chia_tay_thay_phuc', 'nhan_thu_gt');
        g.giveItem('thu_gioi_thieu_viec_lam', 1);
        g.finishQuest('chia_tay_thay_phuc', 'done');
        return {
          speaker: 'Thầy Phúc',
          text: `Thầy mừng cho ${pName}. Đây là lá thư thầy viết gửi cho anh bạn mở xưởng cơ điện ở Bình Dương. Ra trại cầm thư này đến, người ta sẽ nhận cậu vào làm ngay. Cố gắng sống lương thiện nghe con.`,
          choices: [{ label: 'Cháu sẽ không phụ lòng thầy!', run: () => null }],
        };
      },
    });
  }

  choices.push({ label: 'Chào thầy.', run: () => null });

  return {
    speaker: 'Thầy Phúc',
    role: 'Giáo viên dạy nghề điện trại giam',
    text: `Chào ${pName}. Nghề nghiệp là cái phao cứu sinh lớn nhất khi bước chân ra xã hội. Có chí học thì tương lai sẽ sáng.`,
    choices,
  };
}

// ───────────────────── Y SĨ AN ─────────────────────
function anDialogue(g: GameLogic): DNode {
  const pName = g.s.profile.name || 'Minh';
  const choices: DChoice[] = [];

  // Nghe Y sĩ An trình bày trước, rồi mới hỏi Chú Bảy và đi tìm thuốc.
  if (g.qStatus('nghi_an_thuoc') === 'active' && !g.qObj('nghi_an_thuoc', 'hoi_an')) {
    choices.push({
      label: 'Y sĩ An, cháu muốn hỏi về lọ thuốc hen bị mất của Chú Bảy.',
      important: true,
      run: () => {
        g.completeObjective('nghi_an_thuoc', 'hoi_an');
        return {
          speaker: 'Y sĩ An',
          text: 'Chúng tôi đang tìm lọ thuốc hen đặc trị của Chú Bảy. Cháu hãy hỏi chú xem chú dùng thuốc lần cuối ở đâu.',
          choices: [{ label: 'Cháu sẽ đi hỏi chú Bảy trước.', run: () => null }],
        };
      },
    });
  }

  // Trả thuốc hen cho Chú Bảy
  if (g.qStatus('nghi_an_thuoc') === 'active' && g.has('chai_thuoc_hen') && g.qObj('nghi_an_thuoc', 'nhat_thuoc')) {
    choices.push({
      label: 'Cháu tìm thấy lọ thuốc hen suyễn ở sau xưởng rồi!',
      important: true,
      run: () => {
        if (!g.completeObjective('nghi_an_thuoc', 'tra_thuoc')) return {
          speaker: 'Y sĩ An', text: 'Hãy tìm hiểu nguồn gốc lọ thuốc trước khi bàn giao.',
          choices: [{ label: 'Dạ.', run: () => null }],
        };
        g.takeItem('chai_thuoc_hen');
        return {
          speaker: 'Y sĩ An',
          text: 'May quá! Đúng là thuốc đặc trị của Chú Bảy rồi. Tôi sẽ cho chú thở khí dung ngay. Cảm ơn cậu đã cứu mạng một con người.',
          choices: [{ label: 'Cháu mừng vì chú Bảy qua khỏi.', run: () => null }],
        };
      },
    });
  }

  // Phụ việc y tế
  if (g.qStatus('phu_y_te') === 'active' && !g.qObj('phu_y_te', 'hoan_thanh')) {
    choices.push({
      label: 'Cháu sắp xếp xong tủ thuốc và phân loại bông băng rồi ạ.',
      important: true,
      run: () => {
        g.completeObjective('phu_y_te', 'hoan_thanh');
        g.finishQuest('phu_y_te', 'done');
        return {
          speaker: 'Y sĩ An',
          text: 'Rất ngăn nắp và sạch sẽ! Cậu cẩn thận lắm. Đây là vỉ thuốc cảm dự phòng, cầm lấy phòng khi trái gió trở trời.',
          choices: [{ label: 'Cháu cảm ơn y sĩ.', run: () => null }],
        };
      },
    });
  }

  // Khám sức khỏe xuất trại
  if (g.qStatus('kiem_tra_suc_khoe') === 'active' && !g.qObj('kiem_tra_suc_khoe', 'kham_tong_quat')) {
    choices.push({
      label: 'Thưa y sĩ, cháu đến khám sức khỏe định kỳ xuất trại.',
      important: true,
      run: () => {
        g.completeObjective('kiem_tra_suc_khoe', 'kham_tong_quat');
        g.finishQuest('kiem_tra_suc_khoe', 'done');
        return {
          speaker: 'Y sĩ An',
          text: `Huyết áp và tim mạch của ${pName} rất tốt. Thể trạng hoàn toàn khỏe mạnh để sẵn sàng hòa nhập xã hội. Chúc cậu mọi điều bình an!`,
          choices: [{ label: 'Cháu cảm ơn y sĩ An.', run: () => null }],
        };
      },
    });
  }

  choices.push({ label: 'Cháu xin phép.', run: () => null });

  return {
    speaker: 'Y sĩ An',
    role: 'Cán bộ trạm xá trại giam',
    text: `Chào ${pName}. Có chỗ nào không khỏe trong người cần phát thuốc không?`,
    choices,
  };
}

// ───────────────────── CHỊ MAI ─────────────────────
function maiDialogue(g: GameLogic): DNode {
  const pName = g.s.profile.name || 'Minh';
  const choices: DChoice[] = [];

  if (g.qStatus('phong_tham_gap') === 'active' && !g.qObj('phong_tham_gap', 'thanh_that')) {
    choices.push({
      label: 'Chị Mai ơi! Em ở đây, em vẫn khỏe mạnh bình an chị đừng lo.',
      important: true,
      run: () => {
        g.completeObjective('phong_tham_gap', 'gap_chi');
        g.completeObjective('phong_tham_gap', 'thanh_that');
        g.completeObjective('phong_tham_gap', 'nhan_tien');
        g.finishQuest('phong_tham_gap', 'done');
        return {
          speaker: 'Chị Mai',
          role: 'Chị gái ruột',
          text: `Thấy em gầy đi nhưng mắt sáng là chị mừng rồi ${pName} à. Mẹ ở quê ngóng em từng ngày. Chị gửi vào sổ lưu ký 25 ngàn để em ăn thêm. Cố gắng cải tạo thật tốt nghe em!`,
          choices: [{ label: 'Em hứa với chị sẽ về sớm!', run: () => null }],
        };
      },
    });
  }

  if (g.qStatus('la_thu_que_nha') === 'active' && !g.qObj('la_thu_que_nha', 'hoi_am')) {
    choices.push({
      label: 'Em đã nhận được thư mẹ gửi rồi chị à.',
      important: true,
      run: () => {
        g.completeObjective('la_thu_que_nha', 'hoi_am');
        g.finishQuest('la_thu_que_nha', 'done');
        return {
          speaker: 'Chị Mai',
          text: 'Chị biết em nhớ nhà lắm. Chị đã bảo mẹ là em trong này ngoan, được thầy khen. Cố gắng lên em!',
          choices: [{ label: 'Dạ chị!', run: () => null }],
        };
      },
    });
  }

  choices.push({ label: 'Hết giờ thăm gặp rồi, em chào chị.', run: () => null });

  return {
    speaker: 'Chị Mai',
    role: `Chị gái · Quan hệ: ${g.rel('mai')}`,
    text: `Minh ơi, thời gian thăm gặp có hạn thôi em, có chuyện gì cần dặn dò chị không?`,
    choices,
  };
}

// ───────────────────── CÁN BỘ TÙNG & NPC PHỤ ─────────────────────
function tungDialogue(g: GameLogic): DNode {
  const pName = g.s.profile.name || 'Minh';
  const choices: DChoice[] = [];

  // Vụ bẫy vật cấm
  if (g.qStatus('bay_vat_cam') === 'active' && !g.qObj('bay_vat_cam', 'trinh_bay')) {
    choices.push({
      label: 'Báo cáo cán bộ! Em xin giải trình về việc kiểm tra phòng hôm nay.',
      important: true,
      run: () => {
        g.completeObjective('bay_vat_cam', 'trinh_bay');
        return {
          speaker: 'Cán bộ Tùng',
          text: `Tôi phát hiện vật cấm dưới chiếu của ${pName}. Theo quy chế, cậu phải lên phòng Quản giáo Lan làm bản giải trình. Có nhân chứng hay chứng cứ gì thì mang theo.`,
          choices: [{ label: 'Rõ, thưa cán bộ.', run: () => null }],
        };
      },
    });
  }

  choices.push({ label: 'Rõ, thưa cán bộ.', run: () => null });

  return {
    speaker: 'Cán bộ Tùng',
    role: 'Cán bộ trật tự & xưởng',
    text: 'Lao động trật tự, đi lại đúng giờ. Tuyệt đối không tự ý bước qua vạch đỏ vào kho xưởng hoặc đem vật cấm vào buồng giam.',
    choices,
  };
}

function ambientDialogue(npc: string, g: GameLogic): DNode {
  const map: Record<string, { name: string; line: string }> = {
    tu: { name: 'Anh Tư (Buồng 1)', line: 'Làm ở xưởng đừng bấm vội. Canh đúng vạch xanh trên thanh căn lực thì sản phẩm đạt chất lượng cao, tiền công được tới 16.000đ.' },
    son: { name: 'Sơn (Buồng 2)', line: 'Giờ tự do ra xà đơn tập một hiệp là người nhẹ hẳn, hôm sau làm xưởng đỡ tốn sức hơn.' },
    khai: { name: 'Khải (Buồng 4)', line: g.rel('lam') < 0 ? 'Anh Lâm đang để ý mày đấy, đi đứng cẩn thận.' : 'Có chuyện gì muốn bàn thì tìm anh Lâm ở góc sau xưởng giờ nghỉ chiều.' },
  };
  const info = map[npc] ?? { name: npc, line: '...' };
  return {
    speaker: info.name,
    text: info.line,
    choices: [{ label: 'Đóng', run: () => null }],
  };
}
