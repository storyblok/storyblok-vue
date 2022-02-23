import { mount } from "@cypress/vue";
import Essential from "../../testing-components/Essential.vue";
import RealApi from "../../testing-components/RealApi.vue";
import Teaser from "@storyblok/vue-playground/components/Teaser.vue";
import Grid from "@storyblok/vue-playground/components/Grid.vue";
import Page from "@storyblok/vue-playground/components/Page.vue";
import Feature from "@storyblok/vue-playground/components/Feature.vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";

const prepare = (pluginOpts = {}, comp = Essential, globalOpts = {}) => {
  mount(comp, {
    global: {
      plugins: [
        [
          StoryblokVue,
          {
            accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
            ...pluginOpts,
          },
        ],
      ],
      ...globalOpts,
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

  describe("useStoryblok", () => {
    it("Errors when no using the apiPlugin", () => {
      prepare({}, RealApi);
      cy.get("[data-test=page]").should("not.exist");
      cy.get("@error").should(
        "be.calledWithMatch",
        "You can't use useStoryblok"
      );
    });

    it.only("Doesn't render if components are not loaded", () => {
      prepare({ use: [apiPlugin] }, RealApi);
      cy.get("[data-test=page]").should("not.exist");
      cy.get("[data-test=grid]").should("not.exist");
      cy.get("[data-test=feature]").should("not.exist");
      cy.get("[data-test=teaser]").should("not.exist");
    });

    it("Renders the expected story when loading the components", () => {
      prepare({ use: [apiPlugin] }, RealApi, {
        components: { Teaser, Grid, Page, Feature },
      });
      cy.get("[data-test=root]").children().should("have.length", 1);
      cy.get("[data-test=page]").should("exist");
      cy.get("[data-test=grid]").should("exist");
      cy.get("[data-test=feature]").should("have.length", 2);
      cy.get("[data-test=teaser]").should("exist").and("have.text", "hello");
    });
  });
});
