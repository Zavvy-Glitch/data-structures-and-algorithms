const Node = require('../node.js');
const LinkedList = require('../linkedList.js');

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
