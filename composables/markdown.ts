import { marked } from "marked";

export const parseMarkdown = (str: string | null) => {
  return marked.parse(str || "", { breaks: true });
};
