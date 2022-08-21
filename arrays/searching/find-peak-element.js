/**
 * Solution for GeeksForGeeks - https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/?ref=lbp
 *
 */
const assert = require('assert');

const arr = [1, 3, 20, 4, 1, 0];

/**
 * Binary search approach for time complexity as O(log n)
 */
const findPeakElement = (arr, low, high) => {
  while (low <= high) {
    let mid = (low + high) >> 1;
    if (
      (mid === 0 || arr[mid - 1] <= arr[mid]) &&
      (mid === arr.length - 1 || arr[mid] >= arr[mid + 1])
    ) {
      return arr[mid];
    }
    if (arr[mid] > 0 && arr[mid] < arr[mid - 1]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};

console.log(findPeakElement(arr, 0, arr.length - 1));
