/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navbar-black': '#1a1919',
        'navbar-black-2':'#2e2c2c',
        'footer-bg':'#0d0d0d',
        'div-gray':'#121212',
        'label-border':'#171717',
      },
      height:{
        '128': '32rem',
        '144': '36rem',
        '172':'40rem',
      },
      width:{
        '120': '30rem',
        '144': '36rem',
        'navic': '1.12rem',
      },
      fontFamily:{
        body:'Sora',
      },
      borderWidth: {
        '3': '2.5px',
  
      }
    },
  },
  plugins: [],
}
