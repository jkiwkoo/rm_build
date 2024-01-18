/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/assets/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'default': '#FFFFFF',
        'rm-red-0': '#7D281E',
        'rm-black-0': '#292929',
        'rm-gray-0': '#D9D9D9',
        'rm-gray-1': '#919191',
        'rm-gray-2': '#F2F2F2',
        'rm-gray-3': '#4B4F5E',
        'rm-gray-4': '#F9F9F9;',
        'rm-gray-5': '#F5F5F5',
        'rm-gray-6': '#707070',
        'rm-orange-0': '#FF9534',
        'rm-brown-0': '#511E08',
        'rm-pink-0': '#F4D9D6'
      },
      keyframes: {
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 0.7s ease-out',
        'fade-in-right': 'fade-in-right 0.7s ease-out',
      },
    },
    fontFamily: {
      apple: ['var(--font-apple)'],
    }
  },
  plugins: [],
}
