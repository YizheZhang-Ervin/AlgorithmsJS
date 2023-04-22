// 设计一个算法收集某些股票的每日报价，并返回该股票当日价格的 跨度 。
// 当日股票价格的 跨度 被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。
// 例如，如果未来 7 天股票的价格是 [100,80,60,70,60,75,85]，那么股票跨度将是 [1,1,1,2,1,4,6] 。
// StockSpanner() 初始化类对象。
// int next(int price) 给出今天的股价 price ，返回该股票当日价格的 跨度 。

// 输入：
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// 输出：
// [null, 1, 1, 1, 2, 1, 4, 6]

// 方法1
class StockSpanner {
    constructor() {
        this.priceArr = []
    }

    next(price) {
        this.priceArr.push(price)
        if (this.priceArr.length === 0) {
            return 1
        }
        let count = 0
        let flag
        for (let p of this.priceArr) {
            if (p <= price) {
                count++
                flag = true
            } else {
                count = 0
                flag = false
            }
        }
        return count;
    }
}

// 方法2：用栈，每次比较，小的就弹出，算跨度
class StockSpanner2 {
    constructor() {
        this.stack = [[-1, Number.MAX_SAFE_INTEGER]]
        this.idx = -1
    }

    next(price) {
        this.idx++
        // 循环判断栈里是否有小的，小的就弹出去
        // 当前价格>栈顶值
        while (price >= this.stack[this.stack.length - 1][1]) {
            this.stack.pop();
        }

        // 计算差值
        // 栈顶索引
        let topIdx = this.stack[this.stack.length - 1][0]
        let span = this.idx - topIdx
        // 当前价格入栈
        this.stack.push([this.idx, price])
        return span
    }
}

// test ============
let stockSpanner = new StockSpanner();
let res1 = stockSpanner.next(100); // 返回 1
let res2 = stockSpanner.next(80);  // 返回 1
let res3 = stockSpanner.next(60);  // 返回 1
let res4 = stockSpanner.next(70);  // 返回 2
let res5 = stockSpanner.next(60);  // 返回 1
let res6 = stockSpanner.next(75);  // 返回 4 ，因为截至今天的最后 4 个股价 (包括今天的股价 75) 都小于或等于今天的股价。
let res7 = stockSpanner.next(85);  // 返回 6
console.log(res1, res2, res3, res4, res5, res6, res7)

let stockSpanner2 = new StockSpanner2();
let ret1 = stockSpanner2.next(100); // 返回 1
let ret2 = stockSpanner2.next(80);  // 返回 1
let ret3 = stockSpanner2.next(60);  // 返回 1
let ret4 = stockSpanner2.next(70);  // 返回 2
let ret5 = stockSpanner2.next(60);  // 返回 1
let ret6 = stockSpanner2.next(75);  // 返回 4 ，因为截至今天的最后 4 个股价 (包括今天的股价 75) 都小于或等于今天的股价。
let ret7 = stockSpanner2.next(85);  // 返回 6
console.log(ret1, ret2, ret3, ret4, ret5, ret6, ret7)