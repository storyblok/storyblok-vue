import type { VNode } from 'vue';
import { createTextVNode, h } from 'vue';
import type {
  StoryblokRichTextNode,
  StoryblokRichTextNodeResolver,
  StoryblokRichTextOptions,
} from '@storyblok/js';
import { BlockTypes, richTextResolver } from '@storyblok/js';
import StoryblokComponent from '../components/StoryblokComponent.vue';

const componentResolver: StoryblokRichTextNodeResolver<VNode> = (
  node: StoryblokRichTextNode<VNode>,
): VNode => {
  return h(
    StoryblokComponent,
    {
      blok: node?.attrs?.body[0],
      id: node.attrs?.id,
    },
    node.children,
  );
};

export function useStoryblokRichText(options: StoryblokRichTextOptions<VNode>) {
  const mergedOptions: StoryblokRichTextOptions<VNode> = {
    renderFn: h,
    textFn: createTextVNode,
    keyedResolvers: true,
    resolvers: {
      [BlockTypes.COMPONENT]: componentResolver,
      ...options.resolvers,
    },
  };
  return richTextResolver<VNode>(mergedOptions);
}
