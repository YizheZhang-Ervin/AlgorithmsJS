// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
// 每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 
// 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。
// 但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
// 输入:5,10,10，输出:21

function movingCount(threshold, rows, cols){
    // 已遍历的格子visited
    let visited = [];
    for(let i=0;i<rows;i++){
        // 加入一行
        visited.push([]);
        for(let j=0;j<cols;j++){
            // 每行中的每列赋初值false表示未访问
            visited[i][j] = false;
        }
    }
    // 从(0,0)开始遍历
    return dfs(0, 0, rows, cols, visited, threshold);
}

function dfs(i, j, rows, cols, visited, threshold){
    // ij指针超出矩阵范围，矩阵某值已访问，则返回0表示不能到达
    if (i < 0 || i >= rows || j < 0 || j >= cols || visited[i][j]) {
        return 0;
    }
    // 把行列坐标的每一位相加
    let sum = parseInt(i.toString().split("").map(Number))+parseInt(j.toString().split("").map(Number));
    // 如果相加值>限定值，则返回0表示不能到达
    if (sum > threshold) {
        return 0;
    }
    // 此节点已访问
    visited[i][j] = true;
    // 向当前节点的上下左右分别深度遍历，看是否都可到达，然后统计总共可到格子数
    let counts = 1+dfs(i + 1, j, rows, cols, visited, threshold) + dfs(i, j + 1, rows, cols, visited, threshold) +
        dfs(i - 1, j, rows, cols, visited, threshold) + dfs(i, j - 1, rows, cols, visited, threshold)
    return counts;
}

console.log(movingCount(5,10,10));