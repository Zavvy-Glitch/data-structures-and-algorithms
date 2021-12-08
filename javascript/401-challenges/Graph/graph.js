'use strict';

const { Queue } = require('./queue.js');

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
  }

  addVertices(v) {
    this.adjList.set(v, []);
  }

  addEdges(sV, eV) {
    if(!this.adjList.has(sV) && !this.adjList.has(eV)){
      throw new Error('No Vertex Available');
    }
    this.adjList.get(sV).push(eV);
    this.adjList.get(eV).push(sV);
  }

  getNeighbors() {
    let getVertices = this.adjList.keys();
    for(let i of getVertices){
      let getValues = this.adjList.get(i);
      let neighbors = '';

      for(let j of getValues)
        neighbors += j + ' ';

      console.log(i + ' -> ' + neighbors);
    }
  }

  bfs(node) {
    let queue = new Queue();
    let visited = new Set();
    visited[node] = true;
    queue.enqueue(node);

    while(!queue.isEmpty()) {
      let getQueue = queue.dequeue();
      console.log(getQueue);

      let getList = this.adjList.get(getQueue);

      for(let i in getList) {
        let neighbor = getList[i];

        if(!visited[neighbor]) {
          visited[neighbor] = true;
          queue.enqueue(neighbor);
        }
      }
    }
  }
}

let graph = new Graph(7);
let vertex = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

for (let i = 0; i < vertex.length; i++) {
  graph.addVertices(vertex[i]);
}

graph.addEdges('A', 'B');
graph.addEdges('A', 'C');
graph.addEdges('A', 'D');
graph.addEdges('A', 'G');
graph.addEdges('B', 'C');
graph.addEdges('C', 'B');
graph.addEdges('D', 'C');
graph.addEdges('D', 'E');
graph.addEdges('D', 'E');
graph.addEdges('F', 'E');
graph.addEdges('G', 'B');
graph.addEdges('G', 'F');

console.log(graph);
console.log('***Vertices***');
graph.bfs('A');
console.log('***Neighbors***');
graph.getNeighbors(vertex);

module.exports = { Graph };
