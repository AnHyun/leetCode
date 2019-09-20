/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let maxLen = nums.length / 2;
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (obj[key]) {
      obj[key]++
    } else {
      obj[key] = 1
    }
    if (obj[key] > maxLen) {
      return key;
    }
  }
  return obj[key]
};

