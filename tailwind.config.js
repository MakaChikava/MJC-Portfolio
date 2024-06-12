/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bgGrain':"url('../src/assets/blacktexturedbackground.jpeg')",
      },
      colors:{
        'sand':"ffdfbf",
        'seashell':"f9f3ed"
      }
    },
  },
  plugins: [],
}

