/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/find-repetitive-element-1-n-1/?ref=lbp
 *
 */
const assert = require('assert');

/**
 * XOR approach
 */
const arr = [2, 3, 4, 5, 1, 2];

const findRepeatingElement = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    result ^= (i + 1) ^ arr[i];
  }
  result ^= arr[arr.length - 1];
  return result;
};

assert.equal(findRepeatingElement(arr), 2);

/**
 * Linked list cycle approach using 2 pointers
 */
const arrLL = [2, 3, 4, 5, 1, 2];

const findRepeatatingElementLL = (arr) => {
  let slow = arr[0];
  let fast = arr[0];

  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while (slow !== fast);

  fast = arr[0];

  while (fast !== slow) {
    slow = arr[slow];
    fast = arr[fast];
  }
  return slow;
};

assert.equal(findRepeatatingElementLL(arrLL), 2);

module.exports = {
  findRepeatingElement,
  findRepeatingElementLL,
};
