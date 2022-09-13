/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/?ref=lbp
 *
 */
const assert = require('assert');
const sort = require('../../algorithms/non_graph/merge-sort').sort;

/**
 * Sort with 2 pointers approach
 */
let arr = [0, -1, 2, -3, 1];

const findPair = (arr, x) => {
  sort(arr);
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === x) {
      break;
    }
    if (arr[i] + arr[j] < x) {
      i++;
    } else {
      j--;
    }
  }
  if (i === j) {
    return void 0;
  }
  return [arr[i], arr[j]];
};

assert.deepEqual(findPair(arr, -2), [-3, 1]);
assert.deepEqual(findPair(arr, -20), void 0);


///
