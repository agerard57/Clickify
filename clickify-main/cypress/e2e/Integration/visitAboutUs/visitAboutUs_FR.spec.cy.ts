describe("Navigation test from the About page in French.", () => {
  it("Visits the Clickify website and checks if the DOM elements exist ", () => {
    cy.visit("http://localhost:8080/#about");
    cy.get(".css-js6dg5 > :nth-child(3)").should("exist");
    cy.get('[aria-label="Passer en Francais"]').should("exist").click();
    cy.get('[href="/#welcome"] > .MuiTypography-root').should("exist").contains("Bienvenue");
    cy.get('[href="/#product"] > .MuiTypography-root').should("exist").contains("Produit");
    cy.get('[href="/#pricing"] > .MuiTypography-root').should("exist").contains("Prix");
    cy.get('[href="/#about"] > .MuiTypography-root').should("exist").contains("À propos");
    cy.get('[href="/#contact"] > .MuiTypography-root').should("exist").contains("Nous contacter");
    cy.get('[href="/auth?page=signUp"] > .MuiButtonBase-root').should("exist").contains("S'inscrire");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').should("exist").contains("Se connecter");
    cy.get(".css-17zk07e > :nth-child(1) > .css-1svodp3-MuiTypography-root").should("exist");
    cy.get("body.fp-viewing-about").contains(
      "Pendant la pandémie de COVID-19, nous avons constaté que de nombreuses entreprises avaient du mal à s'adapter à l'évolution soudaine vers les ventes en ligne. Nous voulions aider ces entreprises en leur proposant une solution simple et accessible pour créer un site de commerce électronique. C'est alors que nous avons lancé Clickify, une plateforme conçue pour répondre aux besoins des entreprises de toutes tailles, qu'il s'agisse de petites start-ups ou d'entreprises bien établies. Notre plateforme permet aux entreprises de présenter leurs produits, de traiter les paiements et de gérer les commandes sans aucune expertise technique",
    );
    cy.get(".css-17zk07e > :nth-child(2) ").should("exist").contains("mission");
    cy.get(".css-17zk07e > :nth-child(3) ").should("exist").contains("équipe");
  });
});
