import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiTarget, FiEye, FiHeart, FiBook, FiStar, FiGitBranch, FiUsers,
  FiClock, FiAward, FiCode, FiTerminal, FiMapPin, FiBriefcase,
  FiArrowRight, FiZap, FiCheckCircle, FiCpu,
} from 'react-icons/fi';
import { about, personal, achievementsData, experienceData } from '@/constants/data';
import { fetchGitHubStats } from '@/services/github';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import MagneticButton from '@/components/ui/MagneticButton';

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

const quickFacts = [
  { icon: FiBriefcase, label: 'Role', value: personal.role },
  { icon: FiMapPin, label: 'Location', value: personal.location },
  { icon: FiCpu, label: 'Focus', value: 'Full-Stack • Data Engineering' },
  { icon: FiZap, label: 'Learning', value: 'AWS Cloud' },
];

const focusAreas = [
  {
    icon: FiTerminal,
    title: 'Full-Stack Development',
    desc: 'Building modern, responsive web applications with React, FastAPI, MongoDB, and scalable architectures that deliver seamless user experiences.',
  },
  {
    icon: FiCode,
    title: 'Data Engineering',
    desc: 'Developing ETL pipelines, automating data processing, implementing SCD Type 2, and building reliable data workflows for enterprise applications.',
  },
  {
    icon: FiZap,
    title: 'Cloud Computing',
    desc: 'Currently learning AWS Cloud and exploring modern cloud services, deployment strategies, and scalable application architectures.',
  },
];

