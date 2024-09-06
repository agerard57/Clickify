describe("Navigation test from the Pricing page to the login page.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#pricing");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').click();
  });
});
