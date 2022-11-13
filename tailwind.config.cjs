/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'monserrat': ['Monserrat', 'sans-serif'],
    }
  },
  plugins: [
    // require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#66CC8A",
          "secondary": "#377CFB",
          "accent": "#EA5234",
          "neutral": "#333C4D",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
    theme: 'light',
  },
  daisyui: {
    darkTheme: 'light',
  },
}




