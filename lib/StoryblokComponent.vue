<template>
  <component :is="blok.component" v-bind="{ ...$props, ...$attrs }"></component>
</template>

<script setup lang="ts">
import type { SbBlokData } from "./types";

export interface SbComponentProps {
  blok: SbBlokData;
}

defineProps<SbComponentProps>();
</script>
