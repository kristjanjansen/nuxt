const lang = ref(0);

const changeLang = () => (lang.value = 1 - lang.value);

export function l(str: any, ...rest: any[]) {
  const strs = [...arguments];
  return strs[lang.value];
}

export const useLang = () => ({ l, lang, changeLang });
