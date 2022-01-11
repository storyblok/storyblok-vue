import { mount } from "@cypress/vue";
import Demo from "@storyblok/vue-playground/App.vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import { mergeDeep } from "../../utils";

const prepare = (opts = {}) => {
  mount(Demo, {
    global: {
      plugins: [
        [
          StoryblokVue,
          mergeDeep(opts, {
            options: { api: { accessToken: "wANpEQEsMYGOwLxwXQ76Ggtt" } },
          }),
        ],
      ],
    },
  });
};

describe("@storyblok/vue", () => {
  describe("v-editable directive", () => {
    beforeEach(() => {
      prepare();
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

  describe("Bridge", () => {
    it("Is loaded by default", () => {
      prepare();
      cy.get("#storyblok-javascript-bridge").should("exist");
    });

    it("Is not loaded if options.bridge: false", () => {
      prepare({ options: { bridge: false } });
      cy.get("#storyblok-javascript-bridge").should("not.exist");
    });
  });

  describe("Api", () => {
    it("Is not loaded by default", () => {
      prepare();
      cy.get("[data-test=api]").should("have.text", "false");
    });

    it("Is loaded correctly when using the apiPlugin", () => {
      prepare({ use: [apiPlugin] });
      cy.get("[data-test=api]").should("have.text", "true");
    });
  });
});
