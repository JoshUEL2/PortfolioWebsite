import { useEffect, useId, useRef } from 'react';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/assetUrl';

/**
 * Full-screen, text-free reveal for each project's overview modal.
 * Every effect covers the whole modal, then physically resolves to reveal the content behind it.
 * - Rastacats: ice sheet cracks from the centre, then the shards fall away
 * - REM / Myndwell: starts fully black, the ink melts away in goopy drips and the Myndwell mark melts with it
 * - Planet Protectors: a canopy of leaves falls all the way down
 * - Delirium VR: flatline, EKG pulse, defibrillator shocks, lights flicker out
 * - Daydream Believer: nebula clouds and stars drift apart
 * - Project Isla: Perlin noise height map, sea level falls to reveal an archipelago
 * - LabRats: acid eats through a hazard-green seal bearing the LabRats mark
 * - Chanceway: a table of card backs flips away
 * - Baldi's Basics 2: chalkboard rubbed clean by an eraser
 * - The Turnpike Echoes: VHS static and tracking bars, then CRT collapse
 * - Default: Unreal wireframe grid
 *
 * Strictly NO sliding doors or curtains (reserved exclusively for Musical Theatre).
 */

const rnd = (i, s = 1) => {
  const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

/* ------------------------------------------------------------------ */
/* 1. RASTACATS: ice sheet cracks, shards fall                          */
/* ------------------------------------------------------------------ */
const ICE_EDGE = [
  [0, 0], [33, 0], [66, 0], [100, 0], [100, 33], [100, 66],
  [100, 100], [66, 100], [33, 100], [0, 100], [0, 66], [0, 33]
];
const ICE_CENTRE = [50 + (rnd(1, 4) - 0.5) * 6, 50 + (rnd(2, 4) - 0.5) * 6];
const ICE_INNER = ICE_EDGE.map(([x, y], i) => {
  const k = 0.42 + rnd(i, 7) * 0.12;
  return [
    ICE_CENTRE[0] + (x - ICE_CENTRE[0]) * k + (rnd(i, 8) - 0.5) * 6,
    ICE_CENTRE[1] + (y - ICE_CENTRE[1]) * k + (rnd(i, 9) - 0.5) * 6
  ];
});

const ICE_SHARDS = ICE_EDGE.flatMap((p, i) => {
  const n = (i + 1) % ICE_EDGE.length;
  const inner = [ICE_CENTRE, ICE_INNER[i], ICE_INNER[n]];
  const outer = [ICE_INNER[i], p, ICE_EDGE[n], ICE_INNER[n]];
  return [
    { pts: inner, ring: 0, seed: i },
    { pts: outer, ring: 1, seed: i + 20 }
  ];
}).map((s) => {
  const cx = s.pts.reduce((a, p) => a + p[0], 0) / s.pts.length;
  const cy = s.pts.reduce((a, p) => a + p[1], 0) / s.pts.length;
  return { ...s, cx, cy };
});

const ICE_CRACKS = ICE_EDGE.map((p, i) => {
  const n = (i + 1) % ICE_EDGE.length;
  return `M${ICE_CENTRE[0]} ${ICE_CENTRE[1]} L${ICE_INNER[i][0]} ${ICE_INNER[i][1]} L${p[0]} ${p[1]} M${ICE_INNER[i][0]} ${ICE_INNER[i][1]} L${ICE_INNER[n][0]} ${ICE_INNER[n][1]}`;
});

function IceShatter() {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ x: [0, 0, -4, 4, -3, 3, 0] }}
      transition={{ duration: 0.9, times: [0, 0.4, 0.5, 0.6, 0.7, 0.8, 1] }}
    >
      {ICE_SHARDS.map((s, i) => {
        const angle = 115 + rnd(s.seed, 2) * 90;
        const rot = (rnd(s.seed, 3) - 0.5) * 70;
        const delay = 0.8 + s.ring * 0.18 + rnd(s.seed, 5) * 0.22;
        return (
          <motion.div
            key={i}
            initial={{ y: '0%', rotate: 0 }}
            animate={{ y: '140%', rotate: rot }}
            transition={{ delay, duration: 0.95, ease: [0.55, 0, 0.9, 0.45] }}
            className="absolute inset-0 transform-gpu will-change-transform"
            style={{
              clipPath: `polygon(${s.pts.map((p) => `${p[0]}% ${p[1]}%`).join(',')})`,
              transformOrigin: `${s.cx}% ${s.cy}%`,
              background: `linear-gradient(${angle}deg, rgba(235,250,255,0.98) 0%, rgba(147,214,252,0.95) 38%, rgba(34,128,200,0.96) 100%)`
            }}
          />
        );
      })}

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full fill-none"
      >
        {ICE_CRACKS.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ filter: 'drop-shadow(0 0 3px rgba(125,211,252,1))' }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 0.9,
              delay: 0.1 + rnd(i, 6) * 0.25,
              times: [0, 0.2, 0.85, 1],
              ease: 'easeOut'
            }}
          />
        ))}
      </svg>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.85, 0] }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95), transparent 55%)'
        }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. REM: ink floods down, then drains off the bottom as drips         */
