/*
 * @lc app=leetcode.cn id=991 lang=javascript
 *
 * [991] 坏了的计算器
 */

// @lc code=start
/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
  let ans = 0;
  while (Y > X) {
      ans++;
      if (Y % 2 == 1)
          Y++;
      else
          Y /= 2;
  }

  return ans + X - Y;

};
// @lc code=end

