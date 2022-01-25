import { storyblokEditable, storyblokInit } from "@storyblok/js";

const vEditableDirective = {
  bind(el, binding) {
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

export const StoryblokVue = {
  install(app, pluginOptions = {}) {
    app.directive("editable", vEditableDirective);

    const { storyblokApi } = storyblokInit(pluginOptions);
    storyblokApiInstance = storyblokApi;
    app.prototype.$storyblokApi = storyblokApi;
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(StoryblokVue);
}
