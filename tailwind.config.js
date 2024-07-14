/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['BeVietnamPro-Regular', 'sans-serif'],
      pthin: ['BeVietnamPro-Thin', 'sans-serif'],
      pextralight: ['BeVietnamPro-ExtraLight', 'sans-serif'],
      plight: ['BeVietnamPro-Light', 'sans-serif'],
      pregular: ['BeVietnamPro-Regular', 'sans-serif'],
      pmedium: ['BeVietnamPro-Medium', 'sans-serif'],
      psemibold: ['BeVietnamPro-SemiBold', 'sans-serif'],
      pbold: ['BeVietnamPro-Bold', 'sans-serif'],
      pextrabold: ['BeVietnamPro-ExtraBold', 'sans-serif'],
      pblack: ['BeVietnamPro-Black', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E26894',
          light: '#F2BACE',
          dark: '#A04A69',
          50: '#FCF0F4',
          100: '#F6D0DE',
          200: '#F2BACE',
          300: '#EC9AB7',
          400: '#E886A9',
          500: '#E26894',
          600: '#CE5F87',
          700: '#A04A69',
          800: '#7C3951',
          900: '#5F2C3E',
        },
        neutral: colors.gray,
        error: colors.red,
      },
      textColor: {
        light: '#F2BACE',
        dark: '#A04A69',
        accent: '#A04A69',
      },
    },
  },
  plugins: [],
};
