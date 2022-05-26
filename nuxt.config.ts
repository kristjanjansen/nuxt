import { defineNuxtConfig } from "nuxt";

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