export default function About() {
  const [github, setGithub] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubStats().then((d) => {
      setGithub(d);
      setLoading(false);
    });
  }, []);

  // const stats = [
  //   { icon: FiCode, label: 'Projects', value: achievementsData[0].value, suffix: achievementsData[0].suffix, color: '#a78bfa' },
  //   { icon: FiAward, label: 'Certifications', value: achievementsData[1].value, suffix: achievementsData[1].suffix, color: '#60a5fa' },
  //   { icon: FiBook, label: 'GitHub Repos', value: github?.publicRepos || achievementsData[2].value, suffix: achievementsData[2].suffix, color: '#22d3ee' },
  //   { icon: FiClock, label: 'Coding Hours', value: achievementsData[3].value, suffix: achievementsData[3].suffix, color: '#34d399' },
  // ];

  return (
    <>
      <PageHero
        eyebrow="ABOUT ME"
        title={<>About <span className="gradient-text">me</span></>}
        subtitle="Building modern full-stack applications, scalable data solutions, and continuously growing in cloud technologies."
        accent="#7c3aed"
      />

      {/* Profile + Quick Facts */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          {/* Left: Story */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-widest text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse-glow" />
                01 / Who I Am
              </div>
            </ScrollReveal>
            <div className="mt-6 space-y-5">
              {about.paragraphs.map((p, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <p className="text-lg leading-relaxed text-muted">{p}</p>
                </ScrollReveal>
              ))}
            </div>
            {/* <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton to="/contact" className="bg-gradient-to-r from-violet-500 to-electric-500 text-white shadow-glow">
                  Get in touch
                </MagneticButton>
                <MagneticButton to="/resume" className="glass border border-white/10 text-white hover:border-violet-400/50">
                  View resume
                </MagneticButton>
              </div>
            </ScrollReveal> */}
          </div>

          {/* Right: Quick Facts Card */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.15}>
              <GlassCard className="overflow-hidden p-0" tilt glow>
                <div className="relative bg-gradient-to-br from-violet-500/10 to-electric-500/10 p-8">
                  <div className="absolute inset-0 bg-aurora opacity-40" />
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-electric-500 font-display text-2xl font-bold text-white shadow-glow">
                        PS
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold">{personal.name}</h3>
                        <p className="text-sm text-electric-400">{personal.role}</p>
                      </div>
                    </div>
                    <div className="mt-8 space-y-4">
                      {quickFacts.map((fact) => (
                        <div key={fact.label} className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-violet-300">
                            <fact.icon size={18} />
                          </span>
                          <div>
                            <div className="text-xs text-muted">{fact.label}</div>
                            <div className="text-sm font-medium text-white">{fact.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    
      {/* Focus Areas */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-violet-300">02</span>
            <h3 className="font-display text-2xl font-bold">What I Do</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((area, i) => (
            <ScrollReveal key={area.title} delay={i * 0.1}>
              <GlassCard className="h-full p-8" tilt glow>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-electric-500/20 text-violet-300">
                  <area.icon size={26} />
                </span>
                <h4 className="mt-6 font-display text-xl font-semibold">{area.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">{area.desc}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* By the Numbers */}
      {/* <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-violet-300">03</span>
            <h3 className="font-display text-2xl font-bold">By the Numbers</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>
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
      </section> */}

      {/* GitHub Stats + Contribution Graph */}
      {/* <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-violet-300">04</span>
            <h3 className="font-display text-2xl font-bold">GitHub Activity</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {loading ? (
            <div className="col-span-3 flex justify-center py-12">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-violet-400 border-t-transparent" />
            </div>
          ) : github ? (
            <>
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
            </>
          ) : (
            <GlassCard className="col-span-3 p-8 text-center">
              <p className="text-muted">Unable to load GitHub stats. <a href={personal.github} target="_blank" rel="noreferrer" className="text-electric-400">View profile</a></p>
            </GlassCard>
          )}
        </div>
        <ScrollReveal delay={0.2}>
          <GlassCard className="mt-6 overflow-x-auto p-8" tilt>
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
      </section> */}

      {/* Mission / Vision */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-violet-300">03</span>
            <h3 className="font-display text-2xl font-bold">Mission & Vision</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <GlassCard className="h-full p-8" tilt glow>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                <FiTarget size={26} />
              </span>
              <h4 className="mt-6 font-display text-2xl font-bold">Mission</h4>
              <p className="mt-4 leading-relaxed text-muted">{about.mission}</p>
            </GlassCard>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <GlassCard className="h-full p-8" tilt glow>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-500/10 text-electric-300">
                <FiEye size={26} />
              </span>
              <h4 className="mt-6 font-display text-2xl font-bold">Vision</h4>
              <p className="mt-4 leading-relaxed text-muted">{about.vision}</p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Interests */}
      {/* <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-violet-300">06</span>
            <h3 className="font-display text-2xl font-bold">Interests</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>
        <div className="flex flex-wrap gap-3">
          {about.interests.map((interest, i) => (
            <ScrollReveal key={interest} delay={i * 0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:border-violet-400/50 hover:bg-violet-500/10">
                <FiHeart size={14} className="text-violet-400" />
                {interest}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section> */}

      {/* Education */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-violet-300">04</span>
            <h3 className="font-display text-2xl font-bold">Education</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>
        <div className="space-y-4">
          {about.education.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <GlassCard className="p-6" tilt>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/10 text-electric-300">
                    <FiBook size={22} />
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-electric-400">{edu.field}</p>
                    <p className="mt-1 text-sm text-muted">{edu.year}</p>
                    <p className="mt-2 text-sm text-muted">{edu.desc}</p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Career Journey Timeline */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs text-violet-300">05</span>
            <h3 className="font-display text-2xl font-bold">Career Journey</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </ScrollReveal>
        <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-violet-400 before:via-electric-400 before:to-transparent md:before:left-1/2">
          {about.timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} pl-12 md:pl-0`}
            >
              <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/50 bg-ink-800 md:left-1/2 md:-translate-x-1/2">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
              </span>
              <GlassCard className={`w-full p-6 md:w-[45%] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`} tilt>
                <div className="font-mono text-xs text-violet-300">{item.year}</div>
                <h4 className="mt-2 font-display text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Current Role CTA */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <GlassCard className="overflow-hidden p-0" tilt>
            <div className="grid md:grid-cols-3">
              <div className="relative bg-gradient-to-br from-violet-500/10 to-electric-500/10 p-8 md:col-span-1">
                <div className="absolute inset-0 bg-aurora opacity-40" />
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-electric-500 font-display text-2xl font-bold text-white shadow-glow">
                    C
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold">{experienceData.company}</h3>
                  <p className="mt-1 text-electric-400">{experienceData.role}</p>
                  <p className="mt-2 text-sm text-muted">{experienceData.unit}</p>
                  <p className="mt-4 text-sm text-muted">{experienceData.period}</p>
                </div>
              </div>
              <div className="p-8 md:col-span-2">
                <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-violet-300">Current Role</h4>
                <p className="text-muted">{experienceData.overview}</p>
                <ul className="mt-6 space-y-3">
                  {experienceData.responsibilities.slice(0, 3).map((r, i) => (
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
      </section>
    </>
  );
}
