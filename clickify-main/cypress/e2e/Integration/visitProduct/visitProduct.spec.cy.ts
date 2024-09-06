describe("Navigation test from the Product page in English.", () => {
  it("Visits the Clickify website and checks if the DOM elements exist.", () => {
    cy.visit("http://localhost:8080/#product");
    cy.get('[href="/#welcome"] > .MuiTypography-root').should("exist").contains("Welcome");
    cy.get('[href="/#product"] > .MuiTypography-root').should("exist").contains("Product");
    cy.get('[href="/#pricing"] > .MuiTypography-root').should("exist").contains("Pricing");
    cy.get('[href="/#about"] > .MuiTypography-root').should("exist").contains("About us");
    cy.get('[href="/#contact"] > .MuiTypography-root').should("exist").contains("Contact us");
    cy.get('[href="/auth?page=signUp"] > .MuiButtonBase-root').should("exist").contains("Sign up");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').should("exist").contains("Login");
    cy.get(".css-js6dg5 > :nth-child(3)").should("exist");
    cy.get('[aria-label="Passer en Francais"]').should("exist");
    cy.get("body.fp-viewing-product").contains(
      "Clickify is an all-in-one solution that allows businesses to manage their online sales easily. With just a few clicks, you can have your e-commerce site up and running in no time. By providing a turnkey solution for digitalization, businesses can offer their customers a seamless and accessible shopping experience, no matter what challenges arise. With Clickify, you can take your business online and start selling to customers all over the world with ease",
    );
    cy.get("body.fp-viewing-product").contains(
      "Our powerful tools enable you to manage employees, customers, products, orders, and more. You'll have access to dashboards and detailed reports, providing you with the insights you need to optimize your online business and maximize your sales",
    );
    cy.get("body.fp-viewing-product").contains(
      "Clickify is the perfect platform to take your business to the next level, whether you're just starting out or looking to scale",
    );
    cy.get(".css-9h6udm").should("exist");
    cy.get(":nth-child(1) > .css-zir0nr").should("exist");
  });
});
