<script setup lang="ts">
import RichTextChild from "./RichTextChild.vue";
</script>
<template>
  <div data-test="root">
    <Suspense>
      <RichTextChild />
    </Suspense>
  </div>
</template>
