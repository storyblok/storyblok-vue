<script setup lang="ts">
import type { VNode } from "vue";
import type { StoryblokRichTextNode } from "@storyblok/js";
import { useStoryblokRichText } from "../composables/useStoryblokRichText";
import type { StoryblokRichTextProps } from "../types";

const props = defineProps<StoryblokRichTextProps>();

const { render } = useStoryblokRichText({
  resolvers: props.resolvers ?? {},
});

const root = () => render(props.doc as StoryblokRichTextNode<VNode>);
</script>

<template>
  <root />
</template>
