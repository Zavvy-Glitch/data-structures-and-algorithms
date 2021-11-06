const { Queue } = require('../QueueStacks/linkedListsQueue.js');

class Brackets {
  constructor() {
    this.round = new Queue();
    this.square = new Queue();
    this.curly = new Queue();
  }

}

module.exports = Brackets;
