import { useState, useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

/**
 * SafeVideoPlayer
 * Fail-safe HTML5 video player with:
 * 1. Automatic state reset when switching versions/phases.
 * 2. IntersectionObserver-based playback gating.
 * 3. Prefers-reduced-motion compliance (defaults to clean poster still when reduced motion is active).
 */
export default function SafeVideoPlayer({
  src,
  poster,
  title,
  controls = false,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative w-full h-full overflow-hidden'
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [failedSrc, setFailedSrc] = useState(null);
  const [loadedSrc, setLoadedSrc] = useState(null);

  const resolvedSrc = src ? getAssetUrl(src) : null;
  const resolvedPoster = poster ? getAssetUrl(poster) : null;
  const hasError = failedSrc === resolvedSrc;
  const isLoaded = loadedSrc === resolvedSrc;
  const effectiveAutoPlay = autoPlay && !shouldReduceMotion;

  // Viewport intersection observer: only play when in view
  useEffect(() => {
    if (!effectiveAutoPlay || hasError || !resolvedSrc) return;
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Autoplay blocked by browser policy; retain poster view
            });
          }
        } else {
          video.pause();
        }
      },
      { rootMargin: '100px 0px 100px 0px', threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [effectiveAutoPlay, hasError, resolvedSrc]);

  if (hasError || !resolvedSrc || (shouldReduceMotion && !controls && resolvedPoster)) {
    return (
      <div ref={containerRef} className={containerClassName}>
        {resolvedPoster ? (
          <img
            src={resolvedPoster}
            alt={title || 'Media Capture'}
            className={className}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-slate-500 font-mono text-xs gap-2 p-4">
            <AlertCircle className="w-5 h-5 text-sky-400/60" />
            <span>PLAYBACK FEED OFFLINE</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={containerClassName}>
      <video
        ref={videoRef}
        key={resolvedSrc}
        controls={controls}
        autoPlay={effectiveAutoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload="metadata"
        poster={resolvedPoster}
        onLoadedData={() => setLoadedSrc(resolvedSrc)}
        onError={() => setFailedSrc(resolvedSrc)}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-90'}`}
      >
        <source src={resolvedSrc} type="video/mp4" />
      </video>

      {/* Subtle Fallback Poster Overlay during initial buffer */}
      {!isLoaded && resolvedPoster && (
        <img
          src={resolvedPoster}
          alt={title || 'Preview'}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300"
        />
      )}
    </div>
  );
}
