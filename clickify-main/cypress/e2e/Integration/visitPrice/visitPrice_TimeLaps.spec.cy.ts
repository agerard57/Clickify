describe("Performance test from the Pricing page.", () => {
  it("visit the Clickify main website. ", () => {
    cy.visit("http://localhost:8080/#pricing");
    cy.window().then((win) => {
      const performanceEntries = win.performance.getEntriesByType("navigation");

      if (performanceEntries.length > 0) {
        const navigationTiming = performanceEntries[0];
        const loadTime = navigationTiming.duration - navigationTiming.startTime;

        cy.log(`Load time: ${loadTime}ms`);
      } else {
        cy.log("No performance metrics are available.");
      }
    });
  });
});
