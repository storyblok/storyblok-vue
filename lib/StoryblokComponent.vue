<template>
  <component :is="blok.component" v-bind="{ ...$props, ...$attrs }"></component>
</template>

<script setup>
defineProps({ blok: Object });
</script>
