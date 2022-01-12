import storyblokClient from "storyblok-js-client";

export default (app, options = {}) => {
  const { apiOptions } = options;
  if (!apiOptions.accessToken) {
    console.error(
      "You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication"
    );
    return;
  }

  const clientInstance = new storyblokClient(apiOptions);
  app.provide("storyblokApi", clientInstance);
  app.config.globalProperties.storyblokApi = clientInstance;
};
