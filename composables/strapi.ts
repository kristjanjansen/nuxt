import { Strapi4RequestParams } from "@nuxtjs/strapi/dist/runtime/types";
import { marked } from "marked";
import { hash } from "./hash";
import merge from "lodash/merge";

export const useEvents = (params: Strapi4RequestParams = {}) => {
  return useFind(
    "events",
    merge(
      {
        sort: ["start_at:desc"],
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

export const useProjects = () => {
  return useFind(
    "projects",
    {
      sort: ["pinned", "createdAt:desc"],
      populate: [
        "localizations",
        "thumbnail",
        "events",
        "events.localizations",
        "events.thumbnail",
      ],
    },
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

export const useFind = (
  contentType: string,
  params?: Strapi4RequestParams,
  process = (data) => data
) => {
  const { find } = useStrapi4();
  const key = hash({ contentType, ...params });
  return useAsyncData(key, () =>
    find(contentType, params)
      .then((res) => parseStrapi(res))
      .then((res) => res.map(process))
  );
};

export const useFindOne = (
  contentType: string,
  params?: Strapi4RequestParams
) =>
  useFind(contentType, params).then((find) => {
    return {
      ...find,
      data: find.data.value.length ? computed(() => find.data.value[0]) : null,
    };
  });

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

const proccessMarkdown = (item) => {
  const process = (str) => marked.parse(str || "", { breaks: true });
  item.titles = item.titles.map(process);
  item.intros = item.intros.map(process);
  item.descriptions = item.descriptions.map(process);
  item.detailss = item.detailss.map(process);
  return item;
};

const processEvent = (event) => {
  const project = event.projects?.[0];
  event.projectLink = project ? `/projects/${project.slug}` : "/";
  event.eventLink = project ? `/projects/${project.slug}/${event.slug}` : "/";
  if (event.projects) {
    event.projects = event.projects.map(processProject);
  }
  event = processLocalizations(event);
  event = proccessMarkdown(event);
  return event;
};

const processProjectEvent = (event, project) => {
  event.projectLink = `/projects/${project.slug}`;
  event.eventLink = `/projects/${project.slug}/${event.slug}`;
  event = processLocalizations(event);
  event = proccessMarkdown(event);
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

export const processProjects = (result) => {
  result.data.value = result.data.value.map(processProject);
  return result;
};

export const processEvents = (result) => {
  result.data.value = result.data.value.map(processEvent);
  return result;
};

// From https://github.com/ComfortablyCoding/strapi-plugin-transformer/blob/master/server/services/transform-service.js
// @TODO: Move to strapi instance?

import _ from "lodash";

export const parseStrapi = (data) => {
  if (_.has(data, "attributes")) {
    return parseStrapi(removeObjectKey(data, "attributes"));
  }

  if (_.isArray(data) && data.length && _.has(_.head(data), "attributes")) {
    return data.map((e) => parseStrapi(e));
  }

  _.forEach(data, (value, key) => {
    if (!value) {
      return;
    }

    if (_.isObject(value)) {
      data[key] = parseStrapi(value);
    }

    if (_.isArray(value)) {
      data[key] = value.map((field) => parseStrapi(field));
    }

    if (_.has(value, "data")) {
      let relation = null;
      if (_.isObject(value.data)) {
        relation = parseStrapi(value.data);
      }

      if (_.isArray(value.data)) {
        relation = value.data.map((e) => parseStrapi(e));
      }

      data[key] = relation;
    }

    if (_.has(value, "id")) {
      data[key] = parseStrapi(value);
    }

    if (_.isArray(value) && _.has(_.head(value), "id")) {
      data[key] = value.map((p) => parseStrapi(p));
    }

    if (_.has(value, "provider")) {
      return;
    }

    if (_.isArray(value) && _.has(_.head(value), "provider")) {
      return;
    }
  });

  return data.data ? data.data : data;
};

const removeObjectKey = (object, key) => ({
  id: object.id,
  ...object[key],
});
