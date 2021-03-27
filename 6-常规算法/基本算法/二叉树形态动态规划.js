// 以任一节点为根，假设左子树有 x 个节点，那么右子树则有 n−x−1 颗节点，
// 设 n 颗节点的二叉树有 f(n)种形态，定义 f(0)=1，则有递推关系：
// f(n)=​f(x)*f(n−x−1)

let treeForm = (n) =>{
    // 存放各个可能数量的节点的二叉树形态数
    let dp =[1,1];
    // 每个可能数量的节点都遍历一次
    for (let i=2;i<=n;i++){
        // 当前数目节点的初始值
        dp[i]=0;
        // 公式累加 f(n)=​f(x)*f(n−x−1)
        // 总共节点数为i时的左右形态的个数
        for (let j=0;j<i;j++){
            dp[i] = dp[i]+ dp[j] * dp[i - j - 1];
        }
    }
    return dp;
}

console.log(treeForm(5));