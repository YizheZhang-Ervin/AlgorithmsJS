// 有序列表查找

function seqSearch(arr,target){
    var lens = arr.length;
    for(let i=0;i<lens;i++){
        if(arr[i]==target){
            return i;
        }
        // 提前结束:目标小于已查询的最大值，说明后面不会再有直接结束
        if(target<arr[i]){
            return -1;
        }
    }
}

// 二分查找O(logn)

function binarySearch(arr,target){
    var lens = arr.length,
    left = 0,
    right = lens-1;
    while(left<=right){
        // 向下取整
        mid = Math.floor((left+right)/2);
        if(target==arr[mid]){
            return mid;
        }else if(target>arr[mid]){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return -1;
}


var arr001 = [1,2,3,4,5,6,7,8];
var target = 7;
var rst = seqSearch(arr001,target);
var rst2 = binarySearch(arr001,target);
console.log(rst);
console.log(rst2);