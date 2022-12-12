/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        zoomin: {
          '0%': { transform: 'scale(0%)', opacity: 0 },
          '100%': { transform: 'scale(100%)', opacity: 100 },
        },
      },
      animation: {
        zoomin: 'zoomin 0.25s ease-in-out',
      },
    },
  },
  plugins: [],
};
