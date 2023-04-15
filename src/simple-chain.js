const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrayChain:[],
  getLength() {
    return this.arrayChain.length
  },
  addLink(value) {
   this.arrayChain.push(value)
   return this
  },
  removeLink(position) {
    if(typeof position!=="number"||position%1||position<=0||this.arrayChain.length<position) {
      this.arrayChain = []
      throw new Error("You can\'t remove incorrect link!")
    }
   this.arrayChain.splice(position-1,1)
   return this
  },
  reverseChain() {
    this.arrayChain.reverse()
    return this
  },
  finishChain() {
    let str =''
   for(let i=0; i <this.arrayChain.length; i++){
    str += `~( ${this.arrayChain[i]} )~`
   }
   this.arrayChain = []
   return str.slice(1,-1)
  }
}
module.exports = {
  chainMaker
};
