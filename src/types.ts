import type { SbBlokData, SbSDKOptions, StoryblokRichTextDocumentNode, StoryblokRichTextResolvers } from '@storyblok/js';
import type StoryblokComponent from './components/StoryblokComponent.vue';
import type { VNode } from 'vue';

declare module 'vue' {
  export interface GlobalComponents {
    StoryblokComponent: typeof StoryblokComponent;
  }
}

export type {
  ArrayFn,
  AsyncFn,
  ISbAlternateObject,
  ISbCache,
  ISbConfig,
  ISbContentMangmntAPI,
  ISbDimensions,
  ISbError,
  ISbManagmentApiResult,
  ISbNode,
  ISbResponse,
  ISbResult,
  ISbSchema,
  ISbStories,
  ISbStoriesParams,
  ISbStory,
  ISbStoryData,
  ISbStoryParams,
  SbBlokData,
  SbBlokKeyDataTypes,
  SbSDKOptions,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  StoryblokClient,
  StoryblokComponentType,
  StoryblokRichTextDocumentNode,
  StoryblokRichTextImageOptimizationOptions,
  StoryblokRichTextNode,
  StoryblokRichTextNodeResolver,
  StoryblokRichTextNodeTypes,
  StoryblokRichTextResolvers,
} from '@storyblok/js';

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

export interface StoryblokRichTextProps {
  doc: StoryblokRichTextDocumentNode;
  resolvers?: StoryblokRichTextResolvers<VNode>;
}
