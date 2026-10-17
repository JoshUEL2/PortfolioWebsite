import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, PROJECTS } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { Layers, ArrowDown } from 'lucide-react';

export default function ProjectShowcase({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('flagships');

  const filteredProjects =
    activeCategory === 'flagships'
      ? PROJECTS.filter((p) => p.isFlagship)
      : PROJECTS.filter((p) => p.category === activeCategory);

  const scrollToVault = () => {
    const el = document.getElementById('vault');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>01 // Flagship Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
            Selected Work & Technical Breakdowns
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Switch between <strong className="text-white">What I Built</strong> and{' '}
            <strong className="text-indigo-300">Under the Hood: Math &amp; Logic</strong> directly on any card, or toggle live between Phase 1 prototypes and Phase 2 remasters.
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToVault}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-indigo-300 hover:text-white text-xs font-mono uppercase tracking-wider border border-white/10 hover:border-indigo-500/40 transition-all shrink-0 self-start md:self-auto cursor-pointer"
        >
          <span>Jump to Game Archive (11 More Builds)</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Category Filter Bar */}
      <div className="flex justify-center mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-[#090b16]/85 border border-white/10 backdrop-blur-xl w-full shadow-xl">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
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
    </section>
  );
}
