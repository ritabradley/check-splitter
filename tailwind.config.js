/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        prim: '#f0e6ef',
        rose: '#efc3e6',
        pink: '#f0a6ca',
        'light-blue': '#b8bedd',
        lavendar: '#9c89b8',
      },
    },
  },
  plugins: [],
};
