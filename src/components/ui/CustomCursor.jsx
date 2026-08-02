import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);
  const ringRef = useRef(null);
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const over = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"], input, textarea')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    const leave = () => setHidden(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    document.addEventListener('mouseleave', leave);

    let frame;
    const animateRing = () => {
      ringPos.current.x += (pos.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.y - ringPos.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(animateRing);
    };
    frame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.removeEventListener('mouseleave', leave);
      cancelAnimationFrame(frame);
    };
  }, [pos]);

  return (
    <div className="hidden md:block">
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-electric-400 mix-blend-difference"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hidden ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border transition-[width,height,border-color] duration-200 ${
          hovering ? 'h-14 w-14 border-violet-400/80' : 'border-electric-400/50'
        }`}
        style={{ mixBlendMode: 'difference' }}
      />
    </div>
  );
}
