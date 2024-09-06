describe("Navigation test from the Contact Us page to the home page", () => {
  it("visit the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#contact");
    cy.get('[href="/#welcome"] > .MuiTypography-root').click();
  });
});
