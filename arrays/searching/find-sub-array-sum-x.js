/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/find-subarray-with-given-sum-in-array-of-integers/
 *
 */
const assert = require('assert');

const arr = [10, 2, -2, -20, 10];

/**
 * Hash table approach
 */
const findSubArray = (arr, sum) => {
  let currSum = 0;
  let hash = {};
  let start = (end = -1);
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (currSum - sum === 0) {
      start = 0;
      end = i;
      break;
    }
    if (hash[currSum - sum]) {
      start = hash[currSum - sum] + 1;
      end = i;
      break;
    }
    hash[currSum] = i;
  }
  if (end === -1) {
    return void 0;
  }
  return [start, end];
};

assert.deepEqual(findSubArray(arr, -12), [2, 4]);
