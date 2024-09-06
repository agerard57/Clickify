describe("Navigation test from the Pricing page to the About us page.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#pricing");
    cy.get('[href="/#about"] > .MuiTypography-root').click();
  });
});
