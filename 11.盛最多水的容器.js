/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxNumber = 0;
    for(let i = 0; i < height.length; i++) {
      for(let j = i + 1; j < height.length; j++) {
        let left = Math.min(height[i],height[j]);
        let right = j - i;
        if (left * right > maxNumber) {
          maxNumber = left * right;
        }
      }
    }
    return maxNumber;
};
// @lc code=end

