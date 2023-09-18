<template>
  <div
    class="py-8 mb-6 text-5xl font-bold text-center"
    data-test="custom-fallback-component"
  >
    Custom fallback component to cover {{ blok.component }}
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
