import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/strapi",
    "@nuxtjs/tailwindcss",
    ["unplugin-icons/nuxt", { autoInstall: true }],
  ],
  strapi: {
    url: process.env.NUXT_STRAPI_URL,
    prefix: "/api",
    version: "v3",
  },
  runtimeConfig: {
    strapiUrl: "",
    public: { wsUrl: "" },
  },
  experimental: { reactivityTransform: true },
});
