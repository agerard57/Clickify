it("Should measure the response time of a click on a button", () => {
  cy.visit("http://localhost:8080/#pricing");

  cy.get('[aria-label="Passer en Francais"]').then(($btn) => {
    const startTime = performance.now(); // Record the start time.

    cy.wrap($btn).click(); // Perform a click on the button.

    const endTime = performance.now(); // Record the arrival time.

    const clickTime = endTime - startTime; // Calculate the elapsed time.
    cy.log(`Response time on button click: ${clickTime}ms`);
  });
});
