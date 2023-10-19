/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'clr': 'rgb(126, 133, 155)'
      },
    },
  },
  plugins: [require("daisyui")],
}

