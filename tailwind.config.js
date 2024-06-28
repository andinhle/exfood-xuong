/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#F58220",
        "secondary":"#fff",
        "util":"#E2E8F0",
      },
      borderColor:{
        "base":"#E2E8F0",
      },
      backgroundColor:{
        "hover":"#F0F5F9",
        "hover-util":"#ffece0",
      },
      boxShadow:{
        "box": "rgba(149, 157, 165, 0.2) 0px 8px 24px"
      }
    },
  },
  plugins: [],
}

