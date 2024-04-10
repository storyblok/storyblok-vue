<script setup lang="ts">
import { ref, resolveDynamicComponent, inject } from "vue";
import type { SbBlokData, SbVueSDKOptions } from "../types";

export interface SbComponentProps {
  blok: SbBlokData;
}
const props = defineProps<SbComponentProps>();

const blokRef = ref();

defineExpose({
  value: blokRef,
});

const componentFound: boolean =
  typeof resolveDynamicComponent(props.blok.component) !== "string";

// Fallback component logic
const VueSDKOptions: SbVueSDKOptions = inject("VueSDKOptions");

const componentName = ref(props.blok.component);
if (!componentFound) {
  if (!VueSDKOptions.enableFallbackComponent) {
    console.error(
      `Component could not be found for blok "${props.blok.component}"! Is it defined in main.ts as "app.component("${props.blok.component}", ${props.blok.component});"?`
    );
  } else {
    componentName.value =
      VueSDKOptions.customFallbackComponent ?? "FallbackComponent";

    if (typeof resolveDynamicComponent(componentName.value) === "string") {
      console.error(
        `Is the Fallback component "${componentName.value}" registered properly?`
      );
    }
  }
}
</script>

<template>
  <component
    ref="blokRef"
    :is="componentName"
    v-bind="{ ...$props, ...$attrs }"
  ></component>
</template>
