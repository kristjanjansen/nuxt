const tailwindTypography = require("@tailwindcss/typography");
const tailwindForms = require("@tailwindcss/forms");
const tailwindCapsize = require("tailwindcss-capsize");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

//Get the metrics:

// import { fromFile } from "@capsizecss/unpack";
// fromFile("./assets/fonts/mulish-regular.woff2").then((m) => console.log(m));

const fontMetrics = {
  title: {
    capHeight: 700,
    ascent: 1005,
    descent: -250,
    lineGap: 0,
    unitsPerEm: 1000,
    xHeight: 500,
  },
  sans2: {
    capHeight: 1265, // Was 715
    ascent: 876,
    descent: -467,
    lineGap: 0,
    unitsPerEm: 2048,
    xHeight: 510,
  },
  sans: {
    familyName: "Mulish",
    fullName: "Mulish Regular",
    postscriptName: "Mulish-Regular",
    subfamilyName: "Regular",
    capHeight: 705,
    ascent: 1043,
    descent: -270,
    lineGap: 0,
    unitsPerEm: 1000,
    xHeight: 500,
  },
};

module.exports = {
  plugins: [tailwindTypography, tailwindForms, tailwindCapsize],
  theme: {
    fontFamily: {
      title: "font-title-medium",
      sans: "mulish-regular",
    },
    fontMetrics,
    colors: {
      primary: withOpacityValue("--primary"),
      secondary: withOpacityValue("--secondary"),
    },
  },
};
