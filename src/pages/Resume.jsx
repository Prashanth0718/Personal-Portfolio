import { motion } from 'framer-motion';
import { FiDownload, FiBriefcase, FiAward, FiBook, FiCode, FiExternalLink } from 'react-icons/fi';
import { personal, experiences, skills, certifications, about, projects } from '@/constants/data';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MagneticButton from '@/components/ui/MagneticButton';

function generateResumeText() {
  return `PRASHANTH S N
${personal.role} | ${personal.company}
${personal.location} | ${personal.email}
GitHub: ${personal.github}
LinkedIn: ${personal.linkedin}

PROFILE
${personal.bio}

EXPERIENCE
${experiences.map((exp) => `${exp.role} — ${exp.company} (${exp.period})
${exp.unit}
${exp.responsibilities.map((h) => '  - ' + h).join('\n')}`).join('\n\n')}

SKILLS
${skills.map((s) => `${s.name} (${s.level}%)`).join(', ')}

CERTIFICATIONS
${certifications.map((c) => `${c.title} — ${c.issuer} (${c.year})`).join('\n')}

PROJECTS
${projects.map((p) => `${p.title}: ${p.tagline}`).join('\n')}

EDUCATION
${about.education.map((e) => `${e.degree} in ${e.field} (${e.year})`).join('\n')}

JOURNEY
${about.timeline.map((t) => `${t.year}: ${t.title} — ${t.desc}`).join('\n')}
`;
}

export default function Resume() {
  const handleDownload = () => {
    const blob = new Blob([generateResumeText()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Prashanth_S_N_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageHero
        eyebrow="RESUME"
        title={<>My <span className="gradient-text">resume</span></>}
        subtitle="A complete overview of my journey, skills, and credentials."
        accent="#7c3aed"
      >
        <MagneticButton onClick={handleDownload} className="bg-gradient-to-r from-violet-500 to-electric-500 text-white shadow-glow">
          <FiDownload size={18} /> Download Resume
        </MagneticButton>
      </PageHero>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-32">
        {/* Profile */}
        <ScrollReveal>
          <GlassCard className="p-8" tilt glow>
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-electric-500 font-display text-3xl font-bold text-white shadow-glow">
                P
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold">{personal.name}</h2>
                <p className="text-electric-400">{personal.role}</p>
                <p className="mt-1 text-sm text-muted">{personal.company} &middot; {personal.location}</p>
                <p className="mt-1 text-sm text-muted">{personal.email}</p>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-muted">{personal.bio}</p>
          </GlassCard>
        </ScrollReveal>

        {/* Experience */}
        <ScrollReveal delay={0.1}>
          <GlassCard className="mt-8 p-8">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <FiBriefcase size={20} className="text-violet-400" /> Experience
            </h3>
            <div className="mt-6 space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">{exp.role}</span>
                    <span className="font-mono text-xs text-muted">{exp.period}</span>
                  </div>
                  <p className="text-sm text-electric-400">{exp.company} — {exp.unit}</p>
                  <ul className="mt-3 space-y-2">
                    {exp.responsibilities.map((h, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Projects */}
        <ScrollReveal delay={0.15}>
          <GlassCard className="mt-8 p-8">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <FiCode size={20} className="text-electric-400" /> Projects
            </h3>
            <div className="mt-6 space-y-4">
              {projects.map((p) => (
                <div key={p.slug} className="rounded-lg border border-white/5 bg-white/5 p-4">
                  <div className="font-medium text-white">{p.title}</div>
                  <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.techStack.map((t) => (
                      <span key={t} className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-violet-200">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal delay={0.2}>
          <GlassCard className="mt-8 p-8">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <FiCode size={20} className="text-electric-400" /> Skills
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-2.5">
                  <span className="text-sm text-white">{skill.name}</span>
                  <span className="font-mono text-xs text-violet-300">{skill.level}%</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal delay={0.25}>
          <GlassCard className="mt-8 p-8">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <FiAward size={20} className="text-violet-400" /> Certifications
            </h3>
            <div className="mt-6 space-y-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-3">
                  <div>
                    <div className="text-sm font-medium text-white">{cert.title}</div>
                    <div className="text-xs text-muted">{cert.issuer}</div>
                  </div>
                  <span className="font-mono text-xs text-violet-300">{cert.year}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal delay={0.3}>
          <GlassCard className="mt-8 p-8">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <FiBook size={20} className="text-electric-400" /> Education
            </h3>
            <div className="mt-6 space-y-4">
              {about.education.map((edu, i) => (
                <div key={i} className="rounded-lg border border-white/5 bg-white/5 p-4">
                  <div className="font-medium text-white">{edu.degree}</div>
                  <div className="text-sm text-electric-400">{edu.field}</div>
                  <div className="mt-1 text-xs text-muted">{edu.year}</div>
                  <div className="mt-1 text-sm text-muted">{edu.desc}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Download CTA */}
        <ScrollReveal delay={0.15}>
          <div className="mt-12 text-center">
            <MagneticButton onClick={handleDownload} className="bg-gradient-to-r from-violet-500 to-electric-500 text-white shadow-glow">
              <FiDownload size={18} /> Download Resume
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
