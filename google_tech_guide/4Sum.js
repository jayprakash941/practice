// - https://leetcode.com/problems/4sum/

var twoSum = function (nums, target, low) {
  const map = new Map();
  const result = [];
  for (let i = low; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      result.push([map.get(diff), nums[i]]);
    }
    map.set(nums[i], nums[i]);
  }
  return result;
};

var kSum = function (nums, target, low, k) {
  let res = [];

  if (low === nums.length) {
    return res;
  }

  const avg = parseInt(target / k);
  if (nums[low] > avg || nums[nums.length - 1] < avg) {
    return res;
  }

  if (k === 2) {
    return twoSum(nums, target, low);
  }

  for (let i = low; i < nums.length; i++) {
    if (i === low || nums[i] !== nums[i - 1]) {
      kSum(nums, target - nums[i], i + 1, k - 1).forEach((r) => {
        res.push(r.concat(nums[i]));
      });
    }
  }

  return res;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort();
  return kSum(nums, target, 0, 4);
};

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

// console.log(fourSum(nums, target));

console.log(fourSum(nums, target, 0));
