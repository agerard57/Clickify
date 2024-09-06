describe("Navigation test from the Product page in French.", () => {
  it("Visits the Clickify website and checks if the DOM elements exist ", () => {
    cy.visit("http://localhost:8080/#product");
    cy.get(".css-js6dg5 > :nth-child(3)").should("exist");
    cy.get('[aria-label="Passer en Francais"]').should("exist").click();
    cy.get('[href="/#welcome"] > .MuiTypography-root').should("exist").contains("Bienvenue");
    cy.get('[href="/#product"] > .MuiTypography-root').should("exist").contains("Produit");
    cy.get('[href="/#pricing"] > .MuiTypography-root').should("exist").contains("Prix");
    cy.get('[href="/#about"] > .MuiTypography-root').should("exist").contains("À propos");
    cy.get('[href="/#contact"] > .MuiTypography-root').should("exist").contains("Nous contacter");
    cy.get('[href="/auth?page=signUp"] > .MuiButtonBase-root').should("exist").contains("S'inscrire");
    cy.get('[href="/auth?page=login "] > .MuiButtonBase-root').should("exist").contains("Se connecter");
    cy.get("body.fp-viewing-product").contains(
      "Clickify est une solution tout-en-un qui permet aux entreprises de gérer facilement leurs ventes en ligne. En quelques clics, vous pouvez mettre en place votre site de commerce électronique en un rien de temps. En fournissant une solution clé en main pour la numérisation, les entreprises peuvent offrir à leurs clients une expérience d'achat transparente et accessible, quels que soient les défis à relever. Avec Clickify, vous pouvez mettre votre entreprise en ligne et commencer à vendre à des clients du monde entier en toute simplicité",
    );
    cy.get("body.fp-viewing-product").contains(
      "Nos outils puissants vous permettent de gérer les employés, les clients, les produits, les commandes et bien plus encore. Vous aurez accès à des tableaux de bord et à des rapports détaillés, qui vous fourniront les informations dont vous avez besoin pour optimiser votre activité en ligne et maximiser vos ventes",
    );
    cy.get("body.fp-viewing-product").contains(
      "Clickify est la plateforme idéale pour faire passer votre entreprise au niveau supérieur, que vous soyez en train de démarrer ou que vous cherchiez à vous développer",
    );
    cy.get(".css-9h6udm").should("exist");
    cy.get(":nth-child(1) > .css-zir0nr").should("exist");
  });
});
