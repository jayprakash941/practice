/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/sort-array-wave-form-2/?ref=lbp
 *
 */
const assert = require('assert');

const arr = [10, 90, 49, 2, 1, 5, 23];

const swap = (arr, src, dest) => {
  arr[src] += arr[dest];
  arr[dest] = arr[src] - arr[dest];
  arr[src] = arr[src] - arr[dest];
};

const sortWave = (arr) => {
  for (let i = 0; i < arr.length; i += 2) {
    if (i > 0 && arr[i] < arr[i - 1]) {
      swap(arr, i, i - 1);
    }
    if (i < arr.length - 1 && arr[i] < arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }
  return arr;
};

assert.deepEqual(sortWave(arr), [90, 10, 49, 1, 5, 2, 23]);
