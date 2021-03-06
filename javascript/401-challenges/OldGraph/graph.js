"use strict";

const { Queue } = require("./queue.js");

class Graph {
  constructor() {
    this.adjList = new Map();
    this.edges = 0;
  }

  addVertices(v) {
    this.adjList.set(v, []);
  }

  addEdges(sV, eV /*weight*/) {
    if (!this.adjList.has(sV) && !this.adjList.has(eV)) {
      throw new Error("No Vertex Available");
    }
    this.adjList.get(sV /* weight*/).push(eV /* weight*/);
    // this.adjList.get(eV /* weight*/).push(sV /* weight*/);
    this.edges++;
  }

  getNeighbors(vertex) {
    if (!this.adjList.has(vertex)) {
      throw new Error("No Edges Available");
    }
    return [...this.adjList.get(vertex)];
  }

  getNodes() {
    let getVertices = this.adjList.keys();
    for (let i of getVertices) {
      let getValues = this.adjList.get(i);
      let neighbors = "";

      for (let j of getValues) neighbors += j + " ";

      console.log(i + " -> " + neighbors);
    }
  }

  bfs(node) {
    let queue = new Queue();
    let visited = new Set();
    visited[node] = true;
    queue.enqueue(node);

    while (!queue.isEmpty()) {
      let getQueue = queue.dequeue();
      console.log(getQueue);

      let getList = this.adjList.get(getQueue);

      for (let i in getList) {
        let neighbor = getList[i];

        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.enqueue(neighbor);
        }
      }
    }
  }

  dfs(node) {
    let visited = {};
    this.DFSUtil(node, visited);
  }
  DFSUtil(vert, visited) {
    visited[vert] = true;
    console.log(vert);
    let get_neighbours = this.adjList.get(vert);

    for (let i in get_neighbours) {
      let get_element = get_neighbours[i];
      if (!visited[get_element]) this.DFSUtil(get_element, visited);
    }
  }
}

let graph = new Graph();
let vertex = [
  "Pandora",
  "Arendelle",
  "Monstropolis",
  "Metroville",
  "Naboo",
  "Narnia",
];

for (let i = 0; i < vertex.length; i++) {
  graph.addVertices(vertex[i]);
}

graph.addEdges("Pandora", "Arendelle", 150);
graph.addEdges("Pandora", "Metroville", 82);
graph.addEdges("Arendelle", "Metroville", 99);
graph.addEdges("Arendelle", "Monstropolis", 42);
graph.addEdges("Monstropolis", "Metroville", 105);
graph.addEdges("Monstropolis", "Naboo", 73);
graph.addEdges("Metroville", "Narnia", 37);
graph.addEdges("Naboo", "Metroville", 26);
graph.addEdges("Narnia", "Naboo", 250);

console.log(graph);
console.log("*****BFS Traversal*****");
console.log(graph.bfs("Pandora"));
console.log("*****Neighbors******");
console.log(graph.getNeighbors("Pandora"));
console.log("******Nodes******");
graph.getNodes();
console.log("*****DFS Traversal*****");
console.log(graph.dfs("Pandora"));

module.exports = { Graph };
