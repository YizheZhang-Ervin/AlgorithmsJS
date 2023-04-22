// 给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。
// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
// 返回获得利润的最大值。
// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

// 输入：prices = [1, 3, 2, 8, 4, 9], fee = 2
// 输出：8

let maxProfit = (prices, fee) => {
    let trace = []
    let len = prices.length
    // 花费
    let cost = -prices[0]
    // 股份收益
    let profit = 0
    for (let i = 1; i < len; i++) {
        // 卖 = max(不操作，累计花费+当前价[卖出]-手续费)
        profit = Math.max(profit, cost + prices[i] - fee)
        // 买 = max(不操作，累计收益-当前价[买入])
        cost = Math.max(cost, profit - prices[i])
        trace.push({ profit, cost })
    }
    console.log(trace)
    return profit
}

// test =============
let res = maxProfit([1, 3, 2, 8, 4, 9], 2)
console.log(res)