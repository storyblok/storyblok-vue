<template>
  <div>
    <h2>Vue 3</h2>
    <div data-test="editable" v-editable="blok.content">
      Open DevTools and inspect this &lt;div&gt;. You should see a
      <i>data-blok-c</i>
      and
      <i>data-blok-uid</i>
      attrs.
    </div>

    <h3>
      <code>storyblokApi.get:</code>
      <span data-test="api">{{ apiExists }}</span>
    </h3>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue";

const blok = {
  content: {
    _editable: `<!--#storyblok#{ "id": 12345, "uid": "fc34-uad1"}-->`,
  },
};

const storyblokApi = useStoryblokApi();
const apiExists = !!(storyblokApi && typeof storyblokApi.get === "function");

onMounted(() => useStoryblokBridge(12345, () => console.log("hola")));
</script>
