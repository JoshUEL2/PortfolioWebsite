import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Gamepad2,
  BookOpen,
  Clapperboard,
  Award,
  Code2,
  Layers,
  Terminal,
  History,
  Globe,
  FileCode,
  ZoomIn,
  Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getAssetUrl, isSpecificRepo, isSpecificLinkedIn } from '../utils/assetUrl';
import { MARKETING_REPOS } from '../data/marketingReposData';
import EmbeddedBrowserViewport from './EmbeddedBrowserViewport';

// 1. Rastacats Frost / Freeze Effect
function FreezeAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      {/* Frost etched crystal corners */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-cyan-300/50 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-cyan-400/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-cyan-300/50 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-cyan-400/15 to-transparent" />

      {/* Drifting ice crystals / frost glints */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -15, x: `${(i * 12 + 6) % 92}%`, opacity: 0 }}
          animate={{
            y: ['0%', '100%'],
            x: [
              `${(i * 12 + 6) % 92}%`,
              `${((i * 12 + 6) % 92) + ((i % 2 === 0 ? 1 : -1) * 4)}%`
            ],
            opacity: [0, 0.85, 0.4, 0]
          }}
          transition={{
            duration: 6 + (i % 3) * 2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'linear'
          }}
          className="absolute pointer-events-none z-0"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-200 shadow-[0_0_8px_rgba(56,189,248,1)] blur-[0.3px]" />
        </motion.div>
      ))}

      {/* Frost Banner */}
      <div className="mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-between text-[10px] font-mono text-cyan-200 select-none shadow-sm">
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
          <span>SUB-ZERO GRAVITY SIMULATION // CURVED-WORLD WPO ICE BIOME</span>
        </span>
        <span className="text-cyan-300/70 font-bold">CRYOGENIC KERNEL</span>
      </div>
    </>
  );
}

// 2. Planet Protectors Falling Leaves Effect
function LeavesAtmosphere() {
  const leafPaths = [
    'M12 2C8 6 4 10 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 10 16 6 12 2Z',
    'M12 2C7 7 6 13 8 18C10 21 12 22 12 22C12 22 14 21 16 18C18 13 17 7 12 2Z'
  ];

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-emerald-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-emerald-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-emerald-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-emerald-500/15 to-transparent" />

      {/* Falling leaves drifting and swaying gently across the card */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: -25,
            x: `${(i * 13 + 5) % 92}%`,
            rotate: i * 40,
            opacity: 0
          }}
          animate={{
            y: ['0%', '115%'],
            x: [
              `${(i * 13 + 5) % 92}%`,
              `${((i * 13 + 5) % 92) + ((i % 2 === 0 ? 1 : -1) * 7)}%`,
              `${(i * 13 + 5) % 92}%`
            ],
            rotate: [i * 40, i * 40 + 160, i * 40 + 320],
            opacity: [0, 0.75, 0.8, 0]
          }}
          transition={{
            duration: 8 + (i % 4) * 2,
            repeat: Infinity,
            delay: i * 0.9,
            ease: 'linear'
          }}
          className="absolute pointer-events-none z-0"
        >
          <svg
            width={16 + (i % 3) * 4}
            height={20 + (i % 3) * 4}
            viewBox="0 0 24 24"
            fill={i % 2 === 0 ? '#10b981' : '#34d399'}
            className="opacity-55 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          >
            <path d={leafPaths[i % leafPaths.length]} />
          </svg>
        </motion.div>
      ))}

      {/* Forest Canopy Banner */}
      <div className="mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-between text-[10px] font-mono text-emerald-200 select-none shadow-sm">
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>ECOSYSTEM REGENERATION ENGINE // PROCEDURAL CANOPY BIOME</span>
        </span>
        <span className="text-emerald-300/80 font-bold">FLORA SIMULATION</span>
      </div>
    </>
  );
}

