// 版本1
// 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。
// 求所有子数组的和的最大值。要求时间复杂度为 O(n).
// 输入的数组为{1,-2,3,10,-4,7,2,-5}，和最大的子数组为{3,10,-4,7,2}，因此输出为该子数组的和 18。 
// 输入:[1,-2,3,10,-4,7,2,-5]，输出:18

function findGreatestSumOfSubArray(array){
    // 前后两数加和sums,动态最大值maxValue
    let sums,
        maxValue = array[0];
    // 循环整个数组
    for(let i=1;i<array.length;i++){
        // 前后两数之和
        sums = array[i]+array[i-1];
        // 前后两数之和>当前数字，则当前数字位置被两数之和替代，反之不动
        array[i] = sums>array[i]?sums:array[i];
        // 每次遍历确定最大值
        maxValue = maxValue>array[i]?maxValue:array[i];
    }
    return maxValue;
}

console.log(findGreatestSumOfSubArray([1,-2,3,10,-4,7,2,-5]));

// 版本2
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。 
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4] 
// 输出：6 
// 解释：连续子数组 [4,-1,2,1] 的和最大为 6 

let maxSumArr = (arr) =>{
    let rst = [],
        lastNum = arr[0];
    for(let i of arr){
        if(i>i+lastNum){
            rst.push(i);
            lastNum = i;
        }else{
            rst.push(i+lastNum);
            lastNum = i+lastNum;
        }
    }
    return Math.max(...rst);
}

// test
let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSumArr(nums));