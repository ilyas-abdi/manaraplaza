/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0A0C0E',
          900: '#111418',
          850: '#171B20',
          800: '#1F242B',
          700: '#2C343E',
          600: '#475363',
        },
        ivory: {
          50: '#FDFCF9',
          100: '#FAF6EF',
          200: '#F2EADB',
          300: '#E8DDC9',
        },
        sand: {
          100: '#ECE5D8',
          200: '#DFD5C3',
          300: '#CFC0A8',
          400: '#B9A68A',
        },
        gold: {
          300: '#E4CFAB',
          400: '#D5BA8D',
          500: '#C5A36D',
          600: '#AC8951',
          700: '#8E6E3B',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.22em',
        widest: '0.15em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
        'luxury-gold': '0 10px 30px -10px rgba(197, 163, 109, 0.25)',
      },
    },
  },
  plugins: [],
}
