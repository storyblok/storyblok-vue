<script setup>
import { useStoryblok, StoryblokRichText } from "@storyblok/vue";
const story = await useStoryblok("vue/test-richtext", { version: "draft" });
</script>

<template>
  <h2>RichText</h2>
  <!-- <pre>{{ story.content.richText }}</pre> -->
  <StoryblokRichText v-if="story.content" :doc="story.content.richText" />
</template>
