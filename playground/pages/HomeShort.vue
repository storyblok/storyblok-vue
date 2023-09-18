<script setup>
import { useStoryblok } from "@storyblok/vue";

const version = import.meta.env.MODE === "production" ? "published" : "draft";

const story = await useStoryblok(
  "vue",
  { version, resolve_relations: ["Article.author"] }
  // { resolveRelations: "Article.categories" }
);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
