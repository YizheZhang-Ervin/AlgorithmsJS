// 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号
// 输入:1,2，输出:3

function add2Num(a,b){
    // 看是否有进位
    while(b){
        // 异或:个位相加
        let temp = a^b;
        // 与、左移:进位
        b = (a&b)<<1
        a = temp;
    }
    // 个位最终值为输出结果
    return a;
}

console.log(add2Num(1,2));