import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  UserCheck,
  ShieldCheck,
  ArrowUpRight,
  FileText,
  Clapperboard,
  Building2,
  Cpu,
  Radio,
  BookOpen,
  GraduationCap,
  X,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  RotateCcw,
  Maximize2,
  Lock
} from 'lucide-react';
import {
  PERSONAL_INFO,
  ACADEMIC_MODULES,
  DOSSIER_CREDENTIALS,
  SHOWCASE_EXHIBITIONS
} from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';

const CREDENTIAL_ICONS = {
  theatre: Clapperboard,
  governance: GraduationCap,
  studio: Radio,
  editorial: BookOpen,
  cyber: ShieldCheck,
  robotics: Cpu
};

const CREDENTIAL_THEME_STYLES = {
  theatre: {
    cardAccent:
      'border-rose-500/40 hover:border-rose-400 bg-gradient-to-br from-[#1b0b12] via-[#0c121e] to-[#0c121e]',
    iconBox: 'bg-rose-950/80 text-rose-300 border-rose-500/40',
    badgeText: 'text-rose-300 bg-rose-950/70 border-rose-500/40',
    modalBg:
      'bg-[radial-gradient(ellipse_at_top,#4c0519_0%,#1c060c_55%,#090406_100%)] border-amber-400/50',
    headerAccent: 'text-amber-300',
    whyBox: 'bg-rose-950/40 border-amber-400/60 text-amber-50',
    replayLabel: 'Replay Curtain Call'
  },
  governance: {
    cardAccent:
      'border-amber-500/35 hover:border-amber-400 bg-gradient-to-br from-[#191309] via-[#0c121e] to-[#0c121e]',
    iconBox: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
    badgeText: 'text-amber-300 bg-amber-950/70 border-amber-500/40',
    modalBg:
      'bg-[radial-gradient(ellipse_at_top,#2e1e07_0%,#151009_60%,#09080c_100%)] border-amber-400/45',
    headerAccent: 'text-amber-300',
    whyBox: 'bg-amber-950/35 border-amber-400/60 text-amber-50',
    replayLabel: 'Replay Council Seal'
  },
  studio: {
    cardAccent:
      'border-purple-500/35 hover:border-purple-400 bg-gradient-to-br from-[#160d24] via-[#0c121e] to-[#0c121e]',
    iconBox: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
    badgeText: 'text-purple-300 bg-purple-950/70 border-purple-500/40',
    modalBg:
      'bg-[radial-gradient(ellipse_at_top,#2e1065_0%,#130924_60%,#07050c_100%)] border-purple-400/45',
    headerAccent: 'text-purple-300',
    whyBox: 'bg-purple-950/35 border-purple-400/60 text-purple-50',
    replayLabel: 'Replay On-Air Broadcast'
  },
  editorial: {
    cardAccent:
      'border-fuchsia-500/35 hover:border-fuchsia-400 bg-gradient-to-br from-[#1c0c1f] via-[#0c121e] to-[#0c121e]',
    iconBox: 'bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-500/40',
    badgeText: 'text-fuchsia-300 bg-fuchsia-950/70 border-fuchsia-500/40',
    modalBg:
      'bg-[radial-gradient(ellipse_at_top,#4a044e_0%,#18081c_60%,#08050a_100%)] border-fuchsia-400/45',
    headerAccent: 'text-fuchsia-300',
    whyBox: 'bg-fuchsia-950/35 border-fuchsia-400/60 text-fuchsia-50',
    replayLabel: 'Replay Cover Turn'
  },
  cyber: {
    cardAccent:
      'border-emerald-500/35 hover:border-emerald-400 bg-gradient-to-br from-[#071914] via-[#0c121e] to-[#0c121e]',
    iconBox: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
    badgeText: 'text-emerald-300 bg-emerald-950/70 border-emerald-500/40',
    modalBg:
      'bg-[radial-gradient(ellipse_at_top,#063729_0%,#071512_60%,#050a09_100%)] border-emerald-400/45',
    headerAccent: 'text-emerald-300',
    whyBox: 'bg-emerald-950/35 border-emerald-400/60 text-emerald-50',
    replayLabel: 'Replay Security Scan'
  },
  robotics: {
    cardAccent:
      'border-sky-500/35 hover:border-sky-400 bg-gradient-to-br from-[#091826] via-[#0c121e] to-[#0c121e]',
    iconBox: 'bg-sky-950/80 text-sky-300 border-sky-500/40',
    badgeText: 'text-sky-300 bg-sky-950/70 border-sky-500/40',
    modalBg:
      'bg-[radial-gradient(ellipse_at_top,#0c2d48_0%,#081420_60%,#050911_100%)] border-sky-400/45',
    headerAccent: 'text-sky-300',
    whyBox: 'bg-sky-950/35 border-sky-400/60 text-sky-50',
    replayLabel: 'Replay Blast Hatch'
  }
};