/* ------------------------------------------------------------------ */
const INK_COLS = 24;
const INK_COLUMNS = Array.from({ length: INK_COLS }).map((_, i) => ({
  left: (i / INK_COLS) * 100 - 2.5,
  width: 100 / INK_COLS + 5,
  extra: 6 + rnd(i, 11) * 30,
  delay: 0.45 + rnd(i, 12) * 0.95,
  duration: 1.15 + rnd(i, 13) * 0.75,
  dropSize: 26 + rnd(i, 14) * 30,
  dropDelay: 0.55 + rnd(i, 15) * 0.8
}));

function InkDrench() {
  const gooId = `ink-${useId().replace(/:/g, '')}`;
  return (
    <>
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <filter id={gooId} x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -11"
            />
          </filter>
        </defs>
      </svg>
      <div className="absolute inset-0" style={{ filter: `url(#${gooId})` }}>
        {INK_COLUMNS.map((c, i) => (
          <motion.div
            key={i}
            initial={{ y: '0%' }}
            animate={{ y: '135%' }}
            transition={{ delay: c.delay, duration: c.duration, ease: [0.55, 0, 0.95, 0.55] }}
            className="absolute top-0 bg-[#010204] transform-gpu will-change-transform"
            style={{
              left: `${c.left}%`,
              width: `${c.width}%`,
              bottom: `${-c.extra}%`,
              borderRadius: '0 0 999px 999px / 0 0 120px 120px'
            }}
          >
            <motion.div
              initial={{ y: 0, scale: 1 }}
              animate={{ y: [0, 10, 320], scale: [1, 1.15, 0.8] }}
              transition={{
                delay: c.dropDelay,
                duration: 1.25,
                times: [0, 0.35, 1],
                ease: [0.55, 0, 0.95, 0.55]
              }}
              className="absolute left-1/2 rounded-full bg-[#010204]"
              style={{
                width: c.dropSize,
                height: c.dropSize * 1.35,
                marginLeft: -c.dropSize / 2,
                bottom: -c.dropSize * 0.6
              }}
            />
          </motion.div>
        ))}

        {/* The Myndwell mark is part of the ink: it holds, sags, then melts down with the goop */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.img
            src={getAssetUrl('/images/logos/myndwell-logo-white.png')}
            alt=""
            initial={{ opacity: 1, scaleY: 1, y: 0 }}
            animate={{ opacity: [1, 1, 1, 0], scaleY: [1, 1, 1.9, 4.5], y: [0, 0, 30, 520] }}
            transition={{ duration: 2.1, delay: 0.35, times: [0, 0.35, 0.65, 1], ease: 'easeIn' }}
            className="w-44 sm:w-56 h-auto object-contain select-none"
            style={{ transformOrigin: '50% 20%' }}
          />
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 3. PLANET PROTECTORS: a canopy of leaves falls all the way down      */
/* ------------------------------------------------------------------ */
const LEAF_COUNT = 96;
const LEAVES = Array.from({ length: LEAF_COUNT }).map((_, i) => {
  const top = rnd(i, 1) * 100;
  return {
    left: rnd(i, 2) * 100,
    top,
    size: 54 + rnd(i, 3) * 60,
    rot: rnd(i, 4) * 360,
    spin: 160 + rnd(i, 5) * 260,
    sway: 18 + rnd(i, 6) * 36,
    delay: 0.35 + ((100 - top) / 100) * 0.9 + rnd(i, 7) * 0.25,
    tone: i % 3
  };
});
const LEAF_FILLS = ['#10b981', '#059669', '#15803d'];

function LeafFall() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.1, delay: 0.7, ease: 'easeOut' }}
        className="absolute inset-0 bg-[#04180c]"
      />
      {LEAVES.map((l, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, x: 0, rotate: l.rot, opacity: 1 }}
          animate={{
            y: 1400,
            x: [0, l.sway, -l.sway, l.sway * 0.5],
            rotate: l.rot + l.spin
          }}
          transition={{ delay: l.delay, duration: 1.5, ease: [0.5, 0, 0.9, 0.5] }}
          className="absolute pointer-events-none transform-gpu will-change-transform"
          style={{ left: `${l.left}%`, top: `${l.top}%`, width: l.size, height: l.size * 1.3 }}
        >
          <svg viewBox="0 0 24 32" className="w-full h-full">
            <path
              d="M12 2 C6 7 2 14 2 20 C2 26 6.5 30 12 30 C17.5 30 22 26 22 20 C22 14 18 7 12 2 Z"
              fill={LEAF_FILLS[l.tone]}
            />
            <path d="M12 4 L12 29" stroke="#6ee7b7" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M12 10 L6 14 M12 10 L18 14 M12 16 L5 21 M12 16 L19 21 M12 22 L7 26 M12 22 L17 26" stroke="#a7f3d0" strokeWidth="0.8" strokeLinecap="round" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 4. DELIRIUM VR: flatline, pulse, defibrillator shocks, lights out    */
/* ------------------------------------------------------------------ */
function Defibrillator() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0.5, 1, 0.3, 1, 0.8, 0] }}
        transition={{ duration: 2.3, times: [0, 0.45, 0.52, 0.58, 0.64, 0.74, 0.8, 1], ease: 'linear' }}
        className="absolute inset-0 bg-[#10020a]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.35, 0, 0.5, 0] }}
        transition={{ duration: 1.1, delay: 0.7, times: [0, 0.2, 0.45, 0.7, 1] }}
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(225,29,72,0.7), transparent 70%)' }}
      />
      <svg
        viewBox="0 0 600 100"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-1/3 fill-none"
      >
        <motion.path
          d="M0 50 L170 50 L190 50 L205 14 L222 86 L240 4 L258 70 L275 50 L330 50 L345 22 L360 76 L378 12 L396 62 L412 50 L600 50"
          stroke="#fb7185"
          strokeWidth="3"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{ filter: 'drop-shadow(0 0 6px rgba(251,113,133,1))' }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, ease: 'linear' }}
        />
      </svg>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0, 1, 0] }}
        transition={{ duration: 0.55, delay: 1.2, times: [0, 0.1, 0.35, 0.5, 1] }}
        className="absolute inset-0 bg-white"
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 5. DAYDREAM BELIEVER: nebula clouds and stars drift apart           */
/* ------------------------------------------------------------------ */
const NEBULA = [
  { x: -30, y: -25, c: 'rgba(168,85,247,0.9)', s: 520, tx: -35, ty: -30 },
  { x: 25, y: -30, c: 'rgba(99,102,241,0.85)', s: 480, tx: 35, ty: -25 },
  { x: -20, y: 25, c: 'rgba(236,72,153,0.7)', s: 460, tx: -30, ty: 35 },
  { x: 30, y: 20, c: 'rgba(56,189,248,0.7)', s: 500, tx: 35, ty: 30 },
  { x: 0, y: 0, c: 'rgba(192,132,252,0.9)', s: 560, tx: 0, ty: -10 }
];
const STARS = Array.from({ length: 56 }).map((_, i) => ({
  left: rnd(i, 21) * 100,
  top: rnd(i, 22) * 100,
  size: 2 + rnd(i, 23) * 4,
  rise: 160 + rnd(i, 24) * 360,
  delay: rnd(i, 25) * 0.7
}));

