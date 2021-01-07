// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
// 输入:4，输出:5

function jumpFloor(num){
    // num=1时有一种跳法，num=2时有两种跳法
    if(num>0 && num<3){
        return num;
    }
    // num从3开始，f(n)=f(n-1)+f(n-2)
    return jumpFloor(num-1)+jumpFloor(num-2);
}

console.log(jumpFloor(4));
