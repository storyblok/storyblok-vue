<script setup>
import { useStoryblok } from "@storyblok/vue";

const story = await useStoryblok("vue", { version: "draft" });
const storyTest = await useStoryblok("vue/test", { version: "draft" });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <StoryblokComponent v-if="storyTest" :blok="storyTest.content" />
</template>
