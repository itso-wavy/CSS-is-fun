/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0fa9e6',
          light: '#3fbaeb',
          dark: '#0c87b8',
        },
      },
      fontFamily: {
        headline: 'Poppins, sans-serif', // font-headline
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
