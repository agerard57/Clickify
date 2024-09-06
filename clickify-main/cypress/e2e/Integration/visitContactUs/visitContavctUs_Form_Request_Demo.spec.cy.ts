describe("Testing the form within a pop-up window", () => {
  it("Opens the pop-up window and checks the form", () => {
    cy.visit("/");

    // Click on the button that opens the pop-up
    cy.get("button").contains("Talk to our experts").click();

    // Wait for the pop-up window to open
    cy.get(".css-1i1aivq").should("be.visible");

    // Select the form elements within the pop-up and check their presence
    cy.get(".css-1i1aivq").within(() => {
      // Verify that the form contains the necessary fields
      cy.get("input").eq(0).should("exist");
      cy.get("input").eq(1).should("exist");
      cy.get("input").eq(2).should("exist");
      cy.get("input").eq(3).should("exist");
      cy.get(":nth-child(5) > .MuiFormControl-root > .MuiInputBase-root").should("exist");
    });

    cy.get(".css-1i1aivq").within(() => {
      // Fill in the form fields with values (simulated for the test)
      cy.get("input").eq(0).type("Günther Eisenschwanz");
      cy.get("input").eq(1).type("For whom the bell tones S.A.");
      cy.get("input").eq(2).type("ScrotumVelu@ledrapo.org");
      cy.get("input").eq(3).type("0669696969");
      cy.get(":nth-child(5) > .MuiFormControl-root > .MuiInputBase-root").type(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      );
    });
    // Submit the form
    cy.get("button").contains("Send the request").click();

    // assertion to check if the pop-up window is closed after submission
    // TODO Finish when DB available.
    //cy.get(".popup-window").should("not.exist");
  });
});
