import { defineAsyncComponent, onMounted, ref } from 'vue';
import type { Directive, Plugin, Ref } from 'vue';

import {
  storyblokEditable,
  storyblokInit,
  useStoryblokBridge,
} from '@storyblok/js';

import type {
  ISbStoriesParams,
  ISbStoryData,
  SbVueSDKOptions,
  StoryblokBridgeConfigV2,
  StoryblokClient,
} from './types';

import StoryblokComponent from './components/StoryblokComponent.vue';
import StoryblokRichText from './components/StoryblokRichText.vue';

export { default as StoryblokComponent } from './components/StoryblokComponent.vue';

export { default as StoryblokRichText } from './components/StoryblokRichText.vue';
export * from './composables/useStoryblokRichText';
export * from './types';

export {
  apiPlugin,
  BlockTypes,
  MarkTypes,
  renderRichText,
  richTextResolver,
  type StoryblokRichTextDocumentNode,
  type StoryblokRichTextImageOptimizationOptions,
  type StoryblokRichTextNode,
  type StoryblokRichTextNodeResolver,
  type StoryblokRichTextNodeTypes,
  type StoryblokRichTextOptions,
  type StoryblokRichTextResolvers,
  TextTypes,
  useStoryblokBridge,
} from '@storyblok/js';

const vEditableDirective: Directive<HTMLElement> = {
  beforeMount(el, binding) {
    if (binding.value) {
      const options = storyblokEditable(binding.value);
      if (Object.keys(options).length > 0) {
        el.setAttribute('data-blok-c', options['data-blok-c'] as string);
        el.setAttribute('data-blok-uid', options['data-blok-uid'] as string);
        el.classList.add('storyblok__outline');
      }
    }
  },
};

const printError = (fnName: string) => {
  console.error(`You can't use ${fnName} if you're not loading apiPlugin. Please provide it on StoryblokVue initialization.
    `);
};

let storyblokApiInstance: StoryblokClient | null = null;
export const useStoryblokApi = (): StoryblokClient => {
  if (!storyblokApiInstance) {
    printError('useStoryblokApi');
  }
  return storyblokApiInstance as StoryblokClient;
};

export const useStoryblok = async (
  url: string,
  apiOptions: ISbStoriesParams = {},
  bridgeOptions: StoryblokBridgeConfigV2 = {},
) => {
  const story: Ref<ISbStoryData | null> = ref(null);

  bridgeOptions.resolveRelations
    = bridgeOptions.resolveRelations ?? apiOptions.resolve_relations;

  bridgeOptions.resolveLinks
    = bridgeOptions.resolveLinks ?? apiOptions.resolve_links;

  onMounted(() => {
    if (story.value && story.value.id) {
      useStoryblokBridge(
        story.value.id,
        evStory => (story.value = evStory),
        bridgeOptions,
      );
    }
  });

  if (storyblokApiInstance) {
    const { data } = await storyblokApiInstance.get(
      `cdn/stories/${url}`,
      apiOptions,
    );
    story.value = data.story;
  }
  else {
    printError('useStoryblok');
  }

  return story;
};

// Plugin
export const StoryblokVue: Plugin = {
  install(app, pluginOptions: SbVueSDKOptions = {}) {
    app.directive('editable', vEditableDirective);
    app.component('StoryblokComponent', StoryblokComponent);
    app.component('StoryblokRichText', StoryblokRichText);
    if (
      pluginOptions.enableFallbackComponent
      && !pluginOptions.customFallbackComponent
    ) {
      app.component(
        'FallbackComponent',
        defineAsyncComponent(() => import('./components/FallbackComponent.vue')),
      );
    }

    const { storyblokApi } = storyblokInit(pluginOptions);

    storyblokApiInstance = storyblokApi || null;

    app.provide('VueSDKOptions', pluginOptions);
  },
};
