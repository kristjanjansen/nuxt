import { useCssVar } from "@vueuse/core";

const vars = [
  [useCssVar("--white"), ["255 255 255", "0 0 0"]],
  [useCssVar("--grey-50"), ["250 250 250", "23 23 23"]],
  [useCssVar("--grey-100"), ["245 245 245", "38 38 38"]],
  [useCssVar("--grey-200"), ["229 229 229", "64 64 64"]],
  [useCssVar("--grey-300"), ["212 212 212", "82 82 82"]],
  [useCssVar("--grey-400"), ["163 163 163", "115 115 115"]],
  [useCssVar("--grey-500"), ["115 115 115", "163 163 163"]],
  [useCssVar("--grey-600"), ["82 82 82", "212 212 212"]],
  [useCssVar("--grey-700"), ["64 64 64", "229 229 229"]],
  [useCssVar("--grey-800"), ["38 38 38", "245 245 245"]],
  [useCssVar("--grey-900"), ["23 23 23", "250 250 250"]],
  [useCssVar("--black"), ["0 0 0", "255 255 255"]],
];

export const useTheme = () => {
  const theme = useState("theme", () => 0);

  const changeTheme = () => {
    theme.value = 1 - theme.value;
    vars.forEach((v) => {
      //@ts-ignore
      v[0].value = v[1][theme.value];
    });
  };

  return { theme, changeTheme };
};
