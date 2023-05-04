// import { mount } from "@vue/test-utils";
// import Component from "../index";

import { StoryblokVue /* useStoryblok */ } from "..";
/* import MockStoryblokClient from './mocks/storyblok-client'; */
import { withSetup } from "./withSetup";

describe("@storyblok/vue", () => {
  test("install", () => {
    const [app] = withSetup(() => {});

    app.use(StoryblokVue, {});

    // Check if the plugin has been installed properly
    expect(app.component("StoryblokComponent")).toBeTruthy();
    expect(app._context.directives.editable).toBeTruthy();
  });

  /* test("useStoryblok", async () => {

  }); */
});
