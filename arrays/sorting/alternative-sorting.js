/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/alternative-sorting/?ref=lbp
 *
 */
const assert = require('assert');
const sort = require('../../algorithms/non_graph/merge-sort').sort;

const arr = [7, 1, 2, 3, 4, 5, 6];

const sortAlternative = (arr) => {
  sort(arr);
  let left = 0;
  let right = arr.length - 1;
  let newArr = [];
  while (left < right) {
    newArr.push(arr[right--]);
    newArr.push(arr[left++]);
  }
  if (arr.length % 2 !== 0) {
    newArr.push(arr[left]);
  }
  return newArr;
};

assert.deepEqual(sortAlternative(arr), [7, 1, 6, 2, 5, 3, 4]);
