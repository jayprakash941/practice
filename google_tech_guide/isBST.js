// https://leetcode.com/problems/validate-binary-search-tree/

// using inorder traversal
var prev = null;
var checkBST1 = function (head) {
  if (head === null) {
    return true;
  }
  if (!checkBST1(head.left)) {
    return false;
  }
  if (prev !== null && head.val <= prev) {
    return false;
  }
  prev = head.val;
  return checkBST1(head.right);
};

class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var root = new Tree(5);
var left = new Tree(1);
var right = new Tree(4);
root.left = left;
root.right = right;
console.log(checkBST1(root));