function DreamDissolve() {
  return (
    <motion.div
      className="absolute inset-0 transform-gpu will-change-transform"
      initial={{ rotate: 0, scale: 1 }}
      animate={{ rotate: 6, scale: 1.25 }}
      transition={{ duration: 2.3, ease: 'easeIn' }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.3, delay: 0.8, ease: 'easeIn' }}
        className="absolute inset-0 bg-[#0a0318]"
      />
      {NEBULA.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.95, scale: 0.9, x: 0, y: 0 }}
          animate={{ opacity: 0, scale: 2, x: `${n.tx}%`, y: `${n.ty}%` }}
          transition={{ duration: 1.6, delay: 0.5 + i * 0.1, ease: 'easeIn' }}
          className="absolute rounded-full blur-3xl pointer-events-none transform-gpu will-change-transform"
          style={{
            left: `calc(50% + ${n.x}% - ${n.s / 2}px)`,
            top: `calc(50% + ${n.y}% - ${n.s / 2}px)`,
            width: n.s,
            height: n.s,
            background: `radial-gradient(circle, ${n.c}, transparent 70%)`
          }}
        />
      ))}
      {STARS.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0, scale: 0.4 }}
          animate={{ opacity: [0, 1, 1, 0], y: -s.rise, scale: [0.4, 1.2, 1, 0.5] }}
          transition={{ duration: 1.7, delay: s.delay, ease: 'easeOut' }}
          className="absolute rounded-full bg-white pointer-events-none transform-gpu will-change-transform"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            boxShadow: '0 0 12px rgba(216,180,254,1)'
          }}
        />
      ))}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* 6. PROJECT ISLA: Perlin noise archipelago, sea level falls           */
