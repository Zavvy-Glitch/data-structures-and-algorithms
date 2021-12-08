'use strict';

class Queue {
  constructor(){
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue(){
    if(this.isEmpty())
      return 'Empty';
    return this.items.shift();
  }

  front(){
    if(this.isEmpty())
      return 'Empty';
    return this.items[0];
  }

  isEmpty(){
    return this.items.length === 0;
  }

  getQueue(){
    let str = '';
    for(let i = 0; i < this.items.length; i++)
      str += this.items[i] + ' ';
    return str;
  }
}

module.exports = { Queue };
