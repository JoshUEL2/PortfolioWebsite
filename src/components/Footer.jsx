import { useState, useEffect } from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative py-12 px-4 border-t border-white/[0.08] bg-[#05060a]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <img
              src={getAssetUrl('/images/logos/3j-logo.png')}
              alt="3J Studio Logo"
              className="w-10 h-10 rounded-xl object-contain bg-white/5 border border-white/10 p-1 shrink-0 shadow-md"
            />
            <div>
              <div className="font-extrabold text-white text-base tracking-tight font-['Syne',sans-serif]">
                Joshua Johnson
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Technical Game Designer • Unreal Engine 5 • London, UK
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Built with React, Vite & Tailwind CSS</span>
            </div>
          </div>

          <div className="text-xs text-slate-400">
            © {CURRENT_YEAR} Joshua Johnson. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button with Scroll Progress Ring */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0c0e1c]/90 border border-indigo-500/40 text-indigo-300 hover:text-white hover:bg-indigo-600/30 backdrop-blur-xl shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          {/* Circular progress SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
            <circle
              cx="50%"
              cy="50%"
              r="20"
              className="stroke-white/10"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="20"
              className="stroke-indigo-400"
              strokeWidth="2"
              strokeDasharray="125.6"
              strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      )}
    </>
  );
}
