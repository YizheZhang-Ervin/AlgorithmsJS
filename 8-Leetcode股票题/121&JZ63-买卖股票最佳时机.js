// 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
// 0 <= 数组长度 <= 10^5
// [7,1,5,3,6,4] => 5
// [7,6,4,3,1] => 0
// 思路：遍历一次，依次计算当下最大利润和最低价

let cmpProfit = (arr) => {
    let maxProfit = 0
    let minPrice = Number.MAX_SAFE_INTEGER
    for (let price of arr) {
        // 利润 = 当天价-最低价
        maxProfit = Math.max(maxProfit, price - minPrice)
        minPrice = Math.min(minPrice, price)
    }
    return maxProfit
}

let res1 = cmpProfit([7, 1, 5, 3, 6, 4])
let res2 = cmpProfit([7, 6, 4, 3, 1])

console.log(res1, res2, res1 == 5, res2 == 0)