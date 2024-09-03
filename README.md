<div align="center">
	<a href="https://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue"  align="center">
		<img src="https://a.storyblok.com/f/88751/1776x360/a7d027d26d/sb-vue.png"  alt="Storyblok Logo">
	</a>
	<h1 align="center">@storyblok/vue</h1>
  <p align="center">
    The Vue SDK you need to interact with <a href="http://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue" target="_blank">Storyblok API</a> and enable the <a href="https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue" target="_blank">Real-time Visual Editing Experience</a>. 
  </p>
  <br />
</div>

<p align="center">
  <a href="https://npmjs.com/package/@storyblok/vue">
    <img src="https://img.shields.io/npm/v/@storyblok/vue/latest.svg?style=flat-square" alt="Storyblok Vue" />
  </a>
  <a href="https://npmjs.com/package/@storyblok/vue" rel="nofollow">
    <img src="https://img.shields.io/npm/dt/@storyblok/vue.svg?style=flat-square" alt="npm">
  </a>
</p>

<p align="center">
  <a href="https://discord.gg/jKrbAMz">
   <img src="https://img.shields.io/discord/700316478792138842?label=Join%20Our%20Discord%20Community&style=appveyor&logo=discord&color=09b3af">
   </a>
  <a href="https://twitter.com/intent/follow?screen_name=storyblok">
    <img src="https://img.shields.io/badge/Follow-%40storyblok-09b3af?style=appveyor&logo=twitter" alt="Follow @Storyblok" />
  </a>
  <a href="https://app.storyblok.com/#!/signup?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue">
    <img src="https://img.shields.io/badge/Try%20Storyblok-Free-09b3af?style=appveyor&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHqADAAQAAAABAAAAHgAAAADpiRU/AAACRElEQVRIDWNgGGmAEd3D3Js3LPrP8D8WXZwSPiMjw6qvPoHhyGYwIXNAbGpbCjbzP0MYuj0YFqMroBV/wCxmIeSju64eDNzMBJUxvP/9i2Hnq5cM1devMnz984eQsQwETeRhYWHgIcJiXqC6VHlFBjUeXgav40cIWkz1oLYXFmGwFBImaDFBHyObcOzdW4aSq5eRhRiE2dgYlpuYoYSKJi8vw3GgWnyAJIs/AuPu4scPGObd/fqVQZ+PHy7+6udPOBsXgySLDfn5GRYYmaKYJcXBgWLpsx8/GPa8foWiBhuHJIsl2DkYQqWksZkDFgP5PObcKYYff//iVAOTIDlx/QPqRMb/YSYBaWlOToZIaVkGZmAZSQiQ5OPtwHwacuo4iplMQEu6tXUZMhSUGDiYmBjylFQYvv/7x9B04xqKOnQOyT5GN+Df//8M59ASXKyMHLoyDD5JPtbj42OYrm+EYgg70JfuYuIoYmLs7AwMjIzA+uY/zjAnyWJpDk6GOFnCvrn86SOwmsNtKciVFAc1ileBHFDC67lzG10Yg0+SjzF0ownsf/OaofvOLYaDQJoQIGix94ljv1gIZI8Pv38zPvj2lQWYf3HGKbpDCFp85v07NnRN1OBTPY6JdRSGxcCw2k6sZuLVMZ5AV4s1TozPnGGFKbz+/PE7IJsHmC//MDMyhXBw8e6FyRFLv3Z0/IKuFqvFyIqAzd1PwBzJw8jAGPfVx38JshwlbIygxmYY43/GQmpais0ODDHuzevLMARHBcgIAQAbOJHZW0/EyQAAAABJRU5ErkJggg==" alt="Follow @Storyblok" />
  </a>
</p>

