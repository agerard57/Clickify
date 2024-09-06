describe("Navigation test from the welcome page in French.", () => {
  it("Visits the Clickify website and checks if the DOM elements exist in french. ", () => {
    cy.visit("http://localhost:8080/#welcome");
    cy.get(".css-js6dg5 > :nth-child(3)").should("exist");
    cy.get('[aria-label="Passer en Francais"]').should("exist").click();
    cy.get('[href="/#welcome"] > .MuiTypography-root').should("exist").contains("Bienvenue");
    cy.get('[href="/#product"] > .MuiTypography-root').should("exist").contains("Produit");
    cy.get('[href="/#pricing"] > .MuiTypography-root').should("exist").contains("Prix");
    cy.get('[href="/#about"] > .MuiTypography-root').should("exist").contains("À propos");
    cy.get('[href="/#contact"] > .MuiTypography-root').should("exist").contains("Nous contacter");
    cy.get('[href="/auth?page=signUp"] > .MuiButtonBase-root').should("exist").contains("S'inscrire");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').should("exist").contains("Se connecter");
    cy.get(".css-gdctic").should("exist");
    cy.get("body.fp-viewing-welcome").should("exist").contains("Soyez plus proche de vos clients, en quelques clics !");
    cy.get("body.fp-viewing-welcome").contains("En savoir plus sur notre produit...");
  });
});
