/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fefae0",
        secondary: "#bc4749",
        ternary: "#003049",
      },
    },
  },
  plugins: [],
}