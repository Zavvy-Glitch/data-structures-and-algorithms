class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor () {
    this.data = [];
  }

  push(record) {
    let prevRecord = this.data;
    let node = new Node(record);
    node.next = prevRecord;
    this.data = node;
  }

  pop() {
    let temp = this.data;
    this.data = temp.next;
    return temp.value;
  }

  peek() {
    return this.data.value;
  }

  isEmpty() {
    if(!this.data)
      return;
  }
}

////////////////////////////////////////

class Queue {
  constructor() {
    this.front = [];
    this.back = [];
  }

  enqueue(record) {
    let addNode = new Node(record);
    let currentBack = this.back;

    if (currentBack) {
      currentBack.next = addNode;
    }
    this.back = addNode;

    if(!this.front) {
      this.front = addNode;
    }
  }

  dequeue() {
    let removeNode = this.front;
    this.front = removeNode.next;

    if(this.back === removeNode) {
      this.back = removeNode.next;
    }
    return removeNode.value;
  }

  peek() {
    return console.log(this.back);
  }

}

module.exports ={ Queue, Stack, Node };
