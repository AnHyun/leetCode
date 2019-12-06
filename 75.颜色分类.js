/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // 插入排序 
    for (let i = 1; i < nums.length; i++) {
      let target = i;
      for (let j = i - 1; j >= 0; j--) {
        if (nums[target] < nums[j]) {
          [nums[target], nums[j]] = [nums[j], nums[target]]
          target = j
        } else {
          break;
        }
      }
    }
    return nums;

    // 选择排序
    // for (let i = 0; i < nums.length; i++) {
    //   let minIndex = i;
    //   for (let j = i + 1; j < nums.length; j++) {
    //     if (nums[j] < nums[minIndex]) {
    //       minIndex = j;
    //     }
    //   }
    //   [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]] 
    // }
    // return nums;
    
};
// @lc code=end

