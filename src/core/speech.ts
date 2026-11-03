export class SpeechEngine {
  private static instance: SpeechEngine | null = null;
  private enabled = true;
  private unlocked = false;

  static getInstance(): SpeechEngine {
    if (!SpeechEngine.instance) {
      SpeechEngine.instance = new SpeechEngine();
    }
    return SpeechEngine.instance;
  }

  init() {
    if (typeof window === 'undefined') return;
    const unlock = () => {
      if (this.unlocked) return;
      this.unlocked = true;
      try {
        if ('speechSynthesis' in window) {
          const u = new SpeechSynthesisUtterance('');
          u.volume = 0;
          window.speechSynthesis.speak(u);
        }
      } catch {}
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
    window.addEventListener('pointerdown', unlock, { once: true });
    window.addEventListener('keydown', unlock, { once: true });
  }

  speak(text: string, volume = 0.7) {
    if (!this.enabled || volume <= 0) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'vi-VN';
      u.volume = Math.max(0, Math.min(1, volume));
      u.rate = 1.05;
      const voices = window.speechSynthesis.getVoices();
      const viVoice = voices.find((v) => v.lang.toLowerCase().includes('vi'));
      if (viVoice) u.voice = viVoice;
      window.speechSynthesis.speak(u);
    } catch {}
  }

  stop() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }

  setEnabled(val: boolean) {
    this.enabled = val;
    if (!val) this.stop();
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}

export const speechEngine = SpeechEngine.getInstance();
