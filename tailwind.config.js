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
      animation:{
        'bounce': 'bounce 1s 1.5   ',
        'move-out': 'move-out .3s ease-in forwards',
      },
      keyframes: {
        'move-out': {
          '0%': { right:'0px' },
          '100%': { right:'75px' },
        },

      },
    },
  },
  plugins: [flowbite.plugin()],
};
