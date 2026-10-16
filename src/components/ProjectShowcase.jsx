import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, PROJECTS } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { Layers, ArrowRight, Library } from 'lucide-react';

export default function ProjectShowcase({ onSelectProject, onViewAllProjects }) {
  const [activeCategory, setActiveCategory] = useState('concepts');

  const filteredProjects = PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          <span>Interactive Portfolio Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Syne',sans-serif]">
          Featured Works & Systems
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Explore flagship Unreal Engine 5 systems, polar physics calculations, and interactive ludonarrative architectures.
        </p>
      </div>

      {/* Category Accordion / Tab Selector */}
      <div className="flex justify-center mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-[#090b16]/80 border border-white/10 backdrop-blur-xl w-full max-w-3xl shadow-xl">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-3 rounded-xl text-left sm:text-center transition-all duration-300 ${
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
                <div className="text-[11px] text-slate-400 hidden md:block truncate mt-0.5">
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
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* All Games Archive Banner CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-[#0c0e1e]/90 border border-indigo-500/30 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group"
      >
        {/* Glow Accent */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700" />

        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <Library className="w-3.5 h-3.5 text-indigo-400" />
            <span>Games & Interactive Systems Directory</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
            Looking for all 17 games and prototypes?
          </h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Browse the comprehensive games catalogue containing all playable builds on itch.io, UE5 mechanics, game jam prototypes, and level design projects with verified links.
          </p>
        </div>

        <button
          onClick={onViewAllProjects}
          className="relative z-10 inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
        >
          <span>Explore All 17 Games →</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
