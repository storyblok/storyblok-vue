<script setup lang="ts">
import { inject, ref, resolveDynamicComponent } from 'vue';
import type { SbComponentProps, SbVueSDKOptions } from '../types';

const props = defineProps<SbComponentProps>();

const blokRef = ref();

defineExpose({
  value: blokRef,
});

const componentFound: boolean
  = typeof resolveDynamicComponent(props.blok.component) !== 'string';

// Fallback component logic
const VueSDKOptions: SbVueSDKOptions | undefined = inject('VueSDKOptions');

const componentName = ref(props.blok.component);
if (!componentFound && VueSDKOptions) {
  if (!VueSDKOptions.enableFallbackComponent) {
    console.error(
      `Component could not be found for blok "${props.blok.component}"! Is it defined in main.ts as "app.component("${props.blok.component}", ${props.blok.component});"?`,
    );
  }
  else {
    componentName.value
      = VueSDKOptions.customFallbackComponent ?? 'FallbackComponent';

    if (typeof resolveDynamicComponent(componentName.value) === 'string') {
      console.error(
        `Is the Fallback component "${componentName.value}" registered properly?`,
      );
    }
  }
}
</script>

<template>
  <component
    :is="componentName"
    ref="blokRef"
    v-bind="{ ...$props, ...$attrs }"
  />
</template>
