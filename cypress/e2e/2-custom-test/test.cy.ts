/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays two todo items by default", () => {
    cy.wait(1000);
    cy.contains("Edit src/App.tsx and save to reload.").should("not.exist");
  });
});
