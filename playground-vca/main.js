import Vue from "vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import VueCompositionAPI from "@vue/composition-api";
import App from "./App.vue";

Vue.use(VueCompositionAPI);
Vue.use(StoryblokVue, {
  accessToken: "wANpEQEsMYGOwLxwXQ76Ggtt",
  use: [apiPlugin], // use it only if you need it
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
