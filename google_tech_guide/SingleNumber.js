// https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1176/

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];

const intersection = (nums1, nums2) => {
  let s = new Set([...nums1]);
  let result = [];
  for (let i = 0; i < nums2.length; i++) {
    if (s.has(nums2[i])) {
      result.push(nums2[i]);
      s.delete(nums2[i]);
    }
  }
  return result;
};

console.log(intersection(nums1, nums2));
