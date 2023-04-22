// 给你一个二维整数数组 stockPrices ，其中 stockPrices[i] = [dayi, pricei] 表示股票在 dayi 的价格为 pricei 。
// 折线图 是一个二维平面上的若干个点组成的图，横坐标表示日期，纵坐标表示价格，折线图由相邻的点连接而成。
// 请你返回要表示一个折线图所需要的 最少线段数 。

// 输入：stockPrices = [[1,7],[2,6],[3,5],[4,4],[5,4],[6,3],[7,2],[8,1]]
// 输出：3

// 方法1
let minimumLines = (stockPrices) => {
    if (stockPrices.length == 1) return 0
    stockPrices = stockPrices.sort((a, b) => { return a[0] - b[0] })
    // 第一个斜率
    let dy = stockPrices[1][1] - stockPrices[1 - 1][1]
    let dx = stockPrices[1][0] - stockPrices[1 - 1][0]
    let firstg = gcd(dx, dy)
    const firstk = `${dy / firstg}/${dx / firstg}`
    // 上一个斜率
    let lastK = firstk
    let res = 0
    for (let i = 2; i < stockPrices.length; i++) {
        dy = stockPrices[i][1] - stockPrices[i - 1][1]
        dx = stockPrices[i][0] - stockPrices[i - 1][0]
        let g = gcd(dx, dy)
        const k = `${dy / g}/${dx / g}`
        if (k !== lastK) {
            lastK = k
            res++
        }

    }
    // 最后一个点收尾，加一段
    res++
    return res
};

// 辗转相除法
let gcd = (a, b) => {
    if (b !== 0) {
        return gcd(b, a % b);
    }
    return a;
}

// 方法2：BigInt做斜率乘法
let minimumLines2 = (stockPrices) => {
    // 这句貌似不用
    if (!stockPrices || stockPrices.length == 0) return 0;

    let ans = 0;
    let slop = [1, 0]; // 斜率，初始除数设为0，被除数随意

    // 题目中给出的点位无序，先按天排序 O(nlogn)
    stockPrices.sort((a, b) => a[0] - b[0]);

    let prev = 0, next = 1; // 双指针，遍历数组 O(n)

    while (next < stockPrices.length) {
        let [di, pi] = stockPrices[prev];
        let [dj, pj] = stockPrices[next];

        let temp = [(pj - pi), (dj - di)];

        // 很多人会卡在这里，用除法会丢失精度，用乘法会越界，c语言中还比较好处理，js里面现在有bigint，试了一下，可以通过
        if (BigInt(temp[1]) * BigInt(slop[0]) != BigInt(temp[0]) * BigInt(slop[1])) {
            ans++;
            slop = temp;
        }
        next++;
        prev++;
    }

    return ans;
};

// test ============
let res = minimumLines([[1, 7], [2, 6], [3, 5], [4, 4], [5, 4], [6, 3], [7, 2], [8, 1]])
console.log(res)

let res2 = minimumLines([[72, 98], [62, 27], [32, 7], [71, 4], [25, 19], [91, 30], [52, 73], [10, 9], [99, 71], [47, 22], [19, 30], [80, 63], [18, 15], [48, 17], [77, 16], [46, 27], [66, 87], [55, 84], [65, 38], [30, 9], [50, 42], [100, 60], [75, 73], [98, 53], [22, 80], [41, 61], [37, 47], [95, 8], [51, 81], [78, 79], [57, 95]])
console.log(res2)

let res3 = minimumLines([[1, 1], [500000000, 499999999], [1000000000, 999999998]])
console.log(res3)