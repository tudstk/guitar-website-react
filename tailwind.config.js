/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navbar-black': '#1a1919',
        'div-gray':'#121212',
      },
      height:{
        '128': '32rem',
        '144': '36rem',
      },
      width:{
        '120': '30rem',
        '144': '36rem',
      },
      fontFamily:{
        body:'Sora',
      }
    },
  },
  plugins: [],
}
