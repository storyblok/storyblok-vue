<script setup lang="ts">
import type { SbBlokData } from "../types";

export interface SbComponentProps {
  blok: SbBlokData;
}
defineProps<SbComponentProps>();
</script>

<style scoped>
.fallback-component {
  display: inline-flex;
  background-color: #eff1f3;
  text-align: center;
  padding: 15px 30px;
  border-radius: 5px;
}
span.component {
  color: #00b3b0;
  font-weight: bold;
}
</style>
<template>
  <div class="fallback-component">
    <p>
      Component could not be found for blok
      <span class="component">{{ blok.component }}</span
      >! Is it configured correctly?
    </p>
  </div>
</template>
