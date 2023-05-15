// import { mount } from "@vue/test-utils";
// import Component from "../index";
import { describe, test, expect } from "vitest";
import { StoryblokVue } from "..";
import { withSetup } from "./withSetup";

describe("@storyblok/vue", () => {
  test("install", () => {
    const [app] = withSetup(() => {});

    app.use(StoryblokVue, {});

    // Check if the plugin has been installed properly
    expect(app.component("StoryblokComponent")).toBeTruthy();
    expect(app._context.directives.editable).toBeTruthy();
  });
});
