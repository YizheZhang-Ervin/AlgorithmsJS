// 输入[2,1,5,6,2,3],输出10
// 时间O(n)，空间O(n)

let rect = function(heights){
    // 初始化最大面积maxs
    let n = heights.length,
    maxs = 0,
    stack = [];
    // 从头扫描数组
    for(let i=0;i<=n;i++){
        // 当前高度比堆栈顶端记录的高度矮，即可开始对堆栈顶端记录的高度计算面积了
        while(!stack.length==0 && (i==n || heights[i]<heights[stack[stack.length-1]])){
            let height = heights[stack.pop()];
            let width = stack.length==0?i:i-1-stack[stack.length-1];
            maxs = Math.max(maxs,width*height);
        }
        // 如果当前高度比堆栈顶端所记录的高度高，则压入堆栈
        stack.push(i);
    }
    return maxs;
}

console.log(rect([2,1,5,6,2,3]));