// Create a new node with the value passed to the function
// If the head property is null set the head and tail to be 
// the newly created node
// If not, set the next property on the tail to be that node
// Set the previous property on the newly created node 
// to be the tail
// Set the tail to be the newly created node
// Increment the length 
// Return the Doubly Linked List
//----Popping -------> //
//If there is no head, return undefined
// Store the current tail in a varibale to return later
// If the length is 1, set the head and tail to be null
// Update the tail to be the previous Node.
// Set the newTail's next to null
// Decrement the length
// Return the value removed
//----- Shifting -------> //
// If length is 0, return undefined
// Store the current head property in a variable(we'll call it old head)
// If the length is one set the head to be null 
// Set the tail to be null
// Update the head to be the next of the old head 
// Set the head's prev property to null
// Set the old head's next to null
// Decrement the length
// Return old head
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}


class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
     var newNode = new Node(val);
     if(this.length === 0){
         this.head = newNode;
         this.tail = newNode;
     } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
     }
     this.length++;
     return this;
  }
  pop(){
    if(!head) return undefined;
    var poppedNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift(){
    if(this.length === 0) return undefined;
    var oldHead = this.head;
    if(this.length === 1){
        this.head = null;
        this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val){
    var newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length) return null;
    var count, current;
    if(index <= this.length/2){
       count = 0;
       current = this.head;
      while(count != index){
        current = current.next;
        count++;
       }
    } else {
      count = this.length - 1;
      current = this.tail;
      while(count !== index){
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val){
   var foundNode = this.get(index);
   if(foundNode != null){
     foundNode.val = val;
     return true;
   }
   return false;
  }
  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return this.unshift(val);
    if(index === this.length) return this.push(val);
    var newNode = new Node(val);
    var beforeNode = this.get(index-1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length -1) return this.pop();
    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

var list = new DoublyLinkedList()
list.push('Harry')
list.push('Ron')
list.push('Hermione')

