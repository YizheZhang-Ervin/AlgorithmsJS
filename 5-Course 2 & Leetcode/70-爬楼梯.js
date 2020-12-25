// 爬楼梯
// 每次可以爬1-2个台阶
// f(n)=f(n-1)+f(n-2)

var climbStairs = function(n){
    if(n<2){
        return 1;
    }
    // 用数组保存方法数
    // const dp = [1,1];   // 第n阶需要的方法数
    // for(let i=2;i<=n;i++){
    //     dp[i] = dp[i-1]+dp[i-2];
    // }
    // return dp[n]

    // 用两个变量保存方法数
    let dp0 = 1,dp1 = 1;
    for(let i=2;i<=n;i++){
        const temp = dp0;
        dp0 = dp1;
        dp1 = dp1+temp;
    }
    return dp1;
}

console.log(climbStairs(4));
