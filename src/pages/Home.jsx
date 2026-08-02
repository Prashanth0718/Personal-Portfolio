import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight, FiArrowDown, FiCheckCircle, FiMapPin,
  FiClock, FiBriefcase, FiLayers, FiServer, FiDatabase,
  FiGitBranch, FiCloud, FiTool, FiCpu,
  FiStar, FiGithub, FiExternalLink,
} from 'react-icons/fi';
import { personal, projects, experiences, about, techStackCategories } from '@/constants/data';
import Hero from '@/components/sections/Hero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MagneticButton from '@/components/ui/MagneticButton';

const categoryIcons = {
  layout: FiLayers,
  server: FiServer,
  database: FiDatabase,
  workflow: FiGitBranch,
  cloud: FiCloud,
  tool: FiTool,
};

export default function Home() {
  const featured = projects.slice(0, 3);
  const current = experiences[0];

  return (
    <>
      <Hero />

      {/* About */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <ScrollReveal>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-widest text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse-glow" />
                01 / ABOUT
              </div>
              <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">
                The engineer behind <span className="gradient-text">the code</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">{about.paragraphs[0]}</p>
              <p className="mt-4 text-lg leading-relaxed text-muted">{about.paragraphs[1]}</p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-electric-400 transition-colors hover:text-electric-300">
                Read my full story <FiArrowRight size={16} />
              </Link>
            </div>
            <GlassCard className="p-8" tilt glow>
              <h3 className="mb-6 font-display text-xl font-semibold">At a glance</h3>
              <div className="space-y-4">
                {[
                  { label: 'Role', value: personal.role },
                  { label: 'Company', value: personal.company },
                  { label: 'Unit', value: personal.unit },
                  { label: 'Location', value: personal.location },
                  { label: 'Focus', value: 'Data Engineering & Full-Stack' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-white/5 pb-3">
                    <span className="text-sm text-muted">{item.label}</span>
                    <span className="text-sm font-medium text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <ScrollReveal>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-widest text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse-glow" />
              02 / TECH STACK
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">
              Tools I build <span className="gradient-text">with</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              The technologies I reach for across the stack — from data pipelines to polished interfaces.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStackCategories.map((cat, i) => {
            const CatIcon = categoryIcons[cat.icon] || FiCpu;
            return (
              <ScrollReveal key={cat.category} delay={i * 0.08}>
                <GlassCard className="h-full p-6" tilt glow>
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: `${cat.accent}20`, color: cat.accent }}
                    >
                      <CatIcon size={20} />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{cat.category}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.items.map((tech) => (
                      <span
                        key={tech.name}
                        className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition-colors hover:border-violet-400/40 hover:bg-violet-500/10"
                      >
                        <tech.icon size={14} style={{ color: tech.color }} />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <ScrollReveal>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-widest text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse-glow" />
                03 / FEATURED WORK
              </div>
              <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">Selected projects</h2>
            </div>
            <Link to="/projects" className="hidden items-center gap-2 text-sm text-electric-400 transition-colors hover:text-electric-300 md:inline-flex">
              View all <FiArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => {
            const isProd = project.status === 'Production';
            return (
              <ScrollReveal key={project.slug} delay={i * 0.1}>
                <Link to={`/projects/${project.slug}`} className="group block h-full">
                  <motion.div whileHover={{ y: -8 }} className="h-full">
                    <GlassCard className="flex h-full flex-col overflow-hidden p-0" tilt glow>
                      <div
                        className="relative h-44 overflow-hidden rounded-t-2xl"
                        style={{ background: `linear-gradient(135deg, ${project.accent}40, ${project.accent}10)` }}
                      >
                        <div className="absolute inset-0 bg-aurora opacity-50" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-5xl font-bold opacity-20 transition-transform duration-500 group-hover:scale-110" style={{ color: project.accent }}>
                            {project.title.slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                        {project.featured && (
                          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-violet-500/20 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-violet-300 backdrop-blur-sm">
                            <FiStar size={10} className="fill-violet-400 text-violet-400" /> Featured
                          </span>
                        )}
                        <span className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider backdrop-blur-sm ${isProd ? 'bg-emerald-500/15 text-emerald-400' : 'bg-violet-500/15 text-violet-300'}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${isProd ? 'bg-emerald-400 animate-pulse-glow' : 'bg-violet-400'}`} />
                          {project.status}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <span className="font-mono text-xs uppercase tracking-widest text-violet-300">{project.category}</span>
                        <h3 className="mt-2 font-display text-xl font-semibold group-hover:text-violet-300">{project.title}</h3>
                        <p className="mt-2 line-clamp-2 text-sm text-muted">{project.tagline}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.techStack.slice(0, 3).map((t) => (
                            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-violet-200">{t}</span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-muted">+{project.techStack.length - 3}</span>
                          )}
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-6">
                          <div className="flex gap-2">
                            {project.github && (
                              <span onClick={(e) => e.preventDefault()} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted transition-colors hover:border-violet-400/40 hover:text-violet-300">
                                <FiGithub size={16} />
                              </span>
                            )}
                            {project.demo && (
                              <span onClick={(e) => e.preventDefault()} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted transition-colors hover:border-electric-400/40 hover:text-electric-300">
                                <FiExternalLink size={16} />
                              </span>
                            )}
                          </div>
                          <span className="inline-flex items-center gap-1 text-sm text-electric-400 transition-all group-hover:gap-2">
                            Case study <FiArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
        <div className="mt-10 text-center md:hidden">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-electric-400">
            View all projects <FiArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Current Experience
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-widest text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse-glow" />
            04 / CURRENT EXPERIENCE
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold md:text-5xl">Where I build</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <GlassCard className="mt-8 overflow-hidden p-0" tilt>
            <div className="grid md:grid-cols-3">
              <div className="relative bg-gradient-to-br from-violet-500/10 to-electric-500/10 p-8 md:col-span-1">
                <div className="absolute inset-0 bg-aurora opacity-40" />
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-electric-500 shadow-glow font-display text-2xl font-bold text-white">
                    {current.logo}
                  </span>
                  <div className="mt-6 flex items-center gap-2">
                    <h3 className="font-display text-2xl font-bold">{current.company}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/20 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-violet-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse-glow" />
                      Current
                    </span>
                  </div>
                  <p className="mt-1 text-electric-400">{current.role}</p>
                  <p className="mt-2 text-sm text-muted">{current.unit}</p>
                  <div className="mt-4 space-y-1.5 text-sm text-muted">
                    <p className="inline-flex items-center gap-1.5"><FiClock size={13} className="text-violet-400" /> {current.period}</p>
                    <p className="inline-flex items-center gap-1.5"><FiMapPin size={13} className="text-violet-400" /> {current.location}</p>
                    <p className="inline-flex items-center gap-1.5"><FiBriefcase size={13} className="text-violet-400" /> {current.type}</p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:col-span-2">
                <p className="text-muted">{current.overview}</p>
                <ul className="mt-6 space-y-3">
                  {current.responsibilities.slice(0, 3).map((r, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted">
                      <FiCheckCircle size={16} className="mt-0.5 shrink-0 text-electric-400" />
                      {r}
                    </li>
                  ))}
                </ul>
                <Link to="/experience" className="mt-6 inline-flex items-center gap-2 text-sm text-electric-400 transition-colors hover:text-electric-300">
                  Full experience <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </section> */}

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-12 text-center md:p-20">
            <div className="absolute inset-0 bg-aurora opacity-40" />
            <div className="relative">
              <h2 className="font-display text-4xl font-bold md:text-6xl">
                Let's Build Something <span className="gradient-text">Meaningful </span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
               Ready to turn ideas into impactful software. Let's connect.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <MagneticButton to="/contact" className="bg-gradient-to-r from-violet-500 to-electric-500 text-white shadow-glow">
                  Contact Me
                </MagneticButton>
                <MagneticButton to="/resume" className="glass border border-white/10 text-white hover:border-violet-400/50">
                  View resume
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </>
  );
}
