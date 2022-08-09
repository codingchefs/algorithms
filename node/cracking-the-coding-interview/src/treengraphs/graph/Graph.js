class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if(!this.adjacencyList.get(vertex)) this.adjacencyList.set(vertex, []);
  }

  addEdge(v, w) {
    this.adjacencyList.get(v).push(w);
  }
}

module.exports = Graph;