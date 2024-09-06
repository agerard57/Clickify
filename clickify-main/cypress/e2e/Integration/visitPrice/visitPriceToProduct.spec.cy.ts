describe("Navigation test from the Pricing page to Product", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#pricing");
    cy.get('[href="/#product"] > .MuiTypography-root').click();
  });
});
