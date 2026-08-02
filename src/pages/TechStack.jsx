import { motion } from 'framer-motion';
import { techStack } from '@/constants/data';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TechStack() {
  return (
    <>
      <PageHero
        eyebrow="TECH STACK"
        title={<>Technologies I <span className="gradient-text">work with</span></>}
        subtitle="The engines that power my data pipelines, APIs, and interfaces."
        accent="#22d3ee"
      />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
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

      {/* Categories overview */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-violet-300">Stack Breakdown</h3>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Languages', items: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS'], color: '#a78bfa' },
            { title: 'Backend & Data', items: ['FastAPI', 'SQLite', 'MySQL', 'MongoDB', 'Databricks'], color: '#60a5fa' },
            { title: 'Frontend', items: ['React', 'Tailwind CSS', 'Three.js'], color: '#22d3ee' },
            { title: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Vercel'], color: '#34d399' },
          ].map((group, i) => (
            <ScrollReveal key={group.title} delay={i * 0.1}>
              <GlassCard className="p-6" tilt>
                <h4 className="font-display text-lg font-semibold" style={{ color: group.color }}>{group.title}</h4>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: group.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
