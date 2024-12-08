import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./src/assets/herobanner.jpg')",
        gamesbanner: "url('./src/assets/gamesbanner.jpg')",
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

