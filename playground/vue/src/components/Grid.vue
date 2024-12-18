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
    <div v-for="inblok in blok.columns" :key="inblok._uid" class="flex-auto px-6">
      <StoryblokComponent ref="blokRefs" :blok="inblok" />
    </div>
  </div>
</template>
