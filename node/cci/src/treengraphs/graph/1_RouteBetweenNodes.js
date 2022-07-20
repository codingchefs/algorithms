/**
 * Route Between Nodes:
 * Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
 */

const assert = require('assert');
const Graph = require('./Graph');

class RouteBetweenNodes extends Graph {
  constructor() {
    super();
  }

  // implement breadth first search
  isReachable(v1, v2) {
    // initialize a queue
    const queue = [v1];

    // initialize visited object
    const visited = {};
    visited[v1] = true;

    while(queue.length) {
      const currentVertex = queue.shift();
      if(currentVertex === v2) {
        return true;
      }
      this.adjacencyList.get(currentVertex).forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }

    return false;
  }
}

const g = new RouteBetweenNodes();

const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for(let i =0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// Tests
assert.equal(g.isReachable('A', 'F'), true);
assert.equal(g.isReachable('B', 'E'), false);
console.log('==== ALL TESTS PASSED! ===');



