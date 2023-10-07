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
        "color-background": "#0B1221",
        "color-black": "#403F3F",
        "color-yellow": "#FCB41E",
        "color-white": "#E2E8F0",
        "color-blue": "#38BDF8",
        "color-gray": "#94a3b4",
      }
    },
  },
  plugins: [],
}

