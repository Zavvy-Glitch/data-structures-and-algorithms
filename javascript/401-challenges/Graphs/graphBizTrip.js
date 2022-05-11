'use strict';

const { Graph } = require('./graph.js');

function businessTrip(graph, cityNames) {
   
  console.log(cityNames);

  if(!graph.adjList.size){
    return 'No Graph. Please Try Again'
  }

  let flights = graph.adjList.get(cityNames[0]);
  console.log(flights)
  
  if(flights) {
    for(let list of flights) {
      if(list.vertex.value === cityNames[1].value) {
        return [true, `${list.weight}`]
      }
    }
  }
  return [false, null];
};

const graph = new Graph();

const Pandora = graph.addVertex('Pandora');
const Arendelle = graph.addVertex('Arendelle');
const Metroville = graph.addVertex('Metroville')
const Monstropolis = graph.addVertex('Monstropolis')
const Narnia = graph.addVertex('Narnia')
const Naboo = graph.addVertex('Naboo')

graph.addDirectEdge(Pandora, Arendelle, 150);
graph.addDirectEdge(Arendelle, Metroville, 99);
graph.addDirectEdge(Arendelle, Monstropolis, 42);
graph.addDirectEdge(Metroville, Monstropolis, 105);
graph.addDirectEdge(Metroville, Naboo, 26);
graph.addDirectEdge(Metroville, Narnia, 37);


let results = businessTrip(graph, [Arendelle, Pandora])

console.log(results);

module.exports = businessTrip;