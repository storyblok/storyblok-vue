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

> **Note**
> This plugin is for Vue 3. [Check out the docs for Vue 2 version](https://github.com/storyblok/storyblok-vue-2).

## Kickstart a new project

Are you eager to dive into coding? **[Follow these steps to kickstart a new project with Storyblok and Vue](https://www.storyblok.com/technologies?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue#vue)**, and get started in just a few minutes!

## 5-minute Tutorial

Are you looking for a hands-on, step-by-step tutorial? The **[Vue 5-minute Tutorial](https://www.storyblok.com/tp/add-a-headless-CMS-to-vuejs-in-5-minutes?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue)** has you covered! It provides comprehensive instructions on how to set up a Storyblok space and connect it to your Vue project.

## Installation

Install `@storyblok/vue`

```bash
npm install @storyblok/vue
# yarn add @storyblok/vue
```

> **Warning**
> This SDK uses the Fetch API under the hood. If your environment doesn't support it, you need to install a polyfill like [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch). More info on [storyblok-js-client docs](https://github.com/storyblok/storyblok-js-client#fetch-use-polyfill-if-needed---version-5).

Register the plugin on your application (usually in `main.js`), add the `apiPlugin` and add the [access token](https://www.storyblok.com/docs/api/content-delivery/v2/getting-started/authentication?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) of your Storyblok space:

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

That's it! All the features are enabled for you: the _Api Client_ for interacting with [Storyblok CDN API](https://www.storyblok.com/docs/api/content-delivery/v2/getting-started/introduction?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue), and _Storyblok Bridge_ for [real-time visual editing experience](https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue).

> **Note**
> You can enable/disable some of these features if you don't need them, so you save some KB. Please read the "Features and API" section.

#### From a CDN

Install the file from the CDN and access the methods via `window.storyblokVue`:

```html
<script src="https://unpkg.com/@storyblok/vue"></script>
```

## Getting started

`@storyblok/vue` does three actions when you initialize it:

- Provides a `storyblokApi` object in your app, which is an instance of [storyblok-js-client](https://github.com/storyblok/storyblok-js-client)
- Loads [Storyblok Bridge](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) for real-time visual updates
- Provides a `v-editable` directive to link editable components to the Storyblok Visual Editor

### Short Form

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

The simplest way is by using the `useStoryblok` one-liner composable. Where you need to pass as first parameter the `slug`, while the second and third parameters, `apiOptions` and `bridgeOptions` respectively, are optional:

> **Note**
> The `resolveRelations` and `resolveLinks` from `bridgeOptions` can be excluded if you're already defining them as `resolve_relations` and `resolve_links` in `apiOptions`, we will add them by default. But you will always be able to overwrite them.

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

Check the available [apiOptions](https://www.storyblok.com/docs/api/content-delivery/v2/stories/retrieve-a-single-story?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) in our API docs and [bridgeOptions](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) passed to the Storyblok Bridge.

### Long Form

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
  const { data } = await storyblokApi.get(
    "cdn/stories/home",
    { version: "draft", resolve_relations: "Article.author" } // API Options
  );
</script>
```

> **Note**
> You can skip using `apiPlugin` if you prefer your own method or function to fetch your data.

#### 2. Listen to Storyblok Visual Editor events

Use `useStoryBridge` to get the new story every time is triggered a `change` event from the Visual Editor. You need to pass the story id as first param, and a callback function as second param to update the new story:

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

You can pass [Bridge options](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) as a third parameter as well:

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

#### 3. Link your components to Storyblok Visual Editor

For every component you've defined in your Storyblok space, add the `v-editable` directive with the blok content:

```html
<template>
  <div v-editable="blok"><!-- ... --></div>
</template>
```

Where `blok` is the actual blok data coming from [Storblok's Content Delivery API](https://www.storyblok.com/docs/api/content-delivery?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue).

Check out the [playground](/../../tree/next/playground) for a full example.

## Features and API

You can **choose the features to use** when you initialize the plugin. In that way, you can improve Web Performance by optimizing your page load and save some bytes.

### useStoryblok(pathToStory, apiOptions = {}, bridgeOptions = {})

This example of `useStoryblok`:

```html
<script setup>
  import { useStoryblok } from "@storyblok/vue";
  const story = await useStoryblok(
    "blog",
    { version: "draft", resolve_relations: "Article.author" }, // API Options
    { resolveRelations: ["Article.author"], resolveLinks: "url" } // Bridge Options
  );
</script>
```

Is equivalent to the following, using `useStoryblokBridge` and `useStoryblokApi`:

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

Check the available [apiOptions](https://www.storyblok.com/docs/api/content-delivery/v2/stories/retrieve-a-single-story?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) (passed to `storyblok-js-client`) and [bridgeOptions](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) (passed to the Storyblok Bridge).

### Storyblok API

You can use an `apiOptions` object. This is passed down to the [storyblok-js-client config object](https://github.com/storyblok/storyblok-js-client#class-storyblok).

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

## Region parameter

Possible values:

- `eu` (default): For spaces created in the EU
- `us`: For spaces created in the US
- `ap`: For spaces created in Australia
- `ca`: For spaces created in Canada
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

> **Important**
> For spaces created in the United States or China, the `region` parameter **must** be specified.

## Storyblok Bridge

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

## Using Fallback components

By default, `@storyblok/vue` show a `console.error` if a component is not implemented. Setting `enableFallbackComponent` to `true` bypasses that behavior, rendering a fallback component in the frontend instead.

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

## Rendering Rich Text

You can render rich text fields by using the `StoryblokRichText` component:

```html
<script setup>
  import { StoryblokRichText } from "@storyblok/vue";
</script>

<template>
  <StoryblokRichText :doc="blok.articleContent" />
</template>
```

Or you can have more control by using the `useStoryblokRichText` composable:

```html
<script setup>
  import { useStoryblokRichText } from "@storyblok/vue";
  const { render } = useStoryblokRichText({
    // options like resolvers
  });

  const root = () => render(blok.articleContent);
</script>

<template>
  <root />
</template>
```

For more incredible options you can pass to the `useStoryblokRichText`, please consult the [Full options](https://github.com/storyblok/richtext?tab=readme-ov-file#options) documentation.

### Overriding the default resolvers

You can override the default resolvers by passing a `resolver` prop to the `StoryblokRichText` component, for example, to use vue-router links or add a custom codeblok component: :

```html
<script setup>
  import { type VNode, h } from "vue";
  import { StoryblokRichText, BlockTypes, MarkTypes, type StoryblokRichTextNode } from "@storyblok/vue";
  import { RouterLink } from "vue-router";
  import CodeBlok from "./components/CodeBlok.vue";

  const resolvers = {
    // RouterLink example:
    [MarkTypes.LINK]: (node: StoryblokRichTextNode<VNode>) => {
      return node.attrs?.linktype === 'STORY'
        ? h(RouterLink, {
          to: node.attrs?.href,
          target: node.attrs?.target,
        }, node.text)
        : h('a', {
          href: node.attrs?.href,
          target: node.attrs?.target,
        }, node.text)
    },
    // Custom code block component example:
    [BlockTypes.CODE_BLOCK]: (node: Node) => {
      return h(CodeBlock, {
        class: node?.attrs?.class,
      }, node.children)
    },
  }
</script>

<template>
  <StoryblokRichText :doc="blok.articleContent" :resolvers="resolvers" />
</template>
```

If you want to use the `useStoryblokRichText` composable, you can pass the `resolvers` via the options object:

```html
<script setup>
   import { type VNode, h } from "vue";
  import { useStoryblokRichText, BlockTypes, MarkTypes, type StoryblokRichTextNode } from "@storyblok/vue";
  import { RouterLink } from "vue-router";

  const resolvers = {
    // RouterLink example:
    [MarkTypes.LINK]: (node: StoryblokRichTextNode<VNode>) => {
      return node.attrs?.linktype === 'STORY'
        ? h(RouterLink, {
          to: node.attrs?.href,
          target: node.attrs?.target,
        }, node.text)
        : h('a', {
          href: node.attrs?.href,
          target: node.attrs?.target,
        }, node.text)
    },
  }

  const { render } = useStoryblokRichText({
    resolvers,
  })
  const root = () => render(blok.articleContent);
</script>

<template>
  <root />
</template>
```

### Legacy Rich Text Resolver

> [!WARNING]  
> The legacy `richTextResolver` is soon to be deprecated. We recommend migrating to the new approach described above instead.

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
// Check the base RichTextSchema source here https://github.com/storyblok/storyblok-js-client/blob/master/src/schema.js

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

## Compatibility

This plugin is for Vue 3. Thus, it supports the [same browsers as Vue 3](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0038-vue3-ie11-support.md). In short: all modern browsers, dropping IE support.

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

Please see our [contributing guidelines](https://github.com/storyblok/.github/blob/master/contributing.md) and our [code of conduct](https://www.storyblok.com/trust-center?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue#code-of-conduct).
This project use [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for generate new versions by using commit messages and we use the Angular Convention to naming the commits. Check [this question](https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-change-the-type-of-commits-that-trigger-a-release) about it in semantic-release FAQ.
