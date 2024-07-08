import type { VNode } from "vue";
import { createTextVNode, h } from "vue";
import type {
  SbRichTextNode,
  SbRichTextNodeResolver,
  SbRichTextOptions,
} from "@storyblok/richtext";
import { BlockTypes, richTextResolver } from "@storyblok/richtext";
import StoryblokComponent from "../StoryblokComponent.vue";

const componentResolver: SbRichTextNodeResolver<VNode> = (
  node: SbRichTextNode<VNode>
): VNode => {
  return h(
    StoryblokComponent,
    {
      blok: node?.attrs?.body[0],
      id: node.attrs?.id,
    },
    node.children
  );
};

export function useSbRichText(options: SbRichTextOptions<VNode>) {
  const mergedOptions: SbRichTextOptions<VNode> = {
    renderFn: h,
    textFn: createTextVNode,
    resolvers: {
      [BlockTypes.COMPONENT]: componentResolver,
      ...options.resolvers,
    },
  };
  return richTextResolver<VNode>(mergedOptions);
}
