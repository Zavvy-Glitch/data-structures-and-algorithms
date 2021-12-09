'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(val) {
    const node = new Node(val);
    if(!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while(current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  hash(key) {
    let sum = 0;
    for(let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return (sum * 599) % this.size;
  }

  add(key, value) {
    let index = this.hash(key);

    let bucket = this.map[index];
    let payload = {
      [key]: value
    };

    if (bucket){
      bucket.append(payload);
    } else {
      let list = new LinkedList();
      list.append(payload);
      this.map[index] = list;
    }
  }

  get(key){
    let index = this.hash(key);
    console.log(index);
    return index;

  }

  // contains(key){
  //   let hash = this.hash(key);
  //   if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)){
  //     return true;
  //   } else{
  //     return false;
  //   }

  // }

  repeatedWord(array){
    let words = array.split(' '),
      wordMap = {};
    for(let i = 0; i < words.length; i++){
      let currentWordCount = wordMap[words[i]];
      let count = currentWordCount ? currentWordCount : 0;
      wordMap[words[i]] = count + 1;
    }
    return wordMap;
  }
}

let map = new HashTable(1024);
console.log(map.hash('Random'));

map.add('Random', 'title');
console.log(map.map[247]);


let array = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
console.log(map.repeatedWord(array));
