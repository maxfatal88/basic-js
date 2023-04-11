const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  if (((typeof sampleActivity) === 'number')||((typeof sampleActivity) === 'object')) {return false}
  const activity = +sampleActivity
  if(!activity){return false}
  if(activity === NaN || activity<=0 || activity>15) { return false}
  const age = Math.ceil((Math.log(MODERN_ACTIVITY/activity))/(Math.log(2)/HALF_LIFE_PERIOD))
  return age
  // remove line with error and write your code here
}
module.exports = {
  dateSample
};
