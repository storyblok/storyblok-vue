import { ref, onMounted } from "vue";
import {
  storyblokEditable,
  storyblokInit,
  useStoryblokBridge,
} from "@storyblok/js";

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

export const useStoryblok = async (
  url,
  apiOptions = {},
  bridgeOptions = {}
) => {
  const story = ref(null);
  onMounted(() => {
    if (story.value.id) {
      useStoryblokBridge(
        story.value.id,
        (evStory) => (story.value = evStory),
        bridgeOptions
      );
    }
  });
  if (storyblokApiInstance) {
    const { data } = await storyblokApiInstance.get(
      `cdn/stories/${url}`,
      apiOptions
    );
    story.value = data.story;

    console.log("beforemount");
  } else {
    console.error("You need to use the apiPlugin to use useStoryblok function");
  }

  return story;
};

// Plugin
export const StoryblokVue = {
  install(app, pluginOptions = {}) {
    app.directive("editable", vEditableDirective);
    app.component("StoryblokComponent", StoryblokComponent);

    const { storyblokApi } = storyblokInit(pluginOptions);
    storyblokApiInstance = storyblokApi;
  },
};
