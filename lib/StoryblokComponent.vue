<script setup lang="ts">
import { ref } from "vue";
import type { SbBlokData } from "./types";

export interface SbComponentProps {
  blok: SbBlokData;
}
defineProps<SbComponentProps>();

const blokRef = ref();

defineExpose({
  value: blokRef,
});
</script>
<template>
  <component
    ref="blokRef"
    :is="blok.component"
    v-bind="{ ...$props, ...$attrs }"
  ></component>
</template>
