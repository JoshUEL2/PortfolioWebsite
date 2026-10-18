import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Zero-dependency Web Audio synthesiser for tactile clicks, chime, and whoosh transitions
function playSound(type) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (type === 'type') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(460 + ((Date.now() % 50) * 3), ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } else if (type === 'glitch') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(190, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(560, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } else if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(820, ctx.currentTime);
      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } else if (type === 'genie') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(740, ctx.currentTime + 0.55);
      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.65);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.65);
    } else if (type === 'chime') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === 'whoosh') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    }
  } catch {
    // Audio autoplay restrictions or unsupported environments are safely ignored
  }
}

export default function ShowstopperIntro({ onComplete }) {
  // Phases: 'typing' -> 'glitch' -> 'cursor-move' -> 'cursor-click' -> 'genie-open' -> 'page-load' -> 'morph-fullscreen' -> 'done'
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

  // Main Choreography Sequence
  useEffect(() => {
    let isCancelled = false;

    const runSequence = async () => {
      // 1. Initial pause before typing
      await new Promise((r) => setTimeout(r, 450));
      if (isCancelled) return;

      // 2. Type "hello world"
      const phrase = 'hello world';
      for (let i = 1; i <= phrase.length; i++) {
        if (isCancelled) return;
        setTypedText(phrase.slice(0, i));
        playSound('type');
        await new Promise((r) => setTimeout(r, 80));
      }

      // 3. Pause briefly on "hello world"
      await new Promise((r) => setTimeout(r, 600));
      if (isCancelled) return;

      // 4. Glitch into "hello josh"
      setPhase('glitch');
      setGlitchActive(true);
      playSound('glitch');

      const scrambles = [
        'h#ll0 w0r!d',
        'h3110 j0$h',
        'hello josh'
      ];
      for (const s of scrambles) {
        if (isCancelled) return;
        setTypedText(s);
        await new Promise((r) => setTimeout(r, 110));
      }
      setGlitchActive(false);

      // 5. Pause to let the user see "hello josh" clearly
      await new Promise((r) => setTimeout(r, 650));
      if (isCancelled) return;

      // 6. Calculate exact center coordinates of the Browser icon on the taskbar
      let targetX = window.innerWidth / 2 + 10;
      let targetY = window.innerHeight - 24;

      if (browserBtnRef.current) {
        const rect = browserBtnRef.current.getBoundingClientRect();
        targetX = rect.left + rect.width / 2;
        targetY = rect.top + rect.height / 2;
      }

      setPhase('cursor-move');
      setCursorCoords({ x: targetX, y: targetY });

      // Cursor glides down (750ms)
      await new Promise((r) => setTimeout(r, 750));
      if (isCancelled) return;

      // Hover on the browser icon
      setBrowserIconHovered(true);
      await new Promise((r) => setTimeout(r, 180));
      if (isCancelled) return;

      // 7. Click down on the browser icon
      setPhase('cursor-click');
      setBrowserIconPressed(true);
      setClickRipple(true);
      playSound('click');

      await new Promise((r) => setTimeout(r, 150));
      if (isCancelled) return;

      setBrowserIconPressed(false);

      // 8. Launch Browser with Apple Genie expansion
      setPhase('genie-open');
      playSound('genie');

      // Expand upward over 650ms
      await new Promise((r) => setTimeout(r, 650));
      if (isCancelled) return;

      // 9. Fast progressive page load bar (0% -> 100%)
      setPhase('page-load');
      const progressSteps = [20, 45, 75, 100];
      for (const p of progressSteps) {
        if (isCancelled) return;
        setLoadProgress(p);
        await new Promise((r) => setTimeout(r, 90));
      }
      playSound('chime');

      await new Promise((r) => setTimeout(r, 220));
      if (isCancelled) return;

      // 10. Seamless Fullscreen Morph: browser chrome slides up, taskbar slides down, window expands edge-to-edge
      setPhase('morph-fullscreen');
      playSound('whoosh');

      // Give 700ms for the fluid transition to complete edge-to-edge
      await new Promise((r) => setTimeout(r, 700));
      if (isCancelled) return;

      // Intro seamlessly concludes directly onto the live website
      finishIntro();
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, [finishIntro]);

  const isBrowserActive = phase === 'genie-open' || phase === 'page-load' || phase === 'morph-fullscreen';
  const isMorphing = phase === 'morph-fullscreen';

  return (
    <AnimatePresence>
      <motion.div
        key="windows11-intro"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="fixed inset-0 z-[9999] overflow-hidden select-none font-['Segoe_UI',-apple-system,BlinkMacSystemFont,sans-serif]"
      >
        {/* Authentic Windows 11 Desktop Wallpaper (Dark Bloom) */}
        <motion.div
          animate={{ opacity: isMorphing ? 0 : 1 }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[#0d1424] overflow-hidden pointer-events-none"
        >
          {/* Windows 11 Layered Bloom Silk Petals */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[750px] h-[750px] sm:w-[1000px] sm:h-[1000px] opacity-90">
              <div className="absolute inset-16 rounded-[48%] bg-gradient-to-tr from-[#003882] via-[#005fb8] to-[#1084d8] blur-2xl transform -rotate-25 scale-105 opacity-80" />
              <div className="absolute inset-24 rounded-[42%] bg-gradient-to-br from-[#004e9a] via-[#0078d4] to-[#60cdff] blur-xl transform rotate-35 opacity-75" />
              <div className="absolute inset-32 rounded-[45%] bg-gradient-to-t from-[#1b3d6d] via-[#106ebe] to-[#40b8ff] blur-2xl transform -rotate-10 opacity-70" />
              <div className="absolute inset-40 rounded-full bg-[#3fa8f5] blur-3xl opacity-25" />
            </div>
          </div>

          {/* Desktop Icons on Left */}
          <div className="absolute top-4 left-4 flex flex-col gap-4 z-10">
            {/* Recycle Bin */}
            <div className="flex flex-col items-center gap-1 w-20 group">
              <div className="w-10 h-10 rounded-lg bg-transparent flex items-center justify-center">
                <Trash2 className="w-7 h-7 text-sky-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
              </div>
              <span className="text-[11px] text-white text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
                Recycle Bin
              </span>
            </div>

            {/* This PC */}
            <div className="flex flex-col items-center gap-1 w-20 group">
              <div className="w-10 h-10 rounded-lg bg-transparent flex items-center justify-center">
                <Monitor className="w-7 h-7 text-sky-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
              </div>
              <span className="text-[11px] text-white text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
                This PC
              </span>
            </div>

            {/* Myndwell Portal Icon */}
            <div className="flex flex-col items-center gap-1 w-20 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-400/40 flex items-center justify-center p-1.5 shadow-md">
                <img
                  src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
                  alt="Myndwell Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[11px] text-cyan-200 text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)] truncate max-w-full">
                Myndwell.exe
              </span>
            </div>

            {/* LabRats Icon */}
            <div className="flex flex-col items-center gap-1 w-20 group">
              <div className="w-10 h-10 rounded-xl bg-black/60 border border-emerald-400/40 flex items-center justify-center p-1 shadow-md">
                <img
                  src={getAssetUrl('/images/logos/labrats-logo-transparent.png')}
                  alt="LabRats Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(74,222,128,0.8)]"
                />
              </div>
              <span className="text-[11px] text-emerald-200 text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)] truncate max-w-full">
                LabRats.exe
              </span>
            </div>

            {/* Delirium VR Icon */}
            <div className="flex flex-col items-center gap-1 w-20 group">
              <div className="w-10 h-10 rounded-xl bg-black/60 border border-red-500/40 flex items-center justify-center p-1 shadow-md">
                <img
                  src={getAssetUrl('/images/logos/delirium-title-logo.png')}
                  alt="Delirium"
                  className="w-full object-contain"
                />
              </div>
              <span className="text-[11px] text-red-200 text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)] truncate max-w-full">
                Delirium_VR
              </span>
            </div>

            {/* Projects Folder */}
            <div className="flex flex-col items-center gap-1 w-20 group">
              <div className="w-10 h-10 rounded-lg bg-transparent flex items-center justify-center">
                <Folder className="w-7 h-7 text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] fill-amber-300/40" />
              </div>
              <span className="text-[11px] text-white text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
                Josh_Projects
              </span>
            </div>
          </div>
        </motion.div>

        {/* Skip Intro Button in top right */}
        <div className="absolute top-4 right-4 z-50">
          <button
            type="button"
            onClick={finishIntro}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 text-xs font-sans tracking-wide backdrop-blur-md transition-all shadow-md cursor-pointer"
          >
            <span>Skip Intro</span>
            <span className="text-[10px] px-1 py-0.5 rounded bg-white/10 text-sky-200 font-mono">
              ESC
            </span>
          </button>
        </div>

        {/* Authentic Windows Terminal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{
            scale: 1,
            opacity: isBrowserActive ? 0 : 1,
            x: glitchActive ? [-2, 2, -2, 2, 0] : 0,
            y: isBrowserActive ? -30 : 0
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-[92%] max-w-[620px] rounded-lg border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-20 bg-[#0c0c0c]/95 backdrop-blur-2xl pointer-events-none"
        >
          {/* Windows Terminal Tab Bar & Controls */}
          <div className="flex items-center justify-between h-9 px-2 bg-[#1f1f1f] border-b border-black/40 select-none">
            {/* Tab List */}
            <div className="flex items-center gap-1 h-full pt-1">
              <div className="flex items-center gap-2 px-3 h-full rounded-t-md bg-[#0c0c0c] border-t border-x border-white/10 text-xs text-slate-200">
                <div className="w-3.5 h-3.5 rounded-xs bg-[#012456] border border-sky-400 flex items-center justify-center text-[8px] font-bold text-sky-200 font-mono">
                  &gt;_
                </div>
                <span className="font-medium text-[11px]">PowerShell</span>
                <X className="w-3 h-3 text-slate-400 ml-1" />
              </div>

              <div className="p-1 rounded text-slate-400">
                <Plus className="w-3 h-3" />
              </div>
              <div className="p-1 rounded text-slate-400">
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>

            {/* Caption Controls */}
            <div className="flex items-center h-full text-slate-300">
              <div className="h-full px-3 flex items-center justify-center">
                <Minus className="w-3.5 h-3.5" />
              </div>
              <div className="h-full px-3 flex items-center justify-center">
                <Square className="w-3 h-3" />
              </div>
              <div className="h-full px-3.5 flex items-center justify-center">
                <X className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Terminal Console Interior */}
          <div className="p-4 font-mono text-xs sm:text-sm text-slate-200 min-h-[160px] leading-relaxed">
            <div className="text-slate-400 text-xs mb-1">
              Windows PowerShell
            </div>
            <div className="text-slate-500 text-xs mb-4">
              Copyright (C) Microsoft Corporation. All rights reserved.
            </div>

            <div className="flex items-center gap-2 flex-wrap text-slate-100">
              <span className="text-slate-300 font-semibold">PS C:\Users\Josh&gt;</span>
              <span
                className={`font-semibold tracking-wide ${
                  glitchActive
                    ? 'text-cyan-400 animate-pulse'
                    : phase === 'typing'
                    ? 'text-white'
                    : 'text-sky-300'
                }`}
              >
                {typedText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-slate-200 ml-0.5"
              />
            </div>
          </div>
        </motion.div>

        {/* The Fluid Browser Window with Apple Genie Warp & Fullscreen Morph */}
        {isBrowserActive && (
          <motion.div
            initial={{
              opacity: 0.1,
              scaleX: 0.08,
              scaleY: 0.04,
              y: window.innerHeight / 2 - 20,
              transformOrigin: 'bottom center',
              borderRadius: '24px'
            }}
            animate={
              isMorphing
                ? {
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    y: 0,
                    borderRadius: '0px'
                  }
                : {
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    y: 0,
                    borderRadius: '12px'
                  }
            }
            transition={{
              duration: isMorphing ? 0.65 : 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`absolute z-40 bg-[#06070d] flex flex-col overflow-hidden transition-all duration-500 ${
              isMorphing
                ? 'inset-0 border-none shadow-none'
                : 'inset-3 sm:inset-6 md:inset-10 border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.95)]'
            }`}
          >
            {/* Browser Window Chrome (Tabs, Controls & Address Bar) */}
            <motion.div
              animate={{
                y: isMorphing ? -110 : 0,
                opacity: isMorphing ? 0 : 1
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col bg-[#1a1f2c] border-b border-white/10 select-none shrink-0"
            >
              {/* Browser Tab Strip */}
              <div className="flex items-center px-3 pt-2 gap-1 bg-[#121620]">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-t-lg bg-[#1a1f2c] text-xs text-white border-t border-x border-white/10 max-w-[260px]">
                  {loadProgress === 100 ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  ) : (
                    <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0 animate-spin" />
                  )}
                  <span className="truncate text-[11px] font-medium">
                    Joshua Johnson | Technical Game Designer
                  </span>
                  <X className="w-3 h-3 text-slate-400 ml-auto" />
                </div>
                <div className="p-1 rounded text-slate-400">
                  <Plus className="w-3.5 h-3.5" />
                </div>

                {/* Window Caption Controls */}
                <div className="ml-auto flex items-center h-full text-slate-400 text-xs">
                  <div className="px-2.5 py-1">
                    <Minus className="w-3 h-3" />
                  </div>
                  <div className="px-2.5 py-1">
                    <Square className="w-2.5 h-2.5" />
                  </div>
                  <div className="px-2.5 py-1">
                    <X className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Browser Address Bar & Toolbar */}
              <div className="relative flex items-center gap-2 px-3 py-2 bg-[#1a1f2c]">
                <div className="flex items-center gap-1 text-slate-400">
                  <div className="p-1 rounded">
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-1 rounded">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-1 rounded">
                    <RotateCw className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* URL Omnibox */}
                <div className="flex-1 max-w-xl mx-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0e14] border border-white/10 text-xs text-slate-200 shadow-inner">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate text-[11px] font-mono text-sky-200">
                    https://joshuel2.github.io/PortfolioWebsite/
                  </span>
                  <Sparkles className="w-3 h-3 text-amber-400 ml-auto shrink-0 animate-pulse" />
                </div>

                {/* Progressive Page Load Bar */}
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-transparent">
                  <motion.div
                    className="h-full bg-gradient-to-r from-sky-400 to-cyan-300 shadow-[0_0_8px_rgba(56,189,248,0.9)]"
                    initial={{ width: '0%' }}
                    animate={{ width: `${loadProgress}%` }}
                    transition={{ ease: 'easeOut', duration: 0.15 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Seamless Webpage Viewport Interior */}
            <div className="relative flex-1 bg-[#06070d] overflow-hidden flex flex-col justify-center items-center text-center px-4 font-['Plus_Jakarta_Sans',sans-serif]">
              {/* Background Ambient Glow & Grid matching live website */}
              <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/25 via-violet-600/20 to-transparent blur-[120px] rounded-full pointer-events-none" />

              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
                <span className="font-extrabold text-[16vw] leading-none tracking-tighter text-white uppercase text-center font-['Syne',sans-serif]">
                  JOSHUA<br />JOHNSON
                </span>
              </div>

              {/* Matching Hero Elements */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="relative z-10 max-w-3xl flex flex-col items-center"
              >
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/35 text-indigo-200 text-xs font-mono mb-4 backdrop-blur-md shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Technical Game Designer • Unreal Engine 5 • London, UK</span>
                </div>

                {/* Big Headline */}
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-['Syne',sans-serif] leading-tight">
                  I build gameplay physics,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300">
                    custom shaders
                  </span>{' '}
                  & interactive worlds.
                </h1>

                <p className="text-slate-300 text-xs sm:text-sm font-mono max-w-xl text-slate-300/80 mb-6">
                  Specialising in physical vehicle dynamics, VR interaction toolkits, HLSL shaders, and procedural systems.
                </p>

                {/* Interactive CTA buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <div className="px-5 py-2.5 rounded-full bg-indigo-600 text-white font-bold text-xs tracking-wider shadow-lg shadow-indigo-600/30">
                    EXPLORE FEATURED WORK
                  </div>
                  <div className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-medium text-xs">
                    VIEW FULL DOSSIER
                  </div>
                </div>
              </motion.div>

              {/* Floating Capsule Header preview matching Navbar */}
              <motion.div
                animate={{
                  y: isMorphing ? 0 : 20,
                  opacity: isMorphing ? 1 : 0.85
                }}
                className="absolute top-4 sm:top-6 inset-x-0 flex justify-center px-4 pointer-events-none"
              >
                <div className="flex items-center justify-between w-full max-w-5xl px-4 md:px-6 py-2.5 rounded-full bg-[#090b16]/85 backdrop-blur-xl border border-white/10 shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white text-xs shadow-md">
                      JJ
                    </div>
                    <span className="font-bold text-xs text-white">Josh Johnson</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-400">
                    <span className="text-white">FEATURED</span>
                    <span>RESEARCH</span>
                    <span>HARDWARE LAB</span>
                    <span>DOSSIER</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-[10px] font-bold">
                    ALL GAMES
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Authentic Windows 11 Taskbar */}
        <motion.div
          animate={{
            y: isMorphing ? 65 : 0,
            opacity: isMorphing ? 0 : 1
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 inset-x-0 h-12 bg-[#1c1c1c]/90 backdrop-blur-2xl border-t border-white/10 flex items-center justify-between px-3 select-none z-30"
        >
          {/* Left: Weather Widget */}
          <div className="hidden sm:flex items-center gap-2 text-slate-300 text-xs px-2 py-1 rounded hover:bg-white/5 cursor-pointer">
            <span className="text-amber-400 text-sm">🌤</span>
            <span className="font-medium text-[11px]">16°C Mostly sunny</span>
          </div>

          {/* Center: Pinned Taskbar App Icons */}
          <div className="flex items-center gap-1 mx-auto">
            {/* Start Menu Button */}
            <div className="p-2 rounded hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                <div className="w-1.5 h-1.5 bg-[#0078d4] rounded-[1px] group-hover:scale-105 transition-transform" />
                <div className="w-1.5 h-1.5 bg-[#0078d4] rounded-[1px] group-hover:scale-105 transition-transform" />
                <div className="w-1.5 h-1.5 bg-[#0078d4] rounded-[1px] group-hover:scale-105 transition-transform" />
                <div className="w-1.5 h-1.5 bg-[#0078d4] rounded-[1px] group-hover:scale-105 transition-transform" />
              </div>
            </div>

            {/* Taskbar Search Button */}
            <div className="p-2 rounded hover:bg-white/10 transition-colors cursor-pointer text-slate-300">
              <Search className="w-4 h-4" />
            </div>

            {/* File Explorer Icon */}
            <div className="p-2 rounded hover:bg-white/10 transition-colors cursor-pointer text-amber-300">
              <Folder className="w-4 h-4 fill-amber-400/40 text-amber-300" />
            </div>

            {/* Windows Terminal Icon */}
            <div className="relative p-2 rounded bg-white/10 text-slate-200 cursor-pointer">
              <div className="w-4 h-4 rounded-xs bg-[#012456] border border-sky-400 flex items-center justify-center text-[7px] font-bold text-sky-200 font-mono">
                &gt;_
              </div>
              <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#0078d4] rounded-full" />
            </div>

            {/* BROWSER ICON (The target of the mouse cursor!) */}
            <div
              ref={browserBtnRef}
              className={`relative p-2 rounded transition-all cursor-pointer ${
                browserIconPressed
                  ? 'scale-90 bg-white/20 shadow-[0_0_12px_rgba(0,120,212,0.8)]'
                  : browserIconHovered || isBrowserActive
                  ? 'bg-white/15 scale-105 shadow-[0_0_8px_rgba(0,120,212,0.5)]'
                  : 'hover:bg-white/10'
              }`}
              title="Microsoft Edge"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#0078d4] via-[#00a4ef] to-[#25d366] flex items-center justify-center shadow-md">
                <Globe className="w-3.5 h-3.5 text-white" />
              </div>
              {(browserIconHovered || isBrowserActive) && (
                <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#0078d4] rounded-full" />
              )}
            </div>
          </div>

          {/* Right: Authentic System Tray */}
          <div className="flex items-center gap-1.5 text-slate-300 text-xs">
            <div className="p-1 rounded hover:bg-white/5 cursor-pointer">
              <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="flex items-center gap-1 px-1.5 py-1 rounded hover:bg-white/5 cursor-pointer">
              <Wifi className="w-3.5 h-3.5" />
              <Volume2 className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col items-end px-1.5 py-0.5 rounded hover:bg-white/5 text-[11px] font-sans leading-tight cursor-pointer">
              <span className="font-semibold text-white">23:09</span>
              <span className="text-slate-400 text-[10px]">18/10/2026</span>
            </div>
          </div>
        </motion.div>

        {/* Authentic Windows Mouse Cursor (Visible Glide to Browser Icon & Click) */}
        {(phase === 'cursor-move' || phase === 'cursor-click' || phase === 'genie-open') && (
          <motion.div
            initial={{ x: 380, y: 280 }}
            animate={{
              x: cursorCoords.x,
              y: cursorCoords.y,
              scale: browserIconPressed ? 0.85 : 1
            }}
            transition={{
              x: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.1 }
            }}
            className="absolute top-0 left-0 z-50 pointer-events-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
            style={{ transformOrigin: 'top left' }}
          >
            {/* Authentic Crisp Windows Arrow Cursor */}
            <svg
              width="24"
              height="32"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L1 18.5L5.5 14.5L9 22.5L12 21L8.5 13.5L14 13.5L1 1Z"
                fill="#ffffff"
                stroke="#000000"
                strokeWidth="1.4"
                strokeLinejoin="miter"
              />
            </svg>

            {/* Click Ripple Effect */}
            {clickRipple && (
              <motion.div
                initial={{ scale: 0.2, opacity: 1 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute -top-1 -left-1 w-6 h-6 rounded-full border-2 border-sky-400 pointer-events-none"
              />
            )}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
