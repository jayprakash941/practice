//https://leetcode.com/problems/path-sum-iii/

var count = 0;
var pathSum = function (root, targetSum) {
  if (root === null) {
    return 0;
  }
  let map = new Map();
  map.set(0, 1);
  traversal(root, 0, map, targetSum);
  return count;
};

let traversal = (root, sum, map, ts) => {
  if (root === null) {
    return;
  }

  sum += root.val;
  if (map.has(sum - ts)) {
    count += map.get(sum - ts);
  }
  map.set(sum, (map.get(sum) || 0) + 1);
  traversal(root.left, sum, map, ts);
  traversal(root.right, sum, map, ts);
  map.set(sum, (map.get(sum) || 0) - 1);

  return;
};
