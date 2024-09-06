describe("Test the navigation from the product page to the signup page", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#product");
    cy.get('[href="/auth?page=signUp"] > .MuiButtonBase-root').click();
  });
});
