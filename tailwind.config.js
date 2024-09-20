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
      animation: {
        bounce: "bounce 1s ease-in 1.5 0.05s",
        "move-out": "move-out .3s ease-in forwards",
        glow: "glow 1s 1 forwards",
        glowing: "glowing 1.8s infinite",
        "move-right": "move-right .5s ease-out forwards", // Ensure this is correct
        "move-left": "move-left .5s  ease-out forwards",
      },
      keyframes: {
        "move-out": {
          "0%": { right: "0px" },
          "100%": { right: "75px" },
        },
        glow: {
          "0%": { "box-shadow": "0 0 0px rgba(8, 145, 178, 1)" },
          "100%": { "box-shadow": "0 0 25px rgba(8, 145, 178, 1)" },
        },
        glowing: {
          "0%": { "box-shadow": "0 0 5px rgba(8, 145, 178, 1)" },
          "50%": { "box-shadow": "0 0 25px rgba(8, 145, 178, 1)" },
          "100%": { "box-shadow": "0 0 5px rgba(8, 145, 178, 1)" },
        },
        "move-right": {
          "0%": { transform: "translateX(100%)" }, 
          "100%": { transform: "translateX(0)" }, 
        },
        "move-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};