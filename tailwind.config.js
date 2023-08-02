/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': 'Roboto'
      },
      colors:{
        'background-white': 'rgba(248, 250, 252, 0.75)',
        'modalBackground-white' : 'rgba(255, 255, 255, 0.65)',
        'background-dark' : 'rgba(26, 35, 50, 0.70)',
        'modalBackground-dark' : 'rgba(26, 35, 50, 0.65)',        
      }
    },
  },
  plugins: [],
}