'use strict';

const Node = require('./Node.js');

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  includes(val) {
    let current = this.head;

    while (current) {
      if (current.value === val) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let stringArr = [];
    let string = "";

    if (!current) {
      return "Linked List is Empty";
    }
    while (current) {
      stringArr.push(current.value);
      current = current.next;
    }
    stringArr.forEach((val) => {
      string = string.concat(`[${val}] -> `);
    });
    string = `${string}NULL`;
    return string;
  }

  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertBefore(val, newVal) {
    if (!this.includes(val)) {
      return "No value associated, cannot insert";
    } else if (this.head.value === val) {
      let newNode = new Node(newVal);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prevNode = null;
      while (current.value !== val) {
        prevNode = current;
        current = current.next;
      }
      let newNode = new Node(newVal);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }
  }

  insertAfter(val, newVal) {
    if (!this.includes(val)) {
      return "No value associated, cannot insert";
    } else {
      let current = this.head; //12
      let prevNode = this.head; //12
      while (current.value !== val) {
        prevNode = current;
        current = current.next;
      }

      let newNode = new Node(newVal);
      prevNode = current.next;
      current.next = newNode;
      newNode.next = prevNode;
    }
  }

  kthFromEnd(k) {
   let count = 0;
   let current = this.head;
   let temp = this.head;

   if(this.head !== null) {
     while(count < k) {
       if(temp === null) {
         console.log(k + " is greather than the no. of Nodes in list")
         return k + " is greather than the no. of Nodes in list";
       }
       temp = temp.next;
       count++;
     }
     if(temp === null){
       if(this.head !== null){
         console.log("Node no." + k + "'s value from last is " + this.head.value)
         return "Node no." + k + " value from last is " + this.head.value;
       } else {
         while (temp !== null) {
           current = current.next;
           temp = temp.next;
         }
         console.log("Node no." + k + " from last is" + current.value)
         return "Node no." + k + " from last is" + current.value;
       }
     }
   }
 }
}

module.exports = LinkedList;
