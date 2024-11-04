<script setup lang="ts">
import { type VNode, h } from "vue";
import {
  useStoryblok,
  StoryblokRichText,
  type StoryblokRichTextNode,
  MarkTypes,
} from "@storyblok/vue";
import { RouterLink } from "vue-router";

const story = await useStoryblok(
  "vue/test-richtext",
  {
    version: "draft",
  }
  // { resolveRelations: "Article.categories" }
);

const resolvers = {
  [MarkTypes.LINK]: (node: StoryblokRichTextNode<VNode>) => {
    return node.attrs?.linktype === "STORY"
      ? h(
          RouterLink,
          {
            to: node.attrs?.href,
            target: node.attrs?.target,
          },
          node.text
        )
      : h(
          "a",
          {
            href: node.attrs?.href,
            target: node.attrs?.target,
          },
          node.text
        );
  },
};

setTimeout(() => {
  story.value.content.richText.content.push({
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "This is a new paragraph added after 5 seconds.",
      },
    ],
  });
}, 5000);
</script>

<template>
  <StoryblokRichText
    v-if="story.content.richText"
    :doc="story.content.richText"
    :resolvers="resolvers"
  />
</template>
