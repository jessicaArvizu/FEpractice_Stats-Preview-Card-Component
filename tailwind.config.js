/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      colors:{
        'very-dark-blue':'hsl(233, 47%, 7%)',
        'dark-desaturated-blue':'hsl(244, 38%, 16%)',
        'soft-violet':'hsl(277, 64%, 61%)',
        't-white':'hsl(0, 0%, 100%)',
        'p-transparent-white':'hsla(0, 0%, 100%, 0.75)',
        'h-transparent-white':'hsla(0, 0%, 100%, 0.6)',
      }
    },
  },
  plugins: [],
}