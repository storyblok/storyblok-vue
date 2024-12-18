<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
function setBodyClass(routeName: string) {
  document.title = `Core Playground - ${routeName}`;
  document.body.className = routeName;
}
watch([route], () => setBodyClass(route.name?.toString() ?? ''));
</script>

<template>
  <Suspense>
    <template #default>
      <RouterView />
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
