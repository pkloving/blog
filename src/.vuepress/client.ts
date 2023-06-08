import { defineClientConfig } from "@vuepress/client";
import processing from "./components/p5/processing.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("processing", processing);
  },
});