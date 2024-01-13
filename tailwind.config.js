/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation:{
        fadeIn:"fadeIn 1s ease-in-out"
      },
      
      keyframes:{
        fadeIn : {
          '0%':{opacity: 0},
          '100%':{opacity: 100}
        } 
      }
    },
  },
  plugins: [],
}



