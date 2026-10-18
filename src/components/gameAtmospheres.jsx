import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/assetUrl';

// 1. Rastacats Sub-Zero Freeze Effect
export function FreezeAtmosphere({ isModal = false, isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      {/* Frost etched crystal corners */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-300/50 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-cyan-400/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-300/50 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-cyan-400/15 to-transparent" />

      {/* Drifting ice crystals / frost glints */}
      {Array.from({ length: isCompact ? 5 : 8 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -15, x: `${(i * 14 + 7) % 90}%`, opacity: 0 }}
          animate={{
            y: ['0%', '100%'],
            x: [
              `${(i * 14 + 7) % 90}%`,
              `${((i * 14 + 7) % 90) + ((i % 2 === 0 ? 1 : -1) * 4)}%`
            ],
            opacity: [0, 0.85, 0.4, 0]
          }}
          transition={{
            duration: 6 + (i % 3) * 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: 'linear'
          }}
          className="absolute pointer-events-none z-0"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-200 shadow-[0_0_8px_rgba(56,189,248,1)] blur-[0.3px]" />
        </motion.div>
      ))}

      {/* Frost Protocol Banner */}
      <div
        className={`${
          isModal ? 'mb-5 p-3 rounded-2xl' : isCompact ? 'mb-2.5 p-1.5 rounded-xl' : 'mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl'
        } bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-between text-[10px] font-mono text-cyan-200 select-none shadow-sm relative z-10`}
      >
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse shrink-0" />
          <span className="truncate">SUB-ZERO CRYOGENICS // CURVED-WORLD ICE BIOME</span>
        </span>
        <span className="text-cyan-300/80 font-bold shrink-0 text-[9px]">FROST PROTOCOL</span>
      </div>
    </>
  );
}

// 2. Planet Protectors Falling Leaves Effect
export function LeavesAtmosphere({ isModal = false, isCompact = false }) {
  const leafPaths = [
    'M12 2C8 6 4 10 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 10 16 6 12 2Z',
    'M12 2C7 7 6 13 8 18C10 21 12 22 12 22C12 22 14 21 16 18C18 13 17 7 12 2Z'
  ];

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-emerald-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-emerald-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-emerald-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-emerald-500/15 to-transparent" />

      {/* Falling leaves drifting and swaying gently across the container */}
      {Array.from({ length: isCompact ? 5 : 8 }).map((_, i) => (
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
            delay: i * 0.8,
            ease: 'linear'
          }}
          className="absolute pointer-events-none z-0"
        >
          <svg
            width={isCompact ? 14 : 18 + (i % 3) * 4}
            height={isCompact ? 16 : 22 + (i % 3) * 4}
            viewBox="0 0 24 24"
            fill={i % 2 === 0 ? '#10b981' : '#34d399'}
            className="opacity-55 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          >
            <path d={leafPaths[i % leafPaths.length]} />
          </svg>
        </motion.div>
      ))}

      {/* Forest Canopy Banner */}
      <div
        className={`${
          isModal ? 'mb-5 p-3 rounded-2xl' : isCompact ? 'mb-2.5 p-1.5 rounded-xl' : 'mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl'
        } bg-emerald-950/70 border border-emerald-500/40 flex items-center justify-between text-[10px] font-mono text-emerald-200 select-none shadow-sm relative z-10`}
      >
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="truncate">ECOSYSTEM REGENERATION ENGINE // PROCEDURAL CANOPY</span>
        </span>
        <span className="text-emerald-300/80 font-bold shrink-0 text-[9px]">CANOPY BIOME</span>
      </div>
    </>
  );
}

