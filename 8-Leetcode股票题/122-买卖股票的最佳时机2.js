// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
// 返回 你能获得的最大利润 。

// 输入：prices = [7, 1, 5, 3, 6, 4]
// 输出：7

// 贪心算法，每步最优
let maxProfit = (prices) => {
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        profit += Math.max(0, prices[i] - prices[i - 1])
    }
    return profit
};

const maxProfit2 = function (prices) {
    let n = prices.length;
    let sell = 0;
    let buy = -prices[0];
    for (let i = 1; i < n; i++) {
        sell = Math.max(sell, buy + prices[i]);
        buy = Math.max(buy, sell - prices[i]);
    }
    return sell;
};

// test
let res = maxProfit([7, 1, 5, 3, 6, 4])
console.log(res)
let res2 = maxProfit2([7, 1, 5, 3, 6, 4])
console.log(res2)