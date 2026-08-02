import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowRight, FiGithub, FiExternalLink, FiSearch, FiStar,
  FiArrowUpRight,
} from 'react-icons/fi';
import { projects } from '@/constants/data';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

const filters = ['All', 'Full-Stack', 'Data Engineering', 'Frontend','Algorithms','API Integration'];

const statusStyles = {
  Production: { bg: 'bg-emerald-500/15', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  Completed: { bg: 'bg-violet-500/15', text: 'text-violet-300', dot: 'bg-violet-400' },
  'In Progress': { bg: 'bg-amber-500/15', text: 'text-amber-400', dot: 'bg-amber-400' },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let list = [...projects];
    if (activeFilter !== 'All') {
      list = list.filter((p) => p.category === activeFilter || (activeFilter === 'Backend' && p.category === 'AI/ML'));
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q)),
      );
    }
    return list.sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [activeFilter, query]);

  return (
    <>
      <PageHero
        eyebrow="PROJECTS"
        title={<>Things I've <span className="gradient-text">built</span></>}
        subtitle="Selected work spanning data engineering, real-time systems, and intelligent automation. Click any card for a full case study."
        accent="#22d3ee"
      />

      {/* Controls */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  activeFilter === f
                    ? 'border-violet-400/50 bg-violet-500/20 text-violet-200 shadow-glow'
                    : 'border-white/10 bg-white/5 text-muted hover:border-white/20 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative md:w-72">
            <FiSearch size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-muted/60 transition-colors focus:border-violet-400/50 focus:bg-white/10 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => {
                const st = statusStyles[project.status] || statusStyles.Completed;
                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                  >
                    <Link to={`/projects/${project.slug}`} className="group block h-full">
                      <motion.div whileHover={{ y: -10 }} className="h-full">
                        <GlassCard className="flex h-full flex-col overflow-hidden p-0" tilt glow>
                          {/* Preview */}
                          <div
                            className="relative h-52 overflow-hidden rounded-t-2xl"
                            style={{ background: `linear-gradient(135deg, ${project.accent}40, ${project.accent}08)` }}
                          >
                            <div className="absolute inset-0 bg-aurora opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span
                                className="font-display text-6xl font-bold opacity-20 transition-transform duration-500 group-hover:scale-110"
                                style={{ color: project.accent }}
                              >
                                {project.title.slice(0, 2).toUpperCase()}
                              </span>
                            </div>
                            {/* Featured badge */}
                            {project.featured && (
                              <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-violet-500/20 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-violet-300 backdrop-blur-sm">
                                <FiStar size={10} className="fill-violet-400 text-violet-400" /> Featured
                              </span>
                            )}
                            {/* Status badge */}
                            <span
                              className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full ${st.bg} px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider ${st.text} backdrop-blur-sm`}
                            >
                              <span className={`h-1.5 w-1.5 rounded-full ${st.dot} ${project.status === 'Production' ? 'animate-pulse-glow' : ''}`} />
                              {project.status}
                            </span>
                          </div>

                          {/* Body */}
                          <div className="flex flex-1 flex-col p-6">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs uppercase tracking-widest text-violet-300">
                                {project.category}
                              </span>
                            </div>
                            <h3 className="mt-2 font-display text-xl font-semibold transition-colors group-hover:text-violet-300">
                              {project.title}
                            </h3>
                            <p className="mt-2 line-clamp-2 text-sm text-muted">{project.tagline}</p>

                            {/* Tech */}
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.techStack.slice(0, 4).map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-violet-200"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.techStack.length > 4 && (
                                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-muted">
                                  +{project.techStack.length - 4}
                                </span>
                              )}
                            </div>

                            {/* Actions */}
                            <div className="mt-auto flex items-center justify-between pt-6">
                              <div className="flex gap-2">
                                {project.github && (
                                  <span
                                    onClick={(e) => e.preventDefault()}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted transition-colors hover:border-violet-400/40 hover:text-violet-300"
                                  >
                                    <FiGithub size={16} />
                                  </span>
                                )}
                                {project.demo && (
                                  <span
                                    onClick={(e) => e.preventDefault()}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted transition-colors hover:border-electric-400/40 hover:text-electric-300"
                                  >
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
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <FiSearch size={48} className="text-muted/40" />
              <p className="mt-6 text-lg text-muted">No projects found</p>
              <p className="mt-2 text-sm text-muted/60">Try a different filter or search term.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
