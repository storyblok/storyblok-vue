import { mount } from "@cypress/vue";
import Demo from "@storyblok/vue-playground/App.vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";

const prepare = (opts = {}) => {
  mount(Demo, {
    extensions: {
      plugins: [
        [
          StoryblokVue,
          {
            accessToken: "wANpEQEsMYGOwLxwXQ76Ggtt",
            ...opts,
          },
        ],
      ],
    },
  });
};

describe("@storyblok/vue", () => {
  beforeEach(() => {
    cy.spy(window.console, "log").as("log");
    cy.spy(window.console, "error").as("error");
    delete window.storyblokRegisterEvent;
    document.getElementById("storyblok-javascript-bridge")?.remove();
  });

  describe("v-editable directive", () => {
    beforeEach(() => prepare());

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

    it("Is not loaded if options.bridge: false and errors in console", () => {
      prepare({ bridge: false });
      cy.get("#storyblok-javascript-bridge").should("not.exist");
      cy.get("@error").should(
        "be.calledWithMatch",
        "Storyblok Bridge is disabled"
      );
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

    it("Logs an error if no access token is provided", () => {
      prepare({
        use: [apiPlugin],
        accessToken: null,
        apiOptions: { accessToken: null },
      });
      cy.get("@error").should("be.calledWithMatch", "You need to provide");
    });
  });
});
