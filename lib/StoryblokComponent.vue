<template>
  <component :is="componentName" v-bind="{ ...$props, ...$attrs }"></component>
</template>

<script setup lang="ts">
import { ref, resolveDynamicComponent, inject } from "vue";
import type { SbBlokData, SbVueSDKOptions } from "./types";

export interface SbComponentProps {
  blok: SbBlokData;
}
const props = defineProps<SbComponentProps>();
const componentFound =
  typeof resolveDynamicComponent(props.blok.component) !== "string";

// Fallback logic
const VueSDKOptions: SbVueSDKOptions = inject("VueSDKOptions");

const componentName = ref(props.blok.component);
if (!componentFound) {
  if (!VueSDKOptions.enableFallbackComponent) {
    console.error(
      `Component could not be found for blok "${props.blok.component}"! Is it defined in main.ts as "app.component("${props.blok.component}", ${props.blok.component});"?`
    );
    /* throw new Error(
      `Component could not be found for blok "${props.blok.component}"! Is it defined in main.ts as "app.component("${props.blok.component}", ${props.blok.component});"?`
    ); */
  } else {
    const fallbackComponentName =
      VueSDKOptions.customFallbackComponent ?? "FallbackComponent";
    componentName.value = fallbackComponentName;
  }
}
</script>
