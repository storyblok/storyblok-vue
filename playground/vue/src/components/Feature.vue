<script setup>
defineProps({ blok: Object });

function featureMethod() {
  // eslint-disable-next-line no-console
  console.log('Hi from Feature.vue');
}

defineExpose({
  featureMethod,
});
</script>

<template>
  <div v-editable="blok" class="py-2" data-test="feature">
    <h1 class="text-lg">{{ blok.name }}</h1>
  </div>
</template>
