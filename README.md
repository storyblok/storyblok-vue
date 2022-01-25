<div align="center">
	<a href="https://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue"  align="center">
		<img src="https://a.storyblok.com/f/88751/1776x360/a7d027d26d/sb-vue.png"  alt="Storyblok Logo">
	</a>
	<h1 align="center">@storyblok/vue</h1>
  <p align="center">
    The Vue plugin you need to interact with <a href="http://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue" target="_blank">Storyblok API</a> and enable the <a href="https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue" target="_blank">Real-time Visual Editing Experience</a>. 
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

**Note**: This plugin is for Vue 2. [Check out the docs for Vue 3 version](https://github.com/storyblok/storyblok-vue/tree/next).

## 🚀 Usage

> If you are first-time user of the Storyblok, read the [Getting Started](https://www.storyblok.com/docs/guide/getting-started?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) guide to get a project ready in less than 5 minutes.

### Installation

Install `@storyblok/vue`

```bash
npm install --save-dev @storyblok/vue
# yarn add -D @storyblok/vue
```

Register the plugin on your application (usually in `main.js`), add the `apiPlugin` and add the [access token](https://www.storyblok.com/docs/api/content-delivery#topics/authentication?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) of your Storyblok space:

```js
import Vue from "vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import App from "./App.vue";

Vue.use(StoryblokVue, {
  accessToken: "<your-token>",
  use: [apiPlugin],
});
```

That's it! All the features are enabled for you: the _Api Client_ for interacting with [Storyblok CDN API](https://www.storyblok.com/docs/api/content-delivery#topics/introduction?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue), and _Storyblok Bridge_ for [real-time visual editing experience](https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue).

> You can enable/disable some of these features if you don't need them, so you save some KB. Please read the "Features and API" section

#### Composition API

Install [@vue/composition-api](https://github.com/vuejs/composition-api) and register it in the application:

```js
// main.js
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
```

To use **script setup**, install [unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup). Depending on your setup, the configuration is different. For example, in Vite:

```js
// vite.config.js
import { createVuePlugin } from "vite-plugin-vue2";
import ScriptSetup from "unplugin-vue2-script-setup/vite";

export default {
  plugins: [createVuePlugin(), ScriptSetup()],
};
```

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

#### 1. Fetching Content

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
  const { data } = await storyblokApi.get("cdn/stories", { version: "draft" });
</script>
```

> Note: you can skip using `apiPlugin` if you prefer your own method or function to fetch your data.

#### 2. Listen to Storyblok Visual Editor events

Use `useStoryBridge` to get the new story every time is triggered a `change` event from the Visual Editor. You need to pass the story id as first param, and a callback function as second param to update the new story:

```html
<script setup>
  import { onMounted } from "vue";
  import { useStoryblokBridge, useStoryblokApi } from "@storyblok/vue";

  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories", { version: "draft" });
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

#### 3. Link your components to Storyblok Visual Editor

For every component you've defined in your Storyblok space, add the `v-editable` directive with the blok content:

```html
<template>
  <div v-editable="blok"><!-- ... --></div>
</template>
```

Where `blok` is the actual blok data coming from [Storblok's Content Delivery API](https://www.storyblok.com/docs/api/content-delivery?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue).

Check out the [playground](/../../tree/master/playground-vca) for a full example.

### Options API

You can use Options API as well, accessing the api client via `this.$storyblokApi`:

```js
import { useStoryblokBridge } from "@storyblok/vue";

export default {
  data: () => ({
    story: [],
  }),
  async created() {
    const { data } = this.$storyblokApi.get(/* ... */);
    this.story = data.story;
  },
  mounted() {
    useStoryblokBridge(this.story.id, (evStory) => (this.story = evStory));
  },
};
```

### Features and API

You can **choose the features to use** when you initialize the plugin. In that way, you can improve Web Performance by optimizing your page load and save some bytes.

#### Storyblok API

You can use an `apiOptions` object. This is passed down to the (storyblok-js-client config object](https://github.com/storyblok/storyblok-js-client#class-storyblok):

```js
app.use(StoryblokVue, {
  accessToken: "<your-token>",
  apiOptions: {
    //storyblok-js-client config object
    cache: { type: "memory" },
  },
  use: [apiPlugin],
});
```

If you prefer to use your own fetch method, just remove the `apiPlugin` and `storyblok-js-client` won't be added to your application.

```js
app.use(StoryblokVue);
```

#### Storyblok Bridge

You can conditionally load it by using the `bridge` option. Very useful if you want to disable it in production:

```js
app.use(StoryblokVue, {
  bridge: process.env.NODE_ENV !== "production",
});
```

Keep in mind you have still access to the raw `window.StoryblokBridge`:

```js
const sbBridge = new window.StoryblokBridge(options);

sbBridge.on(["input", "published", "change"], (event) => {
  // ...
});
```

### Compatibility

This plugin is for Vue 3. Thus, it supports the [same browsers as Vue 3](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0038-vue3-ie11-support.md). In short: all modern browsers, dropping IE support.

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
