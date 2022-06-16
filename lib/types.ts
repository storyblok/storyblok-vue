import type StoryblokComponent from "./StoryblokComponent.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    StoryblokComponent: typeof StoryblokComponent;
  }
}

export type {
  AlternateObject,
  Richtext,
  RichtextInstance,
  SbBlokData,
  SbBlokKeyDataTypes,
  SbSDKOptions,
  Stories,
  StoriesParams,
  Story,
  StoryData,
  StoryParams,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  StoryblokCache,
  StoryblokCacheProvider,
  StoryblokClient,
  StoryblokConfig,
  StoryblokManagmentApiResult,
  StoryblokResult,
  apiPlugin,
  useStoryblokBridge,
} from "@storyblok/js";
