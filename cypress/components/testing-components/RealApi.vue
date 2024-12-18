<script setup>
import RealApiChild from './RealApiChild.vue';
</script>

<template>
  <div data-test="root">
    <Suspense>
      <RealApiChild />
    </Suspense>
  </div>
</template>
