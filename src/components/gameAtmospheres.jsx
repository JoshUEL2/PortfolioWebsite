import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/assetUrl';

// 1. Rastacats Sub-Zero Freeze Effect with Physical Hanging Icicle SVGs & Ice Crystals
export function FreezeAtmosphere({ isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.22),transparent_70%)] pointer-events-none rounded-3xl" />

      {/* Physical Hanging SVG Icicle Trim along the Top Rim of the Holder */}
      <div className="absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden">
        <svg
          viewBox="0 0 600 70"
          preserveAspectRatio="none"
          className="w-full h-9 sm:h-12 text-cyan-200 drop-shadow-[0_2px_8px_rgba(6,182,212,0.8)]"
        >
          <defs>
            <linearGradient id="icicleFacetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#7dd3fc" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="icicleBackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Main Icicle Spine */}
          <path
            d="M0,0 L600,0 L600,6 Q585,8 575,28 L570,55 L565,28 Q555,8 540,6 Q525,8 515,35 L510,68 L505,35 Q495,8 480,6 Q465,8 455,25 L450,45 L445,25 Q435,8 420,6 Q405,8 395,38 L390,70 L385,38 Q375,8 360,6 Q345,8 335,22 L330,42 L325,22 Q315,8 300,6 Q285,8 275,32 L270,62 L265,32 Q255,8 240,6 Q225,8 215,24 L210,44 L205,24 Q195,8 180,6 Q165,8 155,36 L150,68 L145,36 Q135,8 120,6 Q105,8 95,26 L90,48 L85,26 Q75,8 60,6 Q45,8 35,32 L30,58 L25,32 Q15,8 0,6 Z"
            fill="url(#icicleFacetGrad)"
          />
          {/* Translucent Highlight Shards */}
          <path
            d="M28,0 L32,54 L30,58 L28,0 Z M148,0 L152,64 L150,68 L148,0 Z M268,0 L272,58 L270,62 L268,0 Z M388,0 L392,66 L390,70 L388,0 Z M508,0 L512,64 L510,68 L508,0 Z M568,0 L572,51 L570,55 L568,0 Z"
            fill="#ffffff"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* Frost-Etched Corner Dendritic Crystal SVGs */}
      <div className="absolute top-2 left-2 w-14 h-14 pointer-events-none text-cyan-300/40">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="2.5">
          <line x1="10" y1="10" x2="90" y2="90" />
          <line x1="10" y1="90" x2="90" y2="100" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="10" y1="50" x2="90" y2="50" />
          {/* Ice Crystal Notches */}
          <path d="M50 30 L40 20 M50 30 L60 20" />
          <path d="M50 70 L40 80 M50 70 L60 80" />
          <path d="M30 50 L20 40 M30 50 L20 60" />
          <path d="M70 50 L80 40 M70 50 L80 60" />
        </svg>
      </div>
      <div className="absolute top-2 right-2 w-14 h-14 pointer-events-none text-cyan-300/40 rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="2.5">
          <line x1="10" y1="10" x2="90" y2="90" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <path d="M50 30 L40 20 M50 30 L60 20" />
          <path d="M50 70 L40 80 M50 70 L60 80" />
        </svg>
      </div>

      {/* Drifting Crystalline Ice Glints & Frost Shards */}
      {Array.from({ length: isCompact ? 6 : 10 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -15, x: `${(i * 12 + 6) % 92}%`, opacity: 0, rotate: 0 }}
          animate={{
            y: ['0%', '100%'],
            x: [
              `${(i * 12 + 6) % 92}%`,
              `${((i * 12 + 6) % 92) + ((i % 2 === 0 ? 1 : -1) * 5)}%`
            ],
            rotate: [0, (i % 2 === 0 ? 180 : -180)],
            opacity: [0, 0.9, 0.5, 0]
          }}
          transition={{
            duration: 6 + (i % 3) * 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: 'linear'
          }}
          className="absolute pointer-events-none z-0 transform-gpu will-change-transform"
        >
          {/* Shimmering Hexagonal Ice Shard */}
          <div className="w-2 h-2 rounded-[2px] bg-gradient-to-br from-white via-cyan-200 to-cyan-400 shadow-[0_0_10px_rgba(56,189,248,1)] rotate-45" />
        </motion.div>
      ))}
    </>
  );
}

