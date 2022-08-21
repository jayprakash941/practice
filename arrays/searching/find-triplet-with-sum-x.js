/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/?ref=lbp
 */
const assert = require('assert');

const arr = [12, 3, 4, 1, 6, 9];

/**
 * 2 pointers technique based implementation
 */
const findTripletUsing2Pointers = (arr, sum) => {
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const total = arr[left] + arr[right] + arr[i];
      if (total === sum) {
        return [arr[i], arr[left], arr[right]];
      }
      if (total < sum) {
        left++;
      } else {
        right++;
      }
    }
  }
  return 0;
};

assert.deepEqual(findTripletUsing2Pointers(arr, 24), [12, 3, 9]);
assert.deepEqual(findTripletUsing2Pointers(arr, 34), 0);

/**
 * Hash based implementation
 */
const findTripletUsingHash = (arr, sum) => {
  for (let i = 0; i < arr.length - 2; i++) {
    let hash = new Set();
    let total = sum - arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (hash.has(total - arr[j])) {
        return [arr[i], total - arr[j], arr[j]];
      }
      hash.add(arr[j]);
    }
  }
  return 0;
};

assert.deepEqual(findTripletUsingHash(arr, 24), [12, 3, 9]);
assert.deepEqual(findTripletUsingHash(arr, 34), 0);
