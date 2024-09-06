describe("Navigation test from the welcome page in English.", () => {
  it("Visits the Clickify website and checks if the DOM elements exist.", () => {
    cy.visit("http://localhost:8080/#welcome");
    cy.get('[href="/#welcome"] > .MuiTypography-root').should("exist").contains("Welcome");
    cy.get('[href="/#product"] > .MuiTypography-root').should("exist").contains("Product");
    cy.get('[href="/#pricing"] > .MuiTypography-root').should("exist").contains("Pricing");
    cy.get('[href="/#about"] > .MuiTypography-root').should("exist").contains("About us");
    cy.get('[href="/#contact"] > .MuiTypography-root').should("exist").contains("Contact us");
    cy.get('[href="/auth?page=signUp"] > .MuiButtonBase-root').should("exist").contains("Sign up");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').should("exist").contains("Login");
    cy.get(".css-js6dg5 > :nth-child(3)").should("exist");
    cy.get('[aria-label="Passer en Francais"]').should("exist");
    cy.get(".css-gdctic").should("exist");
    cy.get("body.fp-viewing-welcome").should("exist").contains("Be closer to your clients, in just a few clicks!");
    cy.get("body.fp-viewing-welcome").contains("Learn more about our product...");
  });
});
