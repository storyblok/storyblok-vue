import Vue from "vue";
import StoryblokVue from "@storyblok/vue/v2";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(StoryblokVue);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
