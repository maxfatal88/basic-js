const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  obj = {
    separator: '+',
    additionSeparator: '|',
    repeatTimes:1,
    additionRepeatTimes:1,
  }
  Object.assign(obj, options)

  let mainString = []
  let addition = []
  let string = ''
  if(obj.addition === null){
    obj.addition = 'null'
  }
  if (str === null){
    str = 'null'
  }
    for (let i = 0; i < obj.additionRepeatTimes; i++) {
      addition.push(obj.addition);
    }
    addition = addition.join(obj.additionSeparator);
    if(typeof str !== 'string'|| typeof addition !== 'string') {
  string = str.toString() +  addition.toString()
    }
    string = str +  addition
  for(let k=0;k< obj.repeatTimes; k++){
    mainString.push(string)
  }
  mainString = mainString.join(obj.separator)
return mainString
}
console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));

  module.exports = {
    repeater
  };
