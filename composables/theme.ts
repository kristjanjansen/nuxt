import { useCssVar } from "@vueuse/core";

const vars = [
  [useCssVar("--white"), ["255 255 255", "0 0 0"]],
  [useCssVar("--gray-50"), ["250 250 250", "23 23 23"]],
  [useCssVar("--gray-100"), ["245 245 245", "38 38 38"]],
  [useCssVar("--gray-200"), ["229 229 229", "64 64 64"]],
  [useCssVar("--gray-300"), ["212 212 212", "82 82 82"]],
  [useCssVar("--gray-400"), ["163 163 163", "115 115 115"]],
  [useCssVar("--gray-500"), ["115 115 115", "163 163 163"]],
  [useCssVar("--gray-600"), ["82 82 82", "212 212 212"]],
  [useCssVar("--gray-700"), ["64 64 64", "229 229 229"]],
  [useCssVar("--gray-800"), ["38 38 38", "245 245 245"]],
  [useCssVar("--gray-900"), ["23 23 23", "250 250 250"]],
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
