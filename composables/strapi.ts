import { Strapi4RequestParams } from "@nuxtjs/strapi/dist/runtime/types";
import { marked } from "marked";
import { merge, has, isArray, head, forEach, isObject } from "lodash-es";

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
    processEvent
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
    processEvent
  ).then((res) => {
    res.data.value = res.data.value[0];
    return res;
  });
};

// "events.start_at:desc",
export const useProjects = (params: Strapi4RequestParams = {}) => {
  return useFind(
    "projects",
    merge(
      {
        sort: ["updatedAt:desc"],
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
    processProject
  );
};

export const useProjectsBySlug = (slug: any) => {
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
    processProject
  ).then((res) => {
    res.data.value = res.data.value[0];
    return res;
  });
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
      .then((res) => res.map(process))
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
  event = processLocalizations(event);
  event = proccessMarkdown(event);
  event = processEventDatetime(event);
  event = processEventFienta(event);
  return event;
};

const processProject = (project) => {
  project.projectLink = `/projects/${project.slug}`;
  if (project.events) {
    project.events = project.events.map((event) =>
      processProjectEvent(event, project)
    );
  }
  project = processLocalizations(project);
  project = proccessMarkdown(project);
  return project;
};

// Processors

const processLocalizations = (item) => {
  item.titles = [item.title, item.localizations?.[0].title || item.title];
  item.intros = [item.intro, item.localizations?.[0].intro || item.intro];
  item.descriptions = [
    item.description,
    item.localizations?.[0].description || item.description,
  ];
  item.detailss = [
    item.details,
    item.localizations?.[0].details || item.details,
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
