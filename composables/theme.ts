import { useCssVar } from "@vueuse/core";

export const useTheme = () => {
  const gray100 = useCssVar("--gray-100");
  const gray900 = useCssVar("--gray-900");
  const green500 = useCssVar("--green-500");
  const green900 = useCssVar("--green-900");
  const themes = [
    {
      gray100: "0 0% 95%",
      gray900: "0 0% 3%",
      green500: "126 98% 71%",
      green900: "126 98% 11%",
    },
    {
      gray100: "0 0% 3%",
      gray900: "0 0% 95%",
      green500: "126 88% 71%",
      green900: "126 98% 11%",
    },
  ];

  const currentTheme = ref(1);

  const changeTheme = () => {
    currentTheme.value = 1 - currentTheme.value;
    gray100.value = themes[currentTheme.value].gray100;
    gray900.value = themes[currentTheme.value].gray900;
    green500.value = themes[currentTheme.value].green500;
    green900.value = themes[currentTheme.value].green900;
  };

  return { changeTheme };
};
