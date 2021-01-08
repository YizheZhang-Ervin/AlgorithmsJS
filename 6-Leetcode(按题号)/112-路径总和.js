// 路径总和
// 判断是否存在根到叶子的路径节点值相加等于目标和
// 深度优先遍历,记录当前路径的节点值的和，在叶子节点处判断当前路径节点值的和是否等于目标值

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

var hasPathSum = function(root,sum){
    if(!root){
        return false;
    }
    let res = false;
    const dfs = (n,s)=>{
        if(!n.left && !n.right && s===sum){
            res = true;
            return res;
        }
        if(n.left){
            dfs(n.left,s+n.left.val);
        }
        if(n.right){
            dfs(n.right,s+n.right.val);
        }
    };
    dfs(root,root.val);
    return res;
}

console.log(hasPathSum(binaryTree,3));