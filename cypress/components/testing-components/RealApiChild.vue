<script setup>
import { useStoryblok } from '@storyblok/vue';

const story = await useStoryblok('vue/test', { version: 'draft' });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" cat="Jersey" />
</template>
