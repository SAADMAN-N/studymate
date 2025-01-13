import {nextui} from '@nextui-org/theme';
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/navbar.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#A855F7',
        accent: '#22D3EE',
        background: '#0F172A'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'grow-line': {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleX(1)', opacity: '1' }
        },
        'slide-dot': {
          '0%': { transform: 'translateX(-100%) translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0) translateY(-50%)', opacity: '1' }
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 1s ease-out forwards',
        'grow-line': 'grow-line 1s ease-out forwards',
        'slide-dot': 'slide-dot 1s ease-out forwards'
      }
    }
  },
  plugins: [require("tailwindcss-animate"),nextui()],
}
export default config