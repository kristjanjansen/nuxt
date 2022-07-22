import { Strapi4RequestParams } from "@nuxtjs/strapi/dist/runtime/types";
import { marked } from "marked";
import { merge, has, isArray, head, forEach, isObject } from "lodash-es";
import { compareAsc, compareDesc } from "date-fns";

// Public API

export const useEvents = (params: Strapi4RequestParams = {}) => {
  return useFind(
    "events",
    merge(
      {
        sort: ["start_at:asc"],
        populate: [
          "localizations",
          "thumbnail",
          "projects",
          "projects.thumbnail",
        ],
      },
      params
    ),
    (events) => events.map(processEvent)
  );
};

export const useEventBySlug = (slug: any) => {
  return useFind(
    "events",
    {
      filters: {
        slug: { $eq: slug },
      },
      populate: [
        "localizations",
        "images",
        "thumbnail",
        "projects",
        "projects.thumbnail",
      ],
    },
    (events) => events.map(processEvent)
  ).then((res) => {
    res.data.value = res.data.value?.[0];
    return res;
  });
};

export const useProjects = (params: Strapi4RequestParams = {}) => {
  return useFind(
    "projects",
    merge(
      {
        populate: [
          "localizations",
          "thumbnail",
          "events",
          "events.localizations",
          "events.thumbnail",
        ],
      },
      params
    ),
    (projects) => projects.map(processProject).sort(sortProjects)
  );
};

export const useProjectBySlug = (slug: any) => {
  return useFind(
    "projects",
    {
      filters: {
        slug: { $eq: slug },
      },
      populate: [
        "localizations",
        "images",
        "thumbnail",
        "events",
        "events.thumbnail",
      ],
    },
    (projects) => projects.map(processProject)
  ).then((res) => {
    res.data.value = res.data.value?.[0];
    return res;
  });
};

export const useFrontPage = (params: Strapi4RequestParams = {}) => {
  return useFind(
    "frontpage",
    merge(
      {
        populate: ["localizations", "background"],
      },
      params
    ),
    processPage
  );
};

export const usePodcastPage = (params: Strapi4RequestParams = {}) => {
  return useFind(
    "podcast",
    merge(
      {
        populate: ["localizations", "images"],
      },
      params
    ),
    processPage
  );
};

export const useMessagesHistory = (params: Strapi4RequestParams = {}) => {
  return useFind("messages", params);
};

// Public Strapi request wrapper

export const useFind = (
  contentType: string,
  params?: Strapi4RequestParams,
  process = (data) => data
) => {
  const { find } = useStrapi4();
  const key = JSON.stringify({ contentType, ...params });
  return useAsyncData(key, () =>
    find(contentType, params)
      .then((res) => parseStrapi(res))
      .then(process)
  );
};

// Strapi result processing

export const processProjects = (result) => {
  result.data.value = result.data.value.map(processProject);
  return result;
};

export const processEvents = (result) => {
  result.data.value = result.data.value.map(processEvent);
  return result;
};

export const processPage = (result) => {
  result = processLocalizations(result);
  result = proccessMarkdown(result);
  return result;
};

// Sorting

export function sortEvents(a: any, b: any) {
  if (a.start_at && b.start_at) {
    return compareAsc(new Date(b.start_at), new Date(a.start_at));
  }
  return 0; // Keep original sort order if no data for sorting
}

export function sortProjects(a: any, b: any) {
  if (a.events.length && b.events.length) {
    return compareAsc(
      new Date(b.events[0].start_at),
      new Date(a.events[0].start_at)
    );
  }
  if (a.created_at && b.created_at) {
    return compareAsc(new Date(b.created_at), new Date(a.created_at));
  }
  return 0; // Keep original sort order if no data for sorting
}

// Project and event processing

const processEvent = (event) => {
  const project = event.projects?.[0];
  event.projectLink = project ? `/projects/${project.slug}` : "/";
  event.eventLink = project ? `/projects/${project.slug}/${event.slug}` : "/";
  event.eventLiveLink = project
    ? `/projects/${project.slug}/${event.slug}/live`
    : "/";
  if (event.projects) {
    event.projects = event.projects.map(processProject);
  }
  event = processLocalizations(event);
  event = proccessMarkdown(event);
  event = processEventDatetime(event);
  event = processEventFienta(event);
  return event;
};

const processProjectEvent = (event, project) => {
  event.projectLink = `/projects/${project.slug}`;
  event.eventLink = `/projects/${project.slug}/${event.slug}`;
  event.eventLiveLink = project
    ? `/projects/${project.slug}/${event.slug}/live`
    : "/";
  event = processLocalizations(event);
  event = proccessMarkdown(event);
  event = processEventDatetime(event);
  event = processEventFienta(event);
  return event;
};

const processProject = (project) => {
  project.projectLink = `/projects/${project.slug}`;
  if (project.events) {
    project.events = project.events
      .map((event) => processProjectEvent(event, project))
      .sort(sortEvents);
  }
  project = processLocalizations(project);
  project = proccessMarkdown(project);
  return project;
};

// Processors

const processLocalizations = (item) => {
  item.titles = [
    item.title || null,
    item.localizations?.[0].title || item.title || null,
  ];
  item.intros = [
    item.intro || null,
    item.localizations?.[0].intro || item.intro || null,
  ];
  item.descriptions = [
    item.description || null,
    item.localizations?.[0].description || item.description || null,
  ];
  item.detailss = [
    item.details || null,
    item.localizations?.[0].details || item.details || null,
  ];
  return item;
};

export const parseMarkdown = (str: string) =>
  marked.parse(str || "", { breaks: true });

const proccessMarkdown = (item) => {
  item.titles = item.titles.map(parseMarkdown);
  item.intros = item.intros.map(parseMarkdown);
  item.descriptions = item.descriptions.map(parseMarkdown);
  item.detailss = item.detailss.map(parseMarkdown);
  return item;
};

const processEventDatetime = (event) => {
  if (!event.start_at && !event.end_at) {
    return event;
  }
  return {
    ...event,
    ...useDatetime(event.start_at, event.end_at),
  };
};

const processEventFienta = (event) => {
  // TODO: Add [event,event.project]
  return { ...event, ...getTicketableStatus([event]) };
};
// From https://github.com/ComfortablyCoding/strapi-plugin-transformer/blob/master/server/services/transform-service.js
// @TODO: Move to strapi instance?

export const parseStrapi = (data) => {
  if (has(data, "attributes")) {
    return parseStrapi(removeObjectKey(data, "attributes"));
  }

  if (isArray(data) && data.length && has(head(data), "attributes")) {
    return data.map((e) => parseStrapi(e));
  }

  forEach(data, (value, key) => {
    if (!value) {
      return;
    }

    if (isObject(value)) {
      data[key] = parseStrapi(value);
    }

    if (isArray(value)) {
      data[key] = value.map((field) => parseStrapi(field));
    }

    if (has(value, "data")) {
      let relation = null;
      if (isObject(value.data)) {
        relation = parseStrapi(value.data);
      }

      if (isArray(value.data)) {
        relation = value.data.map((e) => parseStrapi(e));
      }

      data[key] = relation;
    }

    if (has(value, "id")) {
      data[key] = parseStrapi(value);
    }

    if (isArray(value) && has(head(value), "id")) {
      data[key] = value.map((p) => parseStrapi(p));
    }

    if (has(value, "provider")) {
      return;
    }

    if (isArray(value) && has(head(value), "provider")) {
      return;
    }
  });

  return data.data ? data.data : data;
};

const removeObjectKey = (object, key) => ({
  id: object.id,
  ...object[key],
});
