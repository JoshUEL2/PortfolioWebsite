import { useRef, useState, useEffect } from 'react';

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

  return (
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
  );
}
