import { Strapi4RequestParams } from "@nuxtjs/strapi/dist/runtime/types";

const processStrapi = (rawResults: any) => {
  const results = parseStrapi(rawResults).map((r) => {
    r.titles = [r.title, r.localizations?.[0].title || r.title];
    r.intros = [r.intro, r.localizations?.[0].intro || r.intro];
    r.descriptions = [
      r.description,
      r.localizations?.[0].description || r.description,
    ];
    r.detailss = [r.details, r.localizations?.[0].details || r.details];
    return r;
  });
  return results;
};

export const useFind = (contentType: string, params?: Strapi4RequestParams) => {
  const { find } = useStrapi4();
  const key = hash({ contentType, ...params });
  return useAsyncData(key, () =>
    find(contentType, params).then((res) => processStrapi(res))
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

// From https://github.com/ComfortablyCoding/strapi-plugin-transformer/blob/master/server/services/transform-service.js
// @TODO: Move to strapi instance?

import _ from "lodash";
import { hash } from "./hash";

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
