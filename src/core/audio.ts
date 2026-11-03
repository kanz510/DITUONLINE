export class SoundEngine {
  private ctx: AudioContext | null = null;
  volume = 0.7;
  private stepTimer = 0;

  // BGM state
  private bgmEnabled = true;
  private bgmTimer: number | null = null;
  private bgmGainNode: GainNode | null = null;
  private bgmLoopStep = 0;
  private bgmNextTime = 0;
  private bgmRunning = false;
  private bgmPausedByVisibility = false;

  // Rain loop state
  private rainNode: AudioBufferSourceNode | null = null;
  private rainGainNode: GainNode | null = null;
  private isRaining = false;
  private noiseBuffer: AudioBuffer | null = null;

  constructor() {
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          if (this.bgmRunning) {
            this.bgmPausedByVisibility = true;
            this.stopBgm();
          }
        } else {
          if (this.bgmPausedByVisibility && this.bgmEnabled) {
            this.bgmPausedByVisibility = false;
            this.startBgm();
          }
        }
      });
    }
  }

  private ensure(): AudioContext | null {
    if (this.volume <= 0) return null;
    if (!this.ctx && typeof window !== 'undefined') {
      const C = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (C) this.ctx = new C();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  tone(freq: number, dur = 0.12, type: OscillatorType = 'sine', gain = 0.18) {
    const ctx = this.ensure();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      g.gain.setValueAtTime(gain * this.volume, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
      osc.connect(g).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + dur);
    } catch {}
  }

  private getNoiseBuffer(ctx: AudioContext, seconds = 2.0): AudioBuffer {
    if (this.noiseBuffer && this.noiseBuffer.length >= ctx.sampleRate * seconds) {
      return this.noiseBuffer;
    }
    const len = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    this.noiseBuffer = buf;
    return buf;
  }

  bell() {
    this.tone(740, 0.35, 'triangle', 0.25);
    setTimeout(() => this.tone(587, 0.45, 'triangle', 0.22), 180);
  }

  click() {
    this.tone(520, 0.06, 'sine', 0.12);
  }

  good() {
    this.tone(523, 0.1, 'triangle', 0.16);
    setTimeout(() => this.tone(659, 0.14, 'triangle', 0.16), 90);
  }

  bad() {
    this.tone(220, 0.22, 'sawtooth', 0.18);
  }

  step(dt: number, sprinting: boolean) {
    this.stepTimer -= dt;
    if (this.stepTimer <= 0) {
      this.stepTimer = sprinting ? 0.28 : 0.42;
      this.tone(110 + Math.random() * 25, 0.045, 'triangle', 0.07);
    }
  }

  // --- VIỆC 9b: Các hiệu ứng âm thanh mới ---

  /** Tiếng cửa mở / đóng khi người chơi ra vào các phòng. */
  door() {
    const ctx = this.ensure();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.18);
      g.gain.setValueAtTime(0.15 * this.volume, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.connect(g).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {}
  }

  /** Tiếng ăn cơm trại hoặc quà vặt căn tin. */
  eat() {
    const ctx = this.ensure();
    if (!ctx) return;
    try {
      const noise = this.getNoiseBuffer(ctx, 0.5);
      const playBite = (delayMs: number) => {
        setTimeout(() => {
          if (!this.ctx || this.volume <= 0) return;
          const src = this.ctx.createBufferSource();
          src.buffer = noise;
          const filter = this.ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.value = 1400;
          filter.Q.value = 2.5;
          const g = this.ctx.createGain();
          g.gain.setValueAtTime(0.12 * this.volume, this.ctx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
          src.connect(filter).connect(g).connect(this.ctx.destination);
          src.start();
          src.stop(this.ctx.currentTime + 0.08);
          this.tone(280, 0.05, 'sine', 0.08);
        }, delayMs);
      };
      playBite(0);
      playBite(120);
    } catch {}
  }

  /** Tiếng búa gõ hoàn thành chi tiết gia công ở xưởng. */
  hammer() {
    const ctx = this.ensure();
    if (!ctx) return;
    try {
      // Metallic ringing sound
      this.tone(840, 0.22, 'triangle', 0.22);
      this.tone(1260, 0.15, 'sine', 0.12);
      // Impact tap
      const src = ctx.createBufferSource();
      src.buffer = this.getNoiseBuffer(ctx, 0.2);
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 800;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.2 * this.volume, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      src.connect(filter).connect(g).connect(ctx.destination);
      src.start();
      src.stop(ctx.currentTime + 0.05);
    } catch {}
  }

  /** Tiếng tập thể lực (hiệp hít xà, chống đẩy). */
  workout() {
    this.tone(85, 0.18, 'sine', 0.22);
    setTimeout(() => this.tone(115, 0.12, 'triangle', 0.14), 60);
  }

  /** Tiếng chuông êm dịu khi đi ngủ qua ngày (khác tiếng bell điểm danh). */
  sleepBell() {
    const ctx = this.ensure();
    if (!ctx) return;
    try {
      // Harmonic dual bell (G4 392Hz, C5 523Hz) with long gentle decay
      const playNote = (freq: number, gain: number) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        g.gain.setValueAtTime(gain * this.volume, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.4);
        osc.connect(g).connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.4);
      };
      playNote(392, 0.20);
      setTimeout(() => playNote(523.25, 0.24), 160);
    } catch {}
  }

  /** Nhạc hiệu lên cấp nhân vật (thăng cấp kỹ năng). */
  levelUp() {
    const notes = [440, 554.37, 659.25, 880]; // A4 - C#5 - E5 - A5
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.tone(freq, 0.22, 'triangle', 0.20);
      }, idx * 110);
    });
  }

  /** Tiếng còi quản giáo báo hiệu bắt đầu giờ điểm danh. */
  officerWhistle() {
    const ctx = this.ensure();
    if (!ctx) return;
    try {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const g = ctx.createGain();
      osc1.type = 'sine';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(2600, ctx.currentTime);
      osc2.frequency.setValueAtTime(2800, ctx.currentTime);
      g.gain.setValueAtTime(0.18 * this.volume, ctx.currentTime);
      g.gain.setValueAtTime(0.18 * this.volume, ctx.currentTime + 0.32);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.42);
      osc1.connect(g);
      osc2.connect(g);
      g.connect(ctx.destination);
      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.42);
      osc2.stop(ctx.currentTime + 0.42);
    } catch {}
  }

  /** Nhạc hiệu hoàn thành nhiệm vụ dài và trang trọng hơn good(). */
  questComplete() {
    // Sequence: C5 -> E5 -> G5 -> C6 chord fanfare
    const steps = [
      { freq: 523.25, time: 0, dur: 0.16 },
      { freq: 659.25, time: 130, dur: 0.16 },
      { freq: 783.99, time: 260, dur: 0.20 },
      { freq: 1046.50, time: 420, dur: 0.55 },
    ];
    for (const step of steps) {
      setTimeout(() => {
        this.tone(step.freq, step.dur, 'triangle', 0.24);
      }, step.time);
    }
  }

  /** Bật/tắt tiếng mưa rì rào nhẹ nhàng khi thời tiết mưa. */
  setRain(raining: boolean) {
    if (this.isRaining === raining) return;
    this.isRaining = raining;
    if (!raining) {
      if (this.rainGainNode && this.ctx) {
        try {
          this.rainGainNode.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
          setTimeout(() => {
            if (!this.isRaining && this.rainNode) {
              try { this.rainNode.stop(); } catch {}
              this.rainNode.disconnect();
              this.rainNode = null;
            }
          }, 850);
        } catch {}
      }
      return;
    }

    const ctx = this.ensure();
    if (!ctx) return;
    try {
      const noise = this.getNoiseBuffer(ctx, 4.0);
      const src = ctx.createBufferSource();
      src.buffer = noise;
      src.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 650;

      const g = ctx.createGain();
      g.gain.setValueAtTime(0.001, ctx.currentTime);
      g.gain.linearRampToValueAtTime(0.035 * this.volume, ctx.currentTime + 1.2);

      src.connect(filter).connect(g).connect(ctx.destination);
      src.start();
      this.rainNode = src;
      this.rainGainNode = g;
    } catch {}
  }

  // --- VIỆC 9a: Nhạc nền (BGM) WebAudio tổng hợp ---

  startBgm() {
    if (!this.bgmEnabled || this.bgmRunning || this.volume <= 0) return;
    const ctx = this.ensure();
    if (!ctx) return;
    this.bgmRunning = true;
    this.bgmNextTime = ctx.currentTime + 0.05;
    this.bgmLoopStep = 0;

    if (!this.bgmGainNode) {
      this.bgmGainNode = ctx.createGain();
      this.bgmGainNode.connect(ctx.destination);
    }
    this.updateBgmVolume();

    // Scheduler tick every 200ms
    if (this.bgmTimer) clearInterval(this.bgmTimer);
    this.bgmTimer = window.setInterval(() => this.scheduleBgm(), 200);
    this.scheduleBgm();
  }

  stopBgm() {
    this.bgmRunning = false;
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  setBgmEnabled(val: boolean) {
    this.bgmEnabled = val;
    if (!val) {
      this.stopBgm();
    } else {
      this.startBgm();
    }
  }

  isBgmEnabled(): boolean {
    return this.bgmEnabled;
  }

  updateBgmVolume() {
    if (this.bgmGainNode && this.ctx) {
      const targetVol = this.bgmEnabled ? this.volume * 0.4 : 0;
      this.bgmGainNode.gain.setValueAtTime(targetVol, this.ctx.currentTime);
    }
    if (this.rainGainNode && this.ctx && this.isRaining) {
      this.rainGainNode.gain.setValueAtTime(0.035 * this.volume, this.ctx.currentTime);
    }
  }

  private scheduleBgm() {
    if (!this.bgmRunning || !this.ctx || this.volume <= 0 || !this.bgmEnabled) return;
    const lookahead = 1.0;
    while (this.bgmNextTime < this.ctx.currentTime + lookahead) {
      this.scheduleBgmChord(this.bgmLoopStep, this.bgmNextTime);
      this.bgmNextTime += 4.0; // 4 seconds per chord
      this.bgmLoopStep = (this.bgmLoopStep + 1) % 4;
    }
  }

  private scheduleBgmChord(chordIdx: number, time: number) {
    if (!this.ctx || !this.bgmGainNode) return;

    // 4-chord progression: Dm7 -> Bbmaj7 -> Fmaj7 -> C7 (reflective prison daily routine)
    const chords: number[][] = [
      [146.83, 174.61, 220.00, 261.63], // Dm7 (D3, F3, A3, C4)
      [116.54, 146.83, 174.61, 220.00], // Bbmaj7 (Bb2, D3, F3, A3)
      [87.31, 130.81, 174.61, 220.00],  // F (F2, C3, F3, A3)
      [130.81, 164.81, 196.00, 246.94], // C (C3, E3, G3, B3)
    ];
    const notes = chords[chordIdx % chords.length];

    // Gentle arpeggiated pad notes
    notes.forEach((freq, i) => {
      try {
        const osc = this.ctx!.createOscillator();
        const noteGain = this.ctx!.createGain();
        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, time);

        const noteTime = time + i * 0.35;
        const noteDur = 3.2;
        noteGain.gain.setValueAtTime(0.0001, noteTime);
        noteGain.gain.linearRampToValueAtTime(0.06, noteTime + 0.3);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + noteDur);

        osc.connect(noteGain).connect(this.bgmGainNode!);
        osc.start(noteTime);
        osc.stop(noteTime + noteDur);
      } catch {}
    });

    // Melodic chime note on beat 2
    const melodyNotes = [329.63, 293.66, 349.23, 261.63];
    try {
      const mOsc = this.ctx.createOscillator();
      const mGain = this.ctx.createGain();
      mOsc.type = 'sine';
      mOsc.frequency.setValueAtTime(melodyNotes[chordIdx % melodyNotes.length], time + 1.8);
      mGain.gain.setValueAtTime(0.0001, time + 1.8);
      mGain.gain.linearRampToValueAtTime(0.05, time + 2.0);
      mGain.gain.exponentialRampToValueAtTime(0.0001, time + 3.6);
      mOsc.connect(mGain).connect(this.bgmGainNode);
      mOsc.start(time + 1.8);
      mOsc.stop(time + 3.6);
    } catch {}
  }
}
