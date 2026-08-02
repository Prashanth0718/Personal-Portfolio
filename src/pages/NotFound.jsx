import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 -z-10 bg-aurora opacity-40" />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]"
      />

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="font-display text-8xl font-bold gradient-text md:text-9xl"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 max-w-md text-lg text-muted"
      >
        This page drifted off into the data void. Let's get you back on track.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-electric-500 px-6 py-3 font-medium text-white shadow-glow">
          <FiHome size={18} /> Back home
        </Link>
        <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-white transition-colors hover:border-violet-400/50">
          <FiArrowLeft size={18} /> Browse projects
        </Link>
      </motion.div>
    </section>
  );
}
