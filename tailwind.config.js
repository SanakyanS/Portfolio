/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        museum: {
          bg: '#0c0a09',
          secondary: '#14110f',
          gold: '#c9a84c',
          'gold-hover': '#e6c86e',
          'gold-dim': 'rgba(201, 168, 76, 0.15)',
          red: '#8b1e1e',
          text: '#fafaf9',
          muted: '#b8b8b8',
          card: 'rgba(255, 255, 255, 0.05)',
          'card-hover': 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(201, 168, 76, 0.2)',
          'border-muted': 'rgba(255, 255, 255, 0.1)'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        'glass': '30px',
      }
    },
  },
  plugins: [],
}
