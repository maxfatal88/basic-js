const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 let arrCats = [
  ["^^", ".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
  [2, NaN, "", false, "^^", "^^"],
  [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
  ["."],
  [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
  [false, NaN, 1, 0, ".", "^^"],
  [null, 1, NaN],
  [],
 ]

function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  const cat = '^^'
  var count = 0
  for(let array of matrix) {
   for(let element of array) {
    if(element === cat) {
      count++
  }
   }
 
  }
  return count
  // remove line with error and write your code here
}

// console.log(countCats(arrCats));

module.exports = {
  countCats
};
