// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
// 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
// 如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。
// 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，
// 因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
// 输入: "ABCESFCSADEE",3,4,"ABCCED"，输出: true
// 输入: "ABCESFCSADEE",3,4,"ABCB"，输出: false

function hasPath( matrix ,  rows ,  cols ,  str ) {
    // 深度优先遍历
    let dfs = (r,c,depth)=>{
        // 矩阵行列转为字符串索引号
        let idx = r*cols+c;
        // 点超出矩阵、路径某值!=矩阵某值、矩阵某值已访问->false
        if(r<0||c<0||r>rows-1||c>cols-1||str[depth]!=matrix[idx]||record[idx]==true) return false;
        // 整个路径都找到->true
        if(depth==str.length-1) return true;
        // 路径某个中间节点设为已访问
        record[idx] = true;
        // 对当前节点的四个方向遍历，有一个通->true
        if(dfs(r+1,c,depth+1)||dfs(r-1,c,depth+1)
           ||dfs(r,c+1,depth+1)||dfs(r,c-1,depth+1)) return true;
        // 路径不通，节点设为未访问
        record[idx] = false;
        // 其他情况->false
        return false;
    }
    // 矩阵空、行空、列空、路径>矩阵总长、路径空 -> false
    if(!matrix||!rows||!cols||str.length>matrix.length||str.length==0) return false;
    // 记录点是否可通
    let record = Array.from({length:matrix.length}).fill(0);
    // let record = matrix.split("");
    // 遍历矩阵，对每个点都深度优先遍历,如果路径存在->true
    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(dfs(r,c,0)) return true;
        }
    }
    // 其他情况->false
    return false;
}

console.log(hasPath("ABCESFCSADEE",3,4,"ABCCED"));
console.log(hasPath("ABCESFCSADEE",3,4,"ABCB"));