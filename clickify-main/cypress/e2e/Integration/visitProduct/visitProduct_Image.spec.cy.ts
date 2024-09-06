it("Must test the dimensions of the image for #product.", () => {
  const imageUrl = "http://localhost:8080/7624190c3d037a17b784.webp";
  const imageUrlTwo = "http://localhost:8080/483954a89e7f471a7e8d.webp";
  const imageUrlThree = "http://localhost:8080/81cbe3de98557d77ea3c.webp";

  cy.visit("http://localhost:8080/#product");

  cy.get(`img[src="${imageUrl}"]`)
    .should("be.visible")
    .then(($img) => {
      const width = $img[0].clientWidth;
      const height = $img[0].clientHeight;

      expect(width).to.eq(50);
      expect(height).to.eq(150);
    });
  cy.get(`img[src="${imageUrlTwo}"]`)
    .should("be.visible")
    .then(($img) => {
      const width = $img[0].clientWidth;
      const height = $img[0].clientHeight;

      expect(width).to.eq(50);
      expect(height).to.eq(150);
    });
  cy.get(`img[src="${imageUrlThree }"]`)
    .should("be.visible")
    .then(($img) => {
      const width = $img[0].clientWidth;
      const height = $img[0].clientHeight;

      expect(width).to.eq(50);
      expect(height).to.eq(150);
    });
});
