// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
    theme: {
        extend: {
            boxShadow: {
                '2xl': '0 0px 20px 0px rgba(8, 145, 178, 1)',
            },
            animation: {
                'bounce': 'bounce 1s ease-in 1.5 0.05s',
                'bouncing': 'bouncing 1s ease-in infinite 0.05s',
                'move-out': 'move-out .3s ease-in forwards',
                'glow': 'glow 1s 1 forwards',
                'glowing': 'glowing 1.8s infinite',
                'move-right': 'move-right .8s ease-out forwards', // Ensure this is correct
                'move-left': 'move-left .8s  ease-out forwards',
                'move-up': 'move-up .8s ease-out forwards',
                'move-down': 'move-down .8s ease-out forwards',
                'scale-up': 'scale-up .8s ease-out forwards',
                'fade-in': 'fade-in .8s ease-in forwards',
                'fade-out': 'fade-out .8s ease-in forwards',
            },
            keyframes: {
                'move-out': {
                    '0%': { right: '0px' },
                    '100%': { right: '75px' },
                },
                'bouncing': {
                    '0%': { transform: 'translateY(0px) rotate(180deg)' },
                    '50%': { transform: 'translateY(-10px) rotate(180deg)' },
                    '100%': { transform: 'translateY(0px) rotate(180deg)' },
                },
                'glow': {
                    '0%': { 'box-shadow': '0 0 0px rgba(8, 145, 178, 1)' },
                    '100%': { 'box-shadow': '0 0 25px rgba(8, 145, 178, 1)' },
                },
                'glowing': {
                    '0%': { 'box-shadow': '0 0 5px rgba(8, 145, 178, 1)' },
                    '50%': { 'box-shadow': '0 0 25px rgba(8, 145, 178, 1)' },
                    '100%': { 'box-shadow': '0 0 5px rgba(8, 145, 178, 1)' },
                },
                'move-right': {
                    '0%': { transform: 'translateX(0) rotateY(0deg)' },
                    '100%': { transform: 'translateX(200%) rotateY(360deg);display:none' },
                },
                'move-left': {
                    '0%': { transform: 'translateX(0) rotateY(0deg)' },
                    '100%': { transform: 'translateX(-200%) rotateY(360deg) ;display:none' },
                },
                'move-up': {
                    '0%': { transform: 'translateY(0) ' },
                    '100%': { transform: 'translateY(-200%) ; display:none' },
                },
                'move-down': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(200%);display:none' },
                },
                'scale-up': {
                    '0%': { transform: 'scale(0) rotateX(0deg)' },
                    '100%': { transform: ' rotateX(90deg);' },
                    '100%': { transform: 'scale(1) rotateX(360deg);' },
                },
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                'fade-out': {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
            },
        },
    },
    plugins: [flowbite.plugin()],
};
