"use strict";

const LinkedList = require("./linkedList");

class HashTable {
  constructor(size) {
    this.size = size;
    this.bucket = new Array(size);
  }

  hash(key) {
    let characters = key.split("");
    let ascii = characters.reduce((sum, char) => {
      return sum + char.charCodeAt(0);
    }, 0);

    let initHash = ascii * 599;

    return initHash % 1024;
  }

  set(key, value) {
    const position = this.hash(key);
    const data = { [key]: value };

    if (this.bucket[position]) {
      let bucket = this.bucket[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();

      bucket.add(data);
      this.bucket[position] = bucket;
    }
  }

  get(key) {
    const position = this.hash(key);

    if (this.bucket[position]) {
      let bucket = this.bucket[position];
      let value = bucket.head.value[key];
      return value;
    }
  }

  contains(key) {
    let position = this.hash(key);
    if (this.bucket[position]) {
      console.log('Key Exists');
      return true;
    } else {
      console.log('Key Does Not Exists');
      return false;
    }
  }
}

module.exports = HashTable

// let table = new HashTable(1024);
// console.log(table);
// table.set("Barbara", "324-662-8749");
// table.set("Benjamin", {lastName: "Aldrich"});
// console.log("HERE =>:", table)
// console.log('Barbara', table.get("Barbara"))
// console.log('Benjamin', table.get("Benjamin"));
// console.log('Bobby', table.contains("Bobby"))