// 3. REM Inky Black & Clinical Myndwell International Effect
export function InkyMyndwellAtmosphere({ isModal = false, isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[#020306] pointer-events-none -z-10 rounded-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(circle_at_bottom_left,rgba(8,145,178,0.14),transparent_70%)] pointer-events-none" />

      {/* Inky fluid dispersion cloud */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.38, 0.2]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-950/35 to-black blur-3xl pointer-events-none"
      />

      {/* Clinical Myndwell International Header Banner */}
      <div
        className={`${
          isModal ? 'mb-5 p-3 rounded-2xl' : isCompact ? 'mb-2.5 p-1.5 rounded-xl' : 'mb-4 -mt-2 -mx-2 px-4 py-2 rounded-2xl'
        } bg-gradient-to-r from-[#06111f] via-[#091a30] to-[#06111f] border border-cyan-400/45 flex flex-wrap items-center justify-between gap-2 shadow-lg select-none relative z-10`}
      >
        <div className="flex items-center gap-2 truncate">
          <img
            src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
            alt="Myndwell Logo"
            className={`${isCompact ? 'w-4 h-4' : 'w-5 h-5'} object-contain shrink-0`}
          />
          <div className="flex flex-col truncate">
            <span className="text-[11px] font-bold font-mono tracking-wider text-white uppercase truncate font-['Syne',sans-serif]">
              MYNDWELL INTERNATIONAL // DIVISION OF NEURAL PARTITIONING
            </span>
            {!isCompact && (
              <span className="text-[10px] font-mono text-cyan-300/80 truncate">
                SURGICAL TRAUMA REMOVAL PROTOCOL • RESTRICTED ARCHIVE
              </span>
            )}
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-cyan-950/90 border border-cyan-400/40 text-[9px] font-mono font-bold text-cyan-300 uppercase tracking-widest shrink-0 shadow-sm">
          CONFIDENTIAL
        </span>
      </div>
    </>
  );
}

// 4. Delirium VR Psychiatric Asylum Effect
export function AsylumAtmosphere({ isModal = false, isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-rose-500/50 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-rose-600/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-rose-500/50 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-rose-600/15 to-transparent" />

      {/* Hospital Warning Banner */}
      <div
        className={`${
          isModal ? 'mb-5 p-3 rounded-2xl' : isCompact ? 'mb-2.5 p-1.5 rounded-xl' : 'mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl'
        } bg-rose-950/70 border border-rose-500/45 flex items-center justify-between text-[10px] font-mono text-rose-200 select-none shadow-sm relative z-10`}
      >
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shrink-0" />
          <span className="truncate">ST. JUDE'S PSYCHIATRIC FACILITY // WHEELCHAIR TANK INERTIA</span>
        </span>
        <span className="text-rose-300/80 font-bold shrink-0 text-[9px]">WARD LOCKDOWN</span>
      </div>
    </>
  );
}

// 5. Daydream Believer Dreamscape Effect
export function DreamAtmosphere({ isModal = false, isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-purple-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-purple-500/15 to-transparent" />

      {/* Floating starry dream motes */}
      {Array.from({ length: isCompact ? 4 : 6 }).map((_, i) => (
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
            delay: i * 1.0,
            ease: 'linear'
          }}
          className="absolute pointer-events-none z-0"
        >
          <div className="w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_10px_rgba(192,132,252,1)] blur-[0.4px]" />
        </motion.div>
      ))}

      {/* Dream Banner */}
      <div
        className={`${
          isModal ? 'mb-5 p-3 rounded-2xl' : isCompact ? 'mb-2.5 p-1.5 rounded-xl' : 'mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl'
        } bg-purple-950/70 border border-purple-500/40 flex items-center justify-between text-[10px] font-mono text-purple-200 select-none shadow-sm relative z-10`}
      >
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shrink-0" />
          <span className="truncate">DREAM STATE MATRIX // PSYCHOLOGICAL NARRATIVE</span>
        </span>
        <span className="text-purple-300/80 font-bold shrink-0 text-[9px]">SUBCONSCIOUS</span>
      </div>
    </>
  );
}

// 6. Project Isla Archipelago Topography Effect
export function IslandAtmosphere({ isModal = false, isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-teal-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-teal-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-teal-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-teal-500/15 to-transparent" />

      {/* Island Topography Banner */}
      <div
        className={`${
          isModal ? 'mb-5 p-3 rounded-2xl' : isCompact ? 'mb-2.5 p-1.5 rounded-xl' : 'mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl'
        } bg-teal-950/70 border border-teal-500/40 flex items-center justify-between text-[10px] font-mono text-teal-200 select-none shadow-sm relative z-10`}
      >
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
          <span className="truncate">PERLIN NOISE ARCHIPELAGO // PROCEDURAL COASTLINES</span>
        </span>
        <span className="text-teal-300/80 font-bold shrink-0 text-[9px]">TOPOGRAPHY</span>
      </div>
    </>
  );
}

// 7. LabR@z Biohazard Rodent Lab Effect
export function LabratsAtmosphere({ isModal = false, isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-emerald-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-emerald-400/50 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-emerald-500/15 to-transparent" />

      {/* Labrats Banner */}
      <div
        className={`${
          isModal ? 'mb-5 p-3 rounded-2xl' : isCompact ? 'mb-2.5 p-1.5 rounded-xl' : 'mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl'
        } bg-emerald-950/80 border border-emerald-400/50 flex items-center justify-between text-[10px] font-mono text-emerald-200 select-none shadow-sm relative z-10`}
      >
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase truncate">
          <img
            src={getAssetUrl('/images/logos/labrats-logo-transparent.png')}
            alt="LabRats Logo"
            className="w-4 h-4 object-contain filter drop-shadow-[0_0_4px_rgba(74,222,128,0.8)] shrink-0"
          />
          <span className="truncate">BIO-ENGINEERING FACILITY 04 // CO-OP ESCAPE</span>
        </span>
        <span className="text-emerald-300 font-bold shrink-0 text-[9px]">SUBJECT #04</span>
      </div>
    </>
  );
}

