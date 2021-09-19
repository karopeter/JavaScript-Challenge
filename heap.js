// Push the value into the values property on the heap
// Bubble Up:
// Create a variable called index which is the length of the values 
// property -1
// Create a variable called parentIndex which is the floor of (index-1)/2
// Keep looping as long as the values element at the child index
// Swap the values of the values element at the parentIndex with the values
// of the element property at the child index
// Set the index to be the parentIndex, and start over!
class MaxBinaryHeap {
    constructor(){
      this.values = [];
    }
    insert(element){
      this.values.push(element);
      this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
         while(idx > 0){
          let parentIdx = Math.floor((idx - 1)/2);
          let parent = this.values[parentIdx];
          if(element <= parent) break;
          this.values[parentIdx] = element;
          this.values[idx] = parent;
          idx = parentIdx;
        }
    }
    extractMax(){
     const max = this.values[0];
     const end = this.values.pop();
     if(this.values.length > 0){
        this.values[0] = end;
        this.sinkDown();
     }
     return max;
    }
    sinkDown(){
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while(true){
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild,rightChild;
        let swap = null;

        if(leftChildIdx < length){
          leftChild = this.values[leftChildIdx];
          if(leftChild > element){
             swap = leftChildIdx;
          }
        }
        if(rightChildIdx < length){
            rightChild = this.values[rightChildIdx];
            if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
               swap = rightChildIdx;
            }
        }
        if(swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

// [41,39,33,18,27,12,55]
//  0  1  2   3  4  5 6

