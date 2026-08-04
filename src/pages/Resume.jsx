import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiDownload, FiBriefcase, FiAward, FiBook, FiCode, FiExternalLink,
  FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowRight,
  FiCpu, FiServer, FiDatabase, FiGitBranch, FiCloud, FiTool, FiLayers,
  FiTerminal, FiZap, FiActivity,
} from 'react-icons/fi';
import {
  personal, experiences, skillCategories, certifications, about, projects, achievementsData,
} from '@/constants/data';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import BrandMark from '@/components/ui/BrandMark';

const skillCatIcons = {
  'Programming Languages': FiCpu,
  'Frontend': FiLayers,
  'Backend': FiServer,
  'Databases': FiDatabase,
  'Data Engineering': FiGitBranch,
  'Cloud & Tools': FiCloud,
};

const skillCatAccents = {
  'Programming Languages': '#F7DF1E',
  'Frontend': '#61DAFB',
  'Backend': '#009688',
  'Databases': '#4479A1',
  'Data Engineering': '#FF3621',
  'Cloud & Tools': '#2496ED',
};


function TerminalHeading({ children, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/30 bg-violet-500/10">
          <FiTerminal size={16} className="text-violet-400" />
        </span>
        <h2 className="font-mono text-xl font-bold tracking-tight text-white md:text-2xl">
          <span className="text-violet-400">&gt;</span> {children}
        </h2>
        <motion.span
          className="ml-1 inline-block h-5 w-0.5 bg-electric-400"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </ScrollReveal>
  );
}

