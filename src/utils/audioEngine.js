/**
 * audioEngine.js
 * Zero-dependency procedural Web Audio API engine.
 * Synthesizes tactile, game-grade interface audio with zero external asset latency.
 */

class UIAudioEngine {
  constructor() {
    this.ctx = null;
    this._isMuted = typeof window !== 'undefined'
      ? localStorage.getItem('portfolio_audio_muted') === 'true'
      : false;
    this.volume = 0.12; // Calibrated for subtle, non-fatiguing feedback
    this.lastTickTime = 0;
  }

  init() {
    if (typeof window === 'undefined') return;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  isMuted() {
    return this._isMuted;
  }

  toggleMute() {
    this._isMuted = !this._isMuted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_audio_muted', String(this._isMuted));
      window.dispatchEvent(new CustomEvent('portfolio_audio_mute_toggle', { detail: { isMuted: this._isMuted } }));
    }
    if (!this._isMuted) {
      this.playTick(1000, 400);
    }
    return this._isMuted;
  }

  /**
   * Tactile Hover / Click Tick
   * 15ms percussive drop resembling a mechanical switch
   */
  playTick(startFreq = 800, endFreq = 200) {
    if (this._isMuted) return;
    const nowMs = Date.now();
    if (nowMs - this.lastTickTime < 35) return; // Throttle fast mouseover sweeps
    this.lastTickTime = nowMs;

    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.015);

      gain.gain.setValueAtTime(this.volume * 0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.015);
    } catch {
      // Audio context may be blocked before first user gesture
    }
  }

  /**
   * Modal Open / Telemetry Sweep
   * 120ms frequency ascent with gentle low-pass filter
   */
  playSweep() {
    if (this._isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(460, now + 0.12);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, now);
      filter.frequency.linearRampToValueAtTime(1800, now + 0.12);

      gain.gain.setValueAtTime(this.volume * 0.55, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.14);
    } catch {}
  }

  /**
   * Modal Dismiss / Close Thud
   * 80ms rounded low-frequency drop
   */
  playDismiss() {
    if (this._isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.08);

      gain.gain.setValueAtTime(this.volume * 0.45, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {}
  }
}

export const audioEngine = new UIAudioEngine();
