describe("Navigation test from the Contact Us page to About Us", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#contact");
    cy.get('[href="/#about"] > .MuiTypography-root').click();
  });
});