// 3. REM Inky Black & Clinical Myndwell International Effect
function InkyMyndwellAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[#020306] pointer-events-none -z-10 rounded-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(circle_at_bottom_left,rgba(8,145,178,0.12),transparent_70%)] pointer-events-none" />

      {/* Inky fluid dispersion cloud */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-950/30 to-black blur-3xl pointer-events-none"
      />

      {/* Clinical Myndwell International Header Banner */}
      <div className="mb-4 -mt-2 -mx-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#06111f] via-[#091a30] to-[#06111f] border border-cyan-400/40 flex flex-wrap items-center justify-between gap-2 shadow-lg select-none">
        <div className="flex items-center gap-2.5">
          <img
            src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
            alt="Myndwell Logo"
            className="w-5 h-5 object-contain shrink-0"
          />
          <div className="flex flex-col">
            <span className="text-[11px] font-bold font-mono tracking-wider text-white uppercase font-['Syne',sans-serif]">
              MYNDWELL INTERNATIONAL // DIVISION OF NEURAL PARTITIONING
            </span>
            <span className="text-[10px] font-mono text-cyan-300/80">
              SURGICAL TRAUMA REMOVAL PROTOCOL • SUBJECT #4092-B
            </span>
          </div>
        </div>
        <span className="px-2.5 py-0.5 rounded bg-cyan-950/90 border border-cyan-400/40 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest shadow-sm">
          RESTRICTED ARCHIVE
        </span>
      </div>
    </>
  );
}

// 4. Delirium VR Psychiatric Asylum Effect
function AsylumAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-rose-500/50 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-rose-600/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-rose-500/50 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-rose-600/15 to-transparent" />

      {/* Hospital Warning Banner */}
      <div className="mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl bg-rose-950/60 border border-rose-500/40 flex items-center justify-between text-[10px] font-mono text-rose-200 select-none shadow-sm">
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          <span>ST. JUDE'S PSYCHIATRIC FACILITY // WHEELCHAIR TANK INERTIA</span>
        </span>
        <span className="text-rose-300/80 font-bold">WARD LOCKDOWN</span>
      </div>
    </>
  );
}

// 5. Daydream Believer Dreamscape Effect
function DreamAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-purple-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-purple-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-purple-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-purple-500/15 to-transparent" />

      {/* Floating starry dream motes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 200, x: `${(i * 15 + 8) % 90}%`, opacity: 0 }}
          animate={{
            y: ['0%', '-120%'],
            x: [
              `${(i * 15 + 8) % 90}%`,
              `${((i * 15 + 8) % 90) + ((i % 2 === 0 ? 1 : -1) * 5)}%`
            ],
            opacity: [0, 0.7, 0.4, 0]
          }}
          transition={{
            duration: 9 + (i % 3) * 2,
            repeat: Infinity,
            delay: i * 1.1,
            ease: 'linear'
          }}
          className="absolute pointer-events-none z-0"
        >
          <div className="w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_10px_rgba(192,132,252,1)] blur-[0.4px]" />
        </motion.div>
      ))}

      {/* Dream Banner */}
      <div className="mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-between text-[10px] font-mono text-purple-200 select-none shadow-sm">
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>DREAM STATE MATRIX // PSYCHOLOGICAL NARRATIVE ODYSSEY</span>
        </span>
        <span className="text-purple-300/80 font-bold">SUBCONSCIOUS ARCHIVE</span>
      </div>
    </>
  );
}

// 6. Project Isla Archipelago Topography Effect
function IslandAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-teal-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-teal-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-teal-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-teal-500/15 to-transparent" />

      {/* Island Topography Banner */}
      <div className="mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl bg-teal-950/60 border border-teal-500/40 flex items-center justify-between text-[10px] font-mono text-teal-200 select-none shadow-sm">
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span>PERLIN NOISE ARCHIPELAGO // PROCEDURAL COASTLINE SYNTHESIS</span>
        </span>
        <span className="text-teal-300/80 font-bold">TOPOGRAPHY ENGINE</span>
      </div>
    </>
  );
}

// 7. LabR@z Biohazard Rodent Lab Effect
function LabratsAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-emerald-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-emerald-400/50 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-emerald-500/15 to-transparent" />

      {/* Labrats Banner */}
      <div className="mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl bg-emerald-950/70 border border-emerald-400/50 flex items-center justify-between text-[10px] font-mono text-emerald-200 select-none shadow-sm">
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase">
          <img
            src={getAssetUrl('/images/logos/labrats-logo-transparent.png')}
            alt="LabRats Logo"
            className="w-4 h-4 object-contain filter drop-shadow-[0_0_4px_rgba(74,222,128,0.8)]"
          />
          <span>BIO-ENGINEERING FACILITY 04 // CO-OP RODENT LAB ESCAPE</span>
        </span>
        <span className="text-emerald-300 font-bold">SUBJECT #04</span>
      </div>
    </>
  );
}

// 8. Chanceway Noir Casino Effect
function CasinoAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-amber-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-amber-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-amber-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-amber-500/15 to-transparent" />

      {/* Casino Banner */}
      <div className="mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-between text-[10px] font-mono text-amber-200 select-none shadow-sm">
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>JAZZ NOIR CASINO // PROCEDURAL CARD DECK &amp; DICE RUNTIME</span>
        </span>
        <span className="text-amber-300/80 font-bold">THE HOUSE ARCHIVE</span>
      </div>
    </>
  );
}

