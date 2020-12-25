// 分饼干
// 一个小朋友最多一块饼干
// 输入: 3个小朋友胃口为123:[1,2,3]，和拥有2块饼干尺寸11:[1,1]
// 方法:局部最优:既能满足小朋友，又可以消耗最少->先将较小的饼干分给胃口最小的小朋友
// 对饼干数组和胃口数组升序排序，遍历饼干数组，找到能满足第一个孩子的饼干，然后继续遍历饼干，找到满足第n个孩子的饼干

var findContentChildren = function(g,s){
    const sortFunc = function(a,b){
        return a-b;
    }
    // 小朋友
    g.sort(sortFunc);
    // 饼干
    s.sort(sortFunc);
    // 遍历饼干找可以满足的小朋友
    let i = 0;
    s.forEach(n=>{
        if(n>=g[i]){
            i++;
        }
    });
    return i;
}

console.log(findContentChildren([1,2,3],[1,1]));