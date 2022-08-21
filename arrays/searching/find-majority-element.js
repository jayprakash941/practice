/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/majority-element/?ref=lbp
 *
 */
const assert = require('assert');

const arr = [1, 3, 2, 2, 2];

/**
 * Using Moore's Voting algorithm
 */
const findMajority = (arr) => {
  let i = 0;
  let count = 1;
  let majorIndex = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[majorIndex] === arr[i]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      majorIndex = i;
      count = 1;
    }
  }
  count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[majorIndex]) {
      count++;
    }
  }
  if (count > parseInt(arr.length / 2)) {
    return arr[majorIndex];
  }
  return 0;
};

assert.equal(findMajority(arr), 2);
