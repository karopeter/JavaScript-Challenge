// Create a new node 
// Starting at the root
// Check if there is a root, if not - the root now becomes that new 
// node! If there is a root, check if the value of the new node is greater than 
// or less than the value of the root
// If it is greater 
// Check to see if there is a node to the right 
// If there is, move to that node and repeat these steps
// If there is notm add that node as the right property
// if it is less
// Check to see if there is a node to the left
// If there is, move to that node and repeat these steps
// If there is not, add that node as the left property

class Node {
  constructor(value){
     this.value = value;
     this.left = null;
     this.right = null;
  }
}

class BinarySearchTree {
    constructor() {
     this.root = null;
    }
    insert(value){
     var newNode = new Node(value);
     if(this.root === null){
         this.root = newNode;
         return this;
     } else {
       var current = this.root;
       while(true){
           if(value === current.value) return undefined;
        if(value < current.value){
          if(current.left === null){
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if(value > current.value){
          if(current.right === null){
              current.right = newNode;
              return this;
          } else {
            current = current.right;
          }
        }
       }
     }
    }
    find(value){
      if(this.root === null) return false;
      var current = this.root,
          found = false;
      while(current && !found){
        if(value < current.value){
          current = current.left;
        } else if(value > current.value){
          current = current.right;
        } else {
          found = true;
        }
      }
      if(!found) return undefined;
      return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
          if(value < current.value){
            current = current.left;
          } else if(value > current.value){
            current = current.right;
          } else {
           return true;
          }
        }
        return false;
      }
      BFS(){
        var node = this.root,
            data = [],
            queue = [];

        queue.push(node);
        while(queue.length){
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
      }
      DFSPreOrder(){
        var data = [];
        function traverse(node){
          data.push(node.value);
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
      }
      DFSPostOrder(){
        var data = [];
        function traverse(node){
         if(node.left) traverse(node.left);
         if(node.right) traverse(node.right);
         data.push(node.value);
        }
        traverse(this.root);
        return data;
      }
      DFSInOrder(){
        var data = [];
        function traverse(node){
          node.left && traverse(node.left);
          data.push(node.value);
          node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
      }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.DFSPreOrder()
tree.DFSPostOrder()
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);





// create a queue (this can be an array) and a variable to store
// the values of nodes visited
// place the root node in the queue 
// loop as long as there is anything in the queue
// Dequeue a node from the queue and push the values of the node 
// into the variable that stores the nodes
// if there is a left property on the node dequeued - add it to the queue
// if there is a right property on the node dequeued - add it to the queue

// Create a variable to store the values of nodes visited 
// Store the root of the BST in a variable called current
// write a helper function which accepts a node
// push the values of the node to the variable that stores the values
// If the node has a left property, call the helper function with
// the left property on the node
// if the node has a right property, call the helper function with the right 
// property on the node
// Invoke the helper function with the current variable
// Return the array of values