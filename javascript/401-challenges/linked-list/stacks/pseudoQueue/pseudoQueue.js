const { Stack } = require('../QueueStacks/stacksAndQueues.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();

    this.front = null;
    this.rear = null;
    this.length = null;
  }

  enqueue(value) {
    this.stack1.push(value);
    this.front = this.stack1[0];
    this.rear = this.stack1[this.stack1.top]
    this.length++;

    return this
  }

  dequeue() {
    if (this.stack1.isEmpty()) {
      return 'Empty Queue'
    }
      while (!this.stack1.isEmpty()) {
        let popNode = this.stack1.pop();
        this.stack2.push(popNode);
      }
      let dequeue2 = this.stack2.pop();
      while (!this.stack2.isEmpty()) {
        let popNode = this.stack2.pop();
        this.stack1.push(popNode)
        this.length--;
      }
      return dequeue2;
    }
  };


module.exports = PseudoQueue;
