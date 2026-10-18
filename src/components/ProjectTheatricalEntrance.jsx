import { motion } from 'framer-motion';
import { ShieldAlert, Cpu } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

/**
 * High-impact theatrical entrance reveals for project overview modals.
 * Built on the level of the stage curtains parting in AboutSection,
 * but customized per game with physical parting ice sheets, inky dripping curtains,
 * lush canopy foliage, psychiatric cell hatches, and biohazard airlocks.
 */
export default function ProjectTheatricalEntrance({ projectId, animationKey = 0 }) {
  // 1. Rastacats: Glacial Ice Sheets Cracking & Parting with Physical Hanging Icicles
  if (projectId === 'rastacats') {
    return (
      <div
        key={`ice-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        {/* Top Glacial Icicle Fringe Header */}
        <div className="absolute top-0 inset-x-0 h-10 z-40 bg-gradient-to-b from-[#031326] via-[#06203d]/80 to-transparent flex items-center justify-between px-6 border-b border-cyan-400/40">
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-cyan-200 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
            <span>CRYOGENIC SEALS DEPRESSURISING // BREACHING FROST VAULT</span>
          </div>
          <span className="text-[9px] font-mono text-cyan-400 font-bold">SUB-ZERO PROTOCOL</span>
        </div>

        {/* Physical Hanging SVG Icicle Trim along the Top */}
        <div className="absolute top-9 inset-x-0 z-40 pointer-events-none">
          <svg viewBox="0 0 1000 80" preserveAspectRatio="none" className="w-full h-12 text-cyan-300/90 drop-shadow-[0_4px_12px_rgba(6,182,212,0.8)]">
            <defs>
              <linearGradient id="theatreIceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#cffafe" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 L1000,0 L1000,8 Q980,10 970,35 Q960,65 955,75 L950,55 Q940,25 930,10 Q910,12 895,45 Q880,78 875,80 L870,60 Q855,25 840,10 Q820,12 805,38 L800,58 L795,40 Q780,15 760,10 Q740,12 725,48 Q710,75 705,78 L700,55 Q685,20 660,10 Q640,12 625,35 L620,52 L615,35 Q600,15 570,10 Q550,12 535,50 Q520,80 515,80 L510,58 Q495,20 470,10 Q450,12 435,42 L430,60 L425,40 Q410,15 380,10 Q360,12 345,55 Q330,85 325,85 L320,60 Q305,22 280,10 Q260,12 245,38 L240,55 L235,38 Q220,15 190,10 Q170,12 155,50 Q140,78 135,78 L130,55 Q115,20 90,10 Q70,12 55,38 L50,55 L45,38 Q30,15 0,10 Z"
              fill="url(#theatreIceGrad)"
            />
          </svg>
        </div>

        {/* Left Heavy Glacial Ice Sheet Parting */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-96%' }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="absolute top-0 bottom-0 left-0 w-1/2 border-r-4 border-cyan-300 shadow-[25px_0_70px_rgba(6,182,212,0.85)] z-30"
          style={{
            background:
              'radial-gradient(ellipse at 80% 50%, #0c2d48 0%, #06192c 60%, #030d17 100%)',
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(56,189,248,0.12) 0px, rgba(56,189,248,0.02) 28px, rgba(6,182,212,0.16) 45px, rgba(3,105,161,0.2) 65px)'
          }}
        >
          {/* Frost edge crystal highlight */}
          <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-b from-white via-cyan-200 to-cyan-500 shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
          <div className="absolute inset-y-0 right-4 w-12 bg-gradient-to-l from-cyan-400/25 to-transparent pointer-events-none" />

          {/* Jagged Ice Cracks */}
          <svg className="absolute right-0 top-1/4 w-32 h-64 text-cyan-200/50 stroke-current fill-none" strokeWidth="2">
            <path d="M128 0 L90 50 L110 90 L60 140 L85 190 L30 256" />
            <path d="M90 50 L40 70 L20 120" />
            <path d="M60 140 L10 160" />
          </svg>
        </motion.div>

        {/* Right Heavy Glacial Ice Sheet Parting */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '96%' }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="absolute top-0 bottom-0 right-0 w-1/2 border-l-4 border-cyan-300 shadow-[-25px_0_70px_rgba(6,182,212,0.85)] z-30"
          style={{
            background:
              'radial-gradient(ellipse at 20% 50%, #0c2d48 0%, #06192c 60%, #030d17 100%)',
            backgroundImage:
              'repeating-linear-gradient(-135deg, rgba(56,189,248,0.12) 0px, rgba(56,189,248,0.02) 28px, rgba(6,182,212,0.16) 45px, rgba(3,105,161,0.2) 65px)'
          }}
        >
          {/* Frost edge crystal highlight */}
          <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-white via-cyan-200 to-cyan-500 shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
          <div className="absolute inset-y-0 left-4 w-12 bg-gradient-to-r from-cyan-400/25 to-transparent pointer-events-none" />

          {/* Jagged Ice Cracks */}
          <svg className="absolute left-0 top-1/3 w-32 h-64 text-cyan-200/50 stroke-current fill-none" strokeWidth="2">
            <path d="M0 20 L38 70 L18 110 L68 160 L43 210 L98 256" />
            <path d="M38 70 L88 90 L108 140" />
            <path d="M68 160 L118 180" />
          </svg>
        </motion.div>

        {/* Central Cryogenic Core Shatter Burst */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.45, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-4 border-cyan-300 bg-gradient-to-br from-cyan-400 via-sky-600 to-blue-950 flex flex-col items-center justify-center text-center shadow-[0_0_80px_rgba(6,182,212,1)] z-40 text-white"
        >
          <div className="w-12 h-12 rounded-full border-2 border-white/80 flex items-center justify-center bg-cyan-900/60 mb-1">
            <span className="text-xl font-bold">❄</span>
          </div>
          <span className="text-[10px] font-mono uppercase font-black tracking-widest text-cyan-100">
            FROST CORE
          </span>
          <span className="text-[8px] font-mono text-cyan-200/80">0° KELVIN LOCK</span>
        </motion.div>
      </div>
    );
  }

  // 2. REM / Myndwell: Clinical Inky Fluid Dripping & Neural Void Partitioning
  if (projectId === 'rem') {
    return (
      <div
        key={`ink-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        {/* Top Corporate Clinical Security Header */}
        <div className="absolute top-0 inset-x-0 h-10 z-40 bg-black/95 border-b border-cyan-500/50 flex items-center justify-between px-6 shadow-xl">
          <div className="flex items-center gap-2.5">
            <img
              src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
              alt="Myndwell Logo"
              className="w-4 h-4 object-contain"
            />
            <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">
              MYNDWELL LABS // NEURAL RESET CHAMBER UNSEALING
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-cyan-950/90 border border-cyan-400/40 text-[8px] font-mono font-bold text-cyan-300">
            CONFIDENTIAL
          </span>
        </div>

        {/* Physical Viscous Inky Drip Shelf Along Top Edge */}
        <div className="absolute top-9 inset-x-0 z-40 pointer-events-none">
          <svg viewBox="0 0 1000 90" preserveAspectRatio="none" className="w-full h-14 text-black drop-shadow-[0_10px_20px_rgba(0,0,0,1)]">
            <path
              d="M0,0 L1000,0 L1000,12 Q970,14 960,35 Q950,70 945,75 Q940,75 930,35 Q920,14 890,12 Q870,14 855,45 Q840,82 835,85 Q830,85 815,45 Q800,14 770,12 Q750,14 735,40 Q720,68 715,70 Q710,70 695,40 Q680,14 650,12 Q630,14 615,55 Q600,90 595,90 Q590,90 575,55 Q560,14 530,12 Q510,14 495,42 Q480,72 475,72 Q470,72 455,42 Q440,14 410,12 Q390,14 375,50 Q360,88 355,88 Q350,88 335,50 Q320,14 290,12 Q270,14 255,45 Q240,78 235,80 Q230,80 215,45 Q200,14 170,12 Q150,14 135,42 Q120,68 115,70 Q110,70 95,42 Q80,14 50,12 Q30,14 20,38 Q10,65 5,65 L0,12 Z"
              fill="#010204"
            />
          </svg>

          {/* Physical Animated Detaching Inky Drops */}
          {[135, 235, 355, 475, 595, 715, 835, 945].map((xPos, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, scaleY: 0.8, opacity: 0 }}
              animate={{
                y: [30, 60, 420],
                scaleY: [0.8, 2.2, 1.4],
                opacity: [0, 0.95, 0]
              }}
              transition={{
                duration: 2.2 + (idx % 3) * 0.4,
                delay: idx * 0.25,
                repeat: Infinity,
                ease: [0.55, 0, 1, 1]
              }}
              style={{ left: `${(xPos / 1000) * 100}%` }}
              className="absolute pointer-events-none"
            >
              <svg width="10" height="24" viewBox="0 0 10 24" className="filter drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]">
                <path
                  d="M5,0 C5,0 10,14 10,19 C10,21.8 7.8,24 5,24 C2.2,24 0,21.8 0,19 C0,14 5,0 5,0 Z"
                  fill="#061220"
                  stroke="#06b6d4"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Left Inky Black Void Partition Curtain */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-96%' }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-0 bottom-0 left-0 w-1/2 border-r-4 border-cyan-400 shadow-[30px_0_90px_rgba(0,0,0,1)] bg-[#010204] z-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 90% 50%, rgba(6,182,212,0.18) 0%, #020306 60%, #000000 100%)'
          }}
        >
          <div className="absolute inset-y-0 right-0 w-1.5 bg-cyan-300 shadow-[0_0_20px_rgba(6,182,212,1)]" />
          <div className="absolute inset-y-0 right-4 w-16 bg-gradient-to-l from-cyan-500/20 to-transparent pointer-events-none" />
        </motion.div>

        {/* Right Inky Black Void Partition Curtain */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '96%' }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-0 bottom-0 right-0 w-1/2 border-l-4 border-cyan-400 shadow-[-30px_0_90px_rgba(0,0,0,1)] bg-[#010204] z-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 50%, rgba(6,182,212,0.18) 0%, #020306 60%, #000000 100%)'
          }}
        >
          <div className="absolute inset-y-0 left-0 w-1.5 bg-cyan-300 shadow-[0_0_20px_rgba(6,182,212,1)]" />
          <div className="absolute inset-y-0 left-4 w-16 bg-gradient-to-r from-cyan-500/20 to-transparent pointer-events-none" />
        </motion.div>

        {/* Center Neural Breach Seal */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border-4 border-cyan-400 bg-black flex flex-col items-center justify-center text-center shadow-[0_0_90px_rgba(6,182,212,0.9)] z-40"
        >
          <img
            src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
            alt="Myndwell Logo"
            className="w-14 h-14 object-contain mb-1.5"
          />
          <span className="text-[10px] font-mono uppercase font-black tracking-widest text-cyan-200">
            MYNDWELL CORP
          </span>
          <span className="text-[8px] font-mono text-cyan-400/80">SUBJECT #4092-B</span>
        </motion.div>
      </div>
    );
  }

  // 3. Planet Protectors: Living Canopy Forest Curtain with Cascading Foliage
  if (projectId === 'planet-protectors') {
    return (
      <div
        key={`canopy-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-10 z-40 bg-gradient-to-b from-[#02180c] to-[#042814]/80 flex items-center justify-between px-6 border-b border-emerald-400/40">
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-200 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>BIOME CANOPY PARTING // ECOSYSTEM REGENERATION ACTIVE</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-300 font-bold">FLORA KERNEL</span>
        </div>

        {/* Left Lush Canopy Leaf Panel */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-96%' }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="absolute top-0 bottom-0 left-0 w-1/2 border-r-4 border-emerald-400 shadow-[25px_0_60px_rgba(16,185,129,0.8)] z-30"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, #062b17 0%, #03180c 60%, #010a05 100%)',
            backgroundImage:
              'repeating-linear-gradient(120deg, rgba(16,185,129,0.14) 0px, rgba(16,185,129,0.02) 24px, rgba(52,211,153,0.18) 48px)'
          }}
        >
          <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-b from-emerald-200 via-emerald-400 to-green-600" />
        </motion.div>

        {/* Right Lush Canopy Leaf Panel */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '96%' }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="absolute top-0 bottom-0 right-0 w-1/2 border-l-4 border-emerald-400 shadow-[-25px_0_60px_rgba(16,185,129,0.8)] z-30"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, #062b17 0%, #03180c 60%, #010a05 100%)',
            backgroundImage:
              'repeating-linear-gradient(-120deg, rgba(16,185,129,0.14) 0px, rgba(16,185,129,0.02) 24px, rgba(52,211,153,0.18) 48px)'
          }}
        >
          <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-emerald-200 via-emerald-400 to-green-600" />
        </motion.div>

        {/* Central Ecosystem Seed Burst */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.45, opacity: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-4 border-emerald-300 bg-gradient-to-br from-emerald-500 via-green-700 to-emerald-950 flex flex-col items-center justify-center text-center shadow-[0_0_80px_rgba(16,185,129,0.9)] z-40 text-emerald-100"
        >
          <span className="text-3xl mb-1">🌿</span>
          <span className="text-[10px] font-mono uppercase font-black tracking-widest text-emerald-100">
            ECOSYSTEM
          </span>
          <span className="text-[8px] font-mono text-emerald-200/80">REGENERATION</span>
        </motion.div>
      </div>
    );
  }

  // 4. Delirium: St. Jude's Heavy Steel Psychiatric Cell Blast Doors
  if (projectId === 'delirium') {
    return (
      <div
        key={`asylum-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-10 z-40 bg-gradient-to-b from-[#2a0508] to-[#160204]/90 flex items-center justify-between px-6 border-b border-rose-500/50">
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-rose-200 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span>WARD HIGH-SECURITY LOCKDOWN // UNSEALING ISOLATION CELL</span>
          </div>
          <span className="text-[9px] font-mono text-rose-400 font-bold">EMERGENCY ACCESS</span>
        </div>

        {/* Left Heavy Reinforced Psychiatric Blast Door */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-96%' }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="absolute top-0 bottom-0 left-0 w-1/2 border-r-4 border-rose-500 shadow-[25px_0_70px_rgba(225,29,72,0.9)] bg-[#190507] z-30"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #130405 0px, #26090c 30px, #130405 60px)'
          }}
        >
          <div className="absolute top-1/2 right-6 -translate-y-1/2 w-8 h-28 border-2 border-rose-500/60 bg-black/70 rounded-md flex flex-col justify-around p-1">
            <div className="w-full h-1 bg-rose-500/50" />
            <div className="w-full h-1 bg-rose-500/50" />
            <div className="w-full h-1 bg-rose-500/50" />
          </div>
        </motion.div>

        {/* Right Heavy Reinforced Psychiatric Blast Door */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '96%' }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="absolute top-0 bottom-0 right-0 w-1/2 border-l-4 border-rose-500 shadow-[-25px_0_70px_rgba(225,29,72,0.9)] bg-[#190507] z-30"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #130405 0px, #26090c 30px, #130405 60px)'
          }}
        >
          <div className="absolute top-1/2 left-6 -translate-y-1/2 w-8 h-28 border-2 border-rose-500/60 bg-black/70 rounded-md flex flex-col justify-around p-1">
            <div className="w-full h-1 bg-rose-500/50" />
            <div className="w-full h-1 bg-rose-500/50" />
            <div className="w-full h-1 bg-rose-500/50" />
          </div>
        </motion.div>

        {/* Central St. Jude's Psychiatric Seal Burst */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.4, opacity: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-4 border-rose-400 bg-gradient-to-br from-rose-600 to-rose-950 flex flex-col items-center justify-center text-center shadow-[0_0_80px_rgba(225,29,72,0.9)] z-40 text-rose-100"
        >
          <ShieldAlert className="w-10 h-10 mb-1 text-rose-200" />
          <span className="text-[9px] font-mono uppercase font-black tracking-widest text-white">
            ST. JUDE'S WARD
          </span>
          <span className="text-[8px] font-mono text-rose-300/80">LOCKDOWN BREACH</span>
        </motion.div>
      </div>
    );
  }

  // 5. Generic/Default: Hi-Tech Cyber Partition Door
  return (
    <div
      key={`cyber-${animationKey}`}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
    >
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: '-96%' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="absolute top-0 bottom-0 left-0 w-1/2 border-r-4 border-indigo-400 shadow-[20px_0_50px_rgba(99,102,241,0.7)] bg-[#070918] z-30"
      />
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: '96%' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="absolute top-0 bottom-0 right-0 w-1/2 border-l-4 border-indigo-400 shadow-[-20px_0_50px_rgba(99,102,241,0.7)] bg-[#070918] z-30"
      />
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1.35, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-indigo-400 bg-indigo-950 flex flex-col items-center justify-center text-center shadow-2xl z-40 text-indigo-200"
      >
        <Cpu className="w-9 h-9 mb-1 text-indigo-300" />
        <span className="text-[9px] font-mono uppercase font-bold tracking-widest text-white">
          UNREAL PIPELINE
        </span>
      </motion.div>
    </div>
  );
}
