const { Stack } = require('../QueueStacks/linkedListsQueue.js');

class PseudoQueue {
  constructor() {
    this.data1 = new Stack();
    this.data2 = new Stack();
  }

  enqueue(value) {
    this.data1.push(value);
  }

  dequeue() {
    console.log(this.data2.isEmpty());
    if (this.data2.isEmpty()) {
      while (!this.data1.isEmpty()) {
        this.data2.push(this.data1.top.value);
        this.data1.pop();
      }
    }
    console.log(this.data2);
    let dataStack2 = this.data2.top.value;
    this.data2.pop();
    return dataStack2;
  }
  getDataStack1() {
    return this.data1.top;
  }
  getDataStack2() {
    return this.data2.top;
  }

}

// let pseudoQueue = new PseudoQueue();

// pseudoQueue.enqueue(10);
// pseudoQueue.enqueue(15);
// pseudoQueue.enqueue(20);
// pseudoQueue.enqueue(5);
// pseudoQueue.dequeue();
// console.log(pseudoQueue);

module.exports = PseudoQueue;
