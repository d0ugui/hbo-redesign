module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
      'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'spider-man': 'url(/img/background.jpg)'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
