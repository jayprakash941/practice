/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/find-element-appears-array-every-element-appears-twice/?ref=lbp
 *
 */
const assert = require('assert');

/**
 * XOR approach
 */
const arr = [1, 2, 1, 2, 3];

const findRepeatOnce = (arr) => {
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    c ^= arr[i];
  }
  return c;
};

function singleelement(arr, n) {
  let low = 0,
    high = n - 1;
  let mid;
  while (low <= high) {
    mid = (low + high) / 2;
    if (arr[mid] == arr[mid ^ 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return arr[low];
}
assert.equal(findRepeatOnce(arr), 3);

module.exports = {
  findRepeatOnce,
};
