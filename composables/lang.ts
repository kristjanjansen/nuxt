export const useLang = () => {
  const lang = useState("lang", () => 0);
  const changeLang = () => (lang.value = 1 - lang.value);
  return { lang, changeLang };
};
