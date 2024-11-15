/** @type {import('tailwindcss').Config} */

export default {
darkMode:'selector',
daisyui: {
  themes: [],
},

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

