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
    case 'khai': return khaiDialogue(g);
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

// ───────────────────── CÁC PHƯƠNG ÁN NGHI ÁN THUỐC (ĐỢT 2) ─────────────────────
function getNghiAnThuocBranchChoices(g: GameLogic, _pName: string): DChoice[] {
  const attrs = g.s.progression?.attrs || { agility: 1, charisma: 1, perception: 1, endurance: 1 };
  const choices: DChoice[] = [];

  // 1. Lén lút (Agility >= 2)
  choices.push({
    label: (attrs.agility ?? 1) >= 2
      ? '[Khéo léo ≥ 2] Lén lút: Canh thời điểm an toàn lẻn vào thu hồi thuốc'
      : `[Cần Khéo léo ≥ 2] Lén lút (Hiện tại: ${attrs.agility ?? 1}/5 — cần nâng kỹ năng)`,
    important: (attrs.agility ?? 1) >= 2,
    run: () => {
      if ((attrs.agility ?? 1) < 2) {
        return {
          speaker: 'Chú Bảy',
          text: `Chỉ số Khéo léo của cháu hiện tại (${attrs.agility ?? 1}/5) chưa đủ 2 để luồn lách qua tầm nhìn cán bộ và camera. Cháu có thể hoàn thành việc ngày để lên cấp nâng kỹ năng trong hồ sơ, hoặc chọn phương án khác.`,
          choices: [{ label: 'Để cháu tính toán lại.', run: () => null }],
        };
      }
      g.chooseBranch('nghi_an_thuoc', 'stealth', 'Lén lút thu hồi thuốc khi an toàn');
      return {
        speaker: 'Chú Bảy',
        text: 'Khéo léo đấy cháu! Cẩn thận Cán bộ Tùng và Quản giáo Lan tuần tra, camera kho xưởng cũng quét qua khu vực đó. Phải đợi lúc họ quay đi hoặc rời khỏi tầm nhìn thì mới nhặt nghen!',
        choices: [{ label: 'Cháu sẽ canh chừng thật cẩn thận.', run: () => null }],
      };
    },
  });

  // 2. Thuyết phục (Charisma >= 2)
  choices.push({
    label: (attrs.charisma ?? 1) >= 2
      ? '[Giao tiếp ≥ 2] Thuyết phục: Đối thoại với Khải để lấy lại thuốc'
      : `[Cần Giao tiếp ≥ 2] Thuyết phục (Hiện tại: ${attrs.charisma ?? 1}/5 — cần nâng kỹ năng)`,
    important: (attrs.charisma ?? 1) >= 2,
    run: () => {
      if ((attrs.charisma ?? 1) < 2) {
        return {
          speaker: 'Chú Bảy',
          text: `Chỉ số Giao tiếp của cháu hiện tại (${attrs.charisma ?? 1}/5) chưa đủ 2 để thuyết phục đàn em thằng Lâm. Cháu có thể lên cấp nâng kỹ năng hoặc chọn phương án khác.`,
          choices: [{ label: 'Để cháu tính toán lại.', run: () => null }],
        };
      }
      g.chooseBranch('nghi_an_thuoc', 'persuade', 'Thuyết phục Khải giao lại lọ thuốc');
      return {
        speaker: 'Chú Bảy',
        text: 'Thằng Khải buồng 4 hay lảng vảng ngoài sân hoặc sau xưởng giờ nghỉ. Cháu ăn nói khéo léo thì thử giải thích rủi ro pháp lý cho nó hiểu, đừng để xảy ra xô xát.',
        choices: [{ label: 'Cháu sẽ đi tìm gặp Khải.', run: () => null }],
      };
    },
  });

  // 3. Quan sát (Perception >= 2)
  choices.push({
    label: (attrs.perception ?? 1) >= 2
      ? '[Quan sát ≥ 2] Quan sát: Lần theo dấu vết và manh mối tại xưởng'
      : `[Cần Quan sát ≥ 2] Quan sát (Hiện tại: ${attrs.perception ?? 1}/5 — cần nâng kỹ năng)`,
    important: (attrs.perception ?? 1) >= 2,
    run: () => {
      if ((attrs.perception ?? 1) < 2) {
        return {
          speaker: 'Chú Bảy',
          text: `Chỉ số Quan sát của cháu hiện tại (${attrs.perception ?? 1}/5) chưa đủ 2 để giải mã dấu vết hiện trường. Cháu có thể lên cấp nâng kỹ năng hoặc chọn phương án khác.`,
          choices: [{ label: 'Để cháu tính toán lại.', run: () => null }],
        };
      }
      g.chooseBranch('nghi_an_thuoc', 'observe', 'Lần theo dấu vết và manh mối giấu thuốc');
      return {
        speaker: 'Chú Bảy',
        text: 'Đúng rồi! Hôm trước chú thấy có vết cào và bột than lạ ở góc bàn xưởng dẫn ra khe thông gió sau tường. Cháu mắt sáng ra kiểm tra bàn xưởng xem.',
        choices: [{ label: 'Cháu sẽ ra bàn xưởng kiểm tra dấu vết ngay.', run: () => null }],
      };
    },
  });

  // 4. Cơ bản (Fallback - không yêu cầu chỉ số)
  choices.push({
    label: 'Tìm kiếm cơ bản: Trực tiếp ra góc tường sau xưởng tìm kỹ',
    run: () => {
      g.chooseBranch('nghi_an_thuoc', 'basic', 'Tìm kiếm cơ bản tại góc sau xưởng');
      return {
        speaker: 'Chú Bảy',
        text: 'Vậy cháu cẩn thận nhé, chịu khó tìm kỹ quanh đống gạch vỡ sau xưởng.',
        choices: [{ label: 'Dạ, cháu sẽ đi tìm.', run: () => null }],
      };
    },
  });

  return choices;
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
          text: 'Tốt lắm. Tay nghề chưa quen mà làm đủ chỉ tiêu là có cố gắng. À… hồi trưa thằng Huy tìm cháu ngoài sân đấy, mặt mũi xanh mét.',
          choices: [
            {
              label: 'Cháu làm cẩn thận từng chi tiết theo đúng quy chuẩn an toàn. Để cháu ra sân hỏi Huy.',
              run: () => {
                g.addReform(2, 'Lao động kỷ luật, cẩn trọng');
                g.changeRel('bay', 8, 'Chú Bảy ưng ý thái độ làm việc cẩn thận');
                g.addStat('stamina', -10);
                return null;
              },
            },
            {
              label: 'Cháu tập trung đẩy tốc độ để kịp định mức và học thao tác nhanh. Để cháu ra sân hỏi Huy.',
              run: () => {
                g.gainXp(20, 'Tối ưu tốc độ thao tác xưởng');
                g.changeRel('bay', 3, 'Chú Bảy dặn dò về sự nóng vội');
                g.addStat('suspicion', 5);
                return null;
              },
            },
          ],
        };
      },
    });
  }

  // Nhiệm vụ: Đôi dép của Chú Bảy
  if (g.qStatus('dep_bay') === 'active' && !g.has('dep_bay') && !g.qObj('dep_bay', 'nhat_dep')) {
    choices.push({
      label: 'Chú tìm gì dưới gầm ghế vậy?',
      run: () => ({
        speaker: 'Chú Bảy',
        text: 'Đôi dép tổ ong màu xanh của chú... sáng ra sân tập thể dục để quên ở đâu mất rồi. Nó nằm quanh mấy cây xà đơn ngoài sân ấy, cháu thấy thì nhặt giùm chú.',
        choices: [{ label: 'Cháu sẽ để ý tìm giúp chú.', run: () => null }],
      }),
    });
  } else if (g.qStatus('dep_bay') === 'locked' && g.qStatus('nhap_trai') === 'done') {
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

  // Theo thứ tự: hỏi Y sĩ An trước, rồi hỏi Chú Bảy để biết chỗ tìm thuốc & chọn phương án.
  if (g.qStatus('nghi_an_thuoc') === 'active' &&
      g.qObj('nghi_an_thuoc', 'hoi_an') && !g.qObj('nghi_an_thuoc', 'hoi_bay')) {
    choices.push({
      label: 'Chú Bảy, chú nhớ đã dùng lọ thuốc hen lần cuối ở đâu không?',
      important: true,
      run: () => {
        g.completeObjective('nghi_an_thuoc', 'hoi_bay');
        return {
          speaker: 'Chú Bảy',
          text: 'Chú có mang lọ thuốc ra sân phía sau xưởng lúc lao động, khi quay về thì rơi mất, nghe thấy tiếng đám thằng Khải buồng 4 thì thầm chia nhau cái gì đó. Cháu tính lấy lại thuốc bằng cách nào?',
          choices: getNghiAnThuocBranchChoices(g, pName),
        };
      },
    });
  } else if (g.qStatus('nghi_an_thuoc') === 'active' &&
      g.qObj('nghi_an_thuoc', 'hoi_bay') && !g.qBranch('nghi_an_thuoc')) {
    choices.push({
      label: 'Về phương án thu hồi lọ thuốc hen cho chú...',
      important: true,
      run: () => ({
        speaker: 'Chú Bảy',
        text: 'Cháu đã tính được cách lấy lại lọ thuốc hen chưa? Chú thấy có mấy cách này, cháu xem thế mạnh của mình hợp cách nào:',
        choices: getNghiAnThuocBranchChoices(g, pName),
      }),
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
  if (g.qStatus('bay_vat_cam') === 'active' && g.qObj('bay_vat_cam', 'trinh_bay') && !g.qObj('bay_vat_cam', 'cung_cap_bang_chung')) {
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

  // Sau khi đã đánh bóng hộp gỗ tại xưởng mới được hứa giao quà.
  if (g.qStatus('loi_hua_chu_bay') === 'active' &&
      g.qObj('loi_hua_chu_bay', 'danh_bong_hop') &&
      !g.qObj('loi_hua_chu_bay', 'hua_gui_ve')) {
    choices.push({
      label: 'Cháu đã đánh bóng và lắp khóa hộp gỗ. Cháu hứa sẽ mang về cho con gái chú.',
      important: true,
      run: () => {
        return {
          speaker: 'Chú Bảy',
          text: 'Đẹp quá cháu ơi! Từng thớ gỗ bóng loáng, cháu làm khéo tay lắm. Chú có chút tiền công dành dụm và cuốn cẩm nang nghề, cháu nhận lấy nhé?',
          choices: [
            {
              label: 'Cháu xin nhận cuốn cẩm nang học nghề, còn tiền chú giữ lại để bồi dưỡng.',
              run: () => {
                g.completeObjective('loi_hua_chu_bay', 'hua_gui_ve');
                g.changeRel('bay', 25, 'Minh từ chối nhận tiền của người già');
                g.addReform(4, 'Tấm lòng tương thân tương ái');
                g.addStat('morale', 15);
                return null;
              },
            },
            {
              label: 'Cháu xin nhận cả cẩm nang và tiền công để trang trải ngày đầu ra trại.',
              run: () => {
                g.completeObjective('loi_hua_chu_bay', 'hua_gui_ve');
                g.addStat('money', 30);
                g.gainXp(35, 'Thù lao lao động danh chính ngôn thuận');
                g.changeRel('bay', 15, 'Chú Bảy vui vì Minh nhận quà');
                return null;
              },
            },
          ],
        };
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
                // The hands-on step takes place at the workshop bench, not in dialogue.
                return {
                  speaker: 'Chú Bảy',
                  text: 'Vậy hãy giúp chú đánh bóng chiếc hộp tại bàn xưởng trước nhé. Làm xong rồi quay lại hứa với chú.',
                  choices: [{ label: 'Dạ, cháu sẽ ra bàn xưởng.', run: () => null }],
                };

              },
            },
          ],
        };
      },
    });
  }

  // Vang lại lựa chọn: cam_do_im_lang
  if (g.qStatus('cam_do_im_lang') === 'done') {
    choices.push({
      label: 'Chú Bảy, về lời đề nghị của Lâm đợt trước...',
      run: () => {
        if (g.s.flags.accepted_lam_bribe) {
          return {
            speaker: 'Chú Bảy',
            text: 'Chú thấy thằng Lâm dạo này có vẻ vị nể cháu, nhưng tiền của nó cầm nóng tay lắm cháu à. Đừng để nó dắt mũi mình sâu hơn.',
            choices: [{ label: 'Cháu hiểu rồi chú Bảy.', run: () => null }],
          };
        } else {
          return {
            speaker: 'Chú Bảy',
            text: 'Cháu từ chối cọc tiền của thằng Lâm là rất bản lĩnh! Cầm đồng tiền bẩn trong tù thì mất luôn đường về cháu ạ.',
            choices: [{ label: 'Cháu chỉ muốn trong sạch để sớm về.', run: () => null }],
          };
        }
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
      label: 'Huy, tôi hướng dẫn cậu các nguyên tắc an toàn khi nối mạch điện nhé.',
      important: true,
      run: () => {
        g.completeObjective('truyen_nghe_cho_huy', 'huong_dan_huy');
        return {
          speaker: 'Huy',
          text: 'Cảm ơn ông. Để tôi luyện tập trình tự nối dây. Lát nữa ông kiểm tra bài cho tôi nhé.',
          choices: [{ label: 'Nhớ ôn kỹ, tôi sẽ kiểm tra lại.', run: () => null }],
        };
      },
    });
  } else if (g.qStatus('truyen_nghe_cho_huy') === 'active' && !g.qObj('truyen_nghe_cho_huy', 'huy_thuc_hanh')) {
    choices.push({
      label: 'Huy, để tôi kiểm tra bài nối mạch cậu đã tập.',
      important: true,
      run: () => {
        g.completeObjective('truyen_nghe_cho_huy', 'huy_thuc_hanh');
        return {
          speaker: 'Huy',
          text: `Tôi nhớ rồi ${pName} ạ. Ra trại tôi sẽ học nghề và làm ăn chân chính!`,
          choices: [{ label: 'Tốt lắm!', run: () => null }],
        };
      },
    });
  }

  // Vang lại lựa chọn: mon_no
  if (g.qStatus('mon_no') === 'done') {
    choices.push({
      label: 'Về món nợ hôm trước với Lâm...',
      run: () => {
        if (g.s.flags.stole_for_lam) {
          return {
            speaker: 'Huy',
            text: 'Tôi vẫn ân hận vì để ông phải mạo hiểm lấy đồ kho cho Lâm vì tôi... May mà không bị phát hiện, từ giờ tôi cạch đỏ đen đến già!',
            choices: [{ label: 'Nhớ lấy bài học đó.', run: () => null }],
          };
        } else if (g.s.flags.report_with_note) {
          return {
            speaker: 'Huy',
            text: 'May mà hôm đó ông dũng cảm mang giấy nợ báo Quản giáo Lan giải quyết dứt điểm. Giờ Lâm không dám ho he gì nữa.',
            choices: [{ label: 'Đúng luật là an toàn nhất.', run: () => null }],
          };
        } else {
          return {
            speaker: 'Huy',
            text: 'Cảm ơn ông lần nữa vì đã đứng ra giải quyết êm thấm món nợ với Lâm. Tôi nợ ông một ân tình lớn.',
            choices: [{ label: 'Bạn cùng buồng giúp nhau là bình thường.', run: () => null }],
          };
        }
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
                       g.completeObjective('mon_no', 'dam_phan');
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
  if (g.qStatus('mon_no') === 'active' && g.qBranch('mon_no') === 'pay' && g.s.stats.money >= 40) {
    choices.push({
      label: 'Đây là 40.000đ trả dứt nợ cho Huy. Đưa giấy nợ đây.',
      important: true,
      run: () => {
        if (!g.qObj('mon_no', 'du_tien')) g.completeObjective('mon_no', 'du_tien');
        if (!g.completeObjective('mon_no', 'tra_lam')) return {
          speaker: 'Lâm', text: 'Chưa hoàn thành các bước giải quyết nợ. Hãy làm theo mục tiêu đang hiển thị.',
          choices: [{ label: 'Tôi sẽ quay lại.', run: () => null }],
        };
        g.addStat('money', -40);
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
  if (g.qStatus('mon_no') === 'active' && g.qBranch('mon_no') === 'steal' && g.has('hop_mui_khoan')) {
    choices.push({
      label: 'Hộp mũi khoan lấy trong kho đây.',
      important: true,
      risk: 'Rủi ro: Tang vật trộm cắp',
      run: () => {
        if (!g.completeObjective('mon_no', 'giao_lam')) return {
          speaker: 'Lâm', text: 'Cần hoàn thành các bước trước khi giao hàng.',
          choices: [{ label: 'Được.', run: () => null }],
        };
        g.takeItem('hop_mui_khoan');
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
              if (!g.qObj('cam_do_im_lang', 'gap_lam_ch3')) g.completeObjective('cam_do_im_lang', 'gap_lam_ch3');
              g.chooseBranch('cam_do_im_lang', 'refuse', 'Từ chối mua chuộc');
              if (g.qStatus('cam_do_im_lang') === 'active') {
                g.finishQuest('cam_do_im_lang', 'done', 'Từ chối mua chuộc');
              }
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
              if (!g.qObj('cam_do_im_lang', 'gap_lam_ch3')) g.completeObjective('cam_do_im_lang', 'gap_lam_ch3');
              g.s.flags.accepted_lam_bribe = true;
              g.chooseBranch('cam_do_im_lang', 'accept', 'Nhận tiền im lặng');
              if (g.qStatus('cam_do_im_lang') === 'active') {
                g.finishQuest('cam_do_im_lang', 'done', 'Nhận tiền im lặng');
              }
              g.addStat('money', 50);
              g.changeRel('lam', 25, 'Minh đồng ý nhận tiền im lặng');
              g.startQuest('bay_vat_cam');
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
  if (g.qStatus('mon_no') === 'active' && g.qBranch('mon_no') === 'report') {
    choices.push({
      label: 'Báo cáo Quản giáo về tình trạng cho vay nặng lãi và đe dọa trong trại.',
      important: true,
      run: () => {
        if (!g.completeObjective('mon_no', 'bao_lan')) return {
          speaker: 'Quản giáo Lan', text: 'Bạn cần hoàn thành các bước giải quyết món nợ theo thứ tự trước.',
          choices: [{ label: 'Rõ, thưa cán bộ.', run: () => null }],
        };
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

  // Giải trình chính thức trước khi thu thập lời chứng Chú Bảy / camera.
  if (g.qStatus('bay_vat_cam') === 'active' &&
      g.qObj('bay_vat_cam', 'phat_hien_bay') &&
      !g.qObj('bay_vat_cam', 'trinh_bay')) {
    choices.push({
      label: 'Thưa quản giáo, cháu xin giải trình về vật cấm bị gài dưới giường.',
      important: true,
      run: () => {
        g.completeObjective('bay_vat_cam', 'trinh_bay');
        return {
          speaker: 'Quản giáo Lan',
          text: 'Đã tiếp nhận giải trình. Giờ cậu hãy tìm lời chứng Chú Bảy hoặc xin trích xuất camera hành lang để minh oan.',
          choices: [{ label: 'Cháu sẽ thu thập chứng cứ.', run: () => null }],
        };
      },
    });
  }
  if (g.qStatus('bay_vat_cam') === 'active' &&
      g.qObj('bay_vat_cam', 'trinh_bay') &&
      !g.qObj('bay_vat_cam', 'cung_cap_bang_chung')) {
    choices.push({
      label: 'Xin kiểm tra camera hành lang để xác minh người gài vật cấm.',
      important: true,
      run: () => {
        g.completeObjective('bay_vat_cam', 'cung_cap_bang_chung');
        return {
          speaker: 'Quản giáo Lan',
          text: 'Camera xác nhận có người khác lén vào buồng. Tôi sẽ xóa oan cho cậu và tiến hành điều tra.',
          choices: [{ label: 'Cảm ơn quản giáo.', run: () => null }],
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
        const reason = g.objectiveBlockReason('ho_so_giai_trinh', 'nop_ho_so');
        if (reason) return {
          speaker: 'Quản giáo Lan',
          text: reason,
          choices: [{ label: 'Cháu sẽ làm đúng bước.', run: () => null }],
        };
        return {
          speaker: 'Quản giáo Lan',
          text: `Tôi đã xem xét kỹ vận đơn và bản đối chiếu chữ ký mà cậu và Thầy Phúc gửi lên. Chứng cứ này chứng minh ${pName} chỉ là người bị lừa gạt, không phải kẻ chủ mưu vụ cháy kho số 7. Cậu muốn tôi ghi nhận hồ sơ này theo hướng nào trước Hội đồng?`,
          choices: [
            {
              label: 'Đề nghị phân loại mức độ cải tạo Tốt và bảo lưu hạnh kiểm cao nhất.',
              run: () => {
                g.completeObjective('ho_so_giai_trinh', 'nop_ho_so');
                g.completeObjective('ho_so_giai_trinh', 'ket_luan_lan');
                g.s.flags.ho_so_kho_7_cleared = true;
                g.addReform(5, 'Giải trình minh bạch vụ kho 7');
                g.changeRel('lan', 15, 'Quản giáo Lan đánh giá cao tinh thần thượng tôn kỷ luật');
                g.finishQuest('ho_so_giai_trinh', 'done');
                return null;
              },
            },
            {
              label: 'Xin cứu xét toàn diện cho các bạn tù liên đới đã dũng cảm làm chứng.',
              run: () => {
                g.completeObjective('ho_so_giai_trinh', 'nop_ho_so');
                g.completeObjective('ho_so_giai_trinh', 'ket_luan_lan');
                g.s.flags.ho_so_kho_7_cleared = true;
                g.gainXp(40, 'Nghĩa khí bảo vệ người làm chứng');
                g.changeRel('bay', 20, 'Chú Bảy vô cùng cảm kích');
                g.changeRel('huy', 20, 'Huy nể phục tấm lòng');
                g.changeRel('lan', 10, 'Quản giáo Lan ghi nhận nghĩa cử');
                g.finishQuest('ho_so_giai_trinh', 'done');
                return null;
              },
            },
          ],
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
        return {
          speaker: 'Quản giáo Lan',
          text: `Hội đồng Trại giam An Phú đã họp và quyết định: Phạm nhân ${pName} đã hoàn thành tốt quá trình cải tạo, được giảm hết thời hạn chấp hành án còn lại. Ngày mai cậu chính thức được tự do! Trước khi nhận quyết định, cậu có lời tâm huyết nào gửi tới Hội đồng?`,
          choices: [
            {
              label: 'Phát biểu lòng biết ơn về sự rèn giũa nghiêm khắc và công bằng của cán bộ trại.',
              run: () => {
                g.completeObjective('ky_xet_cuoi_cung', 'den_hoi_truong');
                g.completeObjective('ky_xet_cuoi_cung', 'nhan_quyet_dinh');
                g.addReform(5, 'Lời phát biểu chuẩn mực trước Hội đồng');
                g.changeRel('lan', 15, 'Cán bộ xúc động trước sự trưởng thành của Minh');
                g.changeRel('tung', 15, 'Cán bộ Tùng hài lòng');
                g.finishQuest('ky_xet_cuoi_cung', 'done');
                const endCode = g.computeEnding();
                g.s.ending = endCode;
                return {
                  speaker: 'Quản giáo Lan',
                  text: 'Hội đồng ghi nhận sự tiến bộ vượt bậc của cậu. Chúc mừng cậu trở lại với xã hội!',
                  choices: [{ label: 'Bước ra cổng trại và đón nhận tương lai', run: () => null }],
                };
              },
            },
            {
              label: 'Chia sẻ bài học sâu sắc và cam kết sống lương thiện, giúp đỡ bạn bè cùng buồng.',
              run: () => {
                g.completeObjective('ky_xet_cuoi_cung', 'den_hoi_truong');
                g.completeObjective('ky_xet_cuoi_cung', 'nhan_quyet_dinh');
                g.gainXp(50, 'Ý chí hoàn lương kiên định');
                g.addStat('morale', 20);
                g.changeRel('bay', 20, 'Chú Bảy tự hào');
                g.changeRel('huy', 20, 'Huy lấy Minh làm tấm gương');
                g.finishQuest('ky_xet_cuoi_cung', 'done');
                const endCode = g.computeEnding();
                g.s.ending = endCode;
                return {
                  speaker: 'Quản giáo Lan',
                  text: 'Biết đứng dậy sau vấp ngã là điều đáng quý nhất. Cánh cổng trại đã mở cho cậu!',
                  choices: [{ label: 'Bước ra cổng trại và đón nhận tương lai', run: () => null }],
                };
              },
            },
          ],
        };
      },
    });
  }

  // Vang lại lựa chọn: ho_so_kho_7_cleared hoặc bay_vat_cam
  if (g.s.flags.ho_so_kho_7_cleared) {
    choices.push({
      label: 'Thưa cán bộ, về hồ sơ giải trình kho số 7...',
      run: () => ({
        speaker: 'Quản giáo Lan',
        text: 'Hồ sơ giải trình vụ kho số 7 đã được Hội đồng thụ lý minh bạch. Bản giải trình trung thực của anh đã giúp làm rõ sự thật và giữ vững kỷ cương trại.',
        choices: [{ label: 'Cảm ơn cán bộ đã lắng nghe.', run: () => null }],
      }),
    });
  } else if (g.qStatus('bay_vat_cam') === 'done') {
    choices.push({
      label: 'Thưa cán bộ, về vụ việc bị gài bẫy buồng giam...',
      run: () => ({
        speaker: 'Quản giáo Lan',
        text: 'Vụ vật cấm gài bẫy buồng giam hôm trước, thái độ bình tĩnh khai báo trung thực của anh đã giúp cán bộ phân biệt rõ trắng đen. Cứ yên tâm cải tạo.',
        choices: [{ label: 'Tôi luôn tin tưởng vào cán bộ.', run: () => null }],
      }),
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
          return {
            speaker: 'Thầy Phúc',
            text: 'Thầy vừa quan sát bài thực hành của em, nối đúng trình tự và dứt khoát. Đây là Chứng chỉ nghề cơ điện bậc sơ cấp của em. Em định hướng phát triển tay nghề theo hướng nào?',
            choices: [
              {
                label: 'Em muốn học chuyên sâu kỹ thuật điện công nghiệp an toàn.',
                run: () => {
                  g.completeObjective('lop_nghe_dau', 'nhan_xet');
                  g.changeRel('phuc', 10, 'Thầy Phúc đánh giá cao tính chuyên cần');
                  g.addReform(3, 'Định hướng học nghề an toàn');
                  g.addStat('stamina', -10);
                  g.finishQuest('lop_nghe_dau', 'done', 'Học chuyên sâu điện an toàn');
                  return null;
                },
              },
              {
                label: 'Em muốn học thực hành sửa chữa đồ cơ khí - thiết bị sinh hoạt xưởng.',
                run: () => {
                  g.completeObjective('lop_nghe_dau', 'nhan_xet');
                  g.gainXp(25, 'Mở rộng tay nghề cơ khí');
                  g.changeRel('phuc', 5, 'Thầy Phúc ghi nhận tinh thần thực tế');
                  g.addStat('morale', 10);
                  g.finishQuest('lop_nghe_dau', 'done', 'Học thực hành cơ khí sửa chữa');
                  return null;
                },
              },
            ],
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
        return {
          speaker: 'Thầy Phúc',
          text: `Để thầy xem... Mảnh giấy này có dấu mộc và chữ ký người nhận là "Trần Văn Định". Đây chính là đầu mối từng giao dịch thiết bị với bên Lâm trước khi xảy ra hỏa hoạn. Em định xử lý manh mối này thế nào?`,
          choices: [
            {
              label: 'Nhờ thầy giữ cẩn thận bản gốc, cháu chỉ ghi nhớ thông tin.',
              run: () => {
                g.completeObjective('doi_chieu_chung_tu', 'dua_chung_tu');
                g.completeObjective('doi_chieu_chung_tu', 'doi_chieu');
                g.completeObjective('doi_chieu_chung_tu', 'phat_hien');
                g.changeRel('phuc', 10, 'Tin tưởng giao chứng cứ cho Thầy Phúc');
                g.addReform(2, 'Bảo vệ chứng cứ an toàn');
                g.finishQuest('doi_chieu_chung_tu', 'done');
                return null;
              },
            },
            {
              label: 'Cháu xin phép tự giữ kín bên mình để chủ động giải trình.',
              run: () => {
                g.completeObjective('doi_chieu_chung_tu', 'dua_chung_tu');
                g.completeObjective('doi_chieu_chung_tu', 'doi_chieu');
                g.completeObjective('doi_chieu_chung_tu', 'phat_hien');
                g.gainXp(30, 'Tự quản lý chứng cứ nhạy cảm');
                g.addStat('suspicion', 8);
                g.finishQuest('doi_chieu_chung_tu', 'done');
                return null;
              },
            },
          ],
        };
      },
    });
  }

  // Quạt phải được kiểm tra và sửa tại chỗ, không được báo khống để nhận thưởng.
  if (g.qStatus('sua_quat_phong_hoc') === 'active' && !g.qObj('sua_quat_phong_hoc', 'thay_vong_bi')) {
    choices.push({
      label: 'Thưa thầy, chiếc quạt hỏng phải xử lý thế nào ạ?',
      run: () => ({
        speaker: 'Thầy Phúc',
        text: 'Cháu hãy tới chiếc quạt trong lớp, kiểm tra hộp số trước rồi mới thay vòng bi và siết ốc nhé.',
        choices: [{ label: 'Dạ, cháu sẽ kiểm tra đúng thứ tự.', run: () => null }],
      }),
    });
  }

  // Nhiệm vụ Chương 4: Lời dặn ngày về
  if (g.qStatus('chia_tay_thay_phuc') === 'active' && !g.qObj('chia_tay_thay_phuc', 'tam_su_thay')) {
    choices.push({
      label: 'Thưa thầy, cháu sắp mãn hạn, xin phép đến chào thầy.',
      important: true,
      run: () => {
        g.completeObjective('chia_tay_thay_phuc', 'tam_su_thay');
        return {
          speaker: 'Thầy Phúc',
          text: 'Thầy mừng vì cháu đã học hành chăm chỉ. Thầy sẽ chuẩn bị lá thư giới thiệu việc làm, gặp lại thầy để nhận nhé.',
          choices: [{ label: 'Cháu cảm ơn thầy!', run: () => null }],
        };
      },
    });
  } else if (g.qStatus('chia_tay_thay_phuc') === 'active' && !g.qObj('chia_tay_thay_phuc', 'nhan_thu_gt')) {
    choices.push({
      label: 'Thưa thầy, cháu đến nhận thư giới thiệu việc làm.',
      important: true,
      run: () => {
        g.completeObjective('chia_tay_thay_phuc', 'nhan_thu_gt');
        g.giveItem('thu_gioi_thieu_viec_lam', 1);
        return {
          speaker: 'Thầy Phúc',
          text: `Thầy đã viết xong thư gửi bạn thầy làm xưởng cơ điện tại Bình Dương cho ${pName}. Ra trại cháu cầm theo và làm việc thật tốt nhé.`,
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

  // Trả thuốc hen cho Chú Bảy (hỗ trợ cả 3 phương án và cơ bản)
  const hasRetrievedMedicine = g.has('chai_thuoc_hen') && Boolean(
    g.qObj('nghi_an_thuoc', 'len_lut') ||
    g.qObj('nghi_an_thuoc', 'thuyet_phuc_khai') ||
    g.qObj('nghi_an_thuoc', 'thu_hoi_hoc_tuong') ||
    g.qObj('nghi_an_thuoc', 'nhat_thuoc')
  );
  if (g.qStatus('nghi_an_thuoc') === 'active' && hasRetrievedMedicine && !g.qObj('nghi_an_thuoc', 'tra_thuoc')) {
    choices.push({
      label: 'Cháu đã thu hồi được lọ thuốc hen suyễn của Chú Bảy rồi!',
      important: true,
      run: () => {
        if (!g.completeObjective('nghi_an_thuoc', 'tra_thuoc')) return {
          speaker: 'Y sĩ An', text: 'Hãy hoàn tất bước tìm kiếm trước khi bàn giao thuốc.',
          choices: [{ label: 'Dạ.', run: () => null }],
        };
        g.takeItem('chai_thuoc_hen');
        const branch = g.qBranch('nghi_an_thuoc');
        let detailPrompt = 'May quá! Đúng là thuốc đặc trị của Chú Bảy rồi. Tôi sẽ cho chú thở khí dung ngay. Cậu thu hồi thuốc bằng cách nào vậy?';
        if (branch === 'stealth') {
          detailPrompt = 'May quá! Đúng là thuốc đặc trị của Chú Bảy rồi. Cậu đã lén thu hồi an toàn qua mắt bảo vệ và camera, thao tác rất khéo!';
        } else if (branch === 'persuade') {
          detailPrompt = 'May quá! Đúng là thuốc đặc trị của Chú Bảy rồi. Cậu đã thuyết phục được Khải tự giác giao nộp, giải quyết bằng lời lẽ nhân văn rất đáng khen!';
        } else if (branch === 'observe') {
          detailPrompt = 'May quá! Đúng là thuốc đặc trị của Chú Bảy rồi. Khả năng quan sát và lần theo manh mối hiện trường của cậu rất sắc bén!';
        }
        return {
          speaker: 'Y sĩ An',
          text: detailPrompt,
          choices: [
            {
              label: 'Cháu chỉ mong Chú Bảy sớm qua cơn nguy kịch, người già trong trại cần được quan tâm.',
              run: () => {
                g.changeRel('an', 15, 'Minh báo cáo trung thực, tận tâm cứu người');
                g.changeRel('bay', 15, 'Chú Bảy biết ơn');
                g.addReform(3, 'Tương thân tương ái');
                return null;
              },
            },
            {
              label: 'Cháu xin bàn giao nguyên vẹn vật chứng y tế để cán bộ lập hồ sơ quản lý thuốc.',
              run: () => {
                g.gainXp(30, 'Ý thức trách nhiệm y tế');
                g.changeRel('an', 12, 'Y sĩ An cảm kích');
                g.changeRel('bay', 15, 'Chú Bảy biết ơn');
                return null;
              },
            },
          ],
        };
      },
    });
  }

  // Phụ việc y tế: phải nhận hướng dẫn từ Y sĩ trước khi mở tủ thuốc.
  if (g.qStatus('phu_y_te') === 'active' && !g.qObj('phu_y_te', 'nhan_viec')) {
    choices.push({
      label: 'Cháu xin nhận hướng dẫn để phụ phân loại tủ thuốc.',
      important: true,
      run: () => {
        g.completeObjective('phu_y_te', 'nhan_viec');
        return {
          speaker: 'Y sĩ An',
          text: 'Qua tủ thuốc bên cạnh và phân loại từng nhóm thuốc theo đúng nhãn rồi báo lại nhé.',
          choices: [{ label: 'Dạ, cháu sẽ làm theo.', run: () => null }],
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

  if (g.qStatus('phong_tham_gap') === 'active' && !g.qObj('phong_tham_gap', 'nhan_tien')) {
    choices.push({
      label: 'Chị Mai ơi, em muốn tâm sự với chị một chút.',
      important: true,
      run: () => {
        if (!g.qObj('phong_tham_gap', 'gap_chi')) g.completeObjective('phong_tham_gap', 'gap_chi');
        return {
          speaker: 'Chị Mai',
          role: 'Chị gái ruột',
          text: `Chị mừng được thấy em, ${pName}. Ở trong này em sống thế nào? Cứ nói thật cho chị yên tâm.`,
          choices: [{
            label: 'Em vẫn khỏe, sẽ chấp hành tốt nội quy và học nghề để sớm về nhà.',
            run: () => {
              g.completeObjective('phong_tham_gap', 'thanh_that');
              return {
                speaker: 'Chị Mai',
                text: 'Chị tin em. Chị còn gửi 25.000đ tiếp tế cho em, nhớ nhận trong sổ lưu ký nhé.',
                choices: [{
                  label: 'Nhận 25.000đ tiếp tế và cảm ơn chị.',
                  run: () => {
                    g.completeObjective('phong_tham_gap', 'nhan_tien');
                    return {
                      speaker: 'Chị Mai',
                      text: 'Cố gắng cải tạo tốt nghe em. Mẹ ở nhà đang ngóng ngày em trở về.',
                      choices: [{ label: 'Em hứa sẽ về sớm!', run: () => null }],
                    };
                  },
                }],
              };
            },
          }],
        };
      },
    });
  }

  if (g.qStatus('la_thu_que_nha') === 'active' &&
      g.qObj('la_thu_que_nha', 'nhan_thu') && !g.qObj('la_thu_que_nha', 'hoi_am')) {
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

  // Bắt đầu xử lý bẫy vật cấm: ghi nhận kiểm tra, không bỏ qua bước lên gặp Lan.
  if (g.qStatus('bay_vat_cam') === 'active' && !g.qObj('bay_vat_cam', 'phat_hien_bay')) {
    choices.push({
      label: 'Cán bộ Tùng, chuyện kiểm tra đột xuất phòng cháu thế nào ạ?',
      important: true,
      run: () => {
        g.completeObjective('bay_vat_cam', 'phat_hien_bay');
        return {
          speaker: 'Cán bộ Tùng',
          text: `Tôi vừa phát hiện vật cấm dưới chiếu của ${pName}. Cậu hãy đến Quản giáo Lan để giải trình chính thức rồi mới tìm nhân chứng hoặc camera chứng minh mình bị gài.`,
          choices: [{ label: 'Rõ, cháu sẽ gặp Quản giáo Lan.', run: () => null }],
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

function khaiDialogue(g: GameLogic): DNode {
  const pName = g.s.profile.name || 'Minh';
  const choices: DChoice[] = [];
  const attrs = g.s.progression?.attrs || { agility: 1, charisma: 1, perception: 1, endurance: 1 };

  if (g.qStatus('nghi_an_thuoc') === 'active' &&
      g.qBranch('nghi_an_thuoc') === 'persuade' &&
      !g.qObj('nghi_an_thuoc', 'thuyet_phuc_khai')) {
    choices.push({
      label: 'Khải, tôi muốn nói chuyện về lọ thuốc hen của Chú Bảy.',
      important: true,
      run: () => {
        if ((attrs.charisma ?? 1) >= 2) {
          return {
            speaker: 'Khải',
            text: 'Mày nói gì thế? Lọ thuốc nào? Tao chẳng biết gì hết!',
            choices: [
              {
                label: '[Giao tiếp ≥ 2] Chú Bảy đang khó thở cấp cứu ở phòng y tế. Nếu chú ấy có chuyện gì, cán bộ sẽ lập chuyên án ngộ sát. Cậu đưa thuốc đây, tôi bảo đảm việc này dừng lại ở đây.',
                important: true,
                run: () => {
                  g.completeObjective('nghi_an_thuoc', 'thuyet_phuc_khai');
                  g.giveItem('chai_thuoc_hen');
                  g.changeRel('khai', 10, 'Khải nể phục sự thấu tình đạt lý');
                  return {
                    speaker: 'Khải',
                    text: 'Cái gì... ngộ sát á?! Tao... tao chỉ tưởng lọ dầu xoa ai đánh rơi nên nhặt về tính đổi gói mì thôi! Nè, cầm lấy mang đi ngay đi, đừng có lôi tên tao vào với quản giáo đấy!',
                    choices: [{ label: 'Được, tôi sẽ mang về phòng y tế ngay.', run: () => null }],
                  };
                },
              },
              { label: 'Để tôi quay lại sau.', run: () => null },
            ],
          };
        } else {
          return {
            speaker: 'Khải',
            text: `(Yêu cầu Giao tiếp ≥ 2 — Khải nhìn bạn đầy dò xét và từ chối nói chuyện) "Biến đi chỗ khác, đừng có làm phiền tao!"`,
            choices: [{ label: 'Tôi sẽ quay lại sau.', run: () => null }],
          };
        }
      },
    });
  }

  choices.push({ label: 'Đóng', run: () => null });
  const line = g.rel('lam') < 0 ? 'Anh Lâm đang để ý mày đấy, đi đứng cẩn thận.' : 'Có chuyện gì muốn bàn thì tìm anh Lâm ở góc sau xưởng giờ nghỉ chiều.';
  return {
    speaker: 'Khải (Buồng 4)',
    text: choices.length > 1 ? `Mày tìm tao có việc gì thế ${pName}?` : line,
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
