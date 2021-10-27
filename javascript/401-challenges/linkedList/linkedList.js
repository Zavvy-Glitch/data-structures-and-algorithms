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
    // console.log('Insert new head', this);
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
    // console.log(current);
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
    });
    string = `${string}NULL`;
    return string;
  }

  append(value) {
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    } else {
      let current = this.head;
      // console.log('current value should be 15', current);
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

  insertBefore(value, newValue){
    if(!this.includes(value)) {
      return('Value cannot be located. Cannot insert');
    } else {
      let current = this.head;
      let prevNode = null;
      while(current.value !== value){
        prevNode = current;
        current = current.next;
      }
      let newNode = new Node(newValue);
      newNode.value = newValue;
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      // console.log(newNode);
    }
  }

  insertAfter(value, newValue){
    if(!this.includes(value)) {
      return('Value cannot be located. Cannot insert');
    } else {
      let current = this.head;
      let prevNode = this.head;
      while(current.value !== value){
        prevNode = current;
        current = current.next;
      }
      let newNode = new Node(newValue);
      newNode.next = current.next;
      current.next = newNode;
      prevNode.next = newNode;
      // console.log(newNode);
    }
  }

  kthFromEnd(k) {
    let current = this.head;
    let count = 0;

    while(current !== null){
      if (count === k)
        return current;
      count++;
      current = current.next;
      console.log(current);
      console.log(count);
    } return 0;
  }

}

const list1 = new LinkedList();
list1.head = new Node(15);
list1.head.next = new Node(8);
list1.head.next.next = new Node(80);
list1.head.next.next.next = new Node(40);
list1.head.next.next.next.next = new Node(50);
list1.head.next.next.next.next.next = new Node(18);
list1.head.next.next.next.next.next.next = new Node(2);



console.log(list1);

list1.insert();
list1.includes();
list1.toString();
list1.append();
list1.insertBefore();
list1.insertAfter();
list1.kthFromEnd();


module.exports = LinkedList;
