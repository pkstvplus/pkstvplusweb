const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.liquid'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    animation: false
  },
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
}
