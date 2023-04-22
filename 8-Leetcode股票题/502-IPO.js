// 假设 力扣（LeetCode）即将开始 IPO 。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。 
// 由于资源有限，它只能在 IPO 之前完成最多 k 个不同的项目。帮助 力扣 设计完成最多 k 个不同项目后得到最大总资本的方式。
// 给你 n 个项目。对于每个项目 i ，它都有一个纯利润 profits[i] ，和启动该项目需要的最小资本 capital[i] 。
// 最初，你的资本为 w 。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。
// 总而言之，从给定项目中选择 最多 k 个不同项目的列表，以 最大化最终资本 ，并输出最终可获得的最多资本。
// 答案保证在 32 位有符号整数范围内。

// 输入：k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
// 输出：4

let findMaximizedCapital = (k, w, profits, capital) => {
    // 成本和利润组成对应数组，然后按成本排序
    let profitsCapitalSort = capital.map((item, index) => {
        return [item, profits[index]]
    }).sort((a, b) => a[0] - b[0])

    let cur = 0
    // 最大堆
    let pq = new Maxheap()

    // k次投资
    for (j = 0; j < k; j++) {
        // 每次遍历一遍所有可投资项目
        for (let i = cur; i < profitsCapitalSort.length; i++) {
            // 成本>当前资金
            if (profitsCapitalSort[i][0] > w) break
            // 如果可以投资，下次就不会再有这个项目
            cur++
            // 入队列
            pq.enqueue(profitsCapitalSort[i][1], profitsCapitalSort[i][1])
        }
        // 没有可以投资的项目，就返回当前资金
        if (pq.data.length === 0) return w
        // 此项目出队列
        let maxVal = pq.dequeue()
        // 有可以投资的项目就投资项目并取出资金
        w += maxVal
    }

    return w
};

class Maxheap {
    constructor() {
        this.data = [];
    }

    enqueue(val) {
        var curPosition = this.data.length;
        this.data[curPosition] = val;
        this.adjust_insert(curPosition);
        return true;
    }

    dequeue() {
        if (!this.data.length) return null;
        var max = this.data[0];
        if (this.data.length > 1) {
            this.data[0] = this.data.pop();
        } else {
            this.data.pop();
        }
        this.adjust_remove();
        return max;
    }

    adjust_insert(curPosition) {
        var parentIndex = (curPosition - 1) >> 1;
        while (curPosition > 0) {
            if (this.data[curPosition] <= this.data[parentIndex]) {
                break;
            } else {
                [this.data[curPosition], this.data[parentIndex]] = [
                    this.data[parentIndex],
                    this.data[curPosition],
                ];
                curPosition = parentIndex;
                parentIndex = (curPosition - 1) >> 1;
            }
        }
    }

    adjust_remove() {
        var leftNodeIndex = 1;
        var rightNodeIndex = 2;
        var curPosition =
            this.data[rightNodeIndex] &&
                this.data[leftNodeIndex] < this.data[rightNodeIndex]
                ? rightNodeIndex
                : leftNodeIndex;
        var parentIndex = (curPosition - 1) >> 1;
        while (curPosition < this.data.length) {
            if (this.data[curPosition] <= this.data[parentIndex]) {
                break;
            } else {
                [this.data[curPosition], this.data[parentIndex]] = [
                    this.data[parentIndex],
                    this.data[curPosition],
                ];
                leftNodeIndex = (curPosition + 1) * 2 - 1;
                rightNodeIndex = (curPosition + 1) * 2;
                curPosition =
                    this.data[leftNodeIndex] > this.data[rightNodeIndex]
                        ? leftNodeIndex
                        : rightNodeIndex;
                parentIndex = (curPosition - 1) >> 1;
            }
        }
    }

    print() {
        console.log(this.data);
    }
}

// test=================
let res = findMaximizedCapital(k = 2, w = 0, profits = [1, 2, 3], capital = [0, 1, 1])
console.log(res)

let res2 = findMaximizedCapital(k = 3, w = 0, profits = [1, 2, 3], capital = [0, 1, 2])
console.log(res2)
