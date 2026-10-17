import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, PROJECTS } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import {
  Layers,
  Search,
  X,
  Gamepad2,
  Clapperboard,
  ExternalLink,
  Award,
  BookOpen
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { getAssetUrl, isSpecificRepo, isSpecificLinkedIn } from '../utils/assetUrl';

export default function ProjectShowcase({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('gameplay');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return PROJECTS.filter((proj) => {
      if (!q && activeCategory !== 'all' && proj.category !== activeCategory) {
        return false;
      }
      if (!q) return true;
      return (
        proj.title.toLowerCase().includes(q) ||
        proj.shortDesc.toLowerCase().includes(q) ||
        proj.engine.toLowerCase().includes(q) ||
        proj.discipline.toLowerCase().includes(q) ||
        (proj.tools && proj.tools.some((t) => t.toLowerCase().includes(q))) ||
        (proj.highlights && proj.highlights.some((h) => h.toLowerCase().includes(q)))
      );
    });
  }, [activeCategory, searchQuery]);

  // When viewing a specific discipline tab (and not searching or viewing 'all'),
  // show the primary deep-dive cards at full width and the additional projects in that category in a 3-column grid below.
  const isCompactAllView = activeCategory === 'all' || Boolean(searchQuery.trim());
  const primaryCards = isCompactAllView
    ? []
    : filteredProjects.filter((p) => p.isPrimaryCard);
  const gridCards = isCompactAllView
    ? filteredProjects
    : filteredProjects.filter((p) => !p.isPrimaryCard);

  return (
    <section id="portfolio" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header + Search Input */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>01 // Projects by Discipline (15 Builds, Prototypes &amp; Bibles)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
            Games, Shaders &amp; Design Work
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Every project is organised into its exact discipline below with zero duplication. Select a discipline tab to inspect full technical breakdowns, live Phase 1 and Phase 2 evolutions, and shader or physics logic.
          </p>
        </div>

        {/* Search Input across all 15 projects */}
        <div className="relative w-full lg:w-80 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all 15 projects by engine, tool..."
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#090b16]/90 border border-white/15 focus:border-indigo-500 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 6-Tab Discipline Selector */}
      <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#090b16]/85 border border-white/10 backdrop-blur-xl shadow-xl">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id && !searchQuery.trim();
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery('');
                }}
                className={`relative px-4 py-3 rounded-xl text-left transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-indigo-600/35 to-violet-600/35 border-indigo-400/60 shadow-md'
                    : 'text-slate-400 hover:text-slate-200 bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.05]'
                }`}
              >
                <div className="font-bold text-xs sm:text-sm tracking-wide font-['Syne',sans-serif] flex items-center justify-between">
                  <span>{cat.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>
                <div className="text-[11px] text-slate-400 truncate mt-0.5">
                  {cat.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Display Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${searchQuery}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
          className="space-y-10"
        >
          {/* Full-Width Primary Technical Breakdown Cards */}
          {primaryCards.length > 0 && (
            <div className="space-y-8">
              {primaryCards.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={{ ...project, number: String(idx + 1).padStart(2, '0') }}
                  onSelectProject={onSelectProject}
                />
              ))}
            </div>
          )}

          {/* Additional Projects in Category (or Full 15-Project Grid when 'All 15 Projects' is active) */}
          {gridCards.length > 0 && (
            <div>
              {primaryCards.length > 0 && (
                <div className="flex items-center justify-between mb-5 pt-4 border-t border-white/10">
                  <h3 className="text-sm sm:text-base font-bold text-indigo-200 font-['Syne',sans-serif]">
                    Additional {CATEGORIES.find((c) => c.id === activeCategory)?.label.split('(')[0]} Projects ({gridCards.length})
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    Click any project for full breakdown
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridCards.map((project) => {
                  const youtubeId =
                    project.youtubeId ||
                    (project.links?.video
                      ? project.links.video.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)?.[1]
                      : null);

                  const isLiveDemo =
                    Boolean(project.links?.demo) &&
                    !project.links.demo.includes('github.com') &&
                    !project.links.demo.includes('itch.io');

                  return (
                    <div
                      key={project.id}
                      className="group relative rounded-2xl bg-[#090b16]/90 border border-white/10 hover:border-indigo-500/40 p-5 backdrop-blur-xl flex flex-col justify-between shadow-xl hover:shadow-[0_8px_35px_rgba(99,102,241,0.14)] transition-all duration-300 hover:-translate-y-1"
                    >
                      <div>
                        {/* Media Viewport */}
                        <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950 border border-white/10 mb-4">
                          {project.video ? (
                            <div
                              onClick={() => onSelectProject(project)}
                              className="w-full h-full cursor-pointer group/thumb relative"
                            >
                              <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                poster={project.image ? getAssetUrl(project.image) : undefined}
                                className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                              >
                                <source src={getAssetUrl(project.video)} type="video/mp4" />
                              </video>
                              <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/20 text-[9px] font-mono text-emerald-300 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Video
                              </div>
                            </div>
                          ) : youtubeId ? (
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=1&rel=0&modestbranding=1`}
                              title={`${project.title} Video Preview`}
                              className="w-full h-full border-0 rounded-xl"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              loading="lazy"
                            />
                          ) : (
                            <div
                              onClick={() => onSelectProject(project)}
                              className="w-full h-full cursor-pointer group/thumb relative"
                            >
                              <img
                                src={getAssetUrl(project.image)}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>
                          )}

                          {/* Category Pill */}
                          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-indigo-300 pointer-events-none z-10">
                            {project.categoryLabel}
                          </div>

                          {/* Grade Badge if present */}
                          {project.gradeBadge && (
                            <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-500/40 text-[10px] font-mono font-bold text-emerald-300 pointer-events-none z-10 flex items-center gap-1">
                              <Award className="w-3 h-3 text-emerald-400" />
                              <span>{project.gradeBadge}</span>
                            </div>
                          )}
                        </div>

                        {/* Engine & Dates */}
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                          <span className="text-indigo-300 truncate pr-2">{project.engine}</span>
                          <span className="shrink-0">{project.dates}</span>
                        </div>

                        {/* Title */}
                        <h4
                          onClick={() => onSelectProject(project)}
                          className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-indigo-200 transition-colors line-clamp-2 cursor-pointer font-['Syne',sans-serif]"
                        >
                          {project.title}
                        </h4>

                        {/* Description */}
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-3 font-normal">
                          {project.shortDesc}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 mt-auto">
                        <div className="flex items-center gap-1.5">
                          {project.links?.itch && (
                            <a
                              href={project.links.itch}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Play on Itch.io"
                              className="p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 border border-rose-500/30 transition-all hover:scale-110"
                              title="Play on Itch.io"
                            >
                              <Gamepad2 className="w-3.5 h-3.5 text-rose-400" />
                            </a>
                          )}

                          {project.links?.video && !youtubeId && (
                            <a
                              href={getAssetUrl(project.links.video)}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Watch Video"
                              className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-500/30 transition-all hover:scale-110"
                              title="Watch Video"
                            >
                              <Clapperboard className="w-3.5 h-3.5 text-red-400" />
                            </a>
                          )}

                          {isSpecificRepo(project.links?.github) && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Source Code"
                              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-110"
                              title="Source Code"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                            </a>
                          )}

                          {isLiveDemo && (
                            <a
                              href={getAssetUrl(project.links.demo)}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Play in Browser"
                              className="p-1.5 rounded-lg bg-indigo-950/60 hover:bg-indigo-900/80 text-indigo-300 border border-indigo-500/30 transition-all hover:scale-110"
                              title="Play in Browser"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                            </a>
                          )}

                          {isSpecificLinkedIn(project.links?.linkedin) && (
                            <a
                              href={project.links.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="LinkedIn Breakdown"
                              className="p-1.5 rounded-lg bg-blue-950/60 hover:bg-blue-900/80 text-blue-300 border border-blue-500/30 transition-all hover:scale-110"
                              title="LinkedIn Breakdown"
                            >
                              <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                            </a>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/35 text-indigo-200 hover:text-white text-[11px] font-semibold uppercase tracking-wider border border-indigo-500/30 transition-all cursor-pointer"
                        >
                          <span>Breakdown</span>
                          <BookOpen className="w-3 h-3 text-indigo-400" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
