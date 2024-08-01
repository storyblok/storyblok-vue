import type { SbBlokData, SbSDKOptions } from "@storyblok/js";
import type StoryblokComponent from "./StoryblokComponent.vue";
import type {
  SbRichTextDocumentNode,
  SbRichTextResolvers,
} from "@storyblok/js";
import type { VNode } from "vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    StoryblokComponent: typeof StoryblokComponent;
  }
}

export type {
  ISbConfig,
  ISbCache,
  ISbResult,
  ISbResponse,
  ISbError,
  ISbNode,
  ISbSchema,
  ThrottleFn,
  AsyncFn,
  ArrayFn,
  ISbContentMangmntAPI,
  ISbManagmentApiResult,
  ISbStories,
  ISbStory,
  ISbDimensions,
  StoryblokComponentType,
  ISbStoryData,
  ISbAlternateObject,
  ISbStoriesParams,
  ISbStoryParams,
  ISbRichtext,
  SbBlokData,
  SbBlokKeyDataTypes,
  SbSDKOptions,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  StoryblokClient,
} from "@storyblok/js";

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

export interface SbComponentProps {
  blok: SbBlokData;
}

export interface SbRichTextProps {
  doc: SbRichTextDocumentNode;
  resolvers?: SbRichTextResolvers<VNode>;
}
