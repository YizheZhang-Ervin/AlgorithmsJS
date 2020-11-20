// 二叉树最大深度
// 使用深度优先遍历，记录每个节点层级，找出最大层级
const binaryTree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

var maxDepth = function(root){
    let res = 0;
    const dfs = (n,level)=>{
        if(!n){
            return;
        }
        // 只在叶子节点刷新最大深度
        if(!n.left && !n.right){
            res = Math.max(res,level);
        }
        dfs(n.left,level+1);
        dfs(n.right,level+1);
    };
    dfs(root,1);
    return res;
};

console.log(maxDepth(binaryTree));