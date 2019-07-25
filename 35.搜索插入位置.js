/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    
    for (let i = 0; i < nums.length; i++) {
      if (target > nums[i] && target < nums[i+1]) {
        return i + 1;
      } else if (target === nums[i]) {
        return i;
      }
    }
};

