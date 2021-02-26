// 输入n个整数，找出其中最小的K个数。
// 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4
// 输入:[4,5,1,6,2,7,3,8],4 ,输出:[1,2,3,4]

// 冒泡排序版
function GetLeastNumbers(input, k){
    let len = input.length;
    // 数组没有k长，返回空数组
    if(len<k){
        return [];
    }
    // 冒泡排序
    for(let i = 0;i<input.length;i++){
        for(let j = i+1;j<input.length;j++){
            if(input[i]>input[j]){
                [input[i],input[j]] = [input[j],input[i]];
            }
        }
    }
    // 返回前k个数
    let rst = input.slice(0,k);
    return rst;
}

console.log(GetLeastNumbers([4,5,1,6,2,7,3,8],4));

// 插入排序版
function GetLeastNumbers_Solution(input, k)
{
    let len = input.length;
    if(len<k){
        return [];
    }
    for(let i=0;i<k;i++){
        let minIdx = len-1;
        for(let j=i;j<len;j++){
            // 当前数<临时最小值，记录新最小值(当前数)索引
            if(input[j]<input[minIdx]){
                minIdx = j;
            }
        }
        // 最小数和最前数交换
        [input[i],input[minIdx]]=[input[minIdx],input[i]];
    }
    return input.slice(0,k);
}

console.log(GetLeastNumbers_Solution([4,5,1,6,2,7,3,8],4));