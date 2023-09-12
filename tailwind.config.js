/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens:{
      'large': {'max': '1600px'},
      'middle': {'max': '1040px'},
      'small': {'max': '768px'},
    },
    fontFamily: {
      inter: ['Inter', "sans-serif"],
      karla: ['Karla', "sans-serif"],
      kristi: ['Kristi', "cursive"],
    },
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "dark-color": "var(--dark-color)",
        "yellow-color": "var(--yellow-color)",
        "blue-color": "var(--blue-color)",
      },
    },
  },
  plugins: [],
}

