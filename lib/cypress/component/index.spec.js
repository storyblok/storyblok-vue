import { mount } from "@cypress/vue";
import Demo from "../../../playground-vue3/App.vue";

describe("Demo vue 3", () => {
  before(() => {
    mount(Demo, {});
  });

  it("Loads the responsive images", () => {
    // cy.get(".picture-demo")
    //   .scrollIntoView()
    //   .should("have.attr", "src")
    //   .and("equals", "https://cdn-images-1.medium.com/max/800/1*xjGrvQSXvj72W4zD6IWzfg.jpeg");
  });
});
