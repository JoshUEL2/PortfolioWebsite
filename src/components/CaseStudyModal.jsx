import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Gamepad2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0d0f1e] border border-indigo-500/30 rounded-3xl shadow-[0_0_80px_rgba(99,102,241,0.25)] overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090b16]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl font-bold text-indigo-400">
                {project.number}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
                {project.discipline}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-h-80 bg-slate-950 border border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1e] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-6 right-6">
                <h2 className="text-3xl sm:text-4xl font-black text-white font-['Syne',sans-serif] tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm font-semibold text-indigo-300 mt-1">
                  {project.tagline} • <span className="font-mono text-slate-300">{project.engine}</span>
                </p>
              </div>
            </div>

            {/* Overview & Context */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
                Executive Summary
              </h4>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                {project.summary}
              </p>
            </div>

            {/* Technical Highlights */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Key Innovations & Achievements
              </h4>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Deep Dive */}
            <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-400" />
                Engineering Problem & Solution
              </h4>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {project.technicalDeepDive}
              </p>
            </div>
          </div>

          {/* Modal Footer Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-white/10 bg-[#090b16]">
            <span className="text-xs font-mono text-slate-400">
              {project.studio} • {project.dates}
            </span>

            <div className="flex items-center gap-3">
              {project.links.itch && (
                <a
                  href={project.links.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>Play on Itch.io</span>
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}

              {project.links.demo && !project.links.itch && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>External Resource</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
