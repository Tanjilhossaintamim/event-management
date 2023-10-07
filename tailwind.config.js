/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'opensans': "'Open Sans', sans-serif"
      },
      colors: {
        "color-background": "#0D1D31",
        "color-black": "#403F3F",
        "color-yellow": "#FCB41E",
      }
    },
  },
  plugins: [],
}

