import { useId } from 'react';
import { motion } from 'framer-motion';

export default function BrandMark({
  size = 24,
  withName = true,
  showSubtitle = true,
  nameSize = 'sm',
  className = '',
}) {
  const id = useId();
  const fontSize = Math.round(size * 0.45);
  const hexRadius = size / 2;
  const innerCircle = size * 0.78;

  // Hexagon points (flat-top orientation)
  const hexPoints = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return {
      x: hexRadius + (hexRadius - 1) * Math.cos(angle),
      y: hexRadius + (hexRadius - 1) * Math.sin(angle),
    };
  });
  const hexPath = hexPoints.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');

  return (
    <span className={`group inline-flex items-center ${className}`}>
      <motion.span
        className="relative inline-flex shrink-0 items-center justify-center"
        style={{ width: size, height: size }}
        whileHover="hover"
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id={`${id}-stroke`} x1="0" y1="0" x2={size} y2={size} gradientUnits="userSpaceOnUse">
              <stop stopColor="#a78bfa" />
              <stop offset="0.5" stopColor="#60a5fa" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id={`${id}-fill`} x1="0" y1="0" x2={size} y2={size} gradientUnits="userSpaceOnUse">
              <stop stopColor="#7c3aed" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
            <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
              <stop stopColor="#a78bfa" stopOpacity="0.12" />
              <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Soft ambient glow */}
          <circle cx={hexRadius} cy={hexRadius} r={hexRadius} fill={`url(#${id}-glow)`} />

          {/* Rotating hexagon frame */}
          <motion.polygon
            points={hexPath}
            stroke={`url(#${id}-stroke)`}
            strokeWidth="1"
            strokeLinejoin="round"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            variants={{ hover: { rotate: 360, transition: { duration: 8, repeat: Infinity, ease: 'linear' } } }}
            style={{ originX: '50%', originY: '50%' }}
          />

          {/* Counter-rotating dashed inner circle */}
          <motion.circle
            cx={hexRadius}
            cy={hexRadius}
            r={innerCircle / 2}
            stroke="#60a5fa"
            strokeWidth="0.5"
            strokeDasharray="2 4"
            strokeOpacity="0.35"
            fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            variants={{ hover: { rotate: -360, transition: { duration: 10, repeat: Infinity, ease: 'linear' } } }}
            style={{ originX: '50%', originY: '50%' }}
          />

          {/* Single accent dot riding the hexagon */}
          <motion.circle
            cx={hexPoints[0].x}
            cy={hexPoints[0].y}
            r="1.1"
            fill="#22d3ee"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            variants={{ hover: { rotate: 360, transition: { duration: 8, repeat: Infinity, ease: 'linear' } } }}
            style={{ originX: '50%', originY: '50%' }}
          />
        </svg>

        {/* Fixed center "P" badge */}
        <span
          className="relative z-10 flex items-center justify-center font-display font-bold text-white"
          style={{
            width: Math.round(size * 0.56),
            height: Math.round(size * 0.56),
            fontSize,
            borderRadius: Math.round(size * 0.14),
            background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
            boxShadow: '0 0 6px -3px rgba(124,58,237,0.25)',
          }}
        >
          P
        </span>
      </motion.span>

      {withName && (
        <span className="ml-2.5 flex flex-col">
            <span
                className={`font-display ${
                nameSize === 'lg'
                    ? 'text-lg'
                    : nameSize === 'md'
                    ? 'text-base'
                    : 'text-sm'
                } font-semibold leading-none text-white`}
            >
                Prashanth S N
            </span>

            {showSubtitle && (
                <span className="mt-1 text-[10px] font-normal tracking-wide text-muted">
                Associate Software Engineer
                </span>
            )}
            </span>
            )}
            </span>
  );
}