## 5-minute Tutorial
Are you looking for a hands-on, step-by-step tutorial? The **[Vue 5-minute Tutorial](https://www.storyblok.com/tp/add-a-headless-CMS-to-vuejs-in-5-minutes?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue)** has you covered! It provides comprehensive instructions on how to set up a Storyblok space and connect it to your Vue project.

## Installation

Install `@storyblok/vue`:

```bash
npm install @storyblok/vue
# yarn add @storyblok/vue
```

> [!NOTE]
> This plugin is for Vue 3. See the [Vue 2 version](https://github.com/storyblok/storyblok-vue-2).
>
> This SDK uses the Fetch API under the hood. If your environment doesn't support it, you need to install a polyfill like [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch). More info on [storyblok-js-client docs](https://github.com/storyblok/storyblok-js-client#fetch-use-polyfill-if-needed---version-5).

Register the plugin in your application (usually in `main.js`), add the `apiPlugin`, and add the [access token](https://www.storyblok.com/docs/api/content-delivery#topics/authentication?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) for your Storyblok space:

```js
import { createApp } from "vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import App from "./App.vue";

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: "YOUR_ACCESS_TOKEN",
  use: [apiPlugin],
});
```

> [!TIP]
> To install the file from the CDN and access the methods via `window.storyblokVue`:
>
> ```html
> <script src="https://unpkg.com/@storyblok/vue"></script>
> ```

`@storyblok/vue` performs three actions when you initialize it:

- Provides a `storyblokApi` object in your app, which is an instance of [storyblok-js-client](https://github.com/storyblok/storyblok-js-client)
- Loads [Storyblok Bridge](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) for real-time visual updates
- Provides a `v-editable` directive to link editable components to the Storyblok Visual Editor

Finally, load components in your app to render your Storyblok content:


```js
// main.js

import Page from "./components/Page.vue";
import Teaser from "./components/Teaser.vue";

app.use(StoryblokVue, {
  accessToken: "<your-token>",
  use: [apiPlugin],
});

app.component("Page", Page);
app.component("Teaser", Teaser);
```

For every component you've defined in your Storyblok space, add the `v-editable` directive with the blok content:

```html
<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div v-editable="blok">
    <!-- ... -->
  </div>
</template>

```

Where `blok` is the actual blok data coming from [Storblok's Content Delivery API](https://www.storyblok.com/docs/api/content-delivery?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue).

Check out the [playground](/../../tree/next/playground) for a full example.

## Exports

### `StoryblokVue`

> [!CAUTION]
> EXPLAIN THIS EXPORT, INCLUDING CONFIGURATION OPTIONS.

Configuration options:
- accessToken
- apiOptions
- richText
- use
- bridge
- enableFallbackComponent
- customFallbackComponent

> [!IMPORTANT]
> For spaces created in the United States or China, the `apiOptions.region` parameter **must** be specified.

You can conditionally load the Storyblok Bridge by using the `bridge` option. This can be useful if you want to disable it in production:

```js
app.use(StoryblokVue, {
  bridge: process.env.NODE_ENV !== "production",
});
```

By default, `@storyblok/vue` shows a `console.error` if a component is not implemented. Setting `enableFallbackComponent` to `true` bypasses that behavior, rendering a fallback component in the frontend instead.

```js
app.use(StoryblokVue, {
  // ...
  enableFallbackComponent: true,
});
```

You can also create and use a custom fallback component by setting `customFallbackComponent: "MyCustomFallback"`.

```js
import MyCustomFallback from "./components/MyCustomFallback.vue";

app.use(StoryblokVue, {
  // ...
  enableFallbackComponent: true,
  customFallbackComponent: "MyCustomFallback",
});

app.component("MyCustomFallback", MyCustomFallback);
```

### `apiPlugin`

> [!CAUTION]
> EXPLAIN THIS EXPORT

If you prefer to use your own fetch method, just remove the `apiPlugin` and `storyblok-js-client` won't be added to your application.


### `useStoryblok(pathToStory, apiOptions = {}, bridgeOptions = {})`

To render a page, use the `useStoryblok` one-liner composable. Pass the `slug` as the first parameter, while the second and third parameters, `apiOptions` and `bridgeOptions` respectively, are optional:

```html
<script setup>
  import { useStoryblok } from "@storyblok/vue";
  const { story, fetchState } = useStoryblok(
    "path-to-story",
    { version: "draft", resolve_relations: "Article.author" }, // API Options
    { resolveRelations: ["Article.author"], resolveLinks: "url" } // Bridge Options
  );
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
```

This is equivalent to using `useStoryblokBridge` and `useStoryblokApi`.

> [!NOTE]
> The `resolveRelations` and `resolveLinks` from `bridgeOptions` can be excluded if you're already defining them as `resolve_relations` and `resolve_links` in `apiOptions`.

See the available [apiOptions](https://www.storyblok.com/docs/api/content-delivery/v2#core-resources/stories/retrieve-one-story?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) in our API docs and [bridgeOptions](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) passed to the Storyblok Bridge.

> [!CAUTION]
>  INCLUDE PARAMETERS FOR ALL FUNCTION DEFINITIONS

### useStoryblokApi(.....)

> [!CAUTION]
> EXPLAIN THIS FUNCTION

```html
<script setup>
  import { onMounted } from "vue";
  import { useStoryblokApi } from "@storyblok/vue";

  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get(
    "cdn/stories/blog",
    { version: "draft", resolve_relations: "Article.author" }, // API Options
  );
</script>
```

### useStoryblokBridge(......)

> [!CAUTION]
> EXPLAIN THIS FUNCTION

```html
<script setup>
  import { onMounted } from "vue";
  import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue";

  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get(
    "cdn/stories/blog",
    { version: "draft", resolve_relations: "Article.author" }, // API Options
  );
  const state = reactive({ story: data.story });

  onMounted(() => {
    useStoryblokBridge(
      state.story.id,
      story => (state.story = story),
      { resolveRelations: ["Article.author"], resolveLinks: "url" } // Bridge Options
    );
  });
</script>
```

In case you need it, you have still access to the raw `window.StoryblokBridge`:

```js
const sbBridge = new window.StoryblokBridge(options);

sbBridge.on(["input", "published", "change"], (event) => {
  // ...
});
```

### `renderRichText(.....)`

You can render rich text using the `renderRichText` function that comes with `@storyblok/vue` along with a Vue computed property:

```html
<template>
  <div v-html="articleContent"></div>
</template>

<script setup>
  import { computed } from "vue";
  import { renderRichText } from "@storyblok/vue";

  const articleContent = computed(() => renderRichText(blok.articleContent));
</script>
```

You can set a custom schema and component resolver globally at init time by using the `richText` init option:

```js
import { RichTextSchema, StoryblokVue } from "@storyblok/vue";
import cloneDeep from "clone-deep";

const mySchema = cloneDeep(RichTextSchema); // Make a copy of the default RichTextSchema
// ... and edit the nodes and marks, or add your own.
// Check the base RichTextSchema source here https://github.com/storyblok/storyblok-js-client/blob/master/source/schema.js

app.use(StoryblokVue, {
  accessToken: "YOUR_ACCESS_TOKEN",
  use: [apiPlugin],
  richText: {
    schema: mySchema,
    resolver: (component, blok) => {
      switch (component) {
        case "my-custom-component":
          return `<div class="my-component-class">${blok.text}</div>`;
        default:
          return "Resolver not defined";
      }
    },
  },
});
```

You can also set a custom schema and component resolver for a specific instance by passing the options as the second parameter to `renderRichText` function:

```js
import { renderRichText } from "@storyblok/vue";

renderRichText(blok.richTextField, {
  schema: mySchema,
  resolver: (component, blok) => {
    switch (component) {
      case "my-custom-component":
        return `<div class="my-component-class">${blok.text}</div>`;
        break;
      default:
        return `Component ${component} not found`;
    }
  },
});
```

### `useStoryblokApi(......)` 

Inject `storyblokApi` when using Composition API:

```html
<template>
  <div>
    <p v-for="story in stories" :key="story.id">{{ story.name }}</p>
  </div>
</template>

<script setup>
  import { useStoryblokApi } from "@storyblok/vue";

  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get(
    "cdn/stories/home",
    { version: "draft", resolve_relations: "Article.author" } // API Options
  );
</script>
```

> [!NOTE]
> You can skip using `apiPlugin` if you prefer your own method or function to fetch your data.

### `useStoryblokBridge(......)`

Use `useStoryblokBridge` to get the update data every time a `change` event is triggered from the Visual Editor. Pass the story `id` as the first param, and a callback function as the second param:

```html
<script setup>
  import { onMounted } from "vue";
  import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue";

  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get(
    "cdn/stories/home",
    { version: "draft", resolve_relations: "Article.author" } // API Options
  );
  const state = reactive({ story: data.story });

  onMounted(() => {
    useStoryblokBridge(state.story.id, story => (state.story = story));
  });
</script>
```

You can pass [bridge options](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) as a third parameter as well:

```js
useStoryblokBridge(
  state.story.id,
  (story) => (state.story = story),
  {
    resolveRelations: ["Article.author"],
    resolveLinks: "url",
  } // Bridge Options
);
```

## The Storyblok JavaScript SDK Ecosystem

![A visual representation of the Storyblok JavaScript SDK Ecosystem](https://a.storyblok.com/f/88751/2400x1350/be4a4a4180/sdk-ecosystem.png/m/1200x0)

## Further Resources

- [Quick Start](https://www.storyblok.com/technologies?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue)
- [API Documentation](https://www.storyblok.com/docs/api?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue)
- [Developer Tutorials](https://www.storyblok.com/tutorials?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue)
- [Developer Guides](https://www.storyblok.com/docs/guide/introduction?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue)
- [FAQs](https://www.storyblok.com/faqs?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue)

## Support

- Bugs or Feature Requests? [Submit an issue](/../../issues/new).
- Do you have questions about Storyblok or you need help? [Join our Discord Community](https://discord.gg/jKrbAMz).

## Contributing

Please see our [contributing guidelines](https://github.com/storyblok/.github/blob/master/contributing.md) and our [code of conduct](https://www.storyblok.com/trust-center#code-of-conduct?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue).
This project use [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for generate new versions by using commit messages and we use the Angular Convention to naming the commits. Check [this question](https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-change-the-type-of-commits-that-trigger-a-release) about it in semantic-release FAQ.
