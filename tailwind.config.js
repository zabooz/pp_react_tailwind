// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "0 0px 20px 0px rgba(8, 145, 178, 1)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
