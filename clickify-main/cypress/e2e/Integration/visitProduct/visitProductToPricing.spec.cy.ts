describe("Navigation test from the Product page to the Prices page.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#product");
    cy.get('[href="/#pricing"] > .MuiTypography-root').click();
  });
});
