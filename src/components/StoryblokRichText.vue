<script setup lang="ts">
import { ref, type VNode, watch } from 'vue';
import type {
  StoryblokRichTextNode,
  StoryblokRichTextResolvers,
} from '@storyblok/js';
import { useStoryblokRichText } from '../composables/useStoryblokRichText';
import type { StoryblokRichTextProps } from '../types';

const props = defineProps<StoryblokRichTextProps>();

const renderedDoc = ref();
const root = () => renderedDoc.value;

watch(
  [props.doc, props.resolvers],
  ([doc, resolvers]) => {
    const { render } = useStoryblokRichText({
      resolvers: (resolvers as StoryblokRichTextResolvers<VNode>) ?? {},
    });
    renderedDoc.value = render(doc as StoryblokRichTextNode<VNode>);
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <root />
</template>
