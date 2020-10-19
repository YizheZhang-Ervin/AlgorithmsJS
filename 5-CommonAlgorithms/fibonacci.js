// 实现斐波那契序列 0、1、1、2、3、5、8、13、21、34

function fib(idx){
    var n1 = 0,
    n2 = 1,
    rst = [0,1];
    for(let i=2;i<idx;i++){
        tmp = n1;
        n1 = n2;
        n2 = tmp+n2;
        rst.push(n2);
    }
    return rst;
}

function fib2(n){
    if(n<0){
        return null;
    }
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    var rst = fib2(n-1)+fib2(n-2);
    return rst;
}

function useFib2(idx){
    var rst = [];
    for(let i=0;i<idx;i++){
        rst.push(fib2(i));
    }
    return rst;
}

var idx001 = 20;
var rst1 = fib(idx001)
var rst2 = useFib2(idx001)
console.log(rst1);
console.log(rst2);