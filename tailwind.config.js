/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir', 'sans-serif'],
        persian: ['Vazir', 'Tahoma', 'Arial', 'sans-serif'],
      },
      colors: {
        wedding: {
          gold: '#D4AF37',
          rose: '#E8C4C4',
          cream: '#FFF8F0',
          burgundy: '#800020',
        }
      }
    },
  },
  plugins: [],
}

