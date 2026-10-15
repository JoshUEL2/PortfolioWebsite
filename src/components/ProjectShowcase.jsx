import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, PROJECTS } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { Layers, Sparkles } from 'lucide-react';

export default function ProjectShowcase({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('concepts');

  const filteredProjects = PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/25 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          <span>Interactive Portfolio Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Syne',sans-serif]">
          Featured Works & Systems
        </h2>
        <p className="text-slate-300 text-base sm:text-lg">
          Select a category below to explore flagship UE5 projects, mathematical gameplay mechanics, and ludonarrative architectures.
        </p>
      </div>

      {/* Category Accordion / Tab Selector */}
      <div className="flex justify-center mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl w-full max-w-3xl shadow-lg">
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
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
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
          initial={{ opacity: 0, y: 20 }}
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
    </section>
  );
}
