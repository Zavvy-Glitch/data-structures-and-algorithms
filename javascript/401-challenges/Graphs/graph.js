"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjList = new Map();
    this.vertices = new Set();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjList.set(vertex, []);
    this.vertices.add(vertex);
    return vertex;
  }

  addDirectEdge(startVertex, endVertex, weight) {
    const neighbors = this.adjList.get(startVertex);
    neighbors.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjList.has(vertex)) {
      throw new Error("No Edges Available");
    }
    return [...this.adjList.get(vertex)];
  }

  getVertices() {
    return this.vertices.values();
  }

  size() {
    return this.vertices.size;
  }

  depthFirst(root, cb) {
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;
  
    
    while(stack.length) {
      current = stack.pop();
  
      if(cb) console.log(current.value)
  
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if(!visited.has(edge.vertex)) {
          visited.add(edge.vertex)
          stack.push(edge.vertex)
        }
      }
  
    }
    return visited;
  }
 
  breadthFirst(root, cb) {
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;
  
    
    while(queue.length) {
      current = queue.pop();
  
      if(cb) console.log(current.value)
  
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if(!visited.has(edge.vertex)) {
          visited.add(edge.vertex)
          queue.unshift(edge.vertex)
        }
      }
  
    }
    return visited
  }
}



const graph = new Graph();

const Pandora = graph.addVertex('Pandora');
const Arendelle = graph.addVertex('Arendelle');
const Metroville = graph.addVertex('Metroville')
const Monstropolis = graph.addVertex('Monstropolis')
const Narnia = graph.addVertex('Narnia')
const Naboo = graph.addVertex('Naboo')



graph.addDirectEdge(Pandora, Arendelle, 150);
graph.addDirectEdge(Arendelle, Pandora);
graph.addDirectEdge(Arendelle, Metroville, 99);
graph.addDirectEdge(Arendelle, Monstropolis, 42);
graph.addDirectEdge(Metroville, Arendelle)
graph.addDirectEdge(Metroville, Monstropolis, 105);
graph.addDirectEdge(Metroville, Naboo, 26);
graph.addDirectEdge(Metroville, Narnia, 37);
graph.addDirectEdge(Monstropolis, Arendelle);
graph.addDirectEdge(Monstropolis, Metroville);
graph.addDirectEdge(Monstropolis, Naboo);
graph.addDirectEdge(Naboo, Monstropolis);
graph.addDirectEdge(Naboo, Metroville);
graph.addDirectEdge(Naboo, Narnia);
graph.addDirectEdge(Narnia, Metroville)
graph.addDirectEdge(Narnia, Naboo)


// console.log(graph.adjList)
// console.log('*****************DFT**************************')
// graph.depthFirst(Pandora, console.log)
// console.log('******************BFT**************************')
// graph.breadthFirst(Pandora, console.log)
// console.log('***************************************')
// console.log('Graphs Vertices: ', graph.getVertices());
// console.log(`Neighbors of ${Arendelle.value}`, graph.getNeighbors(Arendelle));
// console.log('Size of Graph: ',graph.size());

module.exports = {Graph, Vertex, Edge}