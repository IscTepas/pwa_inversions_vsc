import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
          border: '#334155'
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
} satisfies Config
