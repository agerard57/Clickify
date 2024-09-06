describe("Navigation test from the Pricing page in French.", () => {
  it("Visits the Clickify website and checks if the DOM elements exist ", () => {
    cy.visit("http://localhost:8080/#pricing");
    cy.get(".css-js6dg5 > :nth-child(3)").should("exist");
    cy.get('[aria-label="Passer en Francais"]').should("exist").click();
    cy.get('[href="/#welcome"] > .MuiTypography-root').should("exist").contains("Bienvenue");
    cy.get('[href="/#product"] > .MuiTypography-root').should("exist").contains("Produit");
    cy.get('[href="/#pricing"] > .MuiTypography-root').should("exist").contains("Prix");
    cy.get('[href="/#about"] > .MuiTypography-root').should("exist").contains("À propos");
    cy.get('[href="/#contact"] > .MuiTypography-root').should("exist").contains("Nous contacter");
    cy.get('[href="/auth?page=signUp"] > .MuiButtonBase-root').should("exist").contains("S'inscrire");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').should("exist").contains("Se connecter");
    cy.get("body.fp-viewing-pricing").contains(
      "Nous proposons 3 plans qui vous donneront les outils nécessaires pour commencer votre aventure !",
    );
    cy.get(".css-1s4yo1n").should("exist").contains("Basique");
    cy.get(".css-1s4yo1n").contains("$25/mois");
    cy.get(".css-1iduj14").should("exist").contains("Clickify");
    cy.get(".css-1iduj14").contains("$75/mois");
    cy.get(".css-17rid9w > :nth-child(3)").should("exist").contains("Premium");
    cy.get(".css-17rid9w > :nth-child(3)").contains("$275/mois");
  });
});
