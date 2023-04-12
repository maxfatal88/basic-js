const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(string1, string2 ) {
  // throw new NotImplementedError('Not implemented');
  let counter = 0
  for (let char of string1){
    if(string2.includes(char)) {
      counter++;
      string2 = string2.replace( char, '')
      console.log(string2);
    }
  }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
