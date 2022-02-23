<template>
  <div v-editable="blok" class="px-6">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
