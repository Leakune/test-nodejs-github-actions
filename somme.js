// La fonction somme() retourne la somme des nombres passés en paramètre.
// Tout paramètre manquant aura 0 comme valeur par défaut.
// Si un des paramètre n'est pas de type `number`, la fonction lèvera une
// exception avec le message d'erreur "paramètre invalide".
function somme(nombre1 = 0, nombre2 = 0) {
  if (typeof nombre1 !== "number" || typeof nombre2 !== "number") {
    throw new Error("paramètre invalide");
  }
  return nombre1 + nombre2;
}
module.exports = {
  somme,
};
