describe("Navigation test from the Pricing page in English.", () => {
  it("Visits the Clickify website and checks if the DOM elements exist.", () => {
    cy.visit("http://localhost:8080/#pricing");
    cy.get('[href="/#welcome"] > .MuiTypography-root').should("exist").contains("Welcome");
    cy.get('[href="/#product"] > .MuiTypography-root').should("exist").contains("Product");
    cy.get('[href="/#pricing"] > .MuiTypography-root').should("exist").contains("Pricing");
    cy.get('[href="/#about"] > .MuiTypography-root').should("exist").contains("About us");
    cy.get('[href="/#contact"] > .MuiTypography-root').should("exist").contains("Contact us");
    cy.get('[href="/auth?page=signUp"] > .MuiButtonBase-root').should("exist").contains("Sign up");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').should("exist").contains("Login");
    cy.get(".css-js6dg5 > :nth-child(3)").should("exist");
    cy.get('[aria-label="Passer en Francais"]').should("exist");
    cy.get("body.fp-viewing-pricing").contains(
      "We offer 3 plans that will give you the necessary tools to begin your adventure!",
    );
    cy.get(".css-1s4yo1n").should("exist").contains("Basic");
    cy.get(".css-1s4yo1n").contains("$25/month");
    cy.get(".css-1iduj14").should("exist").contains("Clickify");
    cy.get(".css-1iduj14").contains("$75/month");
    cy.get(".css-17rid9w > :nth-child(3)").should("exist").contains("Premium");
    cy.get(".css-17rid9w > :nth-child(3)").contains("$275/month");
  });
});
