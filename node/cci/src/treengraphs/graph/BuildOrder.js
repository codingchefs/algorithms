/**
 * Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of projects,
 * where the second project is dependent on the first project).All of a project's dependencies must be built before the
 * project is. Find a build order that will allow the projects to be built. If there is no valid build order,
 * return an error.
 */
const Graph = require('./Graph');

class TopologicalSort extends Graph {
  buildOrder(processes) {
    const tempMarks = new Set();
    const permMarks = new Set();
    const results = [];

    for(let i = 0; i < processes.length; i++) {
      // if process is not in permMark
      if (!permMarks.has(processes[i])) {
        this.visit(processes[i], tempMarks, permMarks, results);
      }
    }

    return results;
  }

  visit (process, tempMarks, permMarks, results) {
    // check if there is a cycle
    if(tempMarks.has(process)) throw new Error('Cycle exists');
    // loop through the
    if(!permMarks.has(process)) {
      // add it to tempMarks
      tempMarks.add(process);
      // loop through its children
      this.adjacencyList.get(process).forEach(neighbor => {
        if(!permMarks.has(neighbor)) {
          this.visit(neighbor, tempMarks, permMarks, results);
        }
      })
    }
    // remove from tempMarks
    tempMarks.delete(process);
    // add it to permMarks
    permMarks.add(process);
    // add it to results
    results.push(process);
  }

}



const g = new TopologicalSort();
const vertices = ['f', 'e', 'a', 'b', 'c', 'd'];

for(let i =0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

g.addEdge('d', 'a');
g.addEdge('b', 'f');
g.addEdge('d', 'b');
g.addEdge('a', 'f');
g.addEdge('c', 'd');

// const request = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
console.log(g.buildOrder(vertices));