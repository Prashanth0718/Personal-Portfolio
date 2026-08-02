import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink, FiX, FiDownload } from 'react-icons/fi';
import { skillCategories, techStack, certifications } from '@/constants/data';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

function SkillBar({ skill, index }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <GlassCard className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-white/10">
              <Icon size={22} style={{ color: skill.color }} />
            </span>
            <span className="font-medium text-white">{skill.name}</span>
          </div>
          <span className="font-mono text-sm text-violet-300">{skill.level}%</span>
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-electric-400"
            style={{ boxShadow: `0 0 10px ${skill.color}80` }}
          />
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCert, setActiveCert] = useState(null);

  const handleDownload = (cert) => {
    const text = `${cert.title}\n${cert.issuer} — ${cert.year}\nCredential ID: ${cert.credentialId}\nVerify: ${cert.verify}`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${cert.title.replace(/\s+/g, '_')}_certificate.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageHero
        eyebrow="SKILLS"
        title={<>My <span className="gradient-text">toolkit</span></>}
        subtitle="A comprehensive breakdown of the technologies I use across data engineering, backend, frontend, and cloud — plus my certifications and tech stack."
        accent="#a855f7"
      />

      {skillCategories.map((cat, catIndex) => (
        <section key={cat.category} className="relative z-10 mx-auto max-w-7xl px-6 py-12">
          <ScrollReveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="font-mono text-xs text-violet-300">{String(catIndex + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-2xl font-bold">{cat.category}</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat.skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </section>
      ))}

      {/* Tech Stack Grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-violet-300">07</span>
            <h3 className="font-display text-2xl font-bold">Tech Stack</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <ScrollReveal key={tech.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group relative flex h-36 flex-col items-center justify-center gap-4 rounded-2xl glass transition-shadow hover:shadow-glow"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <Icon size={40} style={{ color: tech.color }} />
                  </motion.div>
                  <span className="text-sm text-muted group-hover:text-white">{tech.name}</span>
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ boxShadow: `inset 0 0 40px ${tech.color}30` }}
                  />
                  <div
                    className="absolute -bottom-2 left-1/2 h-8 w-16 -translate-x-1/2 rounded-full opacity-0 blur-xl transition-opacity group-hover:opacity-40"
                    style={{ background: tech.color }}
                  />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Certifications with Modal Preview */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-violet-300">08</span>
            <h3 className="font-display text-2xl font-bold">Certifications</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.1}>
              <motion.button
                onClick={() => setActiveCert(cert)}
                whileHover={{ y: -6 }}
                className="group relative w-full overflow-hidden rounded-2xl glass p-8 text-left transition-shadow hover:shadow-glow"
              >
                <div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                  style={{ background: cert.color }}
                />
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
                >
                  <FiAward size={26} style={{ color: cert.color }} />
                </span>
                <h4 className="mt-6 font-display text-lg font-semibold leading-snug">{cert.title}</h4>
                <p className="mt-2 text-sm text-muted">{cert.issuer} &middot; {cert.year}</p>
                <p className="mt-3 text-sm text-muted">{cert.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs text-electric-400">
                  Preview certificate <FiExternalLink size={12} />
                </span>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative w-full max-w-2xl rounded-2xl p-8"
            >
              <button onClick={() => setActiveCert(null)} className="absolute right-4 top-4 text-muted hover:text-white">
                <FiX size={22} />
              </button>
              <div className="flex flex-col items-center text-center">
                <span
                  className="flex h-20 w-20 items-center justify-center rounded-3xl"
                  style={{ background: `${activeCert.color}20`, border: `1px solid ${activeCert.color}40` }}
                >
                  <FiAward size={40} style={{ color: activeCert.color }} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold">{activeCert.title}</h3>
                <p className="mt-2 text-muted">{activeCert.issuer} &middot; {activeCert.year}</p>
                <p className="mt-4 max-w-md text-sm text-muted">{activeCert.description}</p>
                <div className="mt-8 w-full rounded-xl border border-white/10 bg-gradient-to-br from-ink-700 to-ink-800 p-8">
                  <p className="font-mono text-sm text-muted">This certifies that</p>
                  <p className="mt-2 font-display text-xl font-bold gradient-text">Prashanth S N</p>
                  <p className="mt-2 text-sm text-muted">has successfully completed all requirements</p>
                  <div className="mt-6 flex items-center justify-between text-xs text-muted">
                    <span>ID: {activeCert.credentialId}</span>
                    <span>{activeCert.issuer}</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleDownload(activeCert)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition-colors hover:border-violet-400/50"
                  >
                    <FiDownload size={14} /> Download
                  </button>
                  <a
                    href={activeCert.verify}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-electric-500 px-5 py-2.5 text-sm text-white shadow-glow"
                  >
                    Verify <FiExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
