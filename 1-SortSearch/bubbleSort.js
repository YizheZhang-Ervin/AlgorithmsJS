// 冒泡排序
// 每次循环，大的往后排

function bubbleSort(arr){
    var lens = arr.length;
    for(let i=0;i<lens;i++){
        // 内部每次少循环一次，第一次(lens-1)次
        for(let j=0;j<lens-1-i;j++){
            if(arr[j]>arr[j+1]){
                t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;
            }
        }
    }
    return arr;
}

var arr001 = [8,7,6,5,4,3,2,1];
var rst = bubbleSort(arr001);
console.log(rst);