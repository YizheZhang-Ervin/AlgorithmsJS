// 归并排序

function map(arr){
    var lens = arr.length;
    if(lens<1){
        return [];
    }
    if(lens==1){
        return arr;
    }
    // 左半，右半分别归并排序
    if(lens>1){
        let mid = Math.floor(lens / 2);
        let left = arr.slice(0,mid);
        let right = arr.slice(mid);
        let sortedLeft = map(left);
        let sortedRight = map(right);
        return reduce(sortedLeft,sortedRight);
    }
}

function reduce(left,right){
    var leftIdx=0,rightIdx=0,
    leftLens=left.length,rightLens=right.length,
    rst=[];
    // 拉链对比
    while(leftIdx<leftLens && rightIdx<rightLens){
        let leftVal = left[leftIdx];
        let rightVal = right[rightIdx];
        if(leftVal<rightVal){
            rst.push(leftVal);
            leftIdx++;
        }else{
            rst.push(rightVal);
            rightIdx++;
        }
    }
    while(leftIdx<leftLens){
        rst.push(left[leftIdx]);
        leftIdx++;
    }
    while(rightIdx<rightLens){
        rst.push(right[rightIdx]);
        rightIdx++;
    }
    return rst;
}

var arr001 = [8,7,6,5,4,3,2,1];
var rst = map(arr001);
console.log(rst);