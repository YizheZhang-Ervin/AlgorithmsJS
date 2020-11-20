// 快速排序
//按中值分两半，两指针左指针比中值大的和右指针比中值小的交换，最后再中值和右指针互换

function quickSort(arr,left,right){
    if(left<right){
        let pivotIdx = partition(arr,left,right);
        console.log(pivotIdx)
        // 根据中值分两半的左半部分递归
        quickSort(arr,left,pivotIdx-1);
        // 根据中值分两半的右半部分递归
        quickSort(arr,pivotIdx+1,right);
    }
    return arr;
}

function partition(arr,left,right){
    // 第一个数设为中值
    let pivot = arr[left];
    // 左指针从第二个数开始
    let leftmark = left+1;
    // 右指针为末尾
    let rightmark = right;
    let done = false;
    while(!done){
        // 左指针位置处的值<=中值,左指针在右指针左边
        while(arr[leftmark]<=pivot && leftmark<=rightmark){
            leftmark++;
        }
        // 右指针位置处的值>=中值,左指针在右指针左左边
        while(arr[rightmark]>=pivot && leftmark<=rightmark){
            rightmark--;
        }
        // 左指针在右指针右边
        if(leftmark>rightmark){
            done = true
        }else{
            // 左边>中值的和右边<中值的两个值互换
            let t = arr[leftmark]
            arr[leftmark] = arr[rightmark];
            arr[rightmark] = t;
        }
    }
    // 右指针
    arr[left] = arr[rightmark];
    arr[rightmark] = pivot;
    // console.log('current:',arr)
    return rightmark;
}

function quickSort2(arr){
    let lens = arr.length;
    if(lens<=1){
        return arr;
    }
    // 找到基准值
    let pivot = Math.floor(lens/2);
    let pivotVal = arr.splice(pivot,1)[0];
    let left = [], right = [];
    for(var i=0;i<arr.length;i++){
        var current = arr[i];
        // 小于基准值加入左
        if(current<pivotVal){
            left.push(current);
        // 大于基准值加入右
        }else{
            right.push(current);
        }
    }
    // 左右分别快排再合并
    var sortedLeft = quickSort2(left);
    var sortedRight = quickSort2(right);
    var rst = sortedLeft.concat([pivotVal],sortedRight);
    return rst;
}

var arr001 = [54, 26, 93, 17, 77, 31, 44, 55, 20];
var arr002 = [8,7,6,5,4,3,2,1];
var rst = quickSort(arr001,0,arr001.length-1);
var rst2 = quickSort2(arr002);
console.log(rst);
console.log(rst2);