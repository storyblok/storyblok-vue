import { ref, onMounted } from "vue";
import type { Ref, Plugin, Directive } from "vue";

import {
  storyblokEditable,
  storyblokInit,
  useStoryblokBridge,
} from "@storyblok/js";

import type {
  StoryblokClient,
  SbSDKOptions,
  StoryblokBridgeConfigV2,
  StoryData,
  StoriesParams,
} from "./types";

const vEditableDirective: Directive<HTMLElement> = {
  beforeMount(el, binding) {
    if (binding.value) {
      const options = storyblokEditable(binding.value);
      el.setAttribute("data-blok-c", options["data-blok-c"]);
      el.setAttribute("data-blok-uid", options["data-blok-uid"]);
      el.classList.add("storyblok__outline");
    }
  },
};

const printError = (fnName) => {
  console.error(`You can't use ${fnName} if you're not loading apiPlugin. Please provide it on StoryblokVue initialization.
    `);
};

let storyblokApiInstance: StoryblokClient = null;
export const useStoryblokApi = (): StoryblokClient => {
  if (!storyblokApiInstance) printError("useStoryblokApi");
  return storyblokApiInstance;
};

export { useStoryblokBridge, apiPlugin } from "@storyblok/js";
import StoryblokComponent from "./StoryblokComponent.vue";
export { default as StoryblokComponent } from "./StoryblokComponent.vue";

export const useStoryblok = async (
  url: string,
  apiOptions: StoriesParams = {},
  bridgeOptions: StoryblokBridgeConfigV2 = {}
) => {
  const story: Ref<StoryData> = ref(null);

  onMounted(() => {
    if (story.value && story.value.id) {
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
  } else printError("useStoryblok");

  return story;
};

// Plugin
export const StoryblokVue: Plugin = {
  install(app, pluginOptions: SbSDKOptions = {}) {
    app.directive("editable", vEditableDirective);
    app.component("StoryblokComponent", StoryblokComponent);

    const { storyblokApi } = storyblokInit(pluginOptions);
    storyblokApiInstance = storyblokApi;
  },
};

export * from "./types";
