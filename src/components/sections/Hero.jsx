import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload, FiInstagram } from 'react-icons/fi';
import { personal, roles, stats } from '@/constants/data';
import Hero3DObject from '@/components/three/Hero3DObject';
import ParticleCanvas from '@/components/background/ParticleCanvas';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

function useTypewriter(words, speed = 100, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
        );
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <ParticleCanvas className="absolute inset-0 -z-10" />
      <Hero3DObject className="absolute inset-0 -z-10 opacity-90" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-wider text-violet-300"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Creating opportunities through code
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
        >
          {personal.name.split(' ')[0]}{' '}
          <span className="gradient-text">{personal.name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 flex items-center gap-2 font-mono text-lg text-muted md:text-2xl"
        >
          <span className="text-electric-400">&gt;</span>
          <span className="text-white">{typed}</span>
          <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-violet-400 md:h-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-muted md:text-xl"
        >
          {personal.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            to="/contact"
            className="bg-gradient-to-r from-violet-500 to-electric-500 text-white shadow-glow hover:shadow-glow-blue"
          >
            <FiMail size={18} /> Hire Me
          </MagneticButton>
          <MagneticButton
            href={personal.linkedin}
            className="glass border border-white/10 text-white hover:border-violet-400/50"
          >
            <FiLinkedin size={18} /> LinkedIn
          </MagneticButton>
          <MagneticButton
            href={personal.github}
            className="glass border border-white/10 text-white hover:border-electric-400/50"
          >
            <FiGithub size={18} /> GitHub
          </MagneticButton>
        </motion.div>

       

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-4">
              <div className="font-display text-2xl font-bold text-white md:text-3xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
