// 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​
// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 输入: prices = [1,2,3,0,2]
// 输出: 3 

let maxProfit = (prices) => {
    let len = prices.length
    let cost = -prices[0]
    let profit = 0
    let lastProfit = 0
    // 第二个价格~最后一个价格
    for (let i = 1; i < len; i++) {
        let temp = profit
        // 卖 = max(不动，花费+当前价格)
        profit = Math.max(profit, cost + prices[i])
        // 买 = max(不动，冻结前收益-当前价格)
        cost = Math.max(cost, lastProfit - prices[i])
        lastProfit = temp
    }
    return profit
};

// test==========
let res = maxProfit([1, 2, 3, 0, 2])
console.log(res)