// 2. REM Inky Black & Clinical Myndwell International with Physical Dripping Droplets
export function InkyMyndwellAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[#020306] pointer-events-none -z-10 rounded-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(circle_at_bottom_left,rgba(8,145,178,0.14),transparent_70%)] pointer-events-none" />

      {/* Physical Viscous Inky Drip Shelf Along Top Edge */}
      <div className="absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden">
        <svg
          viewBox="0 0 600 60"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-11 text-[#010204] drop-shadow-[0_4px_10px_rgba(0,0,0,1)]"
        >
          <path
            d="M0,0 L600,0 L600,8 Q580,10 570,25 Q560,50 555,54 Q550,54 540,25 Q530,10 500,8 Q480,10 465,30 Q450,56 445,58 Q440,58 425,30 Q410,10 380,8 Q360,10 350,22 Q340,40 335,42 Q330,42 320,22 Q310,10 270,8 Q250,10 240,28 Q230,52 225,54 Q220,54 210,28 Q200,10 160,8 Q140,10 130,24 Q120,44 115,46 Q110,46 100,24 Q90,10 60,8 Q40,10 30,26 Q20,48 15,50 Q10,50 0,26 Z"
            fill="#010204"
            stroke="#083344"
            strokeWidth="1"
          />
        </svg>

        {/* Physical Viscous Droplets Detaching & Falling with Surface Tension */}
        {[15, 115, 225, 335, 445, 555].map((xPos, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 8, scaleY: 0.8, opacity: 0 }}
            animate={{
              y: [8, 25, 160],
              scaleY: [0.8, 2.0, 1.3],
              opacity: [0, 0.95, 0]
            }}
            transition={{
              duration: 2.3 + (idx % 3) * 0.4,
              delay: idx * 0.35,
              repeat: Infinity,
              ease: [0.5, 0, 1, 1]
            }}
            style={{ left: `${(xPos / 600) * 100}%` }}
            className="absolute pointer-events-none transform-gpu will-change-transform"
          >
            <svg width="8" height="18" viewBox="0 0 8 18" className="filter drop-shadow-[0_0_4px_rgba(6,182,212,0.9)]">
              <path
                d="M4,0 C4,0 8,10 8,14 C8,16.2 6.2,18 4,18 C1.8,18 0,16.2 0,14 C0,10 4,0 4,0 Z"
                fill="#020617"
                stroke="#06b6d4"
                strokeWidth="0.8"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Inky Fluid Dispersion Cloud */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.22, 0.4, 0.22]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-950/40 to-black blur-3xl pointer-events-none transform-gpu will-change-transform"
      />
    </>
  );
}

// 3. Planet Protectors Falling Leaves Effect with Multi-Veined Botanical SVGs
export function LeavesAtmosphere({ isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_65%)] pointer-events-none rounded-3xl" />

      {/* Overhanging Living Botanical Vine Tendrils along Top Rim */}
      <div className="absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden">
        <svg viewBox="0 0 600 40" preserveAspectRatio="none" className="w-full h-6 text-emerald-500/40">
          <path
            d="M0,0 L600,0 L600,4 Q570,12 550,6 Q530,16 510,8 Q470,18 440,6 Q410,16 380,8 Q340,18 310,6 Q270,16 240,8 Q200,18 170,6 Q130,16 100,8 Q60,18 30,6 L0,4 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Multi-veined Falling Leaves Swaying Gently Across Container */}
      {Array.from({ length: isCompact ? 6 : 9 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: -25,
            x: `${(i * 12 + 4) % 92}%`,
            rotate: i * 40,
            opacity: 0
          }}
          animate={{
            y: ['0%', '115%'],
            x: [
              `${(i * 12 + 4) % 92}%`,
              `${((i * 12 + 4) % 92) + ((i % 2 === 0 ? 1 : -1) * 7)}%`,
              `${(i * 12 + 4) % 92}%`
            ],
            rotate: [i * 40, i * 40 + 160, i * 40 + 320],
            opacity: [0, 0.85, 0.75, 0]
          }}
          transition={{
            duration: 8 + (i % 4) * 2,
            repeat: Infinity,
            delay: i * 0.75,
            ease: 'linear'
          }}
          className="absolute pointer-events-none z-0 transform-gpu will-change-transform"
        >
          {/* Detailed Botanical SVG Leaf with Veins */}
          <svg
            width={isCompact ? 16 : 22}
            height={isCompact ? 20 : 28}
            viewBox="0 0 24 32"
            className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
          >
            <path
              d="M12 2 C6 7 2 14 2 20 C2 26 6.5 30 12 30 C17.5 30 22 26 22 20 C22 14 18 7 12 2 Z"
              fill={i % 2 === 0 ? '#10b981' : '#059669'}
              opacity="0.85"
            />
            {/* Center leaf vein */}
            <path d="M12 4 L12 28" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
            {/* Side veins */}
            <path d="M12 10 L6 14 M12 10 L18 14" stroke="#6ee7b7" strokeWidth="1" strokeLinecap="round" />
            <path d="M12 16 L5 21 M12 16 L19 21" stroke="#6ee7b7" strokeWidth="1" strokeLinecap="round" />
            <path d="M12 22 L7 26 M12 22 L17 26" stroke="#6ee7b7" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}

