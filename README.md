# Vue Storyblok plugin

Make any element editable with the Vue Storyblok directive. Just add ```v-editable="content"``` to a html element.

## Compatibility

Requires Vue 2.0

## Install

```
npm install storyblok-vue --save-dev
```

## Usage

In your entry point:

```
import StoryblokVue from 'storyblok-vue'

Vue.use(StoryblokVue)
```

In the template:
```
<div v-editable="demo">
  Test
</div>
```

See the jsfiddle to learn how to load the data from Storyblok:  
https://jsfiddle.net/delooks/6tnttqvy/

## License

[MIT](http://opensource.org/licenses/MIT)
