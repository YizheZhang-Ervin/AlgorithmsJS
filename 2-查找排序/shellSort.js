// 谢尔排序
// 按间隔分为多个列表分别排序，再不断缩小间隔

function shellSort(arr,optimize){
    if(optimize){
        // 间隔根据数组长度改变
        var lens = arr.length,
        gap = 1;
        while(gap<Math.floor(lens/3)){
            gap = gap*3+1;
        }
        for(let i=gap;i>0;i=Math.floor(i/3)){
            insertionSort(arr,i,lens)
        }
        return arr;
    }else{
        // 间隔为数组长度的一半
        var lens = arr.length,
        gap = Math.floor(lens / 2);
        // 每次间隔缩小一半
        for(let i=gap;i>0;i=Math.floor(i/2)){
            insertionSort(arr,i,lens)
            console.log(arr);
        }
        return arr;
    }
    
}

function insertionSort(arr,gap,lens){
    for(let i=gap;i<lens;i++){
        let pos = i;
        let currentValue = arr[pos];
        // 当前值小于已排序部分，则大于当前值的已排序部分依次向后移gap格
        while(pos-gap >= 0 && currentValue < arr[pos-gap]) {
            arr[pos] = arr[pos-gap];
            pos -= gap;
        }
        // 把当前值插入合适的已排序部分中，使再次有序
        arr[pos] = currentValue;
    }
}

var arr001 = [8,7,6,5,4,3,2,1];
var rst = shellSort(arr001,false);
console.log(rst);