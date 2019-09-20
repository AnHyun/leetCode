/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let moeny = 0;
    for (let price of prices) {
      buy = Math.min(buy, price);
      moeny = Math.max(moeny, price - buy);
    }
    return moeny;
};

