'use strict'

const { Graph } = require('../graph.js')

describe('Testing the functionality of Graphs Methods', () => {

  
  
  test('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
   
    expect(A).toEqual({ "value" : 'A' })
  })
  
  test('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');

    graph.addDirectEdge(A, B);

    let newEdge = graph.getNeighbors(A)
    
    expect(newEdge).toEqual([{"vertex": {"value": "B"}, "weight": 0}])
  })

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    graph.addDirectEdge(A, B);

    let nodes = graph.getVertices();
    expect(console.log(nodes)).toEqual()
  })

  test('All appropriate neighbors can be retrieved from the graph', () => {

  })

  test('Neighbors are returned with the weight between nodes included', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');

    graph.addDirectEdge(A, B);

    let newEdge = graph.getNeighbors(A)
    
    expect(newEdge).toEqual([{"vertex": {"value": "B"}, "weight": 0}])
  })

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    graph.addDirectEdge(A, B);

    let graphSize = graph.size();

    expect(graphSize).toEqual(2)
  })


  test('A graph with only one node and edge can be properly returned', () => {

  })

  test('An empty graph properly returns null', () => {

  })

  test('A breadthFirst Traversal should return the proper order', () => {
    const graph = new Graph;

    const Arendelle = graph.addVertex('Arendelle');
    const Pandora = graph.addVertex('Pandora');
    const Metroville = graph.addVertex('Metroville');
    const Monstropolis = graph.addVertex('Monstropolis');

    graph.addDirectEdge(Pandora, Arendelle);
    graph.addDirectEdge(Arendelle, Pandora);
    graph.addDirectEdge(Arendelle, Metroville);
    graph.addDirectEdge(Arendelle, Monstropolis);
    graph.addDirectEdge(Metroville, Arendelle);
    graph.addDirectEdge(Metroville, Monstropolis);
    graph.addDirectEdge(Monstropolis, Metroville);
    graph.addDirectEdge(Monstropolis, Arendelle);

    let results = graph.breadthFirst(Pandora);

    expect(console.log(results)).toEqual()

  })
})