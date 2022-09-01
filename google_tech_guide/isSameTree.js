// https://leetcode.com/problems/same-tree/

var isSameTree = function (p, q) {
  if (p == null && q == null) {
    return true;
  }

  if (
    (p !== null) & (q !== null) &&
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  ) {
    return true;
  }

  return false;
};

// - https://leetcode.com/problems/same-tree/

class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var root = new Tree(2);
var left = new Tree(1);
var right = new Tree(3);
root.left = left;
root.right = right;

var isSameTree = function (t1, t2) {
  if (!t1 && !t2) {
    return true;
  }
  if (!t1 || !t2) {
    return false;
  }
  if (t1.val !== t2.val) {
    return false;
  }
  return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
};

var root1 = new Tree(2);
var left1 = new Tree(1);
var right1 = new Tree(3);
root1.left = left1;
root1.right = right1;
var left12 = new Tree(4);
var right12 = new Tree(5);
left1.left = left12;
right1.right = right12;

console.log(isSameTree(root, root1));
