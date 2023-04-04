/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      desktop: "1440px",
    },
    colors: {
      black: "#111110",
      dark: "#2F2F2E",
      grey: "#939393",
      greyLight: "#F2F2F4",
      white: "#FFF",
      blue: "#158FFF",
      blueLight: "#D4DFFF",
      yellow: "#E3AD09",
      yellowLight: "#F2C94C",
      green: "#3DB613",
      gradient1: "#302F32",
      gradient2: "#242424",
    },
    fontSize: {
      "14r": [
        "1.4rem",
        {
          lineHeight: "2rem",
          fontWeight: "400",
        },
      ],
      "14b": [
        "1.4rem",
        {
          lineHeight: "2rem",
          fontWeight: "700",
        },
      ],
      "16r": [
        "1.6rem",
        {
          lineHeight: "2.4rem",
          fontWeight: "400",
        },
      ],
      "16m": [
        "1.6rem",
        {
          lineHeight: "2.4rem",
          fontWeight: "500",
        },
      ],
      "16b": [
        "1.6rem",
        {
          lineHeight: "2.4rem",
          fontWeight: "700",
        },
      ],
      "16eb": [
        "1.6rem",
        {
          lineHeight: "2.4rem",
          fontWeight: "800",
        },
      ],
      "18r": [
        "1.6rem",
        {
          lineHeight: "2.7rem",
          fontWeight: "400",
        },
      ],
      "18b": [
        "1.6rem",
        {
          lineHeight: "2.7rem",
          fontWeight: "700",
        },
      ],
      "18eb": [
        "1.6rem",
        {
          lineHeight: "2.7rem",
          fontWeight: "800",
        },
      ],
      h1: [
        "4.8rem",
        {
          lineHeight: "5.6rem",
          fontWeight: "800",
        },
      ],
      h2: [
        "4rem",
        {
          lineHeight: "5.4rem",
          fontWeight: "800",
        },
      ],
      h3: [
        "3.2rem",
        {
          lineHeight: "4rem",
          fontWeight: "800",
        },
      ],
      h4: [
        "2.4rem",
        {
          lineHeight: "3.2rem",
          fontWeight: "700",
        },
      ],
      h5: [
        "2rem",
        {
          lineHeight: "3rem",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)", ...fontFamily.sans],
      },
      spacing: {
        128: "32rem",
        500: "50rem",
      },
    },
  },
  plugins: [],
};
