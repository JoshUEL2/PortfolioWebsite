import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Lock } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

const DESKTOP_WIDTH = 1440;
const DESKTOP_HEIGHT = 810; // Exact 16:9 Chrome desktop resolution

export default function EmbeddedBrowserViewport({ src, title }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      const width = el.clientWidth;
      if (width > 0) {
        setScale(width / DESKTOP_WIDTH);
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const isMyndwell =
    (src && src.toLowerCase().includes('rem')) ||
    (title && (title.toLowerCase().includes('rem') || title.toLowerCase().includes('myndwell')));

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-white/15 bg-[#070913] shadow-2xl">
      {/* Themed In-Universe Window Chrome */}
      <div className={`px-4 py-2.5 flex items-center justify-between border-b select-none ${
        isMyndwell
          ? 'bg-gradient-to-r from-[#0b1626] via-[#0e1d33] to-[#0b1626] border-cyan-500/30 text-cyan-200'
          : 'bg-[#101422] border-white/10 text-slate-300'
      }`}>
        {/* Left: Window Control Dots & Branding */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>

          <div className="h-4 w-px bg-white/10" />

          {isMyndwell ? (
            <div className="flex items-center gap-2">
              <img
                src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
                alt="Myndwell Logo"
                className="w-4 h-4 object-contain"
              />
              <span className="font-bold text-xs tracking-wider text-white uppercase font-['Syne',sans-serif]">
                Myndwell International
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 font-semibold">
                PROPERTY OF MYNDWELL CORP
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs tracking-wide text-white">
                {title || 'Interactive Companion Client'}
              </span>
            </div>
          )}
        </div>

        {/* Center/Right: Secure URL Omnibox & External Link */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/50 border border-white/10 text-[11px] font-mono text-slate-300">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>
              {isMyndwell ? 'https://myndwell.corp/portal/subject-4092' : 'https://internal-app.local'}
            </span>
          </div>

          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white transition-colors cursor-pointer"
            title="Open in new window"
          >
            <span>Launch</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* 16:9 Scaled Desktop Viewport */}
      <div
        ref={containerRef}
        className="relative w-full aspect-video bg-black overflow-hidden select-none"
      >
        <iframe
          src={src}
          title={title}
          style={{
            width: `${DESKTOP_WIDTH}px`,
            height: `${DESKTOP_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left'
          }}
          className="border-0 absolute top-0 left-0"
          sandbox="allow-scripts allow-same-origin allow-modals"
        />
      </div>

      {/* Themed In-Universe Footer Bar */}
      {isMyndwell && (
        <div className="px-4 py-1.5 bg-[#060b13] border-t border-cyan-500/20 flex flex-wrap items-center justify-between text-[10px] font-mono text-cyan-300/70 select-none">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>MYNDWELL NEURAL PARTITION ARCHIVE // RUNNING LIVE</span>
          </div>
          <span>CONFIDENTIAL // AUTHORISED PERSONNEL ONLY</span>
        </div>
      )}
    </div>
  );
}
