import { useState, useEffect } from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';
import { audioEngine } from '../utils/audioEngine';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    audioEngine.playTick(900, 200);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative py-12 px-4 sm:px-6 lg:px-12 border-t border-indigo-500/25 bg-[#070814]">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <img
              src={getAssetUrl('/images/logos/3j-logo.png')}
              alt="3J Studio Logo"
              className="w-9 h-9 rounded object-contain bg-[#0c0a22] border border-indigo-500/25 p-1 shrink-0"
            />
            <div>
              <div className="font-bold text-[#F8FAFC] text-sm tracking-tight font-['Space_Grotesk',sans-serif] uppercase">
                Joshua Johnson
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Technical Game Designer • Unreal Engine 5 • London, UK
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Built with React 19, Vite &amp; Tailwind CSS</span>
            </div>
          </div>

          <div className="text-xs text-slate-500 font-mono">
            © {CURRENT_YEAR} Joshua Johnson. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button with Scroll Progress Ring */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-2.5 rounded-xl bg-[#0c0a22]/90 border border-indigo-400/80 text-indigo-300 hover:text-white hover:bg-[#161338] shadow-2xl transition-all cursor-pointer group active:scale-[0.95]"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
            <circle
              cx="50%"
              cy="50%"
              r="17"
              className="stroke-white/10"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="17"
              className="stroke-indigo-400"
              strokeWidth="2"
              strokeDasharray="106.8"
              strokeDashoffset={106.8 - (106.8 * scrollProgress) / 100}
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      )}
    </>
  );
}
