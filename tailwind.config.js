/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD600',
        darkBg: '#0A0A0A',
        cardBg: '#161616',
        secondaryText: '#9CA3AF',
      },
    },
  },
  plugins: [],
}

