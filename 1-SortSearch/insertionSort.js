// 插入排序

function insertionSort(arr){
    var lens = arr.length;
    for(let i=1;i<lens;i++){
        pos = i;
        currentValue = arr[i];
        // 当前值小于已排序部分，则大于当前值的已排序部分依次向后移一格
        while(pos-1>=0 && currentValue<arr[pos-1]){
            arr[pos] = arr[pos-1];
            pos--;
        }
        // 把当前值插入合适的已排序部分中，使再次有序
        arr[pos] = currentValue
    }
    return arr;
}

var arr001 = [8,7,6,5,4,3,2,1];
var rst = insertionSort(arr001);
console.log(rst);