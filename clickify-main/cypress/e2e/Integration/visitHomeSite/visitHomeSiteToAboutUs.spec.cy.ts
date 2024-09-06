describe("Navigation test from the Home page to About Us.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#welcome");
    cy.get('[href="/#about"] > .MuiTypography-root').click();
  });
});
