/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
    },
    extend: {
      fontFamily: {
        primary: ["acorn", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      colors: {
        primary: "#32aed1",
        "cv-primary": "#002b7f",
        "cv-secondary": "#f96b07",
      },
    },
  },
  plugins: [],
};
