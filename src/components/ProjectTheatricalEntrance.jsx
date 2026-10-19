import { motion } from 'framer-motion';
import { ShieldAlert, Cpu, Radio, Sparkles, Navigation, AlertTriangle, Dice5 } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

/**
 * Unique bespoke openers for project overview modals.
 * Every single project has its own completely distinct physical mechanic:
 * - Rastacats: Glacial freeze fracture & ice sheet shatter explosion
 * - REM / Myndwell: Inky fluid bloom & CRT electro-convulsive degauss
 * - Planet Protectors: Procedural botanical seed bloom & spiral vine unfurl
 * - Delirium VR: Psychiatric EKG cardiac defibrillator shock & CRT slit snap
 * - Daydream Believer: Subconscious dream warp prism & nebula rings
 * - Project Isla: Perlin sonar radar sweep & topographic contour wave
 * - LabRats: Biohazard airlock aperture & chemical steam purge
 * - Chanceway: Noir casino card fan & golden roulette wheel burst
 * - Baldi's Basics 2: 90s CRT monitor degauss & schoolhouse ruler snap
 * - The Turnpike Echoes: Synthwave hyperspace perspective grid & VHS tracking glitch
 * - Default: Unreal Engine wireframe mesh pulse
 *
 * Strictly NO sliding doors or curtains (reserved exclusively for Musical Theatre).
 */
