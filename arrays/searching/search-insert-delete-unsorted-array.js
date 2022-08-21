/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/search-insert-and-delete-in-an-unsorted-array/?ref=lbp
 *
 */
const assert = require('assert');

/**
 * Search
 */
const searchArr = [4, 2, 3, 1];

const search = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

assert.equal(search(searchArr, 4), 0);
assert.equal(search(searchArr, 5), -1);

/**
 * Insert
 */
const insertArr = [4, 2, 3, 1];

const insert = (arr, val, pos) => {
  if (pos > arr.length - 1) {
    return false;
  }
  arr[pos] = val;
  return true;
};

assert.equal(insert(insertArr, 5, 3), true);
assert.equal(insert(insertArr, 5, 4), false);

/**
 * Delete
 */
const deleteArr = [4, 2, 3, 1];

const del = (arr, pos) => {
  if (pos > arr.length - 1) {
    return false;
  }
  let i = pos;
  for (; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[i] = void 0;
  return true;
};

assert.equal(del(deleteArr, 1), true);
assert.equal(del(deleteArr, 4), false);

module.exports = {
  del,
  insert,
  search,
};
