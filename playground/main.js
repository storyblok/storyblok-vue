import { createApp } from "vue";
import App from "./App.vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: "wANpEQEsMYGOwLxwXQ76Ggtt",
  // bridge: false,
  // apiOptions: {  },
  use: [apiPlugin], // use it only if you need it
});

app.mount("#app");
