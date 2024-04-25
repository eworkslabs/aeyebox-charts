/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        steelblue: "#0f75a0",
        darkslategray: "#2f2f2f",
        gray: "#848484",
        lightgreen: "#7bd45b",
        black: "#000",
        cornflowerblue: "#5b76d4",
        indianred: "#d45b5b",
        silver: "#bababa",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        murecho: "Murecho",
      },
    },
    fontSize: {
      xl: "20px",
      lg: "18px",
      "3xl": "22px",
      mid: "17px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

