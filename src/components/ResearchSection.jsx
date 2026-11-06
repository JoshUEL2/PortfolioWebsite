import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  FileText,
  Presentation,
  ChevronLeft,
  ChevronRight,
  Library,
  ExternalLink
} from 'lucide-react';
import { DISSERTATION_RESEARCH } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';
import { audioEngine } from '../utils/audioEngine';

export default function ResearchSection() {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [showRefs, setShowRefs] = useState(true);

  const slides = DISSERTATION_RESEARCH.slides || [];
  const currentSlide = slides[activeSlideIdx] || slides[0];

  const handlePrevSlide = () => {
    audioEngine.playTick(700, 200);
    setActiveSlideIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    audioEngine.playTick(700, 200);
    setActiveSlideIdx((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="research" className="relative py-20 px-4 sm:px-6 lg:px-12 bg-[#080C14] border-t border-[#1A2234]">
      <div className="max-w-[1360px] mx-auto w-full">
        {/* Formal Academic Journal Masthead Bar */}
        <div className="py-3 mb-10 border-b border-[#F59E0B]/30 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-widest text-[#F59E0B]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>ACADEMIC MONOGRAPH // BSc DISSERTATION</span>
          </div>
          <div className="text-[#94A3B8]">
            UNIVERSITY OF EAST LONDON • ROUTE B (PRACTICE-AS-RESEARCH)
          </div>
        </div>

        {/* Editorial Title & Manuscript Downloads */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 mb-10 border-b border-[#1A2234]">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] mb-2 font-bold">
              Provisional Undergraduate Dissertation Research
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight font-['Space_Grotesk',sans-serif] uppercase leading-[1.05]">
              {DISSERTATION_RESEARCH.title}
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] mt-3 font-['Plus_Jakarta_Sans',sans-serif]">
              {DISSERTATION_RESEARCH.subtitle}
            </p>
          </div>

          {/* Formal Manuscript & Slide Downloads */}
          <div className="flex flex-wrap items-center gap-3 shrink-0 font-mono">
            {DISSERTATION_RESEARCH.downloadProposal && (
              <a
                href={getAssetUrl(DISSERTATION_RESEARCH.downloadProposal)}
                download
                onClick={() => audioEngine.playTick(600, 150)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded bg-[#F59E0B] hover:bg-[#FBBF24] active:scale-[0.97] text-[#06070D] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>Proposal (.docx)</span>
              </a>
            )}
            {DISSERTATION_RESEARCH.downloadSlides && (
              <a
                href={getAssetUrl(DISSERTATION_RESEARCH.downloadSlides)}
                download
                onClick={() => audioEngine.playTick(600, 150)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded bg-[#0D111A] hover:bg-[#131926] active:scale-[0.97] text-[#F8FAFC] font-semibold text-xs uppercase tracking-wider border border-[#F59E0B]/40 transition-all"
              >
                <Presentation className="w-4 h-4 text-[#F59E0B]" />
                <span>Pitch (.pptx)</span>
              </a>
            )}
            {DISSERTATION_RESEARCH.oneDriveFolder && (
              <a
                href={DISSERTATION_RESEARCH.oneDriveFolder}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioEngine.playTick(600, 150)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded bg-[#0D111A] hover:bg-[#131926] active:scale-[0.97] text-[#00F2FE] font-semibold text-xs uppercase tracking-wider border border-[#00F2FE]/40 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-[#00F2FE]" />
                <span>UEL Folder</span>
              </a>
            )}
          </div>
        </div>

        {/* SECTION I: Abstract & Interactive Figure Plate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 mb-12 border-b border-[#1A2234]">
          {/* Left Column: Formal Abstract */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold">
                Section I // Abstract &amp; Problem Space
              </span>
              <div className="h-[1px] flex-1 bg-[#F59E0B]/20" />
            </div>

            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
              {DISSERTATION_RESEARCH.abstract}
            </p>

            {/* Formal Quote Box */}
            <div className="p-4 bg-[#0D111A] border-l-2 border-[#F59E0B] text-[#F8FAFC] text-sm leading-relaxed font-['Plus_Jakarta_Sans',sans-serif] italic">
              &ldquo;When racial heritage is coded only through visual ambiguity without explicit narrative canon, players default to assuming whiteness or racial neutrality (Dietrich, 2013).&rdquo;
            </div>

            {/* Primary Research Question Card */}
            {DISSERTATION_RESEARCH.researchQuestion && (
              <div className="p-4 rounded bg-[#0D111A] border border-[#1A2234] text-[#F8FAFC]">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#F59E0B] mb-1 font-bold">
                  Primary Research Question
                </div>
                <div className="text-sm font-['Plus_Jakarta_Sans',sans-serif] text-[#F8FAFC] leading-relaxed">
                  &ldquo;{DISSERTATION_RESEARCH.researchQuestion}&rdquo;
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Archival Slide Plate */}
          <div className="lg:col-span-7">
            <div className="rounded bg-[#0D111A] border border-[#1A2234] overflow-hidden shadow-xl">
              {/* Plate Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#080C14] border-b border-[#1A2234]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#F59E0B]">
                  FIG. 1.{activeSlideIdx + 1} // RESEARCH EVIDENCE PLATE
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">
                  Plate {activeSlideIdx + 1} of {slides.length}
                </span>
              </div>

              {/* Slide Viewport */}
              <div className="relative aspect-[16/9] bg-black flex items-center justify-center">
                {currentSlide && (
                  <img
                    src={getAssetUrl(currentSlide.src)}
                    alt={currentSlide.caption}
                    className="w-full h-full object-contain"
                  />
                )}

                <button
                  type="button"
                  onClick={handlePrevSlide}
                  className="absolute left-3 p-2 rounded bg-[#0D111A]/90 hover:bg-[#F59E0B] text-[#F8FAFC] hover:text-[#06070D] border border-[#1A2234] transition-colors cursor-pointer"
                  aria-label="Previous plate"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  className="absolute right-3 p-2 rounded bg-[#0D111A]/90 hover:bg-[#F59E0B] text-[#F8FAFC] hover:text-[#06070D] border border-[#1A2234] transition-colors cursor-pointer"
                  aria-label="Next plate"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Plate Caption */}
              <div className="px-4 py-2.5 bg-[#080C14] border-t border-[#1A2234] text-xs font-mono text-[#94A3B8]">
                {currentSlide?.caption}
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-6 gap-2 p-2.5 bg-[#06070D] border-t border-[#1A2234]">
                {slides.map((s, idx) => {
                  const isSelected = idx === activeSlideIdx;
                  return (
                    <button
                      key={s.src}
                      type="button"
                      onClick={() => {
                        audioEngine.playTick(600 + idx * 50, 150);
                        setActiveSlideIdx(idx);
                      }}
                      className={`rounded overflow-hidden aspect-[16/9] border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#F59E0B] ring-1 ring-[#F59E0B] opacity-100'
                          : 'border-[#1A2234] opacity-50 hover:opacity-100'
                      }`}
                      title={s.caption}
                    >
                      <img
                        src={getAssetUrl(s.src)}
                        alt={`Plate ${idx + 1}`}
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

        {/* SECTION II: Hypotheses */}
        <div className="pb-12 mb-12 border-b border-[#1A2234]">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold">
              Section II // Core Research Hypotheses
            </span>
            <div className="h-[1px] flex-1 bg-[#F59E0B]/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DISSERTATION_RESEARCH.hypotheses.map((hyp) => (
              <div
                key={hyp.number}
                className="p-5 rounded bg-[#0D111A] border border-[#1A2234] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#1A2234]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B]">
                      Hypothesis {hyp.number}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[10px] font-mono font-bold text-[#F59E0B]">
                      {hyp.stat}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif] uppercase mb-2">
                    {hyp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
                    {hyp.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION III: Methodology */}
        <div className="pb-12 mb-12 border-b border-[#1A2234]">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-bold">
              Section III // Triangulated 3-Phase Methodology
            </span>
            <div className="h-[1px] flex-1 bg-[#F59E0B]/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DISSERTATION_RESEARCH.methodology.map((m) => (
              <div
                key={m.phase}
                className="p-5 rounded bg-[#0D111A] border border-[#1A2234]"
              >
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#00F2FE] mb-2 font-bold">
                  {m.badge}
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif] uppercase mb-2">
                  {m.phase}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
                  {m.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION IV: Bibliography */}
        <div className="rounded bg-[#0D111A] border border-[#1A2234] p-5 sm:p-6">
          <button
            type="button"
            onClick={() => setShowRefs(!showRefs)}
            className="w-full flex items-center justify-between text-left cursor-pointer"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#F59E0B] font-bold">
              <Library className="w-4 h-4 text-[#F59E0B]" />
              <span>Section IV // Harvard Format Bibliography</span>
            </div>
            <span className="text-xs font-mono text-[#64748B] hover:text-[#F8FAFC]">
              {showRefs ? 'COLLAPSE [-]' : 'EXPAND [+]'}
            </span>
          </button>

          {showRefs && (
            <ul className="mt-4 pt-4 border-t border-[#1A2234] space-y-2 text-xs text-[#94A3B8] font-mono leading-relaxed">
              {DISSERTATION_RESEARCH.references.map((ref, idx) => (
                <li key={idx} className="pl-3 border-l border-[#F59E0B]/40">
                  {ref}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
