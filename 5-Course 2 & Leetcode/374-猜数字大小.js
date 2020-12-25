// 猜数字大小
// 二分搜索:分(计算中间元素分割数组)、解(递归地在较大/较小数组进行二分搜索)、合

var guess = function(guessNum){
    // 猜对
    if(guessNum==6){
        return 0;
    // 猜小了
    }else if(guessNum<6){
        return 1;
    // 猜大了
    }else if(guessNum>6){
        return -1;
    }
}

var guessNumber = function(n){
    const rec = (low,high)=>{
        if(low>high){
            return;
        }
        const mid = Math.floor((low+high)/2);
        const res = guess(mid);
        if(res===0){
            return mid;
        }else if(res===1){
            return rec(mid+1,high);
        }else{
            return rec(low,mid-1);
        }
    }
    return rec(1,n);
}

console.log(guessNumber(10));