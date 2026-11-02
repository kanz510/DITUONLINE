import * as THREE from 'three';
import type { SoundEngine } from './audio';
import type { BackgroundId } from '../logic/constants';

export interface CutsceneChoice {
  id: 'keep_doc' | 'help_victim' | 'chase_contact';
  label: string;
  desc: string;
  gain: string;
}

export const FLASHBACK_CHOICES: CutsceneChoice[] = [
  {
    id: 'keep_doc',
    label: 'Giữ lại mảnh chứng từ xuất kho',
    desc: 'Lén nhét một góc phiếu giao nhận có chữ ký người gửi vào túi trước khi lửa lan tới.',
    gain: 'Manh mối quan trọng về người tổ chức thực sự của vụ án kho số 7.',
  },
  {
    id: 'help_victim',
    label: 'Cứu người bảo vệ bị kẹt trong đám cháy',
    desc: 'Bất chấp nguy hiểm kéo người phụ kho lớn tuổi ra khỏi vùng khói độc.',
    gain: 'Được người trong cuộc biết ơn sâu sắc, giảm căng thẳng ban đầu và tăng thiện cảm.',
  },
  {
    id: 'chase_contact',
    label: 'Đuổi theo bóng người quen bỏ chạy',
    desc: 'Cố gắng nhìn rõ biển số xe và nhân dạng của kẻ đã thuê mình trước khi hắn tẩu thoát.',
    gain: 'Ghi nhớ nhân dạng kẻ cầm đầu, hỗ trợ đối chất trong quá trình điều tra sau này.',
  },
];

export interface CutsceneBeat {
  id: number;
  title: string;
  duration: number; // giây
  camPos: [number, number, number];
  camLook: [number, number, number];
  subtitle: string;
  hasChoice?: boolean;
}

export class CutsceneController {
  private active = false;
  private currentBeat = 0;
  private selectedChoice: 'keep_doc' | 'help_victim' | 'chase_contact' = 'keep_doc';
  private choiceMade = false;
  private overlayEl!: HTMLElement;
  private subEl!: HTMLElement;
  private choiceModalEl!: HTMLElement;
  private onFinishCallback: ((choice: 'keep_doc' | 'help_victim' | 'chase_contact') => void) | null = null;
  private timeoutId: any = null;

  constructor(
    private camera: THREE.PerspectiveCamera,
    private sfx: SoundEngine,
  ) {
    this.createDom();
  }

  private createDom() {
    this.overlayEl = document.createElement('div');
    this.overlayEl.id = 'cutscene-overlay';
    this.overlayEl.className = 'cutscene-overlay';
    this.overlayEl.style.display = 'none';

    this.overlayEl.innerHTML = `
      <div class="cutscene-header">
        <div class="cutscene-title">ĐÊM Ở KHO SỐ 7</div>
        <button class="btn btn-skip" id="btn-cutscene-skip">Bỏ qua mở đầu ⏭</button>
      </div>
      <div class="cutscene-subtitles" id="cutscene-sub"></div>
      <div class="cutscene-choice-host" id="cutscene-choice-host" style="display:none"></div>
    `;

    document.body.appendChild(this.overlayEl);
    this.subEl = this.overlayEl.querySelector('#cutscene-sub')!;
    this.choiceModalEl = this.overlayEl.querySelector('#cutscene-choice-host')!;

    this.overlayEl.querySelector('#btn-cutscene-skip')?.addEventListener('click', () => {
      this.skip();
    });
  }

