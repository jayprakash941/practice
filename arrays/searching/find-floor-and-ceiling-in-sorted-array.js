/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/?ref=lbp
 *
 */
const assert = require('assert');

const arr = [1, 2, 8, 10, 10, 12, 19, 20, 21, 22, 24];

const findFloorAndCeiling = (arr, x, low, high) => {
  let mid;
  while (low <= high) {
    mid = parseInt((low + high) / 2);
    if (arr[mid] === x) {
      return [arr[mid - 1], arr[mid]];
    }
    if (x < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return [arr[high], arr[low]];
};

assert.deepEqual(findFloorAndCeiling(arr, 11, 0, arr.length - 1), [10, 12]);
