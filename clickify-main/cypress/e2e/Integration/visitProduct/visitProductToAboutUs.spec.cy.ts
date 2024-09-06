describe("Navigation test from the Product page to About Us", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#product");
    cy.get('[href="/#about"] > .MuiTypography-root').click();
  });
});
