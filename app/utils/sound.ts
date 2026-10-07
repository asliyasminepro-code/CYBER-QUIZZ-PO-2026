// Web Audio API Sound Effects Synthesizer (Zero-latency, zero external MP3 dependencies)

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true; // Off by default as required by specification

  constructor() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cyber_pink_sound_enabled");
      if (saved !== null) {
        this.isMuted = saved !== "true";
      }
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== "undefined") {
      localStorage.setItem("cyber_pink_sound_enabled", String(!this.isMuted));
    }
    if (!this.isMuted) {
      this.initCtx();
      this.playClick();
    }
    return !this.isMuted;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (typeof window !== "undefined") {
      localStorage.setItem("cyber_pink_sound_enabled", String(!muted));
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // Play button click / tap sound
  public playClick() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, t);
      osc.frequency.exponentialRampToValueAtTime(400, t + 0.05);

      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.05);
    } catch {
      // AudioContext policy handled gracefully
    }
  }

  // Play correct answer sound: Uplifting pink cyber chime
  public playCorrect() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (Major chord flourish)
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const t = this.ctx.currentTime + idx * 0.07;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, t);

        // Warm harmonic shimmer
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.2, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 0.45);
      });
    } catch {
      // ignore
    }
  }

  // Play wrong answer sound: Gentle tech alert
  public playWrong() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, t);
      osc.frequency.linearRampToValueAtTime(140, t + 0.25);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

      // Lowpass filter for smooth, non-piercing error sound
      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(600, t);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.26);
    } catch {
      // ignore
    }
  }

  // Play quiz complete fanfare
  public playVictory() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const melody = [
        { f: 523.25, d: 0.12, offset: 0 },
        { f: 659.25, d: 0.12, offset: 0.12 },
        { f: 783.99, d: 0.14, offset: 0.24 },
        { f: 1046.5, d: 0.35, offset: 0.38 },
        { f: 1318.51, d: 0.6, offset: 0.6 }
      ];

      melody.forEach(item => {
        if (!this.ctx) return;
        const t = this.ctx.currentTime + item.offset;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(item.f, t);

        gain.gain.setValueAtTime(0.001, t);
        gain.gain.linearRampToValueAtTime(0.25, t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + item.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + item.d + 0.05);
      });
    } catch {
      // ignore
    }
  }

  // Play ribbon pink sparkle shimmer
  public playRibbonSparkle() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const notes = [1046.5, 1318.51, 1567.98, 2093.0];
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const noteTime = t + idx * 0.05;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, noteTime);

        gain.gain.setValueAtTime(0, noteTime);
        gain.gain.linearRampToValueAtTime(0.08, noteTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + 0.32);
      });
    } catch {
      // ignore
    }
  }
}

export const soundManager = new SoundEngine();
