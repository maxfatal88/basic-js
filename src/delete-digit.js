const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(number) {
  var maxNum = 0;
  let strNum = number.toString()
  for (let i = 0; i<strNum.length; i++) {
    let numDlteDgt =  +strNum.split('').filter((_,ind)=> ind !== i).join('')
    if (maxNum < numDlteDgt) {
      maxNum = numDlteDgt
    }
  }
  return maxNum
}

module.exports = {
  deleteDigit
};
