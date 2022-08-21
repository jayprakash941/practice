/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/search-insert-and-delete-in-a-sorted-array/?ref=lbp
 *
 */
const assert = require('assert');

/**
 * Search
 */
const sortedSearchArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (arr, low, high, val) => {
  if (low > high) {
    return void 0;
  }
  const mid = Math.trunc((low + high) / 2);
  if (arr[mid] === val) {
    return mid;
  }
  if (val < arr[mid]) {
    return binarySearch(arr, low, mid - 1, val);
  }
  return binarySearch(arr, mid + 1, high, val);
};

assert.equal(binarySearch(sortedSearchArr, 0, sortedSearchArr.length, 8), 7);
assert.equal(
  binarySearch(sortedSearchArr, 0, sortedSearchArr.length, 11),
  void 0
);

/**
 * Insert
 */
const sortedInsertArr = [1, 2, 3, 4, 5, 6, 7, 9, 10];

const insert = (arr, val) => {
  let i = arr.length - 1;
  for (; i >= 0 && val < arr[i]; i--) {
    arr[i + 1] = arr[i];
  }
  arr[i + 1] = val;
  return i + 1;
};

assert.equal(insert(sortedInsertArr, 8), 7);

/**
 * Delete
 */
const sortedDeleteArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const del = (arr, val) => {
  let i = binarySearch(arr, 0, arr.length, val);
  if (i === void 0) {
    return false;
  }
  for (; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  return true;
};

assert.equal(del(sortedDeleteArr, 8), true);
assert.equal(del(sortedDeleteArr, 8), false);

module.exports = {
  del,
  insert,
  binarySearch,
};
