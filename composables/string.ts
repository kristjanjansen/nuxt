export const sentenceCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const replaceTokens = (str: string, obj: Record<string, string>) => {
  return str.replace(/\${(.*?)}/g, (_, v) => obj[v]);
};

export const parseUrls = (str: string) => {
  return str.replace(
    /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/gi,
    `<a href="$1" target="_blank">$3</a>`
  );
};

export const parseDetails = (str = ""): any[] => {
  if (!str) return [];
  const details = str
    .replace(/<\/?p>/g, "")
    .replace("<br>", "\n")
    .replace("\n{2,}", "\n\n")
    .split("\n")
    .map((el) =>
      el
        .split(/:(.*)/s)
        .map((s) => s.trim())
        .filter((s) => s)
        .map((s) => parseUrls(s))
    );
  return details.at(-1).length ? details : details.slice(0, -1);
};

export const parseDetails2 = (
  str = "",
  format = (match) => `**${match}**`
): string => {
  if (!str) return null;
  const details = str
    .replace(/<\/?p>/g, "")
    .replace("<br>", "\n")
    //.replace(":\n", ": ")
    .split("\n")
    .map((row) => row.replace(/^(.*):/, format))
    .map(parseMarkdown)
    .join("");
  return details;
};