// 4. Delirium VR Psychiatric Asylum Effect with Animated EKG Wave
export function AsylumAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-rose-500/50 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-rose-600/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-rose-500/50 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-rose-600/15 to-transparent" />

      {/* Animated EKG Monitor Line */}
      <div className="absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden h-7">
        <svg viewBox="0 0 600 30" preserveAspectRatio="none" className="w-full h-full stroke-rose-400/60 fill-none" strokeWidth="1.5">
          <path d="M0 15 L180 15 L190 5 L200 25 L210 2 L220 22 L230 15 L380 15 L390 5 L400 25 L410 2 L420 22 L430 15 L600 15" />
        </svg>
      </div>
    </>
  );
}

// 5. Daydream Believer Dreamscape Effect with Celestial Constellations
export function DreamAtmosphere({ isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-purple-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-purple-500/15 to-transparent" />

      {/* Floating starry dream motes */}
      {Array.from({ length: isCompact ? 5 : 8 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 200, x: `${(i * 14 + 6) % 90}%`, opacity: 0 }}
          animate={{
            y: ['0%', '-120%'],
            x: [
              `${(i * 14 + 6) % 90}%`,
              `${((i * 14 + 6) % 90) + ((i % 2 === 0 ? 1 : -1) * 5)}%`
            ],
            opacity: [0, 0.8, 0.5, 0]
          }}
          transition={{
            duration: 9 + (i % 3) * 2,
            repeat: Infinity,
            delay: i * 0.9,
            ease: 'linear'
          }}
          className="absolute pointer-events-none z-0 transform-gpu will-change-transform"
        >
          <div className="w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_10px_rgba(192,132,252,1)] blur-[0.3px]" />
        </motion.div>
      ))}
    </>
  );
}

// 6. Project Isla Archipelago Topography Effect with Bathymetry Rings
export function IslandAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-teal-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-teal-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-teal-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-teal-500/15 to-transparent" />
    </>
  );
}

// 7. LabR@z Biohazard Rodent Lab Effect with Chemical Drips
export function LabratsAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-emerald-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-emerald-400/50 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-emerald-500/15 to-transparent" />
    </>
  );
}

// 8. Chanceway Noir Casino Effect with Gilded Card Suits
export function CasinoAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-amber-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-amber-500/15 to-transparent" />
    </>
  );
}

// 9. Baldi's Basics 2 Surreal Edutainment Effect with Classroom Ruler
export function BaldiAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-yellow-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-yellow-500/15 to-transparent" />
    </>
  );
}

// 10. WaiwWai Turnpike Echoes Effect with Synthwave Grid Lines
export function WaiwwaiAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-fuchsia-400/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-fuchsia-500/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-fuchsia-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-fuchsia-500/15 to-transparent" />
    </>
  );
}

/**
 * Universal atmosphere dispatcher component for full project cards / modals.
 */
