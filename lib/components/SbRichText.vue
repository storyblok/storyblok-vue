<script setup lang="ts">
import { useSbRichText } from "../composables/useRichText";
import type { SbRichTextProps } from "../types";

const props = defineProps<SbRichTextProps>();

const { render } = useSbRichText({
  resolvers: props.resolvers,
});

const root = () => render(props.doc);
</script>

<template>
  <root />
</template>
