/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let obj = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }
    for(let i = 0; i < s.length; i++) {
      obj[s[i]] < obj[s[i+1]] ? sum -= obj[s[i]] : sum += obj[s[i]]
    }
    return sum;
};

