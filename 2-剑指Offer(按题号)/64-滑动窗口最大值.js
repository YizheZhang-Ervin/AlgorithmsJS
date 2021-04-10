// 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
// 例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，
// 那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 
// 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： 
// {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， 
// {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
// 窗口大于数组长度的时候，返回空
// 输入:[2,3,4,2,6,2,5,1],3，输出:[4,4,6,6,6,5]

function maxInWindows(num, size){
    // 窗口为0或者窗口比数组长，返回空
    if(size==0 || size>num.length) return [];
    // 窗口左指针left，窗口右指针right，输入数组长度len，结果数组rst
    let left = 0,
        right = left+size-1,
        len = num.length,
        rst = [Math.max(...num.slice(0,size))];
    // 滑动窗口右端到达输入数组末尾
    while(right<=len-2){
        // 移动滑动窗口
        left++;
        right++;
        // 如果左边移出的数不等于上个窗口最大值
        if(num[left-1]!=rst[rst.length-1]){
            // 如果右边移入的数>上个窗口最大值，右边移入的数作为最大值加入rst
            if(num[right]>rst[rst.length-1]){
                rst.push(num[right]);
            // 如果右边移入的数<=上个窗口最大值，上个窗口最大值加入rst
            }else{
                rst.push(rst[rst.length-1]);
            }
        // 如果左边移出的数等于上个窗口最大值，重新求区间内的最大值
        }else{
            rst.push(Math.max(...num.slice(left,right+1)));
        }
    }
    return rst;
}

console.log(maxInWindows([2,3,4,2,6,2,5,1],3));

function maxInWindows2(arr, size){
    let left = 0,
        right = size-1,
        tempMax = Math.max(...arr.slice(left,right+1)),
        result = [tempMax];
    while(right<arr.length-1){
        // 因为要先+1，所以right不能超过总长-1
        left++;
        right++;
        if(arr[left-1]!=tempMax){
            tempMax = tempMax>arr[right]?tempMax:arr[right];
        }else{
            tempMax = Math.max(...arr.slice(left,right+1));
        }
        result.push(tempMax);
    }
    return result;
}
console.log(maxInWindows2([2,3,4,2,6,2,5,1],3));