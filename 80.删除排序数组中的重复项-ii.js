/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let size = nums.length;
  if (size < 2) {
    return size;
  }
  let hash = {};
  for (let i = size - 1; i >= 0; i--) {
    let num = nums[i];
    !hash[num] ? hash[num] = 1 : hash[num]++;

    if (hash[num] > 2) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
// @lc code=end

