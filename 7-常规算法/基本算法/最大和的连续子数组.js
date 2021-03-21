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