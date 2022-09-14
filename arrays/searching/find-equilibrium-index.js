/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/find-element-appears-array-every-element-appears-twice/?ref=lbp
 *
 * 
 Find Pivot Index
 */
const assert = require('assert');

const arr = [-7, 1, 5, 2, -4, 3, 0];

/**
 * 2 pointers/binary search approach
 */
const findEquilibriumIndex = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  let lSum = 0;
  let rSum = 0;
  let index = (r + l) / 2;
  while (l < r - 1) {
    lSum += arr[l++];
    rSum += arr[r--];
  }
  if (lSum < rSum) {
    r++;
    while (r < arr.length && lSum < rSum) {
      lSum += arr[l++];
      rSum -= arr[r++];
    }
    index = l;
  }
  if (lSum > rSum) {
    l--;
    while (l >= 0 && lSum > rSum) {
      lSum -= arr[l--];
      rSum += arr[r--];
    }
    index = r;
  }
  if (lSum === rSum) {
    return index;
  }
  return -1;
};

assert.equal(findEquilibriumIndex(arr), 3);

/**
 * Tricky and efficient approach
 */
const findEquilibriumIndex2 = (arr) => {
  let sum = (newSum = 0);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
    if (newSum === sum) {
      return i;
    }
    newSum += arr[i];
  }
  return -1;
};

assert.equal(findEquilibriumIndex2(arr), 3);
