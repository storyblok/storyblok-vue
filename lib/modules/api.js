import storyblokClient from "storyblok-js-client";

export default (app, options = {}) => {
  const { api = {} } = options;
  if (!api.accessToken) {
    console.error(
      "You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication"
    );
    return;
  }

  const clientInstance = new storyblokClient(api);
  app.provide("storyblokApi", clientInstance);
  app.config.globalProperties.storyblokApi = clientInstance;
};
