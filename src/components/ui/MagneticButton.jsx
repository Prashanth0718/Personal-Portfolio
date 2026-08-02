import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, onClick, href, to, className = '', strength = 0.4 }) {
  const ref = useRef(null);
  const x = useRef(0);
  const y = useRef(0);

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.current = (e.clientX - rect.left - rect.width / 2) * strength;
    y.current = (e.clientY - rect.top - rect.height / 2) * strength;
    ref.current.style.transform = `translate(${x.current}px, ${y.current}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  };

  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-colors duration-300';

  const sharedProps = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    whileTap: { scale: 0.96 },
    className: `${base} ${className}`,
    style: { transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)' },
  };

  if (to) {
    return (
      <Link to={to}>
        <motion.button {...sharedProps} onClick={onClick}>
          {children}
        </motion.button>
      </Link>
    );
  }

  if (href) {
    return (
      <motion.a
        {...sharedProps}
        href={href}
        onClick={onClick}
        target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...sharedProps} onClick={onClick}>
      {children}
    </motion.button>
  );
}
