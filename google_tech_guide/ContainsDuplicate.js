// https://leetcode.com/explore/learn/card/hash-table/184/comparison-with-other-data-structures/1121/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    if (i > k) {
      delete hash[nums[i - k - 1]];
    }
    if (hash[nums[i]]) {
      return true;
    }
    hash[nums[i]] = i;
  }
  return false;
};

var nums = [1, 2, 3, 1, 2, 3];
var k = 2;
console.log(containsNearbyDuplicate(nums, k));
