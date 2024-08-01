<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  useStoryblokBridge,
  useStoryblokApi,
  SbRichText,
  SbRichTextDocumentNode,
  BlockTypes,
} from "@storyblok/vue";

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

const doc: SbRichTextDocumentNode = {
  [BlockTypes.DOCUMENT]: "doc",
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
};
</script>

<template>
  <SbRichText v-if="doc" :doc="doc" />
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
