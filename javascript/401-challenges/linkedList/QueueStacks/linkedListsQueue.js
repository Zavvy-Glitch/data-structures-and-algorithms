class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor () {
    this.top = null;
  }

  push(record) {
    let prevRecord = this.top;
    let node = new Node(record);
    node.next = prevRecord;
    this.top = node;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    return temp.value;
  }

  peek() {
    return this.top.value;
  }

  isEmpty() {
    if(!this.top){
      return true;
    } return false;
  }
}

////////////////////////////////////////

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(record) {
    let addNode = new Node(record);

    if(!this.front) {
      this.front = addNode;
      this.back = addNode;
    } else {
      this.back.next = addNode;
      this.back = addNode;
    }
  }

  dequeue() {
    let removeNode = this.front;
    if(removeNode.next) {
      this.front = removeNode.next;
    } else {
      this.front = null;
    }

    if(this.back === removeNode) {
      this.back = removeNode.next;
    }
    return removeNode.value;
  }

  peek() {
    console.log(this.front.value);
    return this.front;
  }

}

module.exports ={ Queue, Stack, Node };
