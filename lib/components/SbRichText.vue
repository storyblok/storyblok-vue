<script setup lang="ts">
import { useSbRichText } from "../composables/useRichText";

const props = defineProps<{ doc: any; resolvers?: any }>();

const { render } = useSbRichText({
  resolvers: props.resolvers,
});

const root = () => render(props.doc);
</script>

<template>
  <root />
</template>
