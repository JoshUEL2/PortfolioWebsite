import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, PROJECTS } from '../data/portfolioData';
import { ALL_PROJECTS } from '../data/allProjectsData';
import { getAssetUrl } from '../utils/assetUrl';
import ProjectCard from './ProjectCard';
import { Layers, ArrowRight, Library, Gamepad2, Sparkles } from 'lucide-react';

export default function ProjectShowcase({ onSelectProject, onViewAllProjects }) {
  const [activeCategory, setActiveCategory] = useState('flagships');

  const filteredProjects =
    activeCategory === 'flagships'
      ? PROJECTS.filter((p) => p.isFlagship)
      : PROJECTS.filter((p) => p.category === activeCategory);

  // Remaining vault games not shown in the 8 featured slots so visitors can see what else is in the 15-game vault at a glance
  const featuredSlugs = new Set(['rastacats', 'delirium', 'rem', 'the-quarry', 'labraz', 'daydream', 'faith-over-fear', 'state-machine-showcase']);
  const vaultAdditionalGames = ALL_PROJECTS.filter((p) => !featuredSlugs.has(p.slug));

  return (
    <section id="portfolio" className="relative py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          <span>Interactive Portfolio Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Syne',sans-serif]">
          Featured Games & Systems
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Flagship Unreal Engine 5 vertical slices, custom polar gravity physics, OpenXR seated VR locomotion, and interactive ludonarrative architectures.
        </p>
      </div>

      {/* Category Accordion / Tab Selector (4 Tabs, Defaulting to Flagship Spotlights) */}
      <div className="flex justify-center mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-[#090b16]/80 border border-white/10 backdrop-blur-xl w-full max-w-5xl shadow-xl">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-3 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/40 to-violet-600/40 border border-indigo-500/50 rounded-xl shadow-md -z-10"
                  />
                )}
                <div className="font-bold text-xs sm:text-sm tracking-wide font-['Syne',sans-serif]">
                  {cat.label}
                </div>
                <div className="text-[11px] text-slate-400 hidden sm:block truncate mt-0.5">
                  {cat.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Cards Stack */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="space-y-8"
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={{ ...project, number: String(idx + 1).padStart(2, '0') }}
              onSelectProject={onSelectProject}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Vault Quick-Shelf + All 15 Games Archive CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-[#0c0e1e]/90 border border-indigo-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden group"
      >
        {/* Glow Accent */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
              <Library className="w-3.5 h-3.5 text-indigo-400" />
              <span>Complete Games & Prototypes Vault ({ALL_PROJECTS.length} Projects)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
              Explore all {ALL_PROJECTS.length} games, prototypes & design bibles
            </h3>
            <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
              Every project above plus {vaultAdditionalGames.length} additional playable prototypes, procedural generators, multiplayer crawlers, and design bibles in the full searchable catalogue.
            </p>
          </div>

          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            <span>Browse All {ALL_PROJECTS.length} Games →</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Quick-Jump Shelf for the Additional Vault Games */}
        <div className="relative z-10 pt-5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-300/80 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Quick-Open Additional Vault Projects (Click any card for instant Case Study):</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {vaultAdditionalGames.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectProject(item)}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 hover:bg-indigo-950/60 border border-white/10 hover:border-indigo-500/40 text-left transition-all cursor-pointer group/mini"
              >
                <img
                  src={getAssetUrl(item.image)}
                  alt={item.title}
                  className="w-12 h-12 rounded-lg object-cover shrink-0 border border-white/10 group-hover/mini:scale-105 transition-transform"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-white truncate group-hover/mini:text-indigo-200">
                    {item.title.split(':')[0]}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    {item.engine}
                  </div>
                </div>
                <Gamepad2 className="w-3.5 h-3.5 text-indigo-400 opacity-60 group-hover/mini:opacity-100 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
