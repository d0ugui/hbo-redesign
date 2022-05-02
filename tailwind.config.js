module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
      },
      backgroundImage: {
        'spider-man': 'url(/img/background.jpg)',
        'movie-background': 'url(/img/movie/background.jpg)'
      },
      backgroundButton: {
        'button-watch': 'linear-gradient(132.02deg, rgba(255, 255, 255, 0.2) -2.16%, rgba(0, 0, 0, 0.052) 151.47%)'
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
