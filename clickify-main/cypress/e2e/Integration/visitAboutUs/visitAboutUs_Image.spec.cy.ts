it("Tests the dimensions of the image for #about.", () => {
  const imageUrl = "http://localhost:8080/7ef4dd1939316f1d7218.webp";

  cy.visit("http://localhost:8080/#about");

  cy.get(`img[src="${imageUrl}"]`)
    .should("be.visible")
    .then(($img) => {
      const width = $img[0].clientWidth;
      const height = $img[0].clientHeight;

      expect(width).to.eq(266);
      expect(height).to.eq(177);
    });
});
