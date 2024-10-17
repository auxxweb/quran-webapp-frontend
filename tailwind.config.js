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

    },
  },
  plugins: [],
}