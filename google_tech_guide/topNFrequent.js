// - https://leetcode.com/explore/learn/card/hash-table/187/conclusion-hash-table/1133/
/**
 *
 * Quick Sort Approach
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var map = new Map();
  var list = [];

  for (var i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for ([key, val] of map) {
    list.push(key);
  }

  select(map, list, 0, 0, list.length - 1, list.length - k);

  return list.slice(list.length - k);
};

var partition = function (map, list, pivot, low, high) {
  swap(list, pivot, high);

  var storeIndex = low;

  for (var i = low; i <= high; i++) {
    if (map.get(list[i]) <= map.get(list[high])) {
      swap(list, storeIndex, i);
      storeIndex++;
    }
  }

  swap(storeIndex, high);

  return storeIndex;
};

var select = function (map, list, pivot, low, high, nK) {
  if (low === high) {
    return;
  }
  pivot = partition(map, list, pivot, low, high);

  if (pivot == nK) {
    return pivot;
  }

  if (nK > pivot) {
    return select(map, list, pivot + 1, pivot + 1, high, nK);
  }

  if (nK < pivot) {
    return select(map, list, low, low, pivot - 1, nK);
  }
};

var swap = function (nums, i, j) {
  var temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

var nums = [1, 1, 1, 2, 2, 3];
var k = 2;

console.log(topKFrequent(nums, k));

/**
 * PriorityQueue approach
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent1 = function (nums, k) {
  var map = new Map();
  var priorityQueue = new PriorityQueue(nums.length);

  for (var i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for ([key, val] of map) {
    priorityQueue.insert(key, map);
    if (priorityQueue.size() > k) {
      priorityQueue.extract();
    }
  }

  return priorityQueue.heap.slice(0, priorityQueue.heapSize);
};

class PriorityQueue {
  constructor(size) {
    this.heapSize = 0;
    this.heap = Array(size);
  }

  parent(i) {
    return parseInt((i - 1) / 2);
  }

  left(i) {
    return i * 2 + 1;
  }

  right(i) {
    return i * 2 + 2;
  }

  insert(v, map) {
    this.heap[this.heapSize] = v;
    let i = this.heapSize;
    while (i != 0 && map.get(v) < map.get(this.heap[this.parent(i)])) {
      swap(this.heap, i, this.parent(i));
      i = this.parent(i);
    }
    this.heapSize++;
  }

  extract() {
    let v = this.heap[0];
    this.heap[0] = this.heap[this.heapSize - 1];
    this.heapSize--;
    this.heapify(0);
    return v;
  }

  heapify(i) {
    let l = this.left(i);
    let r = this.right(i);
    let smallest = i;
    if (l < this.heapSize && this.heap[l] < this.heap[i]) {
      smallest = l;
    }
    if (r < this.heapSize && this.heap[r] < this.heap[smallest]) {
      smallest = r;
    }
    if (smallest != i) {
      swap(this.heap, smallest, i);
      this.heapify(smallest);
    }
  }

  size() {
    return this.heapSize;
  }

  print() {
    console.log(this.heap.slice(0, this.heapSize));
  }
}

var nums1 = [1, 1, 1, 2, 2, 3];
var k1 = 2;

console.log(topKFrequent1(nums1, k1));
