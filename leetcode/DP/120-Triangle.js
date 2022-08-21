/**
 * Solution for leetcode - https://leetcode.com/problems/triangle/
 */
const assert = require('assert');

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

/**
 * Bottom up approach with space complexity as O(n) where n is number of rows in triangle
 */
const minimumTotal = function (triangle) {
  var v = triangle[triangle.length - 1];
  for (var i = triangle.length - 2; i >= 0; i--) {
    for (var j = 0; j < i + 1; j++) {
      v[j] = triangle[i][j] + Math.min(v[j], v[j + 1]);
    }
  }
  return v[0];
};

assert.deepEqual(minimumTotal(triangle), 11);
