import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  FileText,
  Presentation,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  FlaskConical,
  BarChart3,
  Library
} from 'lucide-react';
import { DISSERTATION_RESEARCH } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';

export default function ResearchSection() {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [showRefs, setShowRefs] = useState(false);

  const slides = DISSERTATION_RESEARCH.slides || [];
  const currentSlide = slides[activeSlideIdx] || slides[0];

  const handlePrevSlide = () => {
    setActiveSlideIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setActiveSlideIdx((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="research" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/35 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5 text-amber-400" />
            <span>{DISSERTATION_RESEARCH.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Syne',sans-serif] leading-tight">
            {DISSERTATION_RESEARCH.title}
          </h2>
          <p className="text-amber-200/90 text-sm sm:text-base font-semibold mt-2">
            {DISSERTATION_RESEARCH.subtitle}
          </p>
        </div>

        {/* Download Proposal & Slides Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          {DISSERTATION_RESEARCH.downloadProposal && (
            <a
              href={getAssetUrl(DISSERTATION_RESEARCH.downloadProposal)}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600/25 hover:bg-amber-600/40 text-amber-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-amber-500/40 transition-all"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span>Download Research Proposal (.docx)</span>
            </a>
          )}
          {DISSERTATION_RESEARCH.downloadSlides && (
            <a
              href={getAssetUrl(DISSERTATION_RESEARCH.downloadSlides)}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white font-semibold text-xs tracking-wider uppercase border border-white/15 transition-all"
            >
              <Presentation className="w-4 h-4 text-indigo-400" />
              <span>Download Pitch Deck (.pptx)</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Research Card: Abstract + Interactive Slide Deck Viewer */}
      <div className="rounded-3xl bg-[#0a0c18]/90 border border-white/10 p-6 md:p-8 backdrop-blur-xl shadow-2xl mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Research Abstract & 3 Hypotheses */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>{DISSERTATION_RESEARCH.status}</span>
            </div>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {DISSERTATION_RESEARCH.abstract}
            </p>

            {/* 3 Core Hypotheses */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                <span>The Three Core Hypotheses (The Illusion of Parity)</span>
              </div>

              {DISSERTATION_RESEARCH.hypotheses.map((hyp) => (
                <div
                  key={hyp.number}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-500/35 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-white font-['Syne',sans-serif]">
                      <span className="font-mono text-amber-400 mr-2">{hyp.number}.</span>
                      {hyp.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-amber-950/80 border border-amber-500/40 text-[10px] font-mono font-bold text-amber-300 shrink-0">
                      {hyp.stat}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {hyp.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive 6-Slide Pitch Deck Viewer */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#06070f] border border-white/15 overflow-hidden shadow-2xl">
              {/* Top Viewer Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-white/10">
                <span className="text-[11px] font-mono text-amber-300 uppercase tracking-wider font-semibold">
                  Interactive Research Pitch Deck
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Slide {activeSlideIdx + 1} of {slides.length}
                </span>
              </div>

              {/* Active Slide Image */}
              <div className="relative aspect-[16/9] bg-black flex items-center justify-center group">
                {currentSlide && (
                  <img
                    src={getAssetUrl(currentSlide.src)}
                    alt={currentSlide.caption}
                    className="w-full h-full object-contain"
                  />
                )}

                {/* Prev / Next Controls */}
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  className="absolute left-3 p-2 rounded-full bg-black/75 hover:bg-amber-600 text-white border border-white/15 transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  className="absolute right-3 p-2 rounded-full bg-black/75 hover:bg-amber-600 text-white border border-white/15 transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Slide Caption */}
              <div className="px-4 py-2.5 bg-[#080a14] border-t border-white/10 text-xs font-mono text-slate-300 truncate">
                {currentSlide?.caption}
              </div>

              {/* Slide Thumbnail Selector Strip */}
              <div className="grid grid-cols-6 gap-1.5 p-2.5 bg-[#05060c] border-t border-white/10">
                {slides.map((s, idx) => {
                  const isSelected = idx === activeSlideIdx;
                  return (
                    <button
                      key={s.src}
                      type="button"
                      onClick={() => setActiveSlideIdx(idx)}
                      className={`rounded-lg overflow-hidden aspect-[16/9] border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-amber-400 ring-1 ring-amber-400/50 opacity-100'
                          : 'border-white/10 opacity-55 hover:opacity-90'
                      }`}
                      title={s.caption}
                    >
                      <img
                        src={getAssetUrl(s.src)}
                        alt={`Slide ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Phase Closed-Loop Methodology Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {DISSERTATION_RESEARCH.methodology.map((m, idx) => (
          <motion.div
            key={m.phase}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="p-6 rounded-2xl bg-[#0a0c18]/90 border border-white/10 hover:border-amber-500/35 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-amber-950/70 border border-amber-500/35 text-[11px] font-mono font-bold text-amber-300">
                  {m.badge}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white font-['Syne',sans-serif] mb-2">
                {m.phase}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {m.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Collapsible Peer-Reviewed Literature References */}
      <div className="rounded-2xl bg-[#090b16]/90 border border-white/10 p-4 sm:p-5">
        <button
          type="button"
          onClick={() => setShowRefs(!showRefs)}
          className="w-full flex items-center justify-between text-left cursor-pointer"
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-indigo-300 uppercase tracking-wider">
            <Library className="w-4 h-4 text-indigo-400" />
            <span>Core Peer-Reviewed Literature &amp; Census Sources ({DISSERTATION_RESEARCH.references.length})</span>
          </div>
          <span className="text-xs font-mono text-slate-400 hover:text-white">
            {showRefs ? 'Hide References ↑' : 'Show References ↓'}
          </span>
        </button>

        {showRefs && (
          <ul className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300 font-mono">
            {DISSERTATION_RESEARCH.references.map((ref, idx) => (
              <li key={idx} className="leading-relaxed">
                • {ref}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
