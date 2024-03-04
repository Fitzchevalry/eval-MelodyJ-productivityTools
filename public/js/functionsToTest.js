/**
 * Crée un objet à partir d'une liste d'arguments passés à la fonction.
 * Si aucun argument n'est fourni, retourne un message indiquant qu'aucun argument n'a été donné.
 *
 * @param {...any} args - La fonction prend en paramètre une liste d'arguments.
 * @returns {Object|string} La fonction retourne un objet contenant les arguments passés, ou une chaîne de caractères indiquant qu'aucun argument n'a été donné.
 */
const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach((arg) => {
      response[index] = arg;
      index++;
    });
  } else {
    response = "No argument was given to the function.";
  }
  return response;
};

/**
 * Multiplie tous les éléments du tableau par deux.
 * Si l'argument passé n'est pas un tableau, retourne un message d'erreur.
 *
 * @param {Array<number>} arrayOfNumbers - La fonction prend en paramètre un tableau contenant des nombres à multiplier.
 * @returns {Array<number>|string} La fonction retourne un tableau contenant les nombres après une multiplication par deux, ou elle retourne une chaîne de caractères indiquant que l'argument n'est pas un tableau de nombres.
 */
const multiplyAllByTwo = (arrayOfNumbers) => {
  let response;
  if (
    arrayOfNumbers.constructor.prototype === new Array([]).constructor.prototype
  ) {
    response = arrayOfNumbers.map((val) => val * 2);
  } else {
    response = "The argument is not an Array of numbers";
  }
  return response;
};

module.exports = { returnAnObject, multiplyAllByTwo };
