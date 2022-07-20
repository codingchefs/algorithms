class Graph_bck {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // The function should accept a starting node
  depthFirstRecursive(start) {
    // create a list to store the end result, to be returned at the very end
    const result = [];
    // create an object to store visited vertices
    const visited = {};
    const adjacencyList = this.adjacencyList;
    // create a helper function which accepts a vertex
    (function dfs(vertex) {
      // the helper function should return early if the vertex is empty
      if (!vertex) return null;
      // the helper function should place the vertex it accepts into the visited object and push the vertex into the
      // result array
      visited[vertex] = true;
      result.push(vertex);
      // Loop over all of the values in the adjacencyList for that vertex
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      })
    })(start);

    return result;
  }

  // The function should accept a starting node
  depthFirstIterative(start) {
    // create a stack to help use keep track of vertices (use a list/array)
    // add the starting vertex to the stack, and mark it visited
    const stack = [start];
    // create a list to store the end result, to be returned at the very end
    const result = [];
    // create and object to store visited vertices
    const visited = {};
    let currentVertex;

    visited[start] = true;
    // while the stack has something in it:
    while (stack.length) {
      // Pop the next vertex from the stack
      currentVertex = stack.pop();
      // Add it to the result list
      result.push(currentVertex);
      // Push all of its neighbors into the stack
      this.adjacencyList[currentVertex].forEach(neighbor => {
        // if that vertex has'nt been visited yet:
        if (!visited[neighbor]) {
          // Mark it as visited
          visited[currentVertex] = true;
          stack.push(neighbor);
        }
      });
    }

    // return the result array
    return result;
  }

  // This function should accept a starting vertex
  breadthFirst(start) {
    // create a queue (you can use an array) and place the starting vertex in it
    const queue = [start];
    // create an array to store the nodes visited
    const result = [];
    // create an object to store nodes visited
    const visited = {};
    let currentVertex;
    visited[start] = true;
    // loop as long as there is anything in the queue
    while(queue.length) {
      // remove the first vertex from the queue and push it into the array that stores nodes visited
      currentVertex = queue.shift();
      result.push(currentVertex);
      // loop over each vertex in the adjacency list for the vertex you are visiting
      this.adjacencyList[currentVertex].forEach(neighbor => {
        // If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }

    // once you have finished looping return the array of visited nodes
    return result;
  }
}


let g = new Graph_bck();
/*g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Aspen");
g.addVertex("Hong Kong");
g.addVertex("Los Angeles");

g.addEdge("Tokyo", "Dallas");
g.addEdge("Tokyo", "Hong Kong");
g.addEdge("Dallas", "Aspen");
g.addEdge("Dallas", "Hong Kong");
g.addEdge("Dallas", "Los Angeles");
g.addEdge("Hong Kong", "Los Angeles");*/

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.adjacencyList);
// g.removeEdge("Dallas", "Aspen");
// console.log(g.adjacencyList);
// g.removeVertex("Hong Kong");
// console.log(g.depthFirstRecursive("A"));
// console.log(g.depthFirstIterative("A"));
console.log(g.breadthFirst("A"));