import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Gamepad2, Terminal, Code2, Trophy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onExploreClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Background Kinetic Typography Outlines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10 opacity-[0.035]">
        <span className="font-extrabold text-[18vw] leading-none tracking-tighter text-white uppercase text-center font-['Syne',sans-serif]">
          JOSHUA
          <br />
          JOHNSON
        </span>
      </div>

      {/* Hero Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Status Pill */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Unreal Engine 5 • Custom Shaders • Systems Architecture</span>
          </div>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 font-['Syne',sans-serif] leading-[1.08]"
        >
          Engineering Gameplay.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-purple-400">
            Sculpting Worlds.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed"
        >
          London-based Technical Game Designer & Systems Architect bridging low-level{' '}
          <strong className="text-white font-semibold">Unreal Engine 5 gameplay physics</strong>, bespoke{' '}
          <strong className="text-white font-semibold">Kuwahara & WPO shader math</strong>, and nuanced{' '}
          <strong className="text-white font-semibold">ludonarrative architecture</strong>.
        </motion.p>

        {/* Badges / Tech Highlights */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            MS5027 92% (1st Class)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            360° Rotational Gravity Math
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
            <Terminal className="w-3.5 h-3.5 text-violet-400" />
            Kuwahara Post-Processing
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
            <Gamepad2 className="w-3.5 h-3.5 text-rose-400" />
            Project K.I.N.E.T.I.C. Mocap Rig
          </span>
        </motion.div>

        {/* Call to Actions */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={onExploreClick}
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 text-white font-semibold text-sm shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 group"
          >
            <span>Explore Flagship Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <a
            href={PERSONAL_INFO.itch}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200 flex items-center gap-2"
          >
            <Gamepad2 className="w-4 h-4 text-rose-400" />
            <span>Play Itch.io Builds</span>
          </a>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-white font-semibold text-sm border border-white/5 hover:border-white/15 transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Metric Ticker */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08]"
        >
          {PERSONAL_INFO.stats.slice(0, 4).map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center hover:bg-white/[0.04] transition-colors"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 font-['Syne',sans-serif]">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-indigo-300 tracking-wide mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 truncate mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
