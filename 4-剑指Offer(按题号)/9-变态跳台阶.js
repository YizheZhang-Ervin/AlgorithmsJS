// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
// 输入:3，输出:4

function jumpFloorII(number){
    if(number<2){
        return 1
    }
    // 2*f(n-1)
    return jumpFloorII(number-1)*2;
}

console.log(jumpFloorII(3));