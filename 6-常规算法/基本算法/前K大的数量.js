// 找出数组中第k大的数组出现多少次
// 比如数组【1，2，4，4，3，5】第二大的数字是4，出现两次，
// 所以返回2(思路:对数组进行排序，找到第k大的数，然后看第k大的数有几个，返回)

function getKCount(arr, k) {
    // 出界判断
    if(k<1 || k>arr.length) return 0;
    // 数组排序->从大到小
    arr.sort((a, b) => (b - a));
    // 数组去重
    let uniqueArr = Array.from(new Set(arr));
    // k大于所有数组元素的大小排名
    if(k>uniqueArr.length) return 0;
    // 目标元素第一次出现
    let first = arr.indexOf(uniqueArr[k-1]);
    // 目标元素最后一次出现
    let last = arr.lastIndexOf(uniqueArr[k-1]);
    let counts = last-first+1;
    return counts;
}

let arr = [1, 2, 4, 4, 3, 5];
let arr2 = [];
// 第二大元素:4
console.log(getKCount(arr, 2));
// 空数组
console.log(getKCount(arr2, 2));
// 出下界
console.log(getKCount(arr, 0));
// 大于数组长度(一共只有6个数)
console.log(getKCount(arr, 7));
// 大于所有数组元素的大小排名(只有5个不同的数)
console.log(getKCount(arr, 6));