/* ------------------------------------------------------------------ */
/* Classic 2D Perlin noise with fractal layering, rendered to a small canvas */
function makePerlin(seed) {
  const perm = Array.from({ length: 256 }, (_, i) => i);
  let s = seed;
  for (let i = 255; i > 0; i--) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    [perm[i], perm[j]] = [perm[j], perm[i]];
  }
  const p = new Uint8Array(512);
  for (let i = 0; i < 512; i++) p[i] = perm[i & 255];
  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a, b, t) => a + t * (b - a);
  const grad = (h, x, y) => {
    switch (h & 7) {
      case 0: return x + y;
      case 1: return -x + y;
      case 2: return x - y;
      case 3: return -x - y;
      case 4: return x;
      case 5: return -x;
      case 6: return y;
      default: return -y;
    }
  };
  return (x, y) => {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const u = fade(xf);
    const v = fade(yf);
    const aa = p[p[X] + Y];
    const ab = p[p[X] + Y + 1];
    const ba = p[p[X + 1] + Y];
    const bb = p[p[X + 1] + Y + 1];
    return lerp(
      lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
      lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u),
      v
    );
  };
}

const NOISE_W = 200;
const NOISE_H = 125;

function buildIslandField() {
  const noise = makePerlin(48271);
  const field = new Float32Array(NOISE_W * NOISE_H);
  let min = Infinity;
  let max = -Infinity;
  for (let y = 0; y < NOISE_H; y++) {
    for (let x = 0; x < NOISE_W; x++) {
      let amp = 1;
      let freq = 1;
      let sum = 0;
      for (let o = 0; o < 5; o++) {
        sum += noise((x / NOISE_W) * 4.2 * freq + 7.3, (y / NOISE_H) * 2.8 * freq + 2.1) * amp;
        amp *= 0.5;
        freq *= 2;
      }
      field[y * NOISE_W + x] = sum;
      if (sum < min) min = sum;
      if (sum > max) max = sum;
    }
  }
  for (let i = 0; i < field.length; i++) field[i] = (field[i] - min) / (max - min);
  return field;
}

