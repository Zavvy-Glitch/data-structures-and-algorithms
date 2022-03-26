'use strict';

const Node = require('./Node.js');

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(val) {
    let node = new Node(val);

    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    return this;
  }

  includes(val) {
    let current = this.head;

    while(current) {
      if(current.value === val){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let stringArr = [];
    let string = '';

    if(!current){
      return('Linked List is Empty');
    } while (current) {
      stringArr.push(current.value);
      current = current.next;
    }
    stringArr.forEach(val => {
      string = string.concat(`[${val}] -> `)
    });
    string = `${string}NULL`;
    return string;
  }
}

module.exports = LinkedList;
