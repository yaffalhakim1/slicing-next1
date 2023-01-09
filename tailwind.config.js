/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-repeat": "no-repeat",
          "background-position": "bottom",
          "background-size": "cover",
        },
        ".shadow-skill": {
          "box-shadow": "0 15px 30px  rgba(0, 0, 0, 0.05)",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
