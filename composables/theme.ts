import { useCssVar } from "@vueuse/core";

const gray100 = useCssVar("--gray-100");
const gray900 = useCssVar("--gray-900");
const green500 = useCssVar("--green-500");
const green900 = useCssVar("--green-900");
const themes = [
  {
    gray100: "0 0% 3%",
    gray900: "0 0% 95%",
    green500: "126 88% 71%",
    green900: "126 98% 11%",
  },
  {
    gray100: "0 0% 95%",
    gray900: "0 0% 3%",
    green500: "126 98% 71%",
    green900: "126 98% 11%",
  },
];

const theme = ref(0);

const changeTheme = () => {
  theme.value = 1 - theme.value;
  gray100.value = themes[theme.value].gray100;
  gray900.value = themes[theme.value].gray900;
  green500.value = themes[theme.value].green500;
  green900.value = themes[theme.value].green900;
};

export const useTheme = () => ({ theme, changeTheme });
