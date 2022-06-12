export const sentenceCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function replaceTokens(str: string, obj: Record<string, string>) {
  return str.replace(/\${(.*?)}/g, (_, v) => obj[v]);
}
