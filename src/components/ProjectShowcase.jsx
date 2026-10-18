import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Quick-jump shelf highlights projects from other categories or with embedded companion portals
  const quickShelfProjects = PROJECTS.filter((p) => p.category !== activeCategory).slice(0, 7);

  return (
    <section id="portfolio" className="relative py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/35 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-sm">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          <span>SELECTED GAMEPLAY, VR, SHADERS &amp; DESIGN</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Syne',sans-serif]">
          Featured Work by Discipline
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Select a discipline below to inspect my Unreal Engine 5 and Python builds, toggle between Phase 1 and Phase 2 project evolutions, interact with embedded companion websites and repo source code, or inspect the underlying maths.
        </p>
      </div>

      {/* 5-Tab Discipline Selector (Shortened titles, no numbers, zero truncation) */}
      <div className="mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 p-2.5 rounded-2xl bg-[#090b16]/90 border border-indigo-500/25 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const IconComponent = CATEGORY_ICONS[cat.icon] || Gamepad2;
            const count = PROJECTS.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-3.5 py-3 rounded-xl text-left transition-all duration-200 cursor-pointer border flex items-center justify-between gap-2 ${
                  isActive ? 'text-white border-indigo-400/70 shadow-lg shadow-indigo-950/50'
                    : 'text-slate-300 hover:text-white border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeDisciplinePill"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 bg-gradient-to-br from-indigo-600/50 via-indigo-900/45 to-violet-600/50 rounded-xl -z-10"
                  />
                )}
                <div className="flex items-center gap-2.5 min-w-0">
                  <IconComponent
                    className={`w-4 h-4 shrink-0 ${
                      isActive ? 'text-emerald-300' : 'text-indigo-400/80'
                    }`}
                  />
                  <span className="font-bold text-xs sm:text-[13px] leading-tight tracking-tight text-white">
                    {cat.label}
                  </span>
                </div>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0 ${
                    isActive ? 'bg-black/45 text-emerald-300 border border-emerald-400/30'
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

      {/* Category Project Cards Stack */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
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
      </AnimatePresence>

      {/* BOTTOM GAME-STYLE "EXPLORE ALL MY PROJECTS" PORTAL TERMINAL */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 rounded-3xl bg-gradient-to-br from-[#0c1024] via-[#090b18] to-[#120d26] border-2 border-indigo-500/40 p-6 sm:p-8 shadow-[0_0_70px_rgba(99,102,241,0.22)] relative overflow-hidden group"
      >
        {/* Corner Game-HUD Brackets */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-indigo-400/70 pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-indigo-400/70 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-indigo-400/70 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-indigo-400/70 pointer-events-none" />

        {/* Ambient Radial Highlight */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/25 transition-all duration-700" />
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Portal Header & Big Game-Style Launch Button */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-7 border-b border-indigo-500/25">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/15 border border-indigo-400/40 text-indigo-200 text-[11px] font-mono uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>GAME VAULT TERMINAL // {PROJECTS.length} REAL PROJECTS &amp; COMPANION PORTALS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-['Syne',sans-serif]">
              Explore All My Projects &amp; Design Bibles
            </h3>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Launch the full game-style project vault to search and filter across all <strong className="text-white">{PROJECTS.length} games, physics prototypes, embedded marketing websites, and downloadable GDDs</strong> in one view.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewAllProjects}
            className="relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:from-indigo-500 hover:to-violet-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_35px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.75)] border border-indigo-300/40 hover:scale-[1.04] active:scale-[0.98] transition-all shrink-0 cursor-pointer group/btn"
          >
            <Gamepad2 className="w-5 h-5 text-emerald-300" />
            <span>Explore All {PROJECTS.length} Projects</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Interactive Cartridge Quick-Select Shelf */}
        <div className="relative z-10 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-200 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Other Discipline Cartridges (Click any cartridge to inspect directly):</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
              [READY TO LAUNCH]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {quickShelfProjects.map((item) => {
              const theme = getProjectTheme(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectProject(item)}
                  className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all cursor-pointer group/mini shadow-md hover:-translate-y-0.5 overflow-hidden relative ${theme.compactContainerClass}`}
                >
                  <img
                    src={getAssetUrl(item.image)}
                    alt={item.title}
                    className={`w-12 h-12 rounded-lg object-cover shrink-0 border group-hover/mini:scale-105 transition-transform ${theme.mediaHolderClass}`}
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1 relative z-10">
                    <div className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider truncate">
                      {item.discipline}
                    </div>
                    <div className="text-xs font-bold text-white truncate group-hover/mini:text-indigo-200">
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
              className="flex items-center justify-between gap-3 p-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/35 border border-dashed border-indigo-400/50 hover:border-indigo-300 text-left transition-all cursor-pointer group/tile"
            >
              <div>
                <div className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider font-bold">
                  FULL CATALOGUE
                </div>
                <div className="text-xs font-extrabold text-white mt-0.5">
                  Open All {PROJECTS.length} Builds &amp; Filters →
                </div>
              </div>
              <Gamepad2 className="w-5 h-5 text-indigo-300 group-hover/tile:scale-110 transition-transform shrink-0" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
