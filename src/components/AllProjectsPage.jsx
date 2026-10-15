import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  ArrowLeft, 
  Gamepad2, 
  Video, 
  ExternalLink, 
  Award, 
  X,
  BookOpen
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ALL_PROJECTS, GAME_FILTER_DISCIPLINES } from '../data/allProjectsData';

export default function AllProjectsPage({ onBackToHome, onSelectProject }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Filtered & searched games
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((proj) => {
      // Discipline filter
      let matchesFilter = true;
      if (activeFilter === 'unreal') {
        matchesFilter = proj.engine.includes('Unreal') || proj.engine.includes('UE5');
      } else if (activeFilter === 'playable') {
        matchesFilter = Boolean(proj.links.itch || proj.links.demo);
      } else if (activeFilter === 'narrative') {
        matchesFilter = proj.discipline === 'narrative';
      }

      if (!matchesFilter) return false;

      // Query search
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        proj.title.toLowerCase().includes(q) ||
        proj.shortDesc.toLowerCase().includes(q) ||
        proj.engine.toLowerCase().includes(q) ||
        proj.role.toLowerCase().includes(q) ||
        (proj.tools && proj.tools.some((t) => t.toLowerCase().includes(q))) ||
        (proj.highlights && proj.highlights.some((h) => h.toLowerCase().includes(q)))
      );
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 max-w-7xl mx-auto">
      {/* Back Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-105 active:scale-95 text-xs font-semibold uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-400" />
          <span>Back to Featured Showcase</span>
        </button>

        <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Showing {filteredProjects.length} of {ALL_PROJECTS.length} Games & Prototypes</span>
        </div>
      </div>

      {/* Page Title & Mission */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Gamepad2 className="w-3.5 h-3.5 text-indigo-400" />
          <span>Complete Games & Prototypes Catalogue</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Syne',sans-serif] mb-4">
          All Games & Prototypes
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
          The complete 17-game engineering and prototyping catalogue migrated from LinkedIn, GitHub repositories, itch.io builds, and University of East London coursework—spanning Unreal Engine 5 gameplay physics, AI state machines, procedural generation, and ludonarrative design.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="space-y-4 mb-10">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search games by title, engine, or mechanics..."
            className="w-full pl-10 pr-10 py-3 rounded-2xl bg-[#090b16]/90 border border-white/15 focus:border-indigo-500 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Discipline Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {GAME_FILTER_DISCIPLINES.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white bg-indigo-600/30 border border-indigo-500/50 shadow-md shadow-indigo-900/30'
                    : 'text-slate-400 hover:text-slate-200 bg-white/[0.03] border border-white/5 hover:bg-white/[0.06]'
                }`}
              >
                <span>{filter.label}</span>
                <span className="ml-1.5 opacity-60 text-[10px] font-mono">
                  ({filter.count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Games Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 bg-white/[0.02] border border-white/5 rounded-3xl p-8">
          <p className="text-slate-400 text-base mb-3">No games matched your criteria.</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isTopScore = project.title.includes('92%') || project.shortDesc?.includes('92%');
            const isFirstClass = project.title.includes('72%') || project.shortDesc?.includes('72%');
            const youtubeId = project.youtubeId || (project.links?.video ? project.links.video.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)?.[1] : null);

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.02, 0.2),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group relative rounded-2xl bg-[#090b16]/90 border border-white/10 hover:border-indigo-500/40 p-5 backdrop-blur-xl flex flex-col justify-between shadow-xl hover:shadow-[0_8px_35px_rgba(99,102,241,0.15)] transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Media Viewport: Direct In-Browser YouTube Video OR Clean Gaming Art */}
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950 border border-white/10 mb-4">
                    {youtubeId ? (
                      /* Live Embedded YouTube Video Playing Directly in Browser */
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                        title={`${project.title} Video Preview`}
                        className="w-full h-full border-0 rounded-xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : (
                      /* High-Resolution Gaming Concept Cover */
                      <div
                        onClick={() => onSelectProject(project)}
                        className="w-full h-full cursor-pointer group/thumb relative"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                      </div>
                    )}

                    {/* Catalog Index Badge */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-indigo-300 pointer-events-none z-10">
                      #{project.catalogNumber}
                    </div>

                    {/* Engine Pill */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-slate-300 pointer-events-none z-10">
                      {project.engine}
                    </div>

                    {/* Grade Commendation Ribbons */}
                    {isTopScore && (
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-500/40 text-[10px] font-bold text-emerald-300 flex items-center gap-1 shadow-md pointer-events-none z-10">
                        <Award className="w-3 h-3 text-emerald-400" />
                        <span>92% 1st Class</span>
                      </div>
                    )}
                    {isFirstClass && !isTopScore && (
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-emerald-950/90 border border-emerald-500/40 text-[10px] font-bold text-emerald-300 flex items-center gap-1 shadow-md pointer-events-none z-10">
                        <Award className="w-3 h-3 text-emerald-400" />
                        <span>72% 1st Class</span>
                      </div>
                    )}
                  </div>

                  {/* Category & Dates */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span className="text-indigo-400 font-semibold">{project.categoryLabel}</span>
                    <span>{project.dates}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-indigo-200 transition-colors line-clamp-2 cursor-pointer font-['Syne',sans-serif]"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Card Footer: Action Links & Deep Dive */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 mt-auto">
                  {/* External Links */}
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
                        href={project.links.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Watch Video Walkthrough"
                        className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-500/30 transition-all hover:scale-110"
                        title="Watch Walkthrough"
                      >
                        <Video className="w-3.5 h-3.5 text-red-400" />
                      </a>
                    )}

                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-110"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.links?.demo && !project.links?.itch && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo / Web App"
                        className="p-1.5 rounded-lg bg-indigo-950/60 hover:bg-indigo-900/80 text-indigo-300 border border-indigo-500/30 transition-all hover:scale-110"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                      </a>
                    )}

                    {project.links?.linkedin && (
                      <a
                        href={project.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Article / Post"
                        className="p-1.5 rounded-lg bg-blue-950/60 hover:bg-blue-900/80 text-blue-300 border border-blue-500/30 transition-all hover:scale-110"
                        title="LinkedIn Post"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                      </a>
                    )}
                  </div>

                  {/* Deep Dive Action */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white text-[11px] font-semibold uppercase tracking-wider border border-indigo-500/30 transition-all cursor-pointer"
                  >
                    <span>Details</span>
                    <BookOpen className="w-3 h-3 text-indigo-400" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
