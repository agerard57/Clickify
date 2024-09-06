describe("Navigation test from the Contact Us page to the login page.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#contact");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').click();
  });
});
