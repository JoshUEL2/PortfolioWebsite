import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  ArrowLeft,
  Gamepad2,
  Clapperboard,
  ExternalLink,
  Award,
  X,
  BookOpen,
  Library
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ALL_PROJECTS, GAME_FILTER_DISCIPLINES } from '../data/allProjectsData';
import { getAssetUrl, isSpecificRepo, isSpecificLinkedIn } from '../utils/assetUrl';

const FLAGSHIP_SLUGS = new Set(['rastacats', 'delirium', 'rem', 'the-quarry']);

export default function AllProjectsPage({ onBackToHome, onSelectProject, isEmbedded = false }) {
  const [searchQuery, setSearchQuery] = useState('');
  // Default to 'vault-only' when embedded below Flagships so there is zero duplication!
  const [activeFilter, setActiveFilter] = useState(isEmbedded ? 'vault-only' : 'all');

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return ALL_PROJECTS.filter((proj) => {
      // If user is typing a search query, search across all 15 projects regardless of vault-only default
      let matchesFilter = true;
      if (!q) {
        if (activeFilter === 'vault-only') {
          matchesFilter = !FLAGSHIP_SLUGS.has(proj.slug);
        } else if (activeFilter === 'unreal') {
          matchesFilter = proj.engine.includes('Unreal') || proj.engine.includes('UE5');
        } else if (activeFilter === 'playable') {
          matchesFilter = Boolean(proj.links.itch || proj.links.demo);
        } else if (activeFilter === 'narrative') {
          matchesFilter = proj.discipline === 'narrative';
        }
      }

      if (!matchesFilter) return false;
      if (!q) return true;

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
    <section
      id="vault"
      className={`${isEmbedded ? 'py-20' : 'min-h-screen pt-28 pb-24'} px-4 max-w-6xl mx-auto`}
    >
      {/* Optional Back Navigation Bar when viewed standalone */}
      {!isEmbedded && onBackToHome && (
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-400" />
            <span>Back to Main Page</span>
          </button>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Showing {filteredProjects.length} of {ALL_PROJECTS.length} Projects
            </span>
          </div>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Library className="w-3.5 h-3.5 text-indigo-400" />
            <span>02 // The Game Vault ({ALL_PROJECTS.length} Total Projects)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
            Additional Prototypes, Builds &amp; Design Bibles
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            By default, this archive hides the 4 flagship projects above so you only see the remaining{' '}
            <strong className="text-white">11 games, prototypes, and GDDs</strong>. Switch tabs below to filter across all 15 builds by engine or discipline.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-80 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all 15 games by engine, tool..."
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

      {/* Discipline Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          {GAME_FILTER_DISCIPLINES.map((filter) => {
            const isActive = activeFilter === filter.id && !searchQuery;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => {
                  setActiveFilter(filter.id);
                  setSearchQuery('');
                }}
                className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white bg-indigo-600/35 border border-indigo-400/60 shadow-md shadow-indigo-950/40'
                    : 'text-slate-400 hover:text-slate-200 bg-white/[0.03] border border-white/10 hover:bg-white/[0.06]'
                }`}
              >
                <span>{filter.label}</span>
                <span className="ml-1.5 opacity-70 text-[10px] font-mono">
                  ({filter.count})
                </span>
              </button>
            );
          })}
        </div>

        <div className="text-xs font-mono text-slate-400">
          Showing <span className="text-white font-bold">{filteredProjects.length}</span> of {ALL_PROJECTS.length} builds
        </div>
      </div>

      {/* Games Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-white/[0.02] border border-white/10 rounded-3xl p-8">
          <p className="text-slate-400 text-sm mb-3">No projects matched your search criteria.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
            }}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
          >
            Show All 15 Projects
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
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
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.02, 0.15)
                }}
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

                    {/* Catalog Number Pill */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-indigo-300 pointer-events-none z-10">
                      #{project.catalogNumber}
                    </div>

                    {/* Engine Pill */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-slate-300 pointer-events-none z-10 max-w-[65%] truncate">
                      {project.engine}
                    </div>
                  </div>

                  {/* Category & Dates */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                    <span className="text-indigo-400 font-semibold truncate pr-2">
                      {project.categoryLabel}
                    </span>
                    <span className="shrink-0">{project.dates}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-indigo-200 transition-colors line-clamp-2 cursor-pointer font-['Syne',sans-serif]"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-3 font-normal">
                    {project.shortDesc}
                  </p>

                  {/* Understated Exhibition / Context Note */}
                  {project.funFact && (
                    <div className="mb-3 px-2.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-slate-300 flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{project.funFact}</span>
                    </div>
                  )}
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
                        href={project.links.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Watch Video Walkthrough"
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
                        aria-label="GitHub Repository"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-110"
                        title="Source Repository"
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
                        aria-label="LinkedIn Post"
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
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}
