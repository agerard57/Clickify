describe("Navigation test from the About page to the contact page.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#about");
    cy.get('[href="/#contact"] > .MuiTypography-root').click();
  });
});
