import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink, FiX, FiDownload } from 'react-icons/fi';
import { certifications } from '@/constants/data';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Certifications() {
  const [active, setActive] = useState(null);

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
        eyebrow="CERTIFICATIONS"
        title={<>Credentials & <span className="gradient-text">certifications</span></>}
        subtitle="Validated expertise across data engineering, Java, and machine learning."
        accent="#FF3621"
      />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.1}>
              <motion.button
                onClick={() => setActive(cert)}
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
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug">{cert.title}</h3>
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

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative w-full max-w-2xl rounded-2xl p-8"
            >
              <button onClick={() => setActive(null)} className="absolute right-4 top-4 text-muted hover:text-white">
                <FiX size={22} />
              </button>
              <div className="flex flex-col items-center text-center">
                <span
                  className="flex h-20 w-20 items-center justify-center rounded-3xl"
                  style={{ background: `${active.color}20`, border: `1px solid ${active.color}40` }}
                >
                  <FiAward size={40} style={{ color: active.color }} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold">{active.title}</h3>
                <p className="mt-2 text-muted">{active.issuer} &middot; {active.year}</p>
                <p className="mt-4 max-w-md text-sm text-muted">{active.description}</p>
                <div className="mt-8 w-full rounded-xl border border-white/10 bg-gradient-to-br from-ink-700 to-ink-800 p-8">
                  <p className="font-mono text-sm text-muted">This certifies that</p>
                  <p className="mt-2 font-display text-xl font-bold gradient-text">Prashanth S N</p>
                  <p className="mt-2 text-sm text-muted">has successfully completed all requirements</p>
                  <div className="mt-6 flex items-center justify-between text-xs text-muted">
                    <span>ID: {active.credentialId}</span>
                    <span>{active.issuer}</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => handleDownload(active)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition-colors hover:border-violet-400/50"
                  >
                    <FiDownload size={14} /> Download
                  </button>
                  <a
                    href={active.verify}
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
