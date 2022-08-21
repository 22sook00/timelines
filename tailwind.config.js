/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-default' :'#0ea5e9',
        'secondary-default':'#0284c7',
        'primary-tint':'#38bdf81a',
        'text-default':'#334155',
        'text-dark':'#0f172a',
        'text-light':'#818181',
        'text-tint':'#d1d1d1',
        'dark-bg':'#1e293b',
        'pink-filter':'#fdf2f8',
        'pink-filter-text':'#db2777',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily: {
        'Comfortaa': 'Comfortaa-Regular', 
      },
      animation: {
        'spin-slow': 'spin 5s ease infinite',
      },
      
    },
  },
  plugins: [],
}
