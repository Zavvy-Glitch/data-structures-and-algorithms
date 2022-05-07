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

  addDirectEdge(startVertex, endVertex) {
    const neighbors = this.adjList.get(startVertex);
    neighbors.push(new Edge(endVertex));
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

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C')
const D = graph.addVertex('D')
const E = graph.addVertex('E')
const F = graph.addVertex('F')
const G = graph.addVertex('G')
const H = graph.addVertex('H')


graph.addDirectEdge(A, B);
graph.addDirectEdge(A, D);
graph.addDirectEdge(A, C);
graph.addDirectEdge(B, G)
graph.addDirectEdge(D, F)
graph.addDirectEdge(H, D)
graph.addDirectEdge(C, H)
graph.addDirectEdge(F, H)
graph.addDirectEdge(F, E)

// console.log(graph.adjList)
// console.log('*****************DFT**************************')
// graph.depthFirst(A, console.log)
// console.log('******************BFT**************************')
// graph.breadthFirst(A, console.log)
// console.log('***************Vertices************************')
// console.log(graph.getVertices());
// console.log(graph.getNeighbors(A));
// console.log(graph.size());

module.exports = {Graph, Vertex, Edge}