// 11. Dear, Hiring Manager Corporate Cyberpunk Atmosphere with Timing Ring & HUD Telemetry
export function DearHiringManagerAtmosphere({ isCompact = false }) {
  const metrics = [
    { text: '+$120.00', color: 'text-emerald-400', border: 'border-emerald-500/30' },
    { text: '-$100.00', color: 'text-rose-400', border: 'border-rose-500/30' },
    { text: 'STRESS 99%', color: 'text-rose-500', border: 'border-rose-500/40' },
    { text: 'JOB LUCK 48%', color: 'text-amber-400', border: 'border-amber-500/30' },
    { text: 'WEEK 3', color: 'text-cyan-400', border: 'border-cyan-500/30' }
  ];

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(225,29,72,0.18),transparent_70%)] pointer-events-none rounded-3xl" />
      <div className="absolute inset-0 bg-[#060913]/40 pointer-events-none rounded-3xl" />
      
      {/* Corner Tech Brackets */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-rose-500/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-rose-600/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-cyan-500/10 to-transparent" />

      {/* Rotating Cyberpunk Timing Ring Gauge from Minigame 02 */}
      <div className="absolute top-2 right-2 w-16 sm:w-20 h-16 sm:h-20 pointer-events-none opacity-25">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="42" fill="none" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="180 80" />
          <circle cx="50" cy="50" r="34" fill="none" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="60 160" />
          <motion.circle
            cx="50" cy="50" r="42" fill="none" stroke="#38bdf8" strokeWidth="5" strokeDasharray="25 240"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '50px 50px' }}
          />
        </svg>
      </div>

      {/* Drifting Corporate HUD Telemetry Badges */}
      {metrics.slice(0, isCompact ? 3 : 5).map((m, i) => (
        <motion.div
          key={i}
          initial={{ y: 220, opacity: 0 }}
          animate={{
            y: ['0%', '-140%'],
            opacity: [0, 0.75, 0.5, 0]
          }}
          transition={{
            duration: 9 + i * 2,
            repeat: Infinity,
            delay: i * 1.8,
            ease: 'linear'
          }}
          style={{ left: `${12 + i * 18}%` }}
          className={`absolute pointer-events-none z-0 transform-gpu will-change-transform px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs border ${m.border} font-mono text-[9px] font-bold tracking-wider ${m.color}`}
        >
          {m.text}
        </motion.div>
      ))}
    </>
  );
}

// 12. PyBall Python Arcade Simulation Atmosphere (Green Grass, Blue Ponds, Purple Circles, Red BoxB)
export function PyballAtmosphere({ isCompact = false }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.18),transparent_65%)] pointer-events-none rounded-3xl" />
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-green-500/40 rounded-tl-3xl pointer-events-none bg-gradient-to-br from-green-600/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-500/40 rounded-br-3xl pointer-events-none bg-gradient-to-tl from-blue-600/10 to-transparent" />

      {/* Corner Blue Pond Accent */}
      <div className="absolute top-2 left-2 w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-400/30 pointer-events-none flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-blue-400/20" />
      </div>

      {/* Red Player Square BoxB */}
      <motion.div
        animate={{
          x: [10, 80, 50, 10],
          y: [20, 40, 10, 20]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 w-3.5 h-3.5 rounded-sm bg-red-500 border border-red-300 shadow-[0_0_8px_rgba(239,68,68,0.8)] pointer-events-none z-0 transform-gpu will-change-transform"
      />

      {/* Floating Purple Enemy Circles Avoiding Player */}
      {Array.from({ length: isCompact ? 3 : 5 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, (i % 2 === 0 ? 30 : -30), (i % 2 === 0 ? -20 : 20), 0],
            y: [0, (i % 2 === 0 ? -40 : 40), (i % 2 === 0 ? 30 : -30), 0]
          }}
          transition={{
            duration: 5 + i * 1.5,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'easeInOut'
          }}
          style={{
            left: `${20 + i * 16}%`,
            top: `${25 + (i % 3) * 20}%`
          }}
          className="absolute pointer-events-none z-0 transform-gpu will-change-transform"
        >
          <div className="w-3.5 h-3.5 rounded-full bg-purple-500 border border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
        </motion.div>
      ))}
    </>
  );
}

