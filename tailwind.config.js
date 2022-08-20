/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-default' :'rgb(2 132 199)',
        'secondary-default':'rgb(3 105 161)',
        'primary-tint':' rgb(125 211 252)',
        'text-default':'#515151',
        'text-light':'#818181',
        'text-tint':'#d1d1d1',
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
        'ComfortaaBold':'Comfortaa-Bold',
        'ComfortaaLight':'Comfortaa-Light'
      },
      animation: {
        'spin-slow': 'spin 5s ease infinite',
      },
      
    },
  },
  plugins: [],
}
