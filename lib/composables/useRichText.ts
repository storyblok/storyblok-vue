import type { VNode } from "vue";
import { createTextVNode, h } from "vue";
import type {
  Node,
  NodeResolver,
  SbRichtextOptions,
} from "@storyblok/richtext";
import {
  BlockTypes,
  /* MarkTypes, */ richTextResolver,
} from "@storyblok/richtext";
import StoryblokComponent from "../StoryblokComponent.vue";

const componentResolver: NodeResolver<VNode> = (node: Node<VNode>): VNode => {
  return h(
    StoryblokComponent,
    {
      blok: node?.attrs?.body[0],
      id: node.attrs?.id,
    },
    node.children
  );
};

export function useSbRichtext(options: SbRichtextOptions<VNode>) {
  const mergedOptions: SbRichtextOptions<VNode> = {
    renderFn: h,
    textFn: createTextVNode,
    resolvers: {
      [BlockTypes.COMPONENT]: componentResolver,
      ...options.resolvers,
    },
  };
  return richTextResolver<VNode>(mergedOptions);
}
