import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { navLinks, personal, projects } from '@/constants/data';

const projectCommands = projects.map((p) => ({
  name: p.title,
  path: `/projects/${p.slug}`,
  type: 'Project',
}));

const commands = [
  ...navLinks.map((l) => ({ name: l.name, path: l.path, type: 'Navigation' })),
  ...projectCommands,
  { name: 'Gallery', path: '/gallery', type: 'Navigation' },
  { name: 'GitHub Profile', path: personal.github, type: 'External' },
  { name: 'LinkedIn Profile', path: personal.linkedin, type: 'External' },
  { name: 'Send Email', path: `mailto:${personal.email}`, type: 'External' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleKey = useCallback((e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setOpen((o) => !o);
    }
    if (e.key === 'Escape') setOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  const filtered = commands.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  const run = (cmd) => {
    if (cmd.type === 'External') {
      window.open(cmd.path, '_blank');
    } else {
      navigate(cmd.path);
    }
    setOpen(false);
    setQuery('');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[10001] flex items-start justify-center bg-black/60 pt-32 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong w-full max-w-xl overflow-hidden rounded-2xl shadow-glow"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <FiSearch size={18} className="text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent text-white outline-none placeholder:text-muted"
              />
              <kbd className="rounded border border-white/10 px-2 py-0.5 text-xs text-muted">ESC</kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.map((cmd) => (
                <button
                  key={cmd.name + cmd.path}
                  onClick={() => run(cmd)}
                  className="group flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors hover:bg-white/5"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-violet-300">{cmd.type}</span>
                    {cmd.name}
                  </span>
                  {cmd.type === 'External' ? <FiExternalLink size={14} className="text-muted" /> : <FiArrowRight size={14} className="text-muted opacity-0 transition-opacity group-hover:opacity-100" />}
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-muted">No results found.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
