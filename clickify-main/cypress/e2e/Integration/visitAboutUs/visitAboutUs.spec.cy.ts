describe("Navigation test from the About page in English.", () => {
  it("Visits the Clickify website and checks if the DOM elements exist.", () => {
    cy.visit("http://localhost:8080/#about");
    cy.get('[href="/#welcome"] > .MuiTypography-root').should("exist").contains("Welcome");
    cy.get('[href="/#product"] > .MuiTypography-root').should("exist").contains("Product");
    cy.get('[href="/#pricing"] > .MuiTypography-root').should("exist").contains("Pricing");
    cy.get('[href="/#about"] > .MuiTypography-root').should("exist").contains("About us");
    cy.get('[href="/#contact"] > .MuiTypography-root').should("exist").contains("Contact us");
    cy.get('[href="/auth?page=signUp"] > .MuiButtonBase-root').should("exist").contains("Sign up");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').should("exist").contains("Login");
    cy.get(".css-js6dg5 > :nth-child(3)").should("exist");
    cy.get('[aria-label="Passer en Francais"]').should("exist");
    cy.get("body.fp-viewing-about").contains(
      "During the COVID-19 pandemic, we saw many businesses struggling to adapt to the sudden shift towards online sales. Many brick-and-mortar stores were forced to close their doors, and the need for a robust online presence became more apparent than ever. We wanted to help these businesses by providing an easy and accessible solution to build an e-commerce website. That's when we launched Clickify - a platform designed to cater to businesses of all sizes, from small startups to established enterprises. With Clickify, businesses can create a fully-functional e-commerce website in just a few clicks. Our platform allows businesses to showcase their products, process payments, and manage orders without any technical expertise",
    );
    cy.get(".css-17zk07e > :nth-child(2) ").should("exist").contains("mission");
    cy.get(".css-17zk07e > :nth-child(3) ").should("exist").contains("team");
  });
});
