import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#f8fafc',
        surface: '#ffffff',
        'surface-2': '#f1f5f9',
        border: '#e2e8f0',
        'accent-cyan': '#2563eb',
        'accent-blue': '#7c3aed',
        'accent-purple': '#6366f1',
        'text-primary': '#020617',
        'text-muted': '#0f172a',
        'text-subtle': '#1e293b',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
      },
      backgroundSize: {
        grid: '60px 60px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59,130,246,0.15)' },
          '100%': { boxShadow: '0 0 40px rgba(59,130,246,0.35)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(37,99,235,0.15)',
        'glow-blue': '0 0 30px rgba(124,58,237,0.15)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
