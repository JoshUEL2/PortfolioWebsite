import { motion } from 'framer-motion';
import { Gamepad2, Palette, BookOpen, Cpu, ShieldCheck, Sparkles, Terminal, ExternalLink, Wrench } from 'lucide-react';
import { DISCIPLINES, HARDWARE_AND_SYSTEMS_MINI } from '../data/portfolioData';
import { GithubIcon } from './Icons';

const iconMap = {
  Gamepad2,
  Palette,
  BookOpen,
  Cpu,
  ShieldCheck
};

export default function Competencies() {
  return (
    <section id="disciplines" className="relative py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/50 border border-violet-500/25 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Terminal className="w-3.5 h-3.5 text-violet-400" />
          <span>Core Engineering Stack</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Syne',sans-serif]">
          Disciplines & Technical Competencies
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          A rare dual-threat skillset uniting low-level game engine mathematics with high-level ludonarrative architecture and hardware prototyping.
        </p>
      </div>

      {/* Grid of 5 Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DISCIPLINES.map((item, index) => {
          const Icon = iconMap[item.icon] || Sparkles;
          const isLarge = index === 0 || index === 1;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative rounded-3xl bg-[#0c0e1c]/80 border border-white/10 hover:border-indigo-500/40 p-7 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] flex flex-col justify-between ${
                isLarge ? 'md:col-span-1 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:text-indigo-300 group-hover:border-indigo-500/50 transition-all shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/[0.04] border border-white/10 text-slate-300">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 font-['Syne',sans-serif] group-hover:text-indigo-200 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.07]">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.03] text-[11px] font-medium text-slate-300 border border-white/[0.05]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Compact Hardware, Mocap & Systems Engineering Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mt-10 rounded-2xl bg-[#090b16]/90 border border-white/10 p-5 sm:p-6 backdrop-blur-xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-indigo-400" />
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-mono">
              Beyond Games • Hardware, Mocap & Systems Lab
            </h3>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">
            Independent R&D, USB HID Reverse-Engineering & Tooling
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {HARDWARE_AND_SYSTEMS_MINI.map((sys) => (
            <div
              key={sys.id}
              className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-xs font-bold text-white leading-snug">
                    {sys.title}
                  </h4>
                  <div className="flex items-center gap-1 shrink-0">
                    {sys.github && (
                      <a
                        href={sys.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${sys.title} GitHub`}
                        className="text-slate-400 hover:text-white transition-colors"
                        title="View Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {sys.link && (
                      <a
                        href={sys.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${sys.title} Live Demo`}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors"
                        title="Launch App"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-indigo-300/90 mb-1.5">
                  {sys.tech}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {sys.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
