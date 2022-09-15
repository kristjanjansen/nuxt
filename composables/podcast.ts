import Parser from "rss-parser/dist/rss-parser.js";

export const usePodcast = () =>
  useLazyAsyncData("podcast", () => {
    const rssUrl =
      "https://api.allorigins.win/get?url=https://elektronsignal.captivate.fm/rssfeed";
    const parser = new Parser();

    const podcast = $fetch(rssUrl)
      .then((res: any) => {
        return parser.parseString(res.contents) as Podcast;
      })
      .then((res) => {
        res.items = res.items.map((item) => {
          item["content"] = item["content"].replace(/&nbsp;/g, " ");
          item["content:encoded"] = item["content:encoded"].replace(
            /&nbsp;/g,
            " "
          );
          return item;
        });
        return res;
      });
    return podcast;
  });

export const usePodcastByEpisodeId = async (episodeId: any) => {
  const { data: podcast, error } = await usePodcast();
  const data = computed(() =>
    podcast.value?.items.find((i) =>
      i.itunes.episode ? i.itunes.episode === episodeId : i.guid === episodeId
    )
  );
  return { data, error };
};

export interface Podcast {
  items: PodcastEpisode[];
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

export interface PodcastEpisode {
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