/* Sea level falls across a Perlin height map: water recedes into an archipelago and uncovers the page */
function PerlinReveal() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const field = buildIslandField();
    const img = ctx.createImageData(NOISE_W, NOISE_H);
    const data = img.data;
    const DURATION = 2400;
    const start = performance.now();
    let raf;

    const frame = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      const k = Math.min(1, Math.max(0, (t - 0.1) / 0.9));
      const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      const level = 1.03 - 1.06 * e;

      for (let i = 0; i < field.length; i++) {
        const n = field[i];
        const d = n - level;
        const o = i * 4;
        if (d >= 0) {
          if (d < 0.03) {
            const a = 1 - d / 0.03;
            data[o] = 226;
            data[o + 1] = 255;
            data[o + 2] = 250;
            data[o + 3] = 255 * a;
          } else {
            data[o + 3] = 0;
          }
        } else {
          const depth = -d;
          const shallow = Math.max(0, 1 - depth / 0.12);
          let r = 6 + (22 - 6) * shallow;
          let g = 52 + (160 - 52) * shallow;
          let b = 72 + (158 - 72) * shallow;
          const contour = (n * 16) % 1;
          if (contour < 0.06) {
            r += 16;
            g += 36;
            b += 34;
          }
          data[o] = r;
          data[o + 1] = g;
          data[o + 2] = b;
          data[o + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
      if (t < 1) {
        raf = requestAnimationFrame(frame);
      } else {
        ctx.clearRect(0, 0, NOISE_W, NOISE_H);
      }
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={NOISE_W}
      height={NOISE_H}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: 'auto' }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* 7. LABRATS: acid eats through a hazard-green seal                    */
/* ------------------------------------------------------------------ */
const ACID_HOLES = [
  { cx: 50, cy: 50, delay: 0.6, max: 62 },
  ...Array.from({ length: 11 }).map((_, i) => ({
    cx: 6 + rnd(i, 31) * 88,
    cy: 6 + rnd(i, 32) * 88,
    delay: 0.15 + rnd(i, 33) * 0.9,
    max: 38 + rnd(i, 34) * 22
  }))
];

function AcidDissolve() {
  const maskId = `acid-${useId().replace(/:/g, '')}`;
  return (
    <>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <mask id={maskId}>
            <rect width="100" height="100" fill="white" />
            {ACID_HOLES.map((h, i) => (
              <motion.circle
                key={i}
                cx={h.cx}
                cy={h.cy}
                fill="black"
                initial={{ r: 0 }}
                animate={{ r: h.max }}
                transition={{ delay: h.delay, duration: 1.2, ease: [0.3, 0.6, 0.5, 1] }}
              />
            ))}
          </mask>
          <pattern id={`${maskId}-p`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="3" height="6" fill="rgba(163,230,53,0.10)" />
          </pattern>
        </defs>
        <g mask={`url(#${maskId})`}>
          <rect width="100" height="100" fill="#052e16" />
          <rect width="100" height="100" fill={`url(#${maskId}-p)`} />
        </g>
        {ACID_HOLES.map((h, i) => (
          <motion.circle
            key={i}
            cx={h.cx}
            cy={h.cy}
            fill="none"
            stroke="#a3e635"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
            style={{ filter: 'drop-shadow(0 0 4px rgba(163,230,53,1))' }}
            initial={{ r: 0, opacity: 0 }}
            animate={{ r: h.max, opacity: [0, 1, 1, 0] }}
            transition={{ delay: h.delay, duration: 1.2, times: [0, 0.1, 0.7, 1], ease: [0.3, 0.6, 0.5, 1] }}
          />
        ))}
      </svg>

      {/* LabRats mark sits in the seal and is eaten by the acid at the centre */}
      <motion.img
        src={getAssetUrl('/images/logos/labrats-logo-transparent.png')}
        alt=""
        initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        animate={{ opacity: [1, 1, 0], scale: [1, 1.02, 1.12], filter: ['blur(0px)', 'blur(0px)', 'blur(10px)'] }}
        transition={{ duration: 1.6, times: [0, 0.5, 1], ease: 'easeIn' }}
        className="absolute left-1/2 top-1/2 w-40 sm:w-56 h-auto object-contain -translate-x-1/2 -translate-y-1/2 select-none"
        style={{ filter: 'drop-shadow(0 0 14px rgba(163,230,53,0.8))' }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 8. CHANCEWAY: a table of card backs flips away                       */
/* ------------------------------------------------------------------ */
const CARD_COLS = 6;
const CARD_ROWS = 4;
const SUITS = ['â™ ', 'â™¥', 'â™£', 'â™¦'];

function CardDeal() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute inset-0 bg-[#0f2a1a]"
      />
      <div
        className="absolute inset-0 grid p-1"
        style={{
          gridTemplateColumns: `repeat(${CARD_COLS}, 1fr)`,
          gridTemplateRows: `repeat(${CARD_ROWS}, 1fr)`,
          perspective: 1200
        }}
      >
        {Array.from({ length: CARD_COLS * CARD_ROWS }).map((_, i) => {
          const col = i % CARD_COLS;
          const row = Math.floor(i / CARD_COLS);
          const d = Math.hypot(col - (CARD_COLS - 1) / 2, row - (CARD_ROWS - 1) / 2);
          const red = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ rotateY: 0, scale: 1, opacity: 1 }}
              animate={{ rotateY: 180, scale: [1, 1.06, 0.7], opacity: [1, 1, 0] }}
              transition={{ delay: 0.35 + d * 0.13, duration: 0.7, ease: 'easeInOut' }}
              className="m-[3px] rounded-lg border-2 border-amber-400/80 flex items-center justify-center text-4xl sm:text-5xl select-none transform-gpu will-change-transform"
              style={{
                background: red
                  ? 'repeating-linear-gradient(45deg, #7f1d1d 0 6px, #450a0a 6px 12px)'
                  : 'repeating-linear-gradient(45deg, #1c1917 0 6px, #0c0a09 6px 12px)',
                color: 'rgba(251,191,36,0.85)',
                backfaceVisibility: 'hidden'
              }}
            >
              {SUITS[i % 4]}
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 9. BALDI'S BASICS 2: chalkboard rubbed clean by an eraser            */
/* ------------------------------------------------------------------ */
const BOARD_ROWS = 9;

function ChalkboardWipe() {
  return (
    <div className="absolute inset-0 flex flex-col">
      {Array.from({ length: BOARD_ROWS }).map((_, i) => {
        const ltr = i % 2 === 0;
        const delay = 0.2 + i * 0.17;
        return (
          <div key={i} className="relative flex-1">
            <motion.div
              initial={{ clipPath: 'inset(0 0% 0 0%)' }}
              animate={{ clipPath: ltr ? 'inset(0 0% 0 100%)' : 'inset(0 100% 0 0%)' }}
              transition={{ delay, duration: 0.5, ease: 'linear' }}
              className="absolute inset-0 overflow-hidden"
            >
              <div
                className="absolute left-0 w-full"
                style={{
                  height: `${BOARD_ROWS * 100}%`,
                  top: `${-i * 100}%`,
                  background:
                    'radial-gradient(ellipse at 30% 20%, #1f4d36 0%, #14382a 55%, #0c241b 100%)'
                }}
              >
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-none" style={{ stroke: 'rgba(255,255,255,0.55)' }}>
                  <path d="M8 14 L20 14 M8 19 L20 19 M26 11 L38 22 M38 11 L26 22" strokeWidth="1.1" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  <path d="M58 14 L76 14 L67 30 Z" strokeWidth="1.1" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                  <path d="M12 44 Q22 36 30 46 T48 46 M60 40 L84 40 M60 46 L84 46 M60 52 L84 52" strokeWidth="1.1" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  <path d="M10 70 L30 70 M10 76 L30 76 M40 66 L40 82 L56 82 M66 68 Q76 62 84 72 Q76 80 66 74" strokeWidth="1.1" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  <path d="M14 92 L90 92" strokeWidth="1.4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
            </motion.div>
            <motion.div
              initial={{ left: ltr ? '0%' : '100%', opacity: 1 }}
              animate={{ left: ltr ? '100%' : '0%', opacity: [1, 1, 0] }}
              transition={{ delay, duration: 0.5, ease: 'linear' }}
              className="absolute top-[6%] bottom-[6%] w-12 -ml-6 rounded-sm"
              style={{
                background: 'linear-gradient(180deg, #a3733b 0 30%, #e5dcc3 30% 100%)',
                boxShadow: '0 0 14px rgba(255,255,255,0.45)'
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 10. THE TURNPIKE ECHOES: VHS static and tracking bars, CRT collapse  */
/* ------------------------------------------------------------------ */
function VhsCollapse() {
  const noiseId = `vhs-${useId().replace(/:/g, '')}`;
  return (
    <motion.div
      className="absolute inset-0 bg-[#12031a] transform-gpu will-change-transform"
      initial={{ scaleY: 1, opacity: 1 }}
      animate={{ scaleY: [1, 1, 0.012, 0.012], opacity: [1, 1, 1, 0] }}
      transition={{ duration: 1.7, times: [0, 0.6, 0.82, 1], ease: 'easeInOut' }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen" aria-hidden="true">
        <filter id={noiseId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="4" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${noiseId})`} />
      </svg>

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.5) 0 2px, transparent 2px 4px)'
        }}
      />

      {Array.from({ length: 7 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ top: `${rnd(i, 41) * 90}%`, x: 0 }}
          animate={{
            top: [`${rnd(i, 41) * 90}%`, `${rnd(i, 42) * 90}%`, `${rnd(i, 43) * 90}%`],
            x: [0, (rnd(i, 44) - 0.5) * 120, (rnd(i, 45) - 0.5) * -120, 0]
          }}
          transition={{ duration: 0.95, ease: 'easeInOut' }}
          className="absolute inset-x-0 mix-blend-screen"
          style={{
            height: `${3 + rnd(i, 46) * 9}%`,
            background:
              'linear-gradient(180deg, rgba(217,70,239,0.55), rgba(255,255,255,0.35) 50%, rgba(34,211,238,0.5))'
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 0.8] }}
        transition={{ duration: 1.7, times: [0, 0.6, 0.82, 1] }}
        className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 bg-white"
        style={{ boxShadow: '0 0 24px 6px rgba(240,171,252,0.9)' }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* 11. DEFAULT: Unreal wireframe grid                                   */
/* ------------------------------------------------------------------ */
const GRID_LINES = Array.from({ length: 11 }).map((_, i) => i * 10);

function WireframeGrid() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="absolute inset-0 bg-[#070918]"
      />
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full fill-none stroke-indigo-400"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        {GRID_LINES.map((p, i) => (
          <g key={p}>
            <motion.path
              d={`M${p} 0 L${p} 100`}
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
            />
            <motion.path
              d={`M0 ${p} L100 ${p}`}
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
            />
          </g>
        ))}
      </motion.svg>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 12. DEAR, HIRING MANAGER: cartoon CV gets stamped, then flies away   */
/* ------------------------------------------------------------------ */
const CV_LINES = [100, 78, 92, 64];

function CartoonCv() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0] }}
        transition={{ duration: 2.7, times: [0, 0.7, 1], ease: 'easeIn' }}
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px) 0 0 / 48px 48px, linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px) 0 0 / 48px 48px, radial-gradient(ellipse at 50% 40%, #12234a 0%, #070d1f 70%)'
        }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ x: [0, 0, -9, 8, -5, 3, 0], y: [0, 0, 7, -6, 3, -2, 0] }}
        transition={{ duration: 2.7, times: [0, 0.43, 0.45, 0.48, 0.52, 0.56, 0.6] }}
      >
        <motion.div
          initial={{ scale: 0.2, rotate: -14, y: 120, opacity: 0 }}
          animate={{
            scale: [0.2, 1, 1, 0.8],
            rotate: [-14, 2, 2, 22],
            y: [120, 0, 0, -1100],
            opacity: [0, 1, 1, 1]
          }}
          transition={{ duration: 2.7, times: [0, 0.2, 0.66, 1], ease: ['backOut', 'linear', 'easeIn'] }}
          className="relative w-[min(66%,360px)] aspect-[3/4] rounded-[28px] bg-gradient-to-b from-white to-slate-200 border-[6px] border-[#0b1226] transform-gpu will-change-transform"
          style={{ boxShadow: '10px 12px 0 rgba(0,0,0,0.55)' }}
        >
          {/* Folded corner */}
          <div
            className="absolute -top-[6px] -right-[6px] w-[26%] aspect-square bg-slate-300 border-[6px] border-[#0b1226] rounded-bl-[22px]"
            style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
          />

          <div className="absolute inset-0 p-[9%] flex flex-col">
            <div className="flex items-center gap-[6%]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 0.4, duration: 0.35 }}
                className="w-[28%] aspect-square rounded-2xl bg-[#1e293b] border-4 border-[#0b1226] flex items-end justify-center overflow-hidden"
              >
                <svg viewBox="0 0 40 40" className="w-[80%] h-[80%]">
                  <circle cx="20" cy="14" r="8" fill="#f8fafc" />
                  <path d="M4 40 C4 26 12 22 20 22 C28 22 36 26 36 40 Z" fill="#f8fafc" />
                </svg>
              </motion.div>
              <div className="flex-1 flex flex-col gap-[10%]">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.55, duration: 0.3 }}
                  className="h-4 sm:h-5 rounded-full bg-[#0b1226] origin-left"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0.62 }}
                  transition={{ delay: 0.65, duration: 0.3 }}
                  className="h-3 sm:h-3.5 rounded-full bg-slate-500 origin-left"
                />
              </div>
            </div>

            <div className="mt-[9%] flex flex-col gap-[5%]">
              {CV_LINES.map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: w / 100 }}
                  transition={{ delay: 0.75 + i * 0.1, duration: 0.3, ease: 'easeOut' }}
                  className="h-3 sm:h-4 rounded-full bg-slate-400 origin-left"
                />
              ))}
            </div>

            <div className="mt-[8%] flex gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.svg
                  key={i}
                  viewBox="0 0 24 24"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: [0, 1.4, 1], rotate: 0 }}
                  transition={{ delay: 1.0 + i * 0.07, duration: 0.3 }}
                >
                  <path
                    d="M12 2 L14.9 8.6 L22 9.3 L16.6 14 L18.2 21 L12 17.3 L5.8 21 L7.4 14 L2 9.3 L9.1 8.6 Z"
                    fill={i < 4 ? '#fbbf24' : '#cbd5e1'}
                    stroke="#0b1226"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              ))}
            </div>
          </div>

          {/* Impact lines around the stamp */}
          {Array.from({ length: 10 }).map((_, i) => {
            const a = (i / 10) * Math.PI * 2;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: [0, 1, 0], scale: [0.3, 1, 1.4] }}
                transition={{ delay: 1.2, duration: 0.45 }}
                className="absolute left-1/2 top-[70%] w-[3px] h-8 bg-[#0b1226] rounded-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(${(a * 180) / Math.PI + 90}deg) translateY(-${110 + (i % 2) * 24}px)`
                }}
              />
            );
          })}

          {/* HIRED! stamp slams down on the CV */}
          <motion.div
            initial={{ scale: 3.4, opacity: 0, rotate: -22 }}
            animate={{ scale: [3.4, 0.9, 1], opacity: [0, 1, 1], rotate: [-22, -13, -13] }}
            transition={{ delay: 1.15, duration: 0.3, times: [0, 0.7, 1], ease: 'easeIn' }}
            className="absolute left-[-6%] right-[-6%] top-[56%] rounded-xl border-[5px] border-white bg-gradient-to-b from-[#f43f5e] to-[#be123c] text-center py-1 sm:py-2"
            style={{
              boxShadow: '0 0 0 4px #be123c, 6px 10px 0 rgba(0,0,0,0.5)',
              fontFamily: "Impact, 'Arial Black', 'Montserrat', sans-serif"
            }}
          >
            <span className="text-4xl sm:text-6xl tracking-wider text-white drop-shadow-[0_3px_0_rgba(0,0,0,0.35)]">
              HIRED!
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

const EFFECTS = {
  rastacats: IceShatter,
  rem: InkDrench,
  'planet-protectors': LeafFall,
  delirium: Defibrillator,
  daydream: DreamDissolve,
  'project-isla': PerlinReveal,
  labrats: AcidDissolve,
  labraz: AcidDissolve,
  chanceway: CardDeal,
  'baldis-basics-2': ChalkboardWipe,
  waiwwai: VhsCollapse,
  'dear-hiring-manager': CartoonCv
};

export default function ProjectTheatricalEntrance({ projectId, animationKey = 0 }) {
  const Effect = EFFECTS[projectId] || WireframeGrid;
  return (
    <div
      key={`${projectId}-${animationKey}`}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
    >
      <Effect />
    </div>
  );
}