export default function Resume() {
  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/resume/Prashanth_Resume.pdf'; // or '/Prashanth_S_N_Resume.pdf'
  link.download = 'Prashanth_S_N_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const projectsToShow = featuredProjects.length >= 3 ? featuredProjects : projects.slice(0, 3);

  const contactItems = [
    { icon: FiMail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: FiPhone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: FiGithub, label: 'GitHub', value: personal.github.replace('https://', ''), href: personal.github },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'in/prashanth-sn', href: personal.linkedin },
  ];

  return (
    <>
      <PageHero
        eyebrow="RESUME"
        title={<>Professional <span className="gradient-text">Resume </span></>}
        subtitle="Explore my professional experience, technical expertise, featured projects, certifications, and career journey."
        accent="#7c3aed"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[20rem_1fr]">
          {/* LEFT SIDEBAR */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <ScrollReveal>
              <GlassCard className="overflow-hidden p-0" tilt glow>
                {/* Avatar header */}
                <div className="relative overflow-hidden bg-gradient-to-br from-violet-500/15 via-violet-500/10 to-electric-500/15 p-8 text-center">

                  {/* Aurora Background */}
                  <div className="absolute inset-0 bg-aurora opacity-25" />

                  {/* Decorative Glow */}
                  <div className="absolute left-1/2 top-12 h-28 w-28 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />

                  <div className="relative">

                    {/* Brand Mark */}
                    <div className="flex justify-center">
                      <BrandMark
                        size={88}
                        withName={false}
                      />
                    </div>

                    {/* Name */}
                    <h2 className="mt-6 font-display text-2xl font-bold">
                      {personal.name}
                    </h2>

                    {/* Role */}
                    <p className="mt-1 text-sm font-medium text-electric-400">
                      {personal.role}
                    </p>

                    {/* Company */}
                    <p className="mt-1 text-sm text-muted">
                      {personal.company}
                    </p>

                    {/* Location */}
                    <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted">
                      <FiMapPin size={12} />
                      {personal.location}
                    </p>

                    {/* Divider */}
                    <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

                    {/* Quick Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-3">

                      <div className="rounded-xl border border-white/5 bg-white/5 py-3">
                        <p className="text-lg font-bold text-white">8+</p>
                        <p className="text-[11px] uppercase tracking-wide text-muted">
                          Projects
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/5 bg-white/5 py-3">
                        <p className="text-lg font-bold text-white">4</p>
                        <p className="text-[11px] uppercase tracking-wide text-muted">
                          Certificates
                        </p>
                      </div>

                    </div>

                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-2 p-5">
                  {contactItems.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.icon === FiGithub || c.icon === FiLinkedin ? '_blank' : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-2.5 transition-colors hover:border-violet-400/30 hover:bg-violet-500/5"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                        <c.icon size={14} />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-widest text-muted">{c.label}</div>
                        <div className="truncate text-xs font-medium text-white">{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Education */}
                <div className="border-t border-white/5 p-5">
                  <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-violet-300">
                    <FiBook size={13} /> Education
                  </h3>
                  {about.education.map((edu, i) => (
                    <div key={i} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                      <div className="text-sm font-semibold text-white">{edu.degree}</div>
                      <div className="text-xs text-electric-400">{edu.field}</div>
                      <div className="mt-1 text-xs text-muted">{edu.year}</div>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                <div className="border-t border-white/5 p-5">
                  <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-violet-300">
                    <FiActivity size={13} /> Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {about.languages.map((l) => (
                      <span key={l.name} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-violet-200">
                        {l.name} <span className="text-muted">· {l.level}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download */}
                <div className="border-t border-white/5 p-5">
                  <MagneticButton
                    onClick={handleDownload}
                    className="w-full justify-center bg-gradient-to-r from-violet-500 to-electric-500 text-white shadow-glow"
                  >
                    <FiDownload size={16} /> Download Resume
                  </MagneticButton>
                </div>
              </GlassCard>
            </ScrollReveal>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="space-y-12">
            {/* 1. Professional Summary */}
            <section>
              <TerminalHeading>Career Objective</TerminalHeading>

              <ScrollReveal delay={0.05}>
                <GlassCard className="p-8" tilt glow>
                  <p className="leading-8 text-muted">
                    To obtain a challenging <span className="font-semibold text-white">Software Engineer</span> position where I can apply my skills in
                    <span className="text-electric-400"> Full-Stack Development</span>,
                    <span className="text-violet-400"> Data Engineering</span>, and
                    <span className="text-cyan-400"> modern web technologies</span> to build scalable, efficient, and user-centric software solutions while continuously learning, collaborating, and contributing to organizational success.
                  </p>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                      Currently Learning
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {[
                        'AWS Cloud',
                        'Spring Boot',
                        'Microservices',
                        'System Design',
                        'Docker',
                        'Kubernetes',
                        'CI/CD',
                        'DSA',
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            </section>

            {/* 2. Professional Experience */}
            <section>
              <TerminalHeading delay={0.05}>Experience</TerminalHeading>
              <div className="relative space-y-6 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-violet-400 before:via-electric-400 before:to-transparent">
                {experiences.map((exp, i) => (
                  <ScrollReveal key={exp.id} delay={i * 0.08}>
                    <div className="relative pl-10">
                      <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-violet-400/50 bg-ink-800">
                        <span className="h-2 w-2 rounded-full bg-violet-400" />
                      </span>
                      <GlassCard className="p-6" tilt>
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
                            <p className="text-sm text-electric-400">{exp.company} — {exp.unit}</p>
                          </div>
                          <span className="rounded-full bg-violet-500/15 px-3 py-1 font-mono text-xs text-violet-300">
                            {exp.period}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {exp.techStack?.map((t) => (
                            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-violet-200">{t}</span>
                          ))}
                        </div>
                        <ul className="mt-4 space-y-2">
                          {exp.responsibilities.slice(0, 4).map((r, j) => (
                            <li key={j} className="flex gap-2 text-sm text-muted">
                              <FiZap size={14} className="mt-0.5 shrink-0 text-electric-400" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </GlassCard>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* 3. Technical Skills */}
            <section>
              <TerminalHeading delay={0.05}>Tech Stack</TerminalHeading>
              <div className="grid gap-4 sm:grid-cols-2">
                {skillCategories.map((cat, i) => {
                  const Icon = skillCatIcons[cat.category] || FiCode;
                  const accent = skillCatAccents[cat.category] || '#a78bfa';
                  return (
                    <ScrollReveal key={cat.category} delay={i * 0.06}>
                      <GlassCard className="h-full p-6" tilt>
                        <div className="flex items-center gap-3">
                          <span
                            className="flex h-10 w-10 items-center justify-center rounded-xl"
                            style={{ background: `${accent}20`, color: accent }}
                          >
                            <Icon size={18} />
                          </span>
                          <h3 className="font-display text-base font-semibold">{cat.category}</h3>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {cat.skills?.map((skill) => (
                            <span
                              key={skill.name}
                              className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition-colors hover:border-violet-400/40 hover:bg-violet-500/10"
                            >
                              {skill.icon && <skill.icon size={13} style={{ color: skill.color }} />}
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </ScrollReveal>
                  );
                })}
              </div>
            </section>

            {/* 4. Featured Projects */}
            <section>
              <TerminalHeading delay={0.05}>Featured Projects</TerminalHeading>
              <div className="grid gap-4 md:grid-cols-3">
                {projectsToShow.map((p, i) => (
                  <ScrollReveal key={p.slug} delay={i * 0.08}>
                    <GlassCard className="flex h-full flex-col p-6" tilt glow>
                      <span className="font-mono text-xs uppercase tracking-widest text-violet-300">{p.category}</span>
                      <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted">{p.tagline}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.techStack.slice(0, 3).map((t) => (
                          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-violet-200">{t}</span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-5">
                        <div className="flex gap-2">
                          {p.github && (
                            <a href={p.github} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted transition-colors hover:border-violet-400/40 hover:text-violet-300">
                              <FiGithub size={14} />
                            </a>
                          )}
                          {p.demo && (
                            <a href={p.demo} target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted transition-colors hover:border-electric-400/40 hover:text-electric-300">
                              <FiExternalLink size={14} />
                            </a>
                          )}
                        </div>
                        <Link to={`/projects/${p.slug}`} className="inline-flex items-center gap-1 text-xs text-electric-400 transition-all hover:gap-2">
                          View <FiArrowRight size={12} />
                        </Link>
                      </div>
                    </GlassCard>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* 5. Certifications */}
            <section>
              <TerminalHeading delay={0.05}>Certifications</TerminalHeading>
              <div className="grid gap-4 sm:grid-cols-2">
                {certifications.map((cert, i) => (
                  <ScrollReveal key={cert.title} delay={i * 0.06}>
                    <GlassCard className="p-6" tilt>
                      <div className="flex items-start gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-electric-500/20">
                          <FiAward size={22} className="text-violet-400" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-base font-semibold leading-tight">{cert.title}</h3>
                          <p className="mt-1 text-sm text-electric-400">{cert.issuer}</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="font-mono text-xs text-muted">{cert.year}</span>
                            {cert.verify && (
                              <a
                                href={cert.verify}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-violet-300 transition-colors hover:text-violet-200"
                              >
                                View Certificate <FiExternalLink size={12} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* 6. Quick Stats */}
            {/* <section>
              <TerminalHeading delay={0.05}>QUICK_STATS</TerminalHeading>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {achievementsData.map((s, i) => (
                  <ScrollReveal key={s.label} delay={i * 0.08}>
                    <GlassCard className="p-6 text-center" tilt glow>
                      <div className="font-display text-4xl font-bold gradient-text">
                        <AnimatedCounter value={s.value} suffix={s.suffix || ''} />
                      </div>
                      <div className="mt-2 text-xs uppercase tracking-widest text-muted">{s.label}</div>
                    </GlassCard>
                  </ScrollReveal>
                ))}
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </>
  );
}