// 9. Baldi's Basics 2 Surreal Edutainment Effect
function BaldiAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-yellow-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-yellow-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-yellow-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-yellow-500/15 to-transparent" />

      {/* Baldi Banner */}
      <div className="mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl bg-yellow-950/60 border border-yellow-500/40 flex items-center justify-between text-[10px] font-mono text-yellow-200 select-none shadow-sm">
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          <span>90s SURREAL EDUTAINMENT // DECONSTRUCTED SCHOOLHOUSE LAB</span>
        </span>
        <span className="text-yellow-300/80 font-bold">MATHEMATICS PROTOCOL</span>
      </div>
    </>
  );
}

// 10. WaiwWai Turnpike Echoes Effect
function WaiwwaiAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-fuchsia-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-fuchsia-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-fuchsia-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-fuchsia-500/15 to-transparent" />

      {/* Turnpike Banner */}
      <div className="mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl bg-fuchsia-950/60 border border-fuchsia-500/40 flex items-center justify-between text-[10px] font-mono text-fuchsia-200 select-none shadow-sm">
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
          <span>THE TURNPIKE ECHOES // ATMOSPHERIC HIGHWAY NARRATIVE</span>
        </span>
        <span className="text-fuchsia-300/80 font-bold">HIGHWAY AUDIO LOGS</span>
      </div>
    </>
  );
}

function getProjectTheme(projectId) {
  switch (projectId) {
    case 'rastacats':
      return {
        containerClass:
          'bg-gradient-to-br from-[#06152b]/95 via-[#081d38]/95 to-[#051120]/98 border-cyan-400/50 hover:border-cyan-300 shadow-[0_0_55px_rgba(6,182,212,0.2)] hover:shadow-[0_0_70px_rgba(6,182,212,0.3)]',
        accentBadge: 'bg-cyan-950/80 border-cyan-400/40 text-cyan-200',
        renderAtmosphere: () => <FreezeAtmosphere />
      };
    case 'rem':
      return {
        containerClass:
          'bg-[#020306]/98 border-cyan-500/45 hover:border-cyan-300 shadow-[0_0_65px_rgba(6,182,212,0.18)] hover:shadow-[0_0_80px_rgba(6,182,212,0.28)]',
        accentBadge: 'bg-cyan-950/90 border-cyan-400/50 text-cyan-200',
        renderAtmosphere: () => <InkyMyndwellAtmosphere />
      };
    case 'planet-protectors':
      return {
        containerClass:
          'bg-gradient-to-br from-[#04150b]/95 via-[#072213]/95 to-[#031008]/98 border-emerald-500/50 hover:border-emerald-300 shadow-[0_0_55px_rgba(16,185,129,0.22)] hover:shadow-[0_0_75px_rgba(16,185,129,0.32)]',
        accentBadge: 'bg-emerald-950/80 border-emerald-400/40 text-emerald-200',
        renderAtmosphere: () => <LeavesAtmosphere />
      };
    case 'delirium':
      return {
        containerClass:
          'bg-gradient-to-br from-[#140608]/95 via-[#1e080b]/95 to-[#0d0305]/98 border-rose-600/50 hover:border-rose-400 shadow-[0_0_55px_rgba(225,29,72,0.24)] hover:shadow-[0_0_75px_rgba(225,29,72,0.35)]',
        accentBadge: 'bg-rose-950/80 border-rose-500/40 text-rose-200',
        renderAtmosphere: () => <AsylumAtmosphere />
      };
    case 'daydream':
      return {
        containerClass:
          'bg-gradient-to-br from-[#10071f]/95 via-[#180a30]/95 to-[#0a0414]/98 border-purple-500/50 hover:border-purple-300 shadow-[0_0_55px_rgba(168,85,247,0.22)] hover:shadow-[0_0_75px_rgba(168,85,247,0.32)]',
        accentBadge: 'bg-purple-950/80 border-purple-400/40 text-purple-200',
        renderAtmosphere: () => <DreamAtmosphere />
      };
    case 'project-isla':
      return {
        containerClass:
          'bg-gradient-to-br from-[#041419]/95 via-[#062027]/95 to-[#030e12]/98 border-teal-500/50 hover:border-teal-300 shadow-[0_0_55px_rgba(20,184,166,0.2)] hover:shadow-[0_0_75px_rgba(20,184,166,0.3)]',
        accentBadge: 'bg-teal-950/80 border-teal-400/40 text-teal-200',
        renderAtmosphere: () => <IslandAtmosphere />
      };
    case 'labraz':
      return {
        containerClass:
          'bg-gradient-to-br from-[#06170d]/95 via-[#0b2817]/95 to-[#041009]/98 border-emerald-400/50 hover:border-emerald-300 shadow-[0_0_55px_rgba(52,211,153,0.24)] hover:shadow-[0_0_75px_rgba(52,211,153,0.35)]',
        accentBadge: 'bg-emerald-950/90 border-emerald-400/50 text-emerald-200',
        renderAtmosphere: () => <LabratsAtmosphere />
      };
    case 'chanceway':
      return {
        containerClass:
          'bg-gradient-to-br from-[#140e06]/95 via-[#20160a]/95 to-[#0d0904]/98 border-amber-500/50 hover:border-amber-300 shadow-[0_0_55px_rgba(245,158,11,0.22)] hover:shadow-[0_0_75px_rgba(245,158,11,0.32)]',
        accentBadge: 'bg-amber-950/80 border-amber-400/40 text-amber-200',
        renderAtmosphere: () => <CasinoAtmosphere />
      };
    case 'baldis-basics-2':
      return {
        containerClass:
          'bg-gradient-to-br from-[#141205]/95 via-[#201c08]/95 to-[#0d0c03]/98 border-yellow-500/50 hover:border-yellow-300 shadow-[0_0_55px_rgba(234,179,8,0.22)] hover:shadow-[0_0_75px_rgba(234,179,8,0.32)]',
        accentBadge: 'bg-yellow-950/80 border-yellow-400/40 text-yellow-200',
        renderAtmosphere: () => <BaldiAtmosphere />
      };
    case 'waiwwai':
      return {
        containerClass:
          'bg-gradient-to-br from-[#150718]/95 via-[#220a26]/95 to-[#0d040f]/98 border-fuchsia-500/50 hover:border-fuchsia-300 shadow-[0_0_55px_rgba(217,70,239,0.22)] hover:shadow-[0_0_75px_rgba(217,70,239,0.32)]',
        accentBadge: 'bg-fuchsia-950/80 border-fuchsia-400/40 text-fuchsia-200',
        renderAtmosphere: () => <WaiwwaiAtmosphere />
      };
    default:
      return {
        containerClass:
          'bg-[#0a0c18]/90 border-white/10 hover:border-indigo-500/40 shadow-xl hover:shadow-[0_12px_45px_rgba(99,102,241,0.18)]',
        accentBadge: 'bg-indigo-950/70 border-indigo-500/35 text-indigo-200',
        renderAtmosphere: null
      };
  }
}

