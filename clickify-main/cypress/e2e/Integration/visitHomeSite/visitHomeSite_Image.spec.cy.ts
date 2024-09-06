it("Must test the dimensions of the image for #welcome", () => {
  const imageUrl = "http://localhost:8080/53dad2667d04c4d08d91.webp";

  cy.visit("http://localhost:8080/#welcome");

  cy.get(`img[src="${imageUrl}"]`)
    .should("be.visible")
    .then(($img) => {
      const width = $img[0].clientWidth;
      const height = $img[0].clientHeight;

      expect(width).to.eq(400);
      expect(height).to.eq(400);
    });
});
