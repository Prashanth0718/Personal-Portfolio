/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#05060f',
          800: '#0a0c1b',
          700: '#0f1226',
          600: '#161a35',
          500: '#1f2547',
        },
        navy: {
          900: '#0a1124',
          800: '#0f1a36',
          700: '#162447',
        },
        violet: {
          500: '#7c3aed',
          400: '#8b5cf6',
          300: '#a78bfa',
        },
        electric: {
          500: '#3b82f6',
          400: '#60a5fa',
          300: '#93c5fd',
        },
        accent: {
          cyan: '#22d3ee',
          purple: '#a855f7',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(124, 58, 237, 0.5)',
        'glow-blue': '0 0 40px -10px rgba(59, 130, 246, 0.5)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.5)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'aurora': "radial-gradient(at 20% 30%, rgba(124,58,237,0.25) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(59,130,246,0.20) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(34,211,238,0.15) 0px, transparent 50%)",
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
