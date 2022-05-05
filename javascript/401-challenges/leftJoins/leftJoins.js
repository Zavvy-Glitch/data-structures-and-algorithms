'use strict';

const HashTable = require('../hashTables/hashTable.js')



function LeftJoins(hash1, hash2) {
  const hashedMap = new HashTable(1024);
  const joinedMaps = []
  
  let synonyms = hash1;
  let antonyms = hash2;

  if(synonyms.get() === antonyms.get()) {

  }
  
  return joinedMaps;
}

const SnynonymMap = new HashTable(1024);
const AntonymMap = new HashTable(1024);

SnynonymMap.set("diligent", "employed");
SnynonymMap.set("fond", "enamored");
SnynonymMap.set("guide", "usher");
SnynonymMap.set("outfit", "garb");
SnynonymMap.set("wrath", "anger");

AntonymMap.set("diligent", "idle");
AntonymMap.set("fond", "averse");
AntonymMap.set("guide", "follow");
AntonymMap.set("flow", "jam");
AntonymMap.set("wrath", "delight");


console.log(LeftJoins(SnynonymMap, AntonymMap))