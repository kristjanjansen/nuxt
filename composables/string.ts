export const sentenceCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const replaceTokens = (str: string, obj: Record<string, string>) => {
  return str.replace(/\${(.*?)}/g, (_, v) => obj[v]);
};

export function randomString(length = 36): string {
  return [...Array(length)]
    .map(() => (~~(Math.random() * 36)).toString(36))
    .join("");
}
