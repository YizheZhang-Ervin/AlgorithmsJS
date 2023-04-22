// 给你一支股票价格的数据流。数据流中每一条记录包含一个 时间戳 和该时间点股票对应的 价格 。
// 不巧的是，由于股票市场内在的波动性，股票价格记录可能不是按时间顺序到来的。
// 某些情况下，有的记录可能是错的。
// 如果两个有相同时间戳的记录出现在数据流中，前一条记录视为错误记录，后出现的记录 更正 前一条错误的记录。

// 更新 股票在某一时间戳的股票价格，如果有之前同一时间戳的价格，这一操作将 更正 之前的错误价格
// 找到当前记录里 最新股票价格 。最新股票价格 定义为时间戳最晚的股票价格
// 找到当前记录里股票的 最高价格
// 找到当前记录里股票的 最低价格

// 输入：["StockPrice", "update", "update", "current", "maximum", "update", "maximum", "update", "minimum"]
//      [[], [1, 10], [2, 5], [], [], [1, 3], [], [4, 2], []]
// 输出：[null, null, null, 5, 10, null, 5, null, 2]

class StockPrice_Slow {
    constructor() {
        this.stockMap = new Map()
    }

    update(timestamp, price) {
        this.stockMap.set(timestamp, price)
    }

    current() {
        let curKey = Math.max(...Array.from(this.stockMap.keys()))
        return this.stockMap.get(curKey)
    }

    maximum() {
        return Math.max(...Array.from(this.stockMap.values()))
    }

    minimum() {
        return Math.min(...Array.from(this.stockMap.values()))
    }
}

class PriorityQueue {
    constructor(
        compare = (a, b) => a < b
    ) {
        this.data = []
        this.size = 0
        this.compare = compare
    }

    peek() {
        return this.size === 0 ? null : this.data[0]
    }

    offer(val) {
        this.data.push(val)
        this._shifUp(this.size++)
    }

    poll() {
        if (this.size === 0) { return null }
        this._swap(0, --this.size)
        this._shifDown(0)
        return this.data.pop()
    }

    _parent(index) {
        return index - 1 >> 1
    }

    _child(index) {
        return (index << 1) + 1
    }

    _shifDown(index) {
        while (this._child(index) < this.size) {
            let child = this._child(index)
            if (child + 1 < this.size
                && this.compare(this.data[child + 1], this.data[child])) {
                child = child + 1
            }
            if (this.compare(this.data[index], this.data[child])) {
                break
            }
            this._swap(index, child)
            index = child
        }
    }

    _shifUp(index) {
        while (this._parent(index) >= 0
            && this.compare(this.data[index], this.data[this._parent(index)])) {
            this._swap(index, this._parent(index))
            index = this._parent(index)
        }
    }

    _swap(a, b) {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
    }
}

class StockPrice {
    constructor() {
        this.maxTime = 0
        this.timeMap = new Map()
        this.maxPrice = new PriorityQueue((a, b) => a[0] - b[0] > 0)
        this.minPrice = new PriorityQueue((a, b) => a[0] - b[0] < 0)
    }

    update(timestamp, price) {
        // 更新最新时间
        this.maxTime = Math.max(timestamp, this.maxTime)
        // 设置{时间：价格}
        this.timeMap.set(timestamp, price)
        this.maxPrice.offer([price, timestamp])
        this.minPrice.offer([price, timestamp])
    }

    current() {
        return this.timeMap.get(this.maxTime)
    }

    maximum() {
        while (true) {
            // cur：[price,timestamp]
            const cur = this.maxPrice.peek()
            // timeMap: {timestamp:price}
            // map里取当前timestamp的值price === 当前price ，即最大价格存在的情况(没被覆盖)
            if (this.timeMap.get(cur[1]) === cur[0])
                return cur[0]
            this.maxPrice.poll()
        }
    }

    minimum() {
        while (true) {
            const cur = this.minPrice.peek()
            // map里取当前timestamp的值price === 当前price ，即最小价格存在的情况(没被覆盖)
            if (this.timeMap.get(cur[1]) === cur[0])
                return cur[0]
            this.minPrice.poll()
        }
    }
}

// 测试
// ["StockPrice", "update", "update", "current", "maximum", "update", "maximum", "update", "minimum"]
// [[], [1, 10], [2, 5], [], [], [1, 3], [], [4, 2], []]
let stockPrice = new StockPrice();
let res1 = stockPrice.update(1, 10); // 时间戳为 [1] ，对应的股票价格为 [10] 。
let res2 = stockPrice.update(2, 5);  // 时间戳为 [1,2] ，对应的股票价格为 [10,5] 。
let res3 = stockPrice.current();     // 返回 5 ，最新时间戳为 2 ，对应价格为 5 。
let res4 = stockPrice.maximum();     // 返回 10 ，最高价格的时间戳为 1 ，价格为 10 。
let res5 = stockPrice.update(1, 3);  // 之前时间戳为 1 的价格错误，价格更新为 3 。
// 时间戳为 [1,2] ，对应股票价格为 [3,5] 。
let res6 = stockPrice.maximum();     // 返回 5 ，更正后最高价格为 5 。
let res7 = stockPrice.update(4, 2);  // 时间戳为 [1,2,4] ，对应价格为 [3,5,2] 。
let res8 = stockPrice.minimum();     // 返回 2 ，最低价格时间戳为 4 ，价格为 2 。
console.log(res1, res2, res3, res4, res5, res6, res7, res8)