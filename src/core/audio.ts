export class SoundEngine {
  private ctx: AudioContext | null = null;
  volume = 0.7;
  private stepTimer = 0;

  private ensure(): AudioContext | null {
    if (this.volume <= 0) return null;
    if (!this.ctx) {
      const C = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (C) this.ctx = new C();
    }
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
    return this.ctx;
  }

  tone(freq: number, dur = 0.12, type: OscillatorType = 'sine', gain = 0.18) {
    const ctx = this.ensure();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.setValueAtTime(gain * this.volume, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.connect(g).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + dur);
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
}
