// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 输入：prices = [3,3,5,0,0,3,1,4]
// 输出：6

// 动态规划
// dp[i][j]=x 二维数组【i天数,j状态,x钱】
// 状态：无操作0,首次买入1,首次卖出2,二次买入3,二次卖出4
// 买入后钱=-prices[i],卖出后钱=+prices[i]
let maxProfit = (prices) => {
    let len = prices.length
    // 全0矩阵
    let arr = new Array(len).fill(0).map(item => new Array(5).fill(0))
    // 初始值
    arr[0][1] = -prices[0]
    arr[0][3] = -prices[0]
    for (let i = 1; i < len; i++) {
        arr[i][0] = arr[i - 1][0]
        // 当天无操作(继承前一天状态)  vs  加上前一天(i)的上一个状态(j)
        arr[i][1] = Math.max(arr[i - 1][1], arr[i - 1][0] - prices[i])
        arr[i][2] = Math.max(arr[i - 1][2], arr[i - 1][1] + prices[i])
        arr[i][3] = Math.max(arr[i - 1][3], arr[i - 1][2] - prices[i])
        arr[i][4] = Math.max(arr[i - 1][4], arr[i - 1][3] + prices[i])
    }
    return arr[len - 1][4]
};

// test===================
let res = maxProfit([3, 3, 5, 0, 0, 3, 1, 4])
console.log(res)
let res2 = maxProfit([1, 2, 3, 4, 5])
console.log(res2)