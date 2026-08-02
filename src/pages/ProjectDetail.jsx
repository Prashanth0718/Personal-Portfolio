import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowLeft, FiArrowRight, FiGithub, FiExternalLink,
  FiCheckCircle, FiZap, FiTarget, FiAlertTriangle, FiClock,
  FiLayers, FiUser, FiActivity, FiCalendar, FiStar,
} from 'react-icons/fi';
import { projects } from '@/constants/data';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

const statusStyles = {
  Production: { bg: 'bg-emerald-500/15', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  Completed: { bg: 'bg-violet-500/15', text: 'text-violet-300', dot: 'bg-violet-400' },
  'In Progress': { bg: 'bg-amber-500/15', text: 'text-amber-400', dot: 'bg-amber-400' },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <h1 className="font-display text-4xl font-bold">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-electric-400">
          <FiArrowLeft /> Back to projects
        </Link>
      </div>
    );
  }

  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];
  const st = statusStyles[project.status] || statusStyles.Completed;

  return (
    <>
      <PageHero
        eyebrow="PROJECT CASE STUDY"
        title={project.title}
        subtitle={project.tagline}
        accent={project.accent}
      />

      {/* Hero Banner */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div
            className="relative h-80 overflow-hidden rounded-3xl md:h-[28rem]"
            style={{ background: `linear-gradient(135deg, ${project.accent}40, ${project.accent}08)` }}
          >
            <div className="absolute inset-0 bg-aurora opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-display text-7xl font-bold opacity-20 md:text-9xl"
                style={{ color: project.accent }}
              >
                {project.title.slice(0, 3).toUpperCase()}
              </span>
            </div>
            <div className="noise-overlay" />

            {/* Badges */}
            <div className="absolute left-6 top-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-violet-200 backdrop-blur-md">
                {project.category}
              </span>
              <span className={`inline-flex items-center gap-1.5 rounded-full ${st.bg} px-3 py-1.5 font-mono text-xs uppercase tracking-widest ${st.text} backdrop-blur-md`}>
                <span className={`h-1.5 w-1.5 rounded-full ${st.dot} ${project.status === 'Production' ? 'animate-pulse-glow' : ''}`} />
                {project.status}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/20 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-violet-300 backdrop-blur-md">
                  <FiStar size={12} className="fill-violet-400 text-violet-400" /> Featured
                </span>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Main Layout */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Overview */}
            <ScrollReveal>
              <SectionHeading number="01" title="Project Overview" />
              <p className="mt-4 leading-relaxed text-muted">{project.overview}</p>
            </ScrollReveal>

            {/* Problem */}
            <ScrollReveal delay={0.05}>
              <GlassCard className="p-8" tilt>
                <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                  <FiAlertTriangle size={20} className="text-red-400" /> Problem Statement
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{project.problem}</p>
              </GlassCard>
            </ScrollReveal>

            {/* Solution / Architecture */}
            <ScrollReveal delay={0.05}>
              <GlassCard className="p-8" tilt>
                <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                  <FiLayers size={20} className="text-violet-400" /> Solution & Architecture
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{project.architecture}</p>
              </GlassCard>
            </ScrollReveal>

            {/* Key Features */}
            <ScrollReveal delay={0.05}>
              <SectionHeading number="02" title="Key Features" />
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-violet-400/30 hover:bg-violet-500/5"
                  >
                    <FiZap size={18} className="mt-0.5 shrink-0 text-electric-400" />
                    <span className="text-sm text-muted">{f}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Technologies */}
            <ScrollReveal delay={0.05}>
              <SectionHeading number="03" title="Technologies Used" />
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-200 transition-colors hover:border-violet-400/40 hover:bg-violet-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Workflow */}
            <ScrollReveal delay={0.05}>
              <SectionHeading number="04" title="Development Workflow" />
              <div className="relative mt-6 space-y-6 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-violet-400 before:via-electric-400 before:to-transparent">
                {project.workflow.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-10"
                  >
                    <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-violet-400/50 bg-ink-800">
                      <span className="h-2 w-2 rounded-full bg-violet-400" />
                    </span>
                    <div className="font-semibold text-white">{t.phase}</div>
                    <div className="mt-1 text-sm text-muted">{t.desc}</div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Challenges & Learnings */}
            <div className="grid gap-8 lg:grid-cols-2">
              <ScrollReveal>
                <GlassCard className="p-8" tilt>
                  <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                    <FiTarget size={20} className="text-red-400" /> Challenges
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">{project.challenges}</p>
                </GlassCard>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <GlassCard className="p-8" tilt>
                  <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                    <FiCheckCircle size={20} className="text-green-400" /> Solutions
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">{project.solutions}</p>
                </GlassCard>
              </ScrollReveal>
            </div>

            {/* Learnings */}
            {project.learnings && (
              <ScrollReveal delay={0.05}>
                <GlassCard className="p-8" tilt glow>
                  <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                    <FiStar size={20} className="text-violet-400" /> Challenges & Learnings
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">{project.learnings}</p>
                </GlassCard>
              </ScrollReveal>
            )}

            {/* Stats */}
            <ScrollReveal delay={0.05}>
              <div className="grid gap-4 sm:grid-cols-3">
                {project.stats.map((s) => (
                  <GlassCard key={s.label} className="p-6 text-center" tilt>
                    <div className="font-display text-3xl font-bold gradient-text">{s.value}</div>
                    <div className="mt-2 text-xs text-muted">{s.label}</div>
                  </GlassCard>
                ))}
              </div>
            </ScrollReveal>

            {/* Gallery */}
            {/* <ScrollReveal delay={0.05}>
              <SectionHeading number="05" title="Screenshots & Gallery" />
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {project.gallery.map((g, i) => (
                  <motion.div
                    key={g}
                    whileHover={{ scale: 1.03 }}
                    className="relative h-40 overflow-hidden rounded-xl"
                    style={{ background: `linear-gradient(135deg, ${project.accent}${30 - i * 5}, ${project.accent}10)` }}
                  >
                    <div className="absolute inset-0 bg-aurora opacity-40" />
                    <div className="flex h-full items-center justify-center">
                      <span className="font-mono text-sm text-muted">{project.title.slice(0, 10)}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal> */}
          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <ScrollReveal delay={0.1}>
              <GlassCard className="p-6" tilt glow>
                {/* Action buttons */}
                <div className="space-y-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-electric-500 px-5 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.02]"
                    >
                      <FiGithub size={18} /> View on GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-electric-400/50 hover:bg-electric-500/10"
                    >
                      <FiExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>

                <div className="my-6 h-px bg-white/10" />

                {/* Meta */}
                <div className="space-y-4">
                  <SidebarItem icon={FiLayers} label="Category" value={project.category} />
                  <SidebarItem icon={FiActivity} label="Status" value={project.status} />
                  <SidebarItem icon={FiClock} label="Duration" value={project.duration || project.year} />
                  <SidebarItem icon={FiUser} label="Role" value={project.role || 'Engineer'} />
                  <SidebarItem icon={FiCalendar} label="Year" value={project.year} />
                </div>

                <div className="my-6 h-px bg-white/10" />

                {/* Tech Stack */}
                <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-violet-300">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-violet-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>

        {/* Prev / Next Navigation */}
        <ScrollReveal delay={0.1}>
          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            <Link to={`/projects/${prev.slug}`} className="group">
              <GlassCard className="flex items-center gap-4 p-5" tilt>
                <FiArrowLeft size={20} className="shrink-0 text-muted transition-transform group-hover:-translate-x-1" />
                <div className="min-w-0">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted">Previous</div>
                  <div className="truncate font-semibold text-white group-hover:text-violet-300">{prev.title}</div>
                </div>
              </GlassCard>
            </Link>
            <Link to={`/projects/${next.slug}`} className="group text-right">
              <GlassCard className="flex items-center justify-end gap-4 p-5" tilt>
                <div className="min-w-0">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted">Next</div>
                  <div className="truncate font-semibold text-white group-hover:text-violet-300">{next.title}</div>
                </div>
                <FiArrowRight size={20} className="shrink-0 text-muted transition-transform group-hover:translate-x-1" />
              </GlassCard>
            </Link>
          </div>
        </ScrollReveal>

        {/* Back */}
        <div className="mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-white transition-colors hover:border-violet-400/50"
          >
            <FiArrowLeft /> Back to projects
          </Link>
        </div>
      </div>
    </>
  );
}

function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-violet-300">{number}</span>
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
    </div>
  );
}

function SidebarItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="inline-flex items-center gap-2 text-sm text-muted">
        <Icon size={16} className="text-violet-400" /> {label}
      </span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}
