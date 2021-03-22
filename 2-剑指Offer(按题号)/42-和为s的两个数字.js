// 版本1
// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
// 如果有多对数字的和等于S，输出两个数的乘积最小的
// 对应每个测试案例，输出两个数，小的先输出。
// 输入:[1,2,4,7,11,15],15，输出:[4,11]

function sortResult(left, right, rst) {
    let rst2 = [left, right],
        mult1 = left * right,
        mult2 = rst[0] * rst[1];
    // 结果为空返回当前组合
    if (rst.length == 0) {
        return rst2;
    }
    // 返回乘积小的组合
    return mult1 > mult2 ? rst : rst2;
}

function findNumsWithSum(arr, sum) {
    // 头指针head，尾指针tail，结果集rst
    let head = 0,
        tail = arr.length - 1,
        rst = [];
    // 遍历数组
    while (head < tail) {
        // 头+尾<sum时，头指针+1
        if (arr[head] + arr[tail] < sum) {
            head++;
        }
        // 头+尾>sum时，尾指针-1
        if (arr[head] + arr[tail] > sum) {
            tail--;
        }
        // 头+尾==sum时，头指针+1，尾指针-1
        if (arr[head] + arr[tail] == sum) {
            // 选出最小的符合要求的组合
            rst = sortResult(arr[head], arr[tail], rst);
            head++;
            tail--;
        }
    }
    return rst;
}

console.log(findNumsWithSum([1, 2, 4, 7, 11, 15], 15));

// 版本2
// 从列表中找出和为n的两个数，原理、时间、空间复杂度

let sumArr = (arr,n)=>{
    let dict = new Map();
    for(let i of arr){
        dict.set(i,i);
        let diff = n-i;
        if(dict.has(diff)){
            return [i,diff];
        }
    }
    return [];
}

// test
console.log(sumArr([1,2,3,4,5],7));