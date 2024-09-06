describe("Navigation test from the product page to the home page", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#product");
    cy.get('[href="/#welcome"] > .MuiTypography-root').click();
  });
});
