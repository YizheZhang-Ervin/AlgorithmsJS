// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
// 每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 
// 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。
// 但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
// 输入:5,10,10，输出:21

function movingCount(threshold, rows, cols)
{
    // 深度优先遍历
    let dfs = (r,c)=>{
        // 矩阵坐标转列表坐标
        let idx = r*cols+c;
        // 点超出矩阵范围，矩阵某值已访问，则返回0表示不能到达
        if(r<0||c<0||r>rows-1||c>cols-1||visited[idx]) return 0;
        // 把行列坐标的每一位相加
        // 点的个位十位和>threshold ->0
        let arr = r.toString().split("").map(Number)
                   .concat(c.toString().split("").map(Number));
        let sum = arr.reduce((total,cur)=>{
            return total+cur
        });
        // 如果相加值>限定值，则返回0表示不能到达
        if(sum>threshold) return 0;
        // 没超出threshold则设为点已访问
        visited[idx] = true;
        // 深度遍历当前节点的上下左右，看是否都可到达，然后统计总共可到格子数
        return 1+dfs(r+1,c)+dfs(r-1,c)+dfs(r,c+1)+dfs(r,c-1);
    }
    // 已访问列表
    let visited = [];
    // 从(0,0)进行深度优先遍历
    return dfs(0,0);
}

console.log(movingCount(5,10,10));
