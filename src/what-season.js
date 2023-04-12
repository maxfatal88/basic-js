const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
let dateObj = [2019, '27', 0 + '1']

let mounth = dateObj.getMonth();

console.log(mounth);



function getSeason(dateObj) {
  // throw new NotImplementedError('Not implemented');
  let mounth = dateObj.getMonth();
  if(mounth>=2&&mounth<=4) {
    return 'spring'
  } else if (mounth>=5&&mounth<=7){
    return 'summer'
  } else if (mounth>=8&&mounth<=10){
    return 'fall'
  } else if (mounth>=0&&mounth<=1||mounth===11){
    return  'winter'
  } else {
    return 'Unable to determine the time of year!'
  }
}

// console.log(getSeason(dateObj));

// module.exports = {
//   getSeason
// };
