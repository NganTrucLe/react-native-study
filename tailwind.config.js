/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E26894',
          100: '#FF9001',
          200: '#FF8E01',
          700: '#A04A69',
        },
        secondary: {
          DEFAULT: '#FF9C01',
          100: '#FF9001',
          200: '#FF8E01',
        },
      },
      fontFamily: {
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
    },
  },
  plugins: [],
};
