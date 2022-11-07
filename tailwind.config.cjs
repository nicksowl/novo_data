/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    mytheme: {
      "primary": "#5cb9e8",
      "secondary": "#7ee5bc",
      "accent": "#33a5f7",
      "neutral": "#22343F",
      "base-100": "#F7F7F7",
      "info": "#597CD4",
      "success": "#63E9B5",
      "warning": "#F7A93B",
      "error": "#EF5761",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}




