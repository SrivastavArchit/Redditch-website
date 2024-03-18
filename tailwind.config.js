/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    screens: {
      'sm': '320px'
    },
    extend: {
      fontFamily: {
        msmadi: ['"ms-madi-regular"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}
