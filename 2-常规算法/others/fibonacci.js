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

function fib3(n){
    if(n<=1) return n;
    let arr = [0,1];
    // 要构建的总项数(项是0~n-1共n-1-0+1项，已创建两项所以是n-1-0+1-2)
    let i = n - 2;
    while(i>0){
        let a = arr[arr.length-2],
        b = arr[arr.length-1];
        arr.push(a+b);
        i--;
    }
    return arr[arr.length-1];
}

function fib4(count){
    function fn(count,curr=0,next=1){
        if(count==0){
            return curr;
        }else{
            return fn(count-1,next,curr+next);
        }
    }
    // 要第n个，就加n-1次
    return fn(count-1);
}

var idx001 = 20;
var rst1 = fib(idx001)
var rst2 = useFib2(idx001)
var rst3 = fib3(idx001);
var rst4 = fib4(idx001);
console.log(rst1);
console.log(rst2);
console.log(rst3);
console.log(rst4);