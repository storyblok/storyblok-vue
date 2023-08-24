<script setup lang="ts">
import { useStoryblok } from "@storyblok/vue";
const story = await useStoryblok(
  "vue",
  { version: "draft", resolve_relations: ["Article.author"] }
  // { resolveRelations: "Article.categories" }
);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
