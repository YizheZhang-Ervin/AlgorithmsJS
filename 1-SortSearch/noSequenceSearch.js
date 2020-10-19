// 无序列表查找

function noSeqSearch(arr,target){
    var lens = arr.length;
    for(let i=0;i<lens;i++){
        if(arr[i]==target){
            return i;
        }
    }
}

var arr001 = [5,3,2,6,7,8,1];
var target = 7;
var rst = noSeqSearch(arr001,target);
console.log(rst);