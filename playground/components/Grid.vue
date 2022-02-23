<template>
  <div v-editable="blok" class="flex py-8 mb-6">
    <div :key="blok._uid" v-for="blok in blok.columns" class="flex-auto px-6">
      <StoryblokComponent :blok="blok" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
