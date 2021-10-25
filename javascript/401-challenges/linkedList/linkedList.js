'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // Should insert a new Node with a value of Null at the head
  insert(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    }else {
      node.next = this.head;
      this.head = node;
    }
    console.log('Insert new head', this);
    return this;
  }

  // needs to indicate if the value within  node is a Boolean. (Indicates/returns a truthy/falsy if value inside of Node is a Boolean)
  includes(value) {
    let current = this.head;

    while (current) {
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    console.log(current);
    return false;
  }

  toString() {
    let current = this.head;
    let stringArr = [];
    let string = '';

    if(!current){
      return ('Empty');
    } while(current) {
      stringArr.push(current.value);
      current = current.next;
    }
    stringArr.forEach(val => {
      string = string.concat(`{${val}}->`);
      console.log('Current String', string);
    });
    string = `${string}NULL`;
    console.log(string);
    return string;
  }
}

const list = new LinkedList();

list.head = new Node(15);
list.head.next = new Node(8);
list.head.next.next = new Node(80);
list.head.next.next.next = new Node(40);
console.log(list);

list.insert();
list.includes();
list.toString();

module.exports = LinkedList;
