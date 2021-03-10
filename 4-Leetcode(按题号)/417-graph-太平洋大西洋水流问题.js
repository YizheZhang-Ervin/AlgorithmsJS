// 太平洋大西洋水流问题
// 方法:从海岸线逆流而上遍历图，所到之处就是流到某个大洋的坐标
// 深度遍历+走到的下一个值必须大于前一个值
// 建两个矩阵，分别记录能流到两个大洋的坐标
// 从海岸线多管齐下，同时深度遍历图，过程中填充矩阵
// 遍历两个矩阵，找出能流到两个大洋的坐标

var seas = function(matrix){
    if(!matrix || !matrix[0]){
        return [];
    }
    const m = matrix.length;
    const n = matrix[0].length;
    // m*n的矩阵，填充false
    const flow1 = Array.from({length:m},()=>new Array(n).fill(false));
    const flow2 = Array.from({length:m},()=>new Array(n).fill(false));
    const dfs = (r,c, flow) =>{
        flow[r][c] = true;
        // 上下左右
        [[r-1,c],[r+1,c],[r,c-1],[r,c+1]].forEach(([nr,nc])=>{
            // 保证在矩阵中，防止死循环，保证逆流而上
            if(nr>=0 && nr<m && nc>=0&& nc<n && !flow[nr][nc] && matrix[nr][nc]>=matrix[r][c]){
                dfs(nr,nc,flow)
            }
        })
    };
    // 沿着海岸线逆流而上
    for(let r=0;r<m;r+=1){
        // 第一列
        dfs(r,0,flow1);
        // 最后一列
        dfs(r,n-1,flow2);
    }
    for(let c=0;c<n;c+=1){
        dfs(0,c,flow1);
        dfs(m-1,c,flow2);
    }
    // 收集能流到两个大洋里的坐标
    const res = [];
    for(let r=0;r<m;r++){
        for(let c=0;c<n;c++){
            if(flow1[r][c]&&flow2[r][c]){
                res.push([r,c]);
            }
        }
    }
    return res;
}


let matrix001 = [
    [1,2,2,3,5],
    [3,2,3,4,4],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4]
];
console.log(seas(matrix001));