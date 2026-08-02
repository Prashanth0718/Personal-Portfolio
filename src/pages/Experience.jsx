import { motion } from 'framer-motion';
import {
  FiBriefcase, FiMapPin, FiCheckCircle, FiZap, FiClock,
  FiAward, FiCalendar,
} from 'react-icons/fi';
import { experiences } from '@/constants/data';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Experience() {
  return (
    <>
      <PageHero
        eyebrow="EXPERIENCE"
        title={<>Professional <span className="gradient-text">experience</span></>}
        subtitle="My career journey across data engineering, full-stack development, and enterprise systems."
        accent="#3b82f6"
      />

      {/* Career Timeline */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-violet-300">01</span>
            <h3 className="font-display text-2xl font-bold">Career Timeline</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="relative space-y-12 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-violet-400 before:via-electric-400 before:to-transparent md:before:left-1/2">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} pl-12 md:pl-0`}
            >
              {/* Timeline node */}
              <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/50 bg-ink-800 md:left-1/2 md:-translate-x-1/2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: exp.accent }}
                />
                {exp.current && (
                  <span
                    className="absolute -inset-1 rounded-full opacity-60 animate-pulse-glow"
                    style={{ boxShadow: `0 0 12px ${exp.accent}` }}
                  />
                )}
              </span>

              <div className={`w-full md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <ExperienceCard exp={exp} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies Across Roles */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-violet-300">02</span>
            <h3 className="font-display text-2xl font-bold">Tech Stack Across Roles</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <GlassCard className="p-8" tilt>
            <div className="flex flex-wrap gap-3">
              {Array.from(new Set(experiences.flatMap((e) => e.technologies))).map((tech, i) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-violet-200 transition-colors hover:border-violet-400/50 hover:bg-violet-500/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </section>
    </>
  );
}

function ExperienceCard({ exp }) {
  return (
    <GlassCard className="overflow-hidden p-0" tilt glow>
      {/* Header */}
      <div className="relative p-8" style={{ background: `linear-gradient(135deg, ${exp.accent}15, transparent)` }}>
        <div className="absolute inset-0 bg-aurora opacity-30" />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-display text-xl font-bold text-white shadow-glow"
                style={{ background: `linear-gradient(135deg, ${exp.accent}, #3b82f6)` }}
              >
                {exp.logo}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl font-bold">{exp.company}</h3>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/20 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-violet-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse-glow" />
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-sm font-medium text-electric-400">{exp.role}</p>
              </div>
            </div>
          </div>

          {/* Meta row */}
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <FiCalendar size={13} className="text-violet-400" /> {exp.period}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiClock size={13} className="text-violet-400" /> {exp.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin size={13} className="text-violet-400" /> {exp.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiBriefcase size={13} className="text-violet-400" /> {exp.type}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-8">
        {/* Overview */}
        <div>
          <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-violet-300">Overview</h4>
          <p className="leading-relaxed text-muted">{exp.overview}</p>
        </div>

        {/* Responsibilities */}
        <div className="mt-8">
          <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-violet-300">Responsibilities</h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {exp.responsibilities.map((r, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <FiCheckCircle size={16} className="mt-0.5 shrink-0 text-electric-400" />
                <p className="text-sm text-muted">{r}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-8">
          <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-violet-300">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-violet-200 transition-colors hover:border-violet-400/50 hover:bg-violet-500/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-8">
          <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-violet-300">Key Achievements</h4>
          <div className="space-y-3">
            {exp.achievements.map((a, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-violet-400/30 hover:bg-violet-500/5"
              >
                <FiZap size={16} className="mt-0.5 shrink-0 text-violet-400" />
                <p className="text-sm text-muted">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
