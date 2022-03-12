const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.njk'
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: []
}
