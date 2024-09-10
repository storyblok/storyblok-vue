import { mount } from "@cypress/vue";
import Teaser from "@storyblok/vue-playground/components/Teaser.vue";
import Grid from "@storyblok/vue-playground/components/Grid.vue";
import Page from "@storyblok/vue-playground/components/Page.vue";
import Feature from "@storyblok/vue-playground/components/Feature.vue";
import MyCustomFallback from "@storyblok/vue-playground/components/MyCustomFallback.vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import IframeEmbed from "../testing-components/IFrameEmbed.vue";
import { RouterLink } from "vue-router";
import Essential from "../testing-components/Essential.vue";
import RealApi from "../testing-components/RealApi.vue";
import RichText from "../testing-components/RichText.vue";

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

    it("Don't get data-blok-c and data-blok-uid attributes in production mode", () => {
      cy.get("[data-test=editable-prod]").should(
        "not.have.attr",
        "data-blok-c"
      );

      cy.get("[data-test=editable-prod]").should(
        "not.have.attr",
        "data-blok-uid"
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

  describe("useStoryblok/StoryblokComponent", () => {
    it("Errors when no using the apiPlugin", () => {
      prepare({}, RealApi);
      cy.get("[data-test=page]").should("not.exist");
      cy.get("@error").should(
        "be.calledWithMatch",
        "You can't use useStoryblok"
      );
    });

    it("Doesn't render if components are not loaded", () => {
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

  describe("FallbackComponent", () => {
    it("Throws a console.error when the components are not loaded and enableFallbackComponent is not set", () => {
      prepare({ use: [apiPlugin], enableFallbackComponent: false }, RealApi);
      cy.get("@error").should(
        "be.calledWithMatch",
        'Component could not be found for blok "page"! Is it defined in main.ts as "app.component("page", page);"?'
      );
    });

    it("Renders the fallback component when the enableFallbackComponent is set to true and the component was not declared", () => {
      prepare({ use: [apiPlugin], enableFallbackComponent: true }, RealApi, {
        components: { Grid, Page, Feature },
      });

      cy.get("[class='fallback-component']").contains(
        "Component could not be found for blok teaser! Is it configured correctly?"
      );
      cy.get("[data-test=grid]").should("exist");
      cy.get("[data-test=feature]").should("exist");
    });

    it("Renders the custom component when the enableFallbackComponent is true, the customFallbackComponent and the component was not declared", () => {
      prepare(
        {
          use: [apiPlugin],
          enableFallbackComponent: true,
          customFallbackComponent: "MyCustomFallback",
        },
        RealApi,
        {
          components: { Grid, Page, Feature, MyCustomFallback },
        }
      );

      cy.get("[data-test=custom-fallback-component]").contains(
        "Custom fallback component to cover teaser"
      );
      cy.get("[data-test=grid]").should("exist");
      cy.get("[data-test=feature]").should("exist");
    });

    it("Shouldn't render the custom component when the enableFallbackComponent is false", () => {
      prepare(
        {
          use: [apiPlugin],
          enableFallbackComponent: false,
          customFallbackComponent: "MyCustomFallback",
        },
        RealApi,
        {
          components: { Grid, Page, Feature, MyCustomFallback },
        }
      );

      cy.get("[data-test=custom-fallback-component]").should("not.exist");
      cy.get("@error").should(
        "be.calledWithMatch",
        'Component could not be found for blok "teaser"! Is it defined in main.ts as "app.component("teaser", teaser);"?'
      );
    });

    it("Shouldn't show a console.error when the customFallbackComponent is mentioned, but the component is not registered", () => {
      prepare(
        {
          use: [apiPlugin],
          enableFallbackComponent: true,
          customFallbackComponent: "MyCustomFallback",
        },
        RealApi,
        {
          components: { Grid, Page, Feature },
        }
      );

      cy.get("@error").should(
        "be.calledWithMatch",
        'Is the Fallback component "MyCustomFallback" registered properly?'
      );
    });
  });

  describe("StoryblokRichText", () => {
    it("Renders the rich text using StoryblokRichText component", () => {
      prepare({ use: [apiPlugin] }, RichText, {
        components: { Teaser, Grid, Page, Feature },
      });

      cy.get("[data-test=root]")
        .children()
        .find("h1")
        .should("have.text", "Headline 1");
    });

    it("Should render headline tags correctly", () => {
      prepare({ use: [apiPlugin] }, RichText, {
        components: { Teaser, Grid, Page, Feature },
      });

      cy.get("[data-test=root]")
        .children()
        .find("h1")
        .should("have.text", "Headline 1");
      cy.get("[data-test=root]")
        .children()
        .find("h2")
        .should("have.text", "Headline 2");
      cy.get("[data-test=root]")
        .children()
        .find("h3")
        .should("have.text", "Headline 3");
      cy.get("[data-test=root]")
        .children()
        .find("h4")
        .should("have.text", "Headline 4");
      cy.get("[data-test=root]")
        .children()
        .find("h5")
        .should("have.text", "Headline 5");
      cy.get("[data-test=root]")
        .children()
        .find("h6")
        .should("have.text", "Headline 6");
    });

    it("Should render images correctly", () => {
      prepare({ use: [apiPlugin] }, RichText, {
        components: { Teaser, Grid, Page, Feature },
      });

      cy.get("[data-test=root]")
        .children()
        .find("img")
        .should(
          "have.attr",
          "src",
          "https://a.storyblok.com/f/279818/710x528/c53330ed26/tresjs-doge.jpg"
        );
    });

    it("Should render links correctly", () => {
      prepare({ use: [apiPlugin] }, RichText, {
        components: { Teaser, Grid, Page, Feature },
      });

      cy.get("[data-test=root]")
        .children()
        .find("a")
        .should("have.attr", "href", "https://storyblok.com/");
    });

    it("should render a custom iframe-embed blok component", () => {
      prepare({ use: [apiPlugin] }, RichText, {
        components: { IframeEmbed },
      });

      cy.get("[data-test=root]")
        .children()
        .find("iframe")
        .should("have.attr", "src", "https://storyblok.com/");
    });

    it("should redirect internal links", () => {
      prepare({ use: [apiPlugin] }, RichText, {
        components: { IframeEmbed, RouterLink },
      });

      cy.get("[data-test=root]")
        .children()
        .find("a")
        .contains("Internal Link")
        .should("have.attr", "href", "/vue/test");
    });
  });
});
