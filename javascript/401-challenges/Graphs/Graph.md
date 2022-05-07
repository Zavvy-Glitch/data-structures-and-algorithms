# Graphs
- DSA Implimentation of Graphs

## Challenge
- Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

  - add node
    - Arguments: value
    - Returns: The added node
    - Add a node to the graph
  - add edge
    - Arguments: 2 nodes to be connected by the edge, weight (optional)
    - Returns: nothing
    - Adds a new edge between two nodes in the graph
    - If specified, assign a weight to the edge
    - Both nodes should already be in the Graph
  - get nodes
    - Arguments: none
    - Returns all of the nodes in the graph as a collection (set, list, or similar)
  - get neighbors
    - Arguments: node
    - Returns a collection of edges connected to the given node
    - Include the weight of the connection in the returned collection
  - size
    - Arguments: none
    - Returns the total number of nodes in the graph

## Resources

References:
 - [MDN Web Docs: Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
 - [MDN Web Docs: Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 - [GeeksforGeeks Graph](https://www.geeksforgeeks.org/implementation-graph-javascript/)

## API
Types of Methods Available in Graph:
  - `addVertex`:
    - this adds a node/vertex into a graph
  - `addDirectEdge`
    - this adds edges to the vertex. (Mono-Directional unless specified)
  - `getNeighbors`
    - this returns all neighboring vertices/nodes of a given vertex/node
  - `getVertices`
    - this returns a object of vertex values
  - `size`
    - this returns the count of how many vertices are in the graph
  - `depthFirst`
    - starts at the root node and explores as far as possible along each branch before backtracking.
  - `breadthFirst`
    - starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level