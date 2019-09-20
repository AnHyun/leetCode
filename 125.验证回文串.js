/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toUpperCase();
  let s1 = s.replace(/[^0-9A-Z]/g, '')
  let s2 = s1.split('').reverse().join('')
  return s1 === s2
};

