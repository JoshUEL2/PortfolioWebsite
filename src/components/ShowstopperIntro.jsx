import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Globe,
  Search,
  Sparkles,
  Minus,
  Square,
  X,
  Plus,
  ChevronDown,
  RotateCw,
  ArrowLeft,
  ArrowRight,
  Lock,
  Volume2,
  Wifi,
  ChevronUp,
  Folder,
  Monitor,
  Trash2,
  Check
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';
import { audioEngine } from '../utils/audioEngine';

let sharedIntroCtx = null;

function getSharedIntroAudioCtx() {
  if (typeof window === 'undefined') return null;
  if (!sharedIntroCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    sharedIntroCtx = new AudioCtx();
  }
  if (sharedIntroCtx.state === 'suspended') {
    sharedIntroCtx.resume().catch(() => {});
  }
  return sharedIntroCtx;
}

// Single-context synthesiser strictly gating behind audioEngine.isMuted()
function playSound(type) {
  if (audioEngine.isMuted()) return;
  try {
    const ctx = getSharedIntroAudioCtx();
    if (!ctx) return;

    if (type === 'type') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(460 + ((Date.now() % 50) * 3), ctx.currentTime);
      gain.gain.setValueAtTime(0.025, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.035);
    } else if (type === 'glitch') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(190, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(560, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } else if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(820, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === 'genie') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(740, ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'chime') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    }
  } catch {
    // Autoplay or audio limitations ignored safely
  }
}

