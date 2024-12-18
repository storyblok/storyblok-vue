<script setup>
import { ref, watchEffect } from 'vue';

defineProps({ blok: Object });

const blokRefs = ref([]);

watchEffect(() => {
  if (blokRefs.value.length > 0) {
    blokRefs.value.forEach((blokRef) => {
      blokRef.value.featureMethod();
    });
  }
});
</script>

<template>
  <div v-editable="blok" class="flex py-8 mb-6" data-test="grid">
    <div v-for="blok in blok.columns" :key="blok._uid" class="flex-auto px-6">
      <StoryblokComponent ref="blokRefs" :blok="blok" />
    </div>
  </div>
</template>
