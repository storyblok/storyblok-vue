<script setup>
import { onMounted, ref } from "vue";
import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue";

const version = import.meta.env.MODE === "production" ? "published" : "draft";

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/vue", {
  version,
});

const story = ref(null);
story.value = data.story;

onMounted(() => {
  useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
