describe("Navigation test from the Home page to the contact page.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#welcome");
    cy.get('[href="/#contact"] > .MuiTypography-root').click();
  });
});
