describe("Navigation test from the Product page to the login page.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#product");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').click();
  });
});
