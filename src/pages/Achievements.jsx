import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiGitBranch, FiUsers, FiBook, FiClock, FiAward, FiCode } from 'react-icons/fi';
import { achievementsData, experienceData, certifications, projects, personal } from '@/constants/data';
import { fetchGitHubStats } from '@/services/github';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

function ContributionGraph() {
  const weeks = 52;
  const days = 7;
  const cells = Array.from({ length: weeks * days }, () => {
    const r = Math.random();
    if (r < 0.6) return 0;
    if (r < 0.8) return 1;
    if (r < 0.92) return 2;
    if (r < 0.98) return 3;
    return 4;
  });
  const colors = ['bg-white/5', 'bg-violet-500/30', 'bg-violet-500/50', 'bg-violet-500/70', 'bg-violet-400'];

  return (
    <div className="flex flex-wrap gap-1">
      {Array.from({ length: weeks }).map((_, w) => (
        <div key={w} className="flex flex-col gap-1">
          {Array.from({ length: days }).map((_, d) => {
            const idx = w * days + d;
            return <div key={d} className={`h-2.5 w-2.5 rounded-sm ${colors[cells[idx]]}`} />;
          })}
        </div>
      ))}
    </div>
  );
}

export default function Achievements() {
  const [github, setGithub] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubStats().then((d) => {
      setGithub(d);
      setLoading(false);
    });
  }, []);

  const stats = [
    { icon: FiCode, label: 'Projects', value: achievementsData[0].value, suffix: achievementsData[0].suffix, color: '#a78bfa' },
    { icon: FiAward, label: 'Certifications', value: achievementsData[1].value, suffix: achievementsData[1].suffix, color: '#60a5fa' },
    { icon: FiBook, label: 'GitHub Repos', value: github?.publicRepos || achievementsData[2].value, suffix: achievementsData[2].suffix, color: '#22d3ee' },
    { icon: FiClock, label: 'Coding Hours', value: achievementsData[3].value, suffix: achievementsData[3].suffix, color: '#34d399' },
  ];

  return (
    <>
      <PageHero
        eyebrow="ACHIEVEMENTS"
        title={<>By the <span className="gradient-text">numbers</span></>}
        subtitle="A snapshot of impact, effort, and milestones across my journey."
        accent="#34d399"
      />

      {/* Animated Counters */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <GlassCard className="p-8 text-center" tilt glow>
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: `${s.color}20`, color: s.color }}>
                  <s.icon size={26} />
                </span>
                <div className="mt-6 font-display text-5xl font-bold gradient-text">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm text-muted">{s.label}</div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-violet-300">GitHub Stats</h3>
        </ScrollReveal>
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-violet-400 border-t-transparent" />
          </div>
        ) : github ? (
          <div className="grid gap-6 lg:grid-cols-3">
            <ScrollReveal>
              <GlassCard className="flex items-center gap-4 p-6" tilt>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300"><FiUsers size={22} /></span>
                <div>
                  <div className="font-display text-2xl font-bold">{github.followers}</div>
                  <div className="text-xs text-muted">Followers</div>
                </div>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <GlassCard className="flex items-center gap-4 p-6" tilt>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-300"><FiStar size={22} /></span>
                <div>
                  <div className="font-display text-2xl font-bold">{github.totalStars}</div>
                  <div className="text-xs text-muted">Total Stars</div>
                </div>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <GlassCard className="flex items-center gap-4 p-6" tilt>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-cyan/10 text-accent-cyan"><FiGitBranch size={22} /></span>
                <div>
                  <div className="font-display text-2xl font-bold">{github.following}</div>
                  <div className="text-xs text-muted">Following</div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        ) : (
          <GlassCard className="p-8 text-center">
            <p className="text-muted">Unable to load GitHub stats. <a href={personal.github} target="_blank" rel="noreferrer" className="text-electric-400">View profile</a></p>
          </GlassCard>
        )}
      </section>

      {/* Contribution Graph */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-violet-300">Contribution Graph</h3>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <GlassCard className="overflow-x-auto p-8" tilt>
            <ContributionGraph />
            <div className="mt-4 flex items-center gap-2 text-xs text-muted">
              <span>Less</span>
              <div className="h-2.5 w-2.5 rounded-sm bg-white/5" />
              <div className="h-2.5 w-2.5 rounded-sm bg-violet-500/30" />
              <div className="h-2.5 w-2.5 rounded-sm bg-violet-500/50" />
              <div className="h-2.5 w-2.5 rounded-sm bg-violet-500/70" />
              <div className="h-2.5 w-2.5 rounded-sm bg-violet-400" />
              <span>More</span>
            </div>
          </GlassCard>
        </ScrollReveal>
      </section>

      {/* Experience Timeline */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-violet-300">Experience Timeline</h3>
        </ScrollReveal>
        <div className="relative space-y-6 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-violet-400 before:via-electric-400 before:to-transparent">
          {experienceData.timeline.map((item, i) => (
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
              <div className="font-mono text-xs text-violet-300">{item.year}</div>
              <div className="mt-1 font-semibold text-white">{item.title}</div>
              <div className="mt-1 text-sm text-muted">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
