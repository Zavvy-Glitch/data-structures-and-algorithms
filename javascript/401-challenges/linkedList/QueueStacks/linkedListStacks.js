const Node = require('../node.js');
const LinkedList = require('../linkedList.js');

class Stack {
  constructor () {
    this.topData = [];
  }

  push(record) {
    this.topData.push(record);
  }

  pop() {
    return this.topData.pop();
  }

  peek() {
    return this.topData[this.data.length - 1];
  }
}

module.exports = Stack;
