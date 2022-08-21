// https://leetcode.com/explore/learn/card/hash-table/185/hash_table_design_the_key/1127/

var findDuplicateSubtrees = function (root) {
  const map = new Map();
  const res = [];
  dfs(root, map, res);
  return res;
};

function dfs(root, map, res) {
  if (!root) {
    return '';
  }
  let subTree = `${root.val},(${dfs(root.left, map, res)}),(${dfs(
    root.right,
    map,
    res
  )})`;
  map.set(subtree, (map.get(subtree) || 0) + 1);
  if (map[subTree] === 2) {
    res.push(root);
  }
  return subTree;
}

class Node {
  constructor() {
    this.left = null;
    this.right = null;
    this.val = 0;
  }
}

root = new Node();
root.val = 1;
root.left = new Node();
root.left.val = 2;
root.left.left = new Node();
root.left.left.val = 4;
root.right = new Node();
root.right.val = 3;
root.right.left = new Node();
root.right.left.val = 2;
root.right.left.left = new Node();
root.right.left.left.val = 4;
root.right.right = new Node();
root.right.right.val = 4;

// root = new Node();
// root.val = 2;
// root.left = new Node();
// root.left.val = 1;
// root.right = new Node();
// root.right.val = 1;

console.log(findDuplicateSubtrees(root));
