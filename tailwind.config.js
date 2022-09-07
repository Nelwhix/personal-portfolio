/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Oxanium']
      },
      colors: {
        'body': '#256EFF'
      }
    },
  },
  plugins: [],
}
