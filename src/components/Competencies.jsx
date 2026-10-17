import { motion } from 'framer-motion';
import { Wrench, ExternalLink, Cpu, CheckCircle2 } from 'lucide-react';
import { TOOLKIT_SPECS, HARDWARE_AND_SYSTEMS_MINI } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export default function Competencies() {
  return (
    <section id="toolkit" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5 text-indigo-400" />
          <span>03 // Toolkit &amp; R&amp;D Lab</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
          Engines, Shaders &amp; Hardware R&amp;D
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-1.5 max-w-2xl">
          A quick reference of the engines, shader pipelines, and tools I use day-to-day, plus a small shelf of my non-game hardware and USB reverse-engineering side projects.
        </p>
      </div>

      {/* Crisp 4-Column Toolkit Spec Sheet */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {TOOLKIT_SPECS.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="p-5 rounded-2xl bg-[#0a0c18]/90 border border-white/10 hover:border-indigo-500/35 backdrop-blur-xl"
          >
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300 pb-3 mb-3 border-b border-white/10">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Compact Hardware, Mocap & Systems Lab Strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl bg-[#090b16]/90 border border-white/10 p-5 sm:p-6 backdrop-blur-xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-indigo-400" />
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white font-mono">
              Side Tinkering • DIY Mocap, Hardware Drivers &amp; Web Tools
            </h3>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">
            Hardware &amp; Tooling Side Projects
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
                  <div className="flex items-center gap-1.5 shrink-0">
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
                        title="Open Web App"
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
