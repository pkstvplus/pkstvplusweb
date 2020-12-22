const { colors } = require('tailwindcss/defaultTheme')
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
  theme: {
    fontFamily: {
      customHeading: ['Montserrat', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'accented': '#F97316'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
