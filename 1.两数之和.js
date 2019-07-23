/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
      let start = target - nums[i];
      let end = nums.indexOf(start, i+1);
      console.log(start)
      if (end !== -1) {
        return [i, end]; 
      }
    }
};

