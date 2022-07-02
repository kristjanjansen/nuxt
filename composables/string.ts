import { format } from "date-fns";

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

export const randomFilename = (ext) => {
  const date = format(new Date(), "dd-MM-yyyy-HH-mm-ss-SSS");
  return `${date}.${randomString(4)}.${ext}`;
};

export const split = (str = "", separator = ",") =>
  str
    .split(separator)
    .map((s) => s.trim())
    .filter((s) => s);
