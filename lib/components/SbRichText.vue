<script setup lang="ts">
import { useSbRichtext } from "../composables/useRichText";

const props = defineProps<{ doc: any; resolvers?: any }>();

const { render } = useSbRichtext({
  resolvers: props.resolvers,
});

const root = () => render(props.doc);
</script>

<template>
  <root />
</template>
