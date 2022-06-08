import Parser from "rss-parser/dist/rss-parser.js";

export const usePodcast = () =>
  useLazyAsyncData("podcast", () => {
    const rssUrl =
      "https://api.allorigins.win/get?url=https://elektronsignal.captivate.fm/rssfeed";
    const parser = new Parser();

    const podcast = $fetch(rssUrl).then((res: any) => {
      return parser.parseString(res.contents) as Podcast;
    });
    return podcast;
  });

export interface Podcast {
  items: PodcastItem[];
  feedUrl: string;
  image: Image;
  paginationLinks: PaginationLinks;
  title: string;
  description: string;
  managingEditor: string;
  generator: string;
  link: string;
  language: string;
  copyright: string;
  lastBuildDate: string;
  itunes: Itunes2;
}

export interface PodcastItem {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  "content:encoded": string;
  "content:encodedSnippet": string;
  enclosure: Enclosure;
  "dc:creator": string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
  itunes: Itunes;
}

export interface Enclosure {
  url: string;
  length: string;
  type: string;
}

export interface Itunes {
  author: string;
  summary: string;
  explicit: string;
  duration: string;
  image: string;
  episode?: string;
}

export interface Image {
  link: string;
  url: string;
  title: string;
}

export interface PaginationLinks {
  self: string;
}

export interface Itunes2 {
  owner: Owner;
  image: string;
  categories: string[];
  categoriesWithSubs: CategoriesWithSub[];
  author: string;
  subtitle: string;
  summary: string;
  explicit: string;
}

export interface Owner {
  name: string;
  email: string;
}

export interface CategoriesWithSub {
  name: string;
  subs?: Sub[];
}

export interface Sub {
  name: string;
}
