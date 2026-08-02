import { motion } from 'framer-motion';

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      <div className="absolute inset-0 bg-aurora opacity-60" />
      <motion.div
        className="absolute -left-40 top-[-10%] h-[40rem] w-[40rem] rounded-full bg-violet-500/20 blur-[120px]"
        animate={{ x: [0, 100, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10%] top-[20%] h-[35rem] w-[35rem] rounded-full bg-electric-500/20 blur-[120px]"
        animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[30%] h-[30rem] w-[30rem] rounded-full bg-accent-cyan/15 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="noise-overlay" />
    </div>
  );
}
