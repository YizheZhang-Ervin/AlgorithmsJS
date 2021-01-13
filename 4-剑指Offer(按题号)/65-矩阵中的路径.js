// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
// 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
// 如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。
// 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，
// 因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
// 输入: "ABCESFCSADEE",3,4,"ABCCED"，输出: true
// 输入: "ABCESFCSADEE",3,4,"ABCB"，输出: false

function hasPath(matrix, rows, cols, path){
    // 矩阵空，行空，列空，矩阵大小<路径长度，路径为0，则返回false
    if(!matrix || !rows || !cols || rows*cols < path.length || path.length == 0){
        return false;
    }
    // 字符串变矩阵数组
    let mat = matrix.split("");
    // 矩阵中所有点都可能是起点
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(dfs(matrix, i, j, rows, cols, mat, path, 0)){
                return true;
            }
        }
    }
    return false;
}

function dfs(matrix, i, j, rows, cols, mat, path, k){
    // 矩阵在一维数组中的索引号
    let index = i*cols+j+1-1;
    // ij指针超出矩阵范围，路径某值不等于矩阵某值，矩阵某值已访问，则返回false
    if(i < 0 || j < 0 || i>=rows || j>=cols || path[k] != matrix[index] || mat[index]==true){
        return false;
    }
    // 当整个路径都找到时，返回true
    if(k == path.length - 1){
        return true;
    }
    // 设当前节点已访问
    mat[index] = true;
    // 在当前节点的四个方向上深度遍历,只要有一个方向可通，就返回true
    if(dfs(matrix,i-1,j,rows,cols,mat,path,k+1) || dfs(matrix,i+1,j,rows,cols,mat,path,k+1)||
        dfs(matrix,i,j-1,rows,cols,mat,path,k+1) || dfs(matrix,i,j+1,rows,cols,mat,path,k+1)
    ){
        return true;
    }
    // 路不通则当前节点设为未访问
    mat[index] = false;
    // 其他情况返回false
    return false;
}

console.log(hasPath("ABCESFCSADEE",3,4,"ABCCED"));
console.log(hasPath("ABCESFCSADEE",3,4,"ABCB"));