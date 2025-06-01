/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        seasons: ['The Seasons', 'serif'],
      },
      colors: {
        'primary-cl': '#ffcc99',
        'primary-bg': '#330000',
        'secondary-bg': '#000000',
      },
      screens: {
        mobile: '375px',
        table: '768px',
        laptop: '1024px',
        desktop: '1440px',
      },
      keyframes: {
        'scroll-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'infinite-scroll-right': 'scroll-right 60s linear infinite',
        'infinite-scroll-left': 'scroll-left 60s linear infinite',
      },
    },
  },
  plugins: [],
};
