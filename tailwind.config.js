/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#060608', // Deep ROG Obsidian Black
        navy: {
          950: '#0A0A0E', // Dark Carbon
          900: '#101017', // Chassis Black
          850: '#14141E', 
          800: '#1B1B26', // Border Carbon
          700: '#282838', // Muted Gunmetal
        },
        electric: {
          DEFAULT: '#FF0033', // Official ROG Neon Crimson Red
          dark: '#CC0029',
          light: '#FF2E55',
        },
        glow: {
          DEFAULT: '#FF0033', // ROG Neon Red
          dim: 'rgba(255, 0, 51, 0.15)',
          medium: 'rgba(255, 0, 51, 0.35)',
          high: 'rgba(255, 0, 51, 0.65)',
        },
        rog: {
          red: '#FF0033',
          crimson: '#E60026',
          darkred: '#99001A',
          black: '#050507',
          carbon: '#0B0B10',
          surface: '#111118',
          border: '#242433',
          white: '#FFFFFF',
          silver: '#E5E7EB',
          gray: '#9CA3AF',
        },
        surface: {
          card: '#0D0D14',
          cardHover: '#14141F',
          overlay: 'rgba(6, 6, 8, 0.90)',
        }
      },
      fontFamily: {
        display: ['"Orbitron"', 'system-ui', 'sans-serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 12px rgba(255, 0, 51, 0.35)',
        'glow': '0 0 24px rgba(255, 0, 51, 0.45)',
        'glow-lg': '0 0 42px rgba(255, 0, 51, 0.65)',
        'glow-inner': 'inset 0 0 15px rgba(255, 0, 51, 0.25)',
        'card-glow': '0 0 0 1px rgba(255, 0, 51, 0.25), 0 8px 24px -4px rgba(0, 0, 0, 0.9)',
        'card-hover': '0 0 0 1px rgba(255, 0, 51, 0.7), 0 14px 36px -4px rgba(255, 0, 51, 0.35)',
        'neon-red': '0 0 20px -2px rgba(255, 0, 51, 0.55)',
        'white-subtle': '0 0 15px rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'radar': 'radarSweep 4s linear infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
