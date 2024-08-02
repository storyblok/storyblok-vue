<script setup lang="ts">
import type { VNode } from "vue";
import type { SbRichTextNode } from "@storyblok/js";
import { useStoryblokRichText } from "../composables/useStoryblokRichText";
import type { SbRichTextProps } from "../types";

const props = defineProps<SbRichTextProps>();

const { render } = useStoryblokRichText({
  resolvers: props.resolvers ?? {},
});

const root = () => render(props.doc as SbRichTextNode<VNode>);
</script>

<template>
  <root />
</template>
