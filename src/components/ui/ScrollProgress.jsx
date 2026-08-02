import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9998] h-0.5 w-full origin-left bg-gradient-to-r from-violet-500 via-electric-400 to-accent-cyan"
      style={{ scaleX }}
    />
  );
}
