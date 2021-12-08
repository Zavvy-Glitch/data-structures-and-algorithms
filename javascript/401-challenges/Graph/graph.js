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

let graph = new Graph(6);
let vertex = ['Pandora', 'Arendelle', 'Monstropolis', 'Metroville', 'Naboo', 'Narnia'];

for (let i = 0; i < vertex.length; i++) {
  graph.addVertices(vertex[i]);
}

graph.addEdges('Pandora', 'Arendelle');
graph.addEdges('Arendelle', 'Metroville');
graph.addEdges('Arendelle', 'Monstropolis');
graph.addEdges('Monstropolis', 'Metroville');
graph.addEdges('Monstropolis', 'Naboo');
graph.addEdges('Metroville', 'Narnia');
graph.addEdges('Naboo', 'Metroville');
graph.addEdges('Narnia', 'Naboo');

console.log(graph);
console.log('*****Vertices / BFS Traversal*****');
graph.bfs('Pandora');
console.log('*****Neighbors******');
graph.getNeighbors(vertex);

module.exports = { Graph };
