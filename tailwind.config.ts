import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:       'var(--bg)',
        surface:  'var(--surface)',
        'border-c': 'var(--border)',
        fg:       'var(--fg)',
        muted:    'var(--muted)',
        accent:   'var(--accent)',
        accent2:  'var(--accent2)',
        navy:     'var(--navy)',
        silver:   'var(--silver)',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 55% at 50% 30%, var(--accent-glow) 0%, transparent 70%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        'fade-in': 'fadeIn 0.6s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
