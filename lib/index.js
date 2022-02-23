import { storyblokEditable, storyblokInit } from "@storyblok/js";

const vEditableDirective = {
  beforeMount(el, binding) {
    if (binding.value) {
      const options = storyblokEditable(binding.value);
      el.setAttribute("data-blok-c", options["data-blok-c"]);
      el.setAttribute("data-blok-uid", options["data-blok-uid"]);
      el.classList.add("storyblok__outline");
    }
  },
};

let storyblokApiInstance = null;
export const useStoryblokApi = () => {
  if (!storyblokApiInstance) {
    console.error(`You can't use useStoryblokApi if you're not loading apiPlugin. Please enable it like in this example:

import { StoryblokVue, apiPlugin } from "@storyblok/vue";
app.use(StoryblokVue, {
  accessToken: "<your-token>",
  use: [apiPlugin], // use it only if you need it
});    
    `);
  }
  return storyblokApiInstance;
};

export { useStoryblokBridge, apiPlugin } from "@storyblok/js";
import StoryblokComponent from "./StoryblokComponent.vue";
export { default as StoryblokComponent } from "./StoryblokComponent.vue";

export const StoryblokVue = {
  install(app, pluginOptions = {}) {
    app.directive("editable", vEditableDirective);
    app.component("StoryblokComponent", StoryblokComponent);

    const { storyblokApi } = storyblokInit(pluginOptions);
    storyblokApiInstance = storyblokApi;
  },
};
