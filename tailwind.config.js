/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',

      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(360deg)' },
        },
      
      },
    },
  },
  plugins: [],
}

