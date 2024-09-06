describe("Navigation test from the Home page to the registration page.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#welcome");
    cy.get('[href="/auth?page=signUp"] > .MuiButtonBase-root').click();
  });
});
