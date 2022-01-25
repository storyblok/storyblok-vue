import { mount } from "@cypress/vue";
import Demo from "@storyblok/vue-playground/App.vue";
import StoryblokVue from "@storyblok/vue";

describe("@storyblok/vue", () => {
  beforeEach(() => {
    mount(Demo, {
      extensions: {
        plugins: [StoryblokVue],
      },
    });
  });

  it("Gets data-blok-c and data-blok-uid attributes", () => {
    cy.get("[data-test=editable]")
      .should("have.attr", "data-blok-c")
      .and("equals", '{"id":12345,"uid":"fc34-uad1"}');

    cy.get("[data-test=editable]")
      .should("have.attr", "data-blok-uid")
      .and("equals", "12345-fc34-uad1");
  });

  it("Adds 'storyblok__outline' class to the element", () => {
    cy.get("[data-test=editable]").should("have.class", "storyblok__outline");
  });
});