export default function ShowstopperIntro({ onComplete }) {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState('typing');
  const [typedText, setTypedText] = useState('');
  const [glitchActive, setGlitchActive] = useState(false);
  const [cursorCoords, setCursorCoords] = useState({ x: 380, y: 280 });
  const [browserIconHovered, setBrowserIconHovered] = useState(false);
  const [browserIconPressed, setBrowserIconPressed] = useState(false);
  const [clickRipple, setClickRipple] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const browserBtnRef = useRef(null);

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem('hasSeenJoshIntro', 'true');
    } catch {
      // storage unavailable
    }
    if (onComplete) onComplete();
  }, [onComplete]);

  // Bypass intro automatically when reduced motion is preferred
  useEffect(() => {
    if (shouldReduceMotion) {
      finishIntro();
    }
  }, [shouldReduceMotion, finishIntro]);

  // Keyboard shortcut: ESC or Space skips immediately
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        finishIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [finishIntro]);

  // Fast ~1.9s Choreography Sequence
  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    let isCancelled = false;

    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    const runSequence = async () => {
      await wait(120);
      if (isCancelled) return;

      const phrase = 'hello world';
      for (let i = 1; i <= phrase.length; i++) {
        if (isCancelled) return;
        setTypedText(phrase.slice(0, i));
        playSound('type');
        await wait(34);
      }

      await wait(180);
      if (isCancelled) return;

      setPhase('glitch');
      setGlitchActive(true);
      playSound('glitch');
      for (const s of ['h#ll0 w0r!d', 'h3110 j0$h', 'hello josh']) {
        if (isCancelled) return;
        setTypedText(s);
        await wait(65);
      }
      setGlitchActive(false);

      await wait(160);
      if (isCancelled) return;

      let targetX = window.innerWidth / 2 + 10;
      let targetY = window.innerHeight - 24;
      if (browserBtnRef.current) {
        const rect = browserBtnRef.current.getBoundingClientRect();
        targetX = rect.left + rect.width / 2;
        targetY = rect.top + rect.height / 2;
      }

      setPhase('cursor-move');
      setCursorCoords({ x: targetX, y: targetY });
      await wait(340);
      if (isCancelled) return;

      setBrowserIconHovered(true);
      setPhase('cursor-click');
      setBrowserIconPressed(true);
      setClickRipple(true);
      playSound('click');
      await wait(100);
      if (isCancelled) return;

      setBrowserIconPressed(false);
      setPhase('genie-open');
      playSound('genie');
      await wait(280);
      if (isCancelled) return;

      setPhase('page-load');
      for (const p of [35, 75, 100]) {
        if (isCancelled) return;
        setLoadProgress(p);
        await wait(65);
      }
      playSound('chime');
      await wait(90);
      if (isCancelled) return;

      setPhase('morph-fullscreen');
      await wait(280);
      if (isCancelled) return;

      finishIntro();
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, [finishIntro, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  const isBrowserActive =
    phase === 'genie-open' || phase === 'page-load' || phase === 'morph-fullscreen';
  const isMorphing = phase === 'morph-fullscreen';

  return (
    <motion.div
      key="windows11-intro"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="fixed inset-0 z-[9999] overflow-hidden select-none font-['Segoe_UI',-apple-system,BlinkMacSystemFont,sans-serif]"
    >
      {/* Desktop Wallpaper */}
      <motion.div
        animate={{ opacity: isBrowserActive ? 0 : 1 }}
        transition={{ duration: 0.28, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[#0d1424] overflow-hidden pointer-events-none"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[680px] h-[680px] sm:w-[960px] sm:h-[960px] opacity-90">
            <div className="absolute inset-16 rounded-[48%] bg-gradient-to-tr from-[#003882] via-[#005fb8] to-[#1084d8] blur-2xl transform -rotate-25 scale-105 opacity-80" />
            <div className="absolute inset-24 rounded-[42%] bg-gradient-to-br from-[#004e9a] via-[#0078d4] to-[#60cdff] blur-xl transform rotate-35 opacity-75" />
          </div>
        </div>

        {/* Desktop Icons (Hidden on compact mobile < 640px so Terminal has clean unobstructed breathing room) */}
        <div className="hidden sm:flex absolute top-4 left-4 flex-col gap-4 z-10">
          <div className="flex flex-col items-center gap-1 w-20">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Trash2 className="w-7 h-7 text-sky-200 drop-shadow" />
            </div>
            <span className="text-[11px] text-white text-center drop-shadow">Recycle Bin</span>
          </div>

          <div className="flex flex-col items-center gap-1 w-20">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Monitor className="w-7 h-7 text-sky-300 drop-shadow" />
            </div>
            <span className="text-[11px] text-white text-center drop-shadow">This PC</span>
          </div>

          <div className="flex flex-col items-center gap-1 w-20">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-400/40 flex items-center justify-center p-1.5">
              <img
                src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
                alt="Myndwell Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[11px] text-cyan-200 text-center truncate max-w-full">
              Myndwell.exe
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 w-20">
            <div className="w-10 h-10 rounded-xl bg-black/60 border border-emerald-400/40 flex items-center justify-center p-1">
              <img
                src={getAssetUrl('/images/logos/labrats-logo-transparent.png')}
                alt="LabR@z Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[11px] text-emerald-200 text-center truncate max-w-full">
              LabR@z.exe
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 w-20">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Folder className="w-7 h-7 text-amber-300 fill-amber-300/40" />
            </div>
            <span className="text-[11px] text-white text-center drop-shadow">Josh_Projects</span>
          </div>
        </div>
      </motion.div>

      {/* Skip Intro Button */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50">
        <button
          type="button"
          onClick={finishIntro}
          className="flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-lg bg-black/75 hover:bg-black/95 text-white border border-white/25 text-xs font-sans tracking-wide backdrop-blur-md transition-colors shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <span>Skip Intro</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-sky-200 font-mono">
            ESC
          </span>
        </button>
      </div>

      {/* Windows Terminal Window */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 12 }}
        animate={{
          scale: 1,
          opacity: isBrowserActive ? 0 : 1,
          x: glitchActive ? [-2, 2, -2, 0] : 0,
          y: isBrowserActive ? -20 : 0
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[56%] w-[92%] max-w-[600px] rounded-lg border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-20 bg-[#0c0c0c]/95 backdrop-blur-2xl pointer-events-none"
      >
        <div className="flex items-center justify-between h-9 px-2 bg-[#1f1f1f] border-b border-black/40 select-none">
          <div className="flex items-center gap-1 h-full pt-1">
            <div className="flex items-center gap-2 px-3 h-full rounded-t-md bg-[#0c0c0c] border-t border-x border-white/10 text-xs text-slate-200">
              <div className="w-3.5 h-3.5 rounded-xs bg-[#012456] border border-sky-400 flex items-center justify-center text-[8px] font-bold text-sky-200 font-mono">
                &gt;_
              </div>
              <span className="font-medium text-[11px]">PowerShell</span>
              <X className="w-3 h-3 text-slate-400 ml-1" />
            </div>
            <div className="p-1 rounded text-slate-400"><Plus className="w-3 h-3" /></div>
            <div className="p-1 rounded text-slate-400"><ChevronDown className="w-3 h-3" /></div>
          </div>

          <div className="flex items-center h-full text-slate-300">
            <div className="h-full px-3 flex items-center justify-center"><Minus className="w-3.5 h-3.5" /></div>
            <div className="h-full px-3 flex items-center justify-center"><Square className="w-3 h-3" /></div>
            <div className="h-full px-3.5 flex items-center justify-center"><X className="w-3.5 h-3.5" /></div>
          </div>
        </div>

        <div className="p-4 font-mono text-xs sm:text-sm text-slate-200 min-h-[148px] leading-relaxed">
          <div className="text-slate-400 text-xs mb-1">Windows PowerShell</div>
          <div className="text-slate-500 text-xs mb-4">Copyright (C) Microsoft Corporation. All rights reserved.</div>
          <div className="flex items-center gap-2 flex-wrap text-slate-100">
            <span className="text-slate-300 font-semibold">PS C:\Users\Josh&gt;</span>
            <span
              className={`font-semibold tracking-wide ${
                glitchActive ? 'text-cyan-400' : phase === 'typing' ? 'text-white' : 'text-sky-300'
              }`}
            >
              {typedText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-slate-200 ml-0.5"
            />
          </div>
        </div>
      </motion.div>

      {/* Browser Genie Morph */}
      {isBrowserActive && (
        <motion.div
          initial={{
            opacity: 0.1,
            scaleX: 0.1,
            scaleY: 0.06,
            y: window.innerHeight / 2 - 20,
            transformOrigin: 'bottom center',
            borderRadius: '20px'
          }}
          animate={
            isMorphing
              ? { opacity: 1, scaleX: 1, scaleY: 1, y: 0, borderRadius: '0px' }
              : { opacity: 1, scaleX: 1, scaleY: 1, y: 0, borderRadius: '12px' }
          }
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute z-40 bg-transparent flex flex-col overflow-hidden pointer-events-none ${
            isMorphing
              ? 'inset-0 border-none shadow-none'
              : 'inset-2.5 sm:inset-6 border border-white/20 shadow-2xl'
          }`}
        >
          <motion.div
            animate={{ y: isMorphing ? -90 : 0, opacity: isMorphing ? 0 : 1 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col bg-[#1a1f2c] border-b border-white/10 select-none shrink-0"
          >
            <div className="flex items-center px-3 pt-2 gap-1 bg-[#121620]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-t-lg bg-[#1a1f2c] text-xs text-white border-t border-x border-white/10 max-w-[230px]">
                {loadProgress === 100 ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                )}
                <span className="truncate text-[11px] font-medium">
                  Joshua Johnson | Portfolio
                </span>
                <X className="w-3 h-3 text-slate-400 ml-auto" />
              </div>
              <div className="p-1 rounded text-slate-400"><Plus className="w-3.5 h-3.5" /></div>
              <div className="ml-auto hidden sm:flex items-center h-full text-slate-400 text-xs">
                <div className="px-2 py-1"><Minus className="w-3 h-3" /></div>
                <div className="px-2 py-1"><Square className="w-2.5 h-2.5" /></div>
                <div className="px-2 py-1"><X className="w-3 h-3" /></div>
              </div>
            </div>

            <div className="relative flex items-center gap-2 px-3 py-2 bg-[#1a1f2c]">
              <div className="hidden sm:flex items-center gap-1 text-slate-400">
                <div className="p-1"><ArrowLeft className="w-3.5 h-3.5" /></div>
                <div className="p-1"><ArrowRight className="w-3.5 h-3.5" /></div>
                <div className="p-1"><RotateCw className="w-3.5 h-3.5" /></div>
              </div>

              <div className="flex-1 max-w-xl mx-auto flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0e14] border border-white/10 text-xs text-slate-200 min-w-0">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate text-[11px] font-mono text-sky-200">
                  https://joshuel2.github.io/PortfolioWebsite/
                </span>
                <Sparkles className="w-3 h-3 text-amber-400 ml-auto shrink-0" />
              </div>

              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-transparent">
                <motion.div
                  className="h-full bg-gradient-to-r from-sky-400 to-cyan-300"
                  initial={{ width: '0%' }}
                  animate={{ width: `${loadProgress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.12 }}
                />
              </div>
            </div>
          </motion.div>

          <div className="relative flex-1 bg-transparent overflow-hidden pointer-events-none" />
        </motion.div>
      )}

      {/* Windows 11 Taskbar */}
      <motion.div
        animate={{ y: isMorphing ? 60 : 0, opacity: isMorphing ? 0 : 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 inset-x-0 h-12 bg-[#1c1c1c]/90 backdrop-blur-2xl border-t border-white/10 flex items-center justify-between px-3 select-none z-30"
      >
        <div className="hidden sm:flex items-center gap-2 text-slate-300 text-xs px-2 py-1">
          <span className="text-amber-400 text-sm">☀</span>
          <span className="font-medium text-[11px]">London, UK</span>
        </div>

        <div className="flex items-center gap-1 mx-auto">
          <div className="p-2 rounded text-slate-300">
            <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
              <div className="w-1.5 h-1.5 bg-[#0078d4] rounded-[1px]" />
              <div className="w-1.5 h-1.5 bg-[#0078d4] rounded-[1px]" />
              <div className="w-1.5 h-1.5 bg-[#0078d4] rounded-[1px]" />
              <div className="w-1.5 h-1.5 bg-[#0078d4] rounded-[1px]" />
            </div>
          </div>
          <div className="p-2 rounded text-slate-300"><Search className="w-4 h-4" /></div>
          <div className="p-2 rounded text-amber-300"><Folder className="w-4 h-4 fill-amber-400/40" /></div>
          <div className="relative p-2 rounded bg-white/10 text-slate-200">
            <div className="w-4 h-4 rounded-xs bg-[#012456] border border-sky-400 flex items-center justify-center text-[7px] font-bold text-sky-200 font-mono">
              &gt;_
            </div>
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#0078d4] rounded-full" />
          </div>

          <div
            ref={browserBtnRef}
            className={`relative p-2 rounded transition-all ${
              browserIconPressed
                ? 'scale-90 bg-white/20'
                : browserIconHovered || isBrowserActive
                ? 'bg-white/15 scale-105'
                : ''
            }`}
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#0078d4] via-[#00a4ef] to-[#25d366] flex items-center justify-center shadow-md">
              <Globe className="w-3.5 h-3.5 text-white" />
            </div>
            {(browserIconHovered || isBrowserActive) && (
              <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#0078d4] rounded-full" />
            )}
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-slate-300 text-xs">
          <div className="p-1"><ChevronUp className="w-3.5 h-3.5 text-slate-400" /></div>
          <div className="flex items-center gap-1 px-1.5 py-1"><Wifi className="w-3.5 h-3.5" /><Volume2 className="w-3.5 h-3.5" /></div>
        </div>
      </motion.div>

      {/* Mouse Cursor */}
      {(phase === 'cursor-move' || phase === 'cursor-click' || phase === 'genie-open') && (
        <motion.div
          initial={{ x: 320, y: 240 }}
          animate={{ x: cursorCoords.x, y: cursorCoords.y, scale: browserIconPressed ? 0.85 : 1 }}
          transition={{ x: { duration: 0.34, ease: [0.22, 1, 0.36, 1] }, y: { duration: 0.34, ease: [0.22, 1, 0.36, 1] }, scale: { duration: 0.08 } }}
          className="absolute top-0 left-0 z-50 pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
          style={{ transformOrigin: 'top left' }}
        >
          <svg width="24" height="32" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1L1 18.5L5.5 14.5L9 22.5L12 21L8.5 13.5L14 13.5L1 1Z"
              fill="#ffffff"
              stroke="#000000"
              strokeWidth="1.4"
              strokeLinejoin="miter"
            />
          </svg>
          {clickRipple && (
            <motion.div
              initial={{ scale: 0.2, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="absolute -top-1 -left-1 w-6 h-6 rounded-full border-2 border-sky-400 pointer-events-none"
            />
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
