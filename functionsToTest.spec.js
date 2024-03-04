const functions = require("./public/js/functionsToTest.js");

const returnAnObject = functions.returnAnObject;
const multiplyAllByTwo = functions.multiplyAllByTwo;

describe("Ceci est le début des tests de la fonction returnAnObject :", () => {
  test("Elle devrait retourner un objet contenant les arguments passés : le nombre 1, la chaîne de caractères 'deux' et un objet contenant la propriété 'trois'.", () => {
    expect(returnAnObject(1, "deux", { trois: 3 })).toEqual({
      0: 1,
      1: "deux",
      2: { trois: 3 },
    });
  });

  test("Elle devrait retourner un message si aucun argument n'a été donné", () => {
    expect(returnAnObject()).toBe("No argument was given to the function.");
  });
});

describe("Ceci est le début des teste de la fonction multiplyAllByTwo", () => {
  test("Elle devrait multiplier tous les éléments du tableau par deux", () => {
    expect(multiplyAllByTwo([1, 2, 3])).toEqual([2, 4, 6]);
  });

  test("Elle devrait retourner un message d'erreur si l'argument n'est pas un tableau de nombres", () => {
    expect(multiplyAllByTwo("une string")).toBe(
      "The argument is not an Array of numbers",
    );
  });
});
