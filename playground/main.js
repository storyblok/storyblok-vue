import Vue from "vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import App from "./App.vue";

Vue.use(StoryblokVue, {
  accessToken: "wANpEQEsMYGOwLxwXQ76Ggtt",
  // bridge: false,
  // apiOptions: {  },
  use: [apiPlugin], // use it only if you need it
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
