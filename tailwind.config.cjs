/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors:{
        lightgrey :"hsl(212, 45%, 89%)",
        white: "hsl(0, 0%, 100%)",
        grayishblue: "hsl(220, 15%, 55%)",
        darkblue:"hsl(218, 44%, 22%)",
      },
      fontFamily: {
        'outfit': ['"Outfit"', 'sans-serif'],
      },
      fontSize: {
        p:"15px",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
}
