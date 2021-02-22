// 还原已知字母的顺序
// 输入["wrt","wrf","er","ett","rftt"]->输出"wertf"
// 输入["z","x","z"]->输出""
// 输入["z","x"]->输出"zx"

let order = function(arr){
    // 输入为空
    if(arr==null || arr.length==0){
        return null;
    }
    // 输入仅一个字符串
    if(arr.length==1){
        return arr[0];
    }
    // 构建有向图邻接链表
    let adjList = new Map();
    // 两两比较字符串
    // 对每个出现的字母都创建一个图里的顶点
    // 一旦发现两字母不同就链接这两个顶点
    // found表示一旦出现不同字母，只要处理好这两个字母或顶点关系，之后字母不用考虑
    for(let i=0;i<arr.length-1;i++){
        let w1 = arr[i],
        w2 = arr[i+1],
        n1 = w1.length,
        n2 = w2.length,
        found = false;

        for(let j=0;j<Math.max(w1.length,w2.length);j++){
            // 获取字符串中第j个字母
            let c1 = (j<n1)?w1[j]:null;
            let c2 = (j<n2)?w2[j]:null;
            if(c1!==null && !adjList.has(c1)){
                adjList.set(c1,[]);
            }
            if(c2!==null && !adjList.has(c2)){
                adjList.set(c2,[]);
            }
            if(c1!==null && c2!==null && c1!=c2 && !found){
                adjList.get(c1).push(c2);
                found = true;
            }
        }
    }
    // 拓扑排序
    // stack记录顶点顺序，最后stack倒序输出
    let visited = new Set(),
    loop = new Set(),
    stack = [];
    for(let k of adjList.keys()){
        if(!visited.has(k)){
            if(!tpSort(adjList,k,visited,loop,stack)){
                return "";
            }
        }
    }
    let sb = [];
    while(!(stack.length==0)){
        sb.push(stack.pop());
    }
    return sb.toString();

}

// 深度优先拓扑排序
let tpSort = function(adjList,u,visited,loop,stack){
    // visited已访问集合
    visited.add(u);
    // loop防止有向图出现环
    loop.add(u);
    if(adjList.has(u)){
        // 逐个访问与顶点u相邻的其他顶点v
        for(let i=0;i<adjList.get(u).length;i++){
            let v = adjList.get(u)[i];
            // 如果v被访问过说明有环出现
            if(loop.has(v)){
                return false;
            }
            // 如果v没被访问就递归访问
            if(!visited.has(v)){
                // 如果访问v时发现了环
                if(!tpSort(adjList,v,visited,loop,stack)){
                    return false;
                }
            }
        }
    }
    // 从顶点u出发，访问完毕所有能访问的点，把u从loop中删除，并u加入堆栈
    loop.delete(u);
    stack.push(u);
    return true;
}

console.log(order(["wrt","wrf","er","ett","rftt"]));