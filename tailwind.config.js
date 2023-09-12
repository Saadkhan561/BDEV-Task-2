/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        walmart: {
          500: "#007dc6"
        },
        walmartHover: {
          500: "#004c91"
        }
      }
    },
  },
  plugins: [],
}

