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
        gainsboro: "#d9d9d9",
        lightsteelblue: "#9dc8eb",
        darkslategray: "#2f2f2f",
        silver: "#bfbfbf",
        gray: "#848484",
        darksalmon: "#faa190",
        gold: "#ebe352",
        steelblue: "#0f75a0",
      },
      spacing: {},
      fontFamily: {
        murecho: "Murecho",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      lgi: "19px",
      xl: "20px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
}