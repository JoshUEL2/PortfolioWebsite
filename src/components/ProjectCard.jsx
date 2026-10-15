import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Gamepad2, Sparkles, BookOpen, Video, Terminal, Award } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelectProject }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // 3D Parallax Mouse Tracking Tilt
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: Number((y * -10).toFixed(2)),
      rotateY: Number((x * 10).toFixed(2)),
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  // Detect grade commendations
  const isTopScore = project.tagline?.includes('92%') || project.title?.includes('92%') || project.shortDesc?.includes('92%');
  const isFirstClass = project.tagline?.includes('72%') || project.title?.includes('72%') || project.shortDesc?.includes('72%');
  const isSelectedShowcase = project.id === 'vr-showcase' || project.shortDesc?.includes('Sole Level 5');

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      layout
      // Reverse-Engineered Wix 3D Tactile Fold-in Overshoot Animation
      initial={{ opacity: 0, y: 35, rotateX: -15, perspective: 1000 }}
      animate={{ opacity: 1, y: 0, rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.55,
        ease: [0.175, 0.885, 0.32, 1.275], // Signature Wix overshoot bounce curve
      }}
      style={{
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      }}
      className="group relative rounded-3xl bg-[#0a0c18]/90 border border-white/10 hover:border-indigo-500/50 p-6 md:p-8 backdrop-blur-xl shadow-2xl transition-[border-color,box-shadow] duration-300 hover:shadow-[0_0_55px_rgba(99,102,241,0.22)]"
    >
      {/* Sci-Fi Cyber HUD Corner Brackets */}
      <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-indigo-400/40 group-hover:border-indigo-300 transition-colors pointer-events-none rounded-tl-sm" />
      <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-indigo-400/40 group-hover:border-indigo-300 transition-colors pointer-events-none rounded-tr-sm" />
      <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-indigo-400/40 group-hover:border-indigo-300 transition-colors pointer-events-none rounded-bl-sm" />
      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-indigo-400/40 group-hover:border-indigo-300 transition-colors pointer-events-none rounded-br-sm" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Details & Technical Highlights */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Header: Number, Discipline & Engine */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-3xl md:text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                {project.number}
              </span>
              <div className="h-4 w-[1px] bg-white/15" />
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-950/70 border border-indigo-500/35 text-indigo-300 shadow-sm">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                {project.discipline}
              </span>

              {/* Special Recognition Ribbon */}
              {isTopScore && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  <Award className="w-3 h-3 text-emerald-400" />
                  92% 1st Class
                </span>
              )}
              {isFirstClass && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  <Award className="w-3 h-3 text-emerald-400" />
                  72% 1st Class
                </span>
              )}
              {isSelectedShowcase && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-violet-950/80 border border-violet-500/40 text-violet-300">
                  <Award className="w-3 h-3 text-violet-400" />
                  Sole L5 Exhibitor
                </span>
              )}

              <span className="text-xs font-mono text-slate-400 ml-auto hidden sm:inline-block">
                {project.engine}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2 font-['Syne',sans-serif] group-hover:text-indigo-200 transition-colors">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="text-sm font-semibold text-indigo-400 mb-3 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {project.shortDesc}
            </p>

            {/* Key Technical Highlights */}
            <div className="space-y-2.5 mb-6">
              {project.highlights.slice(0, 3).map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 mt-1.5 shrink-0 shadow-sm" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {project.links.itch && (
              <a
                href={project.links.itch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-rose-900/40 hover:scale-105 active:scale-95 transition-all"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Play on Itch.io</span>
              </a>
            )}

            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-red-900/40 hover:scale-105 active:scale-95 transition-all"
              >
                <Video className="w-4 h-4" />
                <span>Watch Walkthrough</span>
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-white/10 hover:scale-105 active:scale-95 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}

            {project.links.demo && !project.links.itch && !project.links.video && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-semibold text-xs tracking-wider uppercase border border-indigo-500/30 hover:scale-105 active:scale-95 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Release</span>
              </a>
            )}

            <button
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-300 hover:text-white font-medium text-xs tracking-wider uppercase border border-white/10 transition-all ml-auto hover:border-indigo-500/40"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full Case Study</span>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Media Box with Cyber HUD */}
        <div
          onClick={() => onSelectProject(project)}
          className="lg:col-span-5 relative group/img cursor-pointer overflow-hidden rounded-2xl bg-slate-950 border border-white/15 shadow-2xl aspect-[16/10] flex items-center justify-center"
        >
          {/* Cyber HUD Framing Brackets */}
          <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-indigo-400/80 z-20 pointer-events-none" />
          <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-indigo-400/80 z-20 pointer-events-none" />
          <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-indigo-400/80 z-20 pointer-events-none" />
          <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-indigo-400/80 z-20 pointer-events-none" />

          {/* Media Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover/img:scale-108 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          {/* Sci-Fi Scanline Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,38,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />

          {/* Glare Sheen Sweep Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-white/15 to-indigo-500/0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Top Engine Badge */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-slate-200 z-10 shadow-md">
            {project.engine}
          </div>

          {/* Floating Telemetry Badge in bottom-left */}
          <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[#090b16]/90 backdrop-blur-md border border-indigo-500/40 text-xs text-white opacity-90 group-hover/img:opacity-100 transition-all duration-300 flex items-center gap-1.5 shadow-lg z-10">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
            <span className="font-medium text-[11px]">Inspect Case Study & Architecture</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
