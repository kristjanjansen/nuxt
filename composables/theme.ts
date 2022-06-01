import { useCssVar } from "@vueuse/core";

const vars = [
  [useCssVar("--white"), ["255 255 255", "0 0 0"]],
  [useCssVar("--gray-50"), ["249 250 251", "17 24 39"]],
  [useCssVar("--gray-100"), ["243 244 246", "31 41 55"]],
  [useCssVar("--gray-200"), ["229 231 235", "55 65 81"]],
  [useCssVar("--gray-300"), ["209 213 219", "75 85 99"]],
  [useCssVar("--gray-400"), ["156 163 175", "107 114 128"]],
  [useCssVar("--gray-500"), ["107 114 128", "156 163 175"]],
  [useCssVar("--gray-600"), ["75 85 99", "209 213 219"]],
  [useCssVar("--gray-700"), ["55 65 81", "229 231 235"]],
  [useCssVar("--gray-800"), ["31 41 55", "243 244 246"]],
  [useCssVar("--gray-900"), ["17 24 39", "249 250 251"]],
  [useCssVar("--black"), ["0 0 0", "255 255 255"]],
];

const theme = ref(0);

const black = useCssVar("--black");
const changeTheme = () => {
  theme.value = 1 - theme.value;
  vars.forEach((v) => {
    v[0].value = v[1][theme.value];
  });
};

export const useTheme = () => ({ theme, changeTheme });
