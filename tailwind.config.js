/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F33102",
        secondary: "#FFFFFF",
        darkPrimary: "#F33102",
        darkSecondary: "#111111",
      },
    },
  },
  plugins: [],
}