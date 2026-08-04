import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheckCircle, FiAlertCircle, FiLoader, FiMapPin, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personal } from '@/constants/data';
import { useEmailJS } from '@/services/emailjs';
import PageHero from '@/components/ui/PageHero';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Contact() {
  const { status, error, send, reset, configured } = useEmailJS();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});

  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Invalid email';
    if (!form.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const errors = validate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) {
      setTouched({
        name: true,
        email: true,
        message: true,
      });
      return;
    }

    const success = await send(form);

    if (success) {
      setForm({
        name: '',
        email: '',
        message: '',
      });

      setTouched({});
      setErrors({});
    }
  };

  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title={<>Let's build <span className="gradient-text">something</span></>}
        subtitle="Have a role, a project, or an idea? My inbox is always open."
        accent="#3b82f6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-300">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>
      </PageHero>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Info + Map + Socials */}
          <div className="space-y-6">
            <ScrollReveal>
              <GlassCard className="p-8">
                <h3 className="font-display text-2xl font-bold">Get in touch</h3>
                <p className="mt-3 text-muted">
                  Whether it's a full-time opportunity, a freelance project, or just a hello — I'd love to hear from you.
                </p>
                <div className="mt-8 space-y-5">
                  <a href={`mailto:${personal.email}`} className="flex items-center gap-4 text-muted transition-colors hover:text-white">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300"><FiMail size={18} /></span>
                    <div>
                      <div className="text-xs text-muted">Email</div>
                      <div className="text-sm text-white">{personal.email}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-muted">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/10 text-electric-300"><FiMapPin size={18} /></span>
                    <div>
                      <div className="text-xs text-muted">Location</div>
                      <div className="text-sm text-white">{personal.location}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex gap-3">
                  <a href={personal.github} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-violet-400/50 hover:text-white"><FiGithub size={18} /></a>
                  <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-electric-400/50 hover:text-white"><FiLinkedin size={18} /></a>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <GlassCard className="overflow-hidden p-0">
                <div className="relative h-56 bg-gradient-to-br from-violet-500/20 via-electric-500/20 to-accent-cyan/20">
                  <div className="absolute inset-0 bg-aurora opacity-50" />
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <FiMapPin size={32} className="mx-auto text-violet-400" />
                      <div className="mt-3 font-display text-2xl font-bold gradient-text">{personal.location}</div>
                      <div className="mt-1 text-sm text-muted">Available worldwide &middot; Remote friendly</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal delay={0.15}>
            <GlassCard className="p-8">
              {!configured && (
                <div className="mb-4 rounded-lg border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs text-yellow-200">
                  EmailJS is not configured yet. See the README for setup instructions. Messages will not send until keys are added.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted">Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-violet-400/50" placeholder="Your name" />
                  {touched.name && errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-violet-400/50" placeholder="you@example.com" />
                  {touched.email && errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-xs font-mono uppercase tracking-wider text-muted">Message</label>
                  <textarea name="message" rows={5} value={form.message} onChange={handleChange} onBlur={handleBlur} className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-violet-400/50" placeholder="Tell me about your project or opportunity..." />
                  {touched.message && errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>
                <MagneticButton type="submit" disabled={status === 'loading'} className="w-full bg-gradient-to-r from-violet-500 to-electric-500 text-white shadow-glow disabled:opacity-60">
                  <AnimatePresence mode="wait">
                    {status === 'loading' && <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2"><FiLoader className="animate-spin" /> Sending...</motion.span>}
                    {status === 'idle' && <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2"><FiSend /> Send Message</motion.span>}
                    {status === 'success' && <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2"><FiCheckCircle /> Message Sent!</motion.span>}
                    {status === 'error' && <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2"><FiAlertCircle /> Try Again</motion.span>}
                  </AnimatePresence>
                </MagneticButton>
                {status === 'success' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-green-400"><FiCheckCircle /> Thanks! I'll get back to you soon.</motion.p>}
                {status === 'error' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-red-400"><FiAlertCircle /> {error || 'Something went wrong.'}<button onClick={reset} className="ml-2 underline">Reset</button></motion.p>}
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
