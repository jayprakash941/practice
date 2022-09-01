// https://leetcode.com/problems/validate-binary-search-tree/

var isValidBST = function (root) {
  return isValidBST(root, null, null);

  function isValidBST(root, min, max) {
    if (root == null) return true;
    return (
      (min == null || root.val > min.val) &&
      (max == null || root.val < max.val) &&
      isValidBST(root.left, min, root) &&
      isValidBST(root.right, root, max)
    );
  }
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
console.log(isValidBST(root));
