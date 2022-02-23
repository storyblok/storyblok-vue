<script setup>
import Home from "./pages/HomeShort.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <Home />
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
