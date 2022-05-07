'use strict'

const { Graph } = require('../graph.js')

describe('Testing the functionality of Graphs Methods', () => {

  const graph = new Graph();


  test('Node can be successfully added to the graph', () => {
    const A = graph.addVertex('A');
   
    expect(A).toEqual({ "value" : 'A' })
  })
  
  test('An edge can be successfully added to the graph', () => {
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');

    graph.addDirectEdge(A, B);

    let newEdge = graph.getNeighbors(A)
    
    expect(newEdge).toEqual([{"vertex": {"value": "B"}, "weight": 0}])
  })

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    let nodes = graph.getVertices();
     console.log(nodes)
    expect(nodes).toEqual()
  })

  test('All appropriate neighbors can be retrieved from the graph', () => {

  })

  test('Neighbors are returned with the weight between nodes included', () => {

  })

  test('The proper size is returned, representing the number of nodes in the graph', () => {

  })

  test('A graph with only one node and edge can be properly returned', () => {

  })

  test('An empty graph properly returns null', () => {

  })
})