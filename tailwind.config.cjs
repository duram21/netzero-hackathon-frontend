/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#1a74e5",
      },
      fontFamily: {
        nanum: ['"Nanum Gothic"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};