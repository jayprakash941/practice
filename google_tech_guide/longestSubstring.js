// https://leetcode.com/explore/learn/card/hash-table/187/conclusion-hash-table/1135/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let max = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.get(s[i]) >= j) {
      j = i;
    }
    max = Math.max(max, i - j + 1);
    map.set(s[i], i);
  }
  return max;
};

console.log(lengthOfLongestSubstring('abcabcabcdefg'));
