<script setup lang="ts">
import type { VNode } from "vue";
import type { SbRichTextNode } from "@storyblok/vue";
import { useSbRichText } from "../composables/useRichText";
import type { SbRichTextProps } from "../types";

const props = defineProps<SbRichTextProps>();

const { render } = useSbRichText({
  resolvers: props.resolvers,
});

const root = () => render(props.doc as SbRichTextNode<VNode>);
</script>

<template>
  <root />
</template>
