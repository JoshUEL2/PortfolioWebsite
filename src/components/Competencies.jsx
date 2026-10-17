import { motion } from 'framer-motion';
import { Wrench, ExternalLink, Cpu, Terminal, Activity } from 'lucide-react';
import { TOOLKIT_SPECS, HARDWARE_AND_SYSTEMS_MINI } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export default function Competencies() {
  return (
    <section id="toolkit" className="relative w-full overflow-hidden">
      {/* Full-Bleed Grungy PCB Circuit & Hardware Workbench Biome */}
      <div className="bg-circuit-pattern pt-28 pb-32 px-4 sm:px-6 relative">
        {/* Top Atmospheric Crossfade Overlay (Gradually reveals PCB traces from Layer 02) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#090d0b] via-[#070b09]/80 to-transparent pointer-events-none z-0"
        />
        {/* Bottom Atmospheric Crossfade Overlay (Gradually dissolves PCB traces into Layer 04) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080c14] via-[#070b09]/80 to-transparent pointer-events-none z-0"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Industrial PCB Bus Diagnostic Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-3.5 rounded-lg bg-[#050806]/90 border border-amber-500/35 mb-12 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px]"
          >
            <div className="flex items-center gap-2.5 text-amber-400 font-bold uppercase tracking-widest">
              <Cpu className="w-4 h-4 text-amber-400" />
              <span>LAYER 03 // ENGINE SCHEMATICS &amp; HARDWARE TINKERING BENCH</span>
            </div>
            <div className="flex items-center gap-3 text-emerald-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>SYS_BUS: ONLINE</span>
              </span>
              <span className="text-amber-500/50">|</span>
              <span className="text-amber-300/80">REV_4.2 // USB_HID_LAB</span>
            </div>
          </motion.div>

          {/* Section Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-5xl font-black text-amber-50 tracking-tight font-['Space_Grotesk',sans-serif] uppercase">
              Engines, Shaders &amp; Hardware Lab
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-mono">
              Core game-engine schematics and shader pipelines, paired with my low-level hardware reverse-engineering, custom sensor-fusion mocap, and driver workbench.
            </p>
          </motion.div>

          {/* 4 Mounted IC Daughterboard Spec Modules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {TOOLKIT_SPECS.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="relative p-5 rounded-xl bg-[#0a100d]/95 border border-amber-500/30 hover:border-emerald-400/50 shadow-[inset_0_0_25px_rgba(217,119,6,0.06)] transition-all"
              >
                {/* Corner PCB Screw Crosshairs */}
                <span className="absolute top-1.5 left-2 text-[10px] font-mono text-amber-500/40 select-none">+</span>
                <span className="absolute top-1.5 right-2 text-[10px] font-mono text-amber-500/40 select-none">+</span>
                <span className="absolute bottom-1 left-2 text-[10px] font-mono text-amber-500/40 select-none">+</span>
                <span className="absolute bottom-1 right-2 text-[10px] font-mono text-amber-500/40 select-none">+</span>

                <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-amber-500/25 mt-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400">
                    BUS_0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-xs bg-emerald-400/80" />
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono mb-3">
                  {group.category}
                </h3>

                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs font-mono text-slate-300"
                    >
                      <span className="text-emerald-400 font-bold shrink-0">&gt;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Grungy Hardware, Mocap & Reverse-Engineering Workbench */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-xl bg-[#060a08]/95 border-2 border-amber-500/35 p-5 sm:p-7 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative"
          >
            {/* Copper Trace Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-amber-500/25">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded bg-amber-500/15 border border-amber-500/40 text-amber-400">
                  <Wrench className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-200 font-mono">
                    WORKBENCH // DIY MOCAP, USB HID PACKET SNIFFING &amp; DRIVERS
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    Low-level hardware mods, sensor fusion rigs, and custom utilities built outside standard game engines
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>5 HARDWARE MODULES</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {HARDWARE_AND_SYSTEMS_MINI.map((sys, idx) => (
                <div
                  key={sys.id}
                  className="p-4 rounded-lg bg-[#0b110e] hover:bg-[#0f1814] border border-amber-500/20 hover:border-amber-400/55 flex flex-col justify-between transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono text-amber-500/80 font-bold">
                        MOD_0{idx + 1}
                      </span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {sys.github && (
                          <a
                            href={sys.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${sys.title} GitHub`}
                            className="p-1 rounded bg-white/5 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-white/10 transition-colors"
                            title="View Source Code"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {sys.link && (
                          <a
                            href={sys.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${sys.title} Live App`}
                            className="p-1 rounded bg-emerald-500/10 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-colors"
                            title="Launch Live Tool"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h4 className="text-xs font-bold text-amber-50 font-mono leading-snug mb-1.5 group-hover:text-amber-300 transition-colors">
                      {sys.title}
                    </h4>

                    <div className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 mb-2">
                      <Terminal className="w-3 h-3 shrink-0" />
                      <span className="truncate">{sys.tech}</span>
                    </div>

                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      {sys.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
