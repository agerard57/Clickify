describe("Navigation test from the Contact Us page to the contact page.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#contact");
    cy.get('[href="/#product"] > .MuiTypography-root').click();
  });
});
