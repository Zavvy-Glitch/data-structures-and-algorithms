const { Queue } = require('../QueueStacks/stacksAndQueues.js');

class Brackets {
  constructor() {
    this.round = new Queue();
    this.square = new Queue();
    this.curly = new Queue();
  }

}

module.exports = Brackets;
