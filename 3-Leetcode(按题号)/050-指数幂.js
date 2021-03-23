// 指数幂

let powXN = (x,n) =>{
    let recur = (x,n)=>{
        if(n==1){
            return x;
        }
        // 偶数次幂
        if(n%2==0){
            let rst = recur(x,n/2);
            return rst*rst;
        // 奇数次幂
        }else{
            let rst = recur(x,Math.floor(n/2));
            return rst*rst*x;
        }
    }

    // 幂
    if(n>0){
        return recur(x,n);
    }
    else if(n===0){
        return 1;
    }
    else if(n<0){
        return 1/recur(x,-n);
    }
}

// test
console.log(powXN(2,3));
console.log(powXN(2,-3));
console.log(powXN(2,0));