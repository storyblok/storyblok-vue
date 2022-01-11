import { createApp } from "vue";
import App from "./App.vue";
import { StoryblokVue } from "@storyblok/vue";

const app = createApp(App);

app.use(StoryblokVue, {
  options: {
    api: { accessToken: "lalala" },
    bridge: true,
  },
  use: [], // use it only if you need it
});

app.mount("#app");
