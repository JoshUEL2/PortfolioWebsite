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
  Trash2
} from 'lucide-react';

// Lightweight, zero-dependency Web Audio synthesiser for authentic clicks
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
      osc.frequency.setValueAtTime(450 + ((Date.now() % 50) * 4), ctx.currentTime);
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
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(540, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } else if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
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
      osc.frequency.setValueAtTime(260, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.6);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.7);
    }
  } catch {
    // Audio autoplay restrictions or unsupported environments are safely ignored
  }
}

export default function ShowstopperIntro({ onComplete }) {
  // Phases: 'typing' -> 'glitch' -> 'cursor-move' -> 'cursor-click' -> 'genie-open' -> 'fullscreen' -> 'done'
  const [phase, setPhase] = useState('typing');
  const [typedText, setTypedText] = useState('');
  const [glitchActive, setGlitchActive] = useState(false);
  const [cursorCoords, setCursorCoords] = useState({ x: 380, y: 280 });
  const [browserIconHovered, setBrowserIconHovered] = useState(false);
  const [browserIconPressed, setBrowserIconPressed] = useState(false);
  const [clickRipple, setClickRipple] = useState(false);

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
      await new Promise((r) => setTimeout(r, 500));
      if (isCancelled) return;

      // 2. Type "hello world"
      const phrase = 'hello world';
      for (let i = 1; i <= phrase.length; i++) {
        if (isCancelled) return;
        setTypedText(phrase.slice(0, i));
        playSound('type');
        await new Promise((r) => setTimeout(r, 85));
      }

      // 3. Pause briefly on "hello world"
      await new Promise((r) => setTimeout(r, 650));
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
        await new Promise((r) => setTimeout(r, 120));
      }
      setGlitchActive(false);

      // 5. Pause to let the user see "hello josh" clearly
      await new Promise((r) => setTimeout(r, 700));
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

      // Wait for cursor travel to complete (750ms glide)
      await new Promise((r) => setTimeout(r, 800));
      if (isCancelled) return;

      // Hover on the browser icon
      setBrowserIconHovered(true);
      await new Promise((r) => setTimeout(r, 200));
      if (isCancelled) return;

      // 7. Click down on the browser icon
      setPhase('cursor-click');
      setBrowserIconPressed(true);
      setClickRipple(true);
      playSound('click');

      await new Promise((r) => setTimeout(r, 160));
      if (isCancelled) return;

      setBrowserIconPressed(false);

      // 8. Launch Browser with Apple Genie expansion
      setPhase('genie-open');
      playSound('genie');

      // Expand to viewport over 950ms
      await new Promise((r) => setTimeout(r, 950));
      if (isCancelled) return;

      // Seamlessly fade to website
      setPhase('fullscreen');
      await new Promise((r) => setTimeout(r, 400));
      if (isCancelled) return;

      finishIntro();
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, [finishIntro]);

  return (
    <AnimatePresence>
      <motion.div
        key="windows11-intro"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'fullscreen' ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] overflow-hidden bg-[#0d131f] select-none font-['Segoe_UI',-apple-system,BlinkMacSystemFont,sans-serif]"
      >
        {/* Authentic Windows 11 Desktop Wallpaper (Dark Bloom) */}
        <div className="absolute inset-0 bg-[#0d1424] overflow-hidden">
          {/* Windows 11 Layered Bloom Silk Petals */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[750px] h-[750px] sm:w-[1000px] sm:h-[1000px] opacity-90">
              {/* Petal 1 */}
              <div className="absolute inset-16 rounded-[48%] bg-gradient-to-tr from-[#003882] via-[#005fb8] to-[#1084d8] blur-2xl transform -rotate-25 scale-105 opacity-80" />
              {/* Petal 2 */}
              <div className="absolute inset-24 rounded-[42%] bg-gradient-to-br from-[#004e9a] via-[#0078d4] to-[#60cdff] blur-xl transform rotate-35 opacity-75" />
              {/* Petal 3 */}
              <div className="absolute inset-32 rounded-[45%] bg-gradient-to-t from-[#1b3d6d] via-[#106ebe] to-[#40b8ff] blur-2xl transform -rotate-10 opacity-70" />
              {/* Soft Center Glow */}
              <div className="absolute inset-40 rounded-full bg-[#3fa8f5] blur-3xl opacity-25" />
            </div>
          </div>

          {/* Skip Intro Button in top right */}
          <div className="absolute top-4 right-4 z-50">
            <button
              type="button"
              onClick={finishIntro}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 hover:bg-black/75 text-white/90 hover:text-white border border-white/15 text-xs font-sans tracking-wide backdrop-blur-md transition-all shadow-md cursor-pointer"
            >
              <span>Skip Intro</span>
              <span className="text-[10px] px-1 py-0.5 rounded bg-white/10 text-sky-200 font-mono">
                ESC
              </span>
            </button>
          </div>

          {/* Authentic Windows 11 Desktop Icons on Left */}
          <div className="absolute top-4 left-4 flex flex-col gap-6 z-10 pointer-events-none">
            {/* Recycle Bin */}
            <div className="flex flex-col items-center gap-1 w-20 group">
              <div className="w-12 h-12 rounded-lg bg-transparent flex items-center justify-center">
                <Trash2 className="w-8 h-8 text-sky-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
              </div>
              <span className="text-xs text-white text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
                Recycle Bin
              </span>
            </div>

            {/* This PC */}
            <div className="flex flex-col items-center gap-1 w-20 group">
              <div className="w-12 h-12 rounded-lg bg-transparent flex items-center justify-center">
                <Monitor className="w-8 h-8 text-sky-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
              </div>
              <span className="text-xs text-white text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
                This PC
              </span>
            </div>

            {/* Projects Folder */}
            <div className="flex flex-col items-center gap-1 w-20 group">
              <div className="w-12 h-12 rounded-lg bg-transparent flex items-center justify-center">
                <Folder className="w-8 h-8 text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] fill-amber-300/40" />
              </div>
              <span className="text-xs text-white text-center font-normal drop-shadow-[0_1px_3px_rgba(0,0,0,1)]">
                Josh_Projects
              </span>
            </div>
          </div>

          {/* Authentic Windows Terminal Window */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{
              scale: 1,
              opacity: phase === 'genie-open' ? 0.35 : 1,
              x: glitchActive ? [-2, 2, -2, 2, 0] : 0,
              y: 0
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-[92%] max-w-[620px] rounded-lg border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-20 bg-[#0c0c0c]/95 backdrop-blur-2xl"
          >
            {/* Windows Terminal Tab Bar & Controls */}
            <div className="flex items-center justify-between h-9 px-2 bg-[#1f1f1f] border-b border-black/40 select-none">
              {/* Tab List */}
              <div className="flex items-center gap-1 h-full pt-1">
                {/* Active PowerShell Tab */}
                <div className="flex items-center gap-2 px-3 h-full rounded-t-md bg-[#0c0c0c] border-t border-x border-white/10 text-xs text-slate-200">
                  <div className="w-3.5 h-3.5 rounded-xs bg-[#012456] border border-sky-400 flex items-center justify-center text-[8px] font-bold text-sky-200 font-mono">
                    &gt;_
                  </div>
                  <span className="font-medium text-[11px]">PowerShell</span>
                  <X className="w-3 h-3 text-slate-400 hover:text-white ml-1 cursor-pointer" />
                </div>

                {/* Add Tab & Dropdown */}
                <button
                  type="button"
                  aria-label="New tab"
                  className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <Plus className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  aria-label="Tab menu"
                  className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>

              {/* Caption Controls (Minimize, Maximize, Close) */}
              <div className="flex items-center h-full">
                <button
                  type="button"
                  aria-label="Minimize"
                  className="h-full px-3 hover:bg-white/10 text-slate-300 flex items-center justify-center transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Maximize"
                  className="h-full px-3 hover:bg-white/10 text-slate-300 flex items-center justify-center transition-colors"
                >
                  <Square className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  aria-label="Close"
                  className="h-full px-3.5 hover:bg-rose-600 hover:text-white text-slate-300 flex items-center justify-center transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
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

          {/* Apple Genie Browser Launch Window */}
          {phase === 'genie-open' && (
            <motion.div
              initial={{
                opacity: 0.1,
                scaleX: 0.08,
                scaleY: 0.04,
                y: window.innerHeight / 2 - 20,
                transformOrigin: 'bottom center',
                borderRadius: '24px'
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
                scaleY: 1,
                y: 0,
                borderRadius: '8px'
              }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="absolute inset-3 sm:inset-8 z-40 bg-[#06070d] border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden"
            >
              {/* Browser Window Chrome (Tabs & Navigation) */}
              <div className="flex flex-col bg-[#1e232e] border-b border-white/10 select-none">
                {/* Browser Tab Strip */}
                <div className="flex items-center px-2 pt-2 gap-1 bg-[#141822]">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-t-lg bg-[#1e232e] text-xs text-white border-t border-x border-white/10 max-w-[240px]">
                    <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="truncate text-[11px] font-medium">
                      Joshua Johnson | Technical Game Designer
                    </span>
                    <X className="w-3 h-3 text-slate-400 hover:text-white ml-auto" />
                  </div>
                  <button
                    type="button"
                    aria-label="New browser tab"
                    className="p-1 rounded text-slate-400 hover:text-white"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Browser Address Bar & Toolbar */}
                <div className="flex items-center gap-2 px-3 py-2 bg-[#1e232e]">
                  <div className="flex items-center gap-1 text-slate-400">
                    <button
                      type="button"
                      aria-label="Back"
                      className="p-1 rounded hover:bg-white/10"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Forward"
                      className="p-1 rounded hover:bg-white/10"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Reload"
                      className="p-1 rounded hover:bg-white/10"
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* URL Omnibox */}
                  <div className="flex-1 max-w-xl mx-auto flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e121a] border border-white/10 text-xs text-slate-200">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate text-[11px] font-mono text-sky-200">
                      https://joshuel2.github.io/PortfolioWebsite/
                    </span>
                    <Sparkles className="w-3 h-3 text-amber-400 ml-auto shrink-0 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Inside Browser Viewport: Live Preview Card */}
              <div className="flex-1 bg-gradient-to-b from-[#06070d] to-[#0a101f] flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="space-y-3"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>PORTFOLIO READY</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Joshua Johnson
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base font-mono">
                    Technical Game Designer • Unreal Engine 5 • London, UK
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Authentic Windows 11 Taskbar */}
          <div className="absolute bottom-0 inset-x-0 h-12 bg-[#1c1c1c]/90 backdrop-blur-2xl border-t border-white/10 flex items-center justify-between px-3 select-none z-30">
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

              {/* Windows Terminal Icon (Active with blue indicator line) */}
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
                    : browserIconHovered || phase === 'genie-open'
                    ? 'bg-white/15 scale-105 shadow-[0_0_8px_rgba(0,120,212,0.5)]'
                    : 'hover:bg-white/10'
                }`}
                title="Microsoft Edge"
              >
                {/* Edge/Globe browser style icon */}
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#0078d4] via-[#00a4ef] to-[#25d366] flex items-center justify-center shadow-md">
                  <Globe className="w-3.5 h-3.5 text-white" />
                </div>
                {/* Active indicator dot/pill */}
                {(browserIconHovered || phase === 'genie-open') && (
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
                <span className="font-semibold text-white">22:54</span>
                <span className="text-slate-400 text-[10px]">18/10/2026</span>
              </div>
            </div>
          </div>

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
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
