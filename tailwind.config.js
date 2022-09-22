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
        "gray-50": "rgb(var(--gray-50) / <alpha-value>)",
        "gray-100": "rgb(var(--gray-100) / <alpha-value>)",
        "gray-200": "rgb(var(--gray-200) / <alpha-value>)",
        "gray-300": "rgb(var(--gray-300) / <alpha-value>)",
        "gray-400": "rgb(var(--gray-400) / <alpha-value>)",
        "gray-500": "rgb(var(--gray-500) / <alpha-value>)",
        "gray-600": "rgb(var(--gray-600) / <alpha-value>)",
        "gray-700": "rgb(var(--gray-700) / <alpha-value>)",
        "gray-800": "rgb(var(--gray-800) / <alpha-value>)",
        "gray-900": "rgb(var(--gray-900) / <alpha-value>)",
        black: "rgb(var(--black) / <alpha-value>)",
      },
      borderRadius: {
        "3xl": "2.5rem",
      },
    },
  },
};
