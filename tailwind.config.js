const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './dist/**/*.html',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.rose,
        primaryBg: '#002029',
        primaryBg2: '#001c23',
        primaryBg3: '#020d0f',
      },
      fontFamily: {
        sans: ['Sofia Pro Regular', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['SF Mono Regular', 'SFMono-Regular'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