// 13. State Machine Showcase: Unreal Engine Blueprint logic graph & FSM state transitions
export function StateMachineAtmosphere({ isCompact = false }) {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl opacity-30"
        style={{
          background:
            'linear-gradient(rgba(14,165,233,0.12) 1px, transparent 1px) 0 0 / 28px 28px, linear-gradient(90deg, rgba(14,165,233,0.12) 1px, transparent 1px) 0 0 / 28px 28px, radial-gradient(ellipse at 50% 30%, rgba(14,165,233,0.15), transparent 70%)'
        }}
      />

      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-500/20 via-sky-400/80 to-emerald-400/60 pointer-events-none" />

      {/* Rotating perception cone / turret targeting reticle in top-right corner */}
      <div className="absolute -top-6 -right-6 w-32 h-32 pointer-events-none select-none opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-cyan-400 fill-none" strokeWidth="1">
            <circle cx="50" cy="50" r="45" strokeDasharray="3 4" />
            <circle cx="50" cy="50" r="28" />
            <line x1="50" y1="5" x2="50" y2="95" strokeDasharray="2 3" />
            <line x1="5" y1="50" x2="95" y2="50" strokeDasharray="2 3" />
            <path d="M50 50 L85 20 A 45 45 0 0 1 85 80 Z" fill="rgba(14,165,233,0.15)" stroke="none" />
          </svg>
        </motion.div>
      </div>

      {/* Blueprint bezier logic connection wire */}
      <div className="absolute inset-x-4 top-4 bottom-4 pointer-events-none overflow-hidden opacity-35">
        <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M 20 60 C 90 20, 130 100, 200 60 C 270 20, 310 100, 380 60"
            fill="none"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {!isCompact && (
        <div className="absolute left-3 bottom-3 flex items-center gap-2 pointer-events-none select-none opacity-45 font-mono text-[9px]">
          <span className="px-1.5 py-0.5 rounded bg-sky-950/70 border border-sky-500/40 text-sky-300 font-bold">
            FSM: ACTIVE
          </span>
          <span className="text-sky-400/80">IDLE &gt; TRACK &gt; FIRE</span>
        </div>
      )}
    </>
  );
}

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
    case 'dear-hiring-manager':
      return <DearHiringManagerAtmosphere isCompact={isCompact} />;
    case 'pyball':
      return <PyballAtmosphere isCompact={isCompact} />;
    case 'state-machine-showcase':
      return <StateMachineAtmosphere isCompact={isCompact} />;
    default:
      return null;
  }
}

/**
 * Bespoke atmospheric accents specifically designed to sit inside the
 * "Project Overview" / "What I Built" holder boxes across ProjectCard and CaseStudyModal.
 */
