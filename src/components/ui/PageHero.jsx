import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function PageHero({ eyebrow, title, subtitle, accent = '#7c3aed', children }) {
  return (
    <section className="relative min-h-[60vh] overflow-hidden px-6 pt-32 pb-16">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background: `radial-gradient(at 30% 20%, ${accent}30 0px, transparent 50%), radial-gradient(at 70% 80%, ${accent}20 0px, transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-aurora opacity-30" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-widest text-violet-300"
        >
          <span className="h-1.5 w-1.5 rounded-full animate-pulse-glow" style={{ background: accent }} />
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}