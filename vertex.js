// Write a method called addVertex, which accepts a name 
// of  a vertex
// It should add a key to the adjacency list with the name of 
// the vertex and set its value to be an empty array
// Vertex 
// The function should accept a vertex to remove
// The function should loop as long as there are any other 
// vertices in the adjacency list for that vertex
// Inside of the loop, call our removeEdge function with the
// vertex we are removing and any values in the adjacency list for that 
// vertex
// delete the key in the adjacency list for that vertex
class Graph {
  constructor() {
     this.adjacencyList = {};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1,v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1,vertex2){
     this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
     this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }
  removeVertex(vertex){
      while(this.adjacencyList[vertex].length){
         const adjacenctVertex = this.adjacencyList[vertex].pop();
         this.removeEdge(vertex, adjacenctVertex);
      }
      delete this.adjacencyList[vertex]
  }
  depthFirstRecursive(start){
     const result = [];
     const visited = {};
     const adjacencyList = this.adjacencyList;

     (function dfs(vertex) {
       if(!vertex) return null;
       visited[vertex] = true;
       result.push(vertex);
       adjacencyList[vertex].forEach(neighbor => {
         if(!visited[neighbor]){
             return dfs(neighbor)
         }
       });
     })(start);
     return result;
  }
  depthFirstIterative(start){
     const stack = [start];
     const result = [];
     const visited = {};
     let currentVertex;

     visited[start] = true;
     while(stack.length){
        currentVertex = stack.pop();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
           if(!visited[neighbor]){
             visited[neighbor] = true;
             stack.push(neighbor)
           }
        });
     }
     return result;
  }
  breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
     currentVertex = queue.shift();
     result.push(currentVertex);

     this.adjacencyList[currentVertex].forEach(neighbor => {
      if(!visited[neighbor]){
        visited[neighbor] = true;
        queue.push(neighbor);
      }
     });
    }
    return result;
  }
}

let l = new Graph();
l.addVertex('A');
l.addVertex('B');
l.addVertex('C');
l.addVertex('D');
l.addVertex('E');
l.addVertex('F');

l.addEdge('A', 'B');
l.addEdge('A', 'C');
l.addEdge('B', 'D');
l.addEdge('C', 'E');
l.addEdge('D', 'E');
l.addEdge('D', 'F');
l.addEdge('E', 'F');

// ------- DEPTH FIRST TRAVERSAL ------- //
// The function should accept a starting node
// Create a list to store the end result, to be returned at the 
// very end
// Create an object to store your visited vertices
// The helper function should return early if the vertex is 
// empty
// The helper function should place the vertex it accepts into the
// visited object and push that vertex into the result array.
// Loop over all of the values in the adjacencyList for that vertex
// If any of those values have not been visited, recursively invoke the
// helper function with that vertex
// Invoke the helper function with the starting vertex
// Return the result array