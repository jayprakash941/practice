// Depth of a binary tree (Max depth)
let maxDepth = (root) => {
  if (root === null) {
    return 0;
  }
  let left = 1 + maxDepth(root.left);
  let right = 1 + maxDepth(root.right);
  return Math.max(left, right);
};

//Maximum depth of n-ary tree  -- Todo

//merge 2 binary tree

let mergeBinaryTree = (t1, t2) => {
  if (t1 === null && t2 === null) {
    return null;
  }

  if (t1 === null) {
    return t2;
  }

  if (t2 === null) {
    return t1;
  }
  let nTree = new Tree(t1.val + t2.val);

  nTree.left = mergeBinaryTree(t1.left, t2.left);
  nTree.right = mergeBinaryTree(t1.right, t2.right);

  return nTree;
};

//Sum of root to leaf path

let sumRootToLeaf = (root) => {
  let sum = 0;
  return rootToLeaf(root, sum);
};

let rootToLeaf = (root, sum) => {
  if (root === null) {
    return 0;
  }
  sum = sum + root.val;
  if (root.left === null && root.right === null) {
    return sum;
  }

  let reftsum = rootToLeaf(root.left, sum);

  let rightsum = rootToLeaf(root.right, sum);

  return reftsum + rightsum;
};

// is univalsal tree

let isUnivalTree = (root) => {
  return isSame(root, root.val);
};

let isSame = (root, val) => {
  if (root === null) {
    return true;
  }

  if (root.val != val) return false;

  return isSame(root.left, val) && isSame(root.right, val);
};

//Leaf similar tree

let isLeafSimilar = (r1, r2) => {};

class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var root = new Tree(0);
var left = new Tree(0);
var right = new Tree(0);
root.left = left;
root.right = right;

var root1 = new Tree(0);
var left = new Tree(1);
var right = new Tree(4);
root1.left = left;
root1.right = right;
console.log(isUnivalTree(root));
