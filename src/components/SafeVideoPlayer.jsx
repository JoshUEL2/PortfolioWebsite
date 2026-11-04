import { useState, useRef, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

/**
 * SafeVideoPlayer
 * Robust video component with:
 * 1. Automatic error handling and high-res poster fallback (zero black-screens).
 * 2. IntersectionObserver-based playback gating (pauses off-screen feeds to prevent GPU decode storms).
 * 3. Graceful handling of browser autoplay policies.
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
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const resolvedSrc = src ? getAssetUrl(src) : null;
  const resolvedPoster = poster ? getAssetUrl(poster) : null;

  // Viewport intersection observer: only play when in view
  useEffect(() => {
    if (!autoPlay || hasError || !resolvedSrc) return;
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
  }, [autoPlay, hasError, resolvedSrc]);

  if (hasError || !resolvedSrc) {
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
            <AlertCircle className="w-5 h-5 text-indigo-400/60" />
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
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload="metadata"
        poster={resolvedPoster}
        onLoadedData={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-90'}`}
      >
        <source src={resolvedSrc} type="video/mp4" />
      </video>

      {/* Subtle Fallback Poster Overlay during initial buffer */}
      {!isLoaded && resolvedPoster && (
        <img
          src={resolvedPoster}
          alt={title || 'Preview'}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500"
        />
      )}
    </div>
  );
}
