import { Strapi4RequestParams } from "@nuxtjs/strapi/dist/runtime/types";

export const useFind = (contentType: string, params?: Strapi4RequestParams) => {
  const { find } = useStrapi4();
  return useAsyncData(contentType, () =>
    find(contentType, params).then((res) => parseStrapi(res))
  );
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
