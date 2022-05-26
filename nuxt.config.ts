import { defineNuxtConfig } from "nuxt";
import tailwindTypography from "@tailwindcss/typography";

export default defineNuxtConfig({
  modules: ["@nuxtjs/strapi", "@nuxtjs/tailwindcss"],
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: "/api",
    version: "v3",
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },
});
