describe("Navigation test from the Home page to the Prices page.", () => {
  it("Visits the Clickify main website.", () => {
    cy.visit("http://localhost:8080/#welcome");
    cy.get('[href="/#pricing"] > .MuiTypography-root').click();
  });
});
