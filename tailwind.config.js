/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E9EAF0",
        secondary: "#BF9B5C",
        darkPrimary: "#F33102",
        darkSecondary: "#111111",
      },
      fontFamily: {
        primary: ['Alexandria', 'sans-serif'], 
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],

        noto: ['Noto Sans', 'sans-serif'],
      },
      screens: {
        'max-1024': { 'max': '1030px' },
        'max-768': { 'max': '769px' },
        'max-430': { 'max': '430px' },
        'max-375': { 'max': '376px' },
      },
    },
  },
  plugins: [],
}