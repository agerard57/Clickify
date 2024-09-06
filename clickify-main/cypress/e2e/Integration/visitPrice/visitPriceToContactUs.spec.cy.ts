describe("Navigation test from the Pricing page to the contact page.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#pricing");
    cy.get('[href="/#contact"] > .MuiTypography-root').click();
  });
});