export default function ProjectTheatricalEntrance({ projectId, animationKey = 0 }) {
  // 1. Rastacats: Glacial Freeze Fracture & Ice Sheet Shatter Explosion
  if (projectId === 'rastacats') {
    return (
      <div
        key={`ice-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.35 }}
          transition={{ duration: 0.9, delay: 0.65, ease: 'easeOut' }}
          className="absolute inset-0 bg-gradient-to-b from-[#061d36]/98 via-[#0a2a4c]/95 to-[#041222]/98 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* Hanging SVG Icicle Trim along the Top Rim */}
          <div className="absolute top-0 inset-x-0 overflow-hidden">
            <svg viewBox="0 0 600 65" preserveAspectRatio="none" className="w-full h-10 text-cyan-200 drop-shadow-[0_2px_8px_rgba(6,182,212,0.9)]">
              <defs>
                <linearGradient id="shatterIceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 L600,0 L600,6 Q585,8 575,28 L570,55 L565,28 Q555,8 540,6 Q525,8 515,35 L510,65 L505,35 Q495,8 480,6 Q465,8 455,25 L450,45 L445,25 Q435,8 420,6 Q405,8 395,38 L390,68 L385,38 Q375,8 360,6 Q345,8 335,22 L330,42 L325,22 Q315,8 300,6 Q285,8 275,32 L270,62 L265,32 Q255,8 240,6 Q225,8 215,24 L210,44 L205,24 Q195,8 180,6 Q165,8 155,36 L150,65 L145,36 Q135,8 120,6 Q105,8 95,26 L90,48 L85,26 Q75,8 60,6 Q45,8 35,32 L30,58 L25,32 Q15,8 0,6 Z"
                fill="url(#shatterIceGrad)"
              />
            </svg>
          </div>

          {/* Spiderweb Fracture Cracks Flashing Across the Screen */}
          <svg className="absolute inset-0 w-full h-full stroke-cyan-200 fill-none" strokeWidth="2.5">
            <motion.path
              d="M300 200 L240 140 L180 150 L120 90 M240 140 L260 80 M300 200 L370 150 L430 170 L510 110 M370 150 L390 90 M300 200 L320 280 L290 350 L340 430 M320 280 L380 320 L440 310 M300 200 L230 270 L160 290 L110 370 M230 270 L210 340"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 1, 0.4] }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            />
          </svg>

          {/* Center Cryogenic Frost Core Burst */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
            transition={{ duration: 0.45, ease: 'backOut', delay: 0.1 }}
            className="relative w-28 h-28 rounded-full border-4 border-cyan-300 bg-gradient-to-br from-cyan-400 via-sky-600 to-blue-950 flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(6,182,212,1)] text-white z-10"
          >
            <span className="text-3xl mb-0.5">❄</span>
            <span className="text-[9px] font-mono uppercase font-black tracking-widest text-cyan-100">
              FROST CORE
            </span>
          </motion.div>

          {/* Radial Crystal Shockwave */}
          <motion.div
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 3.5, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="absolute w-28 h-28 rounded-full border-2 border-cyan-300 pointer-events-none"
          />

          <div className="text-xs font-mono font-bold tracking-widest text-cyan-200 uppercase mt-4 z-10">
            CRYOGENIC SEAL SHATTERED // 0° KELVIN BREACH
          </div>
          <div className="text-[10px] font-mono text-cyan-400/80 mt-1 z-10">
            CURVED-WORLD ICE BIOME RUNTIME DEPLOYED
          </div>
        </motion.div>
      </div>
    );
  }

  // 2. REM / Myndwell: Inky Neural Fluid Bloom & CRT Electro-Convulsive Degauss
  if (projectId === 'rem') {
    return (
      <div
        key={`ink-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.85, delay: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 bg-[#010204] flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* CRT Degauss Beam Flash Expanding Vertically */}
          <motion.div
            initial={{ scaleY: 0.02, opacity: 1 }}
            animate={{ scaleY: [0.02, 0.02, 1, 1], opacity: [1, 1, 0.9, 0] }}
            transition={{ duration: 0.75, times: [0, 0.3, 0.7, 1], delay: 0.15 }}
            className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 via-cyan-300/40 to-cyan-400/20 shadow-[0_0_80px_rgba(6,182,212,0.9)] z-20 pointer-events-none"
          />

          {/* Organic Inky Fluid Bloom SVG expanding from centre */}
          <div className="relative flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0.1, rotate: 0, opacity: 1 }}
              animate={{ scale: 3.8, rotate: 45, opacity: [1, 1, 0] }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="w-32 h-32 rounded-full border-2 border-cyan-400/60 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #000000 40%, #083344 70%, transparent 100%)'
              }}
            />

            {/* Central Myndwell Corporate Seal */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute w-24 h-24 rounded-full border-2 border-cyan-400 bg-black flex flex-col items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.9)] z-10"
            >
              <img
                src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
                alt="Myndwell Logo"
                className="w-10 h-10 object-contain mb-1"
              />
              <span className="text-[7px] font-mono uppercase font-black tracking-widest text-cyan-200">
                MYNDWELL
              </span>
            </motion.div>
          </div>

          <div className="text-xs font-mono font-bold tracking-widest text-white uppercase z-10 font-['Syne',sans-serif]">
            NEURAL PARTITIONING RESET // SUBJECT UNMASKED
          </div>
          <div className="text-[10px] font-mono text-cyan-300/80 mt-1 z-10">
            MYNDWELL INTERNATIONAL RESTRICTED SPECIFICATION
          </div>
        </motion.div>
      </div>
    );
  }

  // 3. Planet Protectors: Procedural Botanical Seed Bloom & Spiral Vine Unfurl
  if (projectId === 'planet-protectors') {
    return (
      <div
        key={`canopy-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.85, delay: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 bg-[#021309] flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* Spiralling Foliage Bloom Expanding from Center */}
          <div className="relative flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0.2, rotate: -60, opacity: 1 }}
              animate={{ scale: 3.2, rotate: 60, opacity: [1, 1, 0] }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="w-32 h-32 rounded-full border-4 border-emerald-400 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #052e16 30%, #10b981 70%, transparent 100%)'
              }}
            />

            {/* Central Golden Botanical Seed */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute w-24 h-24 rounded-full border-4 border-emerald-300 bg-gradient-to-br from-emerald-500 via-green-700 to-emerald-950 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.9)] z-10 text-emerald-100"
            >
              <span className="text-3xl mb-0.5">🌿</span>
              <span className="text-[8px] font-mono uppercase font-black tracking-widest text-emerald-100">
                ECOSYSTEM
              </span>
            </motion.div>
          </div>

          <div className="text-xs font-mono font-bold tracking-widest text-emerald-300 uppercase z-10">
            BIOME SEED EXPANSION // PROCEDURAL CANOPY RESTORED
          </div>
          <div className="text-[10px] font-mono text-emerald-400/80 mt-1 z-10">
            ORGANIC REGENERATION ENGINE ONLINE
          </div>
        </motion.div>
      </div>
    );
  }

  // 4. Delirium VR: St. Jude's Psychiatric EKG Defibrillator Cardiac Shock & CRT Slit Snap
  if (projectId === 'delirium') {
    return (
      <div
        key={`asylum-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.85, delay: 0.85, ease: 'easeOut' }}
          className="absolute inset-0 bg-[#160205] flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* EKG Heartbeat Pulse Wave Shooting Across Screen */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 overflow-hidden">
            <svg viewBox="0 0 600 60" preserveAspectRatio="none" className="w-full h-full stroke-rose-400 fill-none" strokeWidth="3">
              <motion.path
                d="M0 30 L180 30 L200 10 L220 50 L240 5 L260 45 L280 30 L600 30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          {/* Defibrillator Cardiac Jolt Flash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0, 0.6, 0] }}
            transition={{ duration: 0.6, times: [0, 0.2, 0.4, 0.6, 1], delay: 0.35 }}
            className="absolute inset-0 bg-rose-600/30 shadow-[0_0_100px_rgba(225,29,72,1)] pointer-events-none"
          />

          {/* Central Isolation Ward Seal */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="relative w-28 h-28 rounded-full border-4 border-rose-500 bg-gradient-to-br from-rose-700 via-rose-950 to-black flex flex-col items-center justify-center shadow-[0_0_60px_rgba(225,29,72,0.9)] z-10 text-rose-100 mb-5"
          >
            <ShieldAlert className="w-10 h-10 text-rose-200 mb-0.5" />
            <span className="text-[8px] font-mono uppercase font-black tracking-widest text-white">
              ST. JUDE'S WARD
            </span>
          </motion.div>

          <div className="text-xs font-mono font-bold tracking-widest text-rose-300 uppercase z-10">
            CARDIAC RESUSCITATION 200J // WARD LOCKDOWN DISENGAGED
          </div>
          <div className="text-[10px] font-mono text-rose-400/80 mt-1 z-10">
            WHEELCHAIR INERTIA SIMULATION UNLOCKED
          </div>
        </motion.div>
      </div>
    );
  }

  // 5. Daydream Believer: Subconscious Dream Warp Prism & Nebula Rings
  if (projectId === 'daydream') {
    return (
      <div
        key={`dream-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.85, delay: 0.75, ease: 'easeOut' }}
          className="absolute inset-0 bg-[#0e041c] flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* Concentric Dream Rings Spinning & Expanding */}
          <div className="relative flex items-center justify-center mb-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.2, rotate: -180, opacity: 0.9 }}
                animate={{ scale: 3.2, rotate: 0, opacity: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.15, ease: 'easeOut' }}
                className="absolute w-28 h-28 rounded-full border-2 border-dashed border-purple-400 pointer-events-none"
              />
            ))}

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-24 h-24 rounded-full border-4 border-purple-400 bg-gradient-to-br from-purple-600 via-indigo-900 to-black flex flex-col items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.9)] z-10 text-purple-200"
            >
              <Sparkles className="w-9 h-9 text-purple-200 mb-0.5" />
              <span className="text-[8px] font-mono uppercase font-black tracking-widest text-white">
                SUBCONSCIOUS
              </span>
            </motion.div>
          </div>

          <div className="text-xs font-mono font-bold tracking-widest text-purple-200 uppercase z-10">
            SUBCONSCIOUS PRISM // LUCID DREAM CONVERGENCE
          </div>
          <div className="text-[10px] font-mono text-purple-400/80 mt-1 z-10">
            PSYCHOLOGICAL NARRATIVE ENGINE AWAKENED
          </div>
        </motion.div>
      </div>
    );
  }

  // 6. Project Isla: Perlin Sonar Ping & Topographic Contour Elevation Wave
  if (projectId === 'project-isla') {
    return (
      <div
        key={`isla-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.85, delay: 0.75, ease: 'easeOut' }}
          className="absolute inset-0 bg-[#03151b] flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* Concentric Maritime Sonar Ping Waves */}
          <div className="relative flex items-center justify-center mb-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.3, opacity: 0.9 }}
                animate={{ scale: 3.4, opacity: 0 }}
                transition={{ duration: 0.85, delay: 0.1 + i * 0.15, ease: 'easeOut' }}
                className="absolute w-28 h-28 rounded-full border-2 border-teal-400 pointer-events-none"
              />
            ))}

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-24 h-24 rounded-full border-4 border-teal-400 bg-gradient-to-br from-teal-600 via-teal-950 to-black flex flex-col items-center justify-center shadow-[0_0_50px_rgba(20,184,166,0.9)] z-10 text-teal-200"
            >
              <Navigation className="w-8 h-8 text-teal-200 mb-0.5" />
              <span className="text-[8px] font-mono uppercase font-black tracking-widest text-white">
                PERLIN SONAR
              </span>
            </motion.div>
          </div>

          <div className="text-xs font-mono font-bold tracking-widest text-teal-200 uppercase z-10">
            SONAR BATHYMETRY // ARCHIPELAGO TOPOGRAPHY MAPPED
          </div>
          <div className="text-[10px] font-mono text-teal-400/80 mt-1 z-10">
            COASTAL TERRAIN GENERATION ACTIVE
          </div>
        </motion.div>
      </div>
    );
  }

  // 7. LabRats: Biohazard Airlock Aperture & Chemical Steam Decontamination
  if (projectId === 'labrats' || projectId === 'labraz') {
    return (
      <div
        key={`lab-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.85, delay: 0.75, ease: 'easeOut' }}
          className="absolute inset-0 bg-[#05170d] flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* Rotating Triangular Hazard Aperture */}
          <div className="relative flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0.4, rotate: 0 }}
              animate={{ scale: 3.2, rotate: 90 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="w-32 h-32 rounded-full border-4 border-emerald-400 pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg, #10b981 0deg 60deg, #022c22 60deg 120deg, #10b981 120deg 180deg, #022c22 180deg 240deg, #10b981 240deg 300deg, #022c22 300deg 360deg)'
              }}
            />

            <div className="absolute w-20 h-20 rounded-full border-2 border-emerald-300 bg-emerald-950 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(52,211,153,0.9)] z-10">
              <AlertTriangle className="w-8 h-8 text-emerald-300 mb-0.5" />
              <span className="text-[7px] font-mono uppercase font-black text-emerald-200">
                BIO-04
              </span>
            </div>
          </div>

          <div className="text-xs font-mono font-bold tracking-widest text-emerald-300 uppercase z-10">
            DECONTAMINATION CHAMBER PURGED // SUBJECT #04 RELEASED
          </div>
          <div className="text-[10px] font-mono text-emerald-400/80 mt-1 z-10">
            BIOTECH CO-OP FACILITY ACCESSIBLE
          </div>
        </motion.div>
      </div>
    );
  }

  // 8. Chanceway: Noir Casino 3D Card Fan & Golden Roulette Wheel Burst
  if (projectId === 'chanceway') {
    return (
      <div
        key={`casino-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.85, delay: 0.75, ease: 'easeOut' }}
          className="absolute inset-0 bg-[#160f06] flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* Spinning Roulette Wheel Burst */}
          <div className="relative flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0.3, rotate: 0 }}
              animate={{ scale: 3.2, rotate: 360 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="w-32 h-32 rounded-full border-4 border-amber-400 pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg, #d97706 0deg 30deg, #451a03 30deg 60deg, #d97706 60deg 90deg, #451a03 90deg 120deg, #d97706 120deg 150deg, #451a03 150deg 180deg, #d97706 180deg 210deg, #451a03 210deg 240deg, #d97706 240deg 270deg, #451a03 270deg 300deg, #d97706 300deg 330deg, #451a03 330deg 360deg)'
              }}
            />

            <div className="absolute w-20 h-20 rounded-full border-2 border-amber-300 bg-amber-950 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.9)] z-10 text-amber-200">
              <Dice5 className="w-8 h-8 text-amber-300 mb-0.5" />
              <span className="text-[7px] font-mono uppercase font-black text-amber-100">
                THE HOUSE
              </span>
            </div>
          </div>

          <div className="text-xs font-mono font-bold tracking-widest text-amber-200 uppercase z-10">
            THE HOUSE DEALS // BET PLACED
          </div>
          <div className="text-[10px] font-mono text-amber-400/80 mt-1 z-10">
            PROCEDURAL DECK &amp; CASINO ENGINE
          </div>
        </motion.div>
      </div>
    );
  }

  // 9. Baldi's Basics 2: 90s Edutainment CRT TV Turn-On & Notebook Ruler Snap
  if (projectId === 'baldis-basics-2') {
    return (
      <div
        key={`baldi-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.85, delay: 0.75, ease: 'easeOut' }}
          className="absolute inset-0 bg-[#161304] flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* CRT TV Screen Snap */}
          <motion.div
            initial={{ scaleY: 0.02, scaleX: 0.1, opacity: 1 }}
            animate={{ scaleY: [0.02, 0.02, 1, 1], scaleX: [0.1, 1, 1, 1], opacity: [1, 1, 0.8, 0] }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="absolute inset-0 bg-yellow-400/20 shadow-[0_0_80px_rgba(234,179,8,0.9)] pointer-events-none"
          />

          <div className="relative w-24 h-24 rounded-2xl border-4 border-yellow-400 bg-yellow-950 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.9)] z-10 text-yellow-200 mb-5">
            <span className="text-3xl font-black mb-0.5">📏</span>
            <span className="text-[8px] font-mono uppercase font-black text-white">
              MATHS 1999
            </span>
          </div>

          <div className="text-xs font-mono font-bold tracking-widest text-yellow-300 uppercase z-10">
            EDUTAINMENT 1999 // MATHS NOTEBOOK INITIALISED
          </div>
          <div className="text-[10px] font-mono text-yellow-400/80 mt-1 z-10">
            SURREAL SCHOOLHOUSE LAB ACTIVE
          </div>
        </motion.div>
      </div>
    );
  }

  // 10. The Turnpike Echoes / WaiwWai: Synthwave Hyperspace Grid & VHS Tracking Glitch
  if (projectId === 'waiwwai') {
    return (
      <div
        key={`turnpike-${animationKey}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.85, delay: 0.75, ease: 'easeOut' }}
          className="absolute inset-0 bg-[#160419] flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* VHS Magnetic Tape Head Tracking Glitch Bar Sweeping Down */}
          <motion.div
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 0.85, ease: 'easeInOut' }}
            className="absolute inset-x-0 h-4 bg-fuchsia-400/40 shadow-[0_0_30px_rgba(217,70,239,1)] z-30"
          />

          <div className="relative w-24 h-24 rounded-2xl border-4 border-fuchsia-400 bg-fuchsia-950 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(217,70,239,0.9)] z-10 text-fuchsia-200 mb-5">
            <Radio className="w-9 h-9 text-fuchsia-200 mb-0.5" />
            <span className="text-[8px] font-mono uppercase font-black text-white">
              TURNPIKE
            </span>
          </div>

          <div className="text-xs font-mono font-bold tracking-widest text-fuchsia-300 uppercase z-10">
            HIGHWAY 101 AUDIO LOG // CASSETTE ENGAGED
          </div>
          <div className="text-[10px] font-mono text-fuchsia-400/80 mt-1 z-10">
            SYNTHWAVE PERSPECTIVE ROAD ENGINE ONLINE
          </div>
        </motion.div>
      </div>
    );
  }

  // 11. Generic/Default: Unreal Engine Wireframe Viewport Pulse
  return (
    <div
      key={`default-${animationKey}`}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        className="absolute inset-0 bg-[#070918] flex flex-col items-center justify-center p-6 text-center select-none"
      >
        <motion.div
          initial={{ scale: 0.3, opacity: 1 }}
          animate={{ scale: 3.2, opacity: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: 'easeOut' }}
          className="absolute w-28 h-28 rounded-full border-2 border-indigo-400 pointer-events-none"
        />

        <div className="relative w-24 h-24 rounded-2xl border-4 border-indigo-400 bg-indigo-950 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.9)] z-10 text-indigo-200 mb-5">
          <Cpu className="w-9 h-9 text-indigo-300 mb-0.5" />
          <span className="text-[8px] font-mono uppercase font-black text-white">
            UNREAL 5.7
          </span>
        </div>

        <div className="text-xs font-mono font-bold tracking-widest text-indigo-300 uppercase z-10">
          VIEWPORT INITIALISED // C++ &amp; BLUEPRINT COMPILED
        </div>
      </motion.div>
    </div>
  );
}
