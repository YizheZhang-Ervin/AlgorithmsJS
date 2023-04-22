// 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 输入：k = 2, prices = [2,4,1]
// 输出：2

// 方法1：二维数组
let maxProfit = (k, prices) => {
    let len = prices.length
    // 全0矩阵
    let arr = new Array(len).fill(0).map(item => new Array(2 * k + 1).fill(0))
    // 初始值
    for (let temp = 1; temp <= k; temp++) {
        arr[0][2 * temp - 1] = -prices[0]
    }
    for (let i = 1; i < len; i++) {
        arr[i][0] = arr[i - 1][0]
        // 当天无操作(继承前一天状态)  vs  加上前一天(i)的上一个状态(j)
        for (let temp = 1; temp <= k; temp++) {
            arr[i][2 * temp - 1] = Math.max(arr[i - 1][2 * temp - 1], arr[i - 1][2 * temp - 2] - prices[i])
            arr[i][2 * temp] = Math.max(arr[i - 1][2 * temp], arr[i - 1][2 * temp - 1] + prices[i])
        }
    }
    console.log(arr)
    return arr[len - 1][2 * k]
}

// 方法2
const maxProfit2 = function (k, prices) {
    // 每次交易最低花费
    let costLis = new Array(k + 1).fill(prices[0])
    // 每次交易最大利润
    let profitLis = new Array(k + 1).fill(0)

    for (let p of prices) {
        for (let i = 1; i <= k; i++) {
            // min(当前花费，当前价格-上次利润)
            costLis[i] = Math.min(costLis[i], p - profitLis[i - 1])
            // max(当前利润，当前价格-当前开销)
            profitLis[i] = Math.max(profitLis[i], p - costLis[i])
        }
    }
    return profitLis[profitLis.length - 1]
};

// test ==================
let res = maxProfit(2, [2, 4, 1])
console.log(res)
let res2 = maxProfit(1, [1, 2])
console.log(res2)

let res3 = maxProfit2(2, [2, 4, 1])
console.log(res3)
let res4 = maxProfit2(1, [1, 2])
console.log(res4)