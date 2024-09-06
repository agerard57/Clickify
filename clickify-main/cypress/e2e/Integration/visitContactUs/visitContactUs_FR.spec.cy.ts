describe("Navigation test from the Contact Us page in French.", () => {
  it("Visits the Clickify website and checks if the DOM elements exist ", () => {
    cy.visit("/");
    cy.get('[aria-label="Passer en Francais"]').should("exist").click();
    cy.get('[href="/#welcome"] > .MuiTypography-root').should("exist").contains("Bienvenue");
    cy.get('[href="/#product"] > .MuiTypography-root').should("exist").contains("Produit");
    cy.get('[href="/#pricing"] > .MuiTypography-root').should("exist").contains("Prix");
    cy.get('[href="/#about"] > .MuiTypography-root').should("exist").contains("À propos");
    cy.get('[href="/#contact"] > .MuiTypography-root').should("exist").contains("Nous contacter");
    cy.get('[href="/auth?page=signUp"] > .MuiButtonBase-root').should("exist").contains("S'inscrire");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').should("exist").contains("Se connecter");
    cy.get(".css-js6dg5 > :nth-child(3)").should("exist");
    cy.get(".css-1rg0dur")
      .should("exist")
      .contains("Discutez avec un expert Clickify de vos besoins spécifiques ou demandez une démo");
    cy.get(".css-1rg0dur").contains(
      "Si vous avez des difficultés à vous connecter, si vous avez besoin d'un transfert de site/DNS, ou si vous constatez une fraude/usurpation, contactez l'assistance",
    );
    cy.get(".css-1rg0dur").contains("Notre documentation vous montre comment utiliser chaque partie de Clickify");
    cy.get("button").contains("Parlez à nos experts");
    cy.get("button").contains("Contactez-nous");
    cy.get("button").contains("Consulter la documentation");
    cy.get('[Switch to English"]').should("exist");
  });
});
