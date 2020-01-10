/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let len = bits.length
  if (len == 1) return true

  let i = 0
  while(i < len - 1) {
    i += bits[i] + 1
  }
  return i == len - 1
};
// @lc code=end