// 8. Chanceway Noir Casino Effect
export function CasinoAtmosphere({ isModal = false, isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-amber-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-amber-500/15 to-transparent" />

      {/* Casino Banner */}
      <div
        className={`${
          isModal ? 'mb-5 p-3 rounded-2xl' : isCompact ? 'mb-2.5 p-1.5 rounded-xl' : 'mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl'
        } bg-amber-950/70 border border-amber-500/40 flex items-center justify-between text-[10px] font-mono text-amber-200 select-none shadow-sm relative z-10`}
      >
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
          <span className="truncate">JAZZ NOIR CASINO // PROCEDURAL DECK &amp; DICE</span>
        </span>
        <span className="text-amber-300/80 font-bold shrink-0 text-[9px]">THE HOUSE</span>
      </div>
    </>
  );
}

// 9. Baldi's Basics 2 Surreal Edutainment Effect
export function BaldiAtmosphere({ isModal = false, isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-yellow-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-yellow-500/15 to-transparent" />

      {/* Baldi Banner */}
      <div
        className={`${
          isModal ? 'mb-5 p-3 rounded-2xl' : isCompact ? 'mb-2.5 p-1.5 rounded-xl' : 'mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl'
        } bg-yellow-950/70 border border-yellow-500/40 flex items-center justify-between text-[10px] font-mono text-yellow-200 select-none shadow-sm relative z-10`}
      >
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
          <span className="truncate">90s SURREAL EDUTAINMENT // SCHOOLHOUSE LAB</span>
        </span>
        <span className="text-yellow-300/80 font-bold shrink-0 text-[9px]">MATH PROTOCOL</span>
      </div>
    </>
  );
}

// 10. WaiwWai Turnpike Echoes Effect
export function WaiwwaiAtmosphere({ isModal = false, isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-fuchsia-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-fuchsia-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-fuchsia-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-fuchsia-500/15 to-transparent" />

      {/* Turnpike Banner */}
      <div
        className={`${
          isModal ? 'mb-5 p-3 rounded-2xl' : isCompact ? 'mb-2.5 p-1.5 rounded-xl' : 'mb-4 -mt-2 -mx-2 px-3.5 py-1.5 rounded-2xl'
        } bg-fuchsia-950/70 border border-fuchsia-500/40 flex items-center justify-between text-[10px] font-mono text-fuchsia-200 select-none shadow-sm relative z-10`}
      >
        <span className="flex items-center gap-2 font-bold tracking-wider uppercase truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse shrink-0" />
          <span className="truncate">THE TURNPIKE ECHOES // HIGHWAY NARRATIVE</span>
        </span>
        <span className="text-fuchsia-300/80 font-bold shrink-0 text-[9px]">AUDIO LOGS</span>
      </div>
    </>
  );
}

/**
 * Universal atmosphere dispatcher component.
 */
export function ProjectAtmosphere({ projectId, isModal = false, isCompact = false }) {
  switch (projectId) {
    case 'rastacats':
      return <FreezeAtmosphere isModal={isModal} isCompact={isCompact} />;
    case 'rem':
      return <InkyMyndwellAtmosphere isModal={isModal} isCompact={isCompact} />;
    case 'planet-protectors':
      return <LeavesAtmosphere isModal={isModal} isCompact={isCompact} />;
    case 'delirium':
      return <AsylumAtmosphere isModal={isModal} isCompact={isCompact} />;
    case 'daydream':
      return <DreamAtmosphere isModal={isModal} isCompact={isCompact} />;
    case 'project-isla':
      return <IslandAtmosphere isModal={isModal} isCompact={isCompact} />;
    case 'labraz':
    case 'labrats':
      return <LabratsAtmosphere isModal={isModal} isCompact={isCompact} />;
    case 'chanceway':
      return <CasinoAtmosphere isModal={isModal} isCompact={isCompact} />;
    case 'baldis-basics-2':
      return <BaldiAtmosphere isModal={isModal} isCompact={isCompact} />;
    case 'waiwwai':
      return <WaiwwaiAtmosphere isModal={isModal} isCompact={isCompact} />;
    default:
      return null;
  }
}
