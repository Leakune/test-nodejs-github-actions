const { somme } = require("./somme.js");
const assert = require("assert");

/* test unitaire*/

describe("la fonction somme() devrait", () => {
  it(`Avec les valeurs de paramètres 2 et 3, la fonction somme() est sensée retourner la valeur 5`, () => {
    const resultat = somme(5, 4);
    assert.equal(resultat, 9);
  });
  it(`Avec les valeurs de paramètres 1 et undefined, la fonction somme() est sensée retourner la valeur 1`, () => {
    const resultat = somme(1);
    assert.equal(resultat, 1);
  });
  it(`Avec les valeurs de paramètres 3 et "toto", la fonction somme() est sensée retourner un erreur "paramètre invalide"`, () => {
    const expectedError = "paramètre invalide";
    assert.throws(() => {
      // @ts-ignore
      somme(1, "toto");
    }, new Error(expectedError));
  });
  it(`Avec les valeurs de paramètres undefined et undefined, la fonction somme() est sensée retourner la valeur 0`, () => {
    const resultat = somme();
    assert.equal(resultat, 0);
  });
});

/* test de bout en bout api */

const fetch = require("node-fetch");
describe("le chat-bot devrait", () => {
  it("dire bonjour quand il reçoit une requête HTTP GET à la racine", async () => {
    // 1. envoyer une requête GET et récupérer la réponse
    const response = await fetch("http://localhost:3000/");
    const text = await response.text();
    // 2. vérifier la réponse
    assert.equal(text, "Bonjour !");
  });
});
