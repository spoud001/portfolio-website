/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
    neonGreen: '0 0 10px #00ffab, 0 0 20px #00ffab, 0 0 30px #00ffab',
  },
  animation: {
    fadeIn: 'fadeIn 2s ease-in forwards',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  },
  
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        
        neon: {
          pink: '#ff4ecd',
          green: '#00ffab',
          blue: '#00bfff',
          purple: '#b388eb',
        },
        dark: {
          bg: '#0a0a0a',
          text: '#f1f1f1',
          surface: '#1a1a1a',
        },
      },
      boxShadow: {
        neon: '0 0 10px rgba(0,255,171,0.7), 0 0 20px rgba(0,255,171,0.5)',
      },
    },
  },
  plugins: [],
}
