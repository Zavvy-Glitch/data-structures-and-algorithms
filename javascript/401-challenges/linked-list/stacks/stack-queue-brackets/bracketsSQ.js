const { Stack } = require('../QueueStacks/stacksAndQueues.js');

//note: Solution with help from LeetCode

class Brackets {
  constructor() {
    this.stack = new Stack
  }

  validateBrackets = (brackets) => {
   if(brackets.length % 2 !== 0) return false;
   const map = {
     '(' : ')',
     '[' : ']',
     '{' : '}',
   }
    
    for (const bracket of brackets) {

      if(map.hasOwnProperty(bracket)) {
        this.stack.push(bracket)
      } else {
        const closeBracket = this.stack.pop();
        if(bracket !== map[closeBracket]){
          return false
        }
      }
    }
   return this.stack.isEmpty();
  };
};

let vb = new Brackets();

console.log(vb.validateBrackets('([apple])'))



module.exports = Brackets;
