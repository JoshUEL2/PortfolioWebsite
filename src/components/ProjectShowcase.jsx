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
import { audioEngine } from '../utils/audioEngine';

const CATEGORY_ICONS = {
  Gamepad2,
  Glasses,
  Sparkles,
  Compass,
  BookOpen
};

const CATEGORY_COLORS = {
  gameplay: 'text-emerald-400',
  'vr-physics': 'text-cyan-400',
  'shaders-art': 'text-violet-400',
  'level-design': 'text-amber-400',
  narrative: 'text-rose-400'
};

export default function ProjectShowcase({ onSelectProject, onViewAllProjects }) {
  const [activeCategory, setActiveCategory] = useState('gameplay');

  const categoryProjects = PROJECTS.filter((p) => p.category === activeCategory);
  const quickShelfProjects = PROJECTS.filter((p) => p.category !== activeCategory).slice(0, 7);

  return (
    <section id="portfolio" className="relative py-20 px-4 sm:px-6 lg:px-12 bg-[#070814]">
      <div className="max-w-[1360px] mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-10 border-b border-indigo-500/25">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0c0a22]/90 border border-indigo-500/35 text-indigo-300 text-xs font-mono mb-3 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>STAGE ARCHIVE // DISCIPLINE SELECT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight font-['Space_Grotesk',sans-serif] uppercase">
              Selected Work Deck
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl font-['Plus_Jakarta_Sans',sans-serif]">
            Select a discipline below to inspect Unreal Engine 5 C++ mechanics, HLSL shaders, VR physics prototypes, and interactive companion systems.
          </p>
        </div>

        {/* 5-Tab Discipline Selector */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-2 rounded-xl bg-[#0c0a22]/90 border border-indigo-500/30 shadow-lg">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const IconComponent = CATEGORY_ICONS[cat.icon] || Gamepad2;
              const iconColor = CATEGORY_COLORS[cat.id] || 'text-indigo-400';
              const count = PROJECTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    audioEngine.playTick(550, 150);
                    setActiveCategory(cat.id);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-left transition-all duration-150 cursor-pointer border flex items-center justify-between gap-2 font-mono ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 border-indigo-400/80 font-bold shadow-lg shadow-indigo-950/60'
                      : 'text-slate-300 hover:text-white bg-[#070616] hover:bg-[#13112c] border-white/5 hover:border-indigo-500/30'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <IconComponent
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? 'text-white' : iconColor
                      }`}
                    />
                    <span className="text-xs uppercase tracking-wider truncate">
                      {cat.label}
                    </span>
                  </div>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                      isActive
                        ? 'bg-black/50 text-emerald-300 border border-emerald-400/40'
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
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

        {/* BOTTOM TECHNICAL VAULT DECK */}
        <div className="mt-16 rounded-2xl bg-[#0c0a22]/95 border border-indigo-500/35 p-6 sm:p-8 shadow-[0_0_50px_rgba(99,102,241,0.15)]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-indigo-500/25">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#09071a] border border-indigo-500/35 text-indigo-300 text-[11px] font-mono uppercase tracking-widest mb-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>ARCHIVE VAULT // {PROJECTS.length} PRODUCTION BUILDS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight font-['Space_Grotesk',sans-serif] uppercase">
                Explore The Complete Technical Archive
              </h3>
              <p className="text-sm text-slate-300 mt-2 font-['Plus_Jakarta_Sans',sans-serif]">
                Inspect all <strong className="text-white">{PROJECTS.length} game builds, physics prototypes, companion websites, and design bibles</strong> in one searchable matrix.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                audioEngine.playSweep();
                if (onViewAllProjects) onViewAllProjects();
              }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:from-indigo-500 hover:to-violet-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-[0_0_25px_rgba(99,102,241,0.5)] border border-indigo-400/40 hover:scale-[1.02] active:scale-[0.97]"
            >
              <Gamepad2 className="w-4 h-4 text-emerald-300" />
              <span>Launch Full Vault ({PROJECTS.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick-Access Cartridge Row */}
          <div className="pt-6">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Cartridge Quick-Select:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {quickShelfProjects.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    audioEngine.playTick(600, 150);
                    onSelectProject(item);
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#09071a] hover:bg-[#13112c] border border-indigo-500/25 hover:border-indigo-400/60 text-left transition-all cursor-pointer group shadow-sm hover:-translate-y-0.5"
                >
                  <img
                    src={getAssetUrl(item.image)}
                    alt={item.title}
                    className="w-12 h-12 rounded-lg object-cover shrink-0 border border-white/10 group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider truncate">
                      {item.discipline}
                    </div>
                    <div className="text-xs font-bold text-white truncate group-hover:text-indigo-200">
                      {item.title.split(':')[0]}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 truncate">
                      {item.engine.split('(')[0]}
                    </div>
                  </div>
                </button>
              ))}

              <button
                type="button"
                onClick={() => {
                  audioEngine.playSweep();
                  if (onViewAllProjects) onViewAllProjects();
                }}
                className="flex items-center justify-between gap-3 p-3 rounded bg-[#080C14] hover:bg-[#131926] border border-dashed border-[#F59E0B]/50 hover:border-[#F59E0B] text-left transition-all cursor-pointer"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#F59E0B] uppercase tracking-wider font-bold">
                    FULL CATALOGUE
                  </div>
                  <div className="text-xs font-bold text-[#F8FAFC] mt-0.5 font-mono">
                    View All {PROJECTS.length} Builds →
                  </div>
                </div>
                <Gamepad2 className="w-5 h-5 text-[#F59E0B] shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
