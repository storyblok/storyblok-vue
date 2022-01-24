import storyblokClient from "storyblok-js-client";

export const apiPlugin = (app, options = {}) => {
  const { apiOptions } = options;
  if (!apiOptions.accessToken) {
    console.error(
      "You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication"
    );
    return;
  }

  const storyblokApi = new storyblokClient(apiOptions);
  app.config.globalProperties.storyblokApi = storyblokApi;
  return { storyblokApi };
};
