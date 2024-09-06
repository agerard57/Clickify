describe("Navigation test from the product page to the contact page.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#product");
    cy.get('[href="/#contact"] > .MuiTypography-root').click();
  });
});
