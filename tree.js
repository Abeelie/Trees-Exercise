/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // using the queue first-in-first-out (FIFO) approach 
    // initializing the queue array
    let queue = [this.root];
    // If the queue has no root return 0 meaning theres no tree values
    if (queue[0] === null) return 0;
    // initializing the total variable to hold the sum of values in tree
    let total = 0;
    // while the length is greater than zero which is true
    while (queue.length) {
    // initializing the current variable to hold the first value in queue array
      let current = queue.shift();
    // add the shift value to the total
      total += current.val;
    // if that current value has children push it to the queue array
      for (let child of current.children) queue.push(child);
    }
    // return total when all values have been looped through
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
  // using the queue first-in-first-out (FIFO) approach 
  // initializing the queue array
    let queue = [this.root];
  // If the queue has no root return 0 meaning theres no tree values
    if (queue[0] === null) return 0;
  // initializing the count variable to hold the count of even values in tree
    let count = 0;
  // while the length is greater than zero which is true
    while (queue.length) {
  // initializing the current variable to hold the first value in queue array
      let current = queue.shift();
  // if the remainder of the current.val is 0 then its even and increment the count by 1
      if(current.val % 2 == 0) count++;
  // if that current value has children push it to the queue array
      for (let child of current.children) queue.push(child);
    }
  // return count when all even values have been looped through
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
  // using the queue first-in-first-out (FIFO) approach 
  // initializing the queue array
  let queue = [this.root];
  // If the queue has no root return 0 meaning theres no tree values
    if (queue[0] === null) return 0;
  // initializing the count variable to hold the count of even values in tree
    let count = 0;
  // while the length is greater than zero which is true
    while (queue.length) {
  // initializing the current variable to hold the first value in queue array
      let current = queue.shift();
  // if the current.val is greater than lowerbound increment the count by 1
      if(current.val > lowerBound) count++;
  // if that current value has children push it to the queue array
      for (let child of current.children) queue.push(child);
    }
  // return count when all values have been looped through
    return count;
  }
}

module.exports = { Tree, TreeNode };
