/**
 *
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      res[1] = i;
      res[0] = map.get(diff);
      return res;
    }
    map.set(nums[i], i);
  }
  return res;
};
