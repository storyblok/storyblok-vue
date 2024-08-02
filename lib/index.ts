import { ref, onMounted, defineAsyncComponent } from "vue";
import type { Ref, Plugin, Directive } from "vue";

import {
  storyblokEditable,
  storyblokInit,
  useStoryblokBridge,
} from "@storyblok/js";

import type {
  StoryblokClient,
  StoryblokBridgeConfigV2,
  ISbStoryData,
  ISbStoriesParams,
  SbVueSDKOptions,
} from "./types";

export {
  useStoryblokBridge,
  apiPlugin,
  renderRichText,
  RichTextSchema,
  RichTextResolver,
  BlockTypes,
  MarkTypes,
  richTextResolver,
  TextTypes,
} from "@storyblok/js";

import StoryblokComponent from "./StoryblokComponent.vue";
export { default as StoryblokComponent } from "./StoryblokComponent.vue";
import StoryblokRichText from "./components/StoryblokRichText.vue";
export { default as StoryblokRichText } from "./components/StoryblokRichText.vue";

export * from "./composables/useStoryblokRichText";

const vEditableDirective: Directive<HTMLElement> = {
  beforeMount(el, binding) {
    if (binding.value) {
      const options = storyblokEditable(binding.value);
      if (Object.keys(options).length > 0) {
        el.setAttribute("data-blok-c", options["data-blok-c"]);
        el.setAttribute("data-blok-uid", options["data-blok-uid"]);
        el.classList.add("storyblok__outline");
      }
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

export const useStoryblok = async (
  url: string,
  apiOptions: ISbStoriesParams = {},
  bridgeOptions: StoryblokBridgeConfigV2 = {}
) => {
  const story: Ref<ISbStoryData> = ref(null);

  bridgeOptions.resolveRelations =
    bridgeOptions.resolveRelations ?? apiOptions.resolve_relations;

  bridgeOptions.resolveLinks =
    bridgeOptions.resolveLinks ?? apiOptions.resolve_links;

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
  install(app, pluginOptions: SbVueSDKOptions = {}) {
    app.directive("editable", vEditableDirective);
    app.component("StoryblokComponent", StoryblokComponent);
    app.component("StoryblokRichText", StoryblokRichText);
    if (
      pluginOptions.enableFallbackComponent &&
      !pluginOptions.customFallbackComponent
    ) {
      app.component(
        "FallbackComponent",
        defineAsyncComponent(() => import("./FallbackComponent.vue"))
      );
    }

    const { storyblokApi } = storyblokInit(pluginOptions);
    storyblokApiInstance = storyblokApi;

    app.provide("VueSDKOptions", pluginOptions);
  },
};

export * from "./types";
