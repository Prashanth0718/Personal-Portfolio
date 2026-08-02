import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { projects } from '@/constants/data';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="GALLERY"
        title={<>Project <span className="gradient-text">gallery</span></>}
        subtitle="A visual tour of my work — click any image to dive into the full case study."
        accent="#a855f7"
      />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <Link to={`/projects/${project.slug}`} className="group block">
                <motion.div whileHover={{ y: -6 }} className="overflow-hidden">
                  <GlassCard className="overflow-hidden p-0" tilt glow>
                    <div
                      className="relative h-64 overflow-hidden rounded-t-2xl"
                      style={{ background: `linear-gradient(135deg, ${project.accent}40, ${project.accent}10)` }}
                    >
                      <div className="absolute inset-0 bg-aurora opacity-50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-6xl font-bold opacity-20" style={{ color: project.accent }}>
                          {project.title.slice(0, 3).toUpperCase()}
                        </span>
                      </div>
                      <div className="noise-overlay" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 3).map((t) => (
                            <span key={t} className="rounded-full bg-black/30 px-3 py-1 text-xs text-white backdrop-blur-sm">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold group-hover:text-violet-300">{project.title}</h3>
                      <p className="mt-2 text-sm text-muted">{project.tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm text-electric-400 transition-transform group-hover:gap-2">
                        View case study <FiArrowRight size={14} />
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
