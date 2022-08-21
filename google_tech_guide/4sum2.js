// https://leetcode.com/explore/learn/card/hash-table/187/conclusion-hash-table/1134/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let map = new Map();
  let count = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      let r = nums1[i] + nums2[j];
      map.set(r, (map.get(r) || 0) + 1);
    }
  }
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      let r = 0 - (nums3[i] + nums4[j]);
      if (map.get(r)) {
        count += map.get(r);
      }
    }
  }
  return count;
};

const nums1 = [1, 2];
const nums2 = [-2, -1];
const nums3 = [-1, 2];
const nums4 = [0, 2];
console.log(fourSumCount(nums1, nums2, nums3, nums4));
