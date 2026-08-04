import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personal } from '@/constants/data';
import BrandMark from '@/components/ui/BrandMark';

const socials = [
  { name: 'GitHub', href: personal.github, icon: FiGithub, hover: 'hover:border-violet-400/60 hover:text-violet-300 hover:shadow-[0_0_20px_-4px_rgba(124,58,237,0.5)]' },
  { name: 'LinkedIn', href: personal.linkedin, icon: FiLinkedin, hover: 'hover:border-electric-400/60 hover:text-electric-300 hover:shadow-[0_0_20px_-4px_rgba(59,130,246,0.5)]' },
  { name: 'Email', href: `mailto:${personal.email}`, icon: FiMail, hover: 'hover:border-accent-cyan/60 hover:text-accent-cyan hover:shadow-[0_0_20px_-4px_rgba(34,211,238,0.5)]' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 mt-20">
      {/* Animated gradient divider */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
        <motion.div
          className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-electric-400 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Three-column layout */}
        <div className="grid items-center gap-8 md:grid-cols-3">
          {/* Left: Logo + Name + Role */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link to="/" className="inline-flex items-center">
              <BrandMark
                size={40}
                withName
                showSubtitle
                nameSize="md"
              />
            </Link>
          </div>

          {/* Center: Social glass buttons */}
          <div className="flex items-center justify-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.92 }}
                className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted backdrop-blur-md transition-all duration-300 ${s.hover}`}
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} {personal.name}. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Below divider */}
        <div className="mt-8 grid grid-cols-3 items-center border-t border-white/5 pt-6">
            {/* Empty left column */}
            <div />

            {/* Perfectly centered text */}
            <p className="text-center font-mono text-xs uppercase tracking-wider text-muted/80">
              {'>'} CRAFTED_WITH_CODE_AND_COFFEE ☕ IN HYDERABAD
            </p>

            {/* Right-aligned button */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.92 }}
              className="justify-self-end flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-muted transition-colors hover:border-violet-400/50 hover:text-white"
            >
              Back to top <FiArrowUp size={14} />
            </motion.button>
          </div>
      </div>
    </footer>
  );
}
