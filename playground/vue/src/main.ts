import { apiPlugin, StoryblokVue } from '@storyblok/vue';
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router';
import Feature from './components/Feature.vue';
import Grid from './components/Grid.vue';
import IframeEmbed from './components/IframeEmbed.vue';
import Page from './components/Page.vue';
import Teaser from './components/Teaser.vue';

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: 'OurklwV5XsDJTIE1NJaD2wtt',
  use: [apiPlugin],
  bridge: true,
});

/* const components = import.meta.glob('./components/*.vue'); */

app.component('Page', Page);
app.component('Teaser', Teaser); // Comment to check fallback behavior
app.component('Grid', Grid);
app.component('Feature', Feature);
app.component('IframeEmbed', IframeEmbed);

app.use(router);

app.mount('#app');
