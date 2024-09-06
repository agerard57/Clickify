describe("Performance test from the product page.", () => {
  it("Visits the Clickify main website. ", () => {
    cy.visit("http://localhost:8080/#product");
    cy.window().then((win) => {
      const performanceEntries = win.performance.getEntriesByType("navigation");

      if (performanceEntries.length > 0) {
        const navigationTiming = performanceEntries[0];
        const loadTime = navigationTiming.duration - navigationTiming.startTime;

        cy.log(`Loading: ${loadTime}ms`);
      } else {
        cy.log("No performance metrics are available.");
      }
    });
  });
});
