const tailwindTypography = require("@tailwindcss/typography");
const tailwindForms = require("@tailwindcss/forms");

module.exports = {
  plugins: [tailwindTypography, tailwindForms],
  theme: {
    fontFamily: {
      title: "title, sans-serif",
      sans: "sans, sans-serif",
      sans2: "sans2, sans-serif",
      mono: "mono, monospace",
    },
    extend: {
      colors: {
        white: "rgb(var(--white) / <alpha-value>)",
        "grey-50": "rgb(var(--grey-50) / <alpha-value>)",
        "grey-100": "rgb(var(--grey-100) / <alpha-value>)",
        "grey-200": "rgb(var(--grey-200) / <alpha-value>)",
        "grey-300": "rgb(var(--grey-300) / <alpha-value>)",
        "grey-400": "rgb(var(--grey-400) / <alpha-value>)",
        "grey-500": "rgb(var(--grey-500) / <alpha-value>)",
        "grey-600": "rgb(var(--grey-600) / <alpha-value>)",
        "grey-700": "rgb(var(--grey-700) / <alpha-value>)",
        "grey-800": "rgb(var(--grey-800) / <alpha-value>)",
        "grey-900": "rgb(var(--grey-900) / <alpha-value>)",
        black: "rgb(var(--black) / <alpha-value>)",
      },
      borderRadius: {
        "3xl": "2.5rem",
      },
    },
  },
};
