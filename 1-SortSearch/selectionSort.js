// 选择排序

function selectionSort(arr){
    var lens = arr.length;
    // 每次把最大的放在最后
    for(let i=lens-1;i>0;i--){
        pos = 0
        // 比较还未排序的部分
        for(let j=0;j<i+1;j++){
            if(arr[j]>arr[pos]){
                pos = j;
            }
        }
        // 最大的(pos)和最后的(i)交换
        t = arr[i];
        arr[i] = arr[pos];
        arr[pos] = t;
    }
    return arr;
}

var arr001 = [8,7,6,5,4,3,2,1];
var rst = selectionSort(arr001);
console.log(rst);