export default function ProjectCard({ project, onSelectProject }) {
  const versions = project.versions || project.splitPhases || null;
  const hasVersions = Boolean(versions && versions.length > 0);

  const [activeVersionIndex, setActiveVersionIndex] = useState(0);
  // 'overview' | 'code' | 'marketing'
  const [viewMode, setViewMode] = useState('overview');
  // Sub-tab inside 'marketing': 'live' (interactive 16:9 desktop viewport) | 'source' (literal repo code)
  const [marketingSubTab, setMarketingSubTab] = useState('live');
  const [activeRepoFileIdx, setActiveRepoFileIdx] = useState(0);

  const currentVersion = hasVersions ? versions[activeVersionIndex] : null;

  const activeTitle = project.title;
  const activeTagline = currentVersion?.label || currentVersion?.phaseSubtitle || project.tagline;
  const activeDesc = currentVersion?.summary || project.shortDesc;
  const activeHighlights = currentVersion?.highlights || project.highlights || [];
  const activeDeepDive = currentVersion?.technicalDeepDive || project.technicalDeepDive;
  const activeVideo =
    currentVersion?.videoPreview !== undefined
      ? currentVersion.videoPreview
      : currentVersion?.video !== undefined
      ? currentVersion.video
      : project.videoPreview || project.video;
  const activeImage = currentVersion?.image || project.image;
  const activeGallery =
    currentVersion?.gallery?.length > 0
      ? currentVersion.gallery
      : project.gallery?.length > 0
      ? project.gallery
      : activeImage
      ? [activeImage]
      : [];
  const activeEngine = currentVersion?.engine || project.engine;
  const activeDates = currentVersion?.dates || project.dates;

  const repoData = project.marketingSite?.repoSlug
    ? MARKETING_REPOS[project.marketingSite.repoSlug]
    : null;
  const repoFiles = repoData?.files || [];
  const currentRepoFile = repoFiles[activeRepoFileIdx] || repoFiles[0] || null;

  // Strictly reserved for actual playable browser games (e.g. Twine build)
  const isPlayableInBrowser =
    Boolean(project.links?.demo) && project.links.demo.startsWith('/games/');

  // Pass initialLightboxIndex when a user clicks a specific image/thumbnail on the card
  const handleOpenCaseStudy = (initialLightboxIndex = null) => {
    onSelectProject({
      ...project,
      initialVersionIndex: activeVersionIndex,
      initialLightboxIndex
    });
  };

  // Build action buttons list so we can lay them out symmetrically below the media without off-centre crowding
  const actionButtons = [];

  if (project.links?.itch) {
    actionButtons.push({
      key: 'itch',
      el: (
        <a
          key="itch"
          href={project.links.itch}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-rose-900/30 hover:scale-[1.02] active:scale-95 transition-all w-full"
        >
          <Gamepad2 className="w-4 h-4 shrink-0" />
          <span>Play on Itch.io</span>
        </a>
      )
    });
  }

  if (isPlayableInBrowser) {
    actionButtons.push({
      key: 'browser',
      el: (
        <a
          key="browser"
          href={getAssetUrl(project.links.demo)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-indigo-950/40 hover:scale-[1.02] active:scale-95 transition-all w-full"
        >
          <Gamepad2 className="w-4 h-4 shrink-0" />
          <span>Play in Browser</span>
        </a>
      )
    });
  }

  if (project.links?.gdd) {
    actionButtons.push({
      key: 'gdd',
      el: (
        <a
          key="gdd"
          href={getAssetUrl(project.links.gdd)}
          download
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600/25 hover:bg-amber-600/40 text-amber-200 font-semibold text-xs tracking-wider uppercase border border-amber-500/40 hover:scale-[1.02] active:scale-95 transition-all w-full"
        >
          <BookOpen className="w-4 h-4 text-amber-300 shrink-0" />
          <span>Download GDD</span>
        </a>
      )
    });
  }

  if (project.marketingSite) {
    actionButtons.push({
      key: 'marketing',
      el: (
        <button
          key="marketing"
          type="button"
          onClick={() => {
            setViewMode('marketing');
            setMarketingSubTab('live');
          }}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/25 hover:bg-emerald-600/40 text-emerald-200 font-semibold text-xs tracking-wider uppercase border border-emerald-500/40 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer w-full"
        >
          <Globe className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>Companion Site</span>
        </button>
      )
    });
  }

  if (project.links?.video) {
    actionButtons.push({
      key: 'video',
      el: (
        <a
          key="video"
          href={getAssetUrl(project.links.video)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600/25 hover:bg-red-600/40 text-red-200 font-semibold text-xs tracking-wider uppercase border border-red-500/40 hover:scale-[1.02] active:scale-95 transition-all w-full"
        >
          <Clapperboard className="w-4 h-4 text-red-400 shrink-0" />
          <span>YouTube Walkthrough</span>
        </a>
      )
    });
  }

  if (isSpecificRepo(project.links?.github)) {
    actionButtons.push({
      key: 'github',
      el: (
        <a
          key="github"
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-white/10 hover:scale-[1.02] active:scale-95 transition-all w-full"
        >
          <GithubIcon className="w-4 h-4 shrink-0" />
          <span>Source Code</span>
        </a>
      )
    });
  }

  if (isSpecificLinkedIn(project.links?.linkedin)) {
    actionButtons.push({
      key: 'linkedin',
      el: (
        <a
          key="linkedin"
          href={project.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-sky-300 hover:text-white font-semibold text-xs tracking-wider uppercase border border-[#0077b5]/30 hover:scale-[1.02] active:scale-95 transition-all w-full"
        >
          <LinkedinIcon className="w-4 h-4 shrink-0" />
          <span>Dev Post</span>
        </a>
      )
    });
  }

  // Always add Full Breakdown & Gallery button
  actionButtons.push({
    key: 'breakdown',
    el: (
      <button
        key="breakdown"
        type="button"
        onClick={() => handleOpenCaseStudy(null)}
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/35 text-indigo-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-indigo-500/35 hover:border-indigo-400/60 transition-all cursor-pointer w-full"
      >
        <BookOpen className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
        <span>Full Breakdown &amp; Gallery</span>
      </button>
    )
  });

  const isOddButtonCount = actionButtons.length % 2 === 1;

  const theme = getProjectTheme(project.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative rounded-3xl p-6 md:p-8 backdrop-blur-xl transition-all duration-300 border overflow-hidden ${theme.containerClass}`}
    >
      {/* Dynamic Game Atmospheric Layer (Freeze, Falling Leaves, Inky Black Myndwell, etc.) */}
      {theme.renderAtmosphere && theme.renderAtmosphere()}

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Details, Scoped Version Switcher, Interactive Mode Toggle & Breakdown */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Top Metadata Row: Discipline, Dates, Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-indigo-950/70 border border-indigo-500/35 text-indigo-200">
                {project.discipline}
              </span>

              <span className="text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/10">
                {activeDates}
              </span>

              {project.id === 'rem' && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/80 border border-cyan-400/40 text-cyan-200 shadow-sm">
                  <img
                    src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
                    alt="Myndwell Logo"
                    className="w-4 h-4 object-contain shrink-0"
                  />
                  <span>PROPERTY OF MYNDWELL INTERNATIONAL</span>
                </div>
              )}

              {project.id === 'delirium' && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-950/80 border border-red-500/40 text-red-200 shadow-sm">
                  <img
                    src={getAssetUrl('/images/logos/delirium-title-logo.png')}
                    alt="Delirium"
                    className="h-3.5 object-contain shrink-0"
                  />
                  <span className="text-[10px] uppercase tracking-wider text-red-300">ST. JUDE'S INERTIA</span>
                </div>
              )}

              {project.marketingSite && (
                <button
                  type="button"
                  onClick={() => setViewMode('marketing')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/80 transition-colors cursor-pointer"
                >
                  <Globe className="w-3 h-3 text-emerald-400" />
                  <span>Embedded Companion Site &amp; Code</span>
                </button>
              )}

              {project.gradeBadge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  <Award className="w-3 h-3 text-emerald-400" />
                  {project.gradeBadge}
                </span>
              )}
            </div>

            {/* Title */}
            <h3
              onClick={() => handleOpenCaseStudy(null)}
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1.5 font-['Syne',sans-serif] group-hover:text-indigo-200 transition-colors cursor-pointer"
            >
              {activeTitle}
            </h3>

            {/* Tagline & Engine */}
            <p className="text-xs sm:text-sm font-semibold text-indigo-300 mb-4 flex flex-wrap items-center gap-2">
              <span>{activeTagline}</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-xs text-slate-400">{activeEngine}</span>
            </p>

            {/* SCOPED PROJECT ITERATION SWITCHER (Specific to Rastacats & Daydream Believer) */}
            {hasVersions && (
              <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-[#080b18] to-violet-950/35 border border-indigo-500/40 shadow-inner">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <History className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-200">
                      {project.title} Iteration Switcher:
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-500/35 px-2 py-0.5 rounded-md">
                    Viewing: {currentVersion?.badge || currentVersion?.label}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {versions.map((ver, idx) => {
                    const isSelected = activeVersionIndex === idx;
                    return (
                      <button
                        key={ver.id || idx}
                        type="button"
                        onClick={() => setActiveVersionIndex(idx)}
                        className={`px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer flex items-center justify-between gap-2 border ${
                          isSelected
                            ? 'bg-gradient-to-r from-indigo-600/80 to-violet-600/80 text-white border-indigo-300/70 shadow-md shadow-indigo-950/70'
                            : 'bg-[#05070f]/80 hover:bg-white/[0.06] text-slate-400 hover:text-slate-200 border-white/10'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full shrink-0 ${
                                isSelected ? 'bg-emerald-300 animate-pulse' : 'bg-slate-600'
                              }`}
                            />
                            <span className="truncate">{ver.label || ver.phaseLabel}</span>
                          </div>
                          {ver.dates && (
                            <div className="text-[10px] font-mono text-indigo-200/80 pl-4 mt-0.5">
                              {ver.dates}
                            </div>
                          )}
                        </div>
                        {ver.badge && (
                          <span
                            className={`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                              isSelected
                                ? 'bg-black/35 text-emerald-300'
                                : 'bg-white/5 text-slate-400'
                            }`}
                          >
                            {ver.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* On-Card View Mode Switcher: [What I Built] | [Under the Hood: Maths & Logic] | [Companion Site & Repo Code] */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#060811] border border-white/10 mb-4 w-fit">
              <button
                type="button"
                onClick={() => setViewMode('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'overview'
                    ? 'bg-indigo-600/35 text-white border border-indigo-500/50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>What I Built</span>
              </button>

              {(activeDeepDive || project.codeSnippet) && (
                <button
                  type="button"
                  onClick={() => setViewMode('code')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'code'
                      ? 'bg-indigo-600/35 text-indigo-200 border border-indigo-500/50 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Under the Hood: Maths &amp; Logic</span>
                </button>
              )}

              {project.marketingSite && (
                <button
                  type="button"
                  onClick={() => setViewMode('marketing')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'marketing'
                      ? 'bg-emerald-600/30 text-emerald-200 border border-emerald-500/50 shadow-sm'
                      : 'text-emerald-300/80 hover:text-emerald-200'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Companion Website &amp; Repo Code</span>
                </button>
              )}
            </div>

            {viewMode === 'overview' && (
              <>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  {activeDesc}
                </p>

                <div className="space-y-2.5 mb-5">
                  {activeHighlights.slice(0, 4).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* System Pipeline Strip */}
                {project.architectureNodes && project.architectureNodes.length > 0 && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-indigo-300/90 mb-2.5 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                      <span>System Architecture Pipeline</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {project.architectureNodes.map((node, nIdx) => (
                        <div
                          key={nIdx}
                          className="p-2.5 rounded-xl bg-[#060812] border border-white/10"
                        >
                          <div className="text-[11px] font-bold text-white truncate">
                            {node.label}
                          </div>
                          <div className="text-[10px] font-mono text-indigo-300/80 truncate mt-0.5">
                            {node.sub}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {viewMode === 'code' && (
              <div className="space-y-4">
                {activeDeepDive && (
                  <div className="p-4 rounded-2xl bg-indigo-950/25 border border-indigo-500/30">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-bold mb-1.5 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Engineering Problem &amp; How I Solved It</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {activeDeepDive}
                    </p>
                  </div>
                )}

                {project.codeSnippet && (
                  <div className="rounded-2xl bg-[#05070e] border border-white/10 overflow-hidden">
                    <div className="px-3.5 py-2 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                        Implementation Logic / Shader Snippet
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {activeEngine}
                      </span>
                    </div>
                    <pre className="p-3.5 text-[11px] sm:text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}

            {viewMode === 'marketing' && project.marketingSite && (
              <div className="rounded-2xl bg-[#05070f] border border-emerald-500/35 overflow-hidden shadow-2xl">
                {/* Marketing Sub-Header */}
                <div className="p-3.5 bg-emerald-950/25 border-b border-emerald-500/25 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <Globe className="w-4 h-4 text-emerald-400" />
                      <span>{project.marketingSite.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      {project.marketingSite.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-white/10">
                    <button
                      type="button"
                      onClick={() => setMarketingSubTab('live')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        marketingSubTab === 'live'
                          ? 'bg-emerald-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Globe className="w-3 h-3" />
                      <span>16:9 Live Site</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMarketingSubTab('source')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        marketingSubTab === 'source'
                          ? 'bg-indigo-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <FileCode className="w-3 h-3" />
                      <span>Repo Code ({repoFiles.length} Files)</span>
                    </button>
                  </div>
                </div>

                {marketingSubTab === 'live' ? (
                  <div>
                    <EmbeddedBrowserViewport
                      src={getAssetUrl(project.marketingSite.path)}
                      title={project.marketingSite.title}
                    />
                    <div className="px-3.5 py-2.5 bg-[#080b16] border-t border-white/10 flex flex-wrap items-center justify-end gap-4 text-xs">
                      <a
                        href={project.marketingSite.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-300 hover:text-white"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub Repository</span>
                      </a>
                      <a
                        href={getAssetUrl(project.marketingSite.path)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-300 hover:text-emerald-200"
                      >
                        <span>Open Fullscreen in New Tab</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* File Selector Bar */}
                    <div className="px-3 py-2 bg-[#090d1a] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {repoFiles.map((file, fIdx) => (
                          <button
                            key={file.name}
                            type="button"
                            onClick={() => setActiveRepoFileIdx(fIdx)}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                              activeRepoFileIdx === fIdx
                                ? 'bg-indigo-600/40 text-white border border-indigo-400/50 font-bold'
                                : 'bg-white/5 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            <FileCode className="w-3 h-3 text-indigo-400" />
                            <span>{file.name}</span>
                            <span className="text-[10px] text-emerald-300">
                              ({file.totalLines} lines)
                            </span>
                          </button>
                        ))}
                      </div>
                      <a
                        href={project.marketingSite.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-indigo-300 hover:text-white"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View on GitHub</span>
                      </a>
                    </div>

                    {/* Full Untruncated Source Code Viewer */}
                    {currentRepoFile && (
                      <pre className="p-4 text-[11px] font-mono text-slate-200 overflow-x-auto max-h-[360px] overflow-y-auto leading-relaxed bg-[#04060c]">
                        <code>{currentRepoFile.code}</code>
                      </pre>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Vertically Balanced Media Viewport, Gallery & Symmetrical Action Dock */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-3.5">
          {activeVideo ? (
            /* Clicking the VIDEO opens the Overview modal */
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleOpenCaseStudy(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenCaseStudy(null);
                }
              }}
              aria-label={`Open ${activeTitle} overview`}
              className="relative group/vid cursor-pointer overflow-hidden rounded-2xl bg-black border border-white/15 shadow-2xl aspect-[16/10] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <video
                key={activeVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={activeImage ? getAssetUrl(activeImage) : undefined}
                className="w-full h-full object-cover group-hover/vid:scale-105 transition-transform duration-500 ease-out"
              >
                <source src={getAssetUrl(activeVideo)} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/vid:opacity-100 transition-opacity" />

              {project.id === 'rem' && (
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#070e1a]/85 backdrop-blur-md border border-cyan-400/40 text-[10px] font-mono text-cyan-200 pointer-events-none z-10 flex items-center gap-1.5 shadow-md">
                  <img
                    src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
                    alt="Myndwell Logo"
                    className="w-3.5 h-3.5 object-contain"
                  />
                  <span>MYNDWELL CORP // ARCHIVE</span>
                </div>
              )}

              {project.id === 'delirium' && (
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-lg bg-black/85 backdrop-blur-md border border-red-500/40 pointer-events-none z-10 flex items-center shadow-md">
                  <img
                    src={getAssetUrl('/images/logos/delirium-title-logo.png')}
                    alt="Delirium"
                    className="h-3 object-contain"
                  />
                </div>
              )}

              <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white pointer-events-none z-10 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {hasVersions
                  ? `${currentVersion?.badge || `Version ${activeVersionIndex + 1}`} Capture`
                  : 'Gameplay Capture'}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-[#090b16]/90 backdrop-blur-md border border-indigo-500/40 text-xs text-white opacity-0 group-hover/vid:opacity-100 transition-all duration-300 z-10">
                <span className="font-semibold text-[11px]">
                  Click Video to Open Project Overview
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>
          ) : (
            /* Clicking the IMAGE opens that specific image full-screened inside the Overview modal */
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleOpenCaseStudy(0)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenCaseStudy(0);
                }
              }}
              aria-label={`Open ${activeTitle} full-screen image`}
              className="relative group/img cursor-pointer overflow-hidden rounded-2xl bg-slate-950 border border-white/15 shadow-2xl aspect-[16/10] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <img
                src={getAssetUrl(activeImage)}
                alt={activeTitle}
                className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-[#090b16]/90 backdrop-blur-md border border-indigo-500/40 text-xs text-white opacity-0 group-hover/img:opacity-100 transition-all duration-300 z-10">
                <span className="font-semibold text-[11px]">
                  Click Image to Inspect Fullscreen
                </span>
                <ZoomIn className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>
          )}

          {/* Gallery Thumbnails: Clicking any thumbnail opens THAT exact image full-screened in the Overview modal */}
          {activeGallery.length > 1 && (
            <div
              className={`grid gap-2.5 ${
                activeGallery.length === 2
                  ? 'grid-cols-2'
                  : activeGallery.length === 3
                  ? 'grid-cols-3'
                  : 'grid-cols-4'
              }`}
            >
              {activeGallery.slice(0, 4).map((thumb, tIdx) => (
                <button
                  key={tIdx}
                  type="button"
                  onClick={() => handleOpenCaseStudy(tIdx)}
                  className="relative rounded-xl overflow-hidden aspect-[16/10] border border-white/10 hover:border-indigo-400/70 bg-slate-950 group/t cursor-pointer shadow-md"
                  title="Click to open this image fullscreen in overview"
                >
                  <img
                    src={getAssetUrl(thumb)}
                    alt={`${activeTitle} capture ${tIdx + 1}`}
                    className="w-full h-full object-cover group-hover/t:scale-110 transition-transform duration-300 opacity-85 group-hover/t:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/t:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white drop-shadow" />
                  </div>
                  {tIdx === 3 && activeGallery.length > 4 && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-[11px] font-mono font-bold text-indigo-200">
                      +{activeGallery.length - 4} More
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Symmetrical Action Buttons Dock Below Media (Fills right column cleanly & never crowds off-centre) */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {actionButtons.map((btn, bIdx) => {
              const isLastOdd = isOddButtonCount && bIdx === actionButtons.length - 1;
              return (
                <div key={btn.key} className={isLastOdd ? 'sm:col-span-2' : ''}>
                  {btn.el}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
