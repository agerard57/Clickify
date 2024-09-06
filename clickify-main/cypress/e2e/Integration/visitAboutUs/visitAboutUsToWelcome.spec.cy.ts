describe("Navigation test from the about page to the home page", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#about");
    cy.get('[href="/#welcome"] > .MuiTypography-root').click();
  });
});
