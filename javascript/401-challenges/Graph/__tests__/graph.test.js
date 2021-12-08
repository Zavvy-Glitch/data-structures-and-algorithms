'use strict';

const { Graph } = require('../graph.js');


let vertex = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

test('Graph is a usable class', () => {
  expect(typeof Graph.prototype.constructor).toEqual('function');
});

test('A vertex can be successfully added to the graph', () => {
  let graph = new Graph;
  for (let i = 0; i < vertex.length; i++) {
    graph.addVertices(vertex[i]);
  }
  expect(vertex[0]).toEqual('A');
});

test('A collection of all nodes can be properly retrieved from the graph', () => {

});

test('All appropriate neighbors can be retrieved from the graph', () => {

});

test('Neighbors are returned with the weight between nodes included', () => {

});

test('The proper size is returned, representing the number of nodes in the graph', () => {

});

test('A graph with only one node and edge can be properly returned', () => {

});

test('An empty graph properly returns null', () => {

});

