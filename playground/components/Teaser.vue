<template>
  <div v-editable="blok" class="py-8 mb-6 text-5xl font-bold text-center">
    {{ blok.headline }}
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
