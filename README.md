<div align="center">
	<a href="https://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue"  align="center">
		<img src="https://a.storyblok.com/f/88751/1776x360/a7d027d26d/sb-vue.png"  alt="Storyblok Logo">
	</a>
	<h1 align="center">@storyblok/vue</h1>
  <p align="center">
    Vue plugin to make any <a href="http://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue" target="_blank">Storyblok</a> component editable with a simple <code>v-editable</code> directive.
  </p> 
  <br />
</div>

<p align="center">
  <a href="https://npmjs.com/package/@storyblok/vue">
    <img src="https://img.shields.io/npm/v/@storyblok/vue/latest.svg?style=flat-square" alt="Storyblok JS Client" />
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

**Note**: This plugin is for Vue 2. [Check out the @next version for Vue 3](https://github.com/storyblok/storyblok-vue/tree/next)

## 🚀 Usage

> If you are first-time user of the Storyblok, read the [Getting Started](https://www.storyblok.com/docs/guide/getting-started?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue) guide to get a project ready in less than 5 minutes.

### Installation

Install `@storyblok/vue`:

```bash
npm install --save-dev @storyblok/vue
// yarn add -D @storyblok/vue
```

Register it globally on your application (usually in `main.js`):

```js
import Vue from "vue";
import StoryblokVue from "@storyblok/vue";

Vue.use(StoryblokVue);
```

#### From a CDN

Install the file from the CDN:

```html
<script src="https://unpkg.com/@storyblok/vue"></script>
```

That's it, the plugin is auto-registered for you 😉.

### Getting Started

For every component you've defined in your Storyblok space, add the `v-editable` directive with the blok content:

```html
<template>
  <div v-editable="blok"><!-- ... --></div>
</template>
```

Where `blok` is the actual blok data coming from [Storblok's Content Delivery API](https://www.storyblok.com/docs/api/content-delivery?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-vue).

Check out the [playground](/../../tree/master/playground) for a full example.

### Compatibility

This plugin is for Vue 2. Thus, it supports the [same browsers as Vue 2](https://vuejs.org/v2/guide/installation.html#Compatibility-Note).

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

### License

This repository is published under the [MIT](./LICENSE) license.
