import { useState } from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES, PROJECTS } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import {
  Layers,
  Gamepad2,
  Glasses,
  Sparkles,
  Compass,
  BookOpen,
  ArrowRight,
  Terminal
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';
import { getProjectTheme } from '../utils/projectThemes';

const CATEGORY_ICONS = {
  Gamepad2,
  Glasses,
  Sparkles,
  Compass,
  BookOpen
};

export default function ProjectShowcase({ onSelectProject, onViewAllProjects }) {
  const [activeCategory, setActiveCategory] = useState('gameplay');

  const categoryProjects = PROJECTS.filter((p) => p.category === activeCategory);
  const quickShelfProjects = PROJECTS.filter((p) => p.category !== activeCategory).slice(0, 7);

  return (
    <section id="portfolio" className="relative py-20 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1720px] mx-auto w-full overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-400/30 text-sky-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span>SELECTED GAMEPLAY, VR, SHADERS &amp; DESIGN</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Space_Grotesk',sans-serif]">
          Featured Work by Discipline
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Select a discipline below to inspect Unreal Engine 5 and Python builds, toggle between Phase 1 and Phase 2 evolutions, test embedded companion sites, or review underlying systems code.
        </p>
      </div>

      {/* 5-Tab Discipline Selector (Obsidian + Steel-Cyan) */}
      <div className="mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-2 rounded-2xl bg-[#0b0e14] border border-white/10 shadow-xl">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const IconComponent = CATEGORY_ICONS[cat.icon] || Gamepad2;
            const count = PROJECTS.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-3.5 py-3 rounded-xl text-left transition-all duration-150 cursor-pointer border flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  isActive
                    ? 'text-white border-sky-400/60 shadow-md'
                    : 'text-slate-300 hover:text-white border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeDisciplinePill"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 bg-sky-600/25 rounded-xl -z-10"
                  />
                )}
                <div className="flex items-center gap-2.5 min-w-0">
                  <IconComponent
                    className={`w-4 h-4 shrink-0 ${
                      isActive ? 'text-sky-300' : 'text-slate-400'
                    }`}
                  />
                  <span className="font-bold text-xs sm:text-[13px] leading-tight tracking-tight text-white">
                    {cat.label}
                  </span>
                </div>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 ${
                    isActive
                      ? 'bg-black/45 text-emerald-300 border border-emerald-400/30'
                      : 'bg-white/5 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Project Cards Stack (Instant crisp transition — never stalls exiting infinite animations) */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="space-y-8"
      >
        {categoryProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelectProject={onSelectProject}
          />
        ))}
      </motion.div>

      {/* BOTTOM VAULT LAUNCHER PORTAL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-14 rounded-2xl bg-[#0b0e14] border border-sky-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden group"
      >
        {/* Corner Viewport Brackets */}
        <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-sky-400/60 pointer-events-none" />
        <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-sky-400/60 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-sky-400/60 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-sky-400/60 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950/60 border border-sky-400/30 text-sky-200 text-[11px] font-mono uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>PROJECT VAULT // {PROJECTS.length} COMPLETE BUILDS &amp; COMPANION PORTALS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-['Space_Grotesk',sans-serif]">
              Explore All My Projects &amp; Design Bibles
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Launch the searchable archive vault to filter across all <strong className="text-white">{PROJECTS.length} games, physics prototypes, interactive web portals, and downloadable GDDs</strong> in one grid.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewAllProjects}
            className="relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-sky-950/50 border border-sky-400/45 hover:scale-[1.03] active:scale-[0.98] transition-all shrink-0 cursor-pointer group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <Gamepad2 className="w-5 h-5 text-sky-100" />
            <span>Explore All {PROJECTS.length} Projects</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cartridge Quick-Select Shelf */}
        <div className="relative z-10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-sky-200 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Other Discipline Cartridges (Click any entry to inspect directly):</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
              [READY]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3">
            {quickShelfProjects.map((item) => {
              const theme = getProjectTheme(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectProject(item)}
                  className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all cursor-pointer group/mini shadow-md hover:-translate-y-0.5 overflow-hidden relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${theme.compactContainerClass}`}
                >
                  <img
                    src={getAssetUrl(item.image)}
                    alt={item.title}
                    className={`w-12 h-12 rounded-lg object-cover shrink-0 border group-hover/mini:scale-105 transition-transform ${theme.mediaHolderClass}`}
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1 relative z-10">
                    <div className="text-[10px] font-mono text-sky-400 uppercase tracking-wider truncate">
                      {item.discipline}
                    </div>
                    <div className="text-xs font-bold text-white truncate group-hover/mini:text-sky-200">
                      {item.title.split(':')[0]}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 truncate">
                      {item.engine.split('(')[0]}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* 8th Slot: Direct Vault Launcher Tile */}
            <button
              type="button"
              onClick={onViewAllProjects}
              className="flex items-center justify-between gap-3 p-3 rounded-xl bg-sky-600/20 hover:bg-sky-600/35 border border-dashed border-sky-400/50 hover:border-sky-300 text-left transition-all cursor-pointer group/tile focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <div>
                <div className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider font-bold">
                  FULL CATALOGUE
                </div>
                <div className="text-xs font-extrabold text-white mt-0.5">
                  Open All {PROJECTS.length} Builds &amp; Filters →
                </div>
              </div>
              <Gamepad2 className="w-5 h-5 text-sky-300 group-hover/tile:scale-110 transition-transform shrink-0" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
