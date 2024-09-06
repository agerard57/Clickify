describe("Navigation test from the pricing page to the home page", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#pricing");
    cy.get('[href="/#welcome"] > .MuiTypography-root').click();
  });
});
