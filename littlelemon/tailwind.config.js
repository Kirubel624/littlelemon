/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
          serif: ['ui-serif', 'Georgia', ],
        mono: ['ui-monospace', 'SFMono-Regular',],
        markazi: ['Markazi', 'sans-serif',],
        karla: ['Karla', 'sans-serif',],
        poppins: ['Poppins', 'sans-serif'],
        adelia: ["ADELIA", "cursive"],
        display: ['Oswald',],
       
        },
         keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
        animation: {
          'float': 'float 3s ease-in-out infinite',
        },
    },
  },
  plugins: [],
}

