/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#115e59',
        secondary: '#d97706',
        tertiary: '#2C365A',
        white: '#ffffff',
        black: '#4F4F4F',
        light: '#FCF9FF',
        softblue: '#CBDAFF',
        red: '#FF7777',
        softred: '#FFCACA',
        yellow: '#CFB872',
        softyellow: '#FFEEBA',
        softpurple: '#EED3FF',
        softgreen: '#EAFFE0',
      },
      fontSize: {
        '2xs': '10px',
      },
      padding: {
        10: '10px',
        14: '14px',
        20: '20px',
      },
    },
  },
  plugins: [],
}
