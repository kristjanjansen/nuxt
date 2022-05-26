import { defineNuxtConfig } from "nuxt";

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

const fontMetrics = {
  title: {
    capHeight: 700,
    ascent: 1005,
    descent: -250,
    lineGap: 0,
    unitsPerEm: 1000,
    xHeight: 500,
  },
  sans: {
    capHeight: 0, // Was 715
    ascent: 876,
    descent: -467,
    lineGap: 0,
    unitsPerEm: 2048,
    xHeight: 510,
  },
};

export default defineNuxtConfig({
  modules: ["@nuxtjs/strapi", "@nuxtjs/tailwindcss"],
  strapi: {
    url: process.env.NUXT_STRAPI_URL,
    prefix: "/api",
    version: "v3",
  },
  runtimeConfig: {
    strapiUrl: "",
    public: { wsUrl: "" },
  },
});
