it("Tests the dimensions of the image for #contact.", () => {
  cy.visit("http://localhost:8080/#contact");
  // Test icon video if exist
  cy.get("svg.svg-inline--fa.fa-video").then(($svgElement) => {
    expect($svgElement).to.exist;
    const width = $svgElement[0].clientWidth;
    const height = $svgElement[0].clientHeight;

    expect(width).to.eq(50);
    expect(height).to.eq(50);
  });
  // Test icon envelope if exist
  cy.get("svg.svg-inline--fa.fa-envelope").then(($svgElement) => {
    expect($svgElement).to.exist;
    const width = $svgElement[0].clientWidth;
    const height = $svgElement[0].clientHeight;

    expect(width).to.eq(50);
    expect(height).to.eq(50);
  });
  // Test icon doc if exist
  cy.get("svg.svg-inline--fa.fa-file-lines").then(($svgElement) => {
    expect($svgElement).to.exist;
    const width = $svgElement[0].clientWidth;
    const height = $svgElement[0].clientHeight;

    expect(width).to.eq(50);
    expect(height).to.eq(50);
  });
});
