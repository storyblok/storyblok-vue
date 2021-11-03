<template>
  <div id="app">
    <h2>Vue 2</h2>
    <div data-test="editable" v-editable="blok.content">
      Open DevTools and inspect this &lt;div&gt;. You should see a
      <i>data-blok-c</i> and <i>data-blok-uid</i> attrs.
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    blok: {
      content: {
        _editable: `<!--#storyblok#{ "id": 12345, "uid": "fc34-uad1"}-->`,
      },
    },
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
