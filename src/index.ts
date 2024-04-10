import { ref, onMounted, defineAsyncComponent } from "vue";
import type { Ref, Plugin, Directive } from "vue";

import {
  storyblokEditable,
  storyblokInit,
  useStoryblokBridge,
} from "@storyblok/js";

export {
  useStoryblokBridge,
  apiPlugin,
  renderRichText,
  RichTextSchema,
  RichTextResolver,
} from "@storyblok/js";

import StoryblokComponent from "./components/StoryblokComponent.vue";
export { default as StoryblokComponent } from "./components/StoryblokComponent.vue";

import type {
  StoryblokClient,
  SbSDKOptions,
  StoryblokBridgeConfigV2,
  ISbStoryData,
  ISbStoriesParams,
} from "./types";

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

const printError = (fnName: string) => {
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

export interface SbVueSDKOptions extends SbSDKOptions {
  /**
   * Show a fallback component in your frontend if a component is not registered properly.
   */
  enableFallbackComponent?: boolean;
  /**
   * Provide a custom fallback component, e.g. "CustomFallback".
   */
  customFallbackComponent?: string;
}

// Plugin
export const StoryblokVue: Plugin = {
  install(app, pluginOptions: SbVueSDKOptions = {}) {
    app.directive("editable", vEditableDirective);
    app.component("StoryblokComponent", StoryblokComponent);

    if (
      pluginOptions.enableFallbackComponent &&
      !pluginOptions.customFallbackComponent
    ) {
      app.component(
        "FallbackComponent",
        defineAsyncComponent(() => import("./components/FallbackComponent.vue"))
      );
    }

    const { storyblokApi } = storyblokInit(pluginOptions);
    storyblokApiInstance = storyblokApi;

    app.provide("VueSDKOptions", pluginOptions);
  },
};

export * from "./types";
