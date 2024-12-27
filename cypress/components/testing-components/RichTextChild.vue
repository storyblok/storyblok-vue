<script setup lang="ts">
import {
  MarkTypes,
  StoryblokRichText,
  type StoryblokRichTextNode,
  useStoryblok,
} from '@storyblok/vue';
import { h, type VNode } from 'vue';
import { RouterLink } from 'vue-router';

const story = await useStoryblok('vue/test-richtext', { version: 'draft' });

const resolvers = {
  [MarkTypes.LINK]: (node: StoryblokRichTextNode<VNode>) => {
    return node.attrs?.linktype === 'STORY'
      ? h(
          RouterLink,
          {
            to: node.attrs?.href,
            target: node.attrs?.target,
          },
          node.text,
        )
      : h(
          'a',
          {
            href: node.attrs?.href,
            target: node.attrs?.target,
          },
          node.text,
        );
  },
};
</script>

<template>
  <h2>RichText</h2>
  <!-- <pre>{{ story.content.richText }}</pre> -->
  <StoryblokRichText
    v-if="story.content"
    :doc="story.content.richText"
    :resolvers="resolvers"
  />
</template>
