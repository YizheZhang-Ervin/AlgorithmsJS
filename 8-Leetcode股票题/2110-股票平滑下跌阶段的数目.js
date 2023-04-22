// 给你一个整数数组 prices ，表示一支股票的历史每日股价，其中 prices[i] 是这支股票第 i 天的价格。
// 一个 平滑下降的阶段 定义为：对于 连续一天或者多天 ，每日股价都比 前一日股价恰好少 1 ，这个阶段第一天的股价没有限制。
// 请你返回 平滑下降阶段 的数目。

// 输入：prices = [3,2,1,4]
// 输出：7
// 解释：总共有 7 个平滑下降阶段：
// [3], [2], [1], [4], [3,2], [2,1] 和 [3,2,1]
// 注意，仅一天按照定义也是平滑下降阶段。

let getDescentPeriods = (prices) => {
    let len = prices.length
    // 初始第一个值为一个平滑下降阶段
    let count = 1
    // 自身为一个平滑下降阶段
    let prev = 1
    for (let i = 1; i < len; i++) {
        // 如果连着，新增的阶段个数=连续的个数
        if (prices[i - 1] - prices[i] === 1) {
            prev++
        } else {
            prev = 1
        }
        count += prev
    }
    return count
};

// test============
let res = getDescentPeriods([3, 2, 1, 4])  // 7
console.log(res)
let res2 = getDescentPeriods([12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 4, 3, 10, 9, 8, 7])  // 68
console.log(res2)