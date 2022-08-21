/**
 * merge function
 */
const merge = (arr, left, mid, right) => {
  let leftLength = mid - left + 1;
  let rightLength = right - mid;
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < leftLength; i++) {
    leftArr.push(arr[left + i]);
  }
  for (let i = 0; i < rightLength; i++) {
    rightArr.push(arr[mid + 1 + i]);
  }
  let i = 0;
  let j = 0;
  let k = left;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }
  while (i < leftArr.length) {
    arr[k++] = leftArr[i++];
  }
  while (j < rightArr.length) {
    arr[k++] = rightArr[j++];
  }
};

/**
 * merge sort algorithm
 */
const mergeSort = (arr, left, right) => {
  if (left >= right) {
    return;
  }
  const mid = left + parseInt((right - left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
};

const sort = (arr) => {
  return mergeSort(arr, 0, arr.length - 1);
};

module.exports = {
  sort,
};
