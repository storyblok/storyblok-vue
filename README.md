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

**Note**: This plugin is for Vue 3. [Check out the docs for Vue 2 version](https://github.com/storyblok/storyblok-vue-2).

## 🚀 Usage

Check out the **[Live Demo](https://stackblitz.com/edit/vue-sdk-demo?file=src/main.js&terminal=dev)** on Stackblitz!

> If you are first-time user of the Storyblok, read the [Getting Started](https://www.storyblok.com/docs/guide/getting-started?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) guide to get a project ready in less than 5 minutes.

### Installation

Install `@storyblok/vue`

```bash
npm install @storyblok/vue
# yarn add @storyblok/vue
```

> ⚠️ This SDK uses the Fetch API under the hood. If your environment doesn't support it, you need to install a polyfill like [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch). More info on [storyblok-js-client docs](https://github.com/storyblok/storyblok-js-client#fetch-use-polyfill-if-needed---version-5).

Register the plugin on your application (usually in `main.js`), add the `apiPlugin` and add the [access token](https://www.storyblok.com/docs/api/content-delivery#topics/authentication?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) of your Storyblok space:

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

That's it! All the features are enabled for you: the _Api Client_ for interacting with [Storyblok CDN API](https://www.storyblok.com/docs/api/content-delivery#topics/introduction?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue), and _Storyblok Bridge_ for [real-time visual editing experience](https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue).

> You can enable/disable some of these features if you don't need them, so you save some KB. Please read the "Features and API" section.

#### From a CDN

Install the file from the CDN and access the methods via `window.storyblokVue`:

```html
<script src="https://unpkg.com/@storyblok/vue"></script>
```

### Getting started

`@storyblok/vue` does three actions when you initialize it:

- Provides a `storyblokApi` object in your app, which is an instance of [storyblok-js-client](https://github.com/storyblok/storyblok-js-client)
- Loads [Storyblok Bridge](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) for real-time visual updates
- Provides a `v-editable` directive to link editable components to the Storyblok Visual Editor

#### Short Form

Load globally the Vue components you want to link to Storyblok in your _main.js_ file:

```js
import Page from "./components/Page.vue";
import Teaser from "./components/Teaser.vue";

app.use(StoryblokVue, {
  accessToken: "<your-token>",
  use: [apiPlugin],
});

app.component("Page", Page);
app.component("Teaser", Teaser);
```

Use `useStoryblok` in your pages to fetch Storyblok stories and listen to real-time updates, as well as `StoryblokComponent` to render any component you've loaded before, like in this example:

```html
<script setup>
  import { useStoryblok } from "@storyblok/vue";
  const story = await useStoryblok("path-to-story", { version: "draft" });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
```

#### Rendering Rich Text

You can easily render rich text by using the `renderRichText` function that comes with `@storyblok/vue` and a Vue computed property:

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

You can set a **custom Schema and component resolver globally** at init time by using the `richText` init option:

```js
import { RichTextSchema, StoryblokVue } from "@storyblok/vue";
import cloneDeep from "clone-deep";

const mySchema = cloneDeep(RichTextSchema); // you can make a copy of the default RichTextSchema
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

You can also set a **custom Schema and component resolver only once** by passing the options as the second parameter to `renderRichText` function:

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

#### Long Form

##### 1. Fetching Content

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
  const { data } = await storyblokApi.get("cdn/stories/home", { version: "draft" });
</script>
```

> Note: you can skip using `apiPlugin` if you prefer your own method or function to fetch your data.

##### 2. Listen to Storyblok Visual Editor events

Use `useStoryBridge` to get the new story every time is triggered a `change` event from the Visual Editor. You need to pass the story id as first param, and a callback function as second param to update the new story:

```html
<script setup>
  import { onMounted } from "vue";
  import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue";

  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", { version: "draft" });
  const state = reactive({ story: data.story });

  onMounted(() => {
    useStoryblokBridge(state.story.id, story => (state.story = story));
  });
</script>
```

You can pass [Bridge options](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) as a third parameter as well:

```js
useStoryblokBridge(state.story.id, (story) => (state.story = story), {
  resolveRelations: ["Article.author"],
});
```

##### 3. Link your components to Storyblok Visual Editor

For every component you've defined in your Storyblok space, add the `v-editable` directive with the blok content:

```html
<template>
  <div v-editable="blok"><!-- ... --></div>
</template>
```

Where `blok` is the actual blok data coming from [Storblok's Content Delivery API](https://www.storyblok.com/docs/api/content-delivery?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue).

Check out the [playground](/../../tree/next/playground) for a full example.

### Features and API

You can **choose the features to use** when you initialize the plugin. In that way, you can improve Web Performance by optimizing your page load and save some bytes.

#### useStoryblok(pathToStory, apiOptions = {}, bridgeOptions = {})

This example of `useStoryblok`:

```html
<script setup>
  import { useStoryblok } from "@storyblok/vue";
  const story = await useStoryblok("home", { version: "draft" });
</script>
```

Is equivalent to the following, using `useStoryblokBridge` and `useStoryblokApi`:

```html
<script setup>
  import { onMounted } from "vue";
  import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue";

  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", { version: "draft" });
  const state = reactive({ story: data.story });

  onMounted(() => {
    useStoryblokBridge(state.story.id, story => (state.story = story));
  });
</script>
```

#### Storyblok API

You can use an `apiOptions` object. This is passed down to the (storyblok-js-client config object](https://github.com/storyblok/storyblok-js-client#class-storyblok).

```js
app.use(StoryblokVue, {
  accessToken: "<your-token>",
  apiOptions: {
    // storyblok-js-client config object
    cache: { type: "memory" },
  },
  use: [apiPlugin],
});
```

If you prefer to use your own fetch method, just remove the `apiPlugin` and `storyblok-js-client` won't be added to your application.

```js
app.use(StoryblokVue);
```

#### Region parameter

Possible values:

- `eu` (default): For spaces created in the EU
- `us`: For spaces created in the US
- `cn`: For spaces created in China

Full example for a space created in the US:

```js
app.use(StoryblokVue, {
  accessToken: "<your-token>",
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
});
```

> Note: For spaces created in the United States or China, the `region` parameter **must** be specified.

#### Storyblok Bridge

You can conditionally load it by using the `bridge` option. Very useful if you want to disable it in production:

```js
app.use(StoryblokVue, {
  bridge: process.env.NODE_ENV !== "production",
});
```

In case you need it, you have still access to the raw `window.StoryblokBridge`:

```js
const sbBridge = new window.StoryblokBridge(options);

sbBridge.on(["input", "published", "change"], (event) => {
  // ...
});
```

### Compatibility

This plugin is for Vue 3. Thus, it supports the [same browsers as Vue 3](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0038-vue3-ie11-support.md). In short: all modern browsers, dropping IE support.

## The Storyblok JavaScript SDK Ecosystem

![A visual representation of the Storyblok JavaScript SDK Ecosystem](https://a.storyblok.com/f/88751/2400x1350/be4a4a4180/sdk-ecosystem.png/m/1200x0)

## 🔗 Related Links

- **[Add a headless CMS to Vue.js in 5 minutes](https://www.storyblok.com/tp/add-a-headless-CMS-to-vuejs-in-5-minutes?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue)**: Quick-start guide on getting up and running with Storyblok and Vue.
- **[Storyblok & Vue.js on GitHub](https://github.com/search?q=org%3Astoryblok+topic%3Avue)**: Check all of our Vue.js open source repos.
- **[Storyblok CLI](https://github.com/storyblok/storyblok)**: A simple CLI for scaffolding Storyblok projects and fieldtypes.

## ℹ️ More Resources

### Support

- Bugs or Feature Requests? [Submit an issue](/../../issues/new).
- Do you have questions about Storyblok or you need help? [Join our Discord Community](https://discord.gg/jKrbAMz).

### Contributing

Please see our [contributing guidelines](https://github.com/storyblok/.github/blob/master/contributing.md) and our [code of conduct](https://www.storyblok.com/trust-center#code-of-conduct?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue).
This project use [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for generate new versions by using commit messages and we use the Angular Convention to naming the commits. Check [this question](https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-change-the-type-of-commits-that-trigger-a-release) about it in semantic-release FAQ.
