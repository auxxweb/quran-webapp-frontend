/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E9EAF0",
        secondary: "#FFFFFF",
        darkPrimary: "#F33102",
        darkSecondary: "#111111",
      },
      fontFamily: {
        primary: ['Alexandria', 'sans-serif'], 
      },
      screens: {
        'min-1024': { 'max': '1030px' },
        'max-768': { 'max': '769px' },
        'max-430': { 'max': '430px' },
      },
    },
  },
  plugins: [],
}