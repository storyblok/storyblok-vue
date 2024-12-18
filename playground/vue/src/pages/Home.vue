<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStoryblokApi, useStoryblokBridge } from '@storyblok/vue';

const version = import.meta.env.MODE === 'production' ? 'published' : 'draft';

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/vue', {
  version,
});

const story = ref(null);
story.value = data.story;
// eslint-disable-next-line no-console
console.log(story.value);

onMounted(() => {
  if (!story.value) {
    return;
  }
  useStoryblokBridge(story.value.id, evStory => (story.value = evStory));
});

/* const doc = {
  type: "doc",
  content: [
    {
      type: "bullet_list",
      content: [
        {
          type: "list_item",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  text: "Bull",
                  type: "text",
                  marks: [{ type: "italic" }],
                },
                {
                  text: "et 1",
                  type: "text",
                  marks: [{ type: "bold" }],
                },
              ],
            },
          ],
        },
        {
          type: "list_item",
          content: [
            {
              type: "paragraph",
              content: [{ text: "Bullet 2", type: "text" }],
            },
          ],
        },
        {
          type: "list_item",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  text: "Bullet 3",
                  type: "text",
                  marks: [{ type: "styled", attrs: { class: "css-class" } }],
                },
              ],
            },
          ],
        },
        { type: "list_item", content: [{ type: "paragraph" }] },
      ],
    },
  ],
}; */
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <h2>Richtext</h2>
</template>
