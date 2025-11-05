/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#8B5E3C',
          700: '#6B4226',
          800: '#5a3420',
          900: '#4a2c1a',
        },
        cream: {
          50: '#FAEBD7',
          100: '#F5F5DC',
          200: '#F0F0E6',
          300: '#EEEEDC',
          400: '#E8E8D0',
          500: '#E0E0C4',
          600: '#D8D8B8',
          700: '#D0D0AC',
          800: '#C8C8A0',
          900: '#C0C094',
        },
        gold: {
          50: '#fffdf7',
          100: '#fffaeb',
          200: '#fff2c7',
          300: '#ffe9a3',
          400: '#ffd75c',
          500: '#D4AF37',
          600: '#c19b28',
          700: '#a1821f',
          800: '#816816',
          900: '#61510e',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};