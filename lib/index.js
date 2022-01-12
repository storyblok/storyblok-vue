import { sbEditable, loadBridge } from "./modules/bridge";

const vEditableDirective = {
  beforeMount(el, binding) {
    if (binding.value) {
      const options = sbEditable(binding.value);
      el.setAttribute("data-blok-c", options["data-blok-c"]);
      el.setAttribute("data-blok-uid", options["data-blok-uid"]);
      el.classList.add("storyblok__outline");
    }
  },
};

export const useStoryblokBridge = (id, cb, options = {}) => {
  if (typeof window === "undefined") return;
  if (typeof window.storyblokRegisterEvent === "undefined") {
    console.error(
      "Storyblok Bridge is disabled. Please enable it to use it. Read https://github.com/storyblok/storyblok-vue"
    );
    return;
  }

  window.storyblokRegisterEvent(() => {
    const sbBridge = new window.StoryblokBridge(options);

    sbBridge.on(["input", "published", "change"], (event) => {
      if (event.action == "input" && event.story.id === id) cb(event.story);
      else window.location.reload();
    });
  });
};

export { default as apiPlugin } from "./modules/api";

export const StoryblokVue = {
  install(app, pluginOptions = {}) {
    const { use = [], bridge, accessToken, apiOptions = {} } = pluginOptions;

    apiOptions.accessToken = apiOptions.accessToken || accessToken;

    // 1. Load v-editable directive
    app.directive("editable", vEditableDirective);

    // 2. Initialize plugins
    const options = { bridge, apiOptions };
    use.forEach((pluginFactory) => pluginFactory(app, options));

    console.log(bridge);
    // 3. Load bridge
    if (bridge !== false) {
      loadBridge("https://app.storyblok.com/f/storyblok-v2-latest.js");
    }
  },
};
