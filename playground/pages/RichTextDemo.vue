<script setup>
import { useStoryblok, StoryblokRichText } from "@storyblok/vue";

const story = await useStoryblok(
  "vue/test-richtext",
  {
    version: "draft",
  }
  // { resolveRelations: "Article.categories" }
);
</script>

<template>
  <StoryblokRichText
    v-if="story.content.richText"
    :doc="story.content.richText"
  />
</template>
