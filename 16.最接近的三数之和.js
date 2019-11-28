/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let init = nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let start = i + 1, end = nums.length - 1;
    while(start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (Math.abs(target - sum) < Math.abs(target - init)) {
        init = sum
      }

      if (sum < target) {
        start++;
      } else if (sum > target) {
        end--;
      } else {
        return init
      }
      
    }
  }
  return init
};
// @lc code=end

