// 冒泡
// 98765->8765 9->765 89->65 789->5 6789
let bubbleSort = (arr)=>{
    // 每次把最大的放到最后
    for(let i=0;i<arr.length;i++){
        // 两两对比，大的置后
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
// 选择
// 98765->5876 9->567 89
let selectionSort = (arr) => {
    // 每次把最大和最后一个交换
    for(let i=0;i<arr.length;i++){
        // 选出最大,记索引
        let maxIdx = 0;
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[maxIdx]){
                maxIdx = j;
            }
        }
        [arr[arr.length-i-1],arr[maxIdx]] = [arr[maxIdx],arr[arr.length-i-1]];
    }
    return arr;
}
// 插入
// 98765->89 765->789 65->6789 5->56789
let insertionSort = (arr) => {
    // 在前部维护一个有序列表
    for(let i=1;i<arr.length;i++){
        let currentValue = arr[i];
        // 无序部分第一个数索引
        let seqMaxIdx = i;
        // 当前值和有序部分对比，有序部分比当前值大的都后移一格
        while(arr[seqMaxIdx-1]>currentValue && seqMaxIdx-1>=0){
            arr[seqMaxIdx] = arr[seqMaxIdx-1];
            seqMaxIdx--;
        }
        // 当前值插入合适位置
        arr[seqMaxIdx] = currentValue;
    }
    return arr;
}
// 希尔
// 98765->9和7(变78965)->8和6(变76985)->9和5(变76589)->7和5(变56789)
let shellSort = (arr) => {
    let gap = Math.floor(arr.length / 2);
    //  按间隔分为多个列表分别插入排序，再不断缩小间隔
    for(let i=gap;i>0;i=Math.floor(i/2)){
        // 插入排序
        for(let j=i;j<arr.length;j++){
            let currentValue = arr[j];
            let seqMaxIdx = j;
            while(currentValue<arr[seqMaxIdx-i] && seqMaxIdx-i>=0){
                arr[seqMaxIdx] = arr[seqMaxIdx-i];
                seqMaxIdx-=i;
            }
            arr[seqMaxIdx] = currentValue;
        }
    }
    return arr;
}
// 归并
// 98765->98 765->98 7 65->9 8 7 6 5->89 7 56->89 567->56789
let mergeSort = (arr) => {
    // 拆成左右两半
    let map = (arr)=>{
        if(arr.length==1){
            return arr;
        }
        let mid = Math.floor(arr.length/2);
        let leftArr = arr.slice(0,mid),
            rightArr = arr.slice(mid);
        return reduce(map(leftArr),map(rightArr));
    };
    // 左右两半合并
    let reduce = (leftArr,rightArr)=>{
        let rst =[],
            p1=0,
            p2=0;
        // 拉链对比
        while(p1<leftArr.length && p2<rightArr.length){
            if(leftArr[p1]>rightArr[p2]){
                rst.push(rightArr[p2]);
                p2++;
            }else if(leftArr[p1]<=rightArr[p2]){
                rst.push(leftArr[p1]);
                p1++;
            }
        }
        return rst.concat(leftArr.slice(p1),rightArr.slice(p2));
    };
    return map(arr);
}
// 快速
// 98765->基准7(变65和7和98)->基准6(变56)，基准7(不变)，基准9(变89)
let quickSort = (arr) => {
    // 拆成单个就不用再递归排序了
    if(arr.length<1){
        return arr;
    }
    // 左右子列表
    let leftArr = [],
        rightArr = [];
    // 中值作为基准值,并从列表删去基准值
    let midIdx = Math.floor(arr.length/2)
    let midVal = arr.splice(midIdx,1)[0];
    // 根据基准值分入左右列表
    arr.forEach(item=>{
        item>midVal?rightArr.push(item):leftArr.push(item);
    })
    // 递归快排
    return quickSort(leftArr).concat(midVal).concat(quickSort(rightArr));
}


console.log(bubbleSort([9,8,7,6,5]));
console.log(selectionSort([9,8,7,6,5]));
console.log(insertionSort([9,8,7,6,5]));
console.log(shellSort([9,8,7,6,5]));
console.log(mergeSort([9,8,7,6,5]));
console.log(quickSort([9,8,7,6,5]));
