import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal as TerminalIcon,
  Globe,
  Folder,
  Cpu,
  Trash2,
  Wifi,
  Volume2,
  Search,
  Sparkles,
  Zap,
  Code2
} from 'lucide-react';

// Lightweight, zero-dependency Web Audio synthesiser for tactile clicks & warp effects
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
      osc.frequency.setValueAtTime(600 + ((Date.now() % 100) * 2), ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === 'glitch') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } else if (type === 'warp') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.5);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    }
  } catch {
    // Audio autoplay restrictions or unsupported environments are safely ignored
  }
}

export default function ShowstopperIntro({ onComplete }) {
  // Animation phases: 'typing' -> 'glitch' -> 'click-browser' -> 'genie-expand' -> 'binary-shatter' -> 'fade-out'
  const [phase, setPhase] = useState('typing');
  const [typedText, setTypedText] = useState('');
  const [glitchActive, setGlitchActive] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: 400, y: 300 });
  const [cursorClicking, setCursorClicking] = useState(false);

  // Generate a responsive matrix grid of 3D tiles for the binary shatter transition
  const gridRows = 6;
  const gridCols = 8;

  const tiles = useMemo(() => {
    const list = [];
    const centerR = (gridRows - 1) / 2;
    const centerC = (gridCols - 1) / 2;
    for (let r = 0; r < gridRows; r++) {
      for (let c = 0; c < gridCols; c++) {
        const dist = Math.sqrt(Math.pow(r - centerR, 2) + Math.pow(c - centerC, 2));
        // Deterministic pseudo-random binary sequence for each tile
        const seed = r * 8 + c;
        const binaryStream = [
          (seed * 7 + 1) % 2,
          (seed * 11 + 3) % 2,
          (seed * 13 + 5) % 2,
          (seed * 17 + 7) % 2,
          (seed * 19 + 2) % 2,
          (seed * 23 + 4) % 2,
          (seed * 29 + 6) % 2,
          (seed * 31 + 8) % 2
        ].join(' ');
        list.push({ id: `${r}-${c}`, row: r, col: c, dist, binaryStream });
      }
    }
    return list;
  }, [gridRows, gridCols]);

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
      // 1. Typing "hello world" in cartoon terminal
      const targetPhrase = 'hello world';
      await new Promise((r) => setTimeout(r, 600));

      for (let i = 1; i <= targetPhrase.length; i++) {
        if (isCancelled) return;
        setTypedText(targetPhrase.slice(0, i));
        playSound('type');
        await new Promise((r) => setTimeout(r, 90));
      }

      // Pause briefly after hello world
      await new Promise((r) => setTimeout(r, 650));
      if (isCancelled) return;

      // 2. Glitch effect: text scrambles & turns into "HELLO JOSH"
      setPhase('glitch');
      setGlitchActive(true);
      playSound('glitch');

      const glitchScrambles = ['h#ll0 w0r!d', 'H3LL0 W@RLD', '>> SYSTEM <<', 'HELLO JOSH'];
      for (const text of glitchScrambles) {
        if (isCancelled) return;
        setTypedText(text);
        await new Promise((r) => setTimeout(r, 110));
      }

      setGlitchActive(false);
      setTerminalOutput([
        'USER AUTHORISED: JOSHUA JOHNSON [DEV]',
        'KERNEL: UNREAL 5.7 // HLSL // VR PIPELINE',
        'STATUS: LAUNCHING INTERACTIVE PORTFOLIO...'
      ]);

      // 3. Move cursor to the taskbar Browser Icon & Click it!
      await new Promise((r) => setTimeout(r, 900));
      if (isCancelled) return;

      setPhase('click-browser');
      // Cursor glides towards the centered taskbar browser icon
      setCursorPos({ x: window.innerWidth / 2 + 18, y: window.innerHeight - 38 });

      await new Promise((r) => setTimeout(r, 650));
      if (isCancelled) return;

      // Click browser icon
      setCursorClicking(true);
      playSound('type');

      await new Promise((r) => setTimeout(r, 220));
      if (isCancelled) return;

      setCursorClicking(false);

      // 4. Apple Genie Expansion of Browser Window
      setPhase('genie-expand');
      playSound('warp');

      await new Promise((r) => setTimeout(r, 950));
      if (isCancelled) return;

      // 5. Binary 3D Tile Shatter & Matrix Vortex
      setPhase('binary-shatter');
      playSound('glitch');

      await new Promise((r) => setTimeout(r, 1500));
      if (isCancelled) return;

      // 6. Complete and unveil website
      setPhase('fade-out');
      await new Promise((r) => setTimeout(r, 450));
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
        key="showstopper-intro"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'fade-out' ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] overflow-hidden bg-[#0d131f] select-none font-['Space_Grotesk',sans-serif]"
      >
        {/* Cartoon Windows 11 Desktop Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2563eb_0%,#1e293b_55%,#0f172a_100%)] overflow-hidden">
          {/* Cartoon Windows 11 Abstract Bloom Petals (Stylised Mesh) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-45">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="relative w-[650px] h-[650px] sm:w-[900px] sm:h-[900px]"
            >
              <div className="absolute inset-0 rounded-[42%] bg-gradient-to-tr from-cyan-400/40 via-sky-500/30 to-blue-600/40 blur-3xl transform -rotate-12" />
              <div className="absolute inset-10 rounded-[38%] bg-gradient-to-br from-indigo-500/35 via-purple-500/25 to-pink-500/30 blur-2xl transform rotate-45" />
            </motion.div>
          </div>

          {/* Desktop Grid Lines (Subtle Cartoon Dots) */}
          <div className="absolute inset-0 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

          {/* Skip Intro Button (Always accessible) */}
          <div className="absolute top-5 right-5 z-50">
            <button
              type="button"
              onClick={finishIntro}
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white border border-white/20 hover:border-cyan-400 text-xs font-mono tracking-wider backdrop-blur-md transition-all shadow-lg cursor-pointer"
            >
              <span>Skip Intro</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 font-bold group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                ESC ⇥
              </span>
            </button>
          </div>

          {/* Cartoon Desktop Icons */}
          <div className="absolute top-6 left-6 flex flex-col gap-5 z-10 pointer-events-none sm:pointer-events-auto">
            <div className="flex flex-col items-center gap-1.5 w-20 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border-2 border-amber-400/60 shadow-lg flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform backdrop-blur-sm">
                <Folder className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-white text-center font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                Projects
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 w-20 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border-2 border-cyan-400/60 shadow-lg flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform backdrop-blur-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-white text-center font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                UE5.7.exe
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 w-20 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border-2 border-emerald-400/60 shadow-lg flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform backdrop-blur-sm">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-white text-center font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                MocapRig
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 w-20 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-slate-500/20 border-2 border-slate-400/40 shadow-lg flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform backdrop-blur-sm">
                <Trash2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono text-white text-center font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                Recycle Bin
              </span>
            </div>
          </div>

          {/* Cartoon Windows Terminal Window (Centered) */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{
              scale: phase === 'binary-shatter' ? 0.9 : 1,
              opacity: phase === 'binary-shatter' ? 0 : 1,
              y: 0,
              x: glitchActive ? [-3, 3, -2, 2, 0] : 0
            }}
            transition={{
              scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.3 }
            }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[540px] rounded-2xl border-2 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden z-20 backdrop-blur-md ${
              glitchActive
                ? 'border-red-400 shadow-[0_0_40px_rgba(239,68,68,0.7)] bg-[#1a0808]/95'
                : 'border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.35)] bg-[#070d18]/95'
            }`}
          >
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
                </div>
                <div className="flex items-center gap-1.5 ml-2 text-xs font-mono text-slate-300 font-semibold">
                  <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Terminal // josh-workstation</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-cyan-400/80 uppercase font-bold tracking-wider">
                PS 7.4
              </span>
            </div>

            {/* Terminal Screen Body */}
            <div className="p-5 font-mono text-xs sm:text-sm min-h-[170px] flex flex-col justify-between">
              <div>
                <div className="text-slate-400 text-xs mb-2">
                  Windows PowerShell [Version 11.0.26100.1882]
                </div>
                <div className="flex items-center gap-2 text-slate-100 flex-wrap">
                  <span className="text-emerald-400 font-bold">PS C:\Users\JoshUEL&gt;</span>
                  <span
                    className={`font-black text-sm tracking-wider ${
                      glitchActive
                        ? 'text-red-400 animate-pulse drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]'
                        : 'text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]'
                    }`}
                  >
                    {typedText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="inline-block w-2.5 h-4 bg-cyan-400 ml-0.5"
                  />
                </div>

                {/* System Feedback Output */}
                {terminalOutput.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 space-y-1 text-xs border-t border-white/10 pt-2.5 text-emerald-400/90 font-mono"
                  >
                    {terminalOutput.map((line, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-cyan-400">&gt;&gt;</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Status Indicator */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-3 mt-4">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Interactive Dev Shell</span>
                </span>
                <span className="text-slate-400">UTF-8 • Win32</span>
              </div>
            </div>
          </motion.div>

          {/* Animated Cartoon Mouse Cursor */}
          {phase === 'click-browser' && (
            <motion.div
              initial={{ x: window.innerWidth / 2 - 120, y: window.innerHeight / 2 - 40 }}
              animate={{ x: cursorPos.x, y: cursorPos.y }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute z-50 pointer-events-none drop-shadow-xl"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transform transition-transform ${cursorClicking ? 'scale-75' : 'scale-100'}`}
              >
                <path
                  d="M3 3L10.5 21L13.5 13.5L21 10.5L3 3Z"
                  fill="#ffffff"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          )}

          {/* Apple Genie / Suction Browser Expansion Effect */}
          {phase === 'genie-expand' && (
            <motion.div
              initial={{
                opacity: 0.2,
                scaleX: 0.1,
                scaleY: 0.05,
                y: window.innerHeight / 2 - 40,
                borderRadius: '40px'
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
                scaleY: 1,
                y: 0,
                borderRadius: '16px'
              }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="absolute inset-4 sm:inset-10 z-40 bg-[#070b14] border-2 border-cyan-400/80 shadow-[0_0_80px_rgba(6,182,212,0.6)] flex flex-col overflow-hidden"
            >
              {/* Browser Address Bar Chrome */}
              <div className="flex items-center gap-3 px-4 py-3 bg-[#0d1627] border-b border-white/15">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 max-w-xl mx-auto flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-cyan-400/40 text-xs font-mono text-cyan-300">
                  <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">https://joshuel2.github.io/PortfolioWebsite/</span>
                  <Sparkles className="w-3 h-3 text-amber-400 ml-auto shrink-0 animate-pulse" />
                </div>
              </div>

              {/* Inside Browser Mock Preview */}
              <div className="flex-1 bg-gradient-to-b from-[#06070d] to-[#0a101f] p-6 flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs font-mono">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span>NEURAL PORTFOLIO KERNEL LOADED</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    JOSHUA JOHNSON
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base font-mono">
                    Technical Game Designer • Systems &amp; Shaders
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* 3D Tile Binary Shatter Grid (The Showstopper Vortex) */}
          {phase === 'binary-shatter' && (
            <div className="absolute inset-0 z-50 grid grid-cols-8 grid-rows-6 pointer-events-none [perspective:1400px]">
              {tiles.map((tile) => (
                <motion.div
                  key={tile.id}
                  initial={{
                    rotateY: 0,
                    rotateX: 0,
                    z: 0,
                    scale: 1,
                    opacity: 1
                  }}
                  animate={{
                    rotateY: [0, 180, 360, 540],
                    rotateX: [0, 45, 90, 180],
                    z: [0, 150, 400, 800],
                    scale: [1, 1.2, 0.9, 0],
                    opacity: [1, 1, 0.8, 0]
                  }}
                  transition={{
                    duration: 1.25,
                    ease: [0.25, 1, 0.5, 1],
                    delay: tile.dist * 0.05
                  }}
                  className="relative w-full h-full [transform-style:preserve-3d] flex items-center justify-center"
                >
                  {/* Front Face: Stylised Windows Desktop Tile */}
                  <div className="absolute inset-0.5 rounded-lg bg-gradient-to-br from-cyan-600/80 via-blue-700/80 to-indigo-900/90 border border-cyan-300/40 shadow-lg flex items-center justify-center [backface-visibility:hidden]">
                    <span className="text-[10px] font-mono text-cyan-200/50">
                      [{tile.row},{tile.col}]
                    </span>
                  </div>

                  {/* Back Face: Swirling Glowing Binary Stream (1's and 0's) */}
                  <div className="absolute inset-0.5 rounded-lg bg-black/95 border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.9)] flex flex-col items-center justify-center p-1 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="font-mono text-xs sm:text-sm font-black text-cyan-300 tracking-widest text-center animate-pulse drop-shadow-[0_0_8px_rgba(6,182,212,1)]">
                      {tile.binaryStream}
                    </div>
                    <div className="font-mono text-[10px] text-amber-300 font-bold mt-0.5">
                      {tile.row % 2 === 0 ? '0101' : '1010'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Cartoon Windows 11 Centered Taskbar */}
          <div className="absolute bottom-2 sm:bottom-3 inset-x-0 flex justify-center z-30 px-3">
            <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-2xl bg-black/55 border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              {/* Windows Start Button */}
              <div className="p-2 rounded-xl hover:bg-white/15 transition-colors cursor-pointer group">
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                  <div className="rounded-xs bg-cyan-400 group-hover:scale-105 transition-transform" />
                  <div className="rounded-xs bg-cyan-400 group-hover:scale-105 transition-transform" />
                  <div className="rounded-xs bg-cyan-400 group-hover:scale-105 transition-transform" />
                  <div className="rounded-xs bg-cyan-400 group-hover:scale-105 transition-transform" />
                </div>
              </div>

              {/* Taskbar Search Pill */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-xs font-mono text-slate-300">
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>Search projects...</span>
              </div>

              <div className="h-6 w-px bg-white/15 mx-1" />

              {/* Terminal Icon (Active) */}
              <div className="relative p-2 rounded-xl bg-white/20 border border-cyan-400/50 shadow-md text-cyan-300 cursor-pointer">
                <TerminalIcon className="w-5 h-5" />
                <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-cyan-400 rounded-full" />
              </div>

              {/* File Explorer Icon */}
              <div className="p-2 rounded-xl hover:bg-white/15 transition-colors text-amber-300 cursor-pointer">
                <Folder className="w-5 h-5" />
              </div>

              {/* Cartoon Browser Icon (Target of click & genie animation) */}
              <motion.div
                animate={{
                  scale: phase === 'click-browser' && cursorClicking ? 0.85 : 1,
                  boxShadow:
                    phase === 'click-browser'
                      ? '0 0 20px rgba(6,182,212,0.9)'
                      : '0 0 0px rgba(0,0,0,0)'
                }}
                className={`relative p-2 rounded-xl transition-all cursor-pointer ${
                  phase === 'click-browser' || phase === 'genie-expand'
                    ? 'bg-cyan-500/30 border border-cyan-400 text-cyan-200'
                    : 'hover:bg-white/15 text-sky-400'
                }`}
              >
                <Globe className="w-5 h-5" />
                {(phase === 'click-browser' || phase === 'genie-expand') && (
                  <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,1)]" />
                )}
              </motion.div>

              {/* UE5 Game Engine Icon */}
              <div className="p-2 rounded-xl hover:bg-white/15 transition-colors text-purple-300 cursor-pointer">
                <Cpu className="w-5 h-5" />
              </div>

              <div className="h-6 w-px bg-white/15 mx-1" />

              {/* System Tray (Clock & Utilities) */}
              <div className="flex items-center gap-2 pl-1 text-slate-300 font-mono text-[11px]">
                <Wifi className="w-3.5 h-3.5 text-slate-300" />
                <Volume2 className="w-3.5 h-3.5 text-slate-300" />
                <span className="font-bold text-white ml-1">13:37</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
