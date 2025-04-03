/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: [
          'Montserrat',
          'sans-serif',
        ],
        seasons: [
          'The Seasons',
          'serif',
        ],
      },
      colors: {
        'primary-cl': '#ffcc99',
        'primary-bg': '#330000',
        'secondary-bg': '#000000',
      },
      screens: {
        mobile: '375px',
        table: '768px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