export function OverviewAtmosphere({ projectId }) {
  switch (projectId) {
    case 'rastacats':
      return (
        <>
          {/* Physical Hanging SVG Icicle Trim along the Top of the Overview Holder */}
          <div className="absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden">
            <svg
              viewBox="0 0 500 45"
              preserveAspectRatio="none"
              className="w-full h-6 text-cyan-200 drop-shadow-[0_2px_6px_rgba(6,182,212,0.8)]"
            >
              <defs>
                <linearGradient id="overviewIcicleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 L500,0 L500,4 Q485,6 475,20 L470,38 L465,20 Q455,6 440,4 Q425,6 415,24 L410,44 L405,24 Q395,6 380,4 Q365,6 355,18 L350,32 L345,18 Q335,6 320,4 Q305,6 295,22 L290,42 L285,22 Q275,6 260,4 Q245,6 235,16 L230,30 L225,16 Q215,6 200,4 Q185,6 175,24 L170,44 L165,24 Q155,6 140,4 Q125,6 115,18 L110,34 L105,18 Q95,6 80,4 Q65,6 55,22 L50,40 L45,22 Q35,6 20,4 L0,4 Z"
                fill="url(#overviewIcicleGrad)"
              />
            </svg>
          </div>
          {/* Subtle Dendritic Corner Frost Crystal */}
          <div className="absolute top-1 right-2 w-7 h-7 pointer-events-none text-cyan-300/30">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="2.5">
              <line x1="10" y1="10" x2="90" y2="90" />
              <line x1="10" y1="90" x2="90" y2="10" />
              <line x1="50" y1="10" x2="50" y2="90" />
              <line x1="10" y1="50" x2="90" y2="50" />
              <path d="M50 30 L40 20 M50 30 L60 20" />
              <path d="M50 70 L40 80 M50 70 L60 80" />
            </svg>
          </div>
        </>
      );

    case 'rem':
      return (
        <>
          {/* Physical Viscous Inky Drip Shelf Along Top of the Overview Holder */}
          <div className="absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden">
            <svg
              viewBox="0 0 500 40"
              preserveAspectRatio="none"
              className="w-full h-5 text-[#010204] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              <path
                d="M0,0 L500,0 L500,6 Q480,8 470,18 Q460,35 455,38 Q450,38 440,18 Q430,8 400,6 Q380,8 365,20 Q350,38 345,40 Q340,40 325,20 Q310,8 270,6 Q250,8 240,20 Q230,36 225,38 Q220,38 210,20 Q200,8 160,6 Q140,8 130,16 Q120,30 115,32 Q110,32 100,16 Q90,8 60,6 Q40,8 30,18 Q20,34 15,36 Q10,36 0,18 Z"
                fill="#010204"
                stroke="#083344"
                strokeWidth="1"
              />
            </svg>

            {/* Physical Viscous Droplets Detaching & Dripping down into Overview Holder */}
            {[15, 115, 225, 345, 455].map((xPos, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 4, scaleY: 0.8, opacity: 0 }}
                animate={{
                  y: [4, 16, 85],
                  scaleY: [0.8, 1.8, 1.2],
                  opacity: [0, 0.9, 0]
                }}
                transition={{
                  duration: 2.2 + (idx % 3) * 0.4,
                  delay: idx * 0.4,
                  repeat: Infinity,
                  ease: [0.5, 0, 1, 1]
                }}
                style={{ left: `${(xPos / 500) * 100}%` }}
                className="absolute pointer-events-none"
              >
                <svg width="6" height="14" viewBox="0 0 6 14" className="filter drop-shadow-[0_0_3px_rgba(6,182,212,0.8)]">
                  <path
                    d="M3,0 C3,0 6,8 6,11 C6,12.7 4.7,14 3,14 C1.3,14 0,12.7 0,11 C0,8 3,0 3,0 Z"
                    fill="#020617"
                    stroke="#06b6d4"
                    strokeWidth="0.7"
                  />
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Faint Myndwell Watermark in Background of Overview Holder */}
          <div className="absolute right-3 bottom-2 opacity-[0.06] pointer-events-none">
            <img
              src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
              alt=""
              className="w-16 h-16 object-contain"
            />
          </div>
        </>
      );

    case 'planet-protectors':
      return (
        <div className="absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden">
          <svg viewBox="0 0 500 24" preserveAspectRatio="none" className="w-full h-4 text-emerald-500/40">
            <path
              d="M0,0 L500,0 L500,2 Q470,8 450,4 Q430,10 410,5 Q370,12 340,4 Q310,10 280,5 Q240,12 210,4 Q170,10 140,5 Q100,12 70,4 Q30,10 0,3 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </svg>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ y: -10, x: `${20 + i * 32}%`, opacity: 0 }}
              animate={{
                y: ['0%', '115%'],
                x: [`${20 + i * 32}%`, `${20 + i * 32 + (i % 2 === 0 ? 5 : -5)}%`],
                rotate: [0, 90, 180],
                opacity: [0, 0.75, 0]
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                delay: i * 1.2,
                ease: 'linear'
              }}
              className="absolute pointer-events-none"
            >
              <svg width="12" height="16" viewBox="0 0 24 32">
                <path
                  d="M12 2 C6 7 2 14 2 20 C2 26 6.5 30 12 30 C17.5 30 22 26 22 20 C22 14 18 7 12 2 Z"
                  fill="#10b981"
                  opacity="0.8"
                />
                <path d="M12 4 L12 28" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.div>
          ))}
        </div>
      );

    case 'delirium':
      return (
        <div className="absolute top-0 inset-x-0 pointer-events-none z-10 overflow-hidden h-4">
          <svg viewBox="0 0 500 20" preserveAspectRatio="none" className="w-full h-full stroke-rose-500/50 fill-none" strokeWidth="1.5">
            <path d="M0 10 L150 10 L158 3 L166 17 L174 1 L182 15 L190 10 L330 10 L338 3 L346 17 L354 1 L362 15 L370 10 L500 10" />
          </svg>
        </div>
      );

    case 'labraz':
    case 'labrats':
      return (
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500/20 via-emerald-400/60 to-emerald-500/20 pointer-events-none" />
      );

    case 'dear-hiring-manager':
      return (
        <>
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-600/30 via-rose-500/80 to-cyan-400/60 pointer-events-none" />
          <div className="absolute right-3 bottom-2 opacity-[0.08] pointer-events-none select-none -rotate-12 border-2 border-rose-500 rounded-md px-2 py-0.5 text-rose-400 font-extrabold text-xs tracking-widest font-mono">
            HIRED!
          </div>
        </>
      );

    case 'pyball':
      return (
        <>
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-green-500/40 via-blue-500/60 to-green-500/40 pointer-events-none" />
          <div className="absolute right-2 top-1.5 w-2.5 h-2.5 rounded-full bg-purple-400/40 border border-purple-300/60 pointer-events-none" />
        </>
      );

    case 'state-machine-showcase':
      return (
        <>
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-500/30 via-cyan-400/80 to-emerald-400/50 pointer-events-none" />
          <div className="absolute right-3 top-2 opacity-30 pointer-events-none select-none font-mono text-[10px] text-sky-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>FSM: EVAL</span>
          </div>
        </>
      );

    default:
      return null;
  }
}

