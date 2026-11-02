import { fmtMoney } from '../logic/constants';
import type { GameLogic } from '../logic/game';
import { VIOLATIONS } from './violations';

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

export function buildDialogue(npc: string, g: GameLogic, openAppeal: () => void): DNode {
  g.meet(npc);
  switch (npc) {
    case 'bay': return bayDialogue(g);
    case 'huy': return huyDialogue(g);
    case 'lam': return lamDialogue(g);
    case 'lan': return lanDialogue(g, openAppeal);
    case 'tung': return tungDialogue(g);
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
  return ({ bay: 'Chú Bảy', huy: 'Huy', lam: 'Lâm', lan: 'Quản giáo Lan', tung: 'Cán bộ Tùng' } as Record<string, string>)[id] ?? id;
}

// ───────────────────── CHÚ BẢY ─────────────────────
function bayDialogue(g: GameLogic): DNode {
  const first = !g.qObj('nhap_trai', 'gap_bay') && g.qStatus('nhap_trai') === 'active';
  if (first) {
    g.completeObjective('nhap_trai', 'gap_bay');
    return {
      speaker: 'Chú Bảy', role: 'Phạm nhân lâu năm · Buồng 3',
      text: 'Cậu là Minh mới vào sáng nay hả? Ngồi xuống thở cái đã. Ở đây mới vào ai cũng ngợp. Cứ nhớ ba chuyện: đúng giờ điểm danh 6 rưỡi ở ô vàng ngoài sân, 8 giờ vào xưởng nhớ bấm bảng chấm công trước khi ngồi vào bàn, và tối 9 rưỡi phải có mặt trong buồng. Giữ cái đầu lạnh thì đường về mới ngắn.',
      choices: [
        {
          label: 'Cảm ơn chú. Cháu muốn cải tạo tốt để về sớm với chị gái.',
          run: () => {
            g.changeRel('bay', 4, 'Minh nói thật chuyện muốn sớm về với chị gái');
            g.startQuest('ca_dau');
            return {
              speaker: 'Chú Bảy',
              text: 'Có người chờ ở ngoài là cái phước lớn. Đừng để mấy đồng tiền lẻ hay lời rủ rê trong này làm mờ mắt. Sáng vào xưởng, làm đủ 3 ổ cắm điện cho chú xem. Xong việc qua kể chú nghe.',
              choices: [{ label: 'Vâng, cháu nhớ rồi.', run: () => null }],
            };
          },
        },
        {
          label: 'Ở đây ai là người cần dè chừng hả chú?',
          run: () => {
            g.startQuest('ca_dau');
            return {
              speaker: 'Chú Bảy',
              text: 'Thằng Huy cùng buồng mình tính bốc đồng nhưng không xấu bụng. Còn thằng Lâm buồng 4 hay đứng sau xưởng giờ nghỉ — nó cho vay, nhờ vả ngọt lắm, nhưng dính vào là mắc nợ cả đời tù. Cứ làm tròn ca lao động của mình trước đã.',
              choices: [{ label: 'Cháu hiểu rồi.', run: () => null }],
            };
          },
        },
      ],
    };
  }

  const choices: DChoice[] = [];

  if (g.qStatus('ca_dau') === 'active' && g.qObj('ca_dau', 'lap_rap') && !g.qObj('ca_dau', 'bao_bay')) {
    choices.push({
      label: 'Chú Bảy, cháu đã làm xong chỉ tiêu ca đầu tiên rồi!',
      run: () => {
        g.completeObjective('ca_dau', 'bao_bay');
        return {
          speaker: 'Chú Bảy',
          text: 'Tốt lắm. Tay nghề chưa quen mà làm đủ chỉ tiêu là có cố gắng. Cứ giữ nhịp đó — mỗi 5 ngày trại xét hồ sơ một lần, làm đủ, không vi phạm là được giảm từ 1 đến 3 ngày án. À… hồi trưa thằng Huy tìm cháu ngoài sân đấy, mặt mũi xanh mét.',
          choices: [{ label: 'Để cháu ra sân hỏi Huy xem sao.', run: () => null }],
        };
      },
    });
  }

  if (g.qStatus('dep_bay') === 'locked') {
    choices.push({
      label: 'Chú tìm gì mà cứ nhìn quanh chân bàn thế?',
      run: () => {
        g.startQuest('dep_bay');
        return {
          speaker: 'Chú Bảy',
          text: 'Đôi dép tổ ong con gái chú gửi vào đợt thăm năm ngoái… Hồi chiều tập thể dục gần khu xà đơn chú để quên, quay lại thì chẳng thấy. Đôi dép rẻ tiền thôi nhưng có khắc chữ B7 ở gót. Cháu đi ngang bụi cỏ phía Tây sân ngó giùm chú với.',
          choices: [{ label: 'Để cháu tìm giúp chú.', run: () => null }],
        };
      },
    });
  }

  if (g.qStatus('dep_bay') === 'active' && g.has('dep_bay')) {
    choices.push({
      label: 'Đôi dép chữ B7 của chú đây, cháu tìm thấy ở bụi cỏ cạnh khu xà đơn.',
      run: () => {
        g.takeItem('dep_bay');
        g.completeObjective('dep_bay', 'tra_dep');
        return {
          speaker: 'Chú Bảy',
          text: 'Trời đất, đúng nó rồi! Cảm ơn cháu nhiều lắm Minh ơi. Con bé nhà chú tháng sau lấy chồng… chú chỉ mong giữ sạch hồ sơ để được xét giảm kịp ngày về đứng nhìn nó một cái.',
          choices: [{ label: 'Chú cháu mình cùng cố gắng về sớm.', run: () => null }],
        };
      },
    });
  }

  if (g.s.flags.bay_saw_planting && !g.has('loi_khai_bay')) {
    choices.push({
      label: 'Chú Bảy, sáng nay có người gài lưỡi dao lam vào chiếu cháu!',
      important: true,
      run: () => {
        if (g.rel('bay') < 10) {
          return {
            speaker: 'Chú Bảy',
            text: 'Chuyện động chạm tới đám thằng Lâm không phải chuyện đùa… Chú còn ngày về với con gái. Cháu thông cảm, chú chưa dám chắc.',
            choices: [{ label: 'Cháu hiểu…', run: () => null }],
          };
        }
        g.giveItem('loi_khai_bay');
        g.changeRel('bay', 5, 'Chú Bảy đứng ra viết lời khai giúp Minh');
        return {
          speaker: 'Chú Bảy',
          text: 'Chú biết. 5 giờ sáng chú dậy đi vệ sinh, thấy thằng Khải đàn em của Lâm lén thò tay qua song sắt chỗ giường cháu. Chú đã ghi lại giờ giấc vào tờ giấy này — cầm lên phòng quản giáo đưa cho cô Lan. Chú già rồi, không để tụi nó hại người ngay trước mắt được.',
          choices: [{ label: 'Cháu mang ơn chú!', run: () => null }],
        };
      },
    });
  }

  if (g.qStatus('mon_no') === 'active' && !g.qBranch('mon_no')) {
    choices.push({
      label: 'Huy đang nợ Lâm 40.000đ, Lâm đòi cháu lấy đồ trong kho xưởng…',
      run: () => ({
        speaker: 'Chú Bảy',
        text: 'Đừng dại! Trong kho có camera quét qua lại, lại thêm cán bộ Tùng đi tuần. Lấy đồ cho Lâm xong là nó nắm đằng chuôi, lần sau nó lại bắt cháu làm tiếp. Một là cháu chịu khó tăng ca trả nợ đàng hoàng, hai là lấy được tờ giấy nợ rồi báo cho Quản giáo Lan — cô ấy xử có lý có tình.',
        choices: [{ label: 'Cảm ơn lời khuyên của chú.', run: () => null }],
      }),
    });
  }

  choices.push({
    label: 'Trò chuyện hỏi thăm chú',
    run: () => {
      const talked = g.dailyTalk('bay');
      return {
        speaker: 'Chú Bảy',
        text: talked
          ? 'Hồi mới vào chú cũng mất ngủ suốt. Sau nghĩ lại: mỗi ngày mình làm trọn vẹn là cái án ngắn đi một ngày thật. Đói thì ăn đúng bữa, mệt quá thì ra ghế nghỉ một lát đừng cố sức.'
          : 'Cứ thong thả làm việc đi cháu, tối về buồng chú cháu mình nói chuyện tiếp.',
        choices: [{ label: 'Vâng ạ.', run: () => null }],
      };
    },
  });

  const gift = giftChoice('bay', 'tra_da', 'chai trà đá', g, 'Trời nắng có chai trà mát ruột quá. Cảm ơn cháu.');
  if (gift) choices.push(gift);
  choices.push({ label: 'Tạm biệt chú', run: () => null });

  const mem = g.s.relations.bay.memories.slice(-1)[0]?.text;
  return {
    speaker: 'Chú Bảy', role: `Quan hệ: ${g.rel('bay')} · Buồng 3`,
    text: mem
      ? `"Nhớ chuyện ${mem.toLowerCase()}." — Có việc gì cần hỏi chú không Minh?`
      : 'Có chuyện gì thế Minh? Ở trong này có gì chưa rõ cứ hỏi chú.',
    choices,
  };
}

// ───────────────────── HUY ─────────────────────
function huyDialogue(g: GameLogic): DNode {
  const choices: DChoice[] = [];

  if (g.qStatus('ca_dau') === 'done' && g.qStatus('mon_no') === 'locked') {
    choices.push({
      label: 'Nghe Chú Bảy nói cậu đang tìm tôi. Có chuyện gì thế?',
      important: true,
      run: () => {
        g.startQuest('mon_no');
        g.completeObjective('mon_no', 'nghe_huy');
        return {
          speaker: 'Huy',
          text: 'Minh ơi… tuần trước tôi thua cược rồi mượn của lão Lâm 25 nghìn mua đồ ăn, giờ lão tính lãi thành 40.000đ, lại còn giữ tờ giấy nợ tôi lỡ ký. Lão bảo chiều nay ra góc khuất phía Nam xưởng nói chuyện, không thì lão cho người "dạy bảo". Cậu đi cùng tôi hoặc qua nói đỡ một tiếng được không?',
          choices: [
            {
              label: 'Bình tĩnh. Giờ tự do tôi qua góc sau xưởng gặp Lâm xem lão muốn gì.',
              run: () => {
                g.changeRel('huy', 5, 'Minh nhận lời đứng ra hỏi chuyện Lâm giúp Huy');
                return {
                  speaker: 'Huy',
                  text: 'Cảm ơn cậu! Giờ tự do (13:30–16:30) lão Lâm hay đứng ở góc khuất phía Nam sau xưởng. Nhưng cẩn thận đấy, lão cáo già lắm.',
                  choices: [{ label: 'Được, cứ để tôi xem.', run: () => null }],
                };
              },
            },
          ],
        };
      },
    });
  }

  if (g.qStatus('mon_no') === 'active' && g.qObj('mon_no', 'gap_lam') && (!g.qBranch('mon_no') || g.qBranch('mon_no') === 'report') && !g.has('giay_no') && !g.s.flags.report_with_note) {
    choices.push({
      label: 'Huy này, cậu còn giữ bản nháp hay giấy ghi nợ nào của Lâm không? Đưa tôi mang báo quản giáo.',
      important: true,
      run: () => ({
        speaker: 'Huy',
        text: 'Báo quản giáo á?! Lão Lâm biết thì tôi sống sao nổi… Nhưng tôi có giữ mảnh giấy lão ghi số tiền lãi cắt cổ nhét trong túi áo. Cậu chắc chắn cô Lan xử được không?',
        choices: [
          {
            label: 'Tin tôi. Có bằng chứng là cô Lan khóa tay Lâm lại ngay (cần quan hệ Huy ≥ 5).',
            disabled: g.rel('huy') < 5 ? 'Quan hệ với Huy chưa đủ tin tưởng (cần ≥ 5 — hãy giúp hoặc trò chuyện với Huy).' : undefined,
            run: () => {
              g.giveItem('giay_no');
              g.s.flags.huy_gave_note = true;
              g.completeObjective('mon_no', 'lay_giay');
              if (!g.qBranch('mon_no')) g.chooseBranch('mon_no', 'report');
              return {
                speaker: 'Huy',
                text: 'Đây… tôi đặt cược vào cậu đấy Minh. Đừng để tôi bị đòn oan.',
                choices: [{ label: 'Tôi mang thẳng lên phòng quản giáo đây.', run: () => null }],
              };
            },
          },
          {
            label: 'Đưa đây cho tôi, không nói nhiều! (giật lấy mảnh giấy)',
            important: true,
            risk: 'Huy sẽ giận (−15 quan hệ) vì bị ép buộc.',
            run: () => {
              g.giveItem('giay_no');
              g.s.flags.huy_gave_note = false;
              g.changeRel('huy', -15, 'Minh giật tờ giấy nợ không cần Huy đồng ý');
              g.completeObjective('mon_no', 'lay_giay');
              if (!g.qBranch('mon_no')) g.chooseBranch('mon_no', 'report');
              return {
                speaker: 'Huy',
                text: 'Này! Cậu làm cái gì đấy?! Nếu lão Lâm trả thù tôi thì cậu nhớ mặt đấy!',
                choices: [{ label: 'Rồi cậu sẽ hiểu.', run: () => null }],
              };
            },
          },
          { label: 'Thôi để tôi tính cách khác.', run: () => null },
        ],
      }),
    });
  }

  if (g.qStatus('mi_cho_huy') === 'locked') {
    choices.push({
      label: 'Trông cậu đói thế? Không mua gì ở căn tin à?',
      run: () => ({
        speaker: 'Huy',
        text: 'Tôi bị cấm căn tin hết tuần vì cãi nhau hôm bữa, bụng sôi ùng ục từ chiều. Cậu có tiền qua quầy căn tin trong nhà ăn (mở 16:30–21:00) mua giúp tôi gói mì 8.000đ được không? Tôi hứa trả ơn!',
        choices: [
          {
            label: 'Được, tôi hứa mua cho cậu trước khi hết ngày mai.',
            important: true,
            risk: 'Nếu nhận lời mà hết ngày mai chưa đưa mì, Huy sẽ nhớ bạn thất hứa (−8 quan hệ).',
            run: () => {
              g.startQuest('mi_cho_huy');
              return { speaker: 'Huy', text: 'Quá đỉnh! Nhớ nhé, tôi trông cậy vào cậu đấy.', choices: [{ label: 'Ừ.', run: () => null }] };
            },
          },
          { label: 'Tôi chưa hứa trước được, khi nào dư tiền tôi mua.', run: () => null },
        ],
      }),
    });
  }

  if (g.qStatus('mi_cho_huy') === 'active' && g.has('mi_goi')) {
    choices.push({
      label: 'Gói mì cậu nhờ đây, ăn đi cho đỡ đói.',
      run: () => {
        g.takeItem('mi_goi');
        g.completeObjective('mi_cho_huy', 'mua');
        g.completeObjective('mi_cho_huy', 'dua');
        return {
          speaker: 'Huy',
          text: 'Trời ơi cứu mạng! Cậu nói một lời là giữ đúng một lời. Sau này trong buồng có chuyện gì tôi đứng về phía cậu.',
          choices: [{ label: 'Anh em cùng buồng mà.', run: () => null }],
        };
      },
    });
  }

  choices.push({
    label: 'Nói chuyện phiếm với Huy',
    run: () => {
      g.dailyTalk('huy');
      return {
        speaker: 'Huy',
        text: 'Ở đây buồn chân buồn tay thì chiều ra khu xà đơn phía Tây sân tập vài hiệp, vừa đỡ căng thẳng vừa khỏe người để làm xưởng đỡ mệt.',
        choices: [{ label: 'Ừ, để tôi thử.', run: () => null }],
      };
    },
  });

  const gift = giftChoice('huy', 'banh_mi', 'bánh mì ngọt', g, 'Ngon! Cảm ơn ông bạn.');
  if (gift) choices.push(gift);
  choices.push({ label: 'Tạm biệt', run: () => null });

  const lastMem = g.s.relations.huy.memories.slice(-1)[0]?.text;
  return {
    speaker: 'Huy', role: `Quan hệ: ${g.rel('huy')} · Buồng 3`,
    text: lastMem ? `(${lastMem}) — Sao đấy Minh?` : 'Sao đấy ông bạn cùng buồng?',
    choices,
  };
}

// ───────────────────── LÂM ─────────────────────
function lamDialogue(g: GameLogic): DNode {
  const choices: DChoice[] = [];

  if (g.qStatus('mon_no') === 'active' && !g.qObj('mon_no', 'gap_lam')) {
    choices.push({
      label: 'Tôi đến nói chuyện khoản nợ 40.000đ của Huy.',
      important: true,
      run: () => {
        g.completeObjective('mon_no', 'gap_lam');
        g.s.flags.lam_threatened = true;
        return lamOfferNode(g);
      },
    });
  } else if (g.qStatus('mon_no') === 'active' && !g.qBranch('mon_no')) {
    choices.push({
      label: 'Về chuyện món nợ của Huy…',
      important: true,
      run: () => lamOfferNode(g),
    });
  }

  if (g.qStatus('mon_no') === 'active' && g.qBranch('mon_no') === 'steal' && g.has('hop_mui_khoan')) {
    choices.push({
      label: 'Hộp mũi khoan ông cần đây. Xóa nợ cho Huy và đưa 30.000đ như đã hẹn.',
      important: true,
      run: () => {
        g.takeItem('hop_mui_khoan');
        g.completeObjective('mon_no', 'giao_lam');
        return {
          speaker: 'Lâm',
          text: 'Haha, nhanh gọn đấy người mới. Tiền của cậu đây 30.000đ, nợ của thằng Huy coi như xóa. Nhưng nhớ nhé — từ giờ cậu với tôi cùng một thuyền rồi. Ngày mai xưởng kiểm kê, cứ im cái miệng là êm.',
          choices: [{ label: 'Tôi biết rồi.', run: () => null }],
        };
      },
    });
  }

  if (g.qStatus('mon_no') === 'active' && g.qBranch('mon_no') === 'pay') {
    choices.push({
      label: `Đây là đủ ${fmtMoney(40)} tiền sạch. Trả xong nợ cho Huy, từ nay đừng làm phiền cậu ấy.`,
      important: true,
      disabled: g.s.stats.money < 40 ? `Bạn mới có ${fmtMoney(g.s.stats.money)} / 40.000đ.` : undefined,
      run: () => {
        g.addStat('money', -40);
        g.completeObjective('mon_no', 'du_tien');
        g.completeObjective('mon_no', 'tra_lam');
        return {
          speaker: 'Lâm',
          text: 'Chà, chịu cày trả nợ thay bạn cơ đấy. Được, tiền trao cháo múc — đây, tờ giấy nợ tôi xé trước mặt cậu. Cậu không chịu làm cho tôi thì hơi tiếc, nhưng tôi tôn trọng người sòng phẳng.',
          choices: [{ label: 'Xong chuyện.', run: () => null }],
        };
      },
    });
  }

  choices.push({
    label: 'Hỏi dò tình hình trong khu',
    run: () => {
      g.dailyTalk('lam');
      return {
        speaker: 'Lâm',
        text: g.s.flags.lam_sanctioned
          ? 'Nhờ "công" của mày mà tao bị cắt hết đặc quyền. Cứ đợi đấy.'
          : 'Ở trại này biết điều thì ấm thân, thích làm anh hùng thì chỉ có thiệt.',
        choices: [{ label: 'Rời đi', run: () => null }],
      };
    },
  });
  choices.push({ label: 'Rời đi', run: () => null });

  return {
    speaker: 'Lâm', role: `Quan hệ: ${g.rel('lam')} · Buồng 4`,
    text: 'Có việc gì mà tìm tới chỗ của anh thế, lính mới?',
    choices,
  };
}

function lamOfferNode(g: GameLogic): DNode {
  return {
    speaker: 'Lâm',
    text: 'Thằng Huy nợ anh 40.000đ giấy trắng mực đen. Nhưng anh thấy chú mày sáng dạ, anh mở cho hai đường: Một là sáng mai vào xưởng, nhân lúc kho vật tư mở và thằng Tùng quay lưng + đèn camera xoay đi, lấy cho anh hộp mũi khoan — anh xóa nợ cho Huy, thưởng thêm chú 30.000đ. Hai là chồng đủ 40.000đ tiền mặt ra đây. Còn định đi mách lẻo quản giáo thì coi chừng cái chiếu nằm của chú đấy.',
    choices: [
      {
        label: '[Lựa chọn 1] Nhận lời Lâm: lẻn vào kho lấy hộp mũi khoan (xoá nợ + 30.000đ)',
        important: true,
        risk: VIOLATIONS.theft.risk + ' Ngoài ra bạn sẽ bị ràng buộc với Lâm.',
        run: () => {
          g.chooseBranch('mon_no', 'steal');
          return {
            speaker: 'Lâm',
            text: 'Biết thời thế đấy. Nhớ kỹ: kho chỉ mở trong ca sáng (08:00–11:30). Đợi đèn camera quét sang hướng khác và cán bộ Tùng không nhìn về phía kho rồi hãy bước vào.',
            choices: [{ label: 'Tôi nghe rõ rồi.', run: () => null }],
          };
        },
      },
      {
        label: '[Lựa chọn 2] Từ chối làm bậy: "Tôi sẽ tự kiếm đủ 40.000đ trả thay Huy"',
        important: true,
        risk: 'Mất 40.000đ tiền công vất vả kiếm được, nhưng giữ sạch hồ sơ và Huy mang ơn.',
        run: () => {
          g.chooseBranch('mon_no', 'pay');
          if (g.s.stats.money >= 40) g.completeObjective('mon_no', 'du_tien');
          return {
            speaker: 'Lâm',
            text: 'Ồ, thích đóng vai người tốt tự bỏ tiền túi? Cũng được thôi, miễn anh thu đủ 40.000đ. Kiếm đủ tiền thì mang qua đây.',
            choices: [{ label: 'Đợi đấy.', run: () => null }],
          };
        },
      },
      {
        label: '[Lựa chọn 3] Không thoả hiệp — tìm bằng chứng báo Quản giáo Lan',
        important: true,
        risk: 'Lâm sẽ thù và tìm cách trả đũa. Nên lấy giấy nợ từ Huy trước khi báo để có bằng chứng.',
        run: () => {
          g.chooseBranch('mon_no', 'report');
          return {
            speaker: 'Lâm',
            text: 'Nhìn ánh mắt mày là biết định giở trò gì rồi. Cứ thử đi, xem không có bằng chứng thì quản giáo nghe ai.',
            choices: [{ label: '(Tìm Huy hỏi giấy nợ hoặc lên phòng quản giáo)', run: () => null }],
          };
        },
      },
      {
        label: '[Lựa chọn 4] Lao vào đánh Lâm cảnh cáo ngay tại chỗ',
        important: true,
        risk: VIOLATIONS.fight.risk,
        run: () => {
          g.chooseBranch('mon_no', 'fight');
          g.recordViolation('fight', `lam-d${g.s.day}`, 'Cán bộ Tùng và phạm nhân trong sân chứng kiến bạn lao vào đánh Lâm.');
          g. finishQuest('mon_no', 'done', 'Dùng bạo lực với Lâm');
          g.startHearing({
            id: `fight_lam_d${g.s.day}`,
            title: 'Gây thương tích trong sân trại',
            charge: 'Tấn công phạm nhân Lâm tại góc sân phía Nam.',
            evidence: ['Biên bản của Cán bộ Tùng', 'Vết thương trên mặt Lâm'],
            baseDays: 2,
            canExplain: true,
            explainTag: 'lam_threatened',
          });
          return null;
        },
      },
    ],
  };
}

// ───────────────────── QUẢN GIÁO LAN ─────────────────────
function lanDialogue(g: GameLogic, openAppeal: () => void): DNode {
  const choices: DChoice[] = [];

  if (g.qStatus('mon_no') === 'active' && (g.qBranch('mon_no') === 'report' || g.has('giay_no'))) {
    choices.push({
      label: g.has('giay_no')
        ? 'Báo cáo việc Lâm cho vay nặng lãi & ép trộm đồ (nộp kèm giấy ghi nợ)'
        : 'Báo cáo việc Lâm ép nợ Huy và dụ dỗ trộm kho (chưa có vật chứng)',
      important: true,
      risk: g.has('giay_no')
        ? 'Có vật chứng rõ ràng: Lâm bị xử lý kỷ luật, bạn +6 điểm cải tạo. Tuy nhiên Lâm có thể tìm cách trả đũa ngầm.'
        : 'Chưa có vật chứng: Quản giáo chỉ ghi nhận nhắc nhở (+2 điểm cải tạo), Lâm vẫn biết bạn đi báo.',
      run: () => {
        if (!g.qBranch('mon_no')) g.chooseBranch('mon_no', 'report');
        if (g.has('giay_no')) {
          g.takeItem('giay_no');
          g.s.flags.report_with_note = true;
          g.completeObjective('mon_no', 'lay_giay');
        }
        g.completeObjective('mon_no', 'bao_lan');
        return {
          speaker: 'Quản giáo Lan',
          text: g.s.flags.report_with_note
            ? 'Tờ giấy nợ có chữ viết tay của Lâm đây rồi. Cậu làm rất đúng quy định khi không tự ý giải quyết bằng bạo lực hay nghe lời xúi giục. Tôi sẽ lập biên bản xử lý Lâm và hủy khoản nợ bất hợp pháp này. Nhưng mấy ngày tới hãy cẩn thận đồ đạc trong buồng, có bất thường thì báo ngay.'
            : 'Tôi ghi nhận lời trình bày của cậu và sẽ gọi Lâm lên nhắc nhở. Tuy nhiên không có giấy tờ hay nhân chứng thì chưa thể kỷ luật ngay. Lần sau nếu có vật chứng hãy mang lên.',
          choices: [{ label: 'Rõ, thưa cán bộ.', run: () => null }],
        };
      },
    });
  }

  if (g.has('hop_mui_khoan')) {
    choices.push({
      label: 'Thưa cán bộ, tôi muốn tự giác giao nộp lại hộp mũi khoan của kho',
      important: true,
      run: () => {
        g.takeItem('hop_mui_khoan');
        g.addStat('suspicion', -20);
        g.addReform(1, 'Tự giác giao nộp vật tư');
        if (g.qStatus('mon_no') === 'active' && g.qBranch('mon_no') === 'steal') {
          g.finishQuest('mon_no', 'failed', 'Tự giác trả lại vật tư kho');
        }
        return {
          speaker: 'Quản giáo Lan',
          text: 'Biết dừng lại trước khi quá muộn là tốt. Tôi trả hộp mũi khoan về kho và không lập biên bản vi phạm.',
          choices: [{ label: 'Cảm ơn cán bộ.', run: () => null }],
        };
      },
    });
  }

  const activeVio = g.s.violations.filter((v) => v.status === 'active' && !v.appealed && v.severity > 0);
  choices.push({
    label: `Khiếu nại / giải trình hồ sơ vi phạm (${activeVio.length} hồ sơ có thể giải trình)`,
    run: () => {
      openAppeal();
      return null;
    },
  });

  choices.push({
    label: 'Hỏi về điều kiện xét giảm án',
    run: () => ({
      speaker: 'Quản giáo Lan',
      text: 'Cứ mỗi 5 ngày (ngày 5, 10, 15…) hội đồng xét hồ sơ một lần. Bốn yếu tố được cộng điểm: điểm cải tạo tăng trong kỳ, số ngày lao động đủ chỉ tiêu, điểm danh đúng giờ và mức cải tạo hiện tại. Mỗi vi phạm trong kỳ sẽ trừ trực tiếp vào điểm xét; có hành vi nghiêm trọng thì kỳ đó không được giảm. Xem chi tiết trong mục Hồ sơ (phím P).',
      choices: [{ label: 'Tôi đã rõ.', run: () => null }],
    }),
  });

  choices.push({ label: 'Chào cán bộ', run: () => null });

  return {
    speaker: 'Quản giáo Lan', role: `Quản giáo Khu A · Quan hệ: ${g.rel('lan')}`,
    text: 'Phạm nhân Minh AP-0317. Có việc gì cần báo cáo hay giải trình thì trình bày ngắn gọn, rõ căn cứ.',
    choices,
  };
}

// ───────────────────── CÁN BỘ TÙNG & NPC PHỤ ─────────────────────
function tungDialogue(g: GameLogic): DNode {
  return {
    speaker: 'Cán bộ Tùng', role: 'Cán bộ trật tự & xưởng',
    text: 'Giờ lao động nhớ bấm bảng chấm công trước khi ngồi vào bàn. Tuyệt đối không tự ý bước qua vạch đỏ vào kho vật tư phía trong xưởng — camera và tôi đều giám sát.',
    choices: [{ label: 'Rõ, thưa cán bộ.', run: () => null }],
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
