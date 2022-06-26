const tailwindTypography = require("@tailwindcss/typography");
const tailwindForms = require("@tailwindcss/forms");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

const fontMetrics = {
  title: {
    capHeight: 700,
    ascent: 1005,
    descent: -250,
    lineGap: 0,
    unitsPerEm: 1000,
    xHeight: 500,
  },
  sans: {
    capHeight: 700,
    ascent: 992,
    descent: -310,
    lineGap: 0,
    unitsPerEm: 1000,
    xHeight: 496,
  },
};

module.exports = {
  plugins: [tailwindTypography, tailwindForms],
  theme: {
    fontFamily: {
      title: "title, sans-serif",
      sans: "sans, sans-serif",
      sans2: "sans2, sans-serif",
      mono: "mono, monospace",
    },
    fontMetrics,
    extend: {
      colors: {
        white: withOpacityValue("--white"),
        "gray-50": withOpacityValue("--gray-50"),
        "gray-100": withOpacityValue("--gray-100"),
        "gray-200": withOpacityValue("--gray-200"),
        "gray-300": withOpacityValue("--gray-300"),
        "gray-400": withOpacityValue("--gray-400"),
        "gray-500": withOpacityValue("--gray-500"),
        "gray-600": withOpacityValue("--gray-600"),
        "gray-700": withOpacityValue("--gray-700"),
        "gray-800": withOpacityValue("--gray-800"),
        "gray-900": withOpacityValue("--gray-900"),
        black: withOpacityValue("--black"),
      },
    },
  },
};