/**
 * Custom Themed Entrance Animations for each credential modal
 */
function CredentialThemeAnimation({ theme, animationKey }) {
  if (theme === 'theatre') {
    // Stage Curtains Parting
    return (
      <div
        key={`curtain-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-5 bg-gradient-to-b from-[#7f1d1d] to-[#450a0a] border-b-2 border-amber-400/80 shadow-lg" />
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-94%' }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="absolute top-0 bottom-0 left-0 w-1/2 border-r-4 border-amber-400/90 shadow-[25px_0_60px_rgba(0,0,0,0.95)]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #450a0a 0px, #7f1d1d 22px, #991b1b 36px, #450a0a 56px)'
          }}
        >
          <div className="absolute inset-y-0 right-2 w-1 bg-amber-300/40" />
        </motion.div>
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '94%' }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="absolute top-0 bottom-0 right-0 w-1/2 border-l-4 border-amber-400/90 shadow-[-25px_0_60px_rgba(0,0,0,0.95)]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #450a0a 0px, #7f1d1d 22px, #991b1b 36px, #450a0a 56px)'
          }}
        >
          <div className="absolute inset-y-0 left-2 w-1 bg-amber-300/40" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.16),transparent_65%)]"
        />
      </div>
    );
  }

  if (theme === 'governance') {
    // Official Academic Council Mahogany Doors Parting with Wax Seal Dissolving
    return (
      <div
        key={`gov-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        {/* Left Heavy Polished Mahogany Door */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-95%' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-0 bottom-0 left-0 w-1/2 border-r-4 border-amber-600/80 shadow-[20px_0_50px_rgba(0,0,0,0.9)] bg-[#211409]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #1c1007 0px, #2b1a0c 30px, #1a0e06 60px)'
          }}
        >
          <div className="absolute inset-y-0 right-4 w-2 bg-amber-500/30" />
          <div className="absolute top-1/2 right-6 -translate-y-1/2 w-4 h-16 rounded-full border-2 border-amber-400/60 bg-amber-900/50" />
        </motion.div>

        {/* Right Heavy Polished Mahogany Door */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '95%' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-0 bottom-0 right-0 w-1/2 border-l-4 border-amber-600/80 shadow-[-20px_0_50px_rgba(0,0,0,0.9)] bg-[#211409]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #1c1007 0px, #2b1a0c 30px, #1a0e06 60px)'
          }}
        >
          <div className="absolute inset-y-0 left-4 w-2 bg-amber-500/30" />
          <div className="absolute top-1/2 left-6 -translate-y-1/2 w-4 h-16 rounded-full border-2 border-amber-400/60 bg-amber-900/50" />
        </motion.div>

        {/* Central Institutional Gold Seal Opening */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.35, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-amber-400 bg-gradient-to-br from-amber-600 to-amber-950 flex flex-col items-center justify-center text-center shadow-2xl text-amber-200"
        >
          <GraduationCap className="w-10 h-10 mb-1 text-amber-300" />
          <span className="text-[9px] font-mono uppercase font-bold tracking-widest">
            UEL BOARD SEAL
          </span>
        </motion.div>
      </div>
    );
  }

  if (theme === 'studio') {
    // Soundproof Broadcast Isolation Booth Doors with Glowing ON AIR Beacon & VU Equalizer
    return (
      <div
        key={`studio-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        {/* Top Glowing ON AIR Beacon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: [1, 0.5, 1], y: 0 }}
          transition={{ duration: 0.9, repeat: 1, delay: 0.1 }}
          className="absolute top-3 left-1/2 -translate-x-1/2 z-40 px-4 py-1 rounded bg-red-600 text-white font-mono text-xs font-black uppercase tracking-[0.25em] shadow-[0_0_25px_rgba(239,68,68,0.9)] border border-red-300"
        >
          ● ON AIR
        </motion.div>

        {/* Left Studio Blast Door */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-95%' }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-0 bottom-0 left-0 w-1/2 border-r-4 border-purple-500/80 shadow-[20px_0_50px_rgba(0,0,0,0.9)] bg-[#11091f]"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#9333ea_1px,transparent_1px)] [background-size:12px_12px]" />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-end gap-1 h-28">
            {[40, 70, 95, 60, 85, 45, 90, 30].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${h}%`, `${Math.max(20, h - 25)}%`, `${h}%`] }}
                transition={{ duration: 0.6 + i * 0.1, repeat: Infinity }}
                className="w-1.5 bg-gradient-to-t from-emerald-400 via-amber-400 to-red-500 rounded-xs"
              />
            ))}
          </div>
        </motion.div>

        {/* Right Studio Blast Door */}
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '95%' }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-0 bottom-0 right-0 w-1/2 border-l-4 border-purple-500/80 shadow-[-20px_0_50px_rgba(0,0,0,0.9)] bg-[#11091f]"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#9333ea_1px,transparent_1px)] [background-size:12px_12px]" />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-end gap-1 h-28">
            {[30, 80, 50, 90, 65, 85, 40, 75].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${h}%`, `${Math.max(20, h - 25)}%`, `${h}%`] }}
                transition={{ duration: 0.6 + i * 0.1, repeat: Infinity }}
                className="w-1.5 bg-gradient-to-t from-emerald-400 via-amber-400 to-red-500 rounded-xs"
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  if (theme === 'editorial') {
    // Hardback Publication Cover Turning Open from Spine with CMYK Registration Marks
    return (
      <div
        key={`edit-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden [perspective:1200px]"
      >
        <motion.div
          initial={{ rotateY: 0, opacity: 1 }}
          animate={{ rotateY: -108, opacity: 0 }}
          transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          style={{ transformOrigin: 'left center' }}
          className="absolute inset-0 bg-gradient-to-br from-[#3b0742] via-[#240529] to-[#0f0212] border-r-8 border-fuchsia-400 shadow-[35px_0_70px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center p-8"
        >
          <div className="w-full max-w-md p-6 rounded-xl border-2 border-fuchsia-400/50 bg-black/60 text-center">
            <span className="text-[10px] font-mono text-fuchsia-300 uppercase tracking-[0.3em] block mb-2">
              YEARBOOK EDITORIAL FOLIO
            </span>
            <h4 className="text-xl font-black text-white font-['Syne',sans-serif] uppercase tracking-wider mb-2">
              150+ Iterations • 200+ Portrait Mosaic
            </h4>
            <div className="flex justify-center gap-3 text-[11px] font-mono text-fuchsia-200">
              <span>CYAN</span> • <span>MAGENTA</span> • <span>YELLOW</span> • <span>BLACK</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (theme === 'cyber') {
    // Biometric Security Defense Iris & Scanlines Unlock
    return (
      <div
        key={`cyber-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-95%' }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-0 bottom-0 left-0 w-1/2 border-r-4 border-emerald-400 shadow-[20px_0_50px_rgba(0,0,0,0.9)] bg-[#04140d]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(16,185,129,0.06)_51%)] bg-[length:100%_4px]" />
        </motion.div>

        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '95%' }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-0 bottom-0 right-0 w-1/2 border-l-4 border-emerald-400 shadow-[-20px_0_50px_rgba(0,0,0,0.9)] bg-[#04140d]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(16,185,129,0.06)_51%)] bg-[length:100%_4px]" />
        </motion.div>

        {/* Central Terminal Decryption Stamp */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-4 rounded-xl border-2 border-emerald-400 bg-black/90 font-mono text-emerald-400 text-center shadow-[0_0_40px_rgba(16,185,129,0.6)]"
        >
          <Lock className="w-6 h-6 mx-auto mb-1 text-emerald-300" />
          <div className="text-xs font-bold tracking-widest uppercase">
            [ACCESS GRANTED]
          </div>
          <div className="text-[10px] text-emerald-500">
            CYBERCENTURION DEFENSE UNLOCKED
          </div>
        </motion.div>
      </div>
    );
  }

  if (theme === 'robotics') {
    // Heavy Industrial Mechatronic Steel Blast Hatch with Hazard Chevrons & Pistons
    return (
      <div
        key={`robotics-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-95%' }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-0 bottom-0 left-0 w-1/2 border-r-4 border-sky-400 shadow-[20px_0_50px_rgba(0,0,0,0.9)] bg-[#081524]"
        >
          <div className="absolute inset-y-0 right-0 w-8 bg-[repeating-linear-gradient(45deg,#0284c7,#0284c7_10px,#0f172a_10px,#0f172a_20px)]" />
        </motion.div>

        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '95%' }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-0 bottom-0 right-0 w-1/2 border-l-4 border-sky-400 shadow-[-20px_0_50px_rgba(0,0,0,0.9)] bg-[#081524]"
        >
          <div className="absolute inset-y-0 left-0 w-8 bg-[repeating-linear-gradient(45deg,#0284c7,#0284c7_10px,#0f172a_10px,#0f172a_20px)]" />
        </motion.div>

        {/* Central Mechatronic Clamp Stamp */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-4 rounded-xl border-2 border-sky-400 bg-black/90 font-mono text-sky-300 text-center shadow-[0_0_40px_rgba(14,165,233,0.6)]"
        >
          <Cpu className="w-6 h-6 mx-auto mb-1 text-sky-400" />
          <div className="text-xs font-bold tracking-widest uppercase">
            PNEUMATIC CLAMP RELEASE
          </div>
          <div className="text-[10px] text-sky-500">
            VEX ROBOTICS COMPETITION RIG
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}

export default function AboutSection() {
  const [activeCredential, setActiveCredential] = useState(null);
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [activeShowcaseSlide, setActiveShowcaseSlide] = useState(null);

  const handleOpenCredential = (cred) => {
    setSelectedPhotoIdx(0);
    setAnimationKey((prev) => prev + 1);
    setActiveCredential(cred);
  };

  useEffect(() => {
    if (!activeCredential && !activeShowcaseSlide) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCredential(null);
        setActiveShowcaseSlide(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeCredential, activeShowcaseSlide]);

  // Duplicate showcase items for a seamless infinite marquee loop
  const marqueeItems = [...SHOWCASE_EXHIBITIONS, ...SHOWCASE_EXHIBITIONS];

  return (
    <section
      id="about"
      className="relative w-full bg-dossier-grid border-t border-slate-700/70 text-slate-100 overflow-hidden"
    >
      {/* Inline Keyframes for Smooth Infinite Revolving Showcase Strip */}
      <style>{`
        @keyframes showcaseMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-showcase-strip {
          display: flex;
          width: max-content;
          animation: showcaseMarquee 48s linear infinite;
        }
        .animate-showcase-strip:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top Atmospheric Transition from PCB (#070b09) to Studio Dossier (#080c14) */}
      <div className="h-14 w-full bg-gradient-to-b from-[#070b09] to-transparent pointer-events-none" />

      {/* Top Executive Dossier Identification Bar */}
      <div className="max-w-6xl mx-auto px-4 pt-2">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-700/80 text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-sky-300 font-bold">
              STUDIO CANDIDATE DOSSIER &amp; VERIFIED CREDENTIALS
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>REF: JJ-UEL-2026</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-emerald-400">
              STATUS: AVAILABLE FOR STUDIO ROLES
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14 sm:py-16">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-700 text-sky-300 text-xs font-mono uppercase tracking-wider mb-3">
              <UserCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Candidate Profile // Technical Game Designer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
              Josh Johnson
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              How I approach game development, mathematical problem-solving, and cross-disciplinary studio collaboration. Click any credential on the right to inspect the full story and custom animations.
            </p>
          </div>

          {/* Quick Studio Summary Pill */}
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl bg-[#0c121e] border border-slate-700/80 shrink-0">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Primary Base
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">
                London, United Kingdom
              </div>
            </div>
            <div className="h-7 w-px bg-slate-700/80" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Degree Standing
              </div>
              <div className="text-xs sm:text-sm font-bold text-emerald-400">
                1st Class Honours Track
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Grounded First-Person Bio & Verified 1st Class Module Record */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Executive Statement Box */}
            <div className="relative p-6 rounded-xl bg-[#0c121e] border-l-4 border-l-sky-400 border border-slate-700/80 shadow-lg">
              <div className="text-[11px] font-mono uppercase tracking-widest text-sky-400 mb-1.5">
                Design &amp; Engineering Principle
              </div>
              <blockquote className="text-lg sm:text-2xl font-extrabold text-white font-['Syne',sans-serif] leading-snug">
                &ldquo;{PERSONAL_INFO.motto}&rdquo;
              </blockquote>
            </div>

            {/* First-Person Bio Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#0c121e]/90 border border-slate-700/70 space-y-4 text-slate-200 leading-relaxed font-normal text-sm sm:text-base">
              <p>
                I&apos;m a <strong className="text-white font-semibold">Technical Game Designer</strong> studying BSc (Hons) Computer Games Design at the{' '}
                <strong className="text-white font-semibold">University of East London (UEL)</strong>, where I also serve as{' '}
                <strong className="text-white font-semibold">School Representative</strong> for Architecture, Computing &amp; Engineering and sat on the{' '}
                <strong className="text-white font-semibold">Sextennial School Review</strong> panel reviewing the university&apos;s computing and games degrees.
              </p>
              <p>
                I gravitate toward the problems that sit right on the boundary between game design, maths, and technical art. When our spline-based pipe racer{' '}
                <strong className="text-white font-semibold">Rastacats (92%, 1st Class)</strong> needed players to ride seamlessly up walls and upside-down across ceilings, I bypassed Unreal Engine 5&apos;s default planar gravity and wrote a custom polar cross-section controller, then followed it up in my remaster with a curved-world WPO vertex shader and tangent-aligned decal projection maths.
              </p>
              <p>
                Before focusing full-time on games, I spent over five years acting on stage in musicals like <em>Les Misérables</em> and <em>The Addams Family</em> as well as acting on film sets. That background directly shapes how I direct performance capture, block cameras inside Unreal Engine, and write interactive dialogue. It also led me to build{' '}
                <strong className="text-white font-semibold">Project K.I.N.E.T.I.C.</strong>, a DIY motion-capture rig fusing an Xbox Kinect v2 with PSVR Move gyros over Python OSC to animate UE5 MetaHumans on a student budget.
              </p>
            </div>

            {/* Verified First-Class Honours Module Ledger */}
            <div className="p-6 rounded-xl bg-[#0c121e] border border-slate-700/80 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                  Verified Academic Transcript Ledger (UEL BSc Computer Games Design)
                </span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 font-semibold">
                  8x 1st Class Honours Modules
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ACADEMIC_MODULES.map((mod) => (
                  <div
                    key={mod.name}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#080c14] border border-slate-800 text-xs"
                  >
                    <div className="truncate pr-2">
                      <span className="text-slate-200 font-medium">{mod.name}</span>
                    </div>
                    <span className="font-mono font-bold text-sky-300 shrink-0">{mod.mark}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CV & Profile Links */}
            <div className="flex flex-wrap gap-3 pt-1">
              {PERSONAL_INFO.cv && (
                <a
                  href={getAssetUrl(PERSONAL_INFO.cv)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-md transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Full CV (PDF)</span>
                </a>
              )}

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0c121e] hover:bg-slate-800 text-sky-300 font-semibold text-xs tracking-wider uppercase border border-slate-700 transition-all"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0c121e] hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-slate-700 transition-all"
              >
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 6 Dedicated Clickable Credential Dossiers */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-3"
          >
            <div className="flex items-center justify-between px-1 pb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                Interactive Credentials // Click Any Card
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {DOSSIER_CREDENTIALS.length} Verified Dossiers
              </span>
            </div>

            {DOSSIER_CREDENTIALS.map((cred, idx) => {
              const IconComponent = CREDENTIAL_ICONS[cred.theme] || Award;
              const style =
                CREDENTIAL_THEME_STYLES[cred.theme] || CREDENTIAL_THEME_STYLES.governance;
              const previewThumb = cred.images?.[0]?.src;

              return (
                <button
                  key={cred.id}
                  type="button"
                  onClick={() => handleOpenCredential(cred)}
                  className={`w-full text-left p-4 rounded-xl border shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-0.5 ${style.cardAccent}`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      CREDENTIAL 0{idx + 1} // {cred.category}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] font-mono font-bold uppercase tracking-wider shrink-0 ${style.badgeText}`}
                    >
                      <span>{cred.badge}</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    {previewThumb ? (
                      <div className="w-14 h-14 rounded-lg overflow-hidden border border-white/15 shrink-0 relative">
                        <img
                          src={getAssetUrl(previewThumb)}
                          alt={cred.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className={`p-2.5 rounded-lg border shrink-0 ${style.iconBox}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-white text-sm group-hover:text-sky-300 transition-colors leading-snug">
                        {cred.title}
                      </h3>
                      <p className="text-[11px] text-slate-300 font-medium mt-0.5 line-clamp-1">
                        {cred.subtitle}
                      </p>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                        {cred.shortSummary}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* REVOLVING LIVE EXHIBITIONS & SHOWCASES STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-12 border-t border-slate-700/80"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 font-bold mb-1">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Live Public Exhibitions &amp; Floor Showcases</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne',sans-serif]">
                Showcases I&apos;ve Been a Part Of
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Featuring the <strong className="text-white">UEL Annual ACE Showcase 2026</strong> (where <em>Rastacats</em> was the sole Level 5 project chosen to exhibit downstairs with Level 6 honours projects, and <em>Delirium VR</em> was upstairs in the dedicated VR suite) alongside the <strong className="text-white">Summer VR Demonstration Series</strong> with Patrick Quinnell. Hover to pause or click any photo to enlarge.
              </p>
            </div>
            <div className="text-[11px] font-mono text-amber-300/90 uppercase tracking-wider shrink-0">
              Revolving Gallery • Click Any Frame
            </div>
          </div>

          {/* Revolving Strip Container with Left/Right Edge Masks */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-[#090e18] border border-slate-700/80 py-5 shadow-2xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#090e18] to-transparent z-10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#090e18] to-transparent z-10"
            />

            <div className="animate-showcase-strip gap-5 px-5">
              {marqueeItems.map((item, idx) => (
                <button
                  key={`${item.id}-${idx}`}
                  type="button"
                  onClick={() => setActiveShowcaseSlide(item)}
                  className="w-72 sm:w-80 shrink-0 text-left rounded-xl bg-[#0c1322] border border-slate-700/80 hover:border-amber-400/70 overflow-hidden shadow-lg group transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden bg-black">
                      <img
                        src={getAssetUrl(item.src)}
                        alt={item.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-transparent to-black/40" />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/80 border border-amber-400/45 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 backdrop-blur-sm">
                        {item.event}
                      </span>
                      <span className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/75 text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/15">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="p-4">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-sky-300 mb-1">
                        {item.location}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-snug mb-1.5">
                        {item.highlight}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal when Clicking a Revolving Showcase Frame */}
      <AnimatePresence>
        {activeShowcaseSlide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveShowcaseSlide(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl bg-[#0c121e] border border-amber-400/45 overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-3.5 bg-black/60 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                    {activeShowcaseSlide.event} // {activeShowcaseSlide.location}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {activeShowcaseSlide.highlight}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveShowcaseSlide(null)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                  aria-label="Close showcase photo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video w-full bg-black flex items-center justify-center">
                <img
                  src={getAssetUrl(activeShowcaseSlide.src)}
                  alt={activeShowcaseSlide.caption}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="px-5 py-3.5 bg-[#090e18] border-t border-white/10 text-xs sm:text-sm text-slate-200">
                {activeShowcaseSlide.caption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Credential Modal with Custom Themed Animation per Credential */}
      <AnimatePresence>
        {activeCredential && (
          <motion.div
            key={activeCredential.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCredential(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          >
            {(() => {
              const style =
                CREDENTIAL_THEME_STYLES[activeCredential.theme] ||
                CREDENTIAL_THEME_STYLES.governance;
              const photos = activeCredential.images || [];
              const hasPhotos = photos.length > 0;
              const currentPhoto = hasPhotos ? (photos[selectedPhotoIdx] || photos[0]) : null;
              const isGovernance = activeCredential.theme === 'governance';

              return (
                <motion.div
                  initial={{ scale: 0.94, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 20 }}
                  transition={{ duration: 0.35 }}
                  onClick={(e) => e.stopPropagation()}
                  className={`relative w-full max-w-5xl rounded-2xl border-2 shadow-[0_25px_90px_rgba(0,0,0,0.95)] overflow-hidden my-auto ${style.modalBg}`}
                >
                  {/* BESPOKE THEMED ENTRANCE ANIMATION */}
                  <CredentialThemeAnimation
                    theme={activeCredential.theme}
                    animationKey={animationKey}
                  />

                  {/* Modal Header */}
                  <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 px-6 sm:px-10 pt-7 pb-5 border-b border-white/15 bg-black/40">
                    <div>
                      <div
                        className={`text-xs font-mono uppercase tracking-[0.2em] font-bold ${style.headerAccent}`}
                      >
                        {activeCredential.category}
                      </div>
                      <h3 className="text-xl sm:text-3xl font-extrabold text-white font-['Syne',sans-serif] mt-1">
                        {activeCredential.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                        {activeCredential.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => setAnimationKey((prev) => prev + 1)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-100 border border-white/20 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                        title="Replay Entrance Animation"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{style.replayLabel || 'Replay'}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCredential(null)}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer"
                        aria-label="Close credential dossier"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Modal Body */}
                  <div className="relative z-20 p-6 sm:p-10 max-h-[80vh] overflow-y-auto">
                    {/* SPECIAL IN-DEPTH TEXT LAYOUT FOR SCHOOL REPRESENTATIVE & GOVERNANCE */}
                    {isGovernance ? (
                      <div className="space-y-6">
                        {/* Executive Summary */}
                        <div className="p-5 rounded-xl bg-black/50 border border-amber-500/30">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold mb-2">
                            Executive Mandate &amp; Cohort Leadership
                          </h4>
                          <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                            {activeCredential.story}
                          </p>
                        </div>

                        {/* 5 Deep-Dive Governance Pillars Grid */}
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                            Core Representation Responsibilities &amp; Actions
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                            {activeCredential.governancePillars?.map((pillar, pIdx) => (
                              <div
                                key={pIdx}
                                className="p-4 rounded-xl bg-black/40 border border-amber-500/25 flex flex-col justify-between"
                              >
                                <div>
                                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                                    PILLAR 0{pIdx + 1}
                                  </span>
                                  <h5 className="text-sm font-bold text-white font-['Syne',sans-serif] mb-2 leading-snug">
                                    {pillar.title}
                                  </h5>
                                  <p className="text-xs text-slate-300 leading-relaxed">
                                    {pillar.detail}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Why It Matters for Game Studios & Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          <div className={`p-4 rounded-xl border-l-4 ${style.whyBox}`}>
                            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold mb-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                              <span>How This Shapes My Game Development</span>
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed">
                              {activeCredential.whyItMattersForGames}
                            </p>
                          </div>

                          <div className="p-4 rounded-xl bg-black/40 border border-slate-700/80">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                              Key Highlights
                            </h4>
                            <ul className="space-y-1.5">
                              {activeCredential.highlights.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* STANDARD MEDIA + TEXT LAYOUT FOR OTHER 5 CREDENTIALS */
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left 7 Columns: Archival Photo Stage + Thumbnails */}
                        <div className="lg:col-span-7 space-y-3.5">
                          {currentPhoto && (
                            <div className="rounded-xl overflow-hidden bg-black/90 border border-white/20 shadow-2xl">
                              <div className="aspect-video w-full relative flex items-center justify-center bg-black">
                                <img
                                  src={getAssetUrl(currentPhoto.src)}
                                  alt={currentPhoto.caption}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="px-4 py-3 bg-black/80 border-t border-white/10 flex items-center justify-between gap-3">
                                <span className="text-xs sm:text-sm text-slate-200 font-medium">
                                  {currentPhoto.caption}
                                </span>
                                <span className="text-[11px] font-mono text-slate-400 shrink-0">
                                  {selectedPhotoIdx + 1} / {photos.length}
                                </span>
                              </div>
                            </div>
                          )}

                          {photos.length > 1 && (
                            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5">
                              {photos.map((img, i) => (
                                <button
                                  key={img.src}
                                  type="button"
                                  onClick={() => setSelectedPhotoIdx(i)}
                                  className={`rounded-lg overflow-hidden aspect-video border-2 transition-all cursor-pointer ${
                                    i === selectedPhotoIdx
                                      ? 'border-amber-400 scale-[1.02] opacity-100 shadow-md'
                                      : 'border-white/15 opacity-60 hover:opacity-95'
                                  }`}
                                >
                                  <img
                                    src={getAssetUrl(img.src)}
                                    alt={img.caption}
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Right 5 Columns: Full Story, Game Dev Connection & Proof Points */}
                        <div className="lg:col-span-5 space-y-5">
                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                              Behind the Scenes
                            </h4>
                            <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                              {activeCredential.story}
                            </p>
                          </div>

                          <div className={`p-4 rounded-xl border-l-4 ${style.whyBox}`}>
                            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold mb-1">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>How This Shapes My Game Development</span>
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed">
                              {activeCredential.whyItMattersForGames}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5">
                              Key Highlights
                            </h4>
                            <ul className="space-y-2">
                              {activeCredential.highlights.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
