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

let fourSum = (nums, target) => {
  let n = nums.length;
  let res = [];
  if (n < 4) {
    return res;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= n - 4; i++) {
    let val = nums[i];
    if (i == 0 || nums[i] !== nums[i - 1]) {
      threeSum(nums, n, target - val, i + 1).forEach((r) => {
        res.push(r.concat(nums[i]));
      });
    }
  }
  return res;
};

let threeSum = (nums, n, target, index) => {
  let res = [];
  if (n - index < 3) return res;
  for (let i = index; i < n - 2; i++) {
    if (i == index || nums[i] !== nums[i - 1]) {
      let p1 = i + 1;
      let p2 = n - 1;
      let sum = -nums[i] + target;
      while (p1 < p2) {
        if (nums[p1] + nums[p2] === sum) {
          res.push([nums[i], nums[p1], nums[p2]]);
          while (p1 < p2 && nums[p1] === nums[p1 + 1]) p1++;
          while (p1 < p2 && nums[p2] === nums[p2 + 1]) p2--;
          p1++;
          p2--;
        } else if (nums[p1] + nums[p2] < sum) p1++;
        else p2--;
      }
    }
  }
  return res;
};

const nums = [0, 0, 0, 0];
const target = 0;
console.log(fourSum(nums, target));
