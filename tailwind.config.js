const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        "special-gray": '#F5F0F0',
        ...defaultTheme.colors,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover']
    },
  },
  plugins: [],
}