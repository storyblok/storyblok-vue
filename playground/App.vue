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
  </div>
</template>

<script setup>
import { onMounted, inject } from "vue";
import { useStoryblokBridge } from "@storyblok/vue";

const blok = {
  content: {
    _editable: `<!--#storyblok#{ "id": 12345, "uid": "fc34-uad1"}-->`,
  },
};

const storyblokApi = inject("storyblokApi");
console.log(storyblokApi);

onMounted(() => useStoryblokBridge(12345, () => console.log("hola")));
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
