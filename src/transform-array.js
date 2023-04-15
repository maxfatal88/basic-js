const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(array) {

  if (!Array.isArray(array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }

 arr = array.slice()
  arr.forEach((el, ind) => { 
    if (el === '--discard-next' && arr[ind + 1]) {
      arr[ind+1] = 'del'
    } if (el === '--discard-prev' && arr[ind - 1]) {
      arr[ind-1] = 'del'
    } if (el === '--double-next' && arr[ind + 1]) {
      arr[ind] = arr[ind+1]
    } if (el === '--double-prev' && arr[ind - 1]) {
      arr[ind] = arr[ind-1]
    }
  })
  return (arr.filter((el)=> !((el=== '--discard-next')||(el=== '--discard-prev')||(el=== '--double-next')||(el=== '--double-prev')||(el=== 'del')) ) )
}

module.exports = {
  transform
};

