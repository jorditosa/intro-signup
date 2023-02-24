/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(0, 100%, 74%)',
        secondary: 'hsl(154, 59%, 51%)',
        info: 'hsl(248, 32%, 49%)',
        dark: 'hsl(249, 10%, 26%)',
        light: 'hsl(246, 25%, 77%)',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      screens: {
        'sm': '375px',
      }
    },
  },
  plugins: [],
}
