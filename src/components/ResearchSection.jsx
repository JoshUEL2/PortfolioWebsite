import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  FileText,
  Presentation,
  ChevronLeft,
  ChevronRight,
  Library
} from 'lucide-react';
import { DISSERTATION_RESEARCH } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetUrl';

export default function ResearchSection() {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [showRefs, setShowRefs] = useState(true);

  const slides = DISSERTATION_RESEARCH.slides || [];
  const currentSlide = slides[activeSlideIdx] || slides[0];

  const handlePrevSlide = () => {
    setActiveSlideIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setActiveSlideIdx((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="research" className="relative w-full overflow-hidden">
      {/* Smooth Top Atmospheric Blend: Game Viewport (#06070d) -> Warm Editorial Charcoal (#111110) */}
      <div className="h-28 w-full bg-gradient-to-b from-transparent via-[#0b0b0c]/85 to-[#111110] pointer-events-none" />

      {/* Full-Bleed Editorial Research Paper Biome */}
      <div className="bg-editorial-paper border-t border-[#c89d66]/30 pt-24 pb-16 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Formal Academic Journal Masthead Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t-2 border-b border-[#c89d66]/45 py-3.5 mb-12 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.18em] text-[#c89d66]"
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-3.5 h-3.5 text-[#c89d66]" />
              <span>ACADEMIC RESEARCH &amp; BSc DISSERTATION</span>
            </div>
            <div className="text-[#a8a29e]">
              UNIVERSITY OF EAST LONDON • ROUTE B (PRACTICE-AS-RESEARCH)
            </div>
          </motion.div>

          {/* Editorial Title & Manuscript Download Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 mb-12 border-b border-[#e7e2d8]/15"
          >
            <div className="max-w-3xl">
              <div className="text-xs font-mono uppercase tracking-[0.15em] text-[#c89d66] mb-3">
                Provisional Undergraduate Dissertation Monograph
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#f5f2eb] tracking-tight font-['Newsreader',Georgia,serif] leading-[1.12]">
                {DISSERTATION_RESEARCH.title}
              </h2>
              <p className="text-lg sm:text-xl text-[#d6cec2] italic font-['Newsreader',Georgia,serif] mt-3 leading-relaxed">
                {DISSERTATION_RESEARCH.subtitle}
              </p>
            </div>

            {/* Formal Manuscript & Slide Downloads */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {DISSERTATION_RESEARCH.downloadProposal && (
                <a
                  href={getAssetUrl(DISSERTATION_RESEARCH.downloadProposal)}
                  download
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#c89d66] hover:bg-[#d6ad77] text-[#111110] font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>Research Proposal (.docx)</span>
                </a>
              )}
              {DISSERTATION_RESEARCH.downloadSlides && (
                <a
                  href={getAssetUrl(DISSERTATION_RESEARCH.downloadSlides)}
                  download
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#1c1b19] hover:bg-[#262522] text-[#f5f2eb] font-semibold text-xs uppercase tracking-wider border border-[#c89d66]/45 transition-colors"
                >
                  <Presentation className="w-4 h-4 text-[#c89d66]" />
                  <span>Pitch Slides (.pptx)</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* SECTION I: Abstract & Interactive Figure Plate (6-Slide Deck) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-14 mb-14 border-b border-[#e7e2d8]/15">
            {/* Left Column: Formal Abstract */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c89d66] font-bold">
                  Section I // Abstract &amp; Problem Space
                </span>
                <div className="h-[1px] flex-1 bg-[#c89d66]/25" />
              </div>

              <p className="text-[#e7e2d8] text-sm sm:text-base leading-[1.8] font-normal text-justify">
                {DISSERTATION_RESEARCH.abstract}
              </p>

              {/* Formal Pull-Quote Box */}
              <div className="p-5 bg-[#181715] border-l-2 border-[#c89d66] text-[#d6cec2] font-['Newsreader',Georgia,serif] italic text-base leading-relaxed">
                &ldquo;When racial heritage is coded only through visual ambiguity without explicit narrative canon, players default to assuming whiteness or racial neutrality (Dietrich, 2013).&rdquo;
              </div>
            </motion.div>

            {/* Right Column: Interactive Archival Slide Plate */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="rounded-xl bg-[#161514] border border-[#c89d66]/35 overflow-hidden shadow-2xl">
                {/* Plate Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d0c0b] border-b border-[#c89d66]/25">
                  <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#c89d66]">
                    FIG. 1.{activeSlideIdx + 1} // PRESENTATION PLATE
                  </span>
                  <span className="text-[11px] font-mono text-[#a8a29e]">
                    Plate {activeSlideIdx + 1} of {slides.length}
                  </span>
                </div>

                {/* Slide Viewport */}
                <div className="relative aspect-[16/9] bg-[#0a0908] flex items-center justify-center">
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
                    className="absolute left-3 p-2 rounded-md bg-[#111110]/90 hover:bg-[#c89d66] text-[#f5f2eb] hover:text-[#111110] border border-[#c89d66]/40 transition-colors cursor-pointer"
                    aria-label="Previous plate"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="absolute right-3 p-2 rounded-md bg-[#111110]/90 hover:bg-[#c89d66] text-[#f5f2eb] hover:text-[#111110] border border-[#c89d66]/40 transition-colors cursor-pointer"
                    aria-label="Next plate"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Plate Caption */}
                <div className="px-4 py-3 bg-[#141312] border-t border-[#c89d66]/20 text-xs font-['Newsreader',Georgia,serif] italic text-[#d6cec2]">
                  {currentSlide?.caption}
                </div>

                {/* Thumbnail Strip */}
                <div className="grid grid-cols-6 gap-2 p-3 bg-[#0d0c0b] border-t border-[#c89d66]/20">
                  {slides.map((s, idx) => {
                    const isSelected = idx === activeSlideIdx;
                    return (
                      <button
                        key={s.src}
                        type="button"
                        onClick={() => setActiveSlideIdx(idx)}
                        className={`rounded overflow-hidden aspect-[16/9] border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#c89d66] ring-1 ring-[#c89d66]/60 opacity-100'
                            : 'border-white/10 opacity-50 hover:opacity-85'
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
            </motion.div>
          </div>

          {/* SECTION II: The Three Core Hypotheses */}
          <div className="pb-14 mb-14 border-b border-[#e7e2d8]/15">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c89d66] font-bold">
                Section II // Research Hypotheses (The Illusion of Parity)
              </span>
              <div className="h-[1px] flex-1 bg-[#c89d66]/25" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DISSERTATION_RESEARCH.hypotheses.map((hyp, idx) => (
                <motion.div
                  key={hyp.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-xl bg-[#171614] border border-[#c89d66]/30 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#e7e2d8]/10">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#c89d66]">
                        Hypothesis {hyp.number}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-[#c89d66]/15 border border-[#c89d66]/40 text-[11px] font-mono font-bold text-[#e5c18d]">
                        {hyp.stat}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#f5f2eb] font-['Newsreader',Georgia,serif] mb-3">
                      {hyp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#d6cec2] leading-relaxed">
                      {hyp.summary}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SECTION III: Triangulated Closed-Loop Methodology */}
          <div className="pb-14 mb-12 border-b border-[#e7e2d8]/15">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#c89d66] font-bold">
                Section III // Triangulated 3-Phase Methodology
              </span>
              <div className="h-[1px] flex-1 bg-[#c89d66]/25" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DISSERTATION_RESEARCH.methodology.map((m, idx) => (
                <motion.div
                  key={m.phase}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-6 rounded-xl bg-[#151413] border border-[#e7e2d8]/15 hover:border-[#c89d66]/45 transition-colors"
                >
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#c89d66] mb-2">
                    {m.badge}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#f5f2eb] font-['Newsreader',Georgia,serif] mb-3">
                    {m.phase}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#d6cec2] leading-relaxed">
                    {m.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SECTION IV: Cite Them Right Harvard Bibliography */}
          <div className="rounded-xl bg-[#161514] border border-[#c89d66]/30 p-6">
            <button
              type="button"
              onClick={() => setShowRefs(!showRefs)}
              className="w-full flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono uppercase tracking-[0.15em] text-[#c89d66] font-bold">
                <Library className="w-4 h-4 text-[#c89d66]" />
                <span>Section IV // Peer-Reviewed Literature &amp; Census Sources (Harvard Format)</span>
              </div>
              <span className="text-xs font-mono text-[#a8a29e] hover:text-[#f5f2eb]">
                {showRefs ? 'Collapse [-]' : 'Expand [+]'}
              </span>
            </button>

            {showRefs && (
              <ul className="mt-5 pt-5 border-t border-[#e7e2d8]/15 space-y-2.5 text-xs sm:text-sm text-[#d6cec2] font-['Newsreader',Georgia,serif] leading-relaxed">
                {DISSERTATION_RESEARCH.references.map((ref, idx) => (
                  <li key={idx} className="pl-4 border-l border-[#c89d66]/40">
                    {ref}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
