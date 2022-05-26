import tailwindTypography from "@tailwindcss/typography";
import tailwindForms from "@tailwindcss/forms";

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  plugins: [tailwindTypography],
  theme: {
    fontFamily: {
      title: "font-title-medium",
      sans: "font-body",
    },
    colors: {
      primary: withOpacityValue("--primary"),
      secondary: withOpacityValue("--secondary"),
    },
  },
};
