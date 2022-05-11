const { Graph } = require("../graph.js");
const businessTrip = require("../graphBizTrip.js");

describe("Testing businessTrip functionality", () => {
  let graph = new Graph();

  const Pandora = graph.addVertex("Pandora");
  const Arendelle = graph.addVertex("Arendelle");
  const Metroville = graph.addVertex("Metroville");
  const Monstropolis = graph.addVertex("Monstropolis");
  const Narnia = graph.addVertex("Narnia");
  const Naboo = graph.addVertex("Naboo");

  graph.addDirectEdge(Pandora, Arendelle, 150);
  graph.addDirectEdge(Arendelle, Metroville, 99);
  graph.addDirectEdge(Arendelle, Monstropolis, 42);
  graph.addDirectEdge(Metroville, Monstropolis, 105);
  graph.addDirectEdge(Metroville, Naboo, 26);
  graph.addDirectEdge(Metroville, Narnia, 37);

  test('Function should return true if flight is available, along with the cost of a flight', () => {
    let flightOne = businessTrip(graph, [Pandora, Arendelle]);

    expect(flightOne[0]).toEqual(true);
    expect(flightOne[1]).toEqual('150');
  });

  test('Function should return error message if graph is empty', () => {
    let newGraph = new Graph();

    let newFlights = businessTrip(newGraph, [Arendelle, Pandora]);
    expect(newFlights).toEqual('No Graph. Please Try Again')
  })

  test('Function should return false with a null cost of flight if flight is not available', () => {
    let flightTwo = businessTrip(graph, [Arendelle, Pandora])

    expect(flightTwo[0]).toEqual(false);
    expect(flightTwo[1]).toEqual(null)
  })
});
