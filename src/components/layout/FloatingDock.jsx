import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiBriefcase, FiGrid, FiCode, FiFileText, FiMail } from 'react-icons/fi';

const items = [
  { name: 'Home', path: '/', icon: FiHome },
  { name: 'About', path: '/about', icon: FiUser },
  { name: 'Experience', path: '/experience', icon: FiBriefcase },
  { name: 'Projects', path: '/projects', icon: FiGrid },
  { name: 'Skills', path: '/skills', icon: FiCode },
  { name: 'Resume', path: '/resume', icon: FiFileText },
  { name: 'Contact', path: '/contact', icon: FiMail },
];

export default function FloatingDock() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed bottom-6 left-1/2 z-[9000] -translate-x-1/2"
        >
          <div className="glass-strong flex items-center gap-1 rounded-2xl px-2 py-2 shadow-glass">
            {items.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group relative flex h-11 w-11 items-center justify-center rounded-xl transition-colors hover:bg-white/10 ${
                    isActive ? 'bg-white/10 text-white' : 'text-muted hover:text-white'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-lg bg-ink-700 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