  play(
    playerName: string,
    background: BackgroundId,
    onFinish: (choice: 'keep_doc' | 'help_victim' | 'chase_contact') => void,
  ) {
    this.active = true;
    this.currentBeat = 0;
    this.choiceMade = false;
    this.onFinishCallback = onFinish;
    this.overlayEl.style.display = 'flex';
    this.sfx.click();

    // Các phân cảnh cắt cảnh có kịch bản máy quay
    const beats: CutsceneBeat[] = [
      {
        id: 0,
        title: 'Căn phòng trọ ngoại ô',
        duration: 9,
        camPos: [-14, 2.5, -24],
        camLook: [-14, 1.2, -27],
        subtitle: `${playerName}, 24 tuổi. Áp lực tiền bạc đè nặng lên từng tháng trọ. Một lời đề nghị béo bở xuất hiện từ người quen...`,
      },
      {
        id: 1,
        title: 'Lời đề nghị ban đêm',
        duration: 10,
        camPos: [13, 2.2, -4],
        camLook: [16, 1.2, 0],
        subtitle: background === 'mechanic'
          ? 'Họ nhờ sửa một chiếc xe tải khả nghi với thù lao gấp ba. Dù biết có điều bất thường, Minh vẫn nhận lời vì cần tiền...'
          : background === 'courier'
          ? 'Họ thuê chở một kiện hàng ngoài sổ sách đến Kho số 7 lúc nửa đêm. Áp lực mưu sinh khiến Minh bỏ qua mọi cảnh báo...'
          : 'Một chữ ký khống trên tờ phiếu xuất kho để hợp thức hóa hàng hóa. Họ hứa hẹn sẽ không ai phát hiện...',
      },
      {
        id: 2,
        title: 'Hỏa hoạn tại Kho số 7',
        duration: 16,
        camPos: [21, 2.8, -3],
        camLook: [21.75, 1.0, -7],
        subtitle: 'Bất ngờ hỏa hoạn bùng lên! Còi báo động rú vang, khói đen bao trùm khắp nhà kho. Trong khoảnh khắc hỗn loạn, Minh phải quyết định:',
        hasChoice: true,
      },
      {
        id: 3,
        title: 'Phiên tuyên án',
        duration: 9,
        camPos: [-22, 2.2, -6],
        camLook: [-22.5, 1.5, -8.8],
        subtitle: 'Thủ phạm chính tẩu thoát. Tòa tuyên phạt 24 ngày cải tạo tại Trại giam An Phú. Con đường chuộc lại sai lầm bắt đầu từ đây.',
      },
      {
        id: 4,
        title: 'Cổng Trại giam An Phú',
        duration: 8,
        camPos: [0, 2.5, 20],
        camLook: [0, 2.0, 32],
        subtitle: 'Cánh cổng sắt nặng nề khép lại sau lưng. Mục tiêu duy nhất: Cải tạo tốt để về sớm, và tìm ra sự thật về kẻ đã gài bẫy mình.',
      },
    ];

    this.runBeats(beats);
  }

  private runBeats(beats: CutsceneBeat[]) {
    if (!this.active) return;
    if (this.currentBeat >= beats.length) {
      this.finish();
      return;
    }

    const b = beats[this.currentBeat];
    this.subEl.textContent = b.subtitle;

    // Di chuyển camera điện ảnh 3D
    this.camera.position.set(...b.camPos);
    this.camera.lookAt(...b.camLook);

    if (b.hasChoice && !this.choiceMade) {
      this.showChoiceModal(() => {
        this.choiceMade = true;
        this.currentBeat++;
        this.runBeats(beats);
      });
      return;
    }

    this.timeoutId = setTimeout(() => {
      if (this.active) {
        this.currentBeat++;
        this.runBeats(beats);
      }
    }, b.duration * 1000);
  }

  private showChoiceModal(onDone: () => void) {
    this.choiceModalEl.style.display = 'block';
    this.choiceModalEl.innerHTML = `
      <div class="cutscene-choice-card">
        <h3>LỰA CHỌN TRONG KHOẢNH KHẮC NGUY CẤP</h3>
        <p>Lửa đang lan nhanh, bạn sẽ chọn hành động nào trước khi lao ra ngoài?</p>
        <div class="cutscene-choices-list">
          ${FLASHBACK_CHOICES.map(
            (c) => `
            <button class="choice-btn" data-choice="${c.id}">
              <div class="choice-title">👉 ${c.label}</div>
              <div class="choice-desc">${c.desc}</div>
              <div class="choice-gain"><b>Hậu quả:</b> ${c.gain}</div>
            </button>
          `,
          ).join('')}
        </div>
      </div>
    `;

    this.choiceModalEl.querySelectorAll('[data-choice]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.sfx.click();
        const cid = (btn as HTMLElement).dataset.choice as 'keep_doc' | 'help_victim' | 'chase_contact';
        this.selectedChoice = cid;
        this.choiceModalEl.style.display = 'none';
        onDone();
      });
    });
  }

  skip() {
    if (!this.active) return;
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.choiceModalEl.style.display = 'none';
    this.finish();
  }

  private finish() {
    this.active = false;
    this.overlayEl.style.display = 'none';
    if (this.onFinishCallback) {
      this.onFinishCallback(this.selectedChoice);
      this.onFinishCallback = null;
    }
  }

  isPlaying(): boolean {
    return this.active;
  }

  isActive(): boolean {
    return this.active;
  }

  update(_dt: number) {}
}
