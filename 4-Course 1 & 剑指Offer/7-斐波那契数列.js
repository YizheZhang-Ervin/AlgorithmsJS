// 大家都知道斐波那契数列，现在要求输入一个整数n，
// 请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
// n≤39

function fibonacci(n){
    if(n>-1 && n<2){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}

function fibonacci2(n){
    let n0=0,
        n1=1,
        temp;
    // 从n2开始循环f(n)=f(n-1)+f(n-2)
    for(let i=2;i<=n;i++){
        temp = n1;
        n1 = n0+n1;
        n0 = temp;
    }
    return n1;
}

console.log(fibonacci(3));
console.log(fibonacci2(3));