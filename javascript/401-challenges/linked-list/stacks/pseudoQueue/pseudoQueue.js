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
    while(this.stack1.top) {
      let popped = this.stack1.pop()
      this.stack2.push(popped);
    }
    this.stack1.push(value);
    this.front = this.stack1.top;
    this.rear = this.stack1.top;
    this.length++;

    while(this.stack2.top){
      let popped = this.stack2.pop();
      this.stack1.push(popped);
    }
    this.front = this.stack1.top;
    return this
  }

  dequeue() {
    if (this.stack1.isEmpty()) {
      return 'Empty Queue'
    }
      this.front = this.stack1.top.next;

    if (this.stack1.top.next === null) {
      this.rear = null;
    }
      return this.stack1.pop();
    }
  };


let queue = new PseudoQueue;

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);


console.log(queue);



module.exports = PseudoQueue;
