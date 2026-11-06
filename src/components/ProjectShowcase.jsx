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

export default function ProjectShowcase({ onSelectProject, onViewAllProjects }) {
  const [activeCategory, setActiveCategory] = useState('gameplay');

  const categoryProjects = PROJECTS.filter((p) => p.category === activeCategory);
  const quickShelfProjects = PROJECTS.filter((p) => p.category !== activeCategory).slice(0, 7);

  return (
    <section id="portfolio" className="relative py-20 px-4 sm:px-6 lg:px-12 bg-[#06070D]">
      <div className="max-w-[1360px] mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-10 border-b border-[#1A2234]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#0D111A] border border-[#1A2234] text-[#00F2FE] text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5 text-[#00F2FE]" />
              <span>STAGE ARCHIVE // DISCIPLINE SELECT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight font-['Space_Grotesk',sans-serif] uppercase">
              Selected Work Deck
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl font-['Plus_Jakarta_Sans',sans-serif]">
            Select a discipline below to inspect Unreal Engine 5 C++ mechanics, HLSL shaders, VR physics prototypes, and interactive companion systems.
          </p>
        </div>

        {/* 5-Tab Discipline Selector */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-2 rounded bg-[#0D111A] border border-[#1A2234]">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const IconComponent = CATEGORY_ICONS[cat.icon] || Gamepad2;
              const count = PROJECTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    audioEngine.playTick(550, 150);
                    setActiveCategory(cat.id);
                  }}
                  className={`px-3 py-2.5 rounded text-left transition-all duration-150 cursor-pointer border flex items-center justify-between gap-2 font-mono ${
                    isActive
                      ? 'text-[#06070D] bg-[#00F2FE] border-[#00F2FE] font-bold shadow-md'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] bg-[#06070D] hover:bg-[#131926] border-[#1A2234]'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <IconComponent
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? 'text-[#06070D]' : 'text-[#00F2FE]'
                      }`}
                    />
                    <span className="text-xs uppercase tracking-wider truncate">
                      {cat.label}
                    </span>
                  </div>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                      isActive
                        ? 'bg-[#06070D] text-[#00F2FE]'
                        : 'bg-[#131926] text-[#64748B]'
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
        <div className="mt-16 rounded bg-[#0D111A] border border-[#1A2234] p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#1A2234]">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#06070D] border border-[#1A2234] text-[#00F2FE] text-[11px] font-mono uppercase tracking-widest mb-2">
                <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
                <span>ARCHIVE VAULT // {PROJECTS.length} PRODUCTION BUILDS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight font-['Space_Grotesk',sans-serif] uppercase">
                Explore The Complete Technical Archive
              </h3>
              <p className="text-sm text-[#94A3B8] mt-2 font-['Plus_Jakarta_Sans',sans-serif]">
                Inspect all <strong className="text-[#F8FAFC]">{PROJECTS.length} game builds, physics prototypes, companion websites, and design bibles</strong> in one searchable matrix.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                audioEngine.playSweep();
                if (onViewAllProjects) onViewAllProjects();
              }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-[#00F2FE] hover:bg-[#38BDF8] active:scale-[0.97] text-[#06070D] font-mono font-bold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4 text-[#06070D]" />
              <span>Launch Full Vault ({PROJECTS.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick-Access Cartridge Row */}
          <div className="pt-6">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
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
                  className="flex items-center gap-3 p-2.5 rounded bg-[#080C14] hover:bg-[#131926] border border-[#1A2234] hover:border-[#00F2FE] text-left transition-all cursor-pointer group"
                >
                  <img
                    src={getAssetUrl(item.image)}
                    alt={item.title}
                    className="w-12 h-12 rounded object-cover shrink-0 border border-[#1A2234]"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-mono text-[#00F2FE] uppercase tracking-wider truncate">
                      {item.discipline}
                    </div>
                    <div className="text-xs font-bold text-[#F8FAFC] truncate group-hover:text-[#00F2FE]">
                      {item.title.split(':')[0]}
                    </div>
                    <div className="text-[10px] font-mono text-[#64748B] truncate">
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
