/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  theme: {
    extend: {
      screens: {
        "mm":"350px",
      },
      colors: {
        "btnColor":"#3A68B8",
      },
    },
  },
  plugins: [],
}
