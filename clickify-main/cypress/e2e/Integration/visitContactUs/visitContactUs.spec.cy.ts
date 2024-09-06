describe("Navigation test from the Contact Us page in English.", () => {
  it("Visits the Clickify website and checks if the DOM elements exist.", () => {
    cy.visit("http://localhost:8080/#contact");
    cy.get('[href="/#welcome"] > .MuiTypography-root').should("exist").contains("Welcome");
    cy.get('[href="/#product"] > .MuiTypography-root').should("exist").contains("Product");
    cy.get('[href="/#pricing"] > .MuiTypography-root').should("exist").contains("Pricing");
    cy.get('[href="/#about"] > .MuiTypography-root').should("exist").contains("About us");
    cy.get('[href="/#contact"] > .MuiTypography-root').should("exist").contains("Contact us");
    cy.get('[href="/auth?page=signUp"] > .MuiButtonBase-root').should("exist").contains("Sign up");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').should("exist").contains("Login");
    cy.get(".css-js6dg5 > :nth-child(3)").should("exist");
    cy.get('[aria-label="Passer en Francais"]').should("exist");
    cy.get(".css-1rg0dur")
      .should("exist")
      .contains("Talk to a Clickify expert about your specific requirements or for a demo");
    cy.get(".css-1rg0dur").contains(
      "If you're having trouble logging in, need a site/DNS transfer, or seeing fraud/usurpation, contact the support",
    );
    cy.get(".css-1rg0dur").contains("Our documentation shows you how to use every part of Clickify");
    cy.get("button").contains("Talk to our experts");
    cy.get("button").contains("Contact us");
    cy.get("button").contains("View docs");
  });
});
