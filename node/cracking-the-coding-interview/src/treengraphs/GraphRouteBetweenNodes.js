const Queue = require('../chapter-3-stacks-and-queues/Queue');
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    for (var [key, value] of this.AdjList) {
      console.log(key + " -> " + value.join(' '));
    }
  }

  bfs(startingNode) {
    console.log('==========BFS==========');
    var visited = {};

    for (let [key] of this.AdjList) {
      visited[key] = false;
    }

    var q = new Queue();
    visited[startingNode] = true;
    q.enqueue(startingNode);

    // loop until queue is element
    while(!q.isEmpty()) {
      // get the element from the queue
      var getQueueElement = q.dequeue();

      // passing the current vertex to callback function
      console.log(getQueueElement);

      // get the adjacent list for current vertex
      var get_list = this.AdjList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for(var i in get_list) {
       var neigh = get_list[i];

       if(!visited[neigh]) {
         visited[neigh] = true;
         q.enqueue(neigh);
       }
      }
    }

  }

  DFSUtil(vert, visited) {
    visited[vert] = true;
    console.log(vert);

    var get_neighbours = this.AdjList.get(vert);

    for (var i in get_neighbours) {
      var get_elem = get_neighbours[i];
      if (!visited[get_elem]) {
        this.DFSUtil(get_elem, visited);
      }
    }
  }


  dfs(startingNode) {
    console.log("=============DFS==========");
    let visited = {};
    for (let [key] of this.AdjList) {
      visited[key] = false;
    }

    this.DFSUtil(startingNode, visited);
  }

  isReachable(u, v) {
    console.log('==========BFS==========');
    var visited = {};

    for (let [key] of this.AdjList) {
      visited[key] = false;
    }

    var q = new Queue();
    visited[u] = true;
    q.enqueue(u);

    // loop until queue is element
    while(!q.isEmpty()) {
      // get the element from the queue
      var getQueueElement = q.dequeue();

      // passing the current vertex to callback function
      if(getQueueElement === v) {
        return true;
      }
      console.log(getQueueElement);

      // get the adjacent list for current vertex
      var get_list = this.AdjList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for(var i in get_list) {
        var neigh = get_list[i];

        if(!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      }
    }
  }
}

const g = new Graph(6);

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

// g.printGraph();
// g.bfs('A');
g.dfs('A');


/*
const u = 'C';
const v = 'E';
if (g.isReachable(u, v))
  console.log("There is a path from " + u +" to " + v);
else
  console.log("There is no path from " + u +" to " + v);